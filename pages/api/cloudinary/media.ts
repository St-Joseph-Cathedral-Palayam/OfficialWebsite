import { NextApiRequest, NextApiResponse } from 'next';
import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export interface MediaItem {
    id: string;
    publicId: string;
    url: string;
    secureUrl: string;
    type: 'image' | 'video';
    format: string;
    width: number;
    height: number;
    bytes: number;
    createdAt: string;
    thumbnail?: string;
}

/** Convert a Cloudinary public_id to a browser-safe URL (handles HEIC/HEIF) */
function toBrowserSafeUrl(publicId: string, resourceType: 'image' | 'video' = 'image'): string {
    return cloudinary.url(publicId, {
        resource_type: resourceType,
        fetch_format: 'auto',
        quality: 'auto',
        secure: true,
    });
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { folder: queryFolder } = req.query;
        const folder = (queryFolder as string) || process.env.CLOUDINARY_FOLDER || 'church-gallery';

        // Helper: try folder prefix first, fall back to all root resources
        const fetchResources = async (resourceType: 'image' | 'video') => {
            const withPrefix = await cloudinary.api.resources({
                type: 'upload',
                prefix: folder + '/',
                max_results: 500,
                resource_type: resourceType,
            });

            if (withPrefix.resources.length > 0) {
                return withPrefix.resources;
            }

            // Folder is empty — images were uploaded to root, fetch all
            const atRoot = await cloudinary.api.resources({
                type: 'upload',
                max_results: 500,
                resource_type: resourceType,
            });

            return atRoot.resources;
        };

        const [rawImages, rawVideos] = await Promise.all([
            fetchResources('image'),
            fetchResources('video'),
        ]);

        const images: MediaItem[] = rawImages.map((resource: any) => ({
            id: resource.asset_id,
            publicId: resource.public_id,
            url: resource.url,
            // Use fetch_format:auto to convert HEIC/HEIF to JPEG/WebP for browsers
            secureUrl: toBrowserSafeUrl(resource.public_id, 'image'),
            type: 'image' as const,
            format: resource.format,
            width: resource.width,
            height: resource.height,
            bytes: resource.bytes,
            createdAt: resource.created_at,
        }));

        const videos: MediaItem[] = rawVideos.map((resource: any) => ({
            id: resource.asset_id,
            publicId: resource.public_id,
            url: resource.url,
            secureUrl: toBrowserSafeUrl(resource.public_id, 'video'),
            type: 'video' as const,
            format: resource.format,
            width: resource.width,
            height: resource.height,
            bytes: resource.bytes,
            createdAt: resource.created_at,
            thumbnail: cloudinary.url(resource.public_id, {
                resource_type: 'video',
                format: 'jpg',
                transformation: [{ width: 400, height: 300, crop: 'fill' }],
                secure: true,
            }),
        }));

        // Combine and sort by creation date (newest first)
        const allMedia = [...images, ...videos].sort(
            (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );

        res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=600');

        return res.status(200).json({
            success: true,
            count: allMedia.length,
            media: allMedia,
        });
    } catch (error: any) {
        console.error('Cloudinary API Error:', error);
        return res.status(500).json({
            success: false,
            error: 'Failed to fetch media from Cloudinary',
            message: error.message,
        });
    }
}

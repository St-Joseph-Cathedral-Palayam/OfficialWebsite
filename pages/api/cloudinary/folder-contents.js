        // API route to fetch images by asset_folder (Cloudinary's UI folder structure)
import { cloudinaryConfig } from "../../../config/cloudinary";

export default async function handler(req, res) {
  const { folder } = req.query;

  if (!folder) {
    return res.status(400).json({ error: "Folder name is required" });
  }

  try {
    const { cloudName, apiKey, apiSecret } = cloudinaryConfig;

    // Use the by_asset_folder endpoint which works with Cloudinary's folder structure
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/resources/by_asset_folder`;

    const params = new URLSearchParams({
      asset_folder: folder,
      max_results: 500,
    });

    const auth =
      typeof Buffer !== "undefined"
        ? Buffer.from(`${apiKey}:${apiSecret}`).toString("base64")
        : btoa(`${apiKey}:${apiSecret}`);

    const response = await fetch(`${url}?${params}`, {
      headers: {
        Authorization: `Basic ${auth}`,
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Cloudinary API error response:", errorText);
      return res.status(response.status).json({
        error: `Cloudinary API error: ${response.status}`,
        details: errorText,
      });
    }

    const data = await response.json();

    // Transform the response
    const resources = data.resources.map((resource) => ({
      publicId: resource.public_id,
      url: resource.secure_url,
      width: resource.width,
      height: resource.height,
      format: resource.format,
      resourceType: resource.resource_type,
      createdAt: resource.created_at,
      assetFolder: resource.asset_folder,
      // Generate optimized versions
      thumbnail:
        resource.resource_type === "video"
          ? `https://res.cloudinary.com/${cloudName}/video/upload/w_300,h_300,c_fill,so_0/${resource.public_id}.jpg`
          : `https://res.cloudinary.com/${cloudName}/image/upload/w_300,h_300,c_fill/${resource.public_id}`,
      optimized:
        resource.resource_type === "video"
          ? `https://res.cloudinary.com/${cloudName}/video/upload/f_auto,q_auto/${resource.public_id}`
          : `https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto/${resource.public_id}`,
    }));

    console.log(`Found ${resources.length} resources in folder: ${folder}`);
    res.status(200).json({ images: resources });
  } catch (error) {
    console.error("Error in Cloudinary folder contents API route:", error);
    res.status(500).json({
      error: error.message,
      details: error.toString(),
    });
  }
}

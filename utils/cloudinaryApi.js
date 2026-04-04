// Utility to fetch images and videos from Cloudinary API
import { cloudinaryConfig } from "../config/cloudinary";

export async function getCloudinaryImagesByFolder(folderName) {
  try {
    const { cloudName, apiKey, apiSecret } = cloudinaryConfig;

    // Fetch both images and videos
    const [imagesData, videosData] = await Promise.all([
      fetchResourcesByFolder(cloudName, apiKey, apiSecret, folderName, "image"),
      fetchResourcesByFolder(cloudName, apiKey, apiSecret, folderName, "video"),
    ]);

    // Combine and return both
    return [...imagesData, ...videosData];
  } catch (error) {
    console.error("Error fetching Cloudinary resources:", error);
    throw error;
  }
}

async function fetchResourcesByFolder(
  cloudName,
  apiKey,
  apiSecret,
  folderName,
  resourceType,
) {
  try {
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/resources/${resourceType}/upload`;

    const params = new URLSearchParams({
      prefix: folderName,
      max_results: 500,
    });

    // Create base64 auth
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
      console.error(`Cloudinary API error for ${resourceType}:`, errorText);
      // Don't throw error, just return empty array if resource type not found
      return [];
    }

    const data = await response.json();

    // Transform the response
    return data.resources.map((resource) => ({
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
        resourceType === "video"
          ? `https://res.cloudinary.com/${cloudName}/video/upload/w_300,h_300,c_fill,so_0/${resource.public_id}.jpg`
          : `https://res.cloudinary.com/${cloudName}/image/upload/w_300,h_300,c_fill/${resource.public_id}`,
      optimized:
        resourceType === "video"
          ? `https://res.cloudinary.com/${cloudName}/video/upload/f_auto,q_auto/${resource.public_id}`
          : `https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto/${resource.public_id}`,
    }));
  } catch (error) {
    console.error(`Error fetching ${resourceType}:`, error);
    return [];
  }
}

export async function getAllCloudinaryFolders() {
  try {
    const { cloudName, apiKey, apiSecret } = cloudinaryConfig;

    const url = `https://api.cloudinary.com/v1_1/${cloudName}/folders`;

    // Create base64 auth - works in both Node.js and browser
    const auth =
      typeof Buffer !== "undefined"
        ? Buffer.from(`${apiKey}:${apiSecret}`).toString("base64")
        : btoa(`${apiKey}:${apiSecret}`);

    const response = await fetch(url, {
      headers: {
        Authorization: `Basic ${auth}`,
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Cloudinary API error response:", errorText);
      throw new Error(
        `Cloudinary API error: ${response.status} ${response.statusText}`,
      );
    }

    const data = await response.json();
    return data.folders;
  } catch (error) {
    console.error("Error fetching Cloudinary folders:", error);
    throw error;
  }
}

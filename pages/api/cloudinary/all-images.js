// API route to fetch ALL images from Cloudinary (for debugging)
import { cloudinaryConfig } from "../../../config/cloudinary";

export default async function handler(req, res) {
  try {
    const { cloudName, apiKey, apiSecret } = cloudinaryConfig;

    const url = `https://api.cloudinary.com/v1_1/${cloudName}/resources/image`;

    const params = new URLSearchParams({
      type: "upload",
      max_results: 100, // Get first 100 images
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
      throw new Error(
        `Cloudinary API error: ${response.status} ${response.statusText}`,
      );
    }

    const data = await response.json();

    // Return just the public IDs and folders for debugging
    const imageInfo = data.resources.map((img) => ({
      public_id: img.public_id,
      folder: img.folder || "(root)",
      asset_folder: img.asset_folder || "(none)",
      url: img.secure_url,
    }));

    res.status(200).json({
      total: data.resources.length,
      images: imageInfo,
    });
  } catch (error) {
    console.error("Error fetching all Cloudinary images:", error);
    res.status(500).json({
      error: error.message,
      details: error.toString(),
    });
  }
}

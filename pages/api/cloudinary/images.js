// API route to fetch images from Cloudinary by folder name
import { getCloudinaryImagesByFolder } from "../../../utils/cloudinaryApi";

export default async function handler(req, res) {
  const { folder } = req.query;

  if (!folder) {
    return res.status(400).json({ error: "Folder name is required" });
  }

  try {
    console.log("Fetching images from Cloudinary folder:", folder);
    const images = await getCloudinaryImagesByFolder(folder);
    console.log("Successfully fetched", images.length, "images");
    res.status(200).json({ images });
  } catch (error) {
    console.error("Error in Cloudinary API route:", error);
    res.status(500).json({
      error: error.message,
      details: error.toString(),
    });
  }
}

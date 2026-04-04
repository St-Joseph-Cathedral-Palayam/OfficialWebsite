// API route to fetch all folders from Cloudinary
import { getAllCloudinaryFolders } from "../../../utils/cloudinaryApi";

export default async function handler(req, res) {
  try {
    const folders = await getAllCloudinaryFolders();
    res.status(200).json({ folders });
  } catch (error) {
    console.error("Error in Cloudinary folders API route:", error);
    res.status(500).json({ error: error.message });
  }
}

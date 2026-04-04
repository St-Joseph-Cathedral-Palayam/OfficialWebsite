import { useState } from "react";
import Head from "next/head";
import CloudinaryGallery from "../components/CloudinaryGallery";
import styles from "../styles/Gallery.module.css";

export default function CloudinaryGalleryPage() {
  const [folderName, setFolderName] = useState("palayam palli");

  return (
    <>
      <Head>
        <title>Cloudinary Gallery - St. Joseph's Cathedral</title>
      </Head>

      <div
        style={{ padding: "40px 20px", maxWidth: "1400px", margin: "0 auto" }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
          Cloudinary Gallery
        </h1>

        <div style={{ marginBottom: "30px", textAlign: "center" }}>
          <label htmlFor="folder-input" style={{ marginRight: "10px" }}>
            Folder Name:
          </label>
          <input
            id="folder-input"
            type="text"
            value={folderName}
            onChange={(e) => setFolderName(e.target.value)}
            placeholder="Enter folder name"
            style={{
              padding: "8px 12px",
              fontSize: "16px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              minWidth: "250px",
            }}
          />
        </div>

        <CloudinaryGallery folderName={folderName} />
      </div>
    </>
  );
}

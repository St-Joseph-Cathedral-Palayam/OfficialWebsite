import { useState, useEffect } from "react";

const CloudinaryGallery = ({ folderName }) => {
  const [media, setMedia] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        setLoading(true);
        // Use the folder-contents endpoint which searches by asset_folder
        const response = await fetch(
          `/api/cloudinary/folder-contents?folder=${encodeURIComponent(folderName)}`,
        );

        if (!response.ok) {
          throw new Error("Failed to fetch media");
        }

        const data = await response.json();
        setMedia(data.images); // This now includes both images and videos
        setError(null);
      } catch (err) {
        console.error("Error fetching media:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (folderName) {
      fetchMedia();
    }
  }, [folderName]);

  if (loading) {
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "20px",
          padding: "20px",
        }}
      >
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            style={{
              position: "relative",
              width: "100%",
              paddingBottom: "100%",
              borderRadius: "8px",
              overflow: "hidden",
              background:
                "linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)",
              backgroundSize: "200% 100%",
              animation: "shimmer 1.5s infinite",
            }}
          >
            <style jsx>{`
              @keyframes shimmer {
                0% {
                  background-position: 200% 0;
                }
                100% {
                  background-position: -200% 0;
                }
              }
            `}</style>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return <div style={{ padding: "20px", color: "red" }}>Error: {error}</div>;
  }

  if (media.length === 0) {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <p>No media found in folder: {folderName}</p>
        <p style={{ fontSize: "14px", color: "#666", marginTop: "10px" }}>
          Upload images or videos to this folder in Cloudinary
        </p>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: "20px",
        padding: "20px",
      }}
    >
      {media.map((item, index) => (
        <div
          key={item.publicId}
          style={{
            position: "relative",
            width: "100%",
            paddingBottom: "100%",
            overflow: "hidden",
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            background: "#000",
          }}
        >
          {item.resourceType === "video" ? (
            <video
              src={item.optimized}
              controls
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          ) : (
            <img
              src={item.optimized}
              alt={`Media ${index + 1} from ${folderName}`}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default CloudinaryGallery;

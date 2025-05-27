import React, { useEffect, useState } from "react";

const BannerImage = () => {
  const [bannerImage, setBannerImage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const res = await fetch(
          "https://api.unsplash.com/photos/random?query=react,code,developer&orientation=landscape&client_id=-ro7zEYlBBAPYBhdhv46Z3XTs9ujvgJr7U6NZlYdPjc"
        );
        const data = await res.json();
        setBannerImage(data.urls?.regular);
      } catch (error) {
        console.error("Error fetching image:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, []);

  return (
    <div style={{ width: "100%", height: "300px", overflow: "hidden", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
      {loading ? (
        <p style={{ textAlign: "center", paddingTop: "130px" }}>Loading image...</p>
      ) : bannerImage ? (
        <img
          src={bannerImage}
          alt="Random banner"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      ) : (
        <p style={{ textAlign: "center", paddingTop: "130px" }}>Failed to load image.</p>
      )}
    </div>
  );
};

export default BannerImage;

"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import "./style.css";

const Gallery = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    async function fetchPhotos() {
      try {
        const response = await fetch("http://localhost:3001/photos");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPhotos(data);
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    }

    fetchPhotos();
  }, []);

  return (
    <>
      <section className="gallery-section">
        <div className="container">
          <h1 className="gallery-title">Галерея</h1>
        </div>

        <section className="image-section">
          <div className="container">
            <div className="gallery-grid">
              {photos.map((photo) => (
                <div className="gallery-item" key={photo.id}>
                  <Image
                    src={photo.url}
                    width={640}
                    height={360}
                    alt="Nature"
                    className="gallery-image"
                  />
                  <div className="image-overlay">
                    <div>
                      <h3 className="overlay-title">{photo.title}</h3>
                      <p className="overlay-author">{photo.author}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Gallery;

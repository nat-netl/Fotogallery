"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import "./style.css";

const Fotos = () => {
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
    <section className="image-section">
      <div className="container">
        <h2 className="image-section-title">Фотографии</h2>
        <div className="gallery-grid">
          {photos.map((photo) => (
            <div className="gallery-item" key={photo.id}>
              <Image
                src={photo.url}
                alt="Nature"
                width={640}
                height={360}
                className="gallery-image"
              />
              <div className="gallery-item-details">
                <h3 className="item-title">{photo.item}</h3>
                <p className="item-author">{photo.author}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="see-all-link-container">
          <Link href="/gallery" className="see-all-link">
            Посмотреть все картины
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Fotos;

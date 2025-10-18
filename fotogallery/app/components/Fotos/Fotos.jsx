import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./style.css";

const Fotos = () => {
  return (
    <section className="image-section">
      <div className="container">
        <h2 className="image-section-title">Фотографии</h2>
        <div className="gallery-grid">
          <div className="gallery-item">
            <Image
              src="http://static.photos/nature/640x360/1"
              alt="Nature"
              width={640}
              height={360}
              className="gallery-image"
            />
            <div className="gallery-item-details">
              <h3 className="item-title">Mountain Sunrise</h3>
              <p className="item-author">by John Doe</p>
            </div>
          </div>
          <div className="gallery-item">
            <Image
              src="http://static.photos/cityscape/640x360/2"
              alt="City"
              width={640}
              height={360}
              className="gallery-image"
            />
            <div className="gallery-item-details">
              <h3 className="item-title">Urban Jungle</h3>
              <p className="item-author">by Jane Smith</p>
            </div>
          </div>
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

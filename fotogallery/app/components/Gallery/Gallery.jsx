import Image from "next/image";
import React from "react";
import "./style.css";

const Gallery = () => {
  return (
    <>
      <section className="gallery-section">
        <div className="container">
          <h1 className="gallery-title">Фото галлерея</h1>
        </div>

        <section className="image-section">
          <div className="container">
            <div className="gallery-grid">
              <div className="gallery-item">
                <Image
                  src="http://static.photos/nature/640x360/10"
                  width={640}
                  height={360}
                  alt="Nature"
                  className="gallery-image"
                />
                <div className="image-overlay">
                  <div>
                    <h3 className="overlay-title">Mountain Reflection</h3>
                    <p className="overlay-author">by Sarah Williams</p>
                  </div>
                </div>
              </div>

              <div className="gallery-item">
                <Image
                  src="http://static.photos/nature/640x360/10"
                  width={640}
                  height={360}
                  alt="Nature"
                  className="gallery-image"
                />
                <div className="image-overlay">
                  <div>
                    <h3 className="overlay-title">Mountain Reflection</h3>
                    <p className="overlay-author">by Sarah Williams</p>
                  </div>
                </div>
              </div>

              <div className="gallery-item">
                <Image
                  src="http://static.photos/nature/640x360/10"
                  width={640}
                  height={360}
                  alt="Nature"
                  className="gallery-image"
                />
                <div className="image-overlay">
                  <div>
                    <h3 className="overlay-title">Mountain Reflection</h3>
                    <p className="overlay-author">by Sarah Williams</p>
                  </div>
                </div>
              </div>

              <div className="gallery-item">
                <Image
                  src="http://static.photos/nature/640x360/10"
                  width={640}
                  height={360}
                  alt="Nature"
                  className="gallery-image"
                />
                <div className="image-overlay">
                  <div>
                    <h3 className="overlay-title">Mountain Reflection</h3>
                    <p className="overlay-author">by Sarah Williams</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Gallery;

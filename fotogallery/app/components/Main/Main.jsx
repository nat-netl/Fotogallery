import Link from "next/link";
import React from "react";
import "./style.css"

const Main = () => {
  return (
    <section className="gradient-section">
      <div className="container">
        <h1 className="section-title">Добро пожаловать на проект галлереи</h1>
        <div className="button-group">
          <Link href="/gallery" className="gallery-button">
            К галлереи
          </Link>
          <Link href="/form" className="form-button">
            Оставить заявку
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Main;

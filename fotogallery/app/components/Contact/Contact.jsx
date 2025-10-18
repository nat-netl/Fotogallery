import React from "react";
import "./style.css";

const Contact = () => {
  return (
    <>
      <section className="contact-header-section">
        <div className="container">
          <h1 className="contact-header-title">Контакты</h1>
          <p className="contact-header-description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </section>

      <section className="contact-info-section">
        <div className="container">
          <div className="contact-info-grid">
            <div className="contact-card">
              <div className="contact-icon-wrapper">Icon</div>
              <h3 className="contact-title">Почта</h3>
              <p className="contact-description">Lorem</p>
              <a href="mailto:hello@mail.ru" className="contact-link">
                hello@mail.ru
              </a>
            </div>
            <div className="contact-card">
              <div className="contact-icon-wrapper">Icon</div>
              <h3 className="contact-title">Позвоните нам</h3>
              <p className="contact-description">Lorem</p>
              <a href="tel:+99999999" className="contact-link">
                +9 (999) 999-9999
              </a>
            </div>
            <div className="contact-card">
              <div className="contact-icon-wrapper">Icon</div>
              <h3 className="contact-title">Посетите нас</h3>
              <p className="contact-description">Lorem</p>
              <p className="contact-address">
                123 Photography Ave, Brooklyn, NY 11201
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

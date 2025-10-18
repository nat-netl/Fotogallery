import React from "react";
import "./style.css";

const Form = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <div className="contact-form-wrapper">
          <h2 className="contact-form-title">Отправьте нам сообщение</h2>
          <form>
            <div className="form-grid">
              <div>
                <label htmlFor="name" className="form-label">
                  Ваше имя
                </label>
                <input type="text" id="name" className="form-input" />
              </div>
              <div>
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input type="email" id="email" className="form-input" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="subject" className="form-label">
                Заголовок
              </label>
              <input type="text" id="subject" className="form-input" />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Ваше сообщение
              </label>
              <textarea
                id="message"
                rows="6"
                className="form-textarea"
              ></textarea>
            </div>
            <button type="submit" className="form-button">
              Отправить сообщение
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;

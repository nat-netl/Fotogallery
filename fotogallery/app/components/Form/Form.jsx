'use client'
import React, { useState } from "react";
import "./style.css";
import axios from "axios";

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/messages', {
        name,
        email,
        subject,
        message,
      });

      console.log('Message sent successfully:', response.data);
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <section className="contact-section">
      <div className="container">
        <div className="contact-form-wrapper">
          <h2 className="contact-form-title">Отправьте нам сообщение</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-grid">
              <div>
                <label htmlFor="name" className="form-label">
                  Ваше имя
                </label>
                <input type="text" id="name" className="form-input" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div>
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input type="email" id="email" className="form-input" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="subject" className="form-label">
                Заголовок
              </label>
              <input type="text" id="subject" className="form-input" value={subject} onChange={(e) => setSubject(e.target.value)}/>
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Ваше сообщение
              </label>
              <textarea
                id="message"
                rows="6"
                className="form-textarea"
                value={message} onChange={(e) => setMessage(e.target.value)}
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

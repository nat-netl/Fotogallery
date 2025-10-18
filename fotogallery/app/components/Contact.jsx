import React from "react";

const Contact = () => {
  return (
    <>
      <section className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 w-full text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Контакты</h1>
          <p className="text-xl max-w-2xl mx-auto">
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

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="contact-card bg-gray-50 p-8 rounded-xl shadow-sm transition duration-300">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <i data-feather="mail" className="text-primary-500 w-6 h-6"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Почта</h3>
              <p className="text-gray-600 mb-4">
                Lorem
              </p>
              <a
                href="mailto:hello@mail.ru"
                className="text-primary-500 font-medium hover:text-primary-600 transition"
              >
                hello@mail.ru
              </a>
            </div>
            <div className="contact-card bg-gray-50 p-8 rounded-xl shadow-sm transition duration-300">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <i data-feather="phone" className="text-primary-500 w-6 h-6"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Позвоните нам</h3>
              <p className="text-gray-600 mb-4">Lorem</p>
              <a
                href="tel:+99999999"
                className="text-primary-500 font-medium hover:text-primary-600 transition"
              >
                +9 (999) 999-9999
              </a>
            </div>
            <div className="contact-card bg-gray-50 p-8 rounded-xl shadow-sm transition duration-300">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <i data-feather="map-pin" className="text-primary-500 w-6 h-6"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Посетите нас</h3>
              <p className="text-gray-600 mb-4">Lorem</p>
              <p className="text-gray-700">
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

import React from "react";

const Form = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-sm">
          <h2 className="text-3xl font-bold mb-8">Отправьте нам сообщение</h2>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  for="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Ваше имя
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
                />
              </div>
              <div>
                <label
                  for="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
                />
              </div>
            </div>
            <div className="mb-6">
              <label
                for="subject"
                className="block text-gray-700 font-medium mb-2"
              >
                Загловок
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
              />
            </div>
            <div className="mb-6">
              <label
                for="message"
                className="block text-gray-700 font-medium mb-2"
              >
                Ваше сообщение
              </label>
              <textarea
                id="message"
                rows="6"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gray-500 text-black py-3 px-6 rounded-lg font-medium hover:bg-primary-600 transition"
            >
              Отправить сообщение
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;

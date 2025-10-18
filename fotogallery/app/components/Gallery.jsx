import Image from 'next/image'
import React from 'react'

const Gallery = () => {
  return (
    <>
    <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Фото галлерея</h1>
        </div>

        <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
            <div className="gallery-grid">
                <div className="group relative overflow-hidden rounded-xl shadow-lg">
                    <Image src="http://static.photos/nature/640x360/10" width={640} height={360} alt="Nature" className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
                        <div>
                          <h3 className="text-white font-medium text-lg">Mountain Reflection</h3>
                          <p className="text-gray-200">by Sarah Williams</p>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
          </section>
    </section>
    </>
  )
}

export default Gallery
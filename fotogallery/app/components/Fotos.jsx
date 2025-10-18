import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const Fotos = () => {
  return (
    <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Фотографии</h2>
            <div className="gallery-grid">
              <div className="overflow-hidden rounded-xl shadow-lg group">
                <Image src="http://static.photos/nature/640x360/1" alt="Nature" width={640} height={360} className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500" />
                <div className="p-4">
                    <h3 className="font-medium text-lg">Mountain Sunrise</h3>
                    <p className="text-gray-500">by John Doe</p>
                </div>
              </div>
              <div className="overflow-hidden rounded-xl shadow-lg group">
                <Image src="http://static.photos/cityscape/640x360/2" alt="City" width={640} height={360} className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500" />
                <div className="p-4">
                    <h3 className="font-medium text-lg">Urban Jungle</h3>
                    <p className="text-gray-500">by Jane Smith</p>
                </div>
              </div>
              <div className="overflow-hidden rounded-xl shadow-lg group">
                <Image src="http://static.photos/travel/640x360/3" alt="Travel" width={640} height={360} className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500" />
                <div className="p-4">
                    <h3 className="font-medium text-lg">Desert Adventure</h3>
                    <p className="text-gray-500">by Alex Johnson</p>
                </div>
              </div>
            </div>
            <div className="text-center mt-10">
                <Link href="/gallery" className="inline-flex items-center text-primary-500 font-medium hover:text-primary-600 transition">
                    Посмотреть все картины <i data-feather="arrow-right" className="ml-2 w-4 h-4"></i>
                </Link>
            </div>
        </div>
    </section>
  )
}

export default Fotos
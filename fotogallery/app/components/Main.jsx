import Link from 'next/link'
import React from 'react'

const Main = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 w-full text-white py-20">
        <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Добро пожаловать на проект галлереи</h1>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/gallery" className="bg-black text-primary-500 px-6 py-3 rounded-lg font-medium hover:bg-gray-500 transition">К галлереи</Link>
                <Link href="/form" className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition">Оставить заявку</Link>
            </div>
        </div>
    </section>
  )
}

export default Main
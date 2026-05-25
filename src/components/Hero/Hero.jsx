import React from 'react'
import hero from '../../assets/Hero.png'

export default function Hero() {
  return (
    <section
      className="w-full min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${hero})`
      }}
    >

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center min-h-screen px-6 lg:px-16">

        <div className="max-w-[700px] text-white">

          {/* Small Heading */}
          <span className="bg-orange-500 px-5 py-2 rounded-full text-sm lg:text-base font-semibold">
            Helping The Poor
          </span>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight mt-6">
            Giving Hope To People Through Charity
          </h1>

          {/* Paragraph */}
          <p className="mt-6 text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed max-w-[600px]">
            We help communities with education, food, healthcare,
            and support to create a better future for everyone.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 mt-10">

            <button className="bg-orange-500 hover:bg-orange-600 duration-300 px-8 py-4 rounded-full text-lg font-semibold">
              Donate Now
            </button>

            <button className="border-2 border-white hover:bg-white hover:text-black duration-300 px-8 py-4 rounded-full text-lg font-semibold">
              Learn More
            </button>

          </div>

        </div>

      </div>

    </section>
  )
}
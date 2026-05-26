import React from 'react'
import { FaPlay, FaChild } from 'react-icons/fa'
import Pic from '../../assets/Pic.png'
import Pic1 from '../../assets/Picture.png'
export default function Empower() {

  const data = [
    {
      id: 1,
      color: 'text-blue-400'
    },
    {
      id: 2,
      color: 'text-green-400'
    },
    {
      id: 3,
      color: 'text-orange-400'
    }
  ]

  return (
    <section className='w-full bg-[#fefcef] py-16 px-4 md:px-10 overflow-hidden'>

      {/* Main Container */}
      <div className='max-w-[1400px] mx-auto'>

        {/* Heading */}
        <div>
          <h2 className='text-4xl md:text-6xl font-bold'>
            We Empower The Poorest
          </h2>

          <p className='text-gray-400 text-lg mt-4'>
            Access to clean drinking water, proper hygiene, and safe waste disposal.
          </p>
        </div>

        {/* Content */}
        <div className='grid lg:grid-cols-[70%,30%] gap-10 mt-10 items-center'>

          {/* Left Side */}
          <div>

            {/* Video/Image */}
            <div className='relative overflow-hidden rounded-[35px]'>

              <img
                src={Pic}
                alt=''
                className='w-full h-[500px] object-cover'
              />

              {/* Play Button */}
              <div className='absolute inset-0 flex items-center justify-center'>
                <button className='w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-2xl hover:scale-110 duration-300'>
                  <FaPlay className='text-orange-500 text-2xl ml-1' />
                </button>
              </div>

            </div>

            {/* Bottom Stats */}
            <div className='flex flex-wrap gap-10 mt-10'>

              {
                data.map((item) => (
                  <div
                    key={item.id}
                    className='flex items-center gap-4'
                  >

                    <FaChild className={`text-6xl ${item.color}`} />

                    <div>
                      <h3 className='text-5xl font-bold'>
                        $56M
                      </h3>

                      <p className='text-gray-400 mt-1'>
                        child deserves a bright future.
                      </p>
                    </div>

                  </div>
                ))
              }

            </div>

          </div>

          {/* Right Side */}
          <div className='relative flex justify-center'>

            {/* Background Design */}
            <div className='absolute right-0 top-20 grid grid-cols-3 gap-2 opacity-70'>

              {
                [...Array(18)].map((_, index) => (
                  <div
                    key={index}
                    className={`
                      w-16 h-16 
                      ${
                        index % 3 === 0
                          ? 'bg-orange-300'
                          : index % 2 === 0
                          ? 'bg-orange-200'
                          : 'bg-[#ffe8c7]'
                      }
                      clip-triangle
                    `}
                    style={{
                      clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
                    }}
                  />
                ))
              }

            </div>

            {/* Girl Image */}
            <img
              src={Pic1}
              className='relative z-10 h-[650px] object-contain'
            />

          </div>

        </div>

      </div>

    </section>
  )
}
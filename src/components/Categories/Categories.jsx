import React from 'react'
import { FaHospital } from 'react-icons/fa'

export default function Categories() {

  const categoryData = [
    {
      id: 1,
      title: 'Water & Sanity',
      desc: 'Access to clean drinking water, proper hygiene, and safe waste disposal.',
      bg: 'bg-[#fff8f6]',
      icon: 'text-orange-400'
    },
    {
      id: 2,
      title: 'Health & Wellness',
      desc: 'Promoting mental well-being through exercise and preventive care.',
      bg: 'bg-[#f2fffb]',
      icon: 'text-green-400'
    },
    {
      id: 3,
      title: 'Social Growth',
      desc: 'Improving education and access to resources for better quality of life.',
      bg: 'bg-[#fffdf4]',
      icon: 'text-yellow-400'
    },
    {
      id: 4,
      title: 'Education & Skills',
      desc: 'Empower individuals through learning, training, enabling personal growth.',
      bg: 'bg-[#f3f9ff]',
      icon: 'text-blue-400'
    }
  ]

  return (
    <section className='w-full bg-[#f8f8f8] py-14 px-4 md:px-10'>

      <div className='bg-white rounded-2xl shadow-xl p-6 md:p-10'>

        {/* Heading */}
        <h2 className='text-4xl md:text-5xl font-bold mb-10'>
          Our Categories
        </h2>

        {/* Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>

          {
            categoryData.map((item) => (
              <div
                key={item.id}
                className={`${item.bg} rounded-2xl p-8 text-center hover:scale-105 duration-300 cursor-pointer`}
              >

                {/* Icon Circle */}
                <div className='w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto shadow-sm'>
                  <FaHospital className={`text-5xl ${item.icon}`} />
                </div>

                {/* Title */}
                <h3 className='text-2xl font-bold mt-8'>
                  {item.title}
                </h3>

                {/* Description */}
                <p className='text-gray-400 leading-8 mt-5 text-[17px]'>
                  {item.desc}
                </p>

              </div>
            ))
          }

        </div>

      </div>

    </section>
  )
}
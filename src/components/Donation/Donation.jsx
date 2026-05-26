import React from 'react'

export default function Donation({ active, setActive }) {

  const amounts = [10, 25, 50, 100]

  return (
    <section className='bg-[#F8F4EE] py-16 px-5'>

      <div className='max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-10'>

        {/* Left Side */}
        <div className='space-y-4'>
          <h2 className='text-4xl font-bold text-black'>
            Make A Donation
          </h2>

          <p className='text-gray-500 text-lg leading-8'>
            Join us in creating a brighter more
            <br />
            compassionate world
          </p>
        </div>

        {/* Right Side */}
        <div className='w-full lg:w-[60%]'>

          {/* Amount Buttons */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>

            {amounts.map((item) => (
              <button
                key={item}
                onClick={() => setActive(item)}
                className={`
                  border-2 rounded-full py-4 font-semibold duration-300
                  ${active === item
                    ? 'bg-orange-400 text-white border-orange-400'
                    : 'bg-white text-orange-400 border-orange-300 hover:bg-orange-50'}
                `}
              >
                ${item}
              </button>
            ))}

          </div>

          {/* Bottom Area */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-5'>

            <input
              type="text"
              placeholder='$ Custom Amount'
              className='border-2 border-orange-300 rounded-full px-5 outline-none'
            />

            <button className='bg-[#3E448D] hover:opacity-90 text-white rounded-full py-4 font-semibold duration-300'>
              Proceed
            </button>

          </div>

        </div>

      </div>

    </section>
  )
}
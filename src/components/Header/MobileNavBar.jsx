import React from 'react'
import { IoClose } from "react-icons/io5";

export default function MobileNavBar({ pshow, setPshow }) {

  return (

    <>
    
      {/* Overlay */}
      <div
        onClick={() => setPshow(false)}
        className={`
          fixed inset-0 bg-[rgba(0,0,0,0.7)] z-40
          duration-300
          ${pshow ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}
      ></div>

      {/* Sidebar */}
      <section
        className={`
          fixed top-0 left-0 h-screen w-[280px]
          bg-white z-50
          duration-300 transition-all
          flex flex-col p-8
          ${pshow ? 'translate-x-0' : '-translate-x-full'}
        `}
      >

        {/* Top */}
        <div className="flex justify-between items-center border-b pb-5">

          <h2 className="text-3xl font-bold">
            <span className="text-black">Life</span>

            <span className="text-orange-500">
              line
            </span>
          </h2>

          {/* Close Icon */}
          <IoClose
            onClick={() => setPshow(false)}
            className="text-4xl cursor-pointer hover:text-orange-500 duration-300"
          />

        </div>

        {/* NavLinks */}
        <ul className="flex flex-col gap-8 mt-10 text-lg font-semibold text-gray-800">

          <li className="cursor-pointer hover:text-orange-500 duration-300">
            Home
          </li>

          <li className="cursor-pointer hover:text-orange-500 duration-300">
            About
          </li>

          <li className="cursor-pointer hover:text-orange-500 duration-300">
            Causes
          </li>

          <li className="cursor-pointer hover:text-orange-500 duration-300">
            Volunteer
          </li>

          <li className="cursor-pointer hover:text-orange-500 duration-300">
            Events
          </li>

          <li className="cursor-pointer hover:text-orange-500 duration-300">
            Charity Mission
          </li>

          <li className="cursor-pointer hover:text-orange-500 duration-300">
            Contact
          </li>

        </ul>

      </section>

    </>
  )
}
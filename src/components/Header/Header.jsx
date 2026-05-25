import { FaFacebook,  FaMailBulk,  FaPinterest,  FaTwitter, FaYoutube } from "react-icons/fa"
import { FaLocationPin } from "react-icons/fa6"
import { IoIosCall } from "react-icons/io";
let Nav=[
    {
        name:"Home"
    },
    {
        name:"About"
    },
    {
        name:"Causes"
    },
    {
        name:"Volunteer"
    },
    {
        name:"Events"
    },
    {
        name:"Charity Mission"
    },
     {
        name:"Contact"
    },

]

export default function Header() {
  return (
    <header className="w-full mx-auto px-10 shadow-lg p-2 flex-col ">
      {/* Top Bar */}
<div className="bg-[#6a0d5c] text-white justify-between items-center hidden md:flex px-8 py-3 text-sm">

  {/* Contact Info */}
  <div className="flex items-center gap-8">

    <span className="flex items-center gap-2">
      <FaLocationPin className="text-orange-400 text-[14px]" />
      <h3 className="text-[14px] font-medium">
        Pattoki, Punjab College
      </h3>
    </span>

    <span className="flex items-center gap-2">
      <IoIosCall className="text-orange-400 text-[16px]" />
      <h3 className="text-[14px] font-medium">
        123-4567890
      </h3>
    </span>

    <span className="flex items-center gap-2">
      <FaMailBulk className="text-orange-400 text-[14px]" />
      <h3 className="text-[14px] font-medium">
        admin@gmail.com
      </h3>
    </span>

  </div>

  {/* Social Icons */}
  <div className="flex items-center gap-3">

    <span className="w-8 h-8 rounded-full bg-white text-orange-500 flex justify-center items-center cursor-pointer hover:scale-105 duration-300">
      <FaFacebook />
    </span>

    <span className="w-8 h-8 rounded-full bg-white text-orange-500 flex justify-center items-center cursor-pointer hover:scale-105 duration-300">
      <FaTwitter />
    </span>

    <span className="w-8 h-8 rounded-full bg-white text-orange-500 flex justify-center items-center cursor-pointer hover:scale-105 duration-300">
      <FaYoutube />
    </span>

    <span className="w-8 h-8 rounded-full bg-white text-orange-500 flex justify-center items-center cursor-pointer hover:scale-105 duration-300">
      <FaPinterest />
    </span>

  </div>
</div>
      {/* Second Navbar */}
<div className="flex justify-between items-center py-5 px-6 lg:px-10 bg-white">

  {/* Logo */}
  <div>
    <h2 className="text-4xl font-extrabold">
      <span className="text-black">Life</span>
      <span className="text-orange-500">line</span>
    </h2>
  </div>

  {/* NavLinks */}
  <div className="hidden lg:block">
    <ul className="flex items-center gap-10 font-semibold text-[17px] text-gray-800">
      {Nav.map((items, i) => {
        return (
          <li
            key={i}
            className="cursor-pointer hover:text-orange-500 duration-300"
          >
            {items.name}
          </li>
        );
      })}
    </ul>
  </div>

  {/* Donate Button */}
  <div>
    <button className="bg-orange-500 hover:bg-orange-600 duration-300 text-white font-semibold px-8 py-4 rounded-full text-lg">
      Donate Now
    </button>
  </div>

</div>
    </header>
  )
}

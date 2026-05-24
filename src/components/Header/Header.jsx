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
<div className="bg-[#6a0d5c] text-white flex justify-between items-center px-8 py-3 text-sm">

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
      {/* {Second div} */}
      <div className="flex items-center justify-between py-5">
     {/* {Logo} */}
     <div>
        <h2>Logo</h2>
     </div>
     {/* {NavLink} */}
     <div>
        <ul className="flex justify-center items-center gap-5 text-xl">
            {Nav.map((items,i)=>{
                return(
                    <li key={i}>
                     {items.name}
                    </li>
                )
            })}
        </ul>
     </div>
     {/* {DonoteButton} */}
     <div>
        <button className="bg-orange-400 text-xl rounded-lg">Donote</button>
     </div>
      </div>  
    </header>
  )
}

import React from "react";

const sponsors = [
  {
    id: 1,
    logo:
      "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
  {
    id: 2,
    logo:
      "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    id: 3,
    logo:
      "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    id: 4,
    logo:
      "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
  {
    id: 5,
    logo:
      "https://upload.wikimedia.org/wikipedia/commons/7/75/Netflix_icon.svg",
  },
];

export default function Sponsors() {
  return (
    <section className="w-full bg-[#f8f2df] py-20">
      <div className="max-w-7xl mx-auto px-5">
        
        {/* Top */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-14">
          
          <h1 className="text-4xl md:text-6xl font-bold text-black">
            Our Sponsors
          </h1>

          <button className="bg-orange-500 hover:bg-orange-600 duration-300 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg">
            Become A Sponsor
          </button>
        </div>

        {/* Sponsor Logos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {sponsors.map((item) => (
            <div
              key={item.id}
              className="bg-white h-[170px] rounded-xl shadow-sm flex items-center justify-center hover:-translate-y-2 duration-300"
            >
              <img
                src={item.logo}
                alt=""
                className="w-[120px] object-contain opacity-60 hover:opacity-100 duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
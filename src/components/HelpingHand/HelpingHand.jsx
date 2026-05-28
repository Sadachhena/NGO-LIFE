import React from "react";

export default function HelpingHand() {
  return (
    <section className="w-full bg-[#f7f7f7] py-20">
      <div className="max-w-7xl mx-auto px-5">
        
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          
          {/* Images */}
          <div className="grid grid-cols-2 gap-5">
            
            {/* Big Image */}
            <div className="h-[520px] rounded-[18px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            {/* Small Images */}
            <div className="flex flex-col gap-5">
              
              <div className="h-[250px] rounded-[18px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1200&auto=format&fit=crop"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="h-[250px] rounded-[18px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1200&auto=format&fit=crop"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-black">
              Give a Healping <br />
              hand to Those <br />
              Who Need It?
            </h1>

            <p className="text-gray-500 leading-8 mt-8 max-w-xl">
              Vorem ipsum dolor sit amet, consectetur adipiscing elit Donec
              nisl turpis, tempus nec egestas ac, molestie vel natoque
              penatibus et magnis.
            </p>

            {/* Progress */}
            <div className="mt-10">
              
              <div className="flex justify-end mb-3">
                <h3 className="font-bold text-xl text-black">
                  $36,000 Donation Needed
                </h3>
              </div>

              <div className="w-full h-3 bg-yellow-100 rounded-full overflow-hidden">
                <div className="w-[52%] h-full bg-yellow-500 rounded-full"></div>
              </div>
            </div>

            {/* Button */}
            <button className="mt-12 bg-orange-500 hover:bg-orange-600 duration-300 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg">
              View Our Causes
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
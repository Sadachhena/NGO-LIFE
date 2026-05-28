import React from "react";
import { FaCalendarAlt, FaRegComment } from "react-icons/fa";

const news = [
  {
    id: 1,
    title: "A Heartbreaking Glimpse into the Reality",
    image:
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1200&auto=format&fit=crop",
    date: "October 28, 2025",
    comments: "6 comment",
  },
  {
    id: 2,
    title: "When Children Face Struggles and Troubles",
    image:
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1200&auto=format&fit=crop",
    date: "October 18, 2025",
    comments: "4 comment",
  },
  {
    id: 3,
    title: "From Life’s Challenges to Moments of Cheer, Together",
    image:
      "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1200&auto=format&fit=crop",
    date: "October 21, 2025",
    comments: "1 comment",
  },
];

export default function RecentNews() {
  return (
    <section className="w-full bg-[#f8f8f8] py-20">
      <div className="max-w-7xl mx-auto px-5">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-black">
            Recent News
          </h1>

          <p className="text-gray-500 mt-5 max-w-2xl mx-auto leading-8">
            We are the nation’s largest and most influential grassroots
            environmental organization trud exerci tation
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item) => (
            <div
              key={item.id}
              className="bg-[#fdf9f2] rounded-[25px] overflow-hidden shadow-sm hover:-translate-y-2 duration-300"
            >
              
              {/* Image */}
              <div className="h-[280px] overflow-hidden">
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-full object-cover hover:scale-110 duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-7">
                
                {/* Date & Comment */}
                <div className="flex justify-between items-center text-[#d89a44] text-sm font-medium">
                  
                  <div className="flex items-center gap-2">
                    <FaCalendarAlt />
                    <span>{item.date}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <FaRegComment />
                    <span>{item.comments}</span>
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-4xl font-bold leading-tight text-black mt-6">
                  {item.title}
                </h2>

                {/* Footer */}
                <div className="flex justify-between items-center mt-10">
                  
                  <div className="flex items-center gap-3">
                    <img
                      src="https://randomuser.me/api/portraits/women/44.jpg"
                      alt=""
                      className="w-14 h-14 rounded-full object-cover"
                    />

                    <h4 className="text-gray-500 text-xl font-medium">
                      Catherine
                    </h4>
                  </div>

                  <button className="text-[#d89a44] text-xl font-semibold hover:translate-x-2 duration-300">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
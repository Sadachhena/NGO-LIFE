import React from "react";

const campaigns = [
  {
    id: 1,
    title: "Drugs are causes huge mental illness",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop",
    amount: "$ 7,800",
    color: "bg-yellow-500/70",
    progress: "30%",
  },
  {
    id: 2,
    title: "Clean drinking water is the basic necessity",
    image:
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1200&auto=format&fit=crop",
    amount: "$ 67,000",
    color: "bg-pink-600/70",
    progress: "55%",
  },
  {
    id: 3,
    title: "Give A Hand To Make The Bright Future",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
    amount: "$ 98,000",
    color: "bg-sky-700/70",
    progress: "75%",
  },
];

export default function HelpPower() {
  return (
    <section className="w-full py-20 bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto px-5">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-6xl font-bold text-black">
            Help Power Our Work
          </h1>

          <p className="text-gray-500 max-w-2xl mx-auto mt-5 leading-8 text-sm md:text-base">
            Our campaigns bring together communities, resources, and action to
            create lasting change across education, health, environment, and
            humanitarian relief.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {campaigns.map((item) => (
            <div
              key={item.id}
              className="relative h-[520px] rounded-[22px] overflow-hidden group cursor-pointer"
            >
              {/* Image */}
              <img
                src={item.image}
                alt=""
                className="w-full h-full object-cover group-hover:scale-110 duration-500"
              />

              {/* Overlay */}
              <div
                className={`absolute bottom-0 left-0 w-full p-6 text-white ${item.color} backdrop-blur-sm`}
              >
                <p className="text-sm font-semibold mb-3">in Belgium</p>

                <h2 className="text-3xl font-bold leading-tight mb-8">
                  {item.title}
                </h2>

                {/* Progress */}
                <div className="w-full h-3 bg-white/40 rounded-full overflow-hidden mb-4">
                  <div
                    className="h-full bg-white rounded-full"
                    style={{ width: item.progress }}
                  ></div>
                </div>

                {/* Amount */}
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Needed</span>

                  <h3 className="text-3xl font-bold">{item.amount}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
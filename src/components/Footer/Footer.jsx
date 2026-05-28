import React from "react";

const footerLinks = [
  {
    title: "About Us",
    links: [
      "About Us",
      "Our Team",
      "Volunteer Engagement",
      "Communications",
      "Services",
    ],
  },
  {
    title: "Discover",
    links: [
      "Mission",
      "Where We are Headed",
      "History",
      "Board and Staff",
      "Join Our Team",
    ],
  },
  {
    title: "Support",
    links: [
      "About Us",
      "Our Team",
      "Volunteer Engagement",
      "Communications",
      "Services",
    ],
  },
  {
    title: "NewsNews",
    links: [
      "Press Room",
      "Effectiveness & Results",
      "Advisory Panel",
      "Endorsements",
      "Annual Report",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#4b0033] text-white pt-20">
      <div className="max-w-7xl mx-auto px-5">
        
        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-16">
          
          {footerLinks.map((section, index) => (
            <div key={index}>
              
              {/* Title */}
              <h2 className="text-2xl font-bold relative inline-block pb-3">
                {section.title}

                <span className="absolute left-0 bottom-0 w-16 h-[3px] bg-orange-500 rounded-full"></span>
              </h2>

              {/* Links */}
              <ul className="mt-8 space-y-5">
                {section.links.map((link, i) => (
                  <li
                    key={i}
                    className="text-gray-300 hover:text-orange-400 duration-300 cursor-pointer border-b border-white/10 pb-3"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 bg-[#42002d] py-6">
        <div className="max-w-7xl mx-auto px-5 text-center">
          
          <p className="text-gray-300 text-sm md:text-base">
            © 2025 - All Rights Reserved - Design by{" "}
            <span className="text-white font-semibold">
              MrGreenWeb
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
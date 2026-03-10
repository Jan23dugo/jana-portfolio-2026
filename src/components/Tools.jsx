import React from "react";

const toolsData = [
  { name: "Canva", icon: "/assets/Tools/canva-logo.png" },
  { name: "Capcut", icon: "/assets/Tools/capcut-logo.png" },
  { name: "Inshot", icon: "/assets/Tools/inshot-logo.png" },
  { name: "Freepik", icon: "/assets/Tools/freepik-logo.png" },
  { name: "Pixabay", icon: "/assets/Tools/pixabay-logo.png" },
  { name: "Notion", icon: "/assets/Tools/notion-logo.png" },
  { name: "Trello", icon: "/assets/Tools/trelo-logo.png" },
  { name: "Asana", icon: "/assets/Tools/asana-logo.png" },
  { name: "Metricool", icon: "/assets/Tools/metricool-logo.png" },
  { name: "Meta Business Suite", icon: "/assets/Tools/Meta-logo.png" },
  { name: "GDocs", icon: "/assets/Tools/gdoc-logo.png" },
  { name: "Google Sheets", icon: "/assets/Tools/gsheets-logo.png" },
  { name: "ChatGPT", icon: "/assets/Tools/chatgpt-logo.png" },
  { name: "Facebook", icon: "/assets/Tools/facebook-logo.png" },
  { name: "Instagram", icon: "/assets/Tools/instagram-logo.png" },
  { name: "Tiktok", icon: "/assets/Tools/tiktok-logo.png" },
];

const Tools = () => {
  return (
    <section id="tools" className="py-24 bg-pastel-grey w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header Area */}
        <div className="text-center mb-16">
          <h2 className="font-script text-dark-red text-6xl md:text-7xl mb-4 animate-fade-in">
            My Toolkit
          </h2>
          <p className="font-sans text-gray-brown tracking-[0.2em] uppercase text-xs md:text-sm">
            The essential tools I use to deliver exceptional results
          </p>
          <div className="w-16 h-[1px] bg-dark-red mt-8 mx-auto opacity-50"></div>
        </div>

        {/* Grid Area - No inline styles needed! */}
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-y-12 gap-x-4 place-items-center">
          {toolsData.map((tool, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center group transition-all duration-300"
            >
              {/* Icon Container */}
              <div className="w-10 h-10 md:w-12 md:h-12 mb-4 transition-transform duration-300 group-hover:-translate-y-2 group-hover:opacity-100">
                <img
                  src={tool.icon}
                  alt={tool.name}
                  className="w-full h-full object-contain"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=${tool.name}&background=random`;
                  }}
                />
              </div>

              {/* Tool Name */}
              <h6 className="font-sans text-[9px] md:text-[10px] tracking-widest uppercase text-gray-brown text-center group-hover:text-dark-red transition-colors duration-300 whitespace-nowrap">
                {tool.name}
              </h6>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;

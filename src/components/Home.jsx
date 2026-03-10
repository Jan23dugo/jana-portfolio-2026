import React from "react";

import homeBg from "../assets/Homebackground/homebg.jpg"; 

const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-pastel-grey overflow-hidden"
    >
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={homeBg} // Use the imported variable here
          alt="Jana Virtuales"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Content */}
      <div className="z-10 text-center flex flex-col items-center px-6">
        <h1 className="font-script text-white text-5xl sm:text-7xl md:text-9xl mb-4 leading-tight">
          Jana Virtuales
        </h1>

        <h2 className="font-sans text-white tracking-[0.3em] uppercase text-lg md:text-2xl mt-2">
          Social Media Manager
        </h2>
      </div>
    </section>
  );
};

export default Home;
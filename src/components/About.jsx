import React from "react";
// Import the image so Vite can process it
import aboutPic from "../assets/Aboutbackground/aboutpic.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 px-8 md:px-16 bg-brand-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        {/* Left Column: Editorial Image Style */}
        <div className="w-full md:w-1/2 relative">
          {/* Decorative background box */}
          <div className="absolute inset-0 bg-pastel-grey translate-x-4 translate-y-4 rounded-sm"></div>
          {/* Use the imported variable */}
          <img
            src={aboutPic}
            alt="Jana Virtuales"
            className="relative z-10 w-full h-auto object-cover rounded-sm shadow-sm"
          />
        </div>

        {/* Right Column: About Text */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="font-script text-dark-red text-6xl md:text-7xl mb-8">
            About Me
          </h2>

          {/* Using the gray-brown color from your theme */}
          <div className="font-sans text-gray-brown text-base md:text-lg leading-loose space-y-6">
            <p>
              I'm a self-driven Social Media Manager helping beauty, health, and
              wellness brands rise above the noise and attract the right
              clients!
            </p>
            <p>
              From content that connects to growth tactics that actually work,
              everything I do is guided by one goal: to help your business grow
              with purpose without you wasting time and effort.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section: Let's Be Honest Box */}
      <div className="mt-32 max-w-4xl mx-auto bg-pastel-grey p-10 md:p-16 text-center rounded-sm shadow-sm">
        <h3 className="font-script text-dark-red text-5xl mb-8">
          Let's Be Honest...
        </h3>

        <div className="font-sans text-gray-brown text-base md:text-lg leading-loose space-y-6">
          <p>
            Running your business is overwhelming. You can't do everything all
            at once, and the sooner you realize that, the better.
          </p>
          <p>
            Building your social media takes time, strategy, and consistency.
            Without the right help, you're leaving growth, visibility, and
            potential clients on the table.
          </p>
          <p className="font-medium">
            You don't have to do it all. You just need the right support. It's
            time to move smart.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

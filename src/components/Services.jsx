import React, { useRef } from "react";

const Services = () => {
  const scrollRef = useRef(null);

  const services = [
    { id: "01", title: "Social Media Management", description: "Complete handling of social media accounts, including planning, posting, and growth strategies." },
    { id: "02", title: "Market Research", description: "Research on audience interests and competitor activity to guide effective content and strategy." },
    { id: "03", title: "Content Curation & Caption Writing", description: "High-quality content selected and paired with well-written captions tailored to the brand voice." },
    { id: "04", title: "Content Scheduling & Publishing", description: "Posts scheduled and published at optimal times for better reach and consistency." },
    { id: "05", title: "Data Analytics", description: "Clear reports on page performance to track growth and adjust strategies as needed." },
    { id: "06", title: "Community Engagement", description: "Responding to comments and messages to keep followers engaged and connected." },
    { id: "07", title: "Brand Strategy & Identity", description: "Developing a cohesive visual and tonal identity that resonates with your target audience." },
    { id: "08", title: "Social Media Audit", description: "A full review of current social media pages to identify strengths, weaknesses, and improvement areas." },
    { id: "9", title: "Page Optimization", description: "Updating and improving profiles to look more professional and attract the right audience." },
    { id: "10", title: "Monthly Content Calendar", description: "A full month of content planned in advance, aligned with business goals and key dates." },
    { id: "11", title: "Basic Video Editing", description: "Simple, polished edits that improve video quality and make content more engaging." },
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" 
        ? scrollLeft - clientWidth * 0.8 
        : scrollLeft + clientWidth * 0.8;
      
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-24 px-8 md:px-16 bg-pastel-grey overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Headings */}
        <div className="text-center mb-10 flex flex-col items-center">
          <h2 className="font-script text-dark-red text-6xl md:text-7xl mb-4">
            My Service Inclusions
          </h2>
          <p className="font-sans text-gray-brown tracking-[0.3em] uppercase text-xs md:text-sm">
            How can I help?
          </p>
          <div className="w-16 h-px bg-dark-red mt-8 opacity-50"></div>
        </div>

        {/* Carousel Area */}
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="flex justify-end gap-4 mb-6 pr-2">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full border border-dark-red flex items-center justify-center text-dark-red hover:bg-dark-red hover:text-brand-white transition-all duration-300 shadow-sm bg-brand-white/20 backdrop-blur-sm cursor-pointer"
              aria-label="Scroll left"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full border border-dark-red flex items-center justify-center text-dark-red hover:bg-dark-red hover:text-brand-white transition-all duration-300 shadow-sm bg-brand-white/20 backdrop-blur-sm cursor-pointer"
              aria-label="Scroll right"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>

          {/* Cards Container */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="flex-none w-[85%] md:w-[45%] lg:w-[30%] snap-center bg-brand-white p-10 md:p-12 flex flex-col items-center text-center shadow-sm border border-dark-red hover:border-dark-red/10 transition-colors duration-500"
              >
                <span className="font-sans text-pastel-grey text-lg tracking-widest mb-4">
                  {service.id}
                </span>
                <h3 className="font-sans text-dark-red tracking-widest uppercase text-sm md:text-base font-semibold mb-6 h-12 flex items-center">
                  {service.title}
                </h3>
                <div className="w-8 h-px bg-gray-brown mb-6 opacity-30"></div>
                <p className="font-sans text-gray-brown text-base leading-loose">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
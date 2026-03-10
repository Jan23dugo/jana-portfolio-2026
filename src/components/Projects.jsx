import React, { useState, useEffect } from "react";

const projectsData = [
  { id: 1, title: "Feed Layout", image: "/assets/SampleWorks/feedlayout1.png" },
  { id: 2, title: "Feed Layout", image: "/assets/SampleWorks/feedlayout2.PNG" },
  { id: 3, title: "Feed Layout", image: "/assets/SampleWorks/feedlayout3.PNG" },
  { id: 4, title: "Graphics", image: "/assets/Graphics/graphics1.png" },
  { id: 5, title: "Graphics", image: "/assets/Graphics/graphics2.png" },
  { id: 6, title: "Graphics", image: "/assets/Graphics/graphics3.png" },
  { id: 7, title: "Feed Layout", image: "/assets/SampleWorks/feedlayout4.png" },
  { id: 8, title: "Feed Layout", image: "/assets/SampleWorks/feedlayout5.png" },
  { id: 9, title: "Feed Layout", image: "/assets/SampleWorks/feedlayout6.png" },
  {
    id: 10,
    title: "Feed Layout",
    image: "/assets/SampleWorks/feedlayout7.png",
  },
  {
    id: 11,
    title: "Feed Layout",
    image: "/assets/SampleWorks/feedlayout8.png",
  },
  { id: 12, title: "Graphics", image: "/assets/Graphics/graphics4.png" },
  { id: 13, title: "Graphics", image: "/assets/Graphics/graphics5.png" },
  { id: 14, title: "Graphics", image: "/assets/Graphics/graphics6.png" },
  { id: 15, title: "Graphics", image: "/assets/Graphics/graphics7.png" },
  { id: 16, title: "Graphics", image: "/assets/Graphics/graphics8.png" },
  { id: 17, title: "Graphics", image: "/assets/Graphics/graphics9.png" },
  { id: 18, title: "Graphics", image: "/assets/Graphics/graphics10.png" },
  { id: 19, title: "Graphics", image: "/assets/Graphics/graphics11.png" },
];

const Projects = () => {
  const [page, setPage] = useState(1);
  const [projectsPerPage, setProjectsPerPage] = useState(10);
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) setProjectsPerPage(4);
      else if (window.innerWidth <= 1200) setProjectsPerPage(8);
      else setProjectsPerPage(10);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const pageCount = Math.ceil(projectsData.length / projectsPerPage);
  const paginatedProjects = projectsData.slice(
    (page - 1) * projectsPerPage,
    page * projectsPerPage,
  );

  const handleNext = () =>
    setPage((prev) => (prev < pageCount ? prev + 1 : prev));
  const handlePrev = () => setPage((prev) => (prev > 1 ? prev - 1 : prev));

  return (
    <section id="projects" className="py-24 bg-brand-white px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-script text-dark-red text-6xl md:text-7xl mb-4">
            Portfolio
          </h2>
          <p className="font-sans text-gray-brown tracking-[0.3em] uppercase text-xs">
            Side-by-Side Excellence
          </p>
        </div>

        <div className="flex items-center gap-4 md:gap-8">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            disabled={page === 1}
            className={`flex-none w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${
              page === 1
                ? "border-gray-200 text-gray-300 cursor-not-allowed"
                : "border-dark-red text-dark-red hover:bg-dark-red hover:text-brand-white shadow-sm cursor-pointer"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          {/* Grid Container */}
          <div className="grow">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
              {paginatedProjects.map((project) => (
                <div
                  key={project.id}
                  className="group relative aspect-[4/5] overflow-hidden bg-pastel-grey cursor-pointer shadow-sm animate-fade-in"
                  onClick={() => setModalImage(project.image)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-dark-red/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4 text-center">
                    <h3 className="font-script text-brand-white text-2xl lg:text-3xl">
                      {project.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            disabled={page === pageCount}
            className={`flex-none w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${
              page === pageCount
                ? "border-gray-200 text-gray-300 cursor-not-allowed"
                : "border-dark-red text-dark-red hover:bg-dark-red hover:text-brand-white shadow-sm cursor-pointer"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>

        <div className="mt-12 text-center text-[10px] tracking-[.4em] text-gray-brown/40 uppercase font-sans">
          Page {page} of {pageCount}
        </div>
      </div>

      {/* Pure CSS Modal */}
      {modalImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 cursor-zoom-out animate-in fade-in duration-300"
          onClick={() => setModalImage(null)}
        >
          <img
            src={modalImage}
            alt="Fullscreen view"
            className="max-w-full max-h-[85vh] shadow-2xl transition-transform duration-300 scale-100"
          />
        </div>
      )}
    </section>
  );
};

export default Projects;

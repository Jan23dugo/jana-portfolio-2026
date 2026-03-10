import React from "react";

const Contact = () => {
  return (
    <footer
      id="contact"
      className="bg-pastel-grey/30 border-t border-dark-red/10 pt-12 pb-6"
    >
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center text-center w-full">
        {/* Header */}
        <h2 className="font-script text-dark-red text-4xl md:text-5xl mb-2 mt-4 animate-fade-in">
          Let's Connect
        </h2>
        <p className="font-sans text-gray-brown tracking-[0.2em] uppercase text-[9px] mb-8 max-w-lg">
          Ready for your growth? Send me a message and let's get started.
        </p>

        {/* Contact Links */}
        <div className="flex flex-row justify-center items-center gap-8 md:gap-12 mb-10">
          {/* Facebook */}
          <a
            href="https://www.facebook.com/jana.virtuales?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3"
          >
            <div className="w-12 h-12 rounded-full overflow-hidden border border-dark-red/20 bg-brand-white flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:border-dark-red/50">
              <img
                src="/assets/contacts/facebook.jpg"
                alt="Facebook"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <span className="font-sans text-[8px] tracking-[0.2em] uppercase text-gray-brown group-hover:text-dark-red transition-colors duration-300">
              Facebook
            </span>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/janavirtuales"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3"
          >
            <div className="w-12 h-12 rounded-full overflow-hidden border border-dark-red/20 bg-brand-white flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:border-dark-red/50">
              <img
                src="/assets/contacts/instagram.jpg"
                alt="Instagram"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <span className="font-sans text-[8px] tracking-[0.2em] uppercase text-gray-brown group-hover:text-dark-red transition-colors duration-300">
              Instagram
            </span>
          </a>

          {/* Email */}
          <a
            href="https://mail.google.com/mail/?view=cm&source=mailto&to=janavirtuales@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3"
          >
            <div className="w-12 h-12 rounded-full overflow-hidden border border-dark-red/20 bg-brand-white flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:border-dark-red/50">
              <img
                src="/assets/contacts/email.jpg"
                alt="Email"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <span className="font-sans text-[8px] tracking-[0.2em] uppercase text-gray-brown group-hover:text-dark-red transition-colors duration-300">
              Email Me
            </span>
          </a>
        </div>

        {/* Copyright / Bottom Branding */}
        <div className="mt-8 border-t border-gray-brown/10 pt-6 w-full">
          <p className="font-sans text-[8px] tracking-widest uppercase text-gray-brown/50">
            &copy; {new Date().getFullYear()} Jana Virtuales. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;

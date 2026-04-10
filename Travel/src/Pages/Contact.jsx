import React from "react";

const Contact = () => {
  return (
    <div className="px-6 md:px-16 py-26 bg-white">
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-14 items-center animate-fadeIn relative">
        
        {/* LEFT */}
        <div className="max-w-3xl pr-8 md:pr-10">
          
          <h2 className="text-3xl md:text-4xl font-serif text-gray-800 leading-snug">
            Let’s Plan Your <br />
            <span className=" text-blue-600">Next Journey</span>
          </h2>

          <p className="mt-3 text-gray-500 text-sm leading-relaxed">
            Tell us your travel idea — we’ll turn it into a memorable North India experience.
          </p>

          {/* FORM */}
          <div className="mt-8 space-y-5 text-sm">
            
            {["Full Name", "Email", "Phone Number"].map((label, i) => (
              <div key={i}>
                <label className="text-gray-600 text-xs">{label}</label>
                <input
                  type="text"
                  placeholder={`Enter your ${label.toLowerCase()}`}
                  className="w-full border-b border-gray-300 focus:border-blue-600 outline-none py-2 bg-transparent transition placeholder:text-gray-400"
                />
              </div>
            ))}

            <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-full text-sm hover:bg-blue-700 transition transform hover:scale-[1.03]">
              Get In Touch →
            </button>

          </div>

        </div>

        {/* VERTICAL DIVIDER */}
        <div className="hidden md:block absolute right-100 top-10 bottom-10 w-px bg-gray-200"></div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end pl-6 md:pl-10">
          
          <div className="relative w-65 md:w-92.5 h-80 md:h-100 rounded-2xl overflow-hidden group shadow-sm border border-gray-200">
            
            <img
              src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
              alt="travel"
              className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/20 to-transparent"></div>

            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-sm font-medium leading-snug">
                Explore North India like never before ✈️
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* Animation */}
      <style>{`
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

    </div>
  );
};

export default Contact;
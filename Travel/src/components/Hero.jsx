import React from "react";
import bg from "../assets/bg.png"; // Ensure this path is correct
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {

     const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <div className="p-2 bg-cover" style={{ backgroundImage: `url(${bg})` }}>
      <motion.div
       variants={fadeInUp}
  initial="hidden"
  animate="visible"
      className="relative min-h-120  pt-24 pb-10 flex flex-col items-center justify-center text-center rounded-2xl overflow-hidden px-10">
        {/* HEADING */}
        <h1 className="text-4xl md:text-6xl text-gray-800 leading-tight mb-4 z-10  tracking-tight">
          Where the <br />
          <span className="bg-linear-to-r from-blue-500 to-blue-300 bg-clip-text text-transparent">
            Himalayas
          </span>{" "}
          Touch the Sky
        </h1>

        {/* DESCRIPTION */}
        <p className="text-sm md:text-base text-gray-500 max-w-lg mb-8 z-10 leading-relaxed">
          From ancient desert forts to glacial mountain passes — North India
          holds landscapes and experiences unlike anywhere else on earth.
        </p>

        {/* TAGS */}
        <div className="flex flex-wrap justify-center gap-2 mb-6 z-10">
          {[
            "🏰 Rajasthan",
            "🏔️ Ladakh",
            "❄️ Kashmir",
            "🌲 Himachal",
            "🙏 Uttarakhand",
          ].map((tag, i) => (
            <div
              key={i}
              className={`px-4 py-1.5 text-xs  rounded-full border cursor-pointer shadow-sm transition-all hover:-translate-y-0.5 ${
                i === -1
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-white text-blue-500 border-blue-200 hover:bg-blue-50 hover:border-blue-300"
              }`}
            >
              {tag}
            </div>
          ))}
        </div>
        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 z-10 mt-2">
          <button className="bg-blue-500 text-white px-8 py-3.5 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
            Explore Destinations
          </button>

          <button className="bg-white text-blue-500 px-8 py-3.5 rounded-full text-sm font-semibold border border-blue-200 hover:border-blue-400 shadow-sm hover:shadow-md transition-all">
            View Packages →
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{
            opacity: 1,
            x: 0,
            y: [0, -10, 0], 
          }}
          transition={{
            opacity: { duration: 0.8 },
            x: { duration: 0.8 },
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          className="hidden md:flex absolute bottom-[15%] left-[6%] bg-white/90 backdrop-blur-sm rounded-xl shadow-lg px-4 py-3 gap-3 items-center cursor-default z-20"
        >
          <span className="text-xl">✈️</span>
          <div className="text-left">
            <div className="text-sm font-bold text-gray-800">12,000+ Trips</div>
            <div className="text-xs text-gray-500">Since 1998</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{
            opacity: 1,
            x: 0,
            y: [0, 10, 0],
          }}
          transition={{
            opacity: { duration: 0.8, delay: 0.2 },
            x: { duration: 0.8, delay: 0.2 },
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            },
          }}
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          className="hidden md:flex absolute bottom-[45%] right-[6%] bg-white/90 backdrop-blur-sm rounded-xl shadow-lg px-4 py-3 gap-3 items-center cursor-default z-20"
        >
          <span className="text-xl">🏔️</span>
          <div className="text-left">
            <div className="text-sm font-bold text-gray-800">5,400m High</div>
            <div className="text-xs text-gray-500">Highest Pass</div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;

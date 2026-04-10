import React, { useState } from "react";
import {
  Ship,
  Anchor,
  Map,
  Calendar,
  Users,
  Star,
  Wifi,
  Utensils,
  Dumbbell,
  Music,
} from "lucide-react";
import { motion } from "framer-motion";

const Cruise = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "5 Nights", "7 Nights", "10+ Nights"];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const cruises = [
    {
      title: "Mediterranean Wonders",
      nights: "7 Nights",
      desc: "Italy, Greece, Spain",
      price: "$1,299",
      tag: "Best Seller",
      rating: 4.9,
      reviews: 1240,
      ship: "MS Adriatica",
      passengers: "2,800 guests",
      color: "from-blue-500 to-blue-400",
    },
    {
      title: "Caribbean Escape",
      nights: "5 Nights",
      desc: "Bahamas, Mexico",
      price: "$899",
      tag: "Trending",
      rating: 4.7,
      reviews: 980,
      ship: "SS Tropicana",
      passengers: "3,200 guests",
      color: "from-cyan-500 to-teal-400",
    },
    {
      title: "Norwegian Fjords",
      nights: "10 Nights",
      desc: "Norway, Iceland, Denmark",
      price: "$2,150",
      tag: "New Route",
      rating: 4.8,
      reviews: 430,
      ship: "MS Aurora",
      passengers: "1,900 guests",
      color: "from-indigo-500 to-blue-400",
    },
    {
      title: "Asian Discovery",
      nights: "12 Nights",
      desc: "Japan, South Korea, Vietnam",
      price: "$2,799",
      tag: "Luxury",
      rating: 4.9,
      reviews: 610,
      ship: "MV Pacific Star",
      passengers: "2,100 guests",
      color: "from-violet-500 to-purple-400",
    },
  ];

  const amenities = [
    { icon: Utensils, label: "Fine Dining" },
    { icon: Wifi, label: "Free Wi-Fi" },
    { icon: Dumbbell, label: "Fitness Center" },
    { icon: Music, label: "Live Entertainment" },
    { icon: Anchor, label: "Shore Excursions" },
    { icon: Star, label: "Spa & Wellness" },
  ];

  const filtered =
    activeFilter === "All"
      ? cruises
      : cruises.filter((c) =>
          activeFilter === "10+ Nights"
            ? parseInt(c.nights) >= 10
            : c.nights.startsWith(activeFilter.replace(" Nights", "")),
        );

  return (
    <div className="min-h-screen bg-slate-50 pt-8 pb-10 px-6">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        className="max-w-6xl mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-7">
          <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">
            <Ship size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-4">
            Set Sail on an{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300">
              Adventure
            </span>
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto">
            Discover the world's oceans with our premium cruise packages.
          </p>
        </div>

        {/* Amenities Strip */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-6 py-5 mb-7">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest text-center mb-4">
            All Cruises Include
          </p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {amenities.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-1.5 text-center"
              >
                <div className="w-9 h-9 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center">
                  <Icon size={16} />
                </div>
                <span className="text-xs text-gray-500 font-medium">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-3 mb-4 flex-wrap">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                activeFilter === f
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-gray-500 bg-white border border-gray-200 hover:border-blue-400 hover:text-blue-600"
              }`}
            >
              {f}
            </button>
          ))}
          <span className="ml-auto text-sm text-gray-400">
            {filtered.length} packages found
          </span>
        </div>

        {/* Cruise Packages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((cruise, i) => (
            <motion.div
              key={cruise.title}
              variants={fadeInUp}
              className="flex flex-col md:flex-row bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all group cursor-pointer"
            >
              <div
                className={`bg-gradient-to-br ${cruise.color} w-full md:w-48 h-48 md:h-auto flex flex-col items-center justify-center text-white relative overflow-hidden gap-3`}
              >
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                <Ship
                  size={56}
                  className="opacity-50 group-hover:scale-110 transition-transform duration-500"
                />
                <span className="text-xs font-semibold bg-white/20 px-3 py-1 rounded-full z-10 backdrop-blur-sm">
                  {cruise.ship}
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-full mb-1 inline-block">
                      {cruise.tag}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Star
                        size={11}
                        className="text-amber-400 fill-amber-400"
                      />
                      <span className="font-semibold text-gray-700">
                        {cruise.rating}
                      </span>
                      <span>({cruise.reviews.toLocaleString()})</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    {cruise.title}
                  </h3>
                  <div className="flex flex-col gap-2 text-sm text-gray-600 mt-2">
                    <span className="flex items-center gap-2">
                      <Map size={16} className="text-gray-400" /> {cruise.desc}
                    </span>
                    <span className="flex items-center gap-2">
                      <Calendar size={16} className="text-gray-400" />{" "}
                      {cruise.nights}
                    </span>
                    <span className="flex items-center gap-2">
                      <Users size={16} className="text-gray-400" />{" "}
                      {cruise.passengers}
                    </span>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-3 pt-4 border-t border-gray-100">
                  <div>
                    <span className="text-2xl font-bold text-blue-600">
                      {cruise.price}
                    </span>
                    <span className="text-xs text-gray-400 ml-1">/ person</span>
                  </div>
                  <button className="text-blue-600 font-semibold hover:text-blue-800">
                    View Itinerary →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Cruise;

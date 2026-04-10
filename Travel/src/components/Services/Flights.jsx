import React, { useState } from "react";
import { motion } from "framer-motion";
import { PlaneTakeoff, PlaneLanding, Calendar, Users, Search, ArrowLeftRight } from "lucide-react";

const Flights = () => {
  const [tripType, setTripType] = useState("one-way");
  const [passengers, setPassengers] = useState(1);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const popularRoutes = [
    { from: "Delhi", to: "Goa", price: "₹4,500", time: "2h 30m", airline: "IndiGo", tag: "Most Popular" },
    { from: "Mumbai", to: "Dubai", price: "₹12,000", time: "3h 15m", airline: "Air India", tag: "Best Deal" },
    { from: "Bangalore", to: "Singapore", price: "₹15,500", time: "4h 45m", airline: "Vistara", tag: "Top Rated" },
    { from: "Chennai", to: "Bangkok", price: "₹11,200", time: "3h 50m", airline: "SpiceJet", tag: null },
    { from: "Hyderabad", to: "London", price: "₹42,000", time: "11h 20m", airline: "British Airways", tag: "International" },
    { from: "Kolkata", to: "Kuala Lumpur", price: "₹9,800", time: "3h 25m", airline: "AirAsia", tag: null },
  ];

  const airlines = [
    { name: "IndiGo", code: "6E", color: "#1a0dab" },
    { name: "Air India", code: "AI", color: "#c8102e" },
    { name: "Vistara", code: "UK", color: "#6b21a8" },
    { name: "SpiceJet", code: "SG", color: "#ea580c" },
    { name: "AirAsia", code: "I5", color: "#dc2626" },
    { name: "British Airways", code: "BA", color: "#1d4ed8" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-12 pb-12 px-6">
      <motion.div
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        className="max-w-6xl mx-auto"
      >
        {/* Header */}
        <motion.div variants={fadeInUp} className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-4">
            Book Your Next{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-blue-300">
              Flight
            </span>
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto">
            Find the best deals on domestic and international flights with our partnered airlines.
          </p>
        </motion.div>

        {/* Search Widget */}
        <motion.div
          variants={fadeInUp}
          className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 max-w-4xl mx-auto mb-6"
        >
          {/* Trip Type Toggle */}
          <div className="flex items-center gap-3 mb-5">
            {["one-way", "round-trip", "multi-city"].map((type) => (
              <button
                key={type}
                onClick={() => setTripType(type)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all capitalize ${
                  tripType === type
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-gray-500 hover:text-blue-600 hover:bg-blue-50"
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
            {/* From */}
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-gray-500 uppercase">From</label>
              <div className="flex items-center border border-gray-200 rounded-lg px-3 py-2 focus-within:border-blue-500 transition-colors">
                <PlaneTakeoff size={18} className="text-blue-400 mr-2 flex-shrink-0" />
                <input type="text" placeholder="New Delhi (DEL)" className="w-full outline-none text-gray-700" />
              </div>
            </div>

            {/* Swap Button */}
            <div className="hidden md:flex justify-center items-end pb-2">
              <button className="p-1.5 rounded-full border border-gray-200 hover:border-blue-400 hover:text-blue-500 text-gray-400 transition-all hover:rotate-180 duration-300">
                <ArrowLeftRight size={16} />
              </button>
            </div>

            {/* To */}
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-gray-500 uppercase">To</label>
              <div className="flex items-center border border-gray-200 rounded-lg px-3 py-2 focus-within:border-blue-500 transition-colors">
                <PlaneLanding size={18} className="text-blue-400 mr-2 flex-shrink-0" />
                <input type="text" placeholder="London (LHR)" className="w-full outline-none text-gray-700" />
              </div>
            </div>

            {/* Date */}
<div className="flex flex-col gap-1">
  <label className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide">
    Date
  </label>

  <div className="flex items-center border border-gray-200 rounded-lg px-3 py-2 focus-within:border-blue-500 transition">

    <input
      type="date"
      className="w-full text-sm text-gray-600 bg-transparent outline-none cursor-pointer 
      [color-scheme:light] 
      [&::-webkit-calendar-picker-indicator]:opacity-100 
      [&::-webkit-calendar-picker-indicator]:cursor-pointer 
      [&::-webkit-calendar-picker-indicator]:invert-[0.5] 
      [&::-webkit-calendar-picker-indicator]:sepia 
      [&::-webkit-calendar-picker-indicator]:saturate-[5] 
      [&::-webkit-calendar-picker-indicator]:hue-rotate-[180deg]"
    />

  </div>
</div>

            {/* Passengers */}
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-gray-500 uppercase">Passengers</label>
              <div className="flex items-center border border-gray-200 rounded-lg px-3 py-2 focus-within:border-blue-500 transition-colors">
                <Users size={18} className="text-blue-400 mr-2 flex-shrink-0" />
                <button
                  onClick={() => setPassengers((p) => Math.max(1, p - 1))}
                  className="text-gray-400 hover:text-blue-500 font-bold px-1"
                >
                  −
                </button>
                <span className="flex-1 text-center text-gray-700 font-medium">{passengers}</span>
                <button
                  onClick={() => setPassengers((p) => Math.min(9, p + 1))}
                  className="text-gray-400 hover:text-blue-500 font-bold px-1"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium shadow-md transition-all flex justify-center items-center gap-2">
            <Search size={18} /> Search Flights
          </button>
        </motion.div>

        {/* Airline Partners Strip */}
        <motion.div variants={fadeInUp} className="max-w-4xl mx-auto mb-12">
          <p className="text-center text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
            Our Partner Airlines
          </p>
          <div className="flex justify-center flex-wrap gap-3">
            {airlines.map((airline) => (
              <div
                key={airline.code}
                className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              >
                <span
                  className="text-xs font-bold px-1.5 py-0.5 rounded text-white"
                  style={{ backgroundColor: airline.color }}
                >
                  {airline.code}
                </span>
                <span className="text-sm text-gray-600 font-medium">{airline.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Popular Routes */}
        <motion.div variants={fadeInUp}>
          <h2 className="text-xl font-semibold text-gray-700 mb-6">Popular Routes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {popularRoutes.map((route, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all hover:-translate-y-1 cursor-pointer relative overflow-hidden"
              >
                {route.tag && (
                  <span className="absolute top-3 right-3 text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                    {route.tag}
                  </span>
                )}
                <div className="flex justify-between items-center mb-3">
                  <div className="text-lg font-bold text-gray-800">{route.from}</div>
                  <PlaneTakeoff size={20} className="text-blue-300" />
                  <div className="text-lg font-bold text-gray-800">{route.to}</div>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <div>
                    <span className="text-gray-500">{route.time} • Direct</span>
                    <p className="text-xs text-gray-400 mt-0.5">{route.airline}</p>
                  </div>
                  <span className="text-blue-600 font-semibold text-lg">From {route.price}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Flights;
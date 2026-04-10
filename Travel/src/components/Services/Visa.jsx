import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Globe,
  ShieldCheck,
  Star,
  Calendar,
  Zap,
  ChevronRight,
  Info,
} from "lucide-react";

const Visa = () => {
  const [destination, setDestination] = useState("");

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Looping Flags Data
  const flagPool = [
    "🇦🇪",
    "🇦🇹",
    "🇬🇧",
    "🇺🇸",
    "🇨🇦",
    "🇦🇺",
    "🇩🇪",
    "🇯🇵",
    "🇰🇷",
    "🇹🇭",
    "🇻🇳",
    "🇲🇾",
    "🇮🇳",
    "🇸🇬",
    "🇨🇵",
    "🇪🇸",
    "🇫🇷",
    "🇮🇹",
    "🇨🇿",
    "🇳🇱",
  ];
  // Generic Customer Reviews
  const reviews = [
    {
      country: "🇦🇪 UAE",
      title: "Extremely Fast Service",
      text: "I needed a visa urgently for a business meeting. The express processing option got it done in under 48 hours. Communication was excellent throughout.",
      name: "Alex Johnson",
      date: "14/08/2026",
    },
    {
      country: "🇯🇵 Japan",
      title: "Simplified the Process",
      text: "The paperwork for Japan always stressed me out. This platform guided me step-by-step on which documents to upload. Minimal effort on my end.",
      name: "Priya Sharma",
      date: "02/09/2026",
    },
    {
      country: "🇬🇧 UK",
      title: "High Success Rate",
      text: "I was worried about my UK visa application being rejected, but the experts reviewed my documents thoroughly. Approved on the first try!",
      name: "Li Wei",
      date: "22/07/2026",
    },
    {
      country: "🇸🇬 Singapore",
      title: "Highly Recommend",
      text: "Very user-friendly website. Uploaded everything online, and my e-visa arrived in my email within 3 days. No hidden fees!",
      name: "David Smith",
      date: "10/10/2026",
    },
  ];

const popularCountries = [
  {
    country: "United Arab Emirates",
    flag: "🇦🇪",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=600",
    type: "E-VISA",
    date: "14 Apr",
    processed: "10k+",
    price: "6,950",
    color: "from-emerald-500 to-green-600",
  },
  {
    country: "Thailand",
    flag: "🇹🇭",
    image: "https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGhhaWxhbmR8ZW58MHx8MHx8fDA%3D",
    type: "DAC",
    date: "10 Apr",
    processed: "5k+",
    price: "0",
    color: "from-blue-600 to-red-600",
  },
  {
    country: "Vietnam",
    flag: "🇻🇳",
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=600",
    type: "E-VISA",
    date: "14 Apr",
    processed: "2k+",
    price: "2,500",
    color: "from-red-600 to-yellow-500",
  },
  {
    country: "Indonesia",
    flag: "🇮🇩",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=600",
    type: "EVOA",
    date: "10 Apr",
    processed: "1k+",
    price: "3,000",
    color: "from-red-600 to-slate-100",
  },
];

  const europeCountries = [
    {
      name: "France",
      date: "15 Apr",
      type: "STICKER VISA",
      colors: "bg-blue-800 via-white to-red-600",
    },
    {
      name: "Spain",
      date: "15 Apr",
      type: "STICKER VISA",
      colors: "bg-red-600 via-yellow-500 to-red-600",
    },
    {
      name: "Finland",
      date: "19 Apr",
      type: "STICKER VISA",
      colors: "bg-blue-700 via-white to-blue-700",
    },
    {
      name: "Germany",
      date: "13 Apr",
      type: "STICKER VISA",
      colors: "bg-black via-red-600 to-yellow-500",
    },
  ];

  const loopingFlags = [...flagPool, ...flagPool, ...flagPool];
  return (
    <div className="min-h-screen bg-slate-50 pb-2 font-sans">
      {/* SEARCH BANNER SECTION */}
      <div className="bg-[#1a2b49] pt-12 pb-22 px-6 text-center relative overflow-hidden">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto relative z-10"
        >
          <h1 className="text-white text-3xl md:text-3xl font-bold mb-6">
            Apply for a Visa :{" "}
            <span className="text-blue-400">On Time, Powered by Experts</span>
          </h1>

          <div className="bg-white p-2 md:p-4 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center gap-4 border border-white/20">
            <div className="flex-1 w-full text-left px-4 py-2 border-r border-slate-100">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">
                Select Destination
              </p>
              <div className="flex items-center gap-2">
                <Globe size={18} className="text-blue-600" />
                <input
                  className="w-full outline-none font-bold text-slate-700 text-lg placeholder:text-slate-300"
                  placeholder="Where are you going?"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
            </div>
            <div className="flex-1 w-full text-left px-4 py-2 border-r border-slate-100">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">
                Departure Date
              </p>
              <div className="flex items-center gap-2 text-slate-300 font-bold text-lg">
                <Calendar size={18} className="text-blue-600" /> Select Date
              </div>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-2xl font-black uppercase tracking-widest text-sm shadow-lg shadow-blue-500/30 transition-all">
              Search
            </button>
          </div>
        </motion.div>
      </div>
      <div className="max-w-7xl mx-auto px-6 -mt-13">
        {/* TOP STATS BAR */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
        >
          {" "}
          {[
            { icon: ShieldCheck, label: "Verified Experts", val: "100%" },
            { icon: Zap, label: "Fast Approval", val: "48Hrs" },
            { icon: Star, label: "User Rating", val: "4.9/5" },
            { icon: FileText, label: "Secure Vault", val: "AES-256" },
          ].map((s, i) => (
            <div
              key={i}
              className="bg-white/80 backdrop-blur-md p-4 rounded-2xl border border-white flex items-center gap-3 shadow-sm"
            >
              <div className="text-blue-600">
                <s.icon size={20} />
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">
                  {s.label}
                </p>
                <p className="text-sm font-black text-slate-800">{s.val}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* MOST VISITED SECTION */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-2xl font-black text-slate-800">
              Most-visited Countries
            </h2>
            <p className="text-blue-600 font-bold text-sm cursor-pointer flex items-center gap-1">
              View All <ChevronRight size={16} />
            </p>
          </div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {popularCountries.map((c, i) => (
  <motion.div
    key={i}
    whileHover={{ y: -5 }}
    className="bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm group"
  >
    {/* ADDED IMAGE SECTION */}
    <div className="h-35 w-full overflow-hidden relative">
      <img 
        src={c.image} 
        alt={c.country} 
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      <span className="absolute bottom-3 left-4 text-2xl">{c.flag}</span>
    </div>

    <div className="p-6">
      <div className="flex justify-between items-start mb-3">
        {/* We moved the flag to the image, so we just keep the badge here */}
        <span className="bg-blue-50 text-blue-600 text-[10px] font-black px-2 py-1 rounded-md flex items-center gap-1">
          {c.type} <Info size={10} />
        </span>
      </div>
      
      <h3 className="text-lg font-bold text-slate-800 mb-2">
        {c.country}
      </h3>
      
      {/* ... rest of your code (Calendar, processed text, price, etc.) ... */}
      <div className="space-y-3 mb-2">
        <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
          <Calendar size={14} className="text-blue-500" /> Get visa by{" "}
          <span className="text-slate-900 font-bold">{c.date}</span>
        </div>
        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-tighter">
          {c.processed} Visas Processed
        </p>
      </div>

      <div className="pt-2 border-t border-slate-50 flex justify-between items-center">
        <div>
          <p className="text-[10px] font-black text-slate-300 uppercase">Starting From</p>
          <p className="text-lg font-black text-slate-900">₹{c.price}</p>
        </div>
        <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
          <ChevronRight size={20} />
        </div>
      </div>
    </div>
  </motion.div>
))}
          </motion.div>
        </motion.div>

        {/* EUROPE SECTION (Refined Ref Design) */}
        <motion.div variants={fadeInUp} initial="hidden" animate="visible">
          <h2 className="text-2xl font-black text-slate-800 mb-3">
            Visit Europe!
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {europeCountries.map((e, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm relative group cursor-pointer"
              >
                <div
                  className={`h-24 w-full bg-gradient-to-tr ${e.colors} opacity-90 relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]" />
                  <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md px-2 py-1 rounded text-[9px] font-black text-white uppercase border border-white/20">
                    {e.type}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-black text-slate-800 mb-1">
                    {e.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mb-4 leading-relaxed">
                    Know your appointment date by{" "}
                    <span className="text-blue-600 font-bold">{e.date}</span>
                  </p>
                  <span className="text-xs font-black text-blue-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                    Apply Now <ChevronRight size={14} />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Customer Reviews Section */}
        <motion.div
          variants={fadeInUp}
          className="rounded-3xl py-10  border-blue-100 mb-3"
        >
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tighter">
              Verified Traveler Experiences
            </h2>
            <div className="flex items-center gap-2">
              <button className="text-blue-600 p-2 bg-white rounded-full border border-slate-200">
                ←
              </button>
              <button className="text-blue-600 p-2 bg-white rounded-full border border-slate-200">
                →
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((r, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center mb-4 pb-2 border-b border-slate-100">
                    <span className="text-xl font-medium text-slate-600">
                      {r.country}
                    </span>
                    <Star size={16} fill="#FFD700" className="text-amber-400" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2 leading-tight">
                    {r.title}
                  </h4>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 italic">
                    "{r.text}"
                  </p>
                </div>
                <div className="text-xs text-slate-400 flex justify-between items-center pt-3 border-t border-slate-50 mt-auto">
                  <span>{r.name}</span>
                  <span>{r.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      {/* Looping Flag Banner */}
      <motion.div
        variants={fadeInUp}
        className=" rounded-3xl  px-6 border-slate-100 border-t py-2 overflow-hidden"
      >
        <h3 className="text-center text-slate-500 text-lg italic mb-2">
          Explore more than 50 destinations globally
        </h3>
        <div className="w-full relative">
          {/* We use a multi-copy of flags to create a seamless infinite loop */}
          <motion.div
            animate={{ x: ["0%", "-50%"] }} // Adjust the distance for the seamless transition
            transition={{
              repeat: Infinity,
              duration: 120, // Duration for the full cycle
              ease: "linear",
            }}
            className="flex items-center gap-10 whitespace-nowrap"
          >
            {loopingFlags.map((flag, idx) => (
              <span key={idx} className="text-4xl">
                {flag}
              </span>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Visa;

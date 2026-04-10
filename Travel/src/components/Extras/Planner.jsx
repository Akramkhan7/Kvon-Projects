import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Compass,
  Users,
  Sparkles,
  MapPin,
  Wand2,
} from "lucide-react";

const Planner = () => {
  const [destination, setDestination] = useState("");
  const [days, setDays] = useState("");
  const [style, setStyle] = useState("Balanced");
  const [group, setGroup] = useState("Solo");

  const travelStyles = ["Adventure", "Luxury", "Budget", "Balanced", "Relaxation"];
  const groupTypes = ["Solo", "Couple", "Family", "Friends"];

  const suggestions = ["Bali", "Paris", "Dubai", "Tokyo", "Switzerland"];

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-5">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-9"
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles size={14} /> AI Trip Planner
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Design Your Perfect <span className="text-blue-500">Journey</span>
          </h1>

          <p className="text-gray-500 mt-2 max-w-xl mx-auto">
            Tell us your vibe, and we’ll craft a smart, day-by-day itinerary just for you.
          </p>
        </motion.div>

        {/* MAIN CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-6 md:p-10 rounded-3xl border border-blue-200 "
        >
          {/* QUICK SUGGESTIONS */}
          <div className="mb-4">
            <p className="text-xs text-gray-400 mb-2 font-semibold uppercase">
              Popular Picks
            </p>
            <div className="flex flex-wrap gap-2">
              {suggestions.map((s) => (
                <button
                  key={s}
                  onClick={() => setDestination(s)}
                  className="px-3 py-1.5 text-sm bg-slate-100 hover:bg-blue-100 hover:text-blue-600 rounded-full transition"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* INPUT GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">

            {/* Destination */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase">
                Destination
              </label>
              <div className="flex items-center bg-slate-50  rounded-2xl px-4 py-3 focus-within:border-blue-500">
                <MapPin size={18} className="text-blue-500 mr-3" />
                <input
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="Where do you want to go?"
                  className="w-full bg-transparent outline-none"
                />
              </div>
            </div>

            {/* Days */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase">
                Duration
              </label>
              <div className="flex items-center bg-slate-50  rounded-2xl px-4 py-3  focus:border-blue-500">
                <Calendar size={18} className="text-blue-500 mr-3" />
                <input
                  type="number"
                  value={days}
                  onChange={(e) => setDays(e.target.value)}
                  placeholder="How many days?"
                  className="w-full bg-transparent outline-none"
                />
              </div>
            </div>

            {/* Style */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase">
                Travel Style
              </label>
              <div className="flex items-center bg-slate-50  rounded-2xl px-4 py-3">
                <Compass size={18} className="text-blue-500 mr-3" />
                <select
                  value={style}
                  onChange={(e) => setStyle(e.target.value)}
                  className="w-full bg-transparent outline-none"
                >
                  {travelStyles.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Group */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase">
                Travelers
              </label>
              <div className="flex items-center bg-slate-50  rounded-2xl px-4 py-3">
                <Users size={18} className="text-blue-500 mr-3" />
                <select
                  value={group}
                  onChange={(e) => setGroup(e.target.value)}
                  className="w-full bg-transparent outline-none"
                >
                  {groupTypes.map((g) => (
                    <option key={g}>{g}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* SMART PREVIEW */}
          {(destination || days) && (
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-2 mb-4 text-xs text-blue-700">
              ✨ Planning a <b>{days || "?"}-day</b> trip to{" "}
              <b>{destination || "your destination"}</b> for a{" "}
              <b>{group}</b> with a <b>{style}</b> vibe.
            </div>
          )}

          {/* CTA */}
          <motion.button
            whileTap={{ scale: 0.97 }}
            className=" w-[80%] bg-gradient-to-r from-blue-600 to-blue-400 text-white py-4 rounded-2xl font-semibold text-md shadow-md hover:shadow-lg transition flex items-center justify-center gap-2"
          >
            <Wand2 size={16} />
            Generate Smart Itinerary
          </motion.button>
        </motion.div>

        {/* EXTRA VALUE */}
        <div className="mt-8 grid md:grid-cols-3 gap-6 text-center">
          {[
            {
              title: "Day-wise Plan",
              desc: "Detailed itinerary for each day.",
            },
            {
              title: "Hidden Gems",
              desc: "Discover unique local experiences.",
            },
            {
              title: "Optimized Routes",
              desc: "Save time with smart navigation.",
            },
          ].map((item, i) => (
            <div key={i} className="bg-white p-5 rounded-2xl shadow-sm border border-blue-500">
              <h4 className="font-semibold text-blue-500 mb-1">
                {item.title}
              </h4>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Planner;
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Compass,
  Users,
  Sparkles,
  MapPin,
  Wand2,
  IndianRupee,
  Clock3,
  Star,
  ShieldCheck,
  Loader,
  X,
  ChevronRight
} from "lucide-react";
import {
  Umbrella,
  Mountain,
  Utensils,
  PawPrint,
  Landmark,
  Music,
  ShoppingBag,
  HeartPulse,
} from "lucide-react";

// --- Mock Data ---
const travelStyles = ["Adventure", "Luxury", "Budget", "Balanced", "Relaxation"];
const groupTypes = ["Solo", "Couple", "Family", "Friends"];
const suggestions = ["Bali", "Paris", "Dubai", "Tokyo", "Switzerland"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const interests = [
  { label: "Beaches", icon: Umbrella },
  { label: "Mountains", icon: Mountain },
  { label: "Food & Culture", icon: Utensils },
  { label: "Wildlife", icon: PawPrint },
  { label: "History", icon: Landmark },
  { label: "Nightlife", icon: Music },
  { label: "Shopping", icon: ShoppingBag },
  { label: "Wellness", icon: HeartPulse },
];

const trending = [
  { place: "Bali", tag: "Trending", img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&q=60", rating: "4.9" },
  { place: "Santorini", tag: "Hot Pick", img: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=400&q=60", rating: "4.8" },
  { place: "Maldives", tag: "Luxury", img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=400&q=60", rating: "4.9" },
  { place: "Kyoto", tag: "Cultural", img: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=400&q=60", rating: "4.7" },
];

const Planner = () => {
  // --- UI State ---
  const [destination, setDestination] = useState("");
  const [days, setDays] = useState("");
  const [style, setStyle] = useState("Balanced");
  const [group, setGroup] = useState("Solo");
  const [budget, setBudget] = useState(25000);
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [showItinerary, setShowItinerary] = useState(false);
  const [loading, setLoading] = useState(false);

  // --- Handlers ---
  const toggleInterest = (label) =>
    setSelectedInterests((prev) =>
      prev.includes(label) ? prev.filter((i) => i !== label) : [...prev, label]
    );

  const handleGenerate = () => {
    if (!destination || !days) return alert("Please fill in destination and days");
    setLoading(true);
    // Simulate loading for UI feel
    setTimeout(() => {
      setLoading(false);
      setShowItinerary(true);
    }, 1500);
  };

  // --- Render Result View ---
  if (showItinerary) {
    return (
      <div className="min-h-screen bg-slate-50 px-6 py-12 ">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">{destination}</h1>
              <p className="text-slate-500">{days} Days • {style} • {group}</p>
            </div>
            <button 
              onClick={() => setShowItinerary(false)}
              className="p-2 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition"
            >
              <X size={20} className="text-slate-600" />
            </button>
          </div>

          <div className="space-y-4">
            {[...Array(Number(days))].map((_, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                key={i} 
                className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm"
              >
                <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <span className="bg-blue-600 text-white px-2 py-0.5 rounded text-xs">Day {i + 1}</span>
                  Exploring the Essence
                </h3>
                <div className="space-y-3 text-sm text-slate-600">
                  <div className="flex gap-4"><span className="w-16 font-semibold text-slate-400">09:00 AM</span> <p>Morning sightseeing and breakfast at a local cafe.</p></div>
                  <div className="flex gap-4"><span className="w-16 font-semibold text-slate-400">01:00 PM</span> <p>Lunch followed by cultural immersion activities.</p></div>
                  <div className="flex gap-4"><span className="w-16 font-semibold text-slate-400">07:00 PM</span> <p>Evening leisure walk and dinner.</p></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // --- Render Form View ---
  return (
    <div className=" bg-white px-6 py-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-5">
          <div className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-widest mb-3">
            <Sparkles size={14} /> AI Planner
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-3">Plan your next <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-blue-300">Trip.</span></h1>
          <p className="text-slate-500 text-sm">Fill in the details below to generate a professional itinerary.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Inputs */}
          <div className="lg:col-span-2 space-y-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Destination */}
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Destination</label>
                <div className="flex items-center bg-slate-50 border border-slate-100 rounded-lg px-4 py-3 focus-within:border-blue-500 transition">
                  <MapPin size={18} className="text-slate-400 mr-3" />
                  <input
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="e.g. Switzerland"
                    className="w-full bg-transparent outline-none text-sm font-medium"
                  />
                </div>
              </div>

              {/* Days */}
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Duration (Days)</label>
                <div className="flex items-center bg-slate-50 border border-slate-100 rounded-lg px-4 py-3">
                  <Calendar size={18} className="text-slate-400 mr-3" />
                  <input
                    type="number"
                    value={days}
                    onChange={(e) => setDays(e.target.value)}
                    placeholder="1-30"
                    className="w-full bg-transparent outline-none text-sm font-medium"
                  />
                </div>
              </div>

              {/* Travel Style */}
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Style</label>
                <select 
                  value={style} 
                  onChange={(e) => setStyle(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-100 rounded-lg px-4 py-3 text-sm font-medium outline-none"
                >
                  {travelStyles.map(s => <option key={s}>{s}</option>)}
                </select>
              </div>

              {/* Travelers */}
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Travelers</label>
                <select 
                  value={group} 
                  onChange={(e) => setGroup(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-100 rounded-lg px-4 py-3 text-sm font-medium outline-none"
                >
                  {groupTypes.map(g => <option key={g}>{g}</option>)}
                </select>
              </div>
            </div>

            {/* Interests Chips */}
            <div className="space-y-3">
  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
    What interests you?
  </label>

  <div className="flex flex-wrap gap-2 mt-2">
    {interests.map(({ label, icon: Icon }) => (
      <button
        key={label}
        onClick={() => toggleInterest(label)}
        className={`flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-full border transition-all ${
          selectedInterests.includes(label)
            ? "bg-slate-900 text-white border-slate-900"
            : "bg-white text-slate-600 border-slate-200 hover:border-slate-400"
        }`}
      >
        <Icon size={14} /> {label}
      </button>
    ))}
  </div>
</div>

            {/* Budget Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-end">
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Max Budget (Per Person)</label>
                <span className="text-lg font-bold text-blue-600">₹{budget.toLocaleString()}</span>
              </div>
              <input
                type="range" min={5000} max={150000} step={1000}
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
            </div>

            <button
              onClick={handleGenerate}
              disabled={loading}
              className="w-full py-4 bg-slate-900 text-white rounded-lg font-bold text-sm hover:bg-slate-800 transition flex items-center justify-center gap-3 shadow-xl shadow-slate-200"
            >
              {loading ? <Loader className="animate-spin" size={18} /> : <><Wand2 size={18} /> Generate Itinerary</>}
            </button>
          </div>

          {/* Sidebar / Trending */}
          <div className="">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest">Trending Now</h3>
            <div className="grid grid-cols-1 gap-4">
              {trending.map((t, i) => (
                <div 
                  key={i} 
                  onClick={() => setDestination(t.place)}
                  className="group relative h-25 rounded-xl overflow-hidden cursor-pointer border border-slate-100"
                >
                  <img src={t.img} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" alt={t.place} />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex flex-col justify-center px-4">
                    <span className="text-white font-bold text-sm">{t.place}</span>
                    <span className="text-white/70 text-[10px] uppercase font-bold tracking-tighter">{t.tag}</span>
                  </div>
                </div>
              ))}
            </div>

           
          </div>

        </div>
      </div>
    </div>
  );
};

export default Planner;
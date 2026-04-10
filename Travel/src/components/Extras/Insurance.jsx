import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShieldCheck, 
  Globe, 
  HeartPulse, 
  Plane, 
  ArrowRight,
  CheckCircle, 
  FileText, 
  ChevronDown,
  Users,
  Award,
  Zap,
  MapPin,
  Stethoscope
} from "lucide-react";

const Insurance = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [tripType, setTripType] = useState("Single Trip");

   const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const metrics = [
    { label: "Claim Settlement Ratio", value: "99%", icon: Award },
    { label: "Cashless Claims", value: "100%", icon: Zap },
    { label: "Support by Tata AIG", value: "24X7", icon: ShieldCheck },
    { label: "Happy Customers", value: "12 Lakh+", icon: Users },
  ];

  const planTypes = [
    {
      title: "Travel + Medical Insurance",
      tag: "Visa Compliant",
      desc: "Worldwide Travel & Medical Insurance with OPD benefits. Get instant policy issuance with no KYC required.",
      icon: HeartPulse,
      color: "blue"
    },
    {
      title: "Annual Multi Trip Insurance",
      tag: "Recommended for frequent travellers",
      desc: "Enjoy unlimited trips with automatic protection every time you travel abroad for one year.",
      icon: Plane,
      color: "indigo"
    },
    {
      title: "Global Student Insurance",
      tag: "For students travelling abroad",
      desc: "Get affordable, long-term protection for up to two years - global coverage to complement university insurance.",
      icon: Award,
      color: "emerald"
    }
  ];

  const faqs = [
    { q: "What benefits are included when purchasing travel insurance?", a: "Benefits include medical expenses coverage, trip cancellation/interruption reimbursement, baggage loss protection, and 24/7 emergency assistance." },
    { q: "What are the exclusions when purchasing travel insurance?", a: "Common exclusions include pre-existing medical conditions (unless specified), extreme sports, and incidents related to intoxication or illegal acts." },
    { q: "What is the claim process for a travel insurance?", a: "Notify your provider immediately, gather all necessary documentation (medical reports, FIR, etc.), and submit your claim through the mobile app or web portal." }
  ];

  return (
    <div className="min-h-screen  font-sans selection:bg-blue-100 pb-10">
      
     {/* 1. SEARCH / SELECTION BAR */}
<div className="bg-[#0f172a] pt-6 pb-24 px-6 relative overflow-hidden">
  <motion.div 
   variants={fadeInUp}
  initial="hidden"
  animate="visible"
  className="max-w-6xl mx-auto relative z-10">
    
    {/* Trip & Plan Type Toggles */}
    <div className="flex flex-wrap items-center gap-4 mb-6">
      <div className="flex gap-1">
        {["Single Trip", "Annual Multi Trip"].map((t) => (
          <button 
            key={t}
            onClick={() => setTripType(t)}
            className={`flex items-center gap-2 px-3 py-2 rounded-full text-[10px] font-black uppercase tracking-wider transition-all ${tripType === t ? 'bg-blue-600 text-white' : 'bg-white/10 text-white/40 hover:bg-white/20'}`}
          >
            <div className={`w-2 h-2 rounded-full border ${tripType === t ? 'bg-white border-white' : 'border-white/30'}`} />
            {t}
          </button>
        ))}
      </div>
      <div className="h-4 w-px bg-white/10 hidden md:block" />
     
    </div>

    {/* Interactive Search Bar */}
    <div className="bg-white p-1 rounded-[2rem] shadow-2xl flex flex-col lg:flex-row items-center gap-0 border border-white/10">
      
      {/* Destination Select */}
      <div className="flex-1 w-full text-left px-5 py-4 border-r border-slate-100 group cursor-pointer hover:bg-slate-50/50 transition-colors rounded-l-[1.8rem]">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.15em] mb-1 block">Country/Region</label>
          <div className="flex items-center gap-3">
              <MapPin size={18} className="text-blue-600 shrink-0" />
              <select className="w-full outline-none font-bold text-slate-800 text-lg bg-transparent cursor-pointer appearance-none">
                  <option>Thailand</option>
                  <option>United Arab Emirates</option>
                  <option>Vietnam</option>
                  <option>Indonesia</option>
                  <option>France</option>
              </select>
          </div>
      </div>

      {/* Date Inputs */}
      <div className="flex-[1.2] w-full text-left px-5 py-4 border-r border-slate-100 group hover:bg-slate-50/50 transition-colors">
          <div className="flex justify-between items-center mb-1">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.15em]">Travel Dates</label>
          </div>
          <div className="flex items-center gap-2">
              <input 
                type="date" 
                className="bg-transparent outline-none font-bold text-slate-800 text-sm md:text-base cursor-pointer w-full" 
                defaultValue="2026-04-09"
              />
              <span className="text-slate-300">→</span>
              <input 
                type="date" 
                className="bg-transparent outline-none font-bold text-slate-800 text-sm md:text-base cursor-pointer w-full" 
                defaultValue="2026-04-13"
              />
          </div>
      </div>

      {/* Travellers Select */}
      <div className="flex-1 w-full text-left px-6 py-4 group hover:bg-slate-50/50 transition-colors">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.15em] mb-1 block">No. of Travellers</label>
          <div className="flex items-center gap-3">
              <Users size={18} className="text-blue-600 shrink-0" />
              <select className="w-full outline-none font-bold text-slate-800 text-lg bg-transparent cursor-pointer appearance-none">
                  <option>1 Traveller</option>
                  <option>2 Travellers</option>
                  <option>3 Travellers</option>
                  <option>Family (4+)</option>
              </select>
          </div>
      </div>

      {/* Submit Button */}
      <button className="w-full lg:w-auto bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-[1.5rem] font-black uppercase tracking-[0.2em] text-xs transition-all m-1 shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2 active:scale-[0.98]">
          Explore Plans <ArrowRight size={15} />
      </button>
    </div>


  </motion.div>
</div>

      <div className="max-w-6xl mx-auto px-6 -mt-15 relative z-20">
        
        {/* 2. TRUST METRICS (Reference 5) */}
        <motion.div 
         variants={fadeInUp}
  initial="hidden"
  animate="visible"
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {metrics.map((m, i) => (
            <div key={i} className="bg-white p-4 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50 text-center">
              <div className="bg-slate-50 w-7 h-7 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <m.icon className="text-blue-600" size={18} />
              </div>
              <h3 className="text-2xl font-black text-slate-800">{m.value}</h3>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-1">{m.label}</p>
            </div>
          ))}
        </motion.div>

        {/* 3. PRODUCT OFFERING (Reference 5) */}
        <motion.div
         variants={fadeInUp}
  initial="hidden"
  animate="visible"
        className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-3xl font-black text-slate-900 tracking-tighter">Our Offering & Benefits</h2>
           
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {planTypes.map((p, i) => (
              <motion.div key={i}  className="bg-white rounded-[1rem] border border-gray-200  overflow-hidden flex flex-col">
                <div className="p-8 pb-0">
                  <div className="inline-block bg-blue-50 text-blue-600 px-3 py-0 rounded-full text-[8px] font-black uppercase tracking-widest mb-2">
                    {p.tag}
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-3 leading-tight">{p.title}</h3>
                  <p className="text-slate-500 text-xs font-medium leading-relaxed mb-6">{p.desc}</p>
                </div>
                
                <div className={`mt-auto p-7 pt-0 bg-gradient-to-t from-${p.color}-50/50 to-transparent`}>
                  <div className={`w-full aspect-video bg-slate-100 rounded-xl flex items-center justify-center mb-4 overflow-hidden relative border border-slate-100`}>
                      <p.icon size={60} strokeWidth={1} className="text-slate-200 relative z-10" />
                      <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/60" />
                  </div>
                  <button className="w-full bg-slate-900 text-white py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-blue-600 transition-colors">
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 4. FAQ SECTION (Reference 6) */}
        <motion.div 
         variants={fadeInUp}
  initial="hidden"
  animate="visible"
        className="max-w-6xl mx-auto mb-10">
          <h2 className="text-4xl font-black text-slate-900 mb-2 text-center tracking-tighter">All Your Travel safety questions answered</h2>
          <p className="text-center text-slate-400 font-medium mb-8">Expert advice for your global journeys.</p>
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border rounded-3xl border-gray-200 overflow-hidden ">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full p-7 flex items-center justify-between text-left"
                >
                  <span className="font-bold text-slate-800 text-lg tracking-tight">{faq.q}</span>
                  <div className={`w-8 h-4 rounded-full flex items-center justify-center transition-all ${activeFaq === i ? 'rotate-180  text-black' : 'bg-slate-50 text-slate-400'}`}>
                    <ChevronDown size={18} />
                  </div>
                </button>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                    >
                      <div className="px-8 pb-8 text-slate-500 font-medium leading-relaxed text-sm">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>

        {/* PROTECTION CARDS (Reference 5) */}
        <motion.div
         variants={fadeInUp}
  initial="hidden"
  animate="visible"
        className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Flight Delay Protection", icon: Plane, label: "Flat compensation for 1 hour delay" },
              { title: "Passport Loss Protection", icon: ShieldCheck, label: "Safeguard your passport @ just ₹19" },
              { title: "Baggage Loss Protection", icon: Zap, label: "Stay covered in case of lost baggage" }
            ].map((item, idx) => (
              <div key={idx} className="bg-blue-50/50 border border-blue-100 p-6 rounded-3xl flex items-center gap-4">
                <div className="bg-white p-3 rounded-2xl shadow-sm text-blue-600">
                  <item.icon size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm leading-tight">{item.title}</h4>
                  <p className="text-[10px] font-bold text-blue-600/60 uppercase tracking-widest mt-1">{item.label}</p>
                </div>
              </div>
            ))}
        </motion.div>

      </div>
    </div>
  );
};

export default Insurance;
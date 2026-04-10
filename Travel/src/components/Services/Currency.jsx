import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CreditCard,
  Banknote,
  ShieldCheck,
  ChevronDown,
  Zap,
  Info,
  BadgePercent,
  MapPin,
  RefreshCw,
} from "lucide-react";

const Currency = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [amount, setAmount] = useState("1000");
  const [currency, setCurrency] = useState("USD");
  const [totalINR, setTotalINR] = useState(0);

  // Mock Live Rates (Genuine pricing for North India market)
  const rates = {
    USD: 83.45,
    EUR: 90.12,
    GBP: 105.30,
  };

  // Live Math Calculation Logic
  useEffect(() => {
    const numAmount = parseFloat(amount) || 0;
    const baseValue = numAmount * rates[currency];
    const gst = baseValue * 0.0018; // 0.18% GST on currency exchange
    const serviceFee = numAmount > 0 ? 250 : 0; // Flat service/handling fee
    
    setTotalINR(Math.round(baseValue + gst + serviceFee));
  }, [amount, currency]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const faqs = [
    { q: "What is a Multi-Currency Card?", a: "It's a pre-paid travel card that lets you load multiple currencies at locked-in exchange rates, protecting you from market fluctuations during your trip." },
    { q: "Who should use a Multi-Currency Card?", a: "Ideal for students, business professionals, or tourists visiting multiple countries who want to avoid high credit card markup fees." },
    { q: "Is there any documentation or KYC required?", a: "Yes, as per RBI regulations, you'll need to provide a digital copy of your Passport, Visa, and PAN card to facilitate the exchange." },
    { q: "How do I get physical currency notes?", a: "You can book your rates online and choose between secure doorstep delivery or self-pickup at one of our 50+ authorized branches." }
  ];

  return (
    <div className="min-h-screen font-sans selection:bg-blue-100 bg-white">
      
      {/* 1. UPGRADED CALCULATOR SECTION */}
      <div className="bg-slate-900 pt-10 pb-8 px-6 text-center relative overflow-hidden">
        {/* Visual Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-full bg-blue-600/10 blur-[120px] pointer-events-none" />

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto relative z-10"
        >
          <div className="bg-white p-2 rounded-[2.5rem] shadow-2xl flex flex-col lg:flex-row items-center gap-2 border border-white/20">
            
            {/* Delivery Location */}
            <div className="flex-1 w-full text-left px-8 py-4 border-r border-slate-100">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 flex items-center gap-1">
                    <MapPin size={12} className="text-blue-600" /> Deliver At
                </p>
                <input 
                  className="w-full outline-none font-bold text-slate-800 text-lg bg-transparent" 
                  defaultValue="New Delhi" 
                />
                <p className="text-[10px] text-slate-400 font-medium italic">Available in 180+ Cities</p>
            </div>

            {/* Currency Type */}
            <div className="flex-1 w-full text-left px-8 py-4 border-r border-slate-100">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Buy Currency</p>
                <div className="relative">
                  <select 
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    className="w-full bg-transparent outline-none font-bold text-slate-800 text-lg appearance-none cursor-pointer"
                  >
                      <option value="USD">US Dollar (USD)</option>
                      <option value="EUR">Euro (EUR)</option>
                      <option value="GBP">UK Pound (GBP)</option>
                  </select>
                  <RefreshCw size={14} className="absolute right-0 top-1.5 text-blue-500 pointer-events-none" />
                </div>
                <p className="text-[10px] text-green-600 font-bold">1 {currency} = ₹{rates[currency]}</p>
            </div>

            {/* Amount Calculation */}
            <div className="flex-1 w-full text-left px-8 py-4">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Enter Amount</p>
                <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-400 text-lg">
                      {currency === "USD" ? "$" : currency === "EUR" ? "€" : "£"}
                    </span>
                    <input 
                        type="number"
                        className="w-full outline-none font-bold text-slate-800 text-lg bg-transparent" 
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </div>
                <p className="text-[10px] text-slate-500 font-medium">Payable: <span className="text-blue-600 font-bold">₹{totalINR.toLocaleString('en-IN')}</span></p>
            </div>

            <button className="w-full lg:w-auto bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-[1.8rem] font-black uppercase tracking-widest text-sm transition-all m-1 shadow-xl shadow-blue-500/30">
                Buy Now
            </button>
          </div>

          {/* Genuine Trust Factors */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-6 px-4">
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-2">
                  <ShieldCheck size={14} className="text-green-400" />
                  <p className="text-white/50 text-[10px] font-bold uppercase tracking-widest">RBI Authorized</p>
              </div>
              <div className="h-3 w-px bg-white/10 hidden md:block" />
              <div className="flex items-center gap-2">
                  <Zap size={14} className="text-blue-400" />
                  <p className="text-white/50 text-[10px] font-bold uppercase tracking-widest leading-tight text-left">
                    Delivery by Tomorrow<br/><span className="text-[8px] opacity-50">9:00 PM Arrival</span>
                  </p>
              </div>
            </div>

            {/* Cost Breakdown */}
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              <Info size={12} className="text-blue-400" />
              <p className="text-white/40 text-[9px] font-bold uppercase tracking-widest">
                Includes GST (₹{Math.round(parseFloat(amount) * rates[currency] * 0.0018 || 0)}) + Service Fee (₹250)
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-10">
        
        {/* 2. OFFERINGS SECTION (Grid Layout) */}
        <motion.div
         variants={fadeInUp}
  initial="hidden"
  animate="visible"
        className="mb-8">
          <h2 className="text-2xl font-black text-slate-800 mb-3 px-2 flex items-center gap-3">
            Our Offerings 
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Travel Card Card */}
            <motion.div whileHover={{ y: -2 }} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col lg:flex-row gap-8 items-center group">
                <div className="w-52 h-36 bg-slate-900 rounded-2xl relative shadow-2xl overflow-hidden shrink-0 flex items-center justify-center">
                    <div className="absolute top-6 left-6 w-10 h-8 bg-gradient-to-br from-amber-200 to-amber-500 rounded-lg opacity-80" />
                    <CreditCard className="text-white/10  transition-transform duration-500" size={80} strokeWidth={1} />
                    <div className="absolute bottom-6 left-6 text-[9px] font-mono text-white/50 tracking-widest uppercase">Traveler Elite Card</div>
                </div>
                <div>
                    <h3 className="text-xl font-black text-slate-900 mb-2">Multi-Currency Card</h3>
                    <ul className="space-y-4 mb-8">
                        {[
                            "Zero forex markup on interbank rates.",
                            "No hidden charges. Zero reload fees.",
                            "Save 5% over standard Bank cards."
                        ].map((txt, i) => (
                            <li key={i} className="flex items-start gap-3 text-[11px] font-bold text-slate-500 uppercase tracking-tighter leading-tight">
                                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 shrink-0" /> {txt}
                            </li>
                        ))}
                    </ul>
                    <button className="bg-slate-50 text-slate-900 px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all">
                        Know More
                    </button>
                </div>
            </motion.div>

            {/* Currency Notes Card */}
            <motion.div whileHover={{ y: -2 }} className="bg-white p-8 rounded-[1.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col lg:flex-row gap-8 items-center group">
                <div className="w-52 h-36 bg-amber-50 rounded-[1rem] flex items-center justify-center shrink-0 border border-amber-100 relative overflow-hidden">
                    <Banknote className="text-amber-500 transition-transform duration-500" size={60} strokeWidth={1.5} />
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/0 to-white/60" />
                </div>
                <div>
                    <h3 className="text-xl font-black text-slate-900 mb-4">Foreign Currency Notes</h3>
                    <ul className="space-y-4 mb-8">
                        {[
                            "40+ Currencies. RBI Approved stock.",
                            "Guaranteed best exchange rates.",
                            "Available at 50+ major city centers."
                        ].map((txt, i) => (
                            <li key={i} className="flex items-start gap-3 text-[11px] font-bold text-slate-500 uppercase tracking-tighter leading-tight">
                                <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-1.5 shrink-0" /> {txt}
                            </li>
                        ))}
                    </ul>
                    <button className="bg-slate-50 text-slate-900 px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-amber-500 hover:text-white transition-all">
                        Order Cash
                    </button>
                </div>
            </motion.div>
          </div>
        </motion.div>

        {/* 3. PROMO AD BANNER (Inspired by Reference 3) */}
        <motion.div
         variants={fadeInUp}
  initial="hidden"
  animate="visible"
        className="bg-blue-600 rounded-[2rem] p-5 mb-9 relative overflow-hidden text-white group cursor-pointer">
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                <div className=" text-center md:text-left">
                    <span className="bg-white/20 backdrop-blur-md px-2 py-1.5 rounded-full text-[8px] pb-1 font-black uppercase tracking-widest ">Forex Special</span>
                    <h2 className="text-4xl md:text-4xl font-black tracking-tighter leading-none">Lowest Exchange <br /> Rates Guaranteed*</h2>
                    <p className="text-blue-100 font-medium text-xs mt-1">Doorstep Delivery • Same Day Processing • Secure KYC</p>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <button className="bg-white text-blue-600 px-4 py-3 rounded-lg font-black uppercase tracking-widest text-sm shadow-1xl  transition-all">
                      Order Forex
                  </button>
                  <p className="text-[7px] font-bold text-blue-200 uppercase tracking-widest italic">*Same-day delivery in metro cities only</p>
                </div>
            </div>
            {/* Abstract Background Shapes */}
            <div className="absolute right-0 top-0 opacity-10 -mr-20 -mt-20 group-hover:scale-110 transition-transform duration-1000">
                <BadgePercent size={400} />
            </div>
        </motion.div>

        {/* 4. FAQ ACCORDION */}
        <motion.div 
         variants={fadeInUp}
  initial="hidden"
  animate="visible"
        className="max-w-6xl mx-auto mb-14">
          <h2 className="text-4xl  font-black text-slate-900 text-center tracking-tighter mt-2">Common Inquiries</h2>
          <p className="text-center text-xs text-slate-400 font-medium mb-7">Everything you need to know about our currency services.</p>
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className=" border border-gray-200 rounded-2xl overflow-hidden">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full p-6 flex items-center justify-between text-left"
                >
                  <span className="font-bold text-slate-800 text-lg tracking-tight">{faq.q}</span>
                  <div className={`w-8 h-4 rounded-full bg-slate-50 flex items-center justify-center transition-transform duration-300 ${activeFaq === i ? 'rotate-180 bg-blue-50 text-blue-600' : 'text-slate-400'}`}>
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
                      <div className="px-6 pb-4 text-slate-500 font-medium leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Currency;
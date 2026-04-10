import React from "react";
import { motion } from "framer-motion";
import { Tag, Flame, Clock, Globe, Star, MapPin, Zap } from "lucide-react";

const Deals = () => {
  const deals = [
    {
      title: "Paris Getaway",
      price: "₹49,999",
      originalPrice: "₹71,427",
      discount: "30% OFF",
      duration: "5 Days / 4 Nights",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=600",
      slots: 4,
      tag: "Best Seller"
    },
    {
      title: "Dubai Luxury Trip",
      price: "₹39,999",
      originalPrice: "₹53,332",
      discount: "25% OFF",
      duration: "4 Days / 3 Nights",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=600",
      slots: 2,
      tag: "Last Minute"
    },
    {
      title: "Thailand Escape",
      price: "₹29,999",
      originalPrice: "₹37,498",
      discount: "20% OFF",
      duration: "6 Days / 5 Nights",
      image: "https://images.unsplash.com/photo-1528181304800-2f140819898f?auto=format&fit=crop&q=80&w=600",
      slots: 9,
      tag: "Trending"
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        
        {/* HEADER */}
        <div className="text-center mb-12">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
          >
            <Zap size={14} fill="currentColor" /> Flash Sale Ending Soon
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Exclusive Travel Deals
          </h1>
          <p className="text-gray-500 mt-4 text-lg max-w-2xl mx-auto">
            Handpicked premium packages at unbeatable prices. Book before the prices hike!
          </p>
        </div>

        {/* DEAL CARDS */}
        <div className="grid md:grid-cols-3 gap-8">
          {deals.map((deal, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-[1rem] overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col group"
            >
              {/* Image Section */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={deal.image} 
                  alt={deal.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter shadow-lg">
                    {deal.tag}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                  <Star size={12} className="text-amber-500" fill="currentColor" />
                  <span className="text-xs font-bold text-slate-800">4.9</span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {deal.title}
                  </h3>
                  <div className="bg-orange-50 text-orange-600 text-[10px] font-bold px-2 py-1 rounded-md border border-orange-100">
                    {deal.discount}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-gray-500 text-xs mb-4 font-medium">
                  <div className="flex items-center gap-1">
                    <Clock size={14} /> {deal.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={14} /> All Inclusive
                  </div>
                </div>

                {/* Scarcity Bar */}
                <div className="mb-6">
                    <div className="flex justify-between text-[10px] font-bold uppercase mb-1.5">
                        <span className="text-slate-400">Available Slots</span>
                        <span className="text-orange-600">{deal.slots} left</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div 
                            className="h-full bg-orange-500 rounded-full" 
                            style={{ width: `${(deal.slots / 12) * 100}%` }}
                        ></div>
                    </div>
                </div>

                <div className="mt-auto  border-t border-slate-50 flex justify-between items-center">
                  <div>
                    <p className="text-[10px] text-slate-400 line-through font-bold">{deal.originalPrice}</p>
                    <p className="text-2xl font-black text-slate-900 leading-none">
                      {deal.price}
                    </p>
                  </div>
                  <button className="bg-slate-900 text-white px-6 py-3 rounded-xl text-sm font-bold hover:bg-blue-600 transition-all shadow-lg shadow-slate-200">
                    Claim Deal
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

     
      </div>
    </div>
  );
};

export default Deals;
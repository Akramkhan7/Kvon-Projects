import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Search, Star, Coffee, Wifi, Car, ShieldCheck, Zap, SlidersHorizontal, Heart } from "lucide-react";

const Hotels = () => {
  const [activeTab, setActiveTab] = useState("Luxury");
  const [wishlist, setWishlist] = useState([]);
  const [sortBy, setSortBy] = useState("rating");

  const toggleWishlist = (name) =>
    setWishlist((prev) => prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]);

 const hotelData = {
  Luxury: [
    {
      name: "Taj Lake Palace",
      loc: "Udaipur",
      price: "₹25k",
      rate: 4.9,
      tags: ["Heritage", "Pool"],
      reviews: 2140,
      type: "5-Star Palace",
      images: [
        "https://images.unsplash.com/photo-1564501049412-61c2a3083791",
        "https://images.unsplash.com/photo-1501117716987-c8e1ecb210f9",
      ],
    },
    {
      name: "The Oberoi",
      loc: "Mumbai",
      price: "₹18k",
      rate: 4.8,
      tags: ["Sea View", "Spa"],
      reviews: 1870,
      type: "5-Star Resort",
      images: [
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
      ],
    },
    {
      name: "ITC Grand Bharat",
      loc: "Gurgaon",
      price: "₹22k",
      rate: 4.9,
      tags: ["Golf", "Luxury"],
      reviews: 1320,
      type: "5-Star Hotel",
      images: [
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
      ],
    },
    {
      name: "Leela Palace",
      loc: "Delhi",
      price: "₹20k",
      rate: 4.8,
      tags: ["Pool", "Fine Dining"],
      reviews: 1540,
      type: "5-Star Hotel",
      images: [
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
        "https://images.unsplash.com/photo-1551776235-dde6d4829808",
      ],
    },
    {
      name: "Rambagh Palace",
      loc: "Jaipur",
      price: "₹28k",
      rate: 4.9,
      tags: ["Heritage", "Spa"],
      reviews: 1980,
      type: "Heritage Palace",
      images: [
        "https://images.unsplash.com/photo-1599661046289-e31897846e41",
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
      ],
    },
    {
      name: "Park Hyatt",
      loc: "Chennai",
      price: "₹14k",
      rate: 4.7,
      tags: ["City View", "Gym"],
      reviews: 890,
      type: "5-Star Hotel",
      images: [
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945",
      ],
    },
  ],

  Budget: [
    {
      name: "Zostel Home",
      loc: "Rishikesh",
      price: "₹2k",
      rate: 4.5,
      tags: ["Backpacker", "Yoga"],
      reviews: 3200,
      type: "Hostel",
      images: [
        "https://images.unsplash.com/photo-1555854877-bab0e460b9b2",
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      ],
    },
    {
      name: "Bloom Hotel",
      loc: "Delhi",
      price: "₹4k",
      rate: 4.3,
      tags: ["City Center", "Clean"],
      reviews: 1100,
      type: "Budget Hotel",
      images: [
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
        "https://images.unsplash.com/photo-1555854877-bab0e460b9b2",
      ],
    },
    {
      name: "FabHotel Prime",
      loc: "Pune",
      price: "₹3k",
      rate: 4.2,
      tags: ["AC", "WiFi"],
      reviews: 760,
      type: "Budget Hotel",
      images: [
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
      ],
    },
    {
      name: "OYO Townhouse",
      loc: "Bangalore",
      price: "₹2.5k",
      rate: 4.1,
      tags: ["Breakfast", "Clean"],
      reviews: 2300,
      type: "Townhouse",
      images: [
        "https://images.unsplash.com/photo-1555854877-bab0e460b9b2",
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      ],
    },
  ],

  Family: [
    {
      name: "Club Mahindra",
      loc: "Coorg",
      price: "₹12k",
      rate: 4.6,
      tags: ["Kids Club", "Nature"],
      reviews: 1450,
      type: "Resort",
      images: [
        "https://images.unsplash.com/photo-1501117716987-c8e1ecb210f9",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945",
      ],
    },
    {
      name: "Novotel Resort",
      loc: "Goa",
      price: "₹9k",
      rate: 4.7,
      tags: ["Beach Front", "Buffet"],
      reviews: 2010,
      type: "Beach Resort",
      images: [
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
      ],
    },
    {
      name: "Sterling Resort",
      loc: "Ooty",
      price: "₹8k",
      rate: 4.4,
      tags: ["Hill View", "Activities"],
      reviews: 980,
      type: "Hill Resort",
      images: [
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      ],
    },
    {
      name: "Lalit Mangar",
      loc: "Faridabad",
      price: "₹10k",
      rate: 4.5,
      tags: ["Adventure", "Pool"],
      reviews: 670,
      type: "Resort",
      images: [
        "https://images.unsplash.com/photo-1501117716987-c8e1ecb210f9",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945",
      ],
    },
  ],

  Boutique: [
    {
      name: "SaffronStays Casa Azul",
      loc: "Alibaug",
      price: "₹7k",
      rate: 4.8,
      tags: ["Private Pool", "Design"],
      reviews: 540,
      type: "Villa",
      images: [
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
        "https://images.unsplash.com/photo-1555854877-bab0e460b9b2",
      ],
    },
    {
      name: "Treehouse Hideaway",
      loc: "Bandhavgarh",
      price: "₹11k",
      rate: 4.9,
      tags: ["Jungle", "Unique"],
      reviews: 390,
      type: "Eco Lodge",
      images: [
        "https://images.unsplash.com/photo-1501117716987-c8e1ecb210f9",
        "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
      ],
    },
    {
      name: "The Postcard Cuelim",
      loc: "Goa",
      price: "₹16k",
      rate: 4.9,
      tags: ["Rice Fields", "Luxury"],
      reviews: 710,
      type: "Boutique Hotel",
      images: [
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
      ],
    },
  ],
};

  const sorted = [...(hotelData[activeTab] || [])].sort((a, b) =>
    sortBy === "rating" ? b.rate - a.rate : parseInt(a.price.replace(/\D/g, "")) - parseInt(b.price.replace(/\D/g, ""))
  );

  return (
    <div className="min-h-screen bg-slate-50 pt-8 pb-8 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-4 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 tracking-tight">
              Premium <span className="text-blue-600">Stays</span>
            </h1>
            <p className="text-sm text-gray-500">Book handpicked hotels at exclusive rates.</p>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            {/* Sort */}
            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-3 py-2 text-xs font-medium text-gray-600">
              <SlidersHorizontal size={13} className="text-gray-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent outline-none cursor-pointer"
              >
                <option value="rating">Top Rated</option>
                <option value="price">Lowest Price</option>
              </select>
            </div>

            {/* Search */}
            <div className="bg-white shadow-sm border border-gray-200 rounded-full px-4 py-2 flex items-center gap-3 flex-1 md:w-auto">
              <Search size={16} className="text-gray-400" />
              <input type="text" placeholder="Search city or hotel..." className="bg-transparent outline-none text-sm w-full md:w-56" />
              <div className="h-4 w-[1px] bg-gray-200 hidden md:block"></div>
              <button className="hidden md:block text-sm font-semibold text-blue-600 hover:text-blue-700">Find Stays</button>
            </div>
          </div>
        </div>

        {/* Quick Features */}
        <div className="flex flex-wrap gap-6 mb-5 py-4 border-y border-gray-200/50">
          {[
            { icon: <ShieldCheck size={16} />, label: "Verified Stays" },
            { icon: <Zap size={16} />, label: "Instant Booking" },
            { icon: <Coffee size={16} />, label: "Breakfast Included" },
            { icon: <Wifi size={16} />, label: "High-speed WiFi" },
            { icon: <Car size={16} />, label: "Free Parking" },
            { icon: <Heart size={16} />, label: "Free Cancellation" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-xs font-medium text-gray-600">
              <span className="text-blue-500">{item.icon}</span> {item.label}
            </div>
          ))}
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-4 mb-5 border-b border-gray-200">
          {Object.keys(hotelData).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 text-sm font-semibold transition-all relative ${
                activeTab === tab ? "text-blue-600" : "text-gray-400 hover:text-gray-600"
              }`}
            >
              {tab}
              <span className="ml-1.5 text-[10px] text-gray-400 font-normal">
                ({hotelData[tab].length})
              </span>
              {activeTab === tab && (
                <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
              )}
            </button>
          ))}
        </div>

        {/* Hotel Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <AnimatePresence mode="wait">
            {sorted.map((hotel, i) => (
              <motion.div
                key={hotel.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ delay: i * 0.05 }}
                className="group bg-white rounded-xl p-3 border border-gray-100 hover:border-blue-500 transition-all flex flex-col justify-between"
              >
                <div className="relative h-32 bg-slate-100 rounded-lg mb-3 overflow-hidden">
               
                  <div className="w-full h-full flex items-center justify-center text-3xl group-hover:scale-102 transition-transform duration-500">
                   <img src={hotel.images[0]} alt="" />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-0.5">
                    <h3 className="font-bold text-gray-800 text-sm leading-tight">{hotel.name}</h3>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1 text-[11px] text-gray-400">
                      <MapPin size={10} /> {hotel.loc}
                    </div>
                    <span className="text-[10px] text-gray-400 bg-gray-50 px-1.5 py-0.5 rounded">{hotel.type}</span>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {hotel.tags.map((tag) => (
                      <span key={tag} className="text-[9px] bg-blue-50 text-blue-600 px-1.5 py-0.5 rounded-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-gray-50">
                  <span className="text-blue-600 font-bold text-base">
                    {hotel.price}
                    <span className="text-[10px] text-gray-400 font-normal">/night</span>
                  </span>
                  <button className="text-[11px] font-bold bg-gray-900 text-white px-3 py-1.5 rounded-lg hover:bg-blue-600 transition-colors">
                    Book
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom Banner */}
        <div className="mt-8 bg-blue-600 rounded-2xl p-6 text-white flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-xl">🎁</div>
            <div>
              <h4 className="font-bold">Member Exclusive: Save 15%</h4>
              <p className="text-xs text-blue-100">Sign up to unlock secret prices on 2,000+ properties.</p>
            </div>
          </div>
          <button className="bg-white text-blue-600 px-5 py-2 rounded-full text-xs font-bold hover:bg-blue-50 transition-colors">
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hotels;
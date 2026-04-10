import React, { useState } from "react";
import HighlightCards from "./PackageCards";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const destinations = [
  {
    id: 1,
    title: "Goa",
    image: "https://images.unsplash.com/photo-1587922546307-776227941871",
  },
  {
    id: 2,
    title: "Jaipur",
    image:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8amFpcHVyfGVufDB8fDB8fHww",
  },
  {
    id: 3,
    title: "Kerala",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944",
  },
  {
    id: 4,
    title: "Manali",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23",
  },
  {
    id: 5,
    title: "Leh Ladakh",
    image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2",
  },
  {
    id: 6,
    title: "Udaipur",
    image:
      "https://plus.unsplash.com/premium_photo-1661964079694-ccfaf7dc8028?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dWRhaXB1cnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 7,
    title: "Varanasi",
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc",
  },
  {
    id: 8,
    title: "Rishikesh",
    image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482",
  },
  {
    id: 9,
    title: "Andaman",
    image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3",
  },
];

const categories = [
  {
    name: "Himachal",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470", // snow mountains
  },
  {
    name: "Rajasthan",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41", // camel desert
  },
  {
    name: "Varanasi",
    image: "https://images.unsplash.com/photo-1561361058-c24cecae35ca", // temple
  },
  {
    name: "Varanasi",
    image: "https://images.unsplash.com/photo-1561361058-c24cecae35ca", // temple
  },
  {
    name: "Uttarakhand",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee", // hills
  },
  {
    name: "Festival",
    image: "https://images.unsplash.com/photo-1513151233558-d860c5398176", // fireworks
  },
  {
    name: "Winter",
    image: "https://images.unsplash.com/photo-1482192505345-5655af888cc4", // ice/snow
  },
];

const testimonials = [
  {
    name: "Akram Khan",
    review: "Amazing experience! The view was unreal.",
    trip: "Manali Trip",
    price: "₹14,500",
    userImage: "https://randomuser.me/api/portraits/men/32.jpg",
    images: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    ],
  },
  {
    name: "Sarah J.",
    review: "Loved every moment of the journey!",
    trip: "Goa Trip",
    price: "₹10,999",
    userImage: "https://randomuser.me/api/portraits/women/44.jpg",
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    ],
  },
  {
    name: "Karan Singh",
    trip: "Rishikesh Solo • 4 Days",
    price: "₹7,500",
    review:
      "Solo trip to Rishikesh — rafting, aarti, and the ashram. Felt like a complete reset.",
  },
];

const PopularDestinations = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [preview, setPreview] = useState(null);

  const totalPages = Math.ceil(destinations.length / 3);

  const next = () => {
    if (index < totalPages - 1) {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div className="px-8 md:px-16 py-3 bg-white">
      {/* Header */}

      <div className="px-8 md:px-16 py-10 bg-white">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-serif text-gray-800">
            Popular Destinations
          </h2>

          <div className="flex gap-2">
            <button
              onClick={prev}
              className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center hover:bg-blue-600 transition text-sm"
            >
              ←
            </button>
            <button
              onClick={next}
              className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center hover:bg-blue-600 transition text-sm"
            >
              →
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="overflow-hidden w-full">
          <div
            className="flex gap-4 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${index * 102}%)`,
            }}
          >
            {destinations.map((item) => (
              <div
                key={item.id}
                className="min-w-[calc((100%-32px)/3)] h-57.5 rounded-xl overflow-hidden relative group shrink-0"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>

                <div className="absolute bottom-3 left-3 text-white">
                  <h3 className="text-sm font-serif font-bold tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-[10px] opacity-70 uppercase tracking-tighter">
                    Explore
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/*  Best for week */}

        <div className="flex flex-col mt-15 md:flex-row items-center justify-between gap-12 lg:gap-16 max-w-7xl mx-auto">
          <div className="flex-1 max-w-lg space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-medium text-xs tracking-wide">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              WEEKLY HIGHLIGHTS
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
              Best of the <span className="text-blue-600">Week</span>
            </h2>
            <p className="text-gray-600 text-base leading-relaxed md:text-lg">
              Discover some of the most loved travel destinations this week,
              carefully selected to give you a perfect balance of relaxation,
              adventure, and cultural experiences.
            </p>
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
              <ul className="text-sm md:text-base text-gray-700 space-y-3">
                {[
                  {
                    icon: "🌍",
                    text: "Handpicked destinations based on traveler reviews",
                  },
                  { icon: "💰", text: "Budget-friendly options available" },
                  { icon: "✈️", text: "Perfect for weekend getaways" },
                  {
                    icon: "🧑‍🤝‍🧑",
                    text: "Ideal for solo, couple, and group trips",
                  },
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-lg shrink-0 pt-0.5">{item.icon}</span>
                    <p>{item.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex-1 flex gap-8 justify-center md:justify-end items-center pt-12 md:pt-0">
            {/* Card 1 */}
            <div className="w-65 h-85 md:w-75 md:h-100 rounded-[28px] overflow-hidden shadow-xl relative group transition-all duration-500 ease-out hover:-translate-y-3 hover:shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
                alt="Balangan beach"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-all duration-500"></div>

              {/* Content */}
              <div className="absolute bottom-5 left-5 right-5 backdrop-blur-md bg-white/80 rounded-2xl p-4 shadow-lg transition-all duration-300 group-hover:bg-white">
                <p className="text-[11px] font-semibold text-blue-600 uppercase tracking-widest">
                  Beach
                </p>

                <h3 className="text-lg font-bold text-gray-900 mt-1">
                  Balangan
                </h3>

                <p className="text-xs text-gray-600 mt-1 opacity-0 group-hover:opacity-100 transition duration-300">
                  View Destination →
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="w-65 h-85 md:w-75 md:h-100 rounded-[28px] overflow-hidden shadow-xl relative mt-12 md:mt-20 group transition-all duration-500 ease-out hover:-translate-y-3 hover:shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
                alt="Bias Tugal"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-all duration-500"></div>

              <div className="absolute bottom-5 left-5 right-5 backdrop-blur-md bg-white/80 rounded-2xl p-4 shadow-lg transition-all duration-300 group-hover:bg-white">
                <p className="text-[11px] font-semibold text-blue-600 uppercase tracking-widest">
                  Beach
                </p>

                <h3 className="text-lg font-bold text-gray-900 mt-1">
                  Bias Tugal
                </h3>

                <p className="text-xs text-gray-600 mt-1 opacity-0 group-hover:opacity-100 transition duration-300">
                  View Destination →
                </p>
              </div>
            </div>
          </div>
        </div>

        <HighlightCards />

        {/* Why choose us */}
        <div className="px-8 md:px-3 py-10 bg-white">
          {/* Heading */}
          <div className="max-w-xl mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-gray-800">
              Why Travel With Us
            </h2>

            <p className="mt-3 text-gray-500 text-sm leading-relaxed">
              We make your journeys smoother, more affordable, and truly
              unforgettable.
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="rounded-xl p-6 border border-gray-200 hover:shadow-md transition">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4 text-lg">
                📍
              </div>

              <h3 className="text-lg font-semibold text-gray-800">
                Trusted Destinations
              </h3>

              <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                Carefully selected places based on real traveler experiences and
                verified reviews.
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-xl p-6 border border-gray-200 hover:shadow-md transition">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4 text-lg">
                💰
              </div>

              <h3 className="text-lg font-semibold text-gray-800">
                Budget Friendly
              </h3>

              <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                Get the best travel packages at affordable prices without
                compromising comfort.
              </p>
            </div>

            {/* Card 3 */}
            <div className="rounded-xl p-6 border border-gray-200 hover:shadow-md transition">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4 text-lg">
                ⚡
              </div>

              <h3 className="text-lg font-semibold text-gray-800">
                Easy Planning
              </h3>

              <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                Simple and hassle-free planning so you can focus only on
                enjoying your trip.
              </p>
            </div>
          </div>
        </div>

        {/* Explore By Category */}
        <div className="px-8 md:px-2 py-5 bg-white">
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-3xl font-serif text-gray-800">
              Explore by Category
            </h2>
            <p className="text-sm text-blue-600 font-medium cursor-pointer hover:underline">
              View all
            </p>
          </div>

          <div className="flex gap-5 overflow-x-auto pb-6 scrollbar-hide">
            {categories.map((item, i) => (
              <div
                key={i}
                onClick={() => navigate(`/category/${item.name.toLowerCase()}`)}
                className="min-w-37.5 h-50 rounded-2xl overflow-hidden relative group cursor-pointer shadow-sm transition-all duration-300"
              >
                {/* Image with zoom effect */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* 1. INITIAL OVERLAY (Always visible but light) */}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-all"></div>

                {/* 2. INITIAL TEXT (Category Name) */}
                <div className="absolute bottom-4 left-4 text-white transition-transform duration-300 group-hover:-translate-y-12">
                  <p className="text-sm font-bold tracking-wide uppercase">
                    {item.name}
                  </p>
                </div>

                {/* 3. HIDDEN DETAILS (Appears on Hover) */}
                <div className="absolute inset-x-4 bottom-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex flex-col gap-1">
                  <div className="h-px w-full bg-white/30 mb-1"></div>{" "}
                  {/* Small separator */}
                  <p className="text-[10px] text-gray-200 font-medium uppercase tracking-tighter">
                    {item.placesCount || "12+ Locations"}
                  </p>
                  <p className="text-[11px] text-white font-semibold">
                    Starting from ₹{item.price || "4,999"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="px-8 md:px-2 py-10 bg-white">
          {/* Heading */}
          <div className="mb-10">
            <p className="text-xs tracking-widest text-blue-600 uppercase">
              Travel Stories
            </p>

            <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mt-2">
              Stories From <span className="">Our Travelers</span>
            </h2>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials?.map((item, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-xl p-6 relative hover:shadow-sm transition"
              >
                {/* 👤 USER FIRST */}
                <div className="flex items-center gap-3">
                  <img
                    src={item.userImage}
                    alt="user"
                    className="w-10 h-10 rounded-full object-cover"
                  />

                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      {item.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {item.trip} • {item.price}
                    </p>
                  </div>
                </div>

                {/* ⭐ STARS */}
                <div className="text-yellow-500 text-sm mt-3">★★★★★</div>

                {/* 📝 REVIEW */}
                <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                  “{item.review}”
                </p>

                {/* 🖼️ IMAGES LAST */}
                <div className="flex gap-2 mt-4">
                  {item.images?.slice(0, 3).map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      onClick={() => setPreview(img)}
                      className="w-12 h-12 rounded-lg object-cover cursor-pointer hover:scale-105 transition"
                    />
                  ))}

                  {item.images?.length > 3 && (
                    <div
                      onClick={() => setPreview(item.images[0])}
                      className="w-12 h-12 flex items-center justify-center bg-gray-100 text-xs rounded-lg cursor-pointer"
                    >
                      +{item.images.length - 3}
                    </div>
                  )}
                </div>

                {/* QUOTE ICON */}
                <span className="absolute top-4 right-4 text-gray-200 text-3xl">
                  ”
                </span>
              </div>
            ))}
          </div>

          {/* 🔥 IMAGE PREVIEW MODAL */}
          {preview && (
            <div
              onClick={() => setPreview(null)}
              className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            >
              <img
                src={preview}
                alt="preview"
                className="max-w-[90%] max-h-[80%] rounded-xl"
              />
            </div>
          )}
        </div>

        {/* CTA */}
      <div className="px-6 md:px-2  bg-white">
      {/* Container with a subtle soft gradient and glass effect */}
      <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-slate-50 to-blue-50/50 border border-slate-200/60 px-8 md:px-14 py-0 md:py-8 flex flex-col lg:flex-row items-center justify-between gap-10">
        
        {/* Decorative Background Elements (Blobs) */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-indigo-200/20 rounded-full blur-3xl"></div>

        {/* LEFT CONTENT */}
        <div className="relative z-10 max-w-xl text-center lg:text-left">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-100/50 text-[10px] font-bold tracking-[0.2em] text-blue-600 uppercase mb-4">
            Ready to go?
          </span>

          <h2 className="text-3xl md:text-4xl font-serif text-slate-900 leading-[1.15]">
            Your North India Story <br />
            <span className="text-blue-600 ">Starts Here</span>
          </h2>

          <p className="text-base md:text-sm text-slate-500 mt-2 leading-relaxed">
            Pick a destination, pack light, and let the 
            majestic mountains do the rest.
          </p>
        </div>

        {/* RIGHT BUTTONS */}
        <div className="relative z-10 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <button className="group relative bg-slate-900 text-white px-6 py-4 rounded-2xl text-sm font-semibold overflow-hidden transition-all hover:scale-102 active:scale-95 shadow-xl shadow-slate-200">
            <span className="relative z-10 flex items-center justify-center gap-2">
              Explore All Trips
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </span>
            {/* Glossy overlay on hover */}
            <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          <button className="bg-white text-slate-700 border border-slate-200 px-6 py-2 rounded-2xl text-sm font-semibold transition-all hover:bg-slate-50 hover:border-slate-300 active:scale-95 shadow-sm">
            Contact Us
          </button>
        </div>

      </div>
    </div>
      </div>

      {/* Footer */}
    </div>
  );
};

export default PopularDestinations;

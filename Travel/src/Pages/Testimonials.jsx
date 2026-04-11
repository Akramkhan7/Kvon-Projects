import React, { useState } from "react";
import { MapPin } from "lucide-react";

const data = [
  // ASIA
  {
    title: "Amazing Bali Experience",
    name: "Aarav Sharma",
    desc: "Trip was perfectly planned and smooth. Loved every moment.",
    place: "Asia",
    type: "Group Tour",
    tag: "Family Tour",
    month: "Feb",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
  },
  {
    title: "Thailand Adventure",
    name: "Neha Verma",
    desc: "Great beaches and nightlife recommendations!",
    place: "Asia",
    type: "Individual Tour",
    tag: "Friends",
    month: "Mar",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
  {
    title: "Singapore Trip",
    name: "Rohan Mehta",
    desc: "Clean itinerary and very efficient planning.",
    place: "Asia",
    type: "Group Tour",
    tag: "Family",
    month: "Jan",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd",
  },

  // EUROPE
  {
    title: "Paris Romantic Getaway",
    name: "Emily Carter",
    desc: "Best honeymoon experience ever!",
    place: "Europe",
    type: "Individual Tour",
    tag: "Couple",
    month: "Apr",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
  },
  {
    title: "Swiss Alps Journey",
    name: "Daniel Roberts",
    desc: "Breathtaking views and smooth planning.",
    place: "Europe",
    type: "Group Tour",
    tag: "Luxury",
    month: "Dec",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  },
  {
    title: "Italy Cultural Tour",
    name: "Sophia Lee",
    desc: "Food, art, and history — perfect combo!",
    place: "Europe",
    type: "Individual Tour",
    tag: "Culture",
    month: "May",
    image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9",
  },

  // MIDDLE EAST
  {
    title: "Dubai Luxury Trip",
    name: "Rahul Mehta",
    desc: "Top-notch experience with luxury vibes.",
    place: "Middle East",
    type: "Group Tour",
    tag: "Luxury",
    month: "Jun",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
  },
  {
    title: "Abu Dhabi Tour",
    name: "Karan Patel",
    desc: "Loved the cultural sites and mosque visit.",
    place: "Middle East",
    type: "Individual Tour",
    tag: "Culture",
    month: "Jul",
    image: "https://images.unsplash.com/photo-1518684079-3c830dcef090",
  },
  {
    title: "Desert Safari Experience",
    name: "Simran Kaur",
    desc: "Desert safari was the highlight!",
    place: "Middle East",
    type: "Group Tour",
    tag: "Adventure",
    month: "Aug",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  },

  // EXTRA (to make 15)
  {
    title: "Maldives Luxury Escape",
    name: "Ananya Singh",
    desc: "Peaceful and beautiful island stay.",
    place: "Asia",
    type: "Individual Tour",
    tag: "Luxury",
    month: "Sep",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8",
  },
  {
    title: "Japan Cultural Tour",
    name: "Kenji Tanaka",
    desc: "Amazing temples and food!",
    place: "Asia",
    type: "Group Tour",
    tag: "Culture",
    month: "Oct",
    image: "https://images.unsplash.com/photo-1549693578-d683be217e58",
  },
  {
    title: "Spain Fun Trip",
    name: "Carlos Diaz",
    desc: "Great nightlife and food spots.",
    place: "Europe",
    type: "Individual Tour",
    tag: "Friends",
    month: "Nov",
    image: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad",
  },
  {
    title: "Qatar Business Trip",
    name: "Ali Hassan",
    desc: "Smooth travel and great hospitality.",
    place: "Middle East",
    type: "Individual Tour",
    tag: "Business",
    month: "Feb",
    image: "https://images.unsplash.com/photo-1524492449090-1d6f8c1b1a3c",
  },
  {
    title: "Vietnam Backpacking",
    name: "Vikram Joshi",
    desc: "Budget friendly and fun!",
    place: "Asia",
    type: "Individual Tour",
    tag: "Budget",
    month: "Jan",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
  {
    title: "Germany Road Trip",
    name: "Lucas Weber",
    desc: "Perfect road trip experience.",
    place: "Europe",
    type: "Group Tour",
    tag: "Adventure",
    month: "Mar",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
  },
];

const Testimonials = () => {
  const [filter, setFilter] = useState("All");

  const filteredData =
    filter === "All"
      ? data
      : data.filter((item) => item.place === filter);

  return (
    <div className="bg-slate-50 min-h-screen px-6 py-6 ">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <h1 className="text-3xl font-bold mb-0">Testimonials</h1>
        <p className="text-slate-500 mb-4">
          Real experiences from our travelers
        </p>

        {/* FILTER */}
        <div className="flex gap-3 mb-5 flex-wrap">
          {["All", "Asia", "Europe", "Middle East"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                filter === f
                  ? "bg-blue-600 text-white"
                  : "bg-white border border-slate-200 text-slate-600"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredData.map((item, i) => (
            <div
              key={i}
              className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md"
            >
              <div className="flex justify-between gap-3">
                <div>
                  <h3 className="font-bold text-slate-800 text-md">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500">{item.name}</p>
                  <p className="text-sm text-slate-500 mt-2">
                    {item.desc}
                  </p>
                </div>

                <img
                  src={item.image}
                  className="w-20 h-20 rounded-xl object-cover"
                  alt=""
                />
              </div>

              <div className="flex justify-between mt-4 text-xs text-slate-500">
                <span>{item.place}</span>
                <span className="bg-blue-100 text-blue-600 px-2 py-0 rounded-full">
                  {item.type}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Testimonials;
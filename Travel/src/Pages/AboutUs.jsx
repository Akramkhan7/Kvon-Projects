import React from "react";
import {
  Users, MapPin, BadgeCheck, HeartHandshake,
  ShieldCheck, Star
} from "lucide-react";
import MapImg from '../assets/map.png'

const About = () => {
  return (
    <div className=" text-gray-800 font-sans">

      {/* TITLE */}
      <div className="text-center py-6">
        <h1 className="text-2xl font-bold">About Us</h1>
      </div>

      {/* ================= WHO WE ARE ================= */}
      <section className="bg-white px-6 md:px-16 flex flex-col md:flex-row items-center gap-10">

        {/* LEFT */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-3">
            Who we are<span className="text-blue-500">.</span>
          </h2>

          <p className="text-sm text-gray-600 leading-relaxed">
            Flamingo Transworld Pvt Ltd is an award winning Tour Consultant Company and one of India's largest Tour Operator helping travel enthusiasts across the globe to discover world’s most amazing destinations.
            Our team of 200+ travel consultants helps you handcraft holiday of your lifetime.
          </p>

          {/* STATS */}
          <div className="flex flex-wrap gap-6 mt-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Users size={18} className="text-blue-500" />
              2,10,000+ Happy Families
            </div>
            <div className="flex items-center gap-2">
              <Users size={18} className="text-blue-500" />
              250+ Employees
            </div>
            <div className="flex items-center gap-2">
              <BadgeCheck size={18} className="text-blue-500" />
              30+ Years Experience
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-blue-500" />
              2+ Locations
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            className="rounded-xl shadow-md w-full"
            alt=""
          />
        </div>
      </section>

      {/* ================= WHAT WE DO ================= */}
      <section className="bg-white px-6 md:px-16 py-10 flex flex-col md:flex-row gap-10">

        {/* IMAGE GRID */}
        <div className="grid grid-cols-3 gap-3 flex-1">
          {[
            "travel", "cruise", "food", "couple", "city", "beach"
          ].map((q, i) => (
            <img
              key={i}
              src={`https://source.unsplash.com/200x200/?${q}`}
              className="rounded-xl object-cover h-24 w-full"
            />
          ))}
        </div>

        {/* TEXT */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-3">
            What we do<span className="text-blue-500">.</span>
          </h2>

          <p className="text-sm text-gray-600 leading-relaxed mb-5">
            We are a one stop travel solution and have planned vacations successfully for more than 1,55,000 families.
            We provide all-inclusive group tours with in-house tour managers.
          </p>

          {/* FEATURES */}
          <div className="flex flex-wrap gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Users className="text-blue-500" size={18} /> In house managers
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="text-green-500" size={18} /> Veg meals
            </div>
            <div className="flex items-center gap-2">
              <BadgeCheck className="text-blue-500" size={18} /> Budget friendly
            </div>
            <div className="flex items-center gap-2">
              <Star className="text-blue-500" size={18} /> All inclusive
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHAT WE BELIEVE ================= */}
      <section className="bg-white px-6 md:px-16 py-4 flex flex-col md:flex-row gap-10">

        {/* TEXT */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-3">
            What we believe<span className="text-blue-500">.</span>
          </h2>

          <p className="text-sm text-gray-600 leading-relaxed mb-6">
            We believe that travel brings knowledge and opportunity. Flamingo is not only business for us, but its a philosophy.
          </p>

          <div className="flex flex-wrap gap-6 text-sm">
            <div className="flex items-center gap-2">
              <ShieldCheck className="text-blue-500" size={18} /> Trust
            </div>
            <div className="flex items-center gap-2">
              <HeartHandshake className="text-blue-500" size={18} /> Transparency
            </div>
            <div className="flex items-center gap-2">
              <BadgeCheck className="text-blue-500" size={18} /> Quality tours
            </div>
            <div className="flex items-center gap-2">
              <Users className="text-blue-500" size={18} /> Support
            </div>
          </div>
        </div>

        {/* IMAGE GRID RIGHT */}
        <div className="grid grid-cols-2 gap-3 flex-1">
          {["india", "travel group", "camel", "tourist"].map((q, i) => (
            <img
              key={i}
              src={`https://source.unsplash.com/200x200/?${q}`}
              className="rounded-xl object-cover h-32 w-full"
            />
          ))}
        </div>
      </section>

 

    </div>
  );
};

export default About;
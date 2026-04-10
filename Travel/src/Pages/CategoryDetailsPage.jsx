import React, { useState, useMemo, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { placesData } from "../data/placesData";
import { ArrowLeft, X } from "lucide-react";

const CategoryDetailsPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const data = placesData[slug];

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRating, setSelectedRating] = useState(0);
  const [priceRange, setPriceRange] = useState(50000);
  const [sortBy, setSortBy] = useState("default");
  const [showFilters, setShowFilters] = useState(false);

  const activeFilterCount = [selectedRating > 0, priceRange < 50000].filter(
    Boolean,
  ).length;

  const filteredPlaces = useMemo(() => {
    if (!data) return [];
    let results = data.places.filter((place) => {
      const matchesSearch = place.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesRating = parseFloat(place.rating) >= selectedRating;
      const numericPrice = parseInt(place.price.replace(/[^0-9]/g, ""));
      const matchesPrice = numericPrice <= priceRange;
      return matchesSearch && matchesRating && matchesPrice;
    });

    if (sortBy === "price-asc") {
      results.sort(
        (a, b) =>
          parseInt(a.price.replace(/[^0-9]/g, "")) -
          parseInt(b.price.replace(/[^0-9]/g, "")),
      );
    }

    if (sortBy === "price-desc") {
      results.sort(
        (a, b) =>
          parseInt(b.price.replace(/[^0-9]/g, "")) -
          parseInt(a.price.replace(/[^0-9]/g, "")),
      );
    }

    if (sortBy === "rating") {
      results.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
    }

    return results;
  }, [data, searchQuery, selectedRating, priceRange, sortBy]);

  const clearFilters = () => {
    setSelectedRating(0);
    setPriceRange(50000);
    setSortBy("default");
    setSearchQuery("");
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [slug]);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-400 text-sm">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen ">
      {/* TOP BAR */}
      <div className="bg-white mt-5 sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 py-3">
            <button
              onClick={() => navigate(-1)}
              className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-gray-50"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>

            <div className="flex-grow min-w-0">
              <h1 className="text-sm font-semibold text-gray-900 truncate">
                {data.title}
              </h1>
              <p className="text-xs text-gray-400">
                {filteredPlaces.length} results
              </p>
            </div>
          </div>

          {/* FILTER PANEL */}
          {showFilters && (
            <div className="pb-3 border-t border-gray-100 flex flex-wrap gap-3 items-center">
              {[0, 3.5, 4.0, 4.5].map((rating) => (
                <button
                  key={rating}
                  onClick={() => setSelectedRating(rating)}
                  className={`text-xs px-2 py-1 rounded ${
                    selectedRating === rating
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {rating === 0 ? "All" : `${rating}★+`}
                </button>
              ))}

              <input
                type="range"
                min="1000"
                max="50000"
                step="500"
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-40"
              />

              {activeFilterCount > 0 && (
                <button
                  onClick={clearFilters}
                  className="text-xs text-gray-400 hover:text-red-500 flex items-center gap-1"
                >
                  <X className="w-3 h-3" /> Clear
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-6 mb-6 ">
        <div className="bg-gray-50 flex items-center rounded-2xl px-6 md:px-10 py-8 border border-gray-100">
          <div>
            {/* TITLE */}
            <h1 className="text-3xl md:text-4xl font-serif text-gray-800">
              Explore {data.title}
            </h1>

            {/* DESCRIPTION */}
            <p className="text-sm text-gray-500 mt-3 max-w-2xl leading-relaxed">
              {data.description ||
                `Discover the best of ${data.title} with curated travel experiences, 
        scenic beauty, local culture, and unforgettable memories.`}
            </p>
          </div>

          {/* TAGS */}
          <div className="flex flex-wrap justify-center md:justify-end items-center gap-5 text-sm min-w-[500px]">
            {(
              data.tags || [
                "Top Places",
                "Best Experience",
                "Popular Destinations",
              ]
            ).map((tag, i) => (
              <span
                key={i}
                className="bg-white border border-gray-200 px-3 py-1 rounded-full text-gray-600 h-fit"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="px-30">
        <hr className="text-gray-100" />
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5">
        {filteredPlaces.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredPlaces.map((place) => (
              <PlaceCard key={place.id} place={place} />
            ))}
          </div>
        ) : (
          <div className="h-40 flex items-center justify-center text-gray-400 text-sm">
            No results found
          </div>
        )}
      </div>
    </div>
  );
};

/* -------- CARD -------- */

const PlaceCard = ({ place }) => {
  const [activeImg, setActiveImg] = useState(0);

  return (
 <div className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-blue-50/50 transition-all duration-300">
  {/* IMAGE SECTION */}
  <div className="h-48 bg-gray-100 relative overflow-hidden">
    <img
      src={place.images?.[activeImg] || place.images?.[0]}
      alt={place.name}
      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
    />
  </div>

  {/* CONTENT SECTION */}
  <div className="p-4">
    {/* TITLE & RATING */}
    <div className="flex justify-between items-start">
      <div className="flex-1">
        <h2 className="text-base font-bold text-slate-900 truncate leading-none">
          {place.name}
        </h2>
        <p className="text-[11px] text-slate-400 mt-1.5 flex items-center gap-1">
          <span className="text-blue-500">✔</span> Verified Destination
        </p>
      </div>
      <div className="bg-blue-50 px-2 py-1 rounded-lg flex items-center gap-1">
        <span className="text-blue-600 text-[11px] font-black">★ {place.rating}</span>
      </div>
    </div>

    {/* NEW INFO BOX: KEY SPECS (Replacing the simple list) */}
    <div className="grid grid-cols-3 gap-1 mt-1 py-3 border-y border-slate-50">
      <div className="text-center border-r border-slate-100">
        <p className="text-[9px] text-slate-400 uppercase tracking-tighter">Weather</p>
        <p className="text-[10px] font-bold text-slate-700">22°C</p>
      </div>
      <div className="text-center border-r border-slate-100">
        <p className="text-[9px] text-slate-400 uppercase tracking-tighter">Altitude</p>
        <p className="text-[10px] font-bold text-slate-700">2,205m</p>
      </div>
      <div className="text-center">
        <p className="text-[9px] text-slate-400 uppercase tracking-tighter">Best For</p>
        <p className="text-[10px] font-bold text-slate-700">Family</p>
      </div>
    </div>

   
    

    {/* FOOTER: PRICING & CTA */}
    <div className="flex justify-between items-end pt-3 border-t border-slate-50">
      <div>
        <p className="text-[9px] font-bold text-emerald-600 uppercase">Special Offer</p>
        <div className="flex items-baseline gap-1">
          <span className="text-xl font-black text-slate-900">{place.price}</span>
          <span className="text-[10px] text-slate-400">/total</span>
        </div>
      </div>

      <button className="bg-blue-600 hover:bg-blue-700 text-white text-[11px] font-bold px-5 py-2.5 rounded-xl shadow-lg shadow-blue-100 transition-all hover:-translate-y-0.5 active:scale-95">
        Book Trip
      </button>
    </div>
  </div>
</div>
  );
};

export default CategoryDetailsPage;

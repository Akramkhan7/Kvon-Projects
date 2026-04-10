import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const packages = [
  {
    place: "Manali",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    price: "₹14,500",
    duration: "5 Days",
    rating: 4.7,
    reviews: 124,
    category: "Adventure",
    highlights: ["Solang Valley", "Rohtang Pass", "Old Manali"],
    includes: ["Hotel", "Meals", "Transport"],
    difficulty: "Easy",
    bestTime: "Oct – Jun",
  },
  {
    place: "Leh Ladakh",
    image: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b",
    price: "₹22,000",
    duration: "7 Days",
    rating: 4.9,
    reviews: 89,
    category: "Expedition",
    highlights: ["Pangong Lake", "Nubra Valley", "Magnetic Hill"],
    includes: ["Hotel", "Breakfast", "Flights"],
    difficulty: "Moderate",
    bestTime: "Jun – Sep",
  },
  {
    place: "Rishikesh",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    price: "₹7,500",
    duration: "4 Days",
    rating: 4.5,
    reviews: 210,
    category: "Spiritual",
    highlights: ["River Rafting", "Laxman Jhula", "Yoga Sessions"],
    includes: ["Hostel", "Breakfast", "Guide"],
    difficulty: "Easy",
    bestTime: "Sep – Jun",
  },
  {
    place: "Jaipur",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41",
    price: "₹18,000",
    duration: "6 Days",
    rating: 4.6,
    reviews: 176,
    category: "Heritage",
    highlights: ["Amber Fort", "Hawa Mahal", "City Palace"],
    includes: ["Hotel", "All Meals", "Transport"],
    difficulty: "Easy",
    bestTime: "Nov – Feb",
  },
];

const categoryColors = {
  Adventure: { bg: "#eff6ff", text: "#1d4ed8" },
  Expedition: { bg: "#faf5ff", text: "#7e22ce" },
  Spiritual: { bg: "#f0fdf4", text: "#15803d" },
  Heritage: { bg: "#fff7ed", text: "#c2410c" },
};

const Packages = () => {
  const navigate = useNavigate();
  const cardsRef = useRef([]);

  useEffect(() => {
    const observers = cardsRef.current.map((card, i) => {
      if (!card) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              card.style.opacity = "1";
              card.style.transform = "translateY(0)";
            }, i * 80);
            observer.disconnect();
          }
        },
        { threshold: 0.1 },
      );
      observer.observe(card);
      return observer;
    });
    return () => observers.forEach((o) => o && o.disconnect());
  }, []);

  return (
    <div className="px-6 md:px-16 py-10 bg-white min-h-screen">
      <style>{`
        .pkg-card {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.45s ease, transform 0.45s ease, box-shadow 0.25s ease;
        }
        .pkg-card:hover {
          box-shadow: 0 8px 28px rgba(0,0,0,0.10);
        }
        .pkg-img {
          transition: transform 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .pkg-card:hover .pkg-img {
          transform: scale(1.06);
        }
        .btn-details {
          transition: background 0.2s, color 0.2s, border-color 0.2s;
        }
        .btn-details:hover {
          background: #f3f4f6;
        }
        .btn-book {
          transition: background 0.2s, transform 0.15s;
        }
        .btn-book:hover {
          background: #1d4ed8;
          transform: translateY(-1px);
        }
        .back-btn {
          transition: color 0.2s, transform 0.2s;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
        .back-btn:hover {
          color: #2563eb;
          transform: translateX(-3px);
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        {/* BACK BUTTON */}
        <button
          onClick={() => navigate(-1)}
          className="back-btn text-gray-500 text-sm mb-6"
        >
          ← Back
        </button>

        {/* HEADING */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-800">
            Explore Our Packages
          </h2>
          <p className="text-gray-500 mt-1 text-sm">
            Discover the most loved destinations across North India
          </p>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {packages.map((item, i) => {
            const catColor = categoryColors[item.category] || { bg: "#f3f4f6", text: "#374151" };
            return (
              <div
                key={i}
                ref={(el) => (cardsRef.current[i] = el)}
                className="pkg-card rounded-2xl border border-gray-200 bg-white overflow-hidden"
              >
                {/* IMAGE */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.place}
                    className="pkg-img w-full h-full object-cover"
                  />
                  {/* Category Badge */}
                  <span
                    className="absolute top-3 left-3 text-[10px] font-bold uppercase px-2 py-0.5 rounded-full"
                    style={{ background: catColor.bg, color: catColor.text }}
                  >
                    {item.category}
                  </span>
                  {/* Destination Name */}
                  <h3 className="absolute bottom-3 left-4 text-white text-lg font-semibold tracking-wide drop-shadow">
                    {item.place}
                  </h3>
                </div>

                {/* BODY */}
                <div className="p-4 flex flex-col gap-2.5">

                  {/* Duration · People · Difficulty */}
                  <p className="text-xs text-gray-400 font-medium">
                    {item.duration} &nbsp;•&nbsp; 2 People &nbsp;•&nbsp;
                    <span className="text-gray-500">{item.difficulty}</span>
                  </p>

                  {/* Rating */}
                  <div className="flex items-center gap-1.5">
                    <span className="text-yellow-400 text-xs">★★★★★</span>
                    <span className="text-xs font-semibold text-gray-700">{item.rating}</span>
                    <span className="text-xs text-gray-400">({item.reviews} reviews)</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-1">
                    <p className="text-lg font-semibold text-gray-800">{item.price}</p>
                    <span className="text-xs text-gray-400">/ person</span>
                  </div>

                  {/* Highlights */}
                  <div>
                    <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wide mb-1">Highlights</p>
                    <ul className="space-y-0.5">
                      {item.highlights.map((h, j) => (
                        <li key={j} className="text-xs text-gray-600 flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-blue-400 inline-block flex-shrink-0"></span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Includes */}
                  <div className="flex flex-wrap gap-1">
                    {item.includes.map((tag, j) => (
                      <span
                        key={j}
                        className="text-[10px] bg-gray-100 text-gray-500 font-medium px-2 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Best Time */}
                  <p className="text-[10px] text-gray-400">
                    Best time: <span className="text-gray-600 font-medium">{item.bestTime}</span>
                  </p>

                  {/* BUTTONS */}
                  <div className="flex gap-2 mt-1">
                    <button
                      onClick={() => navigate(`/package/${i}`, { state: { pkg: item } })}
                      className="btn-details flex-1 border border-gray-300 text-[11px] font-bold uppercase py-2 rounded-full text-gray-600"
                    >
                      Details →
                    </button>
                    <button className="btn-book flex-1 bg-blue-600 text-white text-[11px] font-bold uppercase py-2 rounded-full">
                      Book
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Packages;
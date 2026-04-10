import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const packages = [
  {
    place: "Manali",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    price: "₹14,500",
    duration: "5 Days",
  },
  {
    place: "Leh Ladakh",
    image: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b",
    price: "₹22,000",
    duration: "7 Days",
  },
  {
    place: "Rishikesh",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    price: "₹7,500",
    duration: "4 Days",
  },
  {
    place: "Jaipur",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41",
    price: "₹18,000",
    duration: "6 Days",
  },
];

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
          {packages.map((item, i) => (
            <div key={i} ref={(el) => (cardsRef.current[i] = el)} className="pkg-card rounded-2xl border border-gray-200 bg-white overflow-hidden">
              <div className="relative h-44 overflow-hidden">
                <img src={item.image} alt={item.place} className="pkg-img w-full h-full object-cover" />
                <h3 className="absolute bottom-3 left-4 text-white text-lg font-semibold tracking-wide">{item.place}</h3>
              </div>

              <div className="p-4">
                <p className="text-xs text-gray-400 font-medium">{item.duration} &nbsp;•&nbsp; 2 People</p>
                <p className="mt-1.5 text-lg font-semibold text-gray-800">{item.price}</p>

                <div className="flex gap-2 mt-3">
                  {/* PASSING DATA DYNAMICALLY HERE */}
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Packages;

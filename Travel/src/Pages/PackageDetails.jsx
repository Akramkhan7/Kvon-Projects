import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Star,
  ChevronLeft,
  Calendar,
  Users,
  Heart,
  ShieldCheck,
  Share2,
  CheckCircle2,
  Shield,
  Camera,
  Send,
  Waves,
  Flower2,
  Wind,
  Dumbbell,
  Car,
  Sparkles,
  Dog,
} from "lucide-react";

const PackageDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Descriptions");
  const [userRating, setUserRating] = useState(0);

  const pkg = state?.pkg;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!pkg)
    return (
      <div className="h-screen flex items-center justify-center font-sans text-[10px] font-bold uppercase tracking-widest text-slate-400">
        Loading Package...
      </div>
    );

  const numericPrice = parseInt(pkg.price.replace(/[^\d]/g, "")) || 0;

  return (
    <div className=" min-h-screen bg-white text-slate-900  pb-20">
      {/* --- TOP NAV --- */}
      <nav className="absolute max-w-xl mx-auto px-4  py-4 flex items-center justify-between font-sans border-b border-slate-50">
        <button
          onClick={() => navigate(-1)}
          className="relative -top-10 left-24 flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-[0.2em] text-slate-600  rounded-full  transition-all hover:scale-105 hover:-translate-x-1 hover:text-blue-500"
        >
          ← Back
        </button>
      </nav>

      {/* --- IMAGE GRID --- */}
      <header className=" max-w-7xl mx-auto px-4 md:px-6 mt-13">
        <div className="grid grid-cols-4 grid-rows-2 gap-1.5 h-75 md:h-100 rounded-lg overflow-hidden border border-slate-100 shadow-sm">
          <div className="col-span-4 md:col-span-2 row-span-2 overflow-hidden">
            <img
              src={pkg.image}
              className="w-full h-full object-cover"
              alt={pkg.place}
            />
          </div>
          <div className="hidden md:block col-span-1 row-span-1 overflow-hidden">
            <img
              src={pkg.image}
              className="w-full h-full object-cover brightness-95"
              alt="img1"
            />
          </div>
          <div className="hidden md:block col-span-1 row-span-2 overflow-hidden relative">
            <img
              src={pkg.image}
              className="w-full h-full object-cover brightness-75"
              alt="img2"
            />
            <button className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-md text-[9px] font-bold uppercase tracking-widest flex items-center gap-2">
              <Camera size={12} /> All Photos (20)
            </button>
          </div>
          <div className="hidden md:block col-span-1 row-span-1 overflow-hidden">
            <img
              src={pkg.image}
              className="w-full h-full object-cover brightness-90"
              alt="img3"
            />
          </div>
        </div>
      </header>

      {/* --- MAIN CONTENT --- */}
      <main className="max-w-7xl mx-auto px-4 md:px-6 mt-5 flex flex-col lg:flex-row gap-12 font-sans">
        <div className="flex-1">
          {/* Header Info */}
          <section className="pb-2 border-b border-slate-100">
           

            <div className="flex justify-between">
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                {pkg.place}
              </h1>
              <div className="flex flex-col items-end">
                <div className="flex text-amber-400 gap-0.5 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      fill="currentColor"
                      strokeWidth={0}
                    />
                  ))}
                </div>
                <p className="text-[11px] font-bold text-slate-400">
                  <span className="text-slate-900">4.5/5</span> 102 Review
                </p>
              </div>
            </div>

            <div className="flex gap-4 mt-2 text-[11px] font-medium text-slate-400">
              <span>8 Guest</span>
              <span>•</span>
              <span>4 Bedroom</span>
              <span>•</span>
              <span>4 Bathroom</span>
              <span>•</span>
              <span>Private Pool</span>
            </div>
          </section>

          {/* TABS (What we offer removed) */}
          <div className="flex gap-8 border-b border-slate-100 overflow-x-auto no-scrollbar">
            {["Descriptions", "Reviews", "About The Host"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-5 text-[12px] font-bold transition-all relative whitespace-nowrap ${
                  activeTab === tab
                    ? "text-slate-900"
                    : "text-slate-400 hover:text-slate-600"
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-slate-900"></div>
                )}
              </button>
            ))}
          </div>

          {/* CONTENT AREA */}
          <div className="py-4">
            {activeTab === "Descriptions" && (
              <div className="animate-in fade-in duration-500 ">
                <h3 className="text-[14px] font-bold text-slate-900 mb-2">
                  Our House
                </h3>
                <p className="text-[13px] text-slate-500 leading-relaxed">
                  Renovasi berkualitas tinggi, dengan kamar mandi pribadi, untuk
                  menyambut Anda di jantung {pkg.place}. Tenang, menawan, dalam
                  suasana hijau: kemewahan yang sesungguhnya. Sangat mudah
                  menemukan tempat parkir. Unit ini mencakup akses ke taman,
                  teras, dan area komunal yang dirancang untuk kenyamanan
                  maksimal.
                </p>

<div>
  <hr className='border-slate-100 mt-3'/>
</div>
                {/* WHAT WE HAVE (Kept here) */}
                <h3 className="text-[14px] font-bold text-slate-900 mt-5 mb-3 uppercase tracking-wider">
                  What We Have?
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6">
                  <Amenity icon={<Waves size={16} />} label="Pool" />
                  <Amenity icon={<Flower2 size={16} />} label="Pilates" />
                  <Amenity icon={<Wind size={16} />} label="Air conditioning" />
                  <Amenity icon={<Dumbbell size={16} />} label="Gym" />
                  <Amenity icon={<Car size={16} />} label="Car Port" />
                  <Amenity icon={<Sparkles size={16} />} label="Spa" />
                  <Amenity icon={<Dog size={16} />} label="Pet Allowed" />
                </div>
              </div>
            )}

            {activeTab === "Reviews" && (
              <div className="animate-in fade-in duration-500 space-y-4">
                {/* INTERACTIVE REVIEW INPUT */}
                <div className="p-6 bg-slate-50 rounded-lg border border-slate-100">
                  <h4 className="text-[13px] font-bold mb-2">Write a Review</h4>
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button key={star} onClick={() => setUserRating(star)}>
                        <Star
                          size={18}
                          fill={userRating >= star ? "#fbbf24" : "none"}
                          stroke={userRating >= star ? "#fbbf24" : "#cbd5e1"}
                        />
                      </button>
                    ))}
                  </div>
                  <div className="relative">
                    <textarea
                      placeholder="Share your experience..."
                      className="w-full p-4 pr-12 text-[12px] border border-slate-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 min-h-[80px] bg-white"
                    />
                    <button className="absolute bottom-3 right-3 text-blue-600 hover:scale-110 transition-transform">
                      <Send size={18} />
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  <ReviewBox
                    user="Marc Antoine"
                    date="March 2026"
                    comment="Amazing location and the host was very helpful with local tips!"
                  />
                  <ReviewBox
                    user="Sarah J."
                    date="Feb 2026"
                    comment="The house is even better in person. Clean, modern, and very peaceful."
                  />
                </div>
              </div>
            )}

            {activeTab === "About The Host" && (
              <div className="animate-in fade-in duration-500">
                <div className="flex items-center gap-5 p-6 rounded-lg border border-slate-100 bg-slate-50/50">
                  <div className="w-14 h-14 rounded bg-slate-900 text-white flex items-center justify-center font-bold text-lg uppercase font-sans">
                    {pkg.place[0]}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-[13px] font-bold flex items-center gap-1.5 uppercase tracking-tight">
                      {pkg.place} Host Team{" "}
                      <CheckCircle2 size={14} className="text-blue-500" />
                    </h4>
                    <p className="text-[11px] text-slate-400 mt-1 font-medium tracking-wide">
                      Verified Superhost • Leading hospitality in {pkg.place}
                    </p>
                  </div>
                </div>
                <div className="mt-6 text-[13px] text-slate-500 leading-relaxed px-2 italic">
                  "Kami berdedikasi untuk memberikan pengalaman menginap terbaik
                  di {pkg.place}. Rumah kami adalah cerminan dari kecintaan kami
                  pada desain dan kenyamanan."
                </div>
              </div>
            )}
          </div>
        </div>

        {/* --- RESERVATION SIDEBAR --- */}
        <aside className="w-full lg:w-[360px]">
          <div className="lg:sticky lg:top-8 bg-white border border-slate-200 rounded-xl p-6 shadow-xl shadow-slate-100/50 font-sans">
            <div className="flex justify-between items-center mb-8">
              <p className="text-2xl font-bold text-slate-900 tracking-tight">
                ₹{numericPrice}{" "}
                <span className="text-[13px] text-slate-400 font-normal">
                  / Night
                </span>
              </p>
              <span className="bg-white border border-blue-200 text-blue-600 text-[9px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                <Shield size={10} fill="currentColor" /> Favorite Jablay
              </span>
            </div>

            <div className="space-y-4 mb-8">
              <div className="p-3 border border-slate-200 rounded-lg">
                <label className="text-[10px] font-bold text-slate-900 block mb-1 uppercase tracking-wider">
                  When?
                </label>
                <div className="flex items-center gap-3 text-[12px] text-slate-400 font-medium font-sans">
                  <Calendar size={14} /> Check-in Date—Check-out Date
                </div>
              </div>
              <div className="p-3 border border-slate-200 rounded-lg">
                <label className="text-[10px] font-bold text-slate-900 block mb-1 uppercase tracking-wider">
                  Participant
                </label>
                <div className="flex justify-between items-center text-[12px] text-slate-400 font-medium font-sans">
                  <div className="flex items-center gap-3">
                    <Users size={14} /> How many people?
                  </div>
                  <ChevronLeft size={14} className="-rotate-90" />
                </div>
              </div>
            </div>

            <div className="space-y-3 mb-8 pt-4 border-t border-slate-100 font-sans">
              <div className="flex justify-between text-[12px] font-medium text-slate-900">
                <span>₹{numericPrice} × 5 night</span>
                <span>₹{numericPrice * 5}</span>
              </div>
              <div className="flex justify-between text-[12px] font-medium text-slate-900">
                <span>Favorite Jablay</span>
                <span className="text-blue-600">-₹250</span>
              </div>
              <div className="flex justify-between text-[12px] font-medium text-slate-900 pb-4 border-b border-slate-100">
                <span>Services fee</span>
                <span className="text-blue-600">-₹50</span>
              </div>
              <div className="flex justify-between text-[14px] font-bold text-slate-900 mt-2">
                <span>Total Payment</span>
                <span className="text-blue-600">₹{numericPrice * 5 - 300}</span>
              </div>
            </div>

            <button className="w-full bg-[#2563eb] text-white py-4 rounded-lg font-bold text-[13px] shadow-lg shadow-blue-100 hover:bg-blue-700 transition-all active:scale-[0.98]">
              Reservation
            </button>
          </div>
        </aside>
      </main>
    </div>
  );
};

const Amenity = ({ icon, label }) => (
  <div className="flex items-center gap-3">
    <div className="text-slate-400">{icon}</div>
    <span className="text-[12px] font-medium text-slate-500">{label}</span>
  </div>
);

const ReviewBox = ({ user, date, comment }) => (
  <div className="p-5 border border-slate-100 rounded-lg bg-white shadow-sm">
    <div className="flex justify-between items-center mb-2">
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-bold font-sans">
          {user[0]}
        </div>
        <span className="text-[12px] font-bold text-slate-900">{user}</span>
      </div>
      <span className="text-[10px] text-slate-400 font-medium">{date}</span>
    </div>
    <p className="text-[12px] text-slate-500 leading-relaxed italic">
      "{comment}"
    </p>
  </div>
);

export default PackageDetails;

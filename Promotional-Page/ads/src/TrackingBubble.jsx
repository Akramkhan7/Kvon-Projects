import React from "react";
import { MapPin } from "lucide-react";

const TrackingBubble = () => {
  return (
    <div className="absolute right-32 top-24 z-20 bubble-pop">
      
      <div className="bubble-float flex items-center gap-3 
        bg-white/70 backdrop-blur-xl 
        border border-white/80 
        rounded-2xl px-4 py-2 
        shadow-xl shadow-black/10
        relative">

        {/* Soft Glow */}
        <div className="absolute inset-0 rounded-2xl bg-emerald-400/10 blur-xl -z-10"></div>

        {/* Profile Image */}
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="User"
          className="w-8 h-8 rounded-full object-cover ring-2 ring-emerald-400"
        />

        {/* Text */}
        <div className="leading-tight">
          <p className="text-sm font-semibold text-slate-800">
            Peak there Tracking
          </p>
          <p className="text-xs text-slate-500">
            Dueno
          </p>
        </div>

        {/* Location Icon */}
        <MapPin
          size={18}
          className="text-emerald-500 ml-2 animate-pulse"
          strokeWidth={2.5}
        />
      </div>

    </div>
  );
};

export default TrackingBubble;

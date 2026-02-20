import React from "react";
import { Star, Phone, MessageCircle, Share2, Clock } from "lucide-react";

const DriverFoundCard = () => {
  return (
    <div className="absolute left-55 bottom-10 z-20">
      <div className="bg-white/70 backdrop-blur-xl border border-orange-400 rounded-2xl p-3 w-72 shadow-xl shadow-orange-200/40">

  {/* Top Row */}
  <div className="flex items-center justify-between mb-3">
    <div className="flex items-center gap-2">
      <div className="text-xl">🛺</div>
      <div>
        <h3 className="font-semibold text-gray-800 text-sm">
          Driver Found!
        </h3>
        <p className="text-xs text-gray-600">
          Arriving in 1 min
        </p>
      </div>
    </div>
    <Clock size={16} className="text-gray-600" />
  </div>

  {/* Driver Info */}
  <div className="bg-white rounded-xl p-3 shadow-sm">
    <div className="flex items-center gap-3">

      <img
        src="https://randomuser.me/api/portraits/women/44.jpg"
        alt="Driver"
        className="w-12 h-12 rounded-full border-3 border-orange-400 object-cover"
      />

      <div className="flex-1">
        <h4 className="font-bold text-gray-800 text-sm">
          Priya S.
        </h4>
        <p className="text-xs text-gray-500">
          UP 78 GD 4557
        </p>

        <div className="flex gap-1 mt-1">
          {[1, 2, 3, 4].map((i) => (
            <Star
              key={i}
              size={12}
              className="fill-yellow-400 text-yellow-400"
            />
          ))}
          <Star size={12} className="text-gray-300" />
        </div>
      </div>

      <div className="text-gray-400 text-lg">›</div>
    </div>

    <div className="flex justify-between mt-3 pt-2 border-t text-gray-600">
      <Phone size={16} className="hover:text-orange-500 cursor-pointer" />
      <MessageCircle size={16} className="hover:text-orange-500 cursor-pointer" />
      <Share2 size={16} className="hover:text-orange-500 cursor-pointer" />
    </div>
  </div>
</div>

    </div>
  );
};

export default DriverFoundCard;

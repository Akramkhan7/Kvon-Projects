import React from "react";
import { Zap, Home } from "lucide-react";

const LiveFareCard = () => {
  return (
    <div className="absolute right-27 top-100 -translate-y-1/2 z-20 ">
      <div className=" w-68 bg-white/70 backdrop-blur-xl p-4 rounded-2xl border border-orange-400 s shadow-xl shadow-black/10">

        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Live Fare & ETA
        </h2>

        <div className="flex items-center justify-between bg-white rounded-xl p-3 mb-3 shadow-sm">
          <div>
            <p className="text-lg font-bold text-gray-800">₹40</p>
            <p className="text-sm text-gray-500">Fun Session</p>
          </div>
          <div className="bg-gray-100 p-2 rounded-full">
            <Zap className="w-4 h-4 text-gray-600" />
          </div>
        </div>

        <div className="flex items-center justify-between bg-white rounded-xl p-4 mb-4 shadow-sm">
          <div>
            <p className="text-lg font-bold text-gray-800">₹20</p>
            <p className="text-xs text-green-600 font-medium">(Earn Money)</p>
          </div>
          <div className="bg-green-500 p-2 rounded-full">
            <Home className="w-4 h-4 text-white" />
          </div>
        </div>

        <div className="flex justify-between text-gray-800 font-semibold">
          <div>
            <p className="text-md">₹70</p>
            <p className="text-xs text-gray-500">50% Hidden</p>
          </div>
          <div className="text-right">
            <p className="text-md">₹130</p>
            <p className="text-xs text-gray-500">Doorstep</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LiveFareCard;

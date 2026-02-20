import React, { useState } from "react";
import {
  ArrowUpRight,
  Check,
  X,
  ShieldCheck,
  Bike,
  Car,
  MapPin,
  CreditCard,
  Smartphone,
  QrCode,
} from "lucide-react";

import promoBg from "./assets/promotionalBg.jpeg";
import LiveFareCard from "./LiveFareCard";
import DriverFoundCard from "./DriverFoundCard";
import TrackingBubble from "./TrackingBubble";

const StretWiseFixed = () => {
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="min-h-screen w-full font-sans text-slate-900 flex flex-col">
      {/* ================= HERO SECTION ================= */}
      <section
        className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${promoBg})` }}
      >
        {/* NAVBAR */}
        <nav className="flex items-center justify-between px-6 md:px-12 py-6 relative z-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-lg">
              R
            </div>
            <span className="text-xl font-bold tracking-tight">Runaar</span>
          </div>

          <div className="hidden md:flex items-center gap-10 text-sm font-semibold text-slate-700">
            <a href="#" className="relative group">
              Safety
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </a>

            <a href="#" className="relative group">
              Rates
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </a>

            <a href="#" className="relative group">
              Drive with Us
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          <button
            onClick={() => setShowContact(true)}
            className="bg-orange-500 hover:bg-orange-600 text-white px-5 md:px-6 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 shadow-xl shadow-orange-500/30"
          >
            Book Demo <ArrowUpRight size={16} />
          </button>
        </nav>

        {/* HERO CONTENT */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
          <div className="pt-10 md:pt-32 max-w-lg space-y-6 z-10 relative">
            <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-md px-4 py-1.5 rounded-full border text-xs font-bold text-green-800 shadow-sm">
              <Check size={14} className="text-green-600" />
              Smart Rewards. Every Route
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
              Smart City. <br />
              Powered Tap Away. <br />
              Your city unlocked.
            </h1>

            <p className="text-slate-600 text-base md:text-lg">
              Skip the wait and haggle. Book a bike, auto, or car in seconds for
              a stress-free journey.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-orange-500 text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-orange-500/30">
                Book Now
              </button>
              <button className="bg-white/70 backdrop-blur-md border px-8 py-4 rounded-2xl font-bold text-slate-700">
                Explore Fares
              </button>
            </div>
          </div>

          {/* FLOATING ELEMENTS (hidden on small screens) */}
          <div className="hidden lg:block">
            <TrackingBubble />
            <LiveFareCard />
            {/* <DriverFoundCard /> */}
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="bg-linear-to-b from-white to-emerald-50 py-16 md:py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Powerful Features Built For Smart Cities
          </h2>

          <p className="text-slate-600 max-w-2xl mx-auto mb-12">
            Our platform makes urban mobility faster, safer, and smarter.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition-all">
              <h3 className="text-lg font-bold text-emerald-600 mb-3">
                Real-Time Tracking
              </h3>
              <p className="text-sm text-slate-600">
                Accurate live GPS tracking with smart ETA prediction.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition-all">
              <h3 className="text-lg font-bold text-orange-500 mb-3">
                Smart Fare Engine
              </h3>
              <p className="text-sm text-slate-600">
                AI-powered dynamic pricing without surge shocks.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition-all">
              <h3 className="text-lg font-bold text-emerald-600 mb-3">
                Wallet & Rewards
              </h3>
              <p className="text-sm text-slate-600">
                Cashback rewards & seamless digital payments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= DIFFERENT ================= */}
      <section className="py-16 md:py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
              What Makes Us Different?
            </h2>

            <ul className="space-y-4 text-slate-700">
              <li className="flex gap-3">
                <Check className="text-emerald-500 mt-1" size={18} />
                AI-powered route optimization
              </li>
              <li className="flex gap-3">
                <Check className="text-emerald-500 mt-1" size={18} />
                Transparent driver earnings
              </li>
              <li className="flex gap-3">
                <Check className="text-emerald-500 mt-1" size={18} />
                No hidden surge pricing
              </li>
              <li className="flex gap-3">
                <Check className="text-emerald-500 mt-1" size={18} />
                Smart city analytics dashboard
              </li>
            </ul>
          </div>

          <div className="bg-linear-to-br from-emerald-100 to-orange-100 p-10 rounded-3xl shadow-lg">
            <h3 className="text-xl font-bold mb-4">
              Built For Cities, Not Just Riders
            </h3>
            <p className="text-slate-700 text-sm">
              Unlike traditional ride apps, we focus on sustainability,
              analytics, and public mobility optimization.
            </p>
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS (NEW) ================= */}
      <section className="py-16 md:py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-slate-900">
              Get Moving in 3 Easy Steps
            </h2>
            <p className="text-slate-600">
              No complex sign-ups. Just open the app and ride.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting Line for Desktop */}
            <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-slate-200 z-0"></div>

            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-24 h-24 bg-white rounded-full shadow-xl flex items-center justify-center mb-6 border-4 border-slate-50 group-hover:border-emerald-100 transition-colors">
                <MapPin size={32} className="text-emerald-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">1. Set Destination</h3>
              <p className="text-sm text-slate-500">
                Enter your drop-off point and see your upfront fare instantly.
              </p>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-24 h-24 bg-white rounded-full shadow-xl flex items-center justify-center mb-6 border-4 border-slate-50 group-hover:border-orange-100 transition-colors">
                <Car size={32} className="text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">2. Choose Ride</h3>
              <p className="text-sm text-slate-500">
                Pick from our fleet of bikes, autos, or premium cars nearby.
              </p>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-24 h-24 bg-white rounded-full shadow-xl flex items-center justify-center mb-6 border-4 border-slate-50 group-hover:border-emerald-100 transition-colors">
                <CreditCard size={32} className="text-emerald-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">3. Ride & Pay</h3>
              <p className="text-sm text-slate-500">
                Enjoy a safe trip and pay seamlessly via wallet, UPI, or cash.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= OUR FLEET (NEW) ================= */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-slate-900">
              A Ride for Every Need
            </h2>
            <p className="text-slate-600">
              From quick solo trips to comfortable family rides.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Bike */}
            <div className="border border-slate-100 bg-slate-50 rounded-3xl p-8 hover:shadow-2xl hover:bg-white transition-all cursor-pointer">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                <Bike size={32} />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-2">
                Street Bike
              </h3>
              <p className="text-slate-600 text-sm mb-6">
                Beat the traffic. Quick, affordable rides for solo travelers.
              </p>
              <p className="text-lg font-bold text-emerald-600">
                Starts at ₹20
              </p>
            </div>

            {/* Auto */}
            <div className="border-2 border-orange-500 bg-white shadow-xl rounded-3xl p-8 transform md:-translate-y-4 cursor-pointer relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-orange-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
                Most Popular
              </div>
              <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-6">
                <Car size={32} />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-2">
                Street Auto
              </h3>
              <p className="text-slate-600 text-sm mb-6">
                The city classic. No haggling, straight to your destination.
              </p>
              <p className="text-lg font-bold text-orange-600">Starts at ₹40</p>
            </div>

            {/* Prime */}
            <div className="border border-slate-100 bg-slate-50 rounded-3xl p-8 hover:shadow-2xl hover:bg-white transition-all cursor-pointer">
              <div className="w-16 h-16 bg-slate-200 text-slate-800 rounded-2xl flex items-center justify-center mb-6">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-2">
                Street Prime
              </h3>
              <p className="text-slate-600 text-sm mb-6">
                Top-rated drivers, extra legroom, and AC for a premium feel.
              </p>
              <p className="text-lg font-bold text-slate-800">Starts at ₹120</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SAFETY & TRUST (REPLACEMENT) ================= */}
      <section className="py-24 px-6  text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl text-slate-800 font-extrabold mb-6">
            Powering Smarter Cities
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto mb-16">
            Real numbers. Real impact. Built for scale.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            <div>
              <p className="text-4xl font-extrabold text-orange-500">500K+</p>
              <p className="text-sm text-slate-400 mt-2">Rides Completed</p>
            </div>

            <div>
              <p className="text-4xl font-extrabold text-emerald-400">98%</p>
              <p className="text-sm text-slate-400 mt-2">On-Time Arrival</p>
            </div>

            <div>
              <p className="text-4xl font-extrabold text-orange-500">4.9★</p>
              <p className="text-sm text-slate-400 mt-2">Average Rating</p>
            </div>

            <div>
              <p className="text-4xl font-extrabold text-emerald-400">120+</p>
              <p className="text-sm text-slate-400 mt-2">
                Smart Routes Optimized
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA SECTION (NEW) ================= */}
     <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#f6f8fb] flex justify-center">
  <div className="relative w-full max-w-5xl rounded-3xl bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white px-6 sm:px-10 md:px-12 py-10 sm:py-14 md:py-16 overflow-hidden">
    
    {/* Glow Background */}
    <div className="absolute -top-20 -right-20 w-60 sm:w-72 h-60 sm:h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
    <div className="absolute -bottom-20 -left-20 w-60 sm:w-72 h-60 sm:h-72 bg-purple-500/20 rounded-full blur-3xl"></div>

    <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
      
      {/* LEFT */}
      <div className="text-center md:text-left max-w-lg">
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight">
          Ready to Ride? Download Now.
        </h2>

        <p className="text-gray-300 mt-4 text-sm sm:text-base">
          Book rides instantly, track drivers in real-time, and move smarter every day.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">
          
          <button className="w-full sm:w-auto px-6 py-3 rounded-xl border border-white/30 text-white font-semibold transition-all duration-300 hover:bg-white hover:text-slate-900">
            iOS 
          </button>

          <button className="w-full sm:w-auto px-6 py-3 rounded-xl border border-white/30 text-white font-semibold transition-all duration-300 hover:bg-white hover:text-slate-900">
            Android 
          </button>

        </div>
      </div>

      {/* RIGHT QR */}
      <div className="bg-white/10 backdrop-blur-xl p-4 sm:p-6 rounded-2xl border border-white/20">
        <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-white rounded-xl flex items-center justify-center text-black font-semibold">
          QR
        </div>
      </div>

    </div>
  </div>
</section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-slate-900 text-white py-6 px-6 text-sm">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
          <p>© 2026 StretWise. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-orange-400">
              Privacy
            </a>
            <a href="#" className="hover:text-orange-400">
              Terms
            </a>
            <a href="#" className="hover:text-orange-400">
              Contact
            </a>
          </div>
        </div>
      </footer>

      {/* ================= MODAL ================= */}
      {showContact && (
        <div className="fixed inset-0 z-100 bg-slate-900/40 backdrop-blur-lg flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-300">
          {/* Main Modal Container */}
          <div className="max-w-5xl w-full bg-white/95 backdrop-blur-2xl rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border border-white/50 grid md:grid-cols-2 overflow-hidden relative transform transition-all scale-100 animate-in zoom-in-95 duration-300">
            {/* Close Button */}
            <button
              onClick={() => setShowContact(false)}
              className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 text-slate-400 hover:text-white md:text-slate-400 md:hover:text-slate-900 md:bg-slate-100 md:hover:bg-slate-200 p-3 rounded-full transition-all z-20"
            >
              <X size={20} />
            </button>

            {/* ================= LEFT SIDE - FORM ================= */}
            <div className="p-10 md:p-14 flex flex-col justify-center bg-white">
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 bg-orange-100 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-orange-600 mb-4">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse"></span>
                  Partner with us
                </div>
                <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                  Get in Touch
                </h2>
                <p className="text-slate-500  mt-2 text-sm">
                  Ready to transform your city's mobility? Let's build the
                  future together.
                </p>
              </div>

              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 ml-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="John"
                      className="w-full px-5 py-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:bg-white focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 outline-none transition-all text-sm font-medium"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 ml-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Doe"
                      className="w-full px-5 py-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:bg-white focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 outline-none transition-all text-sm font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 ml-1">
                    Business Email
                  </label>
                  <input
                    type="email"
                    placeholder="john@company.com"
                    className="w-full px-5 py-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:bg-white focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 outline-none transition-all text-sm font-medium"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 ml-1">
                    Message
                  </label>
                  <textarea
                    rows="3"
                    placeholder="How can we help you?"
                    className="w-full px-5 py-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:bg-white focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 outline-none resize-none transition-all text-sm font-medium"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full mt-4 bg-slate-900 hover:bg-black text-white py-4 rounded-2xl font-bold shadow-xl shadow-slate-900/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  Send Request <ArrowUpRight size={18} />
                </button>
              </form>
            </div>

            {/* ================= RIGHT SIDE - QR & DOWNLOAD ================= */}
            <div className="relative p-10 md:p-14 bg-slate-900 text-white flex flex-col items-center justify-center text-center overflow-hidden">
              {/* Abstract Glowing Background Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 blur-[80px] rounded-full mix-blend-screen pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 blur-[80px] rounded-full mix-blend-screen pointer-events-none"></div>

              <div className="relative z-10 w-full max-w-sm flex flex-col items-center">
                <h3 className="text-3xl font-bold mb-2 tracking-tight">
                  Get the App
                </h3>
                <p className="text-slate-400 text-sm font-medium mb-8">
                  Scan the code to instantly access StretWise on your device.
                </p>

                {/* Premium QR Box */}
                <div className="bg-white/10 p-2 rounded-4xl backdrop-blur-md border border-white/20 shadow-2xl mb-8 group cursor-pointer hover:bg-white/20 transition-all duration-500">
                  <div className="bg-white p-5 rounded-3xl group-hover:scale-[0.98] transition-transform">
                    <QrCode
                      size={140}
                      className="text-slate-900"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>

                {/* App Store Buttons */}
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* iOS Button */}
                  <div className="flex items-center justify-center gap-3 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white p-4 rounded-2xl transition-all cursor-pointer backdrop-blur-sm group">
                    <Smartphone
                      size={24}
                      className="group-hover:-translate-y-0.5 transition-transform text-slate-300 group-hover:text-white"
                    />
                    <div className="text-left leading-tight">
                      <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                        Download on
                      </p>
                      <p className="font-bold text-sm tracking-tight">
                        App Store
                      </p>
                    </div>
                  </div>

                  {/* Android Button */}
                  <div className="flex items-center justify-center gap-3 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white p-4 rounded-2xl transition-all cursor-pointer backdrop-blur-sm group">
                    <Smartphone
                      size={24}
                      className="group-hover:-translate-y-0.5 transition-transform text-slate-300 group-hover:text-white"
                    />
                    <div className="text-left leading-tight">
                      <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                        Get it on
                      </p>
                      <p className="font-bold text-sm tracking-tight">
                        Google Play
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StretWiseFixed;

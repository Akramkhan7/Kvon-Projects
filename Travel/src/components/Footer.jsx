import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";


const Footer = () => {
  return (
    <footer className="bg-black text-gray-300">
      
      {/* Responsive Grid: 
        - Mobile: 1 column (grid-cols-1)
        - Tablet: 2 columns (sm:grid-cols-2)
        - Desktop: 4 columns (lg:grid-cols-4)
      */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 py-12 lg:py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

       
        <div className="sm:col-span-2 lg:col-span-1">
          <h2 className="text-2xl font-bold text-white tracking-wide">LOGO</h2>
          <p className="text-sm text-gray-400 mt-4 leading-relaxed max-w-sm sm:max-w-md lg:max-w-xs">
            Discover beautiful destinations, curated travel experiences, and
            unforgettable journeys across India.
          </p>
        </div>

        {/* COMPANY */}
        <div>
          <h3 className="text-white text-sm font-semibold mb-5 uppercase tracking-wider">Company</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">About Us</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Careers</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Blog</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</a></li>
          </ul>
        </div>

        {/* EXPLORE */}
        <div>
          <h3 className="text-white text-sm font-semibold mb-5 uppercase tracking-wider">Explore</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Destinations</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Packages</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Best Time</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Travel Stories</a></li>
          </ul>
        </div>

        {/* CONTACT & SOCIAL */}
        <div>
          <h3 className="text-white text-sm font-semibold mb-5 uppercase tracking-wider">Contact</h3>
         <ul className="space-y-4 text-sm text-gray-400">
  
  <li className="flex items-start gap-3">
    <MapPin className="text-blue-500 mt-1" size={18} />
    <span>
      Jaipur, Rajasthan <br /> India
    </span>
  </li>

  <li className="flex items-center gap-3">
    <Phone className="text-blue-500" size={18} />
    <span>+91 98765 43210</span>
  </li>

  <li className="flex items-center gap-3">
    <Mail className="text-blue-500" size={18} />
    <a
      href="mailto:travel@email.com"
      className="hover:text-white transition-colors duration-300"
    >
      travel@email.com
    </a>
  </li>

</ul>

          {/* SOCIAL */}
          <div className="flex gap-5 mt-8 text-sm font-medium">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Instagram</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">YouTube</a>
          </div>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-800 text-xs text-gray-500">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Travel Co. All rights reserved.</p>
          
          {/* Added simple legal links for a realistic footer feel */}
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
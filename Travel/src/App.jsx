import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Contact from "./Pages/Contact";
import Packages from "./Pages/Packages";
import Login from "./Pages/Login";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import PackageDetails from "./Pages/PackageDetails";
import CategoryDetailsPage from "./Pages/CategoryDetailsPage";
import Flights from "./components/Services/Flights";
import Cruise from "./components/Services/Cruise";
import Hotels from "./components/Services/Hotels";
import Visa from "./components/Services/Visa";
import Currency from "./components/Services/Currency";
import Deals from "./components/Extras/Deals";
import Planner from "./components/Extras/Planner";
import Insurance from "./components/Extras/Insurance";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <div className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/package/:id" element={<PackageDetails />} />
            <Route path="/category/:slug" element={<CategoryDetailsPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/flights" element={<Flights />} />
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/cruise" element={<Cruise />} />
            <Route path="/visa" element={<Visa />} />
            <Route path="/currency" element={<Currency />} />
            <Route path="/deals" element={<Deals />} />
            <Route path="/planner" element={<Planner />} />
            <Route path="/insurance" element={<Insurance />} />
            
          </Routes>
        </div>

        {/* FOOTER */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;

import React, { useState } from "react";

const App = () => {
  const slides = [
    "https://images.unsplash.com/photo-1772730669761-2369bb003e15?q=80&w=987&auto=format&fit=crop",
    "https://plus.unsplash.com/premium_photo-1772652313773-b0157c032d15?q=80&w=1035&auto=format&fit=crop",
    "https://plus.unsplash.com/premium_photo-1772387688381-3f7277bb3977?q=80&w=1041&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1772621089845-26fd22802a47?q=80&w=999&auto=format&fit=crop",
  ];

  const [index, setIndex] = useState(0);
  const [showLogin, setShowLogin] = useState(false);

  const nextSlide = () => {
    if (index === slides.length - 1) {
      setShowLogin(true);
    } else {
      setIndex(index + 1);
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  if (showLogin) {
    return <LoginPage />;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">

      <div className="w-[350px] overflow-hidden rounded-xl shadow-lg relative">

        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >

          {slides.map((slide, i) => (
            <img
              key={i}
              src={slide}
              alt="slide"
              className="w-[350px] h-[250px] object-cover flex-shrink-0"
            />
          ))}

        </div>

       {index > 0 && (
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black text-white px-3 py-1 rounded"
          >
            Prev
          </button>
        )}

        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black text-white px-3 py-1 rounded"
        >
          Next
        </button>

      </div>

    </div>
  );
};


const LoginPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">

      <div className="bg-white p-8 rounded-xl shadow-lg w-[320px]">

        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 mb-4 rounded"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 mb-4 rounded"
        />

        <button className="w-full bg-blue-500 text-white py-2 rounded">
          Login
        </button>

      </div>

    </div>
  );
};

export default App;
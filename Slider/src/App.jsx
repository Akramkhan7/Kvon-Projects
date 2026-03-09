import React, { useEffect, useState } from "react";

const App = () => {
  const slides = [
    "https://images.unsplash.com/photo-1772730669761-2369bb003e15?q=80&w=987&auto=format&fit=crop",
    "https://plus.unsplash.com/premium_photo-1772652313773-b0157c032d15?q=80&w=1035&auto=format&fit=crop",
    "https://plus.unsplash.com/premium_photo-1772387688381-3f7277bb3977?q=80&w=1041&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1772621089845-26fd22802a47?q=80&w=999&auto=format&fit=crop",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (index < slides.length - 1) {
        setIndex(index + 1);
      }
    }, 2000);
  }, [index]);

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
              className="w-87.5 h-[250px] object-cover shrink-0"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;

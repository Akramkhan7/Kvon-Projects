import React, { useState } from "react";

const packages = [
  {
    region: "Himachal Pradesh",
    title: "Manali Snow Escape",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    points: [
      "Rohtang Pass & Solang Valley",
      "Old Manali & Hadimba Temple",
      "River-side camp stay",
      "Paragliding & ATV rides",
    ],
    duration: "5 Days",
    people: "2 People",
    type: "Mid-Range",
    price: "₹14,500",
  },
  {
    region: "Himachal Pradesh",
    title: "Manali Snow Escape",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    points: [
      "Rohtang Pass & Solang Valley",
      "Old Manali & Hadimba Temple",
      "River-side camp stay",
      "Paragliding & ATV rides",
    ],
    duration: "5 Days",
    people: "2 People",
    type: "Mid-Range",
    price: "₹14,500",
  },
  {
    region: "Leh, Ladakh",
    title: "Sky Desert Circuit",
    image: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b",
    points: [
      "Pangong Lake sunrise",
      "Nubra Valley dunes",
      "Thiksey Monastery",
      "Khardung La Pass",
    ],
    duration: "7 Days",
    people: "2 People",
    type: "Mid-Range",
    price: "₹22,000",
  },
  {
    region: "Leh, Ladakh",
    title: "Sky Desert Circuit",
    image: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b",
    points: [
      "Pangong Lake sunrise",
      "Nubra Valley dunes",
      "Thiksey Monastery",
      "Khardung La Pass",
    ],
    duration: "7 Days",
    people: "2 People",
    type: "Mid-Range",
    price: "₹22,000",
  },
];

const PackageCards = () => {
  return (
    <div className="px-8 md:px-2 py-16 bg-white">
      <h2 className="text-3xl font-serif text-gray-800 mb-10">
        Featured Packages
      </h2>

      <div className="grid md:grid-cols-4 gap-6">
        {packages.map((item, i) => (
          <Card key={i} item={item} />
        ))}
      </div>
    </div>
  );
};

const Card = ({ item }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-sm transition">
      {/* Smaller Image */}
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-40 object-cover"
      />

      <div className="p-4">
        {/* Region */}
        <p className="text-[10px] tracking-widest text-blue-600 uppercase">
          {item.region}
        </p>

        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>

        {/* Points (compact) */}
        <ul className="mt-2 space-y-1 text-xs text-gray-600">
          {(showMore ? item.points : item.points.slice(0, 2)).map(
            (point, idx) => (
              <li key={idx} className="flex gap-1">
                <span className="text-blue-500">•</span>
                {point}
              </li>
            ),
          )}
        </ul>

        {/* Show more */}
        {item.points.length > 2 && (
          <button
            onClick={() => setShowMore(!showMore)}
            className="text-xs text-blue-600 mt-1"
          >
            {showMore ? "Show less" : `+ ${item.points.length - 2} more`}
          </button>
        )}

        {/* Tags */}
        <div className="flex gap-2 mt-3 text-[10px]">
          <span className="bg-gray-100 px-2 py-1 rounded">{item.duration}</span>
          <span className="bg-gray-100 px-2 py-1 rounded">{item.people}</span>
          <span className="bg-gray-100 px-2 py-1 rounded">{item.type}</span>
        </div>

        {/* Bottom */}
        <div className="flex items-center justify-between mt-4">
          <p className="text-sm font-medium text-gray-800">{item.price}</p>

          <button className="text-xs border px-3 py-1 rounded hover:bg-gray-100">
            View →
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackageCards;

import React from "react";

function TopButtons({ setQuery }) {
  const cities = [
    {
      id: 1,
      title: "Indore",
    },
    {
      id: 2,
      title: "Bhopal",
    },
    {
      id: 3,
      title: "Mumbai",
    },
    {
      id: 4,
      title: "Pune",
    },
    {
      id: 5,
      title: "Bangalore",
    },
  ];

  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white text-lg font-medium"
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;

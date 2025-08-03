import React, { useEffect, useState } from "react";

const Hotel = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("/fakeData.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl mb-4">Available Hotels:</h1>
      {cards.map((location) => (
        <div key={location.id} className="mb-6">
          <h2 className="text-2xl font-bold">{location.name}</h2>
          <p>{location.description}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {location.accommodations.map((stay) => (
              <div
                key={stay.id}
                className="bg-white text-black p-4 rounded shadow"
              >
                <h3 className="text-xl font-semibold">{stay.name}</h3>
                <p>
                  Guests: {stay.guests}, Bedrooms: {stay.bedrooms}
                </p>
                <p>Price: ${stay.price_per_night}/night</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Hotel;

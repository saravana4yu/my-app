import React from "react";

const cards = [
  { id: 1, name: "Marketing", size: "124 MB" },
  { id: 2, name: "Branding", size: "124 MB" },
  { id: 3, name: "Your Gallery", size: "124 MB" },
];

function Cards() {
  return (
    <div className="flex space-x-4">
      <div className="bg-gray-100 p-6 rounded-lg shadow-md flex items-center justify-center border-dashed border-2 border-gray-300">
        <span className="text-gray-500 text-2xl">+</span>
      </div>
      {cards.map((card) => (
        <div key={card.id} className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center">
          <h3 className="text-xl font-semibold">{card.name}</h3>
          <p className="text-gray-500">{card.size}</p>
        </div>
      ))}
      
    </div>
  );
}

export default Cards;

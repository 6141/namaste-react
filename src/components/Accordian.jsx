import React, { useState } from "react";

const Accordion = ({ title, itemCards }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-200 mb-10 bg-gray-100 shadow-md">
      <div className="flex justify-between items-center">
        <button
          onClick={handleToggle}
          className="text-left py-2 px-4 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:bg-gray-200"
        >
          {title}
        </button>
        <button
          onClick={handleToggle} 
          className="py-2 px-4 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:bg-gray-200"
        >
          {isOpen ? "▲" : "▼"}
        </button>
      </div>
      {isOpen && (
        <div className="pl-4 pr-2 py-2">
          {itemCards.map((tab, index) => (
            <div key={index} className="category-item mb-4">
              <h3 className="text-xl font-semibold mb-2">{tab.card.info.name}</h3>
              <div className="item flex items-center mb-4 border-b border-gray-200 pb-4">
                <img
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/${tab.card.info.imageId}`}
                  alt={tab.card.info.name}
                  className="w-12 h-12 mr-4 object-cover"
                />
                <div className="flex-1">
                  <p className="text-lg">{tab.card.info.name}</p>
                  <p className="text-sm text-gray-600">{tab.card.info.description}</p>
                  <p className="text-sm text-gray-600">₹{(tab.card.info.price / 100).toFixed(2)}</p>
                </div>
                <button className="py-1 px-3 bg-blue-500 text-white rounded hover:bg-blue-600">
                  Add
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Accordion;

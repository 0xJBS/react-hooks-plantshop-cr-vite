import React, { useState } from "react";

function PlantCard({ plant }) {
  const { name, image, price } = plant;
  
  // Local state to track whether this specific item is in stock
  const [isInStock, setIsInStock] = useState(true);

  function handleToggleStock() {
    setIsInStock((prevStock) => !prevStock);
  }

  return (
    <li className="card" data-testid="plant-item">
      {/* Handles missing images gracefully with a placeholder fallback */}
      <img src={image || "https://via.placeholder.com/400"} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isInStock ? (
        <button className="primary" onClick={handleToggleStock}>
          In Stock
        </button>
      ) : (
        <button onClick={handleToggleStock}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
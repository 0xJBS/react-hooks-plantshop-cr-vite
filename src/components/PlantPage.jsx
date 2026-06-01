import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  // 1. State to hold our master list of plants from the backend
  const [plants, setPlants] = useState([]);
  
  // 2. State to track what the user is typing into the search bar
  const [searchTerm, setSearchTerm] = useState("");

  // 3. Fetch plants from backend on initial page load
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((data) => setPlants(data))
      .catch((error) => console.error("Error fetching plants:", error));
  }, []);

  // 4. Callback function to add a newly created plant to state
  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }

  // 5. Derived state: Filtered list based on the search query (case-insensitive)
  // If search query is cleared, it safely defaults back to rendering all plants.
  const displayedPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <PlantList plants={displayedPlants} />
    </main>
  );
}

export default PlantPage;
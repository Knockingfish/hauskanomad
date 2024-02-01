import React, { useEffect, useState } from "react";
import DestinationCard from "../components/DestinationCard";
import SearchBar from "../components/SearchBar";
import Slideshow from "../components/Slideshow";
import Footer from "../components/Footer";

const Home = () => {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true); // Added loading state

  fetch('http://localhost:5000/api/destinations') // Assuming your backend is running on port 5000
  .then((response) => response.json())
  .then((data) => {
    console.log('Received data:', data);
    setDestinations(data.destinations);
    setLoading(false);
  })
  .catch((error) => {
    console.error("Error fetching destinations:", error);
    setLoading(false);
  });

  if (loading) {
    return <div>Loading...</div>; // Render loading state while data is being fetched
  }

  return (
    <div>
      <h1>Welcome to the Travel Agency</h1>
      <p>Explore our amazing travel packages and book your next adventure!</p>

      <div className="sheiss">
        <Slideshow />
      </div>

      <div className="placehold">
        <SearchBar />
      </div>

      <div className="destinations-list">
        {destinations.map((destination) => (
          <DestinationCard key={destination.id} destination={destination} />
        ))}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;

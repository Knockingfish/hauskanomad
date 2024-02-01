// W M
import React from "react";
import DestinationCard from "../components/DestinationCard";
import SearchBar from "../components/SearchBar";
import Slideshow from "../components/Slideshow";
import Footer from "../components/Footer";

const Home = () => {
  

  // Images used for slideshow.
  // No current plans for backend integration.
  const slideshowImages = [
    {
      id: 1,
      url: "/slideshow/photo1.png",
      caption: "A modern vacation.",
    },
    {
      id: 2,
      url: "/slideshow/photo2.png",
      caption: "Take in the fresh air and the relaxing atmosphere.",
    },
    {
      id: 3,
      url: "/slideshow/photo3.png",
      caption: "The fun doesnt end even when the sun goes down.",
    },
    {
      id: 4,
      url: "/slideshow/photo4.png",
      caption: "A place for you to relax alone or with company.",
    },
    {
      id: 5,
      url: "/slideshow/photo5.png",
      caption: "Cut off contact from the world and focus on inner peace.",
    },
    // Add more placeholder images as needed
  ];

  return (
    <div>
      <h1>Welcome to the Travel Agency</h1>
      <p>Explore our amazing travel packages and book your next adventure!</p>

      <div className="sheiss">
        <Slideshow images={slideshowImages} />
      </div>

      <div className="placehold">
        {" "}
        {/* Placeholder className for CSS styling
      Will be updated at future date when styling is actually done*/}
        <SearchBar />
      </div>

      {/* Render destination cards using information from ""backend"" */}
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

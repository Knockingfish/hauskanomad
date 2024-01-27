import React from 'react';
import DestinationCard from '../components/DestinationCard';

const Home = () => {
  const destinations = [
    {
      id: 1,
      name: 'Beautiful Beach',
      image: 'path/to/1-image.jpg',
      info: 'Explore the stunning beaches with crystal-clear water.'
    },
    {
      id: 2,
      name: 'Mountain Retreat',
      image: 'path/to/2-image.jpg',
      info: 'Experience the tranquility of the mountains and scenic landscapes.'
    },
    {
      id: 3,
      name: 'Bangladeshi Pork Sausage Factory',
      image: 'path/to/3-image.jpg',
      info: 'Fight for your life to survive in this blasphemous stain on Bangladesh.'
    },
    {
      id: 4,
      name: 'Philippine Latin Americanization Institute',
      image: 'path/to/4-image.jpg',
      info: 'Advanced scientific research on manipulation of space-time is conducted here, to de-asianize the Philippines.'
    },
    {
      id: 5,
      name: 'Some guys basement',
      image: 'path/to/5-image.jpg',
      info: 'Perfect for budget travellers with no sense of safety.'
    },
    // Add more destinations as needed
  ];

  return (
    <div>
      <h1>Welcome to the Travel Agency</h1>
      <p>Explore our amazing travel packages and book your next adventure!</p>

      {/* Directly map through destinations and render DestinationCard components */}
      <div className="destinations-list">
        {destinations.map((destination) => (
          <DestinationCard key={destination.id} destination={destination} />
        ))}
      </div>
    </div>
  );
};

export default Home;

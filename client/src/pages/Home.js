// W
import React from 'react';
import DestinationCard from '../components/DestinationCard';
import SearchBar from '../components/SearchBar';
import Slideshow from '../components/Slideshow';
import Footer from '../components/Footer';

const Home = () => {
  // Placeholder object to demonstrate mapping onto component
  // Will be replaced with information sourced from backend
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


  // Placeholder images sourced from Google Images
  // Will be replaced with locally stored Creative Commons or otherwise royalty free images
  // Used for slideshow
  const placeholderImages = [
    { id: 1, url: 'https://thoughtcatalog.com/wp-content/uploads/2014/07/shutterstock_117016681.jpg', caption: 'Placeholder Caption 1' },
    { id: 2, url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftravelfoodpeople.com%2Fwp-content%2Fuploads%2F2021%2F04%2FTFP-Travel-Guides-1.jpg&f=1&nofb=1&ipt=c40f30aecbe8e4dd5b5d083d47d3fc100c1941d9cf04cf336969046a1f882469&ipo=images', caption: 'Placeholder Caption 2' },
    { id: 3, url: 'https://www.ampagency.com/hs-fs/hubfs/flash/hero-images/desktop--2x/travel_hero-2x.jpg?width=11520&height=6480&name=travel_hero-2x.jpg', caption: 'Placeholder Caption 3' }
    // Add more placeholder images as needed
  ];

  return (
    <div>
      <h1>Welcome to the Travel Agency</h1>
      <p>Explore our amazing travel packages and book your next adventure!</p>

      <div className="sheiss">
        <Slideshow images={placeholderImages} />
      </div>

      <div className="placehold"> {/* Placeholder className for CSS styling
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
       <Footer/>
      </div>
      
    </div>
  );
};

export default Home;

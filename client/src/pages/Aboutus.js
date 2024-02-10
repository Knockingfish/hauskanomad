import React from 'react'; // Don't forget to import React
import ITworkers from '../assets/ITworkers.jpg'; // Importing the logo image

function Aboutus() {
  return (
    <div className="about-page">
      <header>
        <h1>Welcome to HauskaNomad</h1>
      </header>
      <div className="container">
        <div className="marketing-blurb">
          <h2>About HauskaNomad</h2>
          <p>
            HauskaNomad is your ultimate travel companion, offering a diverse range of curated experiences for adventurers and explorers alike. 
            We believe in the power of travel to inspire, connect, and transform lives. Whether you're seeking serene retreats in nature, 
            immersive cultural experiences, or adrenaline-pumping adventures, HauskaNomad has something for everyone.
          </p>
          <p>
            Our platform was created with a vision to make travel accessible, enjoyable, and meaningful for all. 
            We understand that each journey is unique, and we strive to provide personalized recommendations and exceptional service to every traveler.
          </p>
        </div>

        <div className="staff-image">
          <h2>Meet Our Team</h2>
          <img src={ITworkers} alt="Staff Image" width="300" />
          {/* Replace "path/to/your/staff/image.jpg" with the actual path to your staff image */}
        </div>
      </div>
    </div>
  );
}

export default Aboutus;

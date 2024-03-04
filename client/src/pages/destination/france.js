import React from 'react';
import CustomHeader from '../global/CustomHeader'
import ImageComponent from './components/ImageComponent';
import DescriptionComponent from './components/DescriptionComponent';
import BookingInfo from './components/BookingInfo';
import BookingForm from './components/BookingForm';
import CustomFooter from '../global/CustomFooter';
import styles from './DestinationPage.module.css'

const DestinationPage = () => {
  const imageSrc = '/destination/france.webp'
  const destination = 'france'
  const content = "Bienvenue en France, where art, culture, and cuisine intertwine to create an exquisite tapestry of experiences waiting to be savored. From the romantic streets of Paris to the sun-kissed vineyards of Provence, France invites you on a journey of discovery and delight. Explore the iconic landmarks of Paris, from the majestic Eiffel Tower to the historic Notre-Dame Cathedral, where centuries of history and artistry await your admiration. Wander through the charming neighborhoods of Montmartre and Le Marais, where cobblestone streets and quaint cafes beckon you to linger and explore. Indulge your senses with the culinary delights of French cuisine, from delicate pastries and creamy cheeses to decadent wines and sumptuous Michelin-starred meals. Whether you're dining at a cozy bistro or a world-renowned restaurant, each meal is a celebration of France's rich gastronomic heritage. Discover the picturesque landscapes of the French countryside, where rolling hills, lavender fields, and sunflower meadows stretch as far as the eye can see. Visit the enchanting chateaux of the Loire Valley, the rugged cliffs of the Normandy coast, or the charming villages of Provence, each offering its own unique charm and beauty. Experience the joie de vivre of French culture through art, music, and fashion, with world-class museums, opera houses, and boutiques showcasing the best of French creativity and style. Whether you're exploring the vineyards of Bordeaux, cruising along the Seine River, or simply sipping espresso at a sidewalk cafe, France promises an unforgettable journey filled with romance, elegance, and the timeless allure of la belle vie. Venez découvrir la magie de la France et créez des souvenirs qui dureront toute une vie."

  return (
    <div>
      <div className={styles.end_container}>
        <CustomHeader />
      </div>
      <div className={styles.top}>
        <ImageComponent image={imageSrc}/>
        <DescriptionComponent content={content}/>
      </div>
      <div className={styles.middle}>
        <BookingForm/>
        <BookingInfo/>
      </div>

      <div className={styles.end_container}>
        <CustomFooter />
      </div>
    </div>
  );
};

export default DestinationPage;

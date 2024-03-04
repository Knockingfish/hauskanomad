import React from 'react';
import CustomHeader from '../global/CustomHeader'
import ImageComponent from './components/ImageComponent';
import DescriptionComponent from './components/DescriptionComponent';
import BookingInfo from './components/BookingInfo';
import BookingForm from './components/BookingForm';
import CustomFooter from '../global/CustomFooter';
import styles from './DestinationPage.module.css'

const DestinationPage = () => {
  const imageSrc = '/destination/germany.webp'
  const destination = 'germany'
  const content = "Welcome to Germany, a land of rich history, stunning architecture, and vibrant culture that invites you to explore its charming cities, picturesque countryside, and dynamic cultural scene. Discover the iconic landmarks of Berlin, where historic sites like the Brandenburg Gate and the Berlin Wall stand as poignant reminders of the city's turbulent past. Immerse yourself in the vibrant arts scene of the capital, with world-class museums, galleries, and theaters showcasing everything from classical masterpieces to cutting-edge contemporary art. Explore the fairytale landscapes of Bavaria, with its majestic castles, rolling hills, and crystal-clear lakes. Visit the fairy-tale castle of Neuschwanstein, the inspiration for Disney's Sleeping Beauty castle, or hike through the scenic Bavarian Alps for breathtaking views of the surrounding countryside. Indulge your taste buds with the hearty flavors of German cuisine, from savory bratwurst and schnitzel to indulgent Black Forest cake and creamy beer cheese soup. Wash it all down with a pint of locally brewed beer, as Germany is famous for its beer culture and traditional beer gardens. Experience the warmth and hospitality of German towns and villages, where half-timbered houses, cobblestone streets, and medieval fortifications transport you back in time. Whether you're exploring the historic streets of Heidelberg, cruising along the romantic Rhine River, or attending a traditional Oktoberfest celebration, Germany promises an unforgettable journey filled with culture, history, and the spirit of Gemütlichkeit. Come, experience the magic of Germany and create memories to last a lifetime."

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

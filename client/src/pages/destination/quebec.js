import React from 'react';
import CustomHeader from '../global/CustomHeader'
import ImageComponent from './components/ImageComponent';
import DescriptionComponent from './components/DescriptionComponent';
import BookingInfo from './components/BookingInfo';
import BookingForm from './components/BookingForm';
import CustomFooter from '../global/CustomFooter';
import styles from './DestinationPage.module.css'

const DestinationPage = () => {
  const imageSrc = '/destination/quebec.webp'
  const destination = 'quebec'
  const content = "Bienvenue à Québec, un endroit où l'histoire, la culture et la beauté se mêlent pour créer une expérience inoubliable. Des rues pavées du Vieux-Québec aux majestueuses chutes de Montmorency, Québec offre une diversité d'expériences qui sauront vous charmer. Explorez les ruelles étroites du Vieux-Québec, où les bâtiments en pierre témoignent de l'héritage européen de la ville. Découvrez les délices de la cuisine québécoise dans les bistrots et les restaurants, où les plats traditionnels comme la poutine et la tourtière sont servis avec fierté. Plongez dans l'histoire de la ville en visitant des sites emblématiques comme le Château Frontenac et la Citadelle, où l'histoire militaire du Canada est mise en valeur. Profitez de la vue panoramique sur le fleuve Saint-Laurent depuis les remparts de la ville, ou faites une promenade le long de la pittoresque Promenade des Gouverneurs. Découvrez la richesse de la culture québécoise à travers ses festivals, ses musées et ses galeries d'art. Assistez à un spectacle de musique traditionnelle au Festival d'été de Québec, ou explorez les œuvres d'artistes locaux dans les nombreuses galeries du quartier Saint-Roch. Que vous vous aventuriez dans les parcs nationaux de la région, que vous fassiez du ski dans les Laurentides ou que vous naviguiez sur le majestueux fleuve Saint-Laurent, Québec offre une multitude d'activités pour tous les goûts et toutes les saisons. Venez découvrir la magie de Québec et créez des souvenirs inoubliables."

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
        <BookingForm destination="Quebec"/>
        <BookingInfo/>
      </div>

      <div className={styles.end_container}>
        <CustomFooter />
      </div>
    </div>
  );
};

export default DestinationPage;

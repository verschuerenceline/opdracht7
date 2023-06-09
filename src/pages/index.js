import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Link from 'next/link';
import ButtonInfo from '../components/ButtonInfo';
import Footer from '../components/Footer';
import styles from '@/styles/Home.module.css';


export default function Home() {
  const handleClick = () => {
  }; 
  

  return (
    <>

      <div>
        <Image src="/assets/womenandbike.png" alt="Mijn afbeelding" width={420} height={600} />
      </div>
      <h1 className={styles.title}>Welkom bij TripTrek</h1>
      <p className={styles.text}> TripTrek is dé app voor toeristen die Antwerpen willen verkennen. Of je nu op zoek bent naar de beste cafés, de mooiste uitzichten of de verborgen pareltjes van de stad, TripTrek wijst je de weg. Met deze app vind je makkelijk de beste routes.</p>
    
      <div className="button_over">
        <Link href="/about">
          <ButtonInfo label="Lees meer over TripTrek" onClick={handleClick} className={styles.buttonleesmeer}/>
        </Link>
      </div>




      <h1 className={styles.title}>Populaire stations</h1>
        <div className={styles.iconContainer}>
        <FontAwesomeIcon icon={faLocationDot} className={styles.icon} />
          <p>Centraal Station</p>
        </div>
        <div className={styles.iconContainer}>
          <FontAwesomeIcon icon={faLocationDot} className={styles.icon} />
          <p>Groenplaats</p>
        </div>
        <div className={styles.iconContainer}>
          <FontAwesomeIcon icon={faLocationDot} className={styles.icon} />
          <p>De Singel</p>
        </div>
        <div className={styles.iconContainer}>
          <FontAwesomeIcon icon={faLocationDot} className={styles.icon} />
          <p>Meir</p>
        </div>

        <div className="button_stations">
          <Link href="/stations">
            <ButtonInfo label="Bekijk alle stations" onClick={handleClick} className={styles.buttonleesmeer}/>
          </Link>
        </div>

      <h1 className={styles.title}>Populaire route</h1>
        <div className={styles.iconContainer}>
          <FontAwesomeIcon icon={faLocationDot} className={styles.icon} />
          <p>VERTREK: Centraal station</p>
        </div>
        <div className={styles.iconContainer}>
        <FontAwesomeIcon icon={faEllipsisVertical} className={styles.icon_midden} />
          <p>VOLGENDE: Theaterbuurt</p>
        </div>
        <div className={styles.iconContainer}>
          <FontAwesomeIcon icon={faEllipsisVertical} className={styles.icon_midden} />
          <p>VOLGENDE: Vlaamse kaaien</p>
        </div>
        <div className={styles.iconContainer}>
          <FontAwesomeIcon icon={faEllipsisVertical} className={styles.icon_midden} />
          <p>VOLGENDE: Het eilandje</p>
        </div>
        <div className={styles.iconContainer}>
          <FontAwesomeIcon icon={faLocationDot} className={styles.icon} />
          <p>EINDE: Meir</p>
        </div>

      <div>
        <Image src="/assets/route.png" alt="Mijn afbeelding" width={430} height={600} />
      </div>
     
     <div>
      <Footer></Footer>
     </div>

    </>

  );
}

'use client'

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import styles from './CSS/imageslider.module.css'
import orangeLeftChevron from 'Illustrations/orangeChevronLeft.png'
import orangeRightChevron from 'Illustrations/orangeChevronRight.png'

  
export default function DetailsSlider({location, fsq_ID}) { 

        // Grabbing the pathname

        const params = useSearchParams();
        const fsqID = params.get('id'); 
        console.log(fsqID);

    const [photos, setPhotos] = useState([]);


    useEffect(() => {
      const fetchData = async () => {
        const URL = `http://localhost:3000/api/photosfetch?id=` + fsqID;
        const res = await fetch(URL);
        const data = await res.json();
        // console.log(data, 'Here it is Joshua');
        setPhotos(data);
        console.log(data, 'Here it is Joshua');

        // console.log(photos)
        return 
      }
      fetchData();
    },[]);

    const slidesLength = photos.length;

    const [currentSlide, setSlide] = useState(0); 
  
    function incrementSlide() {
      if (currentSlide === (slidesLength - 1)) {
        setSlide(0);
      } else {
        setSlide(currentSlide + 1);
      }
    }

    function decrementSlide() {

      if (currentSlide === 0) {
        setSlide(slidesLength - 1);
      } else {
        setSlide(currentSlide - 1);
      }
    }

 
      return (
        <div className={`${styles.wrapper} ${styles.wrapperDetailsPage}`}>
            <div style={{backgroundImage: `url(${photos[currentSlide]?.prefix}original${photos[currentSlide]?.suffix})`, height: "70vh", width: "100%", backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover'}}>
              {/* <Image alt="Trails in the Santa Monica Mountains" src={`${slides[currentSlide].prefix}400x100${slides[currentSlide].suffix}`} width={400} height={100}/> */}
              {/* <Image alt="Trails in the Santa Monica Mountains" src={`${slides[currentSlide].prefix}original${slides[currentSlide].suffix}`} width={slides[currentSlide].width} height={slides[currentSlide].height}/> */}
          </div>
        <div className={styles.index}>
          <button onClick={decrementSlide} className={styles.buttons}>
            <Image src={orangeLeftChevron} alt="Image of left Arrow"/>
          </button>
            {photos?.map((slide, slideIndex) => ( 
            <div key={Math.random()} onClick={() => {setSlide(slideIndex)}}>
              <div className={currentSlide === slideIndex ? styles.currentIndex : styles.indexIndicator}> </div>
            </div>
            ))}
          <button className={styles.buttons}onClick={incrementSlide}>
            <Image src={orangeRightChevron} alt="Image of right Arrow"/>
          </button>
          </div>
      </div>
      )
}
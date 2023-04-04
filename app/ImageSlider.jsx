'use client'

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import styles from './CSS/imageslider.module.css'
import leftChevron from 'Illustrations/chevron_left.png'
import rightChevron from 'Illustrations/chevron_right.png'
import orangeLeftChevron from 'Illustrations/orangeChevronLeft.png'
import orangeRightChevron from 'Illustrations/orangeChevronRight.png'


  
export default function ImageSlider({location, fsq_ID}) {

    const [photos, setPhotos] = useState([]);


    useEffect(() => {
      const fetchData = async () => {
        const URL = `https://trail-finder-zqqz.vercel.app/api/photosfetch?id=` + fsq_ID;
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

    // Grabbing the pathname

    const pathname = usePathname();
    const fsqID = pathname.replace('/details/','');  
  
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

    if (location === 'details') {
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
    } else {
      return (
        <div className={styles.wrapper}>
          <div className={styles.buttonContainer}>
            <button onClick={decrementSlide} className={styles.buttons}>
              <Image src={leftChevron} alt="Image of left Arrow"/>
            </button>
            <button className={styles.buttons}onClick={incrementSlide}>
              <Image src={rightChevron} alt="Image of right Arrow"/>
            </button>
          </div>
            <div style={{backgroundImage: `url(${photos[currentSlide]?.prefix}original${photos[currentSlide]?.suffix})`, height: "100%", width: "100%", backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', borderRadius: '4px'}}>
               {/* <Image alt="Trails in the Santa Monica Mountains" src={`${slides[currentSlide].prefix}400x100${slides[currentSlide].suffix}`} width={400} height={100}/> */}
               {/* <Image alt="Trails in the Santa Monica Mountains" src={`${slides[currentSlide].prefix}original${slides[currentSlide].suffix}`} width={slides[currentSlide].width} height={slides[currentSlide].height}/> */}
            </div>
            <div className={styles.indexResults}>
              {photos?.map((slide, slideIndex) => ( 
              <div key={slideIndex} onClick={() => {setSlide(slideIndex)}}>⬤</div>
              ))}
            </div>
        </div>
      )
    }
}

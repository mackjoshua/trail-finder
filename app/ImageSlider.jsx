'use client'

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import styles from './imageslider.module.css'

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `${process.env.FS_KEY_2}`
    }
  };

  
export default function ImageSlider({slides}) {

    const slidesLength = slides.length;

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

  return (
    <div style={{height: '100%', position:"relative"}}>
      <div className={styles.buttonContainer}>
        <button onClick={decrementSlide}>‹</button>
        <button className={styles.orangebutton}onClick={incrementSlide}>›</button>
      </div>
        <div style={{backgroundImage: `url(${slides[currentSlide].prefix}original${slides[currentSlide].suffix})`, height: "100%", width: "100%", backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover'}}>
           {/* <Image alt="Trails in the Santa Monica Mountains" src={`${slides[currentSlide].prefix}400x100${slides[currentSlide].suffix}`} width={400} height={100}/> */}
           {/* <Image alt="Trails in the Santa Monica Mountains" src={`${slides[currentSlide].prefix}original${slides[currentSlide].suffix}`} width={slides[currentSlide].width} height={slides[currentSlide].height}/> */}
        </div>
        <div className={styles.index}>
          {slides.map((slide, slideIndex) => ( 
          <div key={slideIndex} onClick={() => {setSlide(slideIndex)}}>⬤</div>
          ))}
        </div>
    </div>
  )
}

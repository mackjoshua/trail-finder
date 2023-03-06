'use client'

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `${process.env.FS_KEY_2}`
    }
  };

  
// Need to make it so that currentSlide stays within the index range and doesn't get too far left or too far right
export default function ImageSlider({slides}) {

    const slidesLength = slides.length;

    const [currentSlide, setSlide] = useState(0);

    const pathname = usePathname();
    const fsqID = pathname.replace('/details/','');
    console.log(slidesLength);
  
  
    console.log(fsqID);

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
    <>
        <div>ImageSlider</div>
        <button onClick={incrementSlide}>Next</button>
        <button onClick={decrementSlide}>Previous</button>

        <div>
           <Image alt="Trails in the Santa Monica Mountains" src={`${slides[currentSlide].prefix}100x100${slides[currentSlide].suffix}`} width={100} height={100}/>
           {/* <Image alt="Trails in the Santa Monica Mountains" src={`${slides[currentSlide].prefix}original${slides[currentSlide].suffix}`} width={slides[currentSlide].width} height={slides[currentSlide].height}/> */}
        </div>
        <div>
          {slides.map((slide, slideIndex) => ( 
          <div key={slideIndex} onClick={() => {setSlide(slideIndex)}}>⬤</div>
          ))}
        </div>
    </>
  )
}

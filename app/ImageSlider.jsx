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
  
  

export default function ImageSlider({slides}) {

    const [currentSlide, setSlide] = useState(0);

    const pathname = usePathname();
    const fsqID = pathname.replace('/details/','');
    console.log(slides);
  
  
    console.log(fsqID);

  return (
    <>
        <div>ImageSlider</div>
        <button onClick={() => {setSlide(currentSlide + 1)}}>Next</button>
        <button onClick={() => {setSlide(currentSlide - 1)}}>Previous</button>

        <div>
           <Image alt="Trails in the Santa Monica Mountains" src={`${slides[currentSlide].prefix}original${slides[currentSlide].suffix}`} width={slides[currentSlide].width} height={slides[currentSlide].height}/>
        </div>
    </>
  )
}

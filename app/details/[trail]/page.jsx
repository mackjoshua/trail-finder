
import React from 'react'
import ImageSlider from '@/app/ImageSlider';

const options = {
  method: 'GET',
  headers: {
      accept: 'application/json',
      Authorization: `${process.env.FS_KEY_2}`
  }
};


const getPhotos = async () => {
  const URL = 'http://localhost:3000/api/placesphotos';
  const res = await fetch(URL, options);
  const slides = await res.json();
  // console.log(typeof await res.json());
  // console.log(slides);
  return await slides;
}

const slides = await getPhotos();

export default function Page() {

  console.log(slides);

  return (
    <>
        <div>page</div>
        {/* <div>{}</div> */}
        <ImageSlider slides={slides} />
    </>
  )
}


'use client'

import React, { useContext, useEffect, useState } from 'react'
import BackButton from './BackButton';
import { TrailContext } from './Contexts/TrailContext'
import ShareButton from './ShareButton';
import styles from './CSS/textStyles.module.css'
import styles2 from './CSS/weatherbar.module.css'
import Image from 'next/image';
import orangeShareButton from '../Illustrations/orangeShareButton.png';


export default function WeatherBar() {

  const [weatherData, setWeatherData] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  const { dataBrick } = useContext(TrailContext);

  let latitude = dataBrick.geocodes?.main?.latitude;
  let longitude = dataBrick.geocodes?.main?.longitude;
  console.log(latitude);
  console.log(longitude);
  
  useEffect(() => {

      const fetchTheData = async () => {

        // URL wasn't being parsed correctly when using template string so I had to concatenate the string this way
        const URL = `https://trail-finder-zqqz.vercel.app//api/weather?lat=` + latitude + `&lon=` + longitude;
        const res = await fetch(URL);
        const data = await res.json();
        setWeatherData(data);
        setIsLoaded(true);
      }
      fetchTheData();
  },[latitude,longitude]);

  const dailyWeather = weatherData['daily'];

  const sevenDays = dailyWeather?.slice(0,7);

  const weatherArray = sevenDays?.map(day => {

    let date = new Date(day.dt * 1000);
    let text = date.toDateString();
    let dayOfWeek = text.slice(0,2);

    return (
      <div key={day.dt} className={styles2.items}>
        <p>{dayOfWeek}</p>
        <p key={day.dt}>{Math.floor(day['temp']['day'])}°</p>
      </div>
     
    )
  });

  console.log(dailyWeather, ' here it is');
  console.log(sevenDays, 'here are the seven days');

  const daysArray = sevenDays

  return (
    <aside className={styles2.wrapper}>
      <div className={styles2.buttonContainer}>
        <BackButton />
      </div>
      <div className={`${styles.Biennale} ${styles2.containerBar}`}>{isLoaded ? weatherArray : <p>Not Loaded yet</p>}</div>
      <div className={styles2.buttonContainer}>
        <ShareButton color="orange">
          <Image alt='An icon of the share image' src={orangeShareButton}/>
        </ShareButton>
      </div>
    </aside>

  )
}

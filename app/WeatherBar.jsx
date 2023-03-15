'use client'

import React, { useContext, useEffect, useState } from 'react'
import BackButton from './BackButton';
import { TrailContext } from './Contexts/TrailContext'
import ShareButton from './ShareButton';
import styles from './textStyles.module.css'
// import localFont from '@next/font/dist/local'

// const BiennaleRegular = localFont({ src: 'public/fonts/Biennale/DesktopFonts/TTF/Biennale-Regular.ttf'});

export default function WeatherBar() {

  // const [weatherData, setWeatherData] = useState({});

  // const { dataBrick } = useContext(TrailContext);

  // let latitude = dataBrick.geocodes?.main?.latitude;
  // let longitude = dataBrick.geocodes?.main?.longitude;
  // console.log(latitude);
  // console.log(longitude);
  
  // useEffect(() => {

  //     const fetchTheData = async () => {

  //       // URL wasn't being parsed correctly when using template string so I had to concatenate the string this way
  //       const URL = `http://localhost:3000/api/weather?lat=` + latitude + `&lon=` + longitude;
  //       const res = await fetch(URL);
  //       const data = await res.json();
  //       setWeatherData(data);
  //     }
  //     fetchTheData();
  // },[latitude,longitude]);

  // const dailyWeather = weatherData['daily'];

  // const sevenDays = dailyWeather?.slice(0,7);

  // const weatherArray = sevenDays?.map(day => {
  //   return (
  //     <p key={day.dt}>{Math.floor(day['temp']['day'])}</p>
  //   )
  // });

  // console.log(dailyWeather, ' here it is');

  return (
    <aside>
      <BackButton />
      <h3>Weather this week</h3>
      {/* <div>{dailyWeather.map((day) => {
        <p>{day?.feels_like?.day}</p>
      })}</div> */}
      {/* <div>{weatherArray}</div> */}
      <div className={`${styles.Biennale} ${styles.semiBold}`}>
        <p>77</p>
        <p>87</p>
        <p>97</p>
        <p>77</p>
        <p>47</p>
        <p>37</p>
        <p>27</p>


      </div>
      <ShareButton />
    </aside>

  )
}

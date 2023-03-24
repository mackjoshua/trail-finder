'use client'

import React, {useEffect, useState} from 'react'
import DetailsContainer from './DetailsContainer'
import DetailsSlider from './DetailsSlider'
import WeatherBar from './WeatherBar'
import styles from './details/[trail]/details.module.css'
import { TrailContext } from './Contexts/TrailContext'
import ShareButton from './ShareButton'


export default function TrailsPageWrapper({slides, fsqID}) {

    const [dataBrick, setDataBrick] = useState({});

    console.log(dataBrick, 'Here it is man');

    useEffect(() => {
      window.scrollTo(0,0)
    }, []);


  return (
    <>
    <TrailContext.Provider value={{dataBrick, setDataBrick}}>
        <div className={styles.container}>
          <div className={styles.weatherBar}>
            <WeatherBar />
          </div>
          <DetailsSlider slides={slides} location='details' fsq_ID={dataBrick.fsq_id}/>
        </div>
        <DetailsContainer />
    </TrailContext.Provider>
    </>
  )
}

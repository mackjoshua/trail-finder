'use client'

import React, {useState} from 'react'
import DetailsContainer from './DetailsContainer'
import ImageSlider from './ImageSlider'
import WeatherBar from './WeatherBar'
import styles from './details/[trail]/details.module.css'
import { TrailContext } from './Contexts/TrailContext'
import ShareButton from './ShareButton'


export default function TrailsPageWrapper({slides}) {

    const [dataBrick, setDataBrick] = useState({});


  return (
    <>
    <TrailContext.Provider value={{dataBrick, setDataBrick}}>
        <div className={styles.container}>
          <div className={styles.weatherBar}>
            <WeatherBar />
          </div>
          <ImageSlider slides={slides} location='details'/>
        </div>
        <DetailsContainer />
    </TrailContext.Provider>
    </>
  )
}

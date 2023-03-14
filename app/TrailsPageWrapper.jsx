'use client'

import React, {useState} from 'react'
import DetailsContainer from './DetailsContainer'
import ImageSlider from './ImageSlider'
import WeatherBar from './WeatherBar'
import styles from './details/[trail]/details.module.css'
import { TrailContext } from './Contexts/TrailContext'


export default function TrailsPageWrapper({slides}) {

    const [dataBrick, setDataBrick] = useState({});


  return (
    <>
    <TrailContext.Provider value={{dataBrick, setDataBrick}}>
        <WeatherBar />
        <div className={styles.container}>
          <ImageSlider slides={slides}/>
        </div>
        <DetailsContainer />
    </TrailContext.Provider>
    </>
  )
}

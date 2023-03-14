'use client'

import React, { useContext } from 'react'
import { TrailContext } from './Contexts/TrailContext'

export default function WeatherBar() {

  const { dataBrick } = useContext(TrailContext);

  return (
    <div>WeatherBar {dataBrick.name}</div>
  )
}

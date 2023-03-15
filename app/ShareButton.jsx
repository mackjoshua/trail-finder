import React from 'react'
import { RWebShare } from 'react-web-share';

export default function ShareButton() {
  return (
    <>
    <RWebShare
        data={{url:'https://natgeo.com/2zHaNup'}}
        onClick={() => console.log('Successful share')}
    >
        <button> Share </button>
    </RWebShare>
    </>
  )
}

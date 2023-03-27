'use client'

import React from 'react';
import { RWebShare } from 'react-web-share';
import Image from 'next/image';
import { usePathname, useSearchParams } from 'next/navigation';
import orangeSharebutton from '../Illustrations/orangeShareButton.png';
import shareButton from '../Illustrations/ios_share.png';

export default function ShareButton({color}) {

  const pathname = usePathname();
  const searchParams = useSearchParams();

  if ( color === 'orange') {
    return (
      <RWebShare
        data={{url:'https://natgeo.com/2zHaNup'}}
        onClick={() => console.log('Successful share')}
      >
        <Image src={orangeSharebutton} alt=""/>
      </RWebShare>
    )
  } else {
    return (
      <RWebShare
        data={{url:'https://natgeo.com/2zHaNup'}}
        onClick={() => console.log('Successful share')}
      >
        <Image src={shareButton} alt=""/>
      </RWebShare>
    )
  }
}

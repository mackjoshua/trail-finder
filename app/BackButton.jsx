'use client'

import { useRouter } from 'next/navigation'

import React from 'react'
import Image from 'next/image';
import backButton from '../Illustrations/arrow_back.png'
import orangeBackButton from '../Illustrations/orangeBackArrow.png'
import styles from './CSS/backButton.module.css'




export default function BackButton({buttonInstance}) {
    const router = useRouter();

  if (buttonInstance === 'searchPage') {
    return (
      <div className={styles.wrapper}>
        <button onClick={() => router.push('/')}>
          <Image src={backButton} alt="Back Button" className={styles.search}/>
        </button>
      </div>
    )
  }

  return (
    <div className={styles.wrapper}>
      <button onClick={() => router.back()}>
        <Image src={orangeBackButton} alt="Back Button" className={styles.details}/>
      </button>
    </div>
  )
}

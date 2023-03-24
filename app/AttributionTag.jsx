import React from 'react'
import Image from 'next/image'
import attrTag from 'Illustrations/PbFSQ_White.png'
import styles from './CSS/AttributionTag.module.css'

export default function AttributionTag() {
  return (
    <div className={styles.attrTagWrapper}>
        <Image src={attrTag} alt='' className={styles.attrTag} />
   </div>
  )
}

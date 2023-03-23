'use client'

import React from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useContext } from 'react';
import { TrailContext } from './Contexts/TrailContext';
import styles from './CSS/detailsContainer.module.css'
import textStyles from './CSS/textStyles.module.css'
import Image from 'next/image';
import flower from '../Illustrations/Flower.png'
import trees from '../Illustrations/Trees.png'

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `${process.env.FS_KEY_2}`,
    }
  };



export default function DetailsContainer() {

  const { setDataBrick } = useContext(TrailContext);
  const { dataBrick } = useContext(TrailContext);

  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get('id');  

  useEffect(() => {
    const fetchData = async () => {

      // For some reason, using a template string here wouldn't work. id was being read as ${search} instead of the dynamic value, so I had to concatenate otherwise
      const URL = `http://localhost:3000/api/placedetails?id=` + search;
      const res = await fetch(URL);
      const data = await res.json();
      setDataBrick(data);
    };
    fetchData();
  },[setDataBrick,search]);

  
  return (
    <div className={styles.outerWrapper}>
        <div className={styles.wrapper}>
          <div>
            {/* <h1>{dataBrick.name}</h1> */}
            <h1 className={`${textStyles.HVAnalogue} ${textStyles.bold} ${styles.text}`}>{dataBrick.name}</h1>
            <p className={`${textStyles.Biennale} ${textStyles.regular}`}>Volutpat tellus scelerisuque ornare eleifend aliquam. Parturient in vitae ut volutpat massa scelerisque. Turpis aliquam fringilla lacus interdum ut semper. Senectus id elit eget id ut in diam neque ipsum. Id neque orci est aenean eet. Faucibus ultrices porttitor vulputate in phasellus vulputate porttitor tincidunt et. Turpis consequat aliquet venenatis pellentesque rhoncus vel convallis. Vulputate mauris aadipiscing aliquam rhoncus.</p>
          </div>
          <aside className={styles.quickFactsCard}>
            <Image src={flower} className={styles.topFlower} alt=''/>
            <h2 className={`${styles.quickFactsTitle} ${textStyles.Biennale} ${textStyles.semiBold}`}>Quick Facts</h2>
            <div className={styles.fact}>
              <h3 className={`${textStyles.Biennale} ${textStyles.regular}`}>Fact 1</h3>
              <p className={`${textStyles.Biennale} ${textStyles.book}`}>Congue neque est curabitur aliquet aliquam at nisi. Feugiat donec mi libero nisi in nisl in tincidunt est. Aliquet fringilla sapien a rhoncus.</p>
            </div>
            <div className={styles.fact}>
              <h3 className={`${textStyles.Biennale} ${textStyles.regular}`}>Fact 2</h3>
              <p className={`${textStyles.Biennale} ${textStyles.book}`}>Congue neque est curabitur aliquet aliquam at nisi. Feugiat donec mi libero nisi in nisl in tincidunt est. Aliquet fringilla sapien a rhoncus.</p>
            </div>
            <div className={styles.fact}>
              <h3 className={`${textStyles.Biennale} ${textStyles.regular}`}>Fact 3</h3>
              <p className={`${textStyles.Biennale} ${textStyles.book}`}>Congue neque est curabitur aliquet aliquam at nisi. Feugiat donec mi libero nisi in nisl in tincidunt est. Aliquet fringilla sapien a rhoncus.</p>
            </div>
            <Image src={flower} className={styles.bottomFlower} alt=''/>
          </aside>
      </div>
      <Image src={trees} alt="" className={styles.trees}/>
   </div>
     
  )
}

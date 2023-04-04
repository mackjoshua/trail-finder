
import BackButton from "../BackButton";
import Result from "../ResultCard"
import SearchForm from "../SearchForm"
import styles from './search.module.css'
import Image from "next/image";
import mountains from '/Illustrations/Mountains.png'
import lineTrees from '/Illustrations/Trees.png'
import outlineTrees from 'Illustrations/Trees-1.png'
import AttributionTag from "../AttributionTag";


const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `${process.env.FS_KEY_2}`
    }
  };

// const getPhotos = async () => {
//     const URL = 'https://trail-finder-zqqz.vercel.app//api/placesphotos';
//     // const URL = `https://api.foursquare.com/v3/places/${fsq_id}/photos`
//     const res = await fetch(URL, options);
//     const slides = await res.json();
//     // console.log(typeof await res.json());
//     // console.log(slides);
//     return await slides;
//   }
  
//   const slides = await getPhotos();

export default function Page({searchParams}) {

    console.log(searchParams?.near, 'Occuring on the Search Page');
    console.log(typeof searchParams?.near);
    let term = searchParams?.near;
    let splitTerm = term?.split(/[\s,]+/);

    return (
      <div className={styles.page}>
        <Image src={mountains} alt="Illustration of some mountains" className={styles.mountains}/>
        
        <div className={styles.container}>
          <div className={styles.controls}>
            <BackButton buttonInstance="searchPage"/>
            {/* Deleted slug prop from searchForm @ 9:50AM 3/23/23 */}
            <SearchForm  />
          </div>
          <Result searchTerm={splitTerm} />
        </div>
        <Image src={lineTrees} alt="Illustration of some trees" className={styles.lineTrees}/>
        <Image src={outlineTrees} alt="Another illustration of some trees" className={styles.outlineTrees}/>
        <AttributionTag />
      </div>
    )
}
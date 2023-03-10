
import  Image  from "next/image";
import Link from "next/link";
import RCImage from "./ResultCardImage";
import ImageSlider from "./ImageSlider";
import styles from './resultcard.module.css'

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `${process.env.FS_KEY_2}`
    }
};


async function getData(city,state) {
    const res = await fetch('http://localhost:3000/api/places');
    // const res = await fetch(`https://api.foursquare.com/v3/places/search?categories=16019&near=${city}%2C%20${state}`, options);
    let results = await res.json();
    // console.log(results);
    return results;
}

// async function getAddress() {
//     const res = await fetch('http://localhost:3000/api/userinput');
//     // console.log(res.json());
// }

export default async function Result ({searchTerm, slides}) {
    console.log(searchTerm);
    let theCity = searchTerm[0];
    let theState = searchTerm[1]
    // let  { results } =  await getData(theCity,theState);
    let { results } = await getData();
    // console.log(results);
    // let pizza = await getAddress();
    // console.log(pizza);
    // console.log(data.results);
    return (
        <>
            <div>
                <h1>Results</h1>
            </div>
            
       
            <div className={styles.cardContainer}>
                {results?.map((result) => (
                <div key={result.fsq_id} className={styles.card}>
                    <ImageSlider slides={slides}/>
                     <Link href={`/details/trail?id=${result.fsq_id}`} key={result.fsq_id} className={styles.text}>
                         <div key={result.fsq_id} className={styles.text}>
                                 <h2>{result.name}</h2>
                                 <p>{result.timezone}</p>
                                 <p>{result.location.formatted_address}</p>
                                 <p>{result.location.postcode}</p>
                             </div>
                     </Link>
                </div>
                    
                ))}
            </div>
        </>
    )
}
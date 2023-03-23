
import  Image  from "next/image";
import Link from "next/link";
import RCImage from "./ResultCardImage";
import ImageSlider from "./ImageSlider";
import styles from './CSS/resultcard.module.css'
import textStyles from './CSS/textStyles.module.css'
import orangeArrow from '../Illustrations/arrow_right_orange.png'

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `${process.env.FS_KEY_2}`
    }
};


// This function needs to be able to handle ZIP Code input
async function getData(city,state) {
    const res = await fetch('http://localhost:3000/api/places');
    // const res = await fetch(`https://api.foursquare.com/v3/places/search?categories=16019&near=${city}%2C%20${state}`, options);
    let results = await res.json();
    // console.log(results);
    return results;
}

async function getDataZip(ZIPCODE) {
    const res = await fetch('http://localhost:3000/api/places');
    // const res = await fetch(`https://api.foursquare.com/v3/places/search?categories=16019&near=${ZIPCODE}`, options);
    let results = await res.json();
    // console.log(results);
    return results;
}

// async function getAddress() {
//     const res = await fetch('http://localhost:3000/api/userinput');
//     // console.log(res.json());
// }

export default async function Result ({searchTerm, slides}) {


    console.log(searchTerm, 'happening in resultCard component');


const renderFunction = (results) =>         
    <section className={styles.wrapper}>
        <h1 className={`${textStyles.HVAnalogue} ${textStyles.bold} ${styles.results}`}>Results</h1>
        <div className={styles.cardContainer}>  
            {results?.map((result) => (
            <div key={result.fsq_id} className={styles.card}>
                <ImageSlider slides={slides}/>
                <Link href={`/details/trail?id=${result.fsq_id}`} key={result.fsq_id} className={styles.text}>
                    <div key={result.fsq_id} className={`${textStyles.Biennale} ${textStyles.regular} ${styles.textContainer}`}>
                            <h2 className={`${textStyles.HVAnalogue} ${textStyles.bold}`}>{result.name}</h2>
                            <p>{result.timezone}</p>
                            <p>{result.location.formatted_address}</p>
                            <p>{result.location.postcode}</p>
                    </div>
                    <div className={styles.readMore}>
                        <p className={`${textStyles.Biennale} ${textStyles.regular}`}>Read More</p>
                        <Image src={orangeArrow} alt="an orange arrow"/>
                    </div>
                </Link>
            </div>
            ))}
        </div>
    </section>

    if (searchTerm.length === 1) {
        let { results }  = await getDataZip(searchTerm);
        return (
            <>
                {renderFunction(results)}
            </>
        )
    } else {
        let theCity = searchTerm[0];
        let theState = searchTerm[1]
        // let  { results } =  await getData(theCity,theState);
        let { results }  = await getData();
        return (
            <>
                {renderFunction(results)}
            </>
        )
    }

    // console.log(results);
    // let pizza = await getAddress();
    // console.log(pizza);
    // console.log(data.results);

    // This was the original return statement, but now there is a conditional return which handles ZIP inputs

    // return (
    //     <section className={styles.wrapper}>
    //         <h1 className={`${textStyles.HVAnalogue} ${textStyles.bold} ${styles.results}`}>Results</h1>
    //         <div className={styles.cardContainer}>  
    //             {results?.map((result) => (
    //             <div key={result.fsq_id} className={styles.card}>
    //                 <ImageSlider slides={slides}/>
    //                  <Link href={`/details/trail?id=${result.fsq_id}`} key={result.fsq_id} className={styles.text}>
    //                      <div key={result.fsq_id} className={`${textStyles.Biennale} ${textStyles.regular} ${styles.textContainer}`}>
    //                              <h2 className={`${textStyles.HVAnalogue} ${textStyles.bold}`}>{result.name}</h2>
    //                              <p>{result.timezone}</p>
    //                              <p>{result.location.formatted_address}</p>
    //                              <p>{result.location.postcode}</p>
    //                     </div>
    //                     <div className={styles.readMore}>
    //                          <p className={`${textStyles.Biennale} ${textStyles.regular}`}>Read More</p>
    //                          <Image src={orangeArrow} alt="an orange arrow"/>
    //                     </div>
    //                  </Link>
    //             </div>
    //             ))}
    //         </div>
    //     </section>
    // )
}
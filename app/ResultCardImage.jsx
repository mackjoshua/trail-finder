
import Image from "next/image";
import styles from './CSS/rcimage.module.css'

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `${process.env.FS_KEY_2}`
    }
};


export default async function RCImage({fsqID}) { 
    let tester = fsqID;
    // const URL = `https://api.foursquare.com/v3/places/${tester}/photos`;
    const URL = 'https://trail-finder-zqqz.vercel.app//api/placesphotos';
    const res = await fetch(URL, options);
    let results = await res.text();

    if (results.length > 350) {
        results = JSON.parse(results);
    }
    
    
    return <div className={styles.container}>
        <div>{typeof results !== "string" ? results.map((result) => (<div key={result.id}> <Image alt="alt"src={`${result.prefix}100x100${result.suffix}`} width={100} height={100}/> </div>)): console.log("didn't work")}</div>
    </div>
}

import Image from "next/image";
import styles from './rcimage.module.css'

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `${process.env.FS_KEY_2}`
    }
};


// async function getData() {
//     const res = await fetch(`https://api.foursquare.com/v3/places/${fsqID}/photos`);
//     return JSON.parse(res);
// }



export default async function RCImage({fsqID}) { 
    let tester = fsqID;
    // const URL = `https://api.foursquare.com/v3/places/${tester}/photos`;
    const URL = 'http://localhost:3000/api/placesphotos';
    const res = await fetch(URL, options);
    let results = await res.text();

    if (results.length > 350) {
        results = JSON.parse(results);
    }
    
    
    // console.log(typeof results, 'Here they are');
    // console.log(results);
    return <div className={styles.container}>
        <div>{typeof results !== "string" ? results.map((result) => (<div key={result.id}> <Image alt="alt"src={`${result.prefix}100x100${result.suffix}`} width={100} height={100}/> </div>)): console.log("didn't work")}</div>
    </div>
}

import Image from "next/image";

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'fsq3/9bjC0G+TcTDg6EXfOUPi0KRzMJ4XyGXliESnHRoYQY='
    }
};


// async function getData() {
//     const res = await fetch(`https://api.foursquare.com/v3/places/${fsqID}/photos`);
//     return JSON.parse(res);
// }


// EOD 2-22-23 For some reason, using a template string URL returns an error, but
// using a hard coded url (testURL) works fine. Perhaps the Prop fsqID isn't accessible in URL, and somehow
// it's accessible in the returned component only? That could be the problem

export default async function RCImage({fsqID}) { 
    let tester = fsqID;
    const URL = `https://api.foursquare.com/v3/places/${tester}/photos`;
    // const URL = 'http://localhost:3000/api/placesphotos';
    const res = await fetch(URL, options);
    let results = await res.text();

    if (results.length > 350) {
        results = JSON.parse(results);
    }
    
    
    // console.log(typeof results, 'Here they are');
    // console.log(results);
    return <div>
        <div>{typeof results !== "string" ? results.map((result) => (<div key={result.id}> <Image alt="alt"src={`${result.prefix}original${result.suffix}`} width={result.width} height={result.height}/> </div>)): console.log("didn't work")}</div>
    </div>
}
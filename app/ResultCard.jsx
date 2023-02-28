
import  Image  from "next/image";
import RCImage from "./ResultCardImage";

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'fsq3/9bjC0G+TcTDg6EXfOUPi0KRzMJ4XyGXliESnHRoYQY='
    }
};


async function getData() {
    const res = await fetch('http://localhost:3000/api/places')
    // const res = await fetch('https://api.foursquare.com/v3/places/search?categories=16019&near=Los%20Angeles%2C%20CA', options);
    return res.json();
}

export default async function Result (data) {
    let  { results }  = await getData();
    console.log(results);
    // console.log(data.results);
    return (
        <>
            <div>something rendered</div>
            <div>
                {results.map((result) => (
                <div key={result.fsq_id}>
                    <h2>{result.name}</h2>
                    <p>{result.timezone}</p>
                    <p>{result.location.formatted_address}</p>
                    <p>{result.location.postcode}</p>
                    <RCImage fsqID={result.fsq_id}/>
                </div>
                ))}
            </div>
            <div>
            </div>
        </>
    )
}
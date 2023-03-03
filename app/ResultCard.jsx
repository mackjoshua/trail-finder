
import  Image  from "next/image";
import RCImage from "./ResultCardImage";

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'fsq3/9bjC0G+TcTDg6EXfOUPi0KRzMJ4XyGXliESnHRoYQY='
    }
};


async function getData(city,state) {
    // const res = await fetch('http://localhost:3000/api/places');
    const res = await fetch(`https://api.foursquare.com/v3/places/search?categories=16019&near=${city}%2C%20${state}`, options);
    let results = await res.json();
    // console.log(results);
    return results;
}

// async function getAddress() {
//     const res = await fetch('http://localhost:3000/api/userinput');
//     // console.log(res.json());
// }

export default async function Result ({searchTerm}) {
    console.log(searchTerm);
    let theCity = searchTerm[0];
    let theState = searchTerm[1]
    let  { results } =  await getData(theCity,theState);
    // console.log(results);
    // let pizza = await getAddress();
    // console.log(pizza);
    // console.log(data.results);
    return (
        <>
            <div>something rendered</div>
            <div>
                {results?.map((result) => (
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
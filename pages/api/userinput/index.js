import { addresses } from "@/addresses";

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `${process.env.FS_KEY_2}`
    }
};

export default async function handler(req, res) {

    const body = req.body;
    // console.log(body.address);
    const searchTerm = req.query.q;
    const {method} = req.method;

    if (req.method === 'GET') {
        res.status(200).json(addresses); 
    } else if (req.method === 'POST') {
        const searchResults = await fetch(`https://api.foursquare.com/v3/places/search?categories=16019&near=${body.address}%2C%20TN`, options);
        res.status(200).json(searchResults);
        // console.log('body is here', await searchResults.json());
    }

    // switch (method) {
    //     case "GET":
    //         res.status(200).json(addresses);
    //         break;
    //     case "POST":
    //         res.status(200).json(body);
    //         console.log('body', body);
    //         break;
    // }
}
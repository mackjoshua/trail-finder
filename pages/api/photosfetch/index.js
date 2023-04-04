const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `${process.env.FS_KEY_2}`
    }
};

export default async function handler(req,res) {

    let id = await req.query.id;
    let URL = `https://api.foursquare.com/v3/places/${id}/photos`
    let response = await fetch(URL, options);
    const data = await response?.json();
    res.status(200).json(data); 
}
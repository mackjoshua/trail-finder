const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `${process.env.FS_KEY_2}`
    }
  };

export default async function handler(req, res) {
    const id = await req.query.id;
    console.log(id, 'here is the value of id, right here');
    let data = await fetch(`https://api.foursquare.com/v3/places/${id}`, options)
    // console.log(await data.json());
    console.log(await data.json())
    res.status(200).json(); 
}
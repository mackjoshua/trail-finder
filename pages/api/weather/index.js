export default async function handler(req,res) {

    let latitude = await req.query.lat;
    let longitude = await req.query.lon;
    let latString = 'lat=';
    let lonString = '&lon=';
    let latCombined = `${latString}${latitude}`;
    let lonCombined = `${lonString}${longitude}`;
    let totalCombinedString = `${latCombined}${lonCombined}`;

    let URL = `https://api.openweathermap.org/data/3.0/onecall?${totalCombinedString}&exclude=current,minutely,hourly,alerts&units=imperial&appid=` + process.env.OWA_KEY;
    let response = await fetch(URL);
    const data = await response.json();
    res.status(200).json(data); 
}
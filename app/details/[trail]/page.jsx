import TrailsPageWrapper from '@/app/TrailsPageWrapper';



const options = {
  method: 'GET',
  headers: {
      accept: 'application/json',
      Authorization: `${process.env.FS_KEY_2}`
  }
};


const getPhotos = async () => {
  const URL = 'http://localhost:3000/api/placesphotos';
  const res = await fetch(URL, options);
  const slides = await res.json();
  return await slides;
}



const slides = await getPhotos();

export default function Page() {

  return (
    <>
        <TrailsPageWrapper slides={slides} />
    </>
  )
}


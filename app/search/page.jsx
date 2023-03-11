import Link from "next/link";
import Result from "../ResultCard"
import SearchForm from "../SearchForm"

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
    // console.log(typeof await res.json());
    // console.log(slides);
    return await slides;
  }
  
  const slides = await getPhotos();

export default function Page({params, searchParams}) {

    console.log(searchParams.near);
    console.log(typeof searchParams.near);
    let term = searchParams.near;
    let splitTerm = term.split(/[\s,]+/);

    return (
        <>
        <SearchForm slug={searchParams}/>
        <Result searchTerm={splitTerm} slides={slides}/>
        
       
        
        </>
    )
}
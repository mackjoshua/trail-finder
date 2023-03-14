'use client'

import React from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useContext } from 'react';
import { TrailContext } from './Contexts/TrailContext';

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `${process.env.FS_KEY_2}`,
    }
  };



export default function DetailsContainer() {

  const { setDataBrick } = useContext(TrailContext);
  const { dataBrick } = useContext(TrailContext);

  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get('id');

  const id = router.query;

  


  useEffect(() => {
    const fetchData = async () => {

      // For some reason, using a template string here wouldn't work. id was being read as ${search} instead of the dynamic value, so I had to concatenate otherwise
      const URL = `http://localhost:3000/api/placedetails?id=` + search;
      const res = await fetch(URL);
      const data = await res.json();
      setDataBrick(data);
    };
    fetchData();
  },[search]);

  
  return (
    <>
      <div>DetailsContainer</div>
      <div>{dataBrick.name} Here</div>
    </>
  )
}

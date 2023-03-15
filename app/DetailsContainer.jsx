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
  },[setDataBrick,search]);

  
  return (
    <>
      <div>
        <h1>{dataBrick.name}</h1>
        <p>Volutpat tellus scelerisuque ornare eleifend aliquam. Parturient in vitae ut volutpat massa scelerisque. Turpis aliquam fringilla lacus interdum ut semper. Senectus id elit eget id ut in diam neque ipsum. Id neque orci est aenean eet. Faucibus ultrices porttitor vulputate in phasellus vulputate porttitor tincidunt et. Turpis consequat aliquet venenatis pellentesque rhoncus vel convallis. Vulputate mauris aadipiscing aliquam rhoncus.</p>
      </div>
      <aside>
        <h2>Quick Facts</h2>
        <div>
          <h3>Fact 1</h3>
          <p>Some random text</p>
        </div>
        <div>
          <h3>Fact 2</h3>
          <p>Some random text</p>
        </div>
        <div>
          <h3>Fact 3</h3>
          <p>Some random text</p>
        </div>
      </aside>
    </>
  )
}

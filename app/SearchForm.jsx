'use client'

import { Children, useState } from 'react'
import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import Result from './ResultCard';
import { useSearchParams } from 'next/navigation';


// This form should post to the API so that we don't have to make a fetch call on the client side
// So I should rewrite it from using FormData to a fetch request instead 3-1-23

export default function SearchForm({children}) {

  const router = useRouter();

  const [address, setAddress] = useState('');
  const searchInputRef = useRef(null);

    const handleSubmit = async (e) => {
      e.preventDefault();

        const term = searchInputRef.current.value;
        let splitTerm = term.split(/[\s,]+/);

        if(!splitTerm) return;
        router.push(`search?categories=16019&near=${splitTerm[0]}%2C%20${splitTerm[1]}`);

        // const form = e.target;
        // const formData = new FormData(form);

        // const formObject = Object.fromEntries(formData.entries());
        // const formJSON = JSON.stringify(formObject);

        // const options = {

        //   method: 'POST',
        //   headers: { "Content-Type": "application/json"},
        //   body: formJSON
        //  }

        // const response = await fetch('http://localhost:3000/api/userinput', options);
        // console.log(await response.json());
        // console.log(formJSON);
        // console.log(result, 'This is the result');
    }

  return (
    <>
        <form onSubmit={handleSubmit}>
            <label>Enter your City, State 
              <input 
              name='address'
              id='address'
              htmlFor='address'
              type="text"
              ref={searchInputRef}
              required
              value={address} 
              onChange={(e) => {setAddress(e.target.value);}}
              />
            </label>
            <button type='submit'> Submit form </button>
        </form>
        <p>{address}</p>
        {/* <div>{children}</div> */}
    </>
  )
}

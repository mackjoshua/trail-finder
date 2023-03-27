'use client'

import { useState } from 'react'
import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import styles from './CSS/searchForm.module.css'
import Image  from 'next/image';
import searchIcon from '../Illustrations/search.png'


export default function SearchForm({children}) {

  function containsOnlyNumbers(str) {
    return /^\d+$/.test(str); 
  }

  const router = useRouter();

  const [address, setAddress] = useState('');
  const searchInputRef = useRef(null);

    const handleSubmit = async (e) => {
      e.preventDefault();

        const term = searchInputRef.current.value;

        // This if else block handles both zipcodes and City, State inputs
        if (term.length === 5 && containsOnlyNumbers(term)) {
          router.push(`search?categories=16019&near=${term}`)
        } else {
          let splitTerm = term.split(/[\s,]+/);

          if(!splitTerm) return;
          router.push(`search?categories=16019&near=${splitTerm[0]}%2C%20${splitTerm[1]}`);  
        }
    }

  return (
    <>
        <form onSubmit={handleSubmit} className={styles.container}>
              <input 
              name='address'
              id='address'
              htmlFor='address'
              type="text"
              ref={searchInputRef}
              required
              value={address} 
              className={styles.input}
              onChange={(e) => {setAddress(e.target.value);}}
              />
           
            <button type='submit' className={styles.searchButton}>
              <Image src={searchIcon} alt="Image of a search Icon"/>
            </button>
        </form>
    </>
  )
}

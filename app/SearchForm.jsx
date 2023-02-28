'use client'

import React, { useState } from 'react'

export default function SearchForm() {

    const [address, setAddress ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        let address;
    }

  return (
    <>
        <form>
            <label>Enter your City,State</label>
            <input 
            type="text"
            required
            value={address} 
            onChange={(e) => setAddress(e.target.value)}
            />
        </form>
        <p>{address}</p>
    </>
  )
}

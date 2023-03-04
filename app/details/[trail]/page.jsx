'use client'

import React from 'react'
import { usePathname } from 'next/navigation';

export default function Page() {
  const pathname = usePathname();
  const fsqID = pathname.replace('/details/','');


  console.log(fsqID);

  return (
    <>
        <div>page</div>
        <div>{fsqID}</div>
    </>
  )
}


'use client'; 

// import Image from "next/image";
// import TestComponent from "@/components/testComponent";

import {useState, useEffect} from 'react';
import TestComponent from '@/components/testComponent';

export default function Home() {
  const [counter, setCounter] = useState(0);

  return (
    <body>
      <button onClick={() => setCounter(counter + 1)}>Click Me!!</button>
        <h1>Counter: {counter}</h1>

    </body>
  )

}
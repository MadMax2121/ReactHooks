"use client"
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Home() {

  const [count, setCount] = useState(0)
  const [power, setPower] = useState(count)

  useEffect(() => {
    setPower(() => count * count);
  }, [count]);
  return (
    <main className='h-screen flex items-center  justify-evenly'>

      <div className='w-56  flex flex-col items-center space-y-8 border-2 border-black p-6 rounded-md'>

        <h1 className='-mb-5 font-bold'> UseState() </h1>
        <h1 className=''> Simple counter</h1>
        <div className='text-4xl'>{count}</div>


        <div className='bg-blue-500 text-4xl border-2 border-black rounded-full flex w-32'>

          <button onClick={() => setCount(count + 1)} className='flex-1 hover:bg-blue-400 rounded-l-full '>+</button>

          <div className='w-0.5 bg-black self-stretch'></div>

          <button onClick={() => setCount(count - 1)} className='flex-1 hover:bg-blue-400 rounded-r-full'>-</button>

        </div>
      </div>


      <div className=' w-56 h-64 flex flex-col items-center text-center space-y-6 border-2 border-black p-6 rounded-md'>

        <div className='font-bold'>useEffect()</div>
        <p className='break-normal '>Updates the square of the number on the counter</p>
        <div className='flex space-x-4 text-xl'>
          <div className=''>
            {count}
            <sup>2</sup>
          </div>
          <div> =&gt; </div>
          <div>{power}</div>
        </div>
      </div>

      <div className='  h-64 flex flex-col items-center text-center space-y-6 border-2 border-black p-6 rounded-md'>

        <div className='font-bold'>useEffect()</div>
        <p className='break-normal '>Update the square of the number on the counter</p>
        <div className='flex space-x-4 text-xl'>
          <div className=''>
            {count}
            <sup>2</sup>
          </div>
          <div> =&gt; </div>
          <div>{power}</div>
        </div>
        </div>




    </main>

  )
}

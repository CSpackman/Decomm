import { redirect } from 'next/dist/server/api-utils'
import React from 'react'

export default function Landing() {
  return (
    <div className='bg-gradient-to-b from-green-200 via-green-300 to-blue-500 h-screen flex align-middle justify-center items-center flex-col'> 
      <div className='text-5xl font-bold'>
        Crypto is more than a risky investment...
      </div>
      <button 
        className='bg-black text-white py-4 px-2 text- rounded-lg w-96 font-bold mt-10 text-lg'
      >
        See the future of ecommerce
      </button>
    </div>
  )
}

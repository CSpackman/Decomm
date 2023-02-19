import Image from 'next/image'
import React from 'react'
import { FaEthereum } from 'react-icons/fa'

export default function NikeItem() {
  return (
    <div className='bg-white rounded-md w-64 flex flex-col align-middle p-4 m-4 -z-1 border-2 border-slate-200'>
        <div>
            <img 
                src='https://images.stockx.com/images/Nike-Dunk-Low-Retro-White-Black-2021-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1633027409'
                width={200}  
                height={200} 
                alt='Nike Dunk Low Retro White Black 2021' 
                className='self-center'
            />
        </div>
        <div>
            <p className='text-red-400 font-semibold' >Just In</p>
            <p className='font-bold text-lg'>Nike Dunk Low Pandas</p>
            <p className='text-md text-gray-500'>Mens Shoes</p>
            <p className='text-md'>Size: 13</p>
            <div className='flex items-center mt-2'>
                <FaEthereum className='text-black-500 mr-2' size={15} />
                <p className='font-bold'>{0.09} ETH</p>
            </div>
        </div>
        <div className='bg-black text-white flex items-center align-middle justify-center py-2 mt-4 rounded-md'>
            <button onClick={() => alert("Added to Bag")}>Add to Bag</button>
        </div>
    </div>
  )
}

import Image from 'next/image'
import React from 'react'
import { FaEthereum } from 'react-icons/fa'

type NikeItemProps = {
    image: string;
    title: string;
    ethPrice: number;
    size: number;
}

export default function NikeItem({ image, title, ethPrice, size }: NikeItemProps) {
  return (
    <div className='bg-white rounded-md w-64 flex flex-col align-middle p-4 m-4 -z-1 border-2 border-slate-200'>
        <div>
            <img 
                src={image}
                width={200}  
                height={200} 
                alt='Nike Dunk Low Retro White Black 2021' 
                className='self-center'
            />
        </div>
        <div>
            <p className='text-red-400 font-semibold' >Just In</p>
            <p className='font-bold text-lg'>{title}</p>
            <p className='text-md text-gray-500'>Mens Shoes</p>
            <p className='text-md'>Size: {size}</p>
            <div className='flex items-center mt-2'>
                <FaEthereum className='text-black-500 mr-2' size={15} />
                <p className='font-bold'>{ethPrice} ETH</p>
            </div>
        </div>
        <div className='bg-black text-white flex items-center align-middle justify-center py-2 mt-4 rounded-md'>
            <button onClick={() => alert("Added to Bag")}>Add to Bag</button>
        </div>
    </div>
  )
}

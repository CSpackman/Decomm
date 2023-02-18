import Image from 'next/image'
import React from 'react'

export default function Item() {
  return (
    <div className='bg-white rounded-md w-60 flex flex-col align-middle p-4'>
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
        </div>
        <div className='bg-black text-white flex items-center bottom-px align-middle justify-center py-2 mt-4 rounded-md'>
            <button onClick={() => alert("Button Pressed")}>Add to Bag</button>
        </div>
    </div>
  )
}

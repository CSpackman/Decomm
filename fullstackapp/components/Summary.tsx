import Image from 'next/image'
import React from 'react'
import { FaEthereum } from 'react-icons/fa'

export default function Summary() {

    return (
        <div className='bg-white rounded-md w-80 h-72 flex flex-col align-middle p-7'>
            
        <div>
            <p className='font-semibold text-base' >Summary</p>
            <div className='py-2'></div>
            <div className='flex items-center justify-between'>
                <p className='font-semibold text-xs'>Do you have a Promo Code?</p>
                <img 
                    src='https://www.pngall.com/wp-content/uploads/6/Caret-Symbol-PNG-Image.png'
                    width={30}  
                    height={30} 
                    alt='Question mark in Transaction Summary' 
                    className='float-right'
                /> 
            </div>
            
        </div>
        
        <div className='py-1'></div>
        <div>
            <div className='flex items-center justify-between'>
                <p className='text-xs'>Subtotal</p>
                <img 
                    src='https://cdn-icons-png.flaticon.com/512/25/25400.png'
                    width={10}  
                    height={10} 
                    alt='Question mark in Transaction Summary' 
                    className='-ml-36'
                />
                <div className='flex items-center mt-2'>
                    <FaEthereum className='text-black-500 mr-2' size={15} />
                    <p className='font-bold text-sm'>{0.09} ETH</p>
                </div>
            </div>
            <div className='py-1'></div>
        
            <div className='flex items-center mt-2'>
                    <FaEthereum className='text-black-500 mr-2' size={15} />
                    <p className='font-bold text-xs float-right'>{0.09} ETH</p>
            </div>
            <p className='text-xs'>Estimated Shipping and Handling</p>
            <div className='py-1'></div>

            <div className='flex items-center justify-between'>
                <p className='text-xs'>Estimated Tax</p>
                <img 
                    src='https://cdn-icons-png.flaticon.com/512/25/25400.png'
                    width={10}  
                    height={10} 
                    alt='Question mark in Transaction Summary' 
                    className='-ml-40'
                />
                <p className= 'text-xs'> - </p>
            </div>
            <div className='py-1'></div>
            <hr></hr>
            <div className='py-1'></div>
            <p className='float-right text-xs'>$1,007.00</p>
            <p className='text-xs'>Total</p>
            <div className='py-1'></div>
            <hr></hr>
        </div>
        <div className='bg-black text-white flex items-center mb-1 align-middle justify-center py-2 mt-4 rounded-3xl'>
            <button onClick={() => alert("Button Pressed")}>Checkout</button>
        </div>
        </div>
    )   
}
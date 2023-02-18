import Image from 'next/image'
import React from 'react'

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
                <p className='text-xs'>$1,000.00</p>
            </div>
            <div className='py-1'></div>
        
            <p className='float-right text-xs'>$7.00</p>
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
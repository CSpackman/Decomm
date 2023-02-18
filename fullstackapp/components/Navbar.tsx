import React, { useState } from 'react'
import { BsBag } from 'react-icons/bs'
import { Indicator } from '@mantine/core';

const navElement = 'text-gray-500 hover:text-black px-2'

type NavbarProps = {
    items: number;
    bagOpened: boolean;
    setBagOpened: (value: boolean) => void;
}

export default function Navbar({ items, bagOpened, setBagOpened }: NavbarProps) {
  return (
    <div className='bg-white w-full p-5 flex items-center justify-center'>
        <img 
            alt='Nike Logo'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1200px-Logo_NIKE.svg.png'
            width={60}
            className='ml-5 mr-auto'
        />
        <div className='flex mr-auto'>
            <div className={navElement}>New & Featured</div>
            <div className={navElement}>Men</div>
            <div className={navElement}>Women</div>
            <div className={navElement}>Kids</div>
            <div className={navElement}>Accessories</div>
            <div className={navElement}>Sale</div>
        </div>
        <div>
        {/* <div className='bg-black text-white flex items-center justify-center rounded-3xl text-xs aspect-square z-10'>{items}</div> */}
        <div
            className='mr-5'
            onClick={() => setBagOpened(!bagOpened)}
        >
            <Indicator label={items} inline size={18} color='black'>
                <BsBag className='' size={20} />
            </Indicator>
        </div>
        </div>
    </div>
  )
}


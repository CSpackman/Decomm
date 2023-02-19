import React, { useEffect, useState } from 'react'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import NikeBagItem, { NikeBagItemProps } from './NikeBagItem';
import { Popover, Modal, Button } from '@mantine/core';
import SignUp from '../core/SignUp';
import OneClick from '../core/OneClick';
import Decomm from '../core/Decomm';

type NikeBagProps = {
    NikeItems: NikeBagItemProps[];
    bagOpened: boolean;
    setBagOpened: (value: boolean) => void;
}

export default function NikeBag({ NikeItems, bagOpened, setBagOpened }: NikeBagProps) {

    // Line 1: Declare a new state variable, to know whether the modal is open or not
    const [opened, setOpened] = useState(false);

    // @todo: Request from API with metamask ID to see if user needs to sign up
    const [hasAccount, setHasAccount] = useState(true);

  return (
    <div className='bg-white w-96 p-4 border-slate-400 border-2 rounded-lg z-10 absolute right-0'>
        <div className='flex align-top items-center'>
            <BsFillCheckCircleFill className='text-green-500' size={20} />
            <p className='text-lg font-bold px-3'>Current Bag</p>
        </div>
        <div>
            {NikeItems.map((item, index) => (
                <div key={index}>
                    <NikeBagItem 
                        img={item.img} 
                        itemName={item.itemName} 
                        itemType={item.itemType} 
                        itemSize={item.itemSize} 
                        ethPrice={item.ethPrice} 
                    />
                </div>
            ))}
        </div>
        <div className='bg-black p-2 rounded-xl mt-4 text-white flex items-center justify-center font-bold'>
            <button
                onClick={() => {
                    setOpened(true)
                    // setBagOpened(false)
                }}
            >
                Checkout
            </button>
        </div>
        <div>
            {/* Line 2: The decomm element to handle payments  */}
            <Decomm opened={opened} setOpened={setOpened} />
        </div>
    </div>
  )
}

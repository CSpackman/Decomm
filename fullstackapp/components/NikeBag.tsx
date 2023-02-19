import React, { useEffect, useState } from 'react'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import NikeBagItem, { NikeBagItemProps } from './NikeBagItem';
import { Popover, Modal, Button } from '@mantine/core';
import SignUp from '../core/SignUp';
import OneClick from '../core/OneClick';
import Decomm from '../core/Decomm';
import {RxCrossCircled} from 'react-icons/rx'

import { useCookies } from 'react-cookie';
import {Cookies } from 'react-cookie'
type NikeBagProps = {
    // NikeItems: NikeBagItemProps[];
    bagOpened: boolean;
    setBagOpened: (value: boolean) => void;
}
export type ItemsData = {
    ImgUrl: string,
    Quantity: number,
    Price: number,
    Title: string
}
export type CheckoutObject = {
    Items: Array<ItemsData>,
    TotalCartValue: number,
    MerchantAddress: String
}

export default function NikeBag({ bagOpened, setBagOpened }: NikeBagProps) {

    // Line 1: Declare a new state variable, to know whether the modal is open or not
    const [opened, setOpened] = useState(false);
    const cookies = new Cookies();
    const [currentCheckoutObject, setCheckoutObject] = useState(cookies.get('cart') as CheckoutObject);
    // @todo: Request from API with metamask ID to see if user needs to sign up
    const [hasAccount, setHasAccount] = useState(true);
    try{

    var NikeItems: NikeBagItemProps[] =[];
    for( var i=0; i<currentCheckoutObject.Items.length; i++){
      var itemToBeAdded = {
        img: currentCheckoutObject.Items[i].ImgUrl,
        itemName: currentCheckoutObject.Items[i].Title,
        itemType: 'Mens Shoe',
        itemSize: 'Size: 13',
        ethPrice: currentCheckoutObject.Items[i].Price
      }
      NikeItems.push(itemToBeAdded)
    }
}catch{
    var NikeItems: NikeBagItemProps[] =[];
}

   
if(NikeItems.length!=0){
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
                    setCheckoutObject(cookies.get("cart"))
                    console.log(currentCheckoutObject)
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
}else{
    return(
        <div className='bg-white w-96 p-4 border-slate-400 border-2 rounded-lg z-10 absolute right-0'>
        <div className='flex align-top items-center'>
            <RxCrossCircled className='text-red-500' size={20} />
            <p className='text-lg font-bold px-3'>Your Cart is Empty!</p>
        </div>
    </div>
  )
}
}

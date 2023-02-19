import React from 'react'
import { FaEthereum } from 'react-icons/fa'

export type NikeBagItemProps = {
    img: string;
    itemName: string;
    itemType: string;
    itemSize: string;
    ethPrice: number;
}

export default function NikeBagItem({ img, itemName, itemSize, itemType, ethPrice }: NikeBagItemProps) {
  return (
    <div className='flex my-4 align-top'>
        <img 
            alt='Nike Bag Item'
            src={img}
            width={90}
        />
        <div className='ml-4'>
            <p className='font-bold'>{itemName}</p>
            <p className='text-gray-500'>{itemType}</p>
            <p className='text-gray-500'>{itemSize}</p>
            <div className='flex items-center mt-2'>
                <FaEthereum className='text-black-500 mr-2' size={15} />
                <p className='font-bold'>{ethPrice} ETH</p>
            </div>
        </div>
    </div>
  )
}

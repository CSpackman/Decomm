import React, { useEffect, useState } from 'react'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import NikeBagItem, { NikeBagItemProps } from './NikeBagItem';
import { Modal, Button, Group } from '@mantine/core';
import { ethers } from 'ethers'
import { ExternalProvider } from "@ethersproject/providers";

declare global {
  interface Window {
    ethereum?: ExternalProvider;
  }
}

type NikeBagProps = {
    NikeItems: NikeBagItemProps[];
    bagOpened: boolean;
    setBagOpened: (value: boolean) => void;
}

export default function NikeBag({ NikeItems, bagOpened, setBagOpened }: NikeBagProps) {
    const [opened, setOpened] = useState(false);
    const [currentAccount, setCurrentAccount] = useState('');

    useEffect(() => {
        console.log('currentAccount: ', currentAccount)
    }, [])

    const connectWallet = () => {
        //client side code
        if(!window.ethereum) {
          console.log("please install MetaMask")
          return
        }
        /*
        //change from window.ethereum.enable() which is deprecated
        //see docs: https://docs.metamask.io/guide/ethereum-provider.html#legacy-methods
        window.ethereum.request({ method: 'eth_requestAccounts' })
        .then((accounts:any)=>{
          if(accounts.length>0) setCurrentAccount(accounts[0])
        })
        .catch('error',console.error)
        */
    
        //we can do it using ethers.js
        const provider = new ethers.providers.Web3Provider(window.ethereum)
    
        // MetaMask requires requesting permission to connect users accounts
        provider.send("eth_requestAccounts", [])
        .then((accounts)=>{
          if(accounts.length>0) setCurrentAccount(accounts[0])
        })
        .catch((e)=>console.log(e))
    }
    const disconnect = () => {
    console.log("Disconnecting...")
    setCurrentAccount('')
    }

  return (
    <div className='ml-auto bg-white w-96 p-4'>
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
                }}
            >
                Checkout
            </button>
        </div>
        <div>
            <Modal 
                opened={opened} 
                onClose={() => setOpened(false)} 
                withCloseButton={false}
                size='60%'
            >
                {
                    currentAccount === '' ? <button onClick={() => connectWallet()}>Connect Wallet</button> : <p>{currentAccount}</p>
                }
            </Modal>
        </div>
        <button onClick={() => disconnect()}>Disconnect</button>
    </div>
  )
}

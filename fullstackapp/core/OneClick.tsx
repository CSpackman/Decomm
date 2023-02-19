import React, { useState } from 'react'
import Summary from '../components/Summary'
import { Checkbox, Input, Stepper } from '@mantine/core'
import { FaEthereum } from 'react-icons/fa'
import { completeTransaction } from './SignUp'
import complete from '../assets/complete.svg'
import Image from 'next/image';
import { DecommChildProps } from './Decomm'

export default function OneClick({ walletAddress, account, setCurrentWallet }: DecommChildProps) {
    const [active, setActive] = useState(0);
    const nextStep = () => setActive((current) => (current < 2 ? current + 1 : current));
  
  // @todo: This should do math
  return (
    <div>
      { !window.ethereum ? <div>Please Connect to Metamask</div> :
      <Stepper active={active} onStepClick={setActive} breakpoint="sm" color='black' size='sm'>
        <Stepper.Step>
        <div className='flex align-center items-left flex-col p-4'>
        <div className='p-4'></div>
        <h1 className='font-bold text-lg'>Order Summary</h1>
        <div className='flex w-full mt-2 text-md align-bottom items-center justify-between ml-auto'>
          <p>Do you have a promo code?</p>
          <div className='ml-auto w-40'>
            <Input placeholder='Promo'/>
          </div>
        </div>
        <div className='mt-4 flex align-middle items-center justify-between'>
          <p>Subtotal</p>
          <div className='flex items-center ml-auto mr-10 justify-end'>
              <FaEthereum className='text-black-500 mr-2' size={15} />
              <p className='font-bold text-lg'>{0.09} ETH</p>
          </div>
        </div>
        <div className='mt-4 flex align-middle items-center justify-between'>
          <p className='text-gray-300'>Est. Shipping and Handling</p>
          <div className='flex items-center ml-auto mr-10'>
              <FaEthereum className='text-black-500 mr-2' size={15} />
              {/* @todo: This should be passed in from cookie */}
              <p className='font-bold text-md'>{0.0001} ETH</p>
          </div>
        </div>
        <div className='mt-4 flex align-middle items-center justify-between'>
          <p className='text-gray-300'>Est. Tax</p>
          <div className='flex items-center ml-auto mr-10'>
              <FaEthereum className='text-black-500 mr-2' size={15} />
              {/* @todo: This should be passed in from cookie */}
              <p className='font-bold text-md'>-</p>
          </div>
        </div>
        <div className='mt-4 flex align-middle items-center justify-between'>
          <p className='text-green-500'>Rewards</p>
          <div className='flex items-center ml-auto mr-10'>
              <FaEthereum className='text-green-500 mr-2' size={15} />
              {/* @todo: This should be passed in from cookie */}
              <p className='font-bold text-md text-green-500'>0.02 ETH</p>
          </div>
        </div>
        <div className='border-slate-500 w-full border-2 mt-2'></div>
        <div className='mt-4 flex align-middle items-center justify-between'>
          <p className='text-gray-300 text-lg'>Total</p>
          <div className='flex items-center ml-auto mr-10'>
              <FaEthereum className='text-black-500 mr-2' size={15} />
              {/* @todo: This should be passed in from cookie */}
              <p className='font-bold text-lg'>0.0701 ETH</p>
          </div>
        </div>
        <div>
          <button className='bg-black text-white w-full mt-4 p-4 rounded-xl'
            onClick={() => {
              if (walletAddress === '') {
                alert('Please connect your wallet')
                return
              }
              completeTransaction(0.01, '0x0670e8d69Bc462f830b3dd503296DbcFAF148598')
              nextStep()
            }}
          >
            Checkout
          </button>
        </div>
      </div>
        </Stepper.Step> 
        <Stepper.Completed>
            <div className='w-full h-full flex justify-center p-4 flex-col align-middle items-center'>
                <Image 
                    src={complete}
                    alt="Completed"
                    className='w-1/2 mx-auto'
                    width={150}
                    height={150}
                />
                <div className='font-bold p-2 text-lg text-black mt-2'>Purchase Completed</div>
            </div>
        </Stepper.Completed>
      </Stepper>
      }
    </div>
  )
}

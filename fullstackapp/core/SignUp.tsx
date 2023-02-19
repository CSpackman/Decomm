import React, { useEffect, useMemo, useState } from 'react'
import { ethers } from 'ethers'
import { ExternalProvider } from "@ethersproject/providers";
import { Stepper, Button, Group, TextInput, Select, Checkbox } from '@mantine/core';
import initUser from '../convex/user';
import { useQuery } from "../convex/_generated/react";
import { useMutation } from "../convex/_generated/react";
import { FaEthereum } from 'react-icons/fa'
import complete from '../assets/complete.svg'
import Image from 'next/image';

declare global {
  interface Window {
    ethereum?: ExternalProvider;
  }
}

const buttonStyle = 'bg-black text-white font-bold p-4 rounded-xl w-full align-middle flex items-center justify-center mb-4';

export default function SignUp() {
    const [currentAccount, setCurrentAccount] = useState('');
    const [active, setActive] = useState(1);
    const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));
    const [inputs, setInputs] = useState({} as user);
    //wallet: string, firstName?: string, lastName?: string, shippingAddress?: string, email?: string, history?: Array<string>
    type user = {
        first_name:string,
        last_name: string,
        email: string,
        streetAdress: string,
        stateProvince: string,
        country: string,
        zipCode: string,
        phone: string

    }
    function submitData(){
        if(!window.ethereum) {
            console.log("please install MetaMask")
            return
          }
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        provider.send("eth_requestAccounts", [])
        .then((accounts)=>{
          if(accounts.length>0) setCurrentAccount(accounts[0])
          initUser(accounts[0],inputs.first_name,inputs.last_name,inputs.email,inputs.streetAdress,inputs.stateProvince,inputs.country,inputs.zipCode,inputs.phone)
    })
}

    // Connect to MetaMask
    const connectWallet = () => {
        //client side code
        if(!window.ethereum) {
          console.log("please install MetaMask")
          return
        }
    
        const provider = new ethers.providers.Web3Provider(window.ethereum)
    
        provider.send("eth_requestAccounts", [])
        .then((accounts)=>{
          if(accounts.length>0) setCurrentAccount(accounts[0])
        })
        .catch((e)=>console.log(e))
    }

    // Reset the connection
    const disconnect = () => {
        console.log("Disconnecting...")
        setCurrentAccount('')
    }

    // Check if address is verified
    const checkAddress = () => {
        if (currentAccount != '') {
            if (ethers.utils.isAddress(currentAccount)) {
                nextStep();
            } else {
                alert("Please connect with a valid Ethereum address.")
            }
        }
    }

    // Make color a prop so it's dynamic
    return (
        <div>
            <div>
                <Stepper active={active} onStepClick={setActive} breakpoint="sm" color='black' size='sm'>
                    <Stepper.Step label="Login with Metamask">
                        <div className='mx-10 flex justify-center flex-col'>
                            <button
                                className={buttonStyle}
                                onClick={() => {
                                    connectWallet()
                                    checkAddress()
                                }}
                            >
                                Sign In with Metamask
                            </button>
                        </div>
                    </Stepper.Step>
                    <Stepper.Step label="Shipping Information" description="">
                    <div className='mx-10 flex justify-center flex-col'>
                            <h1 className='font-bold mt-1'>How should we contact you?</h1>
                            <div className='py-1'></div>
                            <TextInput 
                                placeholder="Your name"
                                label="First name"
                                color='black'
                                onChange={(event) => setInputs({...inputs, first_name: event.currentTarget.value})}
                            />
                            <TextInput 
                                placeholder="Your name"
                                label="Last name"
                                color='black'
                                onChange={(event) => setInputs({...inputs, last_name: event.currentTarget.value})}
                            />
                            <TextInput 
                                placeholder="you@decomm.eth"
                                label="Email"
                                color='black'
                                onChange={(event) => setInputs({...inputs, email: event.currentTarget.value})}
                            />
                            <TextInput 
                                placeholder="(123) 456-7890"
                                label="Phone Number"
                                color='black'
                                onChange={(event) => setInputs({...inputs, phone: event.currentTarget.value})}
                            />
                            <h1 className='font-bold mt-4'>Shipping Info</h1>
                            <div className='mt-1'></div>
                            <div className='flex justify-between w-full'>
                                <Select 
                                    placeholder="CAN"
                                    label="Country"
                                    color='black'
                                    data={countryOptions}
                                    onChange={(value) => setInputs({...inputs, country: value as string})}
                                />
                                <div className='px-2'></div>
                                <Select 
                                    placeholder="ON"
                                    label="State/Province"
                                    color='black'
                                    data={provinceStateOptions}
                                    onChange={(value) => setInputs({...inputs, stateProvince: value as string})}
                                />
                            </div>
                            <TextInput 
                                placeholder="123 Main St"
                                label="Street Address"
                                color='black'
                                onChange={(event) => setInputs({...inputs, streetAdress: event.currentTarget.value})}
                            />
                            <TextInput 
                                placeholder="A4B 5C6"
                                label="ZIP Code"
                                color='black'
                                onChange={(event) => setInputs({...inputs, zipCode: event.currentTarget.value})}
                            />
                        </div>
                        <div className='bg-black w-full p-2 mt-4 rounded-lg flex justify-center'>
                            <button 
                                className='text-white font-bold'
                                onClick={() => {
                                    nextStep()
                                    submitData()
                                }}
                            >
                                Continue
                            </button>
                        </div>
                    </Stepper.Step>
                    <Stepper.Step label="Rewards?">
                        <div className='mx-10 flex justify-center flex-col align-middle py-2'>
                            Would you like to opt into rewards program? We compensate you for your data, and save you money.
                            You can get back between 2-6% of your purchase price in rewards.
                            <div className='flex w-full justify-center '>
                                <div className='p-4'>
                                    <Checkbox size='lg' label='Opt In' color='dark'/>
                                </div>
                                <div className='p-4'>
                                    <Checkbox size='lg' label='Opt Out' color='dark'/>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center w-full'>
                            <button
                                className={buttonStyle}
                                onClick={() => {
                                    alert("Completed Purchase!")
                                    nextStep()
                                }}
                            >
                                <div className='flex items-center mt-2 text-lg'>
                                    <p className='mr-2'>Complete Purchase:</p>
                                    <FaEthereum className='text-black-500 mr-1' size={15} />
                                    <p className='font-bold'>{0.09} ETH</p>
                                </div>
                            </button>
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
            </div>
        </div>
    )
}

const countryOptions = [
    { label: 'United States', value: 'USA' },
    { label: 'Canada', value: 'CAN' },
    { label: 'Mexico', value: 'MEX' },
    { label: 'United Kingdom', value: 'UK' },
]

const provinceStateOptions = [
    { label: 'California', value: 'CA' },
    { label: 'New York', value: 'NY' },
    { label: 'Texas', value: 'TX' },
    { label: 'Florida', value: 'FL' },
    {label: 'Ontario', value: 'ON'},
    {label: 'Quebec', value: 'QC'},
    {label: 'Nova Scotia', value: 'NS'},
]

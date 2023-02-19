import React, { useEffect, useState } from 'react'
import OneClick from './OneClick';
import SignUp from './SignUp';
import { Modal } from '@mantine/core';
import { useQuery } from '../convex/_generated/react';
import { Wallet } from 'ethers';

/*
* Core Package for Decomm
* Allows seamless integration of Decomm into any React app
*/

type User = {
    first_name:string,
    last_name: string,
    email: string,
    streetAdress: string,
    stateProvince: string,
    country: string,
    zipCode: string,
    phone: string,
    optIn: boolean

}

export type DecommChildProps = {
    walletAddress: string;
    setCurrentWallet: (walletAddress: string) => void;
    account: User;
}

type DecommProps = {
    opened: boolean;
    setOpened: (value: boolean) => void;
}

export default function Decomm({ opened, setOpened }: DecommProps) {
    const [account, setAccount] = useState({} as User);
    const [currentWallet, setCurrentWallet] = useState('');
    const userQuery = useQuery("user:getFromWallet",currentWallet)

    // Immediately check if user has an account
    useEffect(() => {
        const currentUserData = {
            first_name:userQuery?.firstName,
            last_name: userQuery?.lastName,
            email: userQuery?.email,
            streetAdress: userQuery?.streetAdress,
            stateProvince: userQuery?.stateProvince,
            country: userQuery?.country,
            zipCode: userQuery?.zipCode,
            optIn: userQuery?.optIn
        }
        // @todo: Add API call
        setAccount(currentUserData as User);
    }, []);

    function checkUser(){
        if(userQuery?.wallet!= null) return true;
        return false;
    }

  return (
    <div>
        <Modal 
            opened={opened} 
            onClose={() => setOpened(false)} 
            withCloseButton={false}
            size='60%'
        >
            { checkUser() == true  ? 
                <OneClick walletAddress={currentWallet} setCurrentWallet={setCurrentWallet} account={account} /> : 
                <SignUp walletAddress={currentWallet} setCurrentWallet={setCurrentWallet} account={account} /> 
            }
        </Modal>
    </div>
  )
}

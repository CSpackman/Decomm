import React, { useEffect, useState } from 'react'
import OneClick from './OneClick';
import SignUp from './SignUp';
import { Modal } from '@mantine/core';

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

    // Immediately check if user has an account
    useEffect(() => {
        // @todo: Add API call
        setAccount({} as User);
    }, []);

  return (
    <div>
        <Modal 
            opened={opened} 
            onClose={() => setOpened(false)} 
            withCloseButton={false}
            size='60%'
        >
            { account != {} as User ? 
                <OneClick walletAddress={currentWallet} setCurrentWallet={setCurrentWallet} account={account} /> : 
                <SignUp walletAddress={currentWallet} setCurrentWallet={setCurrentWallet} account={account} /> 
            }
        </Modal>
    </div>
  )
}

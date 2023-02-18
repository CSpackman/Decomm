import { FormEvent, useEffect, useState } from 'react'
import { useMutation, useQuery } from '../convex/_generated/react'
import NikeItem from '../components/NikeItem'
import Navbar from '../components/Navbar'
import NikeBag from '../components/NikeBag'
import { NikeBagItemProps } from '../components/NikeBagItem'

export default function App() {
  // const users = useQuery('listUsers') || []

  const [newMessageText, setNewMessageText] = useState('')
  const initUser = useMutation('user:initUser')

  function setCookie(wallet: string, firstName: string, lastName: string, shippingAddress: string, history: string, email: string) {
    document.cookie = "wallet=" + wallet;

    if (firstName) {
        document.cookie = "firstName=" + firstName;
    }
    if (lastName) {
        document.cookie = "lastName=" + lastName;
    }
    if (shippingAddress) {
        document.cookie = "shippingAddress=" + shippingAddress;
    }
    if (history) {
      document.cookie = "history=" + history;
    }
    if (email) {
      document.cookie = "email=" + email;
    }

    console.log("document.cookie = " + document.cookie);
}
  
  function getCookie(cname: string) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  function checkCookie(user: any) {
    let User = getCookie(user.wallet);
    if (user != "") {
      alert("Welcome again " + user.firstName + " " + user.lastName);
    } else {
      user = prompt("Please enter your wallet address:", "");
      if (user != "" && user != null) {
        setCookie(user.wallet, user.firstName, user.lastName, user.shippingAddress, user.history, user.email);
      }
    }
  }
  // const [name, setName] = useState('user')

  // useEffect(() => {
  //   setName('User ' + Math.floor(Math.random() * 10000))
  // }, [])

  async function handleInitUsers(event: FormEvent) {
    event.preventDefault()
    setNewMessageText('')
    await initUser(newMessageText)
  }
  
  // Frontend State Management
  const [bagOpened, setBagOpened] = useState(false)


  return (
    <main>
      <div className='bg-slate-400 h-screen'>
        {/* @todo: Add API call */}
        <Navbar items={1} setBagOpened={setBagOpened} bagOpened={bagOpened} />
        { bagOpened ? 
          // @todo: Add API call
          <NikeBag NikeItems={sampleProps} setBagOpened={setBagOpened} bagOpened={bagOpened} /> : null 
        }
        <div className={'flex items-center justify-center align-middle -z-10'}>
          <NikeItem />
          <NikeItem />
        </div>
      </div>
    </main>
  )
}


// @todo: Add API call
const sampleProps: NikeBagItemProps[] = [
  {
    img: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/8061baec-449e-433b-89b3-8234dde499bd/air-jordan-1-mid-mens-shoes-FGLltd.png',
    itemName: 'Nike Air Max 2090',
    itemType: 'Mens Shoe',
    itemSize: 'Size: 13',
    ethPrice: '0.09'
  },
]

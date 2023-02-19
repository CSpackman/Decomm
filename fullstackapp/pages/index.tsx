import { FormEvent, useEffect, useState } from 'react'
import { useMutation, useQuery } from '../convex/_generated/react'
import NikeItem from '../components/NikeItem'
import Navbar from '../components/Navbar'
import NikeBag from '../components/NikeBag'
import { NikeBagItemProps } from '../components/NikeBagItem'
import Footer from '../components/Footer'
import {Cookies } from 'react-cookie'
import { CheckoutObject } from '../components/NikeBag'
export default function App() {
  // const users = useQuery('listUsers') || []

  const [newMessageText, setNewMessageText] = useState('')
  const initUser = useMutation('user:initUser')
  const cookies = new Cookies();
  const [currentCheckoutObject, setCheckoutObject] = useState(cookies.get('cart') as CheckoutObject);
  const [sampleProps, setSampleprompts] = useState({} as NikeBagItemProps[])
  const [count, setCount] = useState(0)

  
  const [name, setName] = useState('user')

  useEffect(() => {
    setName('User ' + Math.floor(Math.random() * 10000))
  }, [])

  async function handleInitUsers(event: FormEvent) {
    event.preventDefault()
    setNewMessageText('')
    await initUser(newMessageText)
  }
  
  // Frontend State Management
  const [bagOpened, setBagOpened] = useState(false)
  // const sampleProps: NikeBagItemProps[] = [
  //   {
  //     img: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/8061baec-449e-433b-89b3-8234dde499bd/air-jordan-1-mid-mens-shoes-FGLltd.png',
  //     itemName: 'Nike Air Max 2090',
  //     itemType: 'Mens Shoe',
  //     itemSize: 'Size: 13',
  //     ethPrice: 0.09
  //   },
  // ]

  return (
    <main>
      <div className='bg-white h-screen'>
        {/* @todo: Add API call */}
        <Navbar items={count} setBagOpened={setBagOpened} bagOpened={bagOpened} />
        { bagOpened ? 
          // @todo: Add API call
          <div className='flex-row justify-self-end'>
          <NikeBag  setBagOpened={setBagOpened} bagOpened={bagOpened} />
          </div>: null
        }
        <div className='border-2 bg-slate-500'></div>
        <div className='text-md w-full bg-white outline-t p-4 font-light italic px-8'>
          Lifestyle / Shoes
        </div>
        <div className='font-bold text-2xl bg-white px-8 pb-2'>
          Men's Lifestyle Shoes (400+)
        </div>
          <div className='flex items-center justify-center align-middle -z-10'>
            <NikeItem 
              image='https://images.stockx.com/images/Nike-Dunk-Low-Retro-White-Black-2021-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1633027409'
              title='Nike Dunk Low Retro White Black'
              ethPrice={0.09}
              size={13}
            />
            <NikeItem 
              image='https://images.stockx.com/images/Nike-Dunk-Low-Retro-White-Black-2021-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1633027409'
              title='Nike Dunk Low Retro White Black'
              ethPrice={0.09}
              size={13}
            />
            <NikeItem 
              image='https://images.stockx.com/images/Nike-Dunk-Low-Retro-White-Black-2021-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1633027409'
              title='Nike Dunk Low Retro White Black'
              ethPrice={0.09}
              size={13}
            />
          </div>
          <div className='flex items-center justify-center align-middle -z-10'>
            <NikeItem 
              image='https://images.stockx.com/images/Nike-Dunk-Low-Retro-White-Black-2021-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1633027409'
              title='Nike Dunk Low Retro White Black'
              ethPrice={0.09}
              size={13}
            />
            <NikeItem 
              image='https://images.stockx.com/images/Nike-Dunk-Low-Retro-White-Black-2021-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1633027409'
              title='Nike Dunk Low Retro White Black'
              ethPrice={0.09}
              size={13}
            />
            <NikeItem 
              image='https://images.stockx.com/images/Nike-Dunk-Low-Retro-White-Black-2021-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1633027409'
              title='Nike Dunk Low Retro White Black'
              ethPrice={0.09}
              size={13}
            />
          </div>
      </div>
    </main>
  )
}

// const sampleProps: NikeBagItemProps[] = [
//   {
//     img: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/8061baec-449e-433b-89b3-8234dde499bd/air-jordan-1-mid-mens-shoes-FGLltd.png',
//     itemName: 'Nike Air Max 2090',
//     itemType: 'Mens Shoe',
//     itemSize: 'Size: 13',
//     ethPrice: '0.09'
//   },
// ]
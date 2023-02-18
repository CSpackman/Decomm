import { FormEvent, useEffect, useState } from 'react'
import { useMutation, useQuery } from '../convex/_generated/react'
import NikeItem from '../components/NikeItem'
import Navbar from '../components/Navbar'
import NikeBag from '../components/NikeBag'
import { NikeBagItemProps } from '../components/NikeBagItem'

export default function App() {
  const messages = useQuery('listMessages') || []

  const [newMessageText, setNewMessageText] = useState('')
  const sendMessage = useMutation('sendMessage')

  const [name, setName] = useState('user')

  useEffect(() => {
    setName('User ' + Math.floor(Math.random() * 10000))
  }, [])

  async function handleSendMessage(event: FormEvent) {
    event.preventDefault()
    setNewMessageText('')
    await sendMessage(newMessageText, name)
  }

  // Frontend State Management
  const [bagOpened, setBagOpened] = useState(false)


  return (
    <main>
      <div className='bg-slate-400 h-screen'>
        <Navbar items={1} setBagOpened={setBagOpened} bagOpened={bagOpened} />
        { bagOpened ? 
          // @todo: 
          <NikeBag NikeItems={sampleProps} setBagOpened={setBagOpened} bagOpened={bagOpened} /> : null }
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

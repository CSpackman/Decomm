import { FormEvent, useEffect, useState } from 'react'
import { useMutation, useQuery } from '../convex/_generated/react'
import NikeItem from '../components/NikeItem'
import Navbar from '../components/Navbar'
import NikeBag from '../components/NikeBag'

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
        { bagOpened ? <NikeBag /> : null }
      </div>
    </main>
  )
}

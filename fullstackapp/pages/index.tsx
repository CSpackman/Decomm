import { FormEvent, useEffect, useState } from 'react'
import { useMutation, useQuery } from '../convex/_generated/react'
import Item from '../components/Item'

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
  return (
    <main>
      <div className='bg-slate-400 h-screen'>
        <Item />
      </div>
    </main>
  )
}

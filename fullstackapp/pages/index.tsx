import { FormEvent, useEffect, useState } from 'react'
import { useMutation, useQuery } from '../convex/_generated/react'

export default function App() {
  const users = useQuery('listUsers') || []

  const [newMessageText, setNewMessageText] = useState('')
  const initUser = useMutation('user:initUser')

  function setCookie(wallet, firstName, lastName, shippingAddress, history, email) {
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
  
  function getCookie(cname) {
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
  
  function checkCookie(user) {
    let user = getCookie(user.wallet);
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

  return (
    <main>
      <h1>Convex Chat</h1>
      <p className="badge">
        <span>{name}</span>
      </p>
      {/* <ul>
        {users.map((user) => (
          <li key={user._id.toString()}>
            <span>{message.author}:</span>
            <span>{message.body}</span>
            <span>{new Date(message._creationTime).toLocaleTimeString()}</span>
          </li>
        ))}
      </ul> */}
      <form onSubmit={handleInitUsers}>
        <input
          value={newMessageText}
          onChange={(event) => setNewMessageText(event.target.value)}
          placeholder="Write a message…"
        />
        <input type="submit" value="Send" disabled={!newMessageText} />
      </form>
    </main>
  )
}

import { useState } from 'react'

import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './componenet/Login'
import Profile from './componenet/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
     <h1>Login</h1>
     <Login></Login>
     <Profile></Profile>
    </UserContextProvider>
  )
}

export default App

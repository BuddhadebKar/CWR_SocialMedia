
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LayOut from './components/molecules/LayOut'
import Chat from './components/molecules/Chat'
import Chats from './components/molecules/Chats'
import Feed from './components/molecules/Feed'
import Login from './components/molecules/Login'
import Register from './components/molecules/Register'
import Account from './components/molecules/Account'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LayOut></LayOut>}>
          <Route index element={<Feed />} />
          <Route path='Chat' element={<Chats />} />
          <Route path='/chat:chatid' element={<Chat />} />
          <Route path='account' element={<Account />} />
        </Route>
        
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

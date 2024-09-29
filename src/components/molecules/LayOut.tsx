import {  useNavigate, Outlet } from 'react-router-dom'
import Navbar from '../ui/navbar'
import { LogOut } from 'lucide-react'
import { signOut } from 'firebase/auth'
import { auth } from '../../lib/firebase'
import { Button } from '@nextui-org/button'

const LayOut = () => {
  const navigate = useNavigate()

  async function logOut() {
    signOut(auth).then(() => {
      navigate('/login')
    })
  }
  return (
    <div >
      <Button className='fixed z-50 top-4 right-4' color="success" onClick={logOut}><LogOut className='h-5'></LogOut>Log Out</Button>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>

  )
}

export default LayOut
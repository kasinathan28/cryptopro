import Image from 'next/image'
import { Inter } from 'next/font/google'
import Login from '@/modules/auth/views/login'
import Navbar from '@/modules/app/components/navbar/navbar'
import MainContainer from '@/modules/mainContainer/views/mainContainer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <MainContainer></MainContainer>      
    </div>
  )
}

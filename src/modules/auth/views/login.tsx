import Navbar from '@/modules/app/components/navbar/navbar'
import React from 'react'
import LoginForm from '../components/loginform/loginForm'
import style from "./login.module.css"


export default function LoginPage() {
  return (
    <div className={style.body}>
        <Navbar></Navbar>
        <LoginForm></LoginForm>
    </div>
  )
}

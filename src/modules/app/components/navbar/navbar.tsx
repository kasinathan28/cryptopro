import React from 'react'
import style from "./navbar.module.css"
import Logo from "../images/logo.png"
import Image from 'next/image'
import RoundButton from '../roundbutton/roundButton'
export default function Navbar() {
  return (
    <div className={style.navbar}>
      <Image src={Logo} className={style.img} alt='Logo'/>
      <h1 className={style.h1} >CoinGecko</h1>
      <div className={style.bar}></div>

      <div className={style.right}>
      <RoundButton buttonText="LOGIN"/>
      <RoundButton buttonText="SignUP"/>
      </div>
    </div>
  )
}


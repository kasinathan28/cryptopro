import React from 'react';
import style from "./navbar.module.css";
import Logo from "../images/logo.png";
import Image from 'next/image';
import RoundButton from '../roundbutton/roundButton';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();

  const handleLogin = () => {
    router.push('/login');
  }

  const handleSignup = () => {
    router.push('/signup');
  }


  return (
    <div className={style.navbar}>
      <Image src={Logo} className={style.img} alt='Logo' />
      <h1 className={style.h1}>CoinGecko</h1>
      <div className={style.bar}></div>

      <div className={style.right}>
        <RoundButton buttonText="LOGIN" onClick={handleLogin} />
        <RoundButton buttonText="SignUP"  onClick={handleSignup}/>
      </div>
    </div>
  );
}

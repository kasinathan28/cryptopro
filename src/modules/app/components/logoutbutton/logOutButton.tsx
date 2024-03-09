import React from 'react';
import style from './logOutButton.module.css';
import { useRouter } from 'next/router';

const LogOutButton = () => {
  const router = useRouter();

  const handleLogout = () => {
    window.localStorage.removeItem('username'); 

    router.push('/login');
  };

  return (
    <div>
      <button type="button" className={style.button} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default LogOutButton;


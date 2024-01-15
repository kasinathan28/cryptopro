import React, { useEffect, useState } from 'react';
import style from './container.module.css';

export default function ProfileContainer() {
  const [username, setUsername] = useState('');

  useEffect(() => {
    // Fetch username from localStorage
    const storedUsername = window.localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  return (
    <div>
      <div className={style.main}>
        <div className={style.child1}>
          <div className={style.desc}>
            <h1>Welcome back, {username}!</h1>
          </div>
          <div className={style.avatar}>{/* Add your avatar component here */}</div>
        </div>
        <div className={style.child2}>
          <h1>Additional details or content</h1>
        </div>
      </div>
    </div>
  );
}

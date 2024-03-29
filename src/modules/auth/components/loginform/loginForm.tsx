// components/LoginForm.tsx
import React, { useState, ChangeEvent, FormEvent } from 'react';
import style from './loginForm.module.css';
import { useRouter } from 'next/router';
import { login, LoginResponse } from '../../services/authService';

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const router = useRouter();

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    try {
      const response: LoginResponse = await login(username, password);
  
      if (response.success) {
        window.localStorage.setItem('username', username);
  
        console.log('Login successful');
        router.push('/dashboard');
      } else {
        setError(response.error || 'Invalid credentials');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('An unexpected error occurred');
    }
  };
  

  const handleSignup = () => {
    router.push('/signup');
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={style.form}>
        <h1 className={style.h1}>Welcome back..!</h1>
        <label className={style.label}>
          Username:
          <input
            className={style.input}
            type="text"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </label>
        <br />
        <label className={style.label}>
          Password:
          <input
            className={style.input}
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </label>
        {error && <p className={style.error}>{error}</p>}
        <br />

        <button type="submit" className={style.button}>
          Login
        </button>
        <p className={style.p}>
          Already have an account?{" "}
          <a className={style.a} onClick={handleSignup}>
            {" "}
            Signup
          </a>
        </p>
      </form>
    </div>
  );
}

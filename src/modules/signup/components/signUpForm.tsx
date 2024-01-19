// components/SignupForm.tsx
import React, { useState, ChangeEvent, FormEvent } from 'react';
import style from './signupForm.module.css';
import { useRouter } from 'next/router';
import { signup, SignupResponse } from '../services/signupService';

export default function SignupForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [currency, setCurrency] = useState('USD'); 
  const [error, setError] = useState('');

  const router = useRouter();

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleCurrencyChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setCurrency(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response: SignupResponse = await signup(username, password, currency);

      if (response.success) {
        window.localStorage.setItem('username', username);

        console.log('Signup successful');
        router.push('/login');
      } else {
        setError(response.error || 'Error during signup');
      }
    } catch (error) {
      console.error('Error during signup:', error);
      setError('An unexpected error occurred');
    }
  };

  const handleLogin = () => {
    router.push('/login');
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={style.form}>
        <h1 className={style.h1}>Create an account</h1>
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
        <br />
        <label className={style.label}>
          Currency:
          <select
            className={style.input}
            value={currency}
            onChange={handleCurrencyChange}
            required
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="INR">INR</option>
          </select>
        </label>
        {error && <p className={style.error}>{error}</p>}
        <br />

        <button type="submit" className={style.button}>
          Signup
        </button>
        <p className={style.p}>
          Already have an account?{' '}
          <a className={style.a} onClick={handleLogin}>
            {' '}
            Login
          </a>
        </p>
      </form>
    </div>
  );
}

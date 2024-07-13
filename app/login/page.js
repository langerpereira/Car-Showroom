"use client";

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import './styles/login.css'; // Ensure the path is correct

export default function Login() {
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    if (email === 'user@example.com' && password === 'password123') {
      window.location.href = '/';
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Login - LUXDRIVE</title>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
      </Head>
      <div className="flex flex-col min-h-screen bg-hero">
        <header className="bg-custom text-white py-4">
          <div className="container mx-auto flex justify-between items-center">
            <Image src="/images/vecteezy_vintage-car-logo-illustration-with_24558471.png" alt="Car Dealership" width={48} height={48} className="h-12" />
            <strong className="text-4xl">LUXDRIVE</strong>
            <nav className="hidden lg:flex space-x-4 text-2xl">
              <Link href="/about" className=" navlink">About Us</Link>
              <Link href="/login" className="navlink">Log in</Link>
              <Link href="/models" className="navlink">Models</Link>
            </nav>
            <div className="lg:hidden">
              <div className="hamburger" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
          <div id="mobileMenu" className="hidden" onClick={toggleMenu}>
            <div className="container mx-auto text-right">
              <button id="menu-close" className="text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <div className="container mx-auto py-4">
              <Link href="/about" className="block text-white hover:text-gray-300 py-2">About Us</Link>
              <Link href="/login" className="block text-white hover:text-gray-300 py-2">Log in</Link>
              <Link href="/models" className="block text-white hover:text-gray-300 py-2">Models</Link>
            </div>
          </div>
        </header>

        <main className="flex-grow py-20 my-7">
          <div className="container mx-14 px-4">
            <h1 className="text-4xl font-bold text-center mb-8 text-white">Login to LUXDRIVE</h1>
            <form id="loginForm" className="login-form " onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div>
                <label htmlFor="password" className="block">Password</label>
                <input type="password" id="password" name="password" required />
              </div>
              <button type="submit" className="mt-4">Login</button>
              {error && <div id="error" className="mt-2 text-red-500">{error}</div>}
            </form>
          </div>
        </main>

        <footer className="bg-custom text-white py-8">
          <div className="container mx-auto text-center">
            <p className="text-lg">&copy; 2024 LUXDRIVE. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('active');
}

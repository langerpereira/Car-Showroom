// app/page.client.js

"use client";

import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';
import gsap from 'gsap';
import SplitType from 'split-type';
import Link from 'next/link';

export default function Home() {
  useEffect(() => {
    const text = new SplitType("#text");
    const characters = document.querySelectorAll(".char");

    characters.forEach((char) => {
      char.classList.add("translate-y-full");
    });

    gsap.to(".char", {
      y: 0,
      stagger: 0.09,
      delay: 0.07,
      duration: 1.1,
    });

    // Toggle mobile menu
    const toggleMenu = () => {
      const menu = document.getElementById("mobile-menu");
      menu.classList.toggle("hidden");
    };

    // Close mobile menu
    const closeMenu = () => {
      const menu = document.getElementById("mobile-menu");
      menu.classList.add("hidden");
    };

    // Event listeners
    const menuToggle = document.getElementById("menu-toggle");
    const menuClose = document.getElementById("menu-close");

    if (menuToggle) {
      menuToggle.addEventListener("click", toggleMenu);
    }

    if (menuClose) {
      menuClose.addEventListener("click", closeMenu);
    }

    // Clean up listeners on unmount
    return () => {
      if (menuToggle) {
        menuToggle.removeEventListener("click", toggleMenu);
      }
      if (menuClose) {
        menuClose.removeEventListener("click", closeMenu);
      }
    };
  }, []);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="https://unpkg.com/split-type"></script>
        <title>Car Dealership</title>
        <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </Head>
      <div
        className="bg-[url('/images/pexels-sami-aksu-48867324-11189623.jpg')] bg-hero bg-no-repeat bg-cover bg-center bg-fixed overflow-hidden"
      >
        <div className="bg-hero h-screen flex flex-col">
          <header className="navbar flex justify-between items-center p-4 relative">
            <Image
              src="/images/vecteezy_vintage-car-logo-illustration-with_24558471.png"
              alt="Car Dealership"
              width={48}
              height={48}
              className="h-12"
            />
            <div className="hidden lg:block">
              <Link href="/about" className="navlink">About Us</Link>
              <Link href="/login" className="navlink">Log in</Link>
              <Link href="/models" className="navlink">Models</Link>
            </div>
            <div className="lg:hidden z-50">
              <button id="menu-toggle" className="text-white">
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>
          </header>
          <div
            id="mobile-menu"
            className="hidden lg:hidden fixed inset-0 bg-black bg-opacity-75 text-white p-4 z-40 backdrop-blur flex flex-col justify-center items-center"
          >
            <button id="menu-close" className="absolute top-4 right-4 text-white p-4">
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            <Link href="/about.html"> <a className="block navlink text-2xl mb-4">About Us</a></Link>
            <Link href="/login.html"> <a className="block navlink text-2xl mb-4">Log in</a></Link>
            <Link href="/models"> <a className="block navlink text-2xl">Models</a></Link>
          </div>
          <div className="flex-grow flex flex-col justify-center items-center text-center">
            <p className="text-4xl md:text-8xl text-cyan-300 font-semibold">
              The Best Dealership
            </p>
            <p className="text-2xl md:text-5xl text-cyan-200 p-10">In the World</p>
            <p
              id="text"
              className="text-6xl md:text-[13rem] text-cyan-50 font-bold"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
            >
              LUXDRIVE
            </p>
          </div>
          <div className="flex justify-center pb-12">
            <Link href="/models"> <a className="btn-sm btn inventory">Browse Models</a> </Link>
          </div>
        </div>
      </div>
    </>
  );
}

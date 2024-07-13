// app/about.client.js

"use client";

import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';
import gsap from 'gsap';
import SplitType from 'split-type';
import Link from 'next/link';

export default function About() {
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
        <title>About Us - Car Dealership</title>
        <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </Head>
      <div
        className="bg-[url('/images/pexels-sami-aksu-48867324-11189623.jpg')] bg-hero bg-no-repeat bg-cover bg-center bg-fixed "
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
              <Link href="/about"> <a className="navlink">About Us</a> </Link>
              <Link href="/login.html"> <a className="navlink">Log in</a> </Link>
              <Link href="/models"> <a className="navlink">Models</a> </Link>
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
            <Link href="/about"> <a className="block navlink text-2xl mb-4">About Us</a> </Link>
            <Link href="/login"> <a className="block navlink text-2xl mb-4">Log in</a> </Link>
            <Link href="/models"> <a className="block navlink text-2xl">Models</a> </Link>
          </div>
          <div className="flex-grow flex flex-col justify-center items-center text-center text-white text-2xl">
            <div className="container mx-auto px-4 py-16">
              <div className="about-content">
                <h1 className="text-4xl font-bold mb-4">About Us</h1>
                <p className=" mb-4">
                  Welcome to LUXDRIVE, your premier destination for luxury car dealerships. Established in 2024, we have been providing our customers with the best dealership experience, offering a wide range of high-end vehicles to meet all your transportation needs.
                </p>
                <p className="text-2xl mb-4">
                  Our mission is to deliver exceptional service, ensuring that every ride with LUXDRIVE is smooth, comfortable, and luxurious. Whether you're looking for a car for a special occasion, a business trip, or simply to enjoy a premium driving experience, we have the perfect vehicle for you.
                </p>
                <h2 className="text-3xl font-bold mb-2">Our Values</h2>
                <ul className="list-disc pl-6 text-2xl mb-4">
                  <li>Customer Satisfaction: We prioritize our customers' needs and strive to exceed their expectations.</li>
                  <li>Quality: We maintain a fleet of well-maintained, high-performance vehicles.</li>
                  <li>Integrity: We operate with honesty and transparency in all our dealings.</li>
                  <li>Innovation: We continuously seek to improve our services and stay ahead of industry trends.</li>
                </ul>
                <h2 className="text-3xl font-bold mb-2">Meet the Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                  <div className="text-center">
                    <img src="/images/thumbs-transformed-removebg-preview.png" alt="Team Member 1" className="mx-auto rounded-full h-32 w-32 mb-4" />
                    <h3 className="text-xl font-bold mb-1">Langer</h3>
                    <p className="text-lg">Founder & CEO</p>
                  </div>
                  <div className="text-center">
                    <img src="/images/thumbs-transformed-removebg-preview.png" alt="Team Member 2" className="mx-auto rounded-full h-32 w-32 mb-4" />
                    <h3 className="text-xl font-bold mb-1">Jane</h3>
                    <p className="text-lg">Chief Operating Officer</p>
                  </div>
                  <div className="text-center">
                    <img src="/images/thumbs-transformed-removebg-preview.png" alt="Team Member 3" className="mx-auto rounded-full h-32 w-32 mb-4" />
                    <h3 className="text-xl font-bold mb-1">Emily</h3>
                    <p className="text-lg">Marketing Director</p>
                  </div>
                </div>
                <div className="text-center">
                  <Link href="/"> <a className="bg-blue-500 text-white px-6 py-3 rounded-md text-3xl">Get in Touch</a></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

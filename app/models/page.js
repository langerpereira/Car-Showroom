"use client";

import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';
import gsap from 'gsap';
import SplitType from 'split-type';
import Link from 'next/link';

export default function Home() {
  useEffect(() => {
    // Wait for DOM to be ready
    document.addEventListener('DOMContentLoaded', function() {
      // Toggle mobile menu
      const menuToggle = document.getElementById("menu-toggle");
      const menuClose = document.getElementById("menu-close");
      const mobileMenu = document.getElementById("mobile-menu");

      if (menuToggle && menuClose && mobileMenu) {
        const toggleMenu = function () {
          mobileMenu.classList.toggle("hidden");
        };

        const closeMenu = function () {
          mobileMenu.classList.add("hidden");
        };

        menuToggle.addEventListener("click", toggleMenu);
        menuClose.addEventListener("click", closeMenu);

        // Clean up listeners on unmount
        return () => {
          menuToggle.removeEventListener("click", toggleMenu);
          menuClose.removeEventListener("click", closeMenu);
        };
      }
    });

    // GSAP animations and SplitType initialization
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
  }, []);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Car Dealership</title>
      </Head>
      <header className="navbar">
        <Image
          src="/images/vecteezy_vintage-car-logo-illustration-with_24558471.png"
          alt="Car Dealership"
          width={48}
          height={48}
          className="h-12"
        />
        <div className="hidden lg:block">
          <Link href="#Rolls-royce" className="navlink">Rolls-Royce</Link>
          <Link href="#model3" className="navlink">Model 3</Link>
          <Link href="#bently_gt" className="navlink">Bently-Gt</Link>
          <Link href="#modelY" className="navlink">Model Y</Link>
          <Link href="#bugatti" className="navlink">Bugatti</Link>
          <Link href="#Porsche_gt" className="navlink">Porsche Gt3 rs</Link>
        </div>
        <div>
          <Link href="/" className="navlink">Home</Link>
        </div>
      </header>
      <section id="Rolls-royce" className="car_section">
        <Image
          src="/images/Rolls-Royce-Computer-Wallpaper-4k.jpg"
          alt="Rolls-royce image"
          width={1920}
          height={1080}
          className="car_img"
        />
        <div className="car_details transform_50">
          <h1 className="model_name1">Rolls-Royce</h1>
          <h2 style={{ color: "white" }}>
            Order online for
            <span className="underline cursor-pointer">touchless Delivery</span>
          </h2>
        </div>
        <div className="car_buttons transform_50">
          <Link href="/" className="btn">Custom order</Link>
          <button className="btn inventory">Existing Inventory</button>
        </div>
        <a href="#model3">
          <svg
            className="down_svg"
            viewBox="0 0 30 30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke="var(--tds-icon--fill, #171a20)"
              strokeWidth="1.5"
              d="m19.5 12.5-4.5 4-4.5-4"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </section>
      <section id="model3" className="car_section">
        <Image src="/images/Model3.jpg" alt="model3 image" width={1920} height={1080} className="car_img" />
        <div className="car_details transform_50">
          <h1 className="model_name">Model 3</h1>
          <h2>
            Order online for
            <span className="underline cursor-pointer">touchless Delivery</span>
          </h2>
        </div>
        <div className="car_buttons transform_50">
          <Link href="/" className="btn">Custom order</Link>
          <button className="btn inventory">Existing Inventory</button>
        </div>
        <a href="#bently_gt">
          <svg
            className="down_svg"
            viewBox="0 0 30 30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke="var(--tds-icon--fill, #171a20)"
              strokeWidth="1.5"
              d="m19.5 12.5-4.5 4-4.5-4"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </section>
      <section id="bently_gt" className="car_section">
        <Image
          src="/images/bentley_continental_gt_pikes_peak_2019_4k_8k-1920x1080.jpg"
          alt="bently_gt image"
          width={1920}
          height={1080}
          className="car_img"
        />
        <div className="car_details transform_50">
          <h1 className="model_name">Bently-Gt</h1>
          <h2 className="text-white">
            Order online for
            <span className="underline cursor-pointer">touchless Delivery</span>
          </h2>
        </div>
        <div className="car_buttons transform_50">
          <Link href="/" className="btn" style={{ paddingTop: "10px" }}>Custom order</Link>
          <button className="btn inventory">Existing Inventory</button>
        </div>
        <a href="#modelY">
          <svg
            className="down_svg"
            viewBox="0 0 30 30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke="var(--tds-icon--fill, #171a20)"
              strokeWidth="1.5"
              d="m19.5 12.5-4.5 4-4.5-4"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </section>
      <section id="modelY" className="car_section">
        <Image src="/images/ModelY.jpg" alt="modelY image" width={1920} height={1080} className="car_img" />
        <div className="car_details transform_50">
          <h1 className="model_name">Model Y</h1>
          <h2>
            Order online for
            <span className="underline cursor-pointer">touchless Delivery</span>
          </h2>
        </div>
        <div className="car_buttons transform_50">
          <Link href="/" className="btn">Custom order</Link>
          <button className="btn inventory">Existing Inventory</button>
        </div>
        <a href="#bugatti">
          <svg
            className="down_svg"
            viewBox="0 0 30 30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke="var(--tds-icon--fill, #171a20)"
              strokeWidth="1.5"
              d="m19.5 12.5-4.5 4-4.5-4"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </section>
      <section id="bugatti" className="car_section">
        <Image
          src="/images/black_bugatti_chiron_5k-3840x2160.jpg"
          alt="bugatti"
          width={1920}
          height={1080}
          className="car_img"
        />
        <div className="car_details transform_50">
          <h1 className="model_name1">Bugatti</h1>
          <h2 className="text-white">
            Order online for
            <span className="underline cursor-pointer">touchless Delivery</span>
          </h2>
        </div>
        <div className="car_buttons transform_50">
          <Link href="/" className="btn">Custom order</Link>
          <button className="btn inventory">Existing Inventory</button>
        </div>
        <a href="#Porsche_gt">
          <svg
            className="down_svg"
            viewBox="0 0 30 30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke="var(--tds-icon--fill, #171a20)"
              strokeWidth="1.5"
              d="m19.5 12.5-4.5 4-4.5-4"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </section>
      <section id="Porsche_gt" className="car_section">
        <Image
          src="/images/porsche_911_gt3_5k_2-3840x2160.jpg"
          alt="Porsche_gt"
          width={1920}
          height={1080}
          className="car_img"
        />
        <div className="car_details transform_50">
          <h1 className="model_name1">Porsche Gt3 rs</h1>
          <h2 className="text-white">
            Order online for
            <span className="underline cursor-pointer">touchless Delivery</span>
          </h2>
        </div>
        <div className="car_buttons transform_50">
          <Link href="/" className="btn">Custom order</Link>
          <button className="btn inventory">Existing Inventory</button>
        </div>
        <a href="#Rolls-royce">
          <svg
            className="down_svg"
            viewBox="0 0 30 30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke="var(--tds-icon--fill, #171a20)"
              strokeWidth="1.5"
              d="m19.5 12.5-4.5 4-4.5-4"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </section>
      <footer className="footer-content py-16 bg-black text-white">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
            <h3 className="text-xl font-bold mb-2">Contact Us</h3>
            <p>123 Street, City</p>
            <p>info@luxdrive.com</p>
            <p>+91 456 7890</p>
          </div>
          <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
            <h3 className="text-xl font-bold mb-2">Follow Us</h3>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
          </div>
          <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
            <h3 className="text-xl font-bold mb-2">Links</h3>
            <Link href="#">Privacy Policy</Link><br />
            <Link href="#">Terms of Service</Link><br />
            <Link href="#">FAQs</Link><br />
          </div>
          <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
            <h3 className="text-xl font-bold mb-2">Newsletter</h3>
            <p>Subscribe to our newsletter for updates.</p>
            <form action="#" method="POST" className="mt-2">
              <input
                type="email"
                name="email"
                placeholder="Your email"
                className="bg-gray-200 px-4 py-2 rounded-md w-full"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-md"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="text-center mt-8">
          <p>&copy; 2024 LUXDRIVE. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

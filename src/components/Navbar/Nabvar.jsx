"use client";
import Link from "next/link";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Navlink from "./NavLinnk";
import { MenuOverlay } from "../MenuOverlay/MenuOverlay";
import Image from "next/image";

const navLinks = [
  {
    title: "Home",
    path: "/home",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

export const Navbar = () => {
  const [navbarOpen, setNabvarOpen] = useState(false);

  return (
    <>
      <nav className="fixed mx-auto border border-[#33353f] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100  ">
        <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2 ">
          <Link
            href={"/"}
            className="text-2xl md:text-5xl text-white font-semibold "
          >
            <img src='https://i.ibb.co/BLrhGNj/Captura-desde-2024-05-27-08-20-49.png' alt="Logo" width={150} height={200} />
          </Link>
          <div className=" mobile-menu block md:hidden">
            {!navbarOpen ? (
              <button
                onClick={() => setNabvarOpen(true)}
                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white "
              >
                <Bars3Icon className="h-5 w-5" />
              </button>
            ) : (
              <button
                onClick={() => setNabvarOpen(false)}
                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white "
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            )}
          </div>
          <div className="menu hidden md:block md:w-auto" id="navbar">
            <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
              {navLinks.map((link, id) => (
                <li
                  key={id}
                >
                  <Navlink href={link.path} title={link.title} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
      </nav>
    </>
  );
};

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Container from "../Container";

export interface IHeaderProps {}

export default function Header({}: IHeaderProps) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Services", url: "/services" },
    { name: "Pricing", url: "/pricing" },
    { name: "Contact", url: "/contact" },
  ];
  return (
    <header className="header">
      <Container>
        <nav className="flex flex-wrap items-center justify-between py-5 w-full">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/header-logo.png"
              className="h-8 mr-3 object-contain"
              alt="Emi Ninja"
              width={34}
              height={34}
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              EmiNinja
            </span>
          </Link>

          {/* Toggle Button */}
          <button
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-expanded="false"
            onClick={handleMenuToggle}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>

          {/* Menu */}
          <div
            className={`nav-collapse ${
              isOpen ? "max-md:scale-y-100" : "max-md:scale-y-0"
            }`}
          >
            <ul className="font-medium flex max-md:flex-col md:gap-5">
              {navItems.map(({ name, url }) => {
                return (
                  <li
                    key={name}
                    className="max-md:flex max-md:border-b max-md:px-5 max-md:border-gray-700 max-md:py-3"
                  >
                    <a
                      href={url}
                      className={`flex w-full hover:text-blue-500 ${
                        router.asPath === url
                          ? "text-blue-500"
                          : "text-gray-200"
                      } `}
                      aria-current="page"
                    >
                      {name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </Container>
    </header>
  );
}

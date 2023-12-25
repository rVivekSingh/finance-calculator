import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Container from "../Container";
import { FaBars, FaMoon, FaTimes } from "react-icons/fa";
import { BiSun } from "react-icons/bi";

export interface IHeaderProps {}

export const navItems = [
  { name: "Home", url: "/" },
  { name: "Calculators", url: "/calculators" },
  { name: "Rent Recipt Generator", url: "/rent-recipt-generator" },
  { name: "About", url: "/about" },
  { name: "Contact", url: "/contact" },
];

export default function Header({}: IHeaderProps) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const { theme, setTheme } = useTheme();

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <header className="header">
      <Container>
        <nav className="flex flex-wrap items-center justify-between py-5 w-full">
          {/* Logo */}
          <Link href="/" className="flex items-center text-gray-200">
            <Image
              title="hero-logo"
              src="/images/header-logo.png"
              className="h-8 mr-3 object-contain"
              alt="Emi Ninja"
              width={34}
              height={34}
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              EmiNinja
            </span>
          </Link>

          {/* Toggle Button */}
          <div className="nav-toggle-btn">
            <button className="text-lg" onClick={handleMenuToggle}>
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Menu */}
          <div className={`nav-collapse ${isOpen ? "active touch-none" : ""}`}>
            <ul>
              {navItems.map(({ name, url }, i) => {
                return (
                  <li
                    key={name}
                    className="nav-item"
                    onClick={handleMenuToggle}
                    style={{
                      transitionDuration: `${(i + 1) * 0.2}s`,
                    }}
                  >
                    <Link
                      href={url}
                      className={`${
                        router.asPath === url
                          ? "text-blue-500"
                          : "text-gray-200"
                      } `}
                      aria-current="page"
                    >
                      {name}
                    </Link>
                  </li>
                );
              })}

              <li className={`nav-theme-icon`} onClick={toggleTheme}>
                {theme === "light" ? <FaMoon /> : <BiSun />}
              </li>
            </ul>
          </div>
        </nav>
      </Container>
    </header>
  );
}

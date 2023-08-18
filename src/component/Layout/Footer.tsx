// https://flowbite.com/docs/components/footer/

import Image from "next/image";
import Link from "next/link";
import { FaCopyright } from "react-icons/fa";
import Container from "../Container";
import { navItems } from "./Header";

type Props = {};

function Footer({}: Props) {
  return (
    <footer className="relative bg-gray-900 text-gray-200">
      <nav className="px-4 py-10 md:py-16">
        <Container>
          <div className="grid grid-cols-4 gap-8">
            <div className="col-span-2">
              <Link href="/" className="flex items-center">
                <Image
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

              <p className="mt-5 leading-7 max-w-sm text-gray-200">
                Welcome to EmiNinja Financial Calculators! Empower your
                financial decisions with our suite of easy-to-use and accurate
                financial calculators.
              </p>
            </div>

            <div>
              {navItems.map(({ name, url }) => {
                return (
                  <p key={name}>
                    <Link href={url} className='text-gray-200 hover:text-blue-500'>{name}</Link>
                  </p>
                );
              })}
            </div>

            <div></div>
          </div>
        </Container>
      </nav>
      <nav className="p-4 bg-gray-800 text-center md:p-5">
        <span className="flex items-center justify-center  sm:text-center">
          <FaCopyright className="mr-1" /> 2022 - {new Date().getFullYear()}{" "}
          EmiNinja. All Rights Reserved, Built with{" "}
          <span className="mx-2">❤️</span> in India
        </span>
      </nav>
    </footer>
  );
}

export default Footer;

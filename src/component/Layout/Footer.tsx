// https://flowbite.com/docs/components/footer/

type Props = {};

function Footer({}: Props) {
  return (
    <footer className="p-4 bg-gray-200 text-center md:p-6">
      <span className=" text-gray-700 sm:text-center">
        © 2022{" "}
        <a href="https://SonicSoft.xyz/" className="underline">
          SonicSoft
        </a>
        . All Rights Reserved.
      </span>
      {/* <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 sm:mt-0">
        <li>
          <a href="mailto:schooldetails@gmail.com" className="hover:underline">
            Contact
          </a>
        </li>
      </ul> */}
    </footer>
  );
}

export default Footer;

// https://flowbite.com/docs/components/footer/

type Props = {};

function Footer({}: Props) {
  return (
    <footer className="p-4 bg-slate-800 text-center md:p-6">
      <span className=" text-gray-400 sm:text-center">
        © {new Date().getFullYear() }{" "}
        <a href="https://SonicSoft.xyz/" className="underline">
          SonicSoft
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
}

export default Footer;

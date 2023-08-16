// https://flowbite.com/docs/components/footer/

type Props = {};

function Footer({}: Props) {
  return (
    <footer className="p-4 bg-slate-900 text-center md:p-5">
      <span className=" text-gray-400 sm:text-center">
        © {new Date().getFullYear() }{" "}
        <a href="https://Emininja.com" className="underline">
          EmiNinja
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
}

export default Footer;

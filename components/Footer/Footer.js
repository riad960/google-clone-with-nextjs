import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex justify-center absolute bottom-0 p-5 right-0 left-0 items-center text-gray-600">
      Copyright &copy;{" "}
      <Link href="https://riad960.github.io/My-portfolio">
        <p className="hover:underline px-2   text-blue-400">
          Riad Ahmed Roni{" "}
          <span className="text-gray-600"> {new Date().getFullYear()}</span>
        </p>
      </Link>
    </div>
  );
};

export default Footer;

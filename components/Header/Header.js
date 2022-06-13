import Link from "next/link";
import User from "../User/User";

const Header = () => {
  return (
    <nav className="flex justify-between p-5 text-sm text-gray-700">
      {/* left side  */}
      <div className="flex space-x-4 items-center">
        <div className="link">
          {" "}
          <Link className="" href="/">
            About
          </Link>
        </div>
        <div className="link">
          <Link href="/">Store</Link>
        </div>
      </div>
      {/* right side  */}
      <div className="flex space-x-4 items-center">
        <div className="link">
          <Link href="/">Image</Link>
        </div>
        <div className="link">
          <Link href="https://mail.google.com/">Gmail</Link>
        </div>
        <User />
      </div>
    </nav>
  );
};

export default Header;

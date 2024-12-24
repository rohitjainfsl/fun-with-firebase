import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="px-12 h-12 flex items-center justify-between bg-slate-600 text-white">
      <h1 className="text-2xl font-bold">
        <Link to="/">Firebase</Link>
      </h1>
      <ul className="flex">
        <li className="px-2 mx-2">
          <Link className="inline-block w-full" to="/">
            About
          </Link>
        </li>
        <li className="px-2 mx-2">
          <Link className="inline-block w-full" to="/">
            Contact
          </Link>
        </li>
        <li className="px-2 mx-2">
          <Link className="inline-block w-full" to="/">
            Cart
          </Link>
        </li>
        <li className="px-2 mx-2">
          <Link className="inline-block w-full" to="/login">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

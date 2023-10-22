import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-900 py-5 text-white">
      <div className="mx-auto w-4/5 flex justify-between">
        <div className="font-black text-2xl">Goal App</div>
        <div className="">
          <ul>
            <li className="flex">
              <Link to={"/"} className="px-5">
                Welcome
              </Link>
              <Link to={"/goals"} className="px-5">
                Goals
              </Link>
              <Link to={"/goals/add"} className="px-5">
                Add A Goal
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

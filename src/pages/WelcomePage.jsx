import React from "react";
import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <div className="h-[500px] bg-blue-600 text-white flex justify-center items-center">
      <div className="">
        <h1 className="text-5xl font-semibold mb-20">Welcome To Goal App</h1>
        <Link
          to={"/goals"}
          className="bg-blue-900 text-white flex justify-center py-3"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default WelcomePage;

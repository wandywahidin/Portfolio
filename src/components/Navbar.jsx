import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [togle, setTogle] = useState(false);
  const handleTogle = () => {
    setTogle(!togle);
  };

  return (
    <div className="w-full fixed h-[75px] flex justify-between px-8 items-center text-gray-300 bg-[#0a192f]">
      {/* logo */}
      <div className=" cursor-pointer">
        <Link to="home" smooth={true} duration={500} >
          <h1 className="text-2xl md:text-4xl text-[#00ff00] font-bold ">My Portfolio</h1>
        </Link>
      </div>

      {/* menu */}
      <ul className="hidden md:flex md:gap-4 md:text-xl cursor-pointer">
        <li>
          <Link
            className=" hover:text-[#00ff00]"
            to="home"
            smooth={true}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className=" hover:text-[#00ff00]"
            to="about"
            smooth={true}
            duration={500}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className=" hover:text-[#00ff00]"
            to="skills"
            smooth={true}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            className=" hover:text-[#00ff00]"
            to="work"
            smooth={true}
            duration={500}
          >
            Work
          </Link>
        </li>
        <li>
          <Link
            className=" hover:text-[#00ff00]"
            to="contact"
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* hamburger */}
      <div onClick={() => handleTogle()} className="md:hidden z-10">
        {!togle ? <FaBars size={28} /> : <FaTimes size={28}  />}
      </div>

      {/* mobile menu */}
      <ul
        className={
          !togle
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-[#0a192f]"
        }
      >
        <li className='py-6 text-3xl'>
          <Link
            className=" hover:text-[#00ff00]"
            to="home"
            smooth={true}
            duration={500}
            onClick={() => handleTogle()}
          >
            Home
          </Link>
        </li>
        <li className='py-6 text-3xl'>
          <Link
            className=" hover:text-[#00ff00]"
            to="about"
            smooth={true}
            duration={500}
            onClick={() => handleTogle()}
          >
            About
          </Link>
        </li>
        <li className='py-6 text-3xl'>
          <Link
            className=" hover:text-[#00ff00]"
            to="skills"
            smooth={true}
            duration={500}
            onClick={() => handleTogle()}
          >
            Skills
          </Link>
        </li>
        <li className='py-6 text-3xl'>
          <Link
            className=" hover:text-[#00ff00]"
            to="work"
            smooth={true}
            duration={500}
            onClick={() => handleTogle()}
          >
            Work
          </Link>
        </li>
        <li className='py-6 text-3xl'>
          <Link
            className=" hover:text-[#00ff00]"
            to="contact"
            smooth={true}
            duration={500}
            onClick={() => handleTogle()}
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* social icons */}
      <div className="hidden"></div>
    </div>
  );
};

export default Navbar;

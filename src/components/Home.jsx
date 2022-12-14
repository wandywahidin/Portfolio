import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import wandy from "../assets/wandy.png";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full min-h-screen bg-[#0a192f] flex flex-col-reverse pt-8 md:flex-row items-center justify-center"
    >
      {/* container */}
      <div className=" max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#00ff00]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Wandy Wahidin
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Front-End Developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I'm a front-end developer spesializing in React.js. I have 2 years
          experience in javascript and currently, I'm focused on building
          responsive website with react and tailwind
        </p>
        <div className="flex gap-3 cursor-pointer">
          <Link
            to="work"
            smooth={true}
            duration={500}
            className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#00ff00] rounded hover:shadow-md hover:font-bold hover:shadow-white hover:text-white md:w-[24%] w-[53%]"
          >
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </Link>
          <a href="https://wa.me/6287725499208?text=Hallo,%20Saya%20tertarik%20dengan%20profil%20anda" rel="noopener noreferrer" target="_blank" className="text-white group border-2 px-6 py-3 my-2 flex items-center shadow-md rounded shadow-[#00ff00] border-[#00ff00] md:w-[17%] w-[38%] hover:bg-white hover:text-gray-800">Hire Me</a>
        </div>
      </div>
      <div>
        <img src={wandy} alt="wandy" />
      </div>
    </div>
  );
};

export default Home;

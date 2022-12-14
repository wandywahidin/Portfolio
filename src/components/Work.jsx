import React from "react";
import WorkImg from "../assets/movie.png";
import realEstate from "../assets/pokeFake.png";
import mudaMandiri from "../assets/mudaMandiri.png";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen min-h-screen text-gray-300 bg-[#0a192f] flex flex-col justify-center items-center">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="py-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#00ff00]">
            Work
          </p>
          <p className="py-6">// Check out some of my recent work</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-4">
          {/* Grid Item */}
          <div
            style={{
              backgroundImage: `url(${WorkImg})`,
              backgroundSize: "cover",
            }}
            className="shadow-md shadow-[#00ff00] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 bg-[#00ff00] rounded h-full w-full text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                Movie App
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://pair-13-dts-mini-project.netlify.app/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/wandywahidin/pair-13-dts-mini-project.git" rel="noopener noreferrer" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${realEstate})`,
              backgroundSize: "cover",
            }}
            className="shadow-md shadow-[#00ff00] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 bg-[#00ff00] rounded w-full h-full text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                Pokemon Card
              </span>
              <div className="pt-8 text-center">
                <a href="https://152235865101195-dts-final-project.netlify.app/" rel="noopener noreferrer" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/wandywahidin/152235865101195-dts-final-project.git" rel="noopener noreferrer" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{
              backgroundImage: `url(${mudaMandiri})`,
              backgroundSize: "cover",
            }}
            className="shadow-md shadow-[#00ff00] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 bg-[#00ff00] rounded w-full h-full text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                Karang Taruna Muda Mandiri
              </span>
              <div className="pt-8 text-center">
                <a href="https://muda-mandiri.netlify.app/" rel="noopener noreferrer" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/wandywahidin/muda-mandiri.git" rel="noopener noreferrer" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;

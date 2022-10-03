import React from "react";
import DevImage from "../assets/me.jpg";
// import * as RctIcons from "react-icons/cg";
import * as FaIcons from "react-icons/fa";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-2xl sm:text-6xl font-bold text-white">
            I'm a React Developer{" "}
          </h2>

          <p className="text-gray-500 py-4 max-w-md">
            Hi!, i am Familiar with ReactJS for building and designing the U I
            Currently, I love to work on web application using technologies like
            React and Tailwind
          </p>

          <div>
            <button className=" group text-white w-fit px-5 py-2 flex items-center rounded-md bg-gradient-to-r from-sky-900 to-cyan-900 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-500">
                <FaIcons.FaHandPointRight size={20} className="ml-2" />
              </span>
            </button>
          </div>
        </div>
        <div>
          <img
            src={DevImage}
            alt="DeveloperProfile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

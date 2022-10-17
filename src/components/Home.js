import React from "react";
import FedevImage from "../assets/me.jpg";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-2xl sm:text-6xl font-bold text-white">
            I'm a ReactJS Developer
          </h2>

          <p className="text-gray-500 py-4 max-w-md">
            Hi!, T am Familiar with ReactJS for building and designing the U I
            Currently, I love to work on web application using technologies like
            React and Tailwind CSS.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className=" group text-white w-fit px-5 py-2 flex items-center rounded-md bg-gradient-to-r from-sky-900 to-cyan-900 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-500">
                <AiIcons.AiOutlineRight size={12} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={FedevImage}
            alt="FrontEnd Developer"
            className="mx-auto rounded-xl w-1/2 md:w-1/2"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

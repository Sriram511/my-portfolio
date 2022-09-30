import React from "react";
import MyImage from "../assets/me.jpg";
import * as RctIcons from "react-icons/cg";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black to-gray-800 text-gray-400"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div>
          <h2>I'm a FrontEnd React Developer</h2>

          <p>
            Hi!, i am Familiar with ReactJS for building and designing UI's .
            Currently, I love to work on web application using technologies like
            React and Tailwind
          </p>

          <div>
            <button>
              Portfolio
              <span>
                <RctIcons.CgArrowRight />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

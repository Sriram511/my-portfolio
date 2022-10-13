import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import tailwind from "../assets/tailwindCss.png";
import react from "../assets/react.png";
// import redux from "../assets/redux.png";
import node from "../assets/node.png";
import python from "../assets/python.png";
// import flask from "../assets/flask.png";
import mongodb from "../assets/mongodb.png";
import sql from "../assets/sql.png";
import git from "../assets/git.png";
import github from "../assets/github.png";
import postman from "../assets/postman.png";
// import sass from "../assets/sass.png";

const Experience = () => {
  const techTools = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-600",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JAVASCRIPT",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: tailwind,
      title: "TAILWIND",
      style: "shadow-sky-400",
    },
    // {
    //   id: 5,
    //   src: sass,
    //   title: "SASS",
    //   style: "shadow-pink-400",
    // },
    {
      id: 6,
      src: react,
      title: "REACT",
      style: "shadow-sky-400",
    },
    // {
    //   id: 7,
    //   src: redux,
    //   title: "REDUX",
    //   style: "shadow-purple-500",
    // },
    {
      id: 8,
      src: node,
      title: "NODEJS",
      style: "shadow-green-500",
    },
    {
      id: 9,
      src: python,
      title: "PYTHON",
      style: "shadow-yellow-500",
    },
    {
      id: 10,
      src: mongodb,
      title: "MONGODB",
      style: "shadow-green-500",
    },
    {
      id: 11,
      src: sql,
      title: "SQL",
      style: "shadow-blue-500",
    },
    {
      id: 12,
      src: git,
      title: "GIT",
      style: "shadow-red-500",
    },
    {
      id: 13,
      src: github,
      title: "GITHUB",
      style: "shadow-gray-500",
    },
    {
      id: 14,
      src: postman,
      title: "POSTMAN API-TOOL",
      style: "shadow-orange-600",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-full"
    >
      <div className="max-w-screen-lg mx-auto p-4 py-24 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500  inline">
            Experience
          </p>
          <p className="py-24">
            These are the Technologies and Tools I've Worked with
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-0 px-12 sm:px-0">
          {techTools.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-0 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;

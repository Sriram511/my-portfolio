import React from "react";
// import chatApp from "../assets/portfolio/chatApp.png";
import crudApp from "../assets/portfolio/crud.png";
import weatherPY from "../assets/portfolio/weatherPY.png";
// import eCommerce from "../assets/portfolio/eCommerce.png";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      src: crudApp,
      title: "Student Management System",
    },
    {
      id: 2,
      src: weatherPY,
      title: "Weather Application Python",
    },
    // {
    //   id: 3,
    //   src: chatApp,
    // },
    // {
    //   id: 4,
    //   src: eCommerce,
    // },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b py-24 from-black to-gray-800 text-white w-full md:h-full"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-20">
            Check out My Successfully Completed Projects & OnGoing Projects
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src, title }) => (
            <div className="shadow-md shadow-gray-500 rounded-lg">
              <img
                src={src}
                alt="My Chat Application onGoing Project"
                className="rounded-md duration-300 hover:scale-105"
              />
              <div>
                <button className="w-1/2 px-6 py-3 duration-200 hover:scale-105">
                  {title}
                </button>
                <button className="w-1/2 px-6 py-3 font-bold duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

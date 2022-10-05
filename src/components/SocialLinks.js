import React from "react";
// This is for linked in & Github & Resume
import * as FaIcons from "react-icons/fa";
// This is for Mail
import * as HiIcons from "react-icons/hi";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaIcons.FaLinkedin size={30} />
        </>
      ),
      href: "https://linkedin.com",
      style: "rounded-tr-md",
    },

    {
      id: 2,
      child: (
        <>
          GITHUB <FaIcons.FaGithubSquare size={30} />
        </>
      ),
      href: "https://github.com",
    },

    {
      id: 3,
      child: (
        <>
          Mail <HiIcons.HiOutlineMailOpen size={30} />
        </>
      ),
      href: "mailto: bachelorofphotography@gmail.com",
    },

    {
      id: 4,
      child: (
        <>
          Resume <FaIcons.FaWpforms size={30} />
        </>
      ),
      href: "",
      style: "rounded-br-md",
    },
  ];

  return (
    <div className="flex flex-col top-[35%] left-0 fixed">
      <ul>
        <li className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-500 bg-sky-900">
          <a
            href="https://www.google.com"
            className="flex justify-between items-center w-full text-white"
          >
            <>
              LinkedIn <FaIcons.FaLinkedin size={30} />
            </>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;

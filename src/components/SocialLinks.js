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
      href: "https://www.linkedin.com/in/lakshmi-narasimhan-7405221a9/",
      style: "rounded-tr-md",
    },

    {
      id: 2,
      child: (
        <>
          Github <FaIcons.FaGithubSquare size={30} />
        </>
      ),
      href: "https://github.com/Sriram511",
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
      href: "/Lakshmi_Narasimhan_S.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-500 bg-sky-900" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;

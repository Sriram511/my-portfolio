import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-full bg-gradient-to-b from-black to-gray-800 text-white"
    >
      <div className="flex flex-col justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-12">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-8">
            Would like to have conversation with Me? Drop your message in the
            form placed below
          </p>
        </div>
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/ed8516b7-16a5-4539-bb42-c334c25f8288"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your E-mail"
              className="my-3 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your Message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>
            <button className="text-white bg-gradient-to-b from-sky-900 to-cyan-900 px-4 py-4 m-8 mx-auto flex items-center rounded-md hover:scale-105 duration-300">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import React from "react";
import { MdCancel } from "react-icons/md";
import "../Responsive.css";

export default function ChatBox() {
  const handleClick = (e) => {
    if (e.target.id === "closeButton" || e.target.id === "overlay") {
      console.log("Close button or overlay clicked");
    }
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      id="overlay"
      onClick={handleClick}
      className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-auto h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]"
    >
      <div
        id="chatbox"
        className="w-[400px] max-w-lg bg-white ml-[700px] shadow-lg rounded-lg p-6 relative"
        onClick={stopPropagation}
      >
        {/* <MdCancel id="closeButton" onClick={handleClick} /> */}
        <div className="my-6 text-center ">
          <p className="text-sm mt-4">
            Welcome to <strong>Mahesh Patang Wala!</strong> Please fill in the
            form below before starting the chat.
          </p>
        </div>
        <form className="space-y-4">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Enter Name"
              className="px-4 py-3 bg-white text-[#333] w-full text-sm border-2 outline-[#007bff] rounded-lg"
            />
          </div>
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Enter Mobile"
              className="px-4 py-3 bg-white text-[#333] w-full text-sm border-2 outline-[#007bff] rounded-lg"
            />
          </div>
          <div className="relative flex items-center">
            <input
              type="email"
              placeholder="Enter Email"
              className="px-4 py-3 bg-white text-[#333] w-full text-sm border-2 outline-[#007bff] rounded-lg"
            />
          </div>
          <button
            type="button"
            className="px-6 py-2.5 !mt-8 w-full font-semibold bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-full"
          >
            Start Chatting
          </button>
        </form>
        <hr className="my-6" />
      </div>
    </div>
  );
}

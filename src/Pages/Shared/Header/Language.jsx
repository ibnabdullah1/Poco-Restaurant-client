import { useState } from "react";

const Language = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="group relative cursor-pointer">
      <div className="flex items-center bg-white px-4" onClick={toggleDropdown}>
        <a className="menu-hover  text-base font-medium text-[#666666] lg:mx-4">
          Eng
        </a>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </span>
      </div>

      <div
        className={`${
          isDropdownOpen ? "visible" : "invisible"
        } absolute z-50 flex flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl`}
      >
        <a
          className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
          onClick={() => console.log("English selected")} // Add your action here
        >
          English
        </a>

        <a
          className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
          onClick={() => console.log("Spanish selected")} // Add your action here
        >
          Spanish
        </a>

        <a
          className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
          onClick={() => console.log("French selected")} // Add your action here
        >
          French
        </a>
      </div>
    </div>
  );
};

export default Language;

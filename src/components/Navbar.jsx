import { useState } from "react";

export default function Navbar() {
  const [NavButton, setNavButton] = useState(true);

  return (
    <>
    <div className="flex">
      
    </div>
      <nav className="z-50 w-screen md:h-[80px] bg-slate-200 shadow-lg flex flex-col justify-center items-center gap-8 font-bold text-[23px] fixed top-0 text-neutral-800 py-2 md:flex-row  md:text-neutral-800 md:gap-8">
        <div className="w-full flex justify-between items-center px- md:hidden">
          <p>gathan</p>
          <button
            id="menu-toggle"
            className="text-slate-100 focus:outline-none"
            onClick={() => setNavButton(!NavButton)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 flex"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className={`transition-transform duration-300 ease-in-out ${
                  !NavButton
                    ? "transform rotate-45 translate-x-[4.5px] translate-y-[2px]"
                    : ""
                }`}
                d="M4 6h16"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className={`transition-opacity duration-300 ease-in-out ${
                  !NavButton ? "opacity-0" : ""
                }`}
                d="M4 12h16"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className={`transition-transform duration-300 ease-in-out ${
                  !NavButton
                    ? "transform -rotate-45 -translate-x-3 translate-y-2.5"
                    : ""
                }`}
                d="M4 18h16"
              />
            </svg>
          </button>
        </div>

        <div
          className={`${NavButton ? "opacity-0 md:opacity-100 translate-y-[]" : "opacity-100 translate-y-0 scale-100" } transition-all duration-500 md:flex md:flex-row text-neutral-800 flex flex-col items-center gap-4 md:gap-8 w-screen md:w-auto`}
        >
          <img src="" alt="logo" className="hidden" />
          <a href="#" className="">Home</a>
          <a href="#">Rofif</a>
          <a href="#">Royhan</a>
          <a href="#">gtahan</a>
          <a href="">gabriel</a>
        </div>
      </nav>
    </>
  );
}

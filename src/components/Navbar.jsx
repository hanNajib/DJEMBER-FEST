import { useState } from "react";

export default function Navbar(props) {
  const [NavButton, setNavButton] = useState(true);

  return (
    <>
    <div className="flex">
      
    </div>
      <nav className="z-50 w-screen md:h-[80px] md:bg-slate-200 shadow-xl md:shadow-lg flex flex-col justify-between items-center gap-0 md:gap-8 font-bold text-[23px] fixed top-0 text-neutral-800 md:py-2 md:flex-row md:text-neutral-800">
        {/* <div className="w-[15rem] h-full bg-slate-400 absolute skew-x-12"></div> */}
        <div className="w-full flex justify-between py-0 bg-slate-200 items-center lg:hidden z-10">
          <a href="/">
            <img src="/image/logo-new.svg" alt="logo" className="block lg:hidden max-h-14 scale-75"/>    
          </a>
          <button
            id="menu-toggle"
            className="text-slate-100 focus:outline-none pr-3"
            onClick={() => setNavButton(!NavButton)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 flex text-black"
              fill="black"
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
                className={`transition-transform duration-500 delay-100 ease-in-out ${
                  !NavButton ? "translate-x-8 opacity-50 text-red-600" : ""
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
          className={`${NavButton ? "-top-80 md:-top-96 md:opacity-100" : "top-[55px] md:top-[65px] opacity-100 translate-y-0 scale-100 z-0" } bg-slate-200 absolute lg:static px-20 w-screen justify-center lg:justify-between text-[17px] transition-all duration-500 md:flex md:flex-row text-neutral-800 font-semibold uppercase flex items-center gap-4 md:gap-8 md:w-screen`}
        >
          <a href="/">
          <img src="/image/logo-new.svg" alt="logo" className="hidden lg:block relative " />
          </a>
          <div className="flex flex-col lg:flex-row gap-5 pb-5 md:pb-0 z-10 text-center">
                {props.children}
          </div>
        </div>
      </nav>
    </>
  );
}




import { useState } from "react";

function Kontak() {
  const [Open, setOpen] = useState(true); // default state closed

  return (
    <>
      {/* Background and title */}
      <div className={`${Open ? 'bg-neutral-700' : 'bg-slate-300 hover:bg-neutral-700'} relative w-full h-full transition-all duration-500 overflow-hidden shadow-xl z-20 border-2 p-8 border-l-[1rem] border-t-2 border-neutral-800 group flex items-center cursor-pointer`} onClick={() => setOpen(!Open)}>
      <svg width="" height="" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className={`w-14 h-14 md:w-[7rem] md:h-[7rem] absolute right-0 -translate-y-0.5 transition-all duration-500 ${Open ? 'rotate-180' : 'rotate-45'}`}>
        <rect x="6.51465" y="9.34314" width="4" height="20" transform="rotate(-45 6.51465 9.34314)" fill="#262626" className={` ${ Open ? 'fill-slate-300' : 'fill-neutral-800 group-hover:fill-slate-300'} transition-all duration-500`}/>
        <rect x="9.34326" y="23.4853" width="4" height="20" transform="rotate(-135 9.34326 23.4853)" fill="#262626" className={` ${ Open ? 'fill-slate-300' : 'fill-neutral-800 group-hover:fill-slate-300'} transition-all duration-500`}/>
      </svg>
        <h2 className={`${ Open ? 'text-slate-300' : 'text-neutral-800 group-hover:text-slate-300'} text-4xl md:text-9xl  font-bebas_neue pl-5 text-center transition-all duration-500`}>Contact</h2>
        <img src="\image\bg-contact.png" alt="ea" className="absolute opacity-[0.03] -top-14 right-7 scale-150"/>
      </div>

      {/* Form container */}
      <div className={`${Open ? 'h-full pt-3 max-h-full opacity-100 delay-500' : 'hidden'} overflow-hidden transition-all duration-500 w-full bg-slate-200 z-10 border-2 border-t-0 border-slate-800`}>
        <div className="p-5">
          <form className="space-y-6">
            {/* Input Nama */}
            <div className="relative">
              <input
                type="text"
                id="nama"
                className="peer h-12 w-full text-neutral-900 border-b-2 border-slate-400 bg-transparent placeholder-transparent focus:outline-none focus:border-neutral-800 transition-all duration-500"
                placeholder="Nama"
                required
              />
              <label
                htmlFor="nama"
                className="absolute left-0 -top-3.5 text-neutral-700 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-500 peer-placeholder-shown:top-2 transition-all duration-500"
              >
                Nama
              </label>
            </div>

            {/* Input Email */}
            <div className="relative">
              <input
                type="email"
                id="email"
                className="peer h-12 w-full text-neutral-900 border-b-2 border-slate-400 bg-transparent placeholder-transparent focus:outline-none focus:border-neutral-800 transition-all duration-500"
                placeholder="Email"
                required
              />
              <label
                htmlFor="email"
                className="absolute left-0 -top-3.5 text-neutral-700 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-500 peer-placeholder-shown:top-2 transition-all duration-500"
              >
                Email
              </label>
            </div>

            {/* Input Message */}
            <div className="relative">
              <textarea
                id="message"
                className="peer h-32 w-full text-neutral-900 border-b-2 border-slate-400 bg-transparent placeholder-transparent focus:outline-none focus:border-neutral-800 transition-all duration-500"
                placeholder="Message"
                required
              ></textarea>
              <label
                htmlFor="message"
                className="absolute left-0 -top-3.5 text-neutral-700 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-500 peer-placeholder-shown:top-2 transition-all duration-500"
              >
                Message
              </label>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-neutral-800 text-slate-300 px-6 py-3 rounded-lg shadow-md hover:bg-neutral-700 hover:scale-105 transition-transform duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Kontak;

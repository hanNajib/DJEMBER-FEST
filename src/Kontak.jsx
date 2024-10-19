import { useState } from "react";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";

function Kontak() {
  const [Open, setOpen] = useState(true); // default state closed
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "djember0107", 
        "Djember-Fest", 
        formData,
        "7GuK6mdBoPbjGAXs0" 
      )
      .then(
        (result) => {
          Swal.fire({
            title: "Berhasil!",
            text: "Pesan Berhasil Terkirim!",
            icon: "success"
          });
        },
        (error) => {
          Swal.fire({
            title: "Gagal",
            text: "Pesan Tidak Terkirim!",
            icon: "error"
          });
        }
      );
  };

  return (
    <>
      {/* Background and title */}
      <div
        id="contact"
        className={`${
          Open ? "bg-neutral-700" : "bg-slate-300 hover:bg-neutral-700"
        } relative w-full h-full transition-all duration-500 overflow-hidden shadow-xl z-20 border-2 p-8 border-l-[1rem] border-t-2 border-neutral-800 group flex items-center cursor-pointer`}
        onClick={() => setOpen(!Open)}
      >
        <svg
          width=""
          height=""
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`w-14 h-14 md:w-[7rem] md:h-[7rem] absolute right-0 -translate-y-0.5 transition-all duration-500 ${
            Open ? "rotate-180" : "rotate-45"
          }`}
        >
          <rect
            x="6.51465"
            y="9.34314"
            width="4"
            height="20"
            transform="rotate(-45 6.51465 9.34314)"
            fill="#262626"
            className={` ${
              Open ? "fill-slate-300" : "fill-neutral-800 group-hover:fill-slate-300"
            } transition-all duration-500`}
          />
          <rect
            x="9.34326"
            y="23.4853"
            width="4"
            height="20"
            transform="rotate(-135 9.34326 23.4853)"
            fill="#262626"
            className={` ${
              Open ? "fill-slate-300" : "fill-neutral-800 group-hover:fill-slate-300"
            } transition-all duration-500`}
          />
        </svg>
        <h2
          className={`${
            Open ? "text-slate-300" : "text-neutral-800 group-hover:text-slate-300"
          } text-4xl md:text-9xl  font-bebas_neue pl-5 text-center transition-all duration-500`}
        >
          Contact
        </h2>
        <img
          src="\image\bg-contact.png"
          alt="ea"
          className="absolute opacity-[0.03] -top-14 right-7 scale-150"
        />
      </div>

      {/* Flex container for Map and Form */}
      <div className={`${
        Open ? "flex flex-col md:flex-row gap-8 p-5 transition-all duration-500" : "hidden"
      } w-full bg-slate-200 z-10 border-2 border-t-0 border-slate-800`}>
        
        {/* Left column (Map) */}
        <div className="w-full md:w-1/2 h-[400px] md:h-auto">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d505392.7721973261!2d113.32381358542044!3d-8.264818498235533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd690a7abde8777%3A0xdeb6730c83a3dd2e!2sKabupaten%20Jember%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1729341454559!5m2!1sid!2sid"          className="w-full h-full"
          style={{ border: 0 }}
          allowFullScreen="true"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        </div>

        {/* Right column (Contact Form) */}
        <div className="w-full md:w-1/2">
          <div className="p-5">
            <h2 className="text-3xl font-bebas_neue text-slate-800 pb-5">Kritik dan saran dari anda sangat penting untuk perkembangan website kami.</h2>
            <form className="space-y-6" onSubmit={sendEmail}>
              {/* Input Nama */}
              <div className="relative">
                <input
                  type="text"
                  id="nama"
                  value={formData.nama}
                  onChange={handleChange}
                  className="peer h-12 w-full text-neutral-900 border-b-2 border-slate-400 bg-transparent placeholder-transparent focus:outline-none"
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
                  value={formData.email}
                  onChange={handleChange}
                  className="peer h-12 w-full text-neutral-900 border-b-2 border-slate-400 bg-transparent placeholder-transparent focus:outline-none"
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
                  value={formData.message}
                  onChange={handleChange}
                  className="peer h-32 w-full text-neutral-900 border-b-2 border-slate-400 bg-transparent placeholder-transparent focus:outline-none"
                  placeholder="Message"
                  required
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute left-0 -top-3.5 text-neutral-700 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-500 peer-placeholder-shown:top-0 transition-all duration-500"
                >
                  Pesan Anda
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
      </div>
    </>
  );
}

export default Kontak;

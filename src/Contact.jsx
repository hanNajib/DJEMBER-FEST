import { useState } from 'react';

export default function Contact() {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="p-8 bg-white rounded-lg shadow-lg text-center w-full max-w-lg">
        {/* Button to expand contact form */}
        {!expanded ? (
          <>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Hubungi Kami</h1>
            <p className="text-gray-600 mb-8">
              Kritik dan saran dari anda sangat penting untuk perkembangan kami.
            </p>
            <div className="flex justify-center mb-8">
              <img
                src="image/gallery/10117693_4346289 1.svg"
                alt="Ilustrasi Hubungi Kami"
                className="w-60 md:w-80 lg:w-[400px] transition duration-500 ease-in-out transform hover:scale-105"
              />
            </div>
            <button
              onClick={toggleExpand}
              className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none"
            >
              Contact Us
            </button>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Get in Touch</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-left text-gray-700">Nama Anda</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Masukkan nama anda"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-left text-gray-700">Alamat Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Masukkan email anda"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-left text-gray-700">Pesan</label>
                <textarea
                  id="message"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  rows="4"
                  placeholder="Tulis pesan yang ingin anda sampaikan di sini"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                Kirim
              </button>
            </form>
            <button
              onClick={toggleExpand}
              className="mt-4 text-blue-600 hover:underline focus:outline-none"
            >
              Close
            </button>
          </>
        )}
      </div>
    </div>
  );
}

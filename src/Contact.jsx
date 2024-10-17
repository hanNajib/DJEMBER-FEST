export default function Contact() {
    return (

      
      <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-gray-100">
        {/* Left section with information and SVG illustration */}
        <div className="lg:w-[40rem] p-10 bg-white rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Hubungi kami</h1>
          <p className="text-gray-600 mb-8">
            Kritik dan saran dari anda sangat penting untuk perkembangan kami. 
          </p>
  
          {/* SVG Illustration */}
         
          <div className="flex space-x-4 mt-8">
           
            
            <a href="#" className="text-gray-500 hover:text-gray-800">
            <img src="image/gallery/10117693_4346289 1.svg" alt="Ilustrasi Hubungi Saya" class="transition duration-500 ease-in-out transform hover:scale-105 w-60 md:w-80 lg:w-[400px]"/>
            </a>
          </div>
        </div>
  
        {/* Right section with form */}
        <div className="w-full lg:w-[40rem] p-10 bg-white rounded-lg shadow-lg mt-10 lg:mt-0 lg:ml-10">
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700">Nama Anda</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Masukkan nama anda"
              />
            </div>
  
            <div>
              <label className="block text-gray-700">Alamat Email</label>
              <input
                type="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Masukkan email anda"
              />
            </div>
  
            <div>``
              <label className="block text-gray-700">Pesan</label>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                rows="4"
                placeholder="Tulis pesan yang ingin anda sampaikan di sini"
              ></textarea>
            </div>
  
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Kirim
            </button>
          </form>
        </div>
      </div>
    );
  }
  
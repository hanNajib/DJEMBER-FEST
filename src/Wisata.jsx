
const AboutUs = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Images */}
          <div className="scale-95 md:w-1/2 flex flex-col space-y-4 md:space-y-0 md:space-x-4 md:flex-row">
            {/* Portrait Image */}
            <div className="w-full md:w-1/3">
              <img 
                src="image/gallery/antrokan.jpg" 
                alt="image1" 
                className="rounded-lg shadow-lg object-cover h-96 w-full"
              />
            </div>
            
            {/* Landscape Image */}
            <div className="w-full md:w-2/3 flex flex-col space-y-4">
              <div className="relative top-10">
                <img 
                  src="image/gallery/papuma1.jpg" 
                  alt="image2" 
                  className="rounded-lg shadow-lg object-cover h-48 w-96"
                />
              </div>
              <div className="relative top-10">
                <img 
                  src="image/gallery/gambir.jpg" 
                  alt="image3" 
                  className="rounded-lg shadow-lg object-cover h-80 w-80"
                />
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div className="md:w-1/2 mt-8 md:mt-0 md:ml-16">
            <h2 className="text-7xl md:text-9xl font-bebas_neue font-bold text-neutral-800 mb-4">About Us</h2>
            <p className="text-gray-600 mb-4">
              Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.
            </p>
            <p className="text-gray-600 mb-4">
              Every journey is a new experience that brings excitement and wonder. Let us guide you on this incredible adventure, where memories are made.
            </p>
            <button className="mt-4 px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600">
              View Details
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;

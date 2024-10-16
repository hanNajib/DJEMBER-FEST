import React from 'react';

const SpecialDeals = () => {
  return (
    <>
     <div className="bg-neutral-800 overflow-x-hidden" id="home">
        <section className="home w-[100vw] h-[100vh]" id="">
          <div
            className="absolute w-full h-[100vh] inset-0 bg-cover bg-right bg-fixed opacity-70"
            style={{
              backgroundImage: `url('image/gallery/Nasi-Langgi-32.jpg')`,
              backgroundBlendMode: "multiply",
            }}
          ></div>

          <div className="absolute w-full h-[105vh] bg-fixed"></div>
          <div className="w-[100%] h-full flex items-center justify-center relative">
            <div className="text flex flex-col">
              <p className="sh judul text-[4rem]  text-slate-50 text-center md:mb-0 font-bebas_neue font-semibold md:text-[10rem]">
                Kuliner Djember
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className="bg-white py-12">
      <h2 className="text-center text-3xl font-bold text-red-500 mb-8">Special Deals</h2>
      <div className="grid grid-cols-1 mx-40 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {/* Card 1 */}
        <div className="border rounded-lg shadow-lg p-4 w-full bg-gray-50">
          <img src="image/gallery/Nasi-Langgi-32.jpg" alt="" className=" w-full" />
          <h3 className="text-xl font-semibold text-center mt-4">McDonald's - Dubai</h3>
          <div className="flex justify-between items-center mt-4">
            <span className="text-lg font-bold text-red-500">$87.99</span>
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg">Order Now</button>
          </div>
        </div>
        {/* Card 2 */}
        <div className="border rounded-lg shadow-lg p-4 w-full bg-gray-50">
          <img src="image/gallery/Nasi-Langgi-32.jpg" alt="McDonald's Italy" className=" w-full" />
          <h3 className="text-xl font-semibold text-center mt-4">McDonald's - Italy</h3>
          <div className="flex justify-between items-center mt-4">
            <span className="text-lg font-bold text-red-500">$77.99</span>
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg">Order Now</button>
          </div>
        </div>
        {/* Card 3 */}
        <div className="border rounded-lg shadow-lg p-4 w-full bg-gray-50">
          <img src="image/gallery/Nasi-Langgi-32.jpg" alt="Burger French Fries" className=" w-full" />
          <h3 className="text-xl font-semibold text-center mt-4">Burger French Fries</h3>
          <div className="flex justify-between items-center mt-4">
            <span className="text-lg font-bold text-red-500">$39.99</span>
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg">Order Now</button>
          </div>
        </div>
        {/* Card 4 */}
        <div className="border rounded-lg shadow-lg p-4 w-full bg-gray-50">
          <img src="image/gallery/Nasi-Langgi-32.jpg" alt="Spicy Chicken Burger" className=" w-full" />
          <h3 className="text-xl font-semibold text-center mt-4">Spicy Chicken Burger</h3>
          <div className="flex justify-between items-center mt-4">
            <span className="text-lg font-bold text-red-500">$25.99</span>
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg">Order Now</button>
          </div>
        </div>
        {/* Card 5 */}
        <div className="border rounded-lg shadow-lg p-4 w-full bg-gray-50">
          <img src="image/gallery/Nasi-Langgi-32.jpg" alt="Combo Package" className=" w-full" />
          <h3 className="text-xl font-semibold text-center mt-4">Combo Package V1</h3>
          <div className="flex justify-between items-center mt-4">
            <span className="text-lg font-bold text-red-500">$37.99</span>
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg">Order Now</button>
          </div>
        </div>
        {/* Card 6 */}
        <div className="border rounded-lg shadow-lg p-4 w-full bg-gray-50">
          <img src="image/gallery/Nasi-Langgi-32.jpg" alt="McDonald's Deals" className=" w-full" />
          <h3 className="text-xl font-semibold text-center mt-4">McDonald's Deals</h3>
          <div className="flex justify-between items-center mt-4">
            <span className="text-lg font-bold text-red-500">$33.99</span>
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg">Order Now</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default SpecialDeals;

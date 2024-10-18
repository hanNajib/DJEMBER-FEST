export default function About() {
    return(
        <div className="">   
            <div className="overflow-x-hidden bg-neutral-800 w-full h-full flex flex-col lg:flex-row justify-center mt-20 gap-20 relative pb-28 pt-12 md:px-28" id="about">
                <div className="w-full lg:w-1/2 px-5 md:px-0">
                    <h1 className="text-slate-100 text-2xl md:text-[3rem] font-sans font-bold leading-tight pb-3">Jember kota karnaval, Jember kota tembakau.</h1>
                    <p className=" text-slate-100 text-xs md:text-base leading-8">Jember adalah kota di Jawa Timur yang dikenal dengan kekayaan budaya, alam, dan pertanian. Dikenal sebagai pusat tembakau, Jember menawarkan keindahan alam, seperti pantai dan pegunungan. Selain itu, kota ini juga terkenal dengan berbagai festival, seperti Jember Fashion Carnival, yang menampilkan seni dan kreativitas lokal.</p>
                </div>
                <div className="relative">
                    <img src="../public/image/panorama.webp" alt="" className="px-5 pt-5 rounded-xl shadow-lg md:pt-0 md:px-0"/>
                </div>
            </div>
            <div className="relative flex justify-center items-center bg-neutral-800 pb-10">
                <div className="w-[7px] h-[7px] rounded-full bg-slate-50"></div>
                <div className="h-[2px] w-1/2 bg-slate-50"></div>
                <div className="w-[7px] h-[7px] rounded-full bg-slate-50"></div>
            </div>
            <div className="relative bg-neutral-800 pb-10">
                <h1 className="text-[2rem] md:text-[4rem] lg:text-[6rem] text-slate-50 text-center font-bebas_neue ">THE CULTURE OF DJEMBER</h1>
            </div>
        </div>
    )
}
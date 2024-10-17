export default function About() {
    return(
        <div className="">   
            <div className="overflow-x-hidden bg-neutral-800 w-full h-full flex flex-col lg:flex-row justify-center mt-20 gap-20 relative pb-28 pt-12 md:px-28" id="about">
                <div className="w-full lg:w-1/2 px-5 md:px-0">
                    <h1 className="text-slate-100 text-2xl md:text-[3rem] font-sans font-bold leading-tight pb-3">Jember kota karnaval, Jember kota tembakau.</h1>
                    <p className=" text-slate-100 text-xs md:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel veritatis molestiae reprehenderit libero blanditiis molestias eveniet excepturi amet tenetur distinctio sunt vero exercitationem quo eaque, dignissimos commodi nobis laboriosam sapiente possimus minima? Sequi, itaque atque? Impedit placeat accusantium sequi voluptates suscipit sed quae mollitia cumque dicta hic aliquam, incidunt ipsa.</p>
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
                <h1 className="text-[6rem] text-slate-50 text-center font-bebas_neue ">THE CULTURE OF DJEMBER</h1>
            </div>
        </div>
    )
}
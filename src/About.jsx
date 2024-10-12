export default function About() {
    return(
        <div className="bg-neutral-800 w-screen h-full flex flex-col md:flex-row justify-center items-center mt-20 gap-20 relative pb-28 pt-12 md:px-28">
            <div className="w-full md:w-1/2 px-5 md:px-0">
                <h1 className="text-slate-100 text-2xl md:text-[3rem] font-sans font-bold">Jember kota karnaval, Jember kota tembakau.</h1>
                <p className=" text-slate-100 text-xs md:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel veritatis molestiae reprehenderit libero blanditiis molestias eveniet excepturi amet tenetur distinctio sunt vero exercitationem quo eaque, dignissimos commodi nobis laboriosam sapiente possimus minima? Sequi, itaque atque? Impedit placeat accusantium sequi voluptates suscipit sed quae mollitia cumque dicta hic aliquam, incidunt ipsa.</p>
            </div>
            <div className="relative">
                <img src="https://i.pinimg.com/enabled/564x/f5/c3/05/f5c30525b780e0524b796c93d6aded8f.jpg" alt="" className="px-5 pt-5 md:pt-0 md:px-0"/>
            </div>
        </div>
    )
}
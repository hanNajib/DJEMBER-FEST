export default function Kuliner() {
    return(
        <div className="w-full h-auto bg-slate-50 pt-36">
            <div className="w-full h-40 bg-slate-300 absolute rotate-[2deg] scale-110"></div>
            <div className="absolute z-10 scale-105 opacity-20"><img src="../public/image/makan.png" alt="" /></div>
            <div className="relative h-auto w-full bg-gradient-to-b from-slate-300 to-slate-400 mt-20">
                <div className="flex px-32 gap-10 relative z-10">
                    <img src="../public/image/model.png" alt="" className=""  />
                    <div className="w-[50rem] h-full bg-slate-50 p-16 mt-36 rounded-3xl shadow-lg relative" >
                        <h1 className="text-[5rem] font-bold text-neutral-800 font-sans">Tahukah Kamu?</h1>
                        <p className=" text-[20px] ">Jember menyimpan sejuta kelezatan kuliner yang siap memanjakan lidahmu? Kota ini menawarkan ragam hidangan unik yang kaya akan cita rasa lokal, dipadukan dengan sentuhan rempah yang khas. Setiap sudutnya menyimpan kejutan kuliner yang tidak hanya menggugah selera, tapi juga membawa cerita budaya yang kental. Hmm, pasti penasaran kan? Yuk, jelajahi berbagai kuliner di Jember dan temukan kenikmatan yang tak terlupakan!</p>
                        <div className="mt-9 hover:scale-95 transition-all">
                            <a href="" className="text-[20px] text-neutral-800 border-[3px] border-neutral-800 p-3 font-semibold rounded-xl">Jelajahi Kuliner</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
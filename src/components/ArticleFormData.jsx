import PropTypes from 'prop-types'

export default function ArticleFormData({img, judul, deskripsi, IsOpen, setIsOpen}) {
    return(
        <div className={`relative w-screen transition-all  ${IsOpen ? '' : 'hidden'}`}>
            <div className="overlay w-screen h-screen bg-black opacity-50 fixed z-40 top-0 overflow-x-hidden transition-all duration-500" onClick={() => setIsOpen(false)}></div>
            <div className="w-screen h-[95vh] scale-[.82] mt-8 fixed bg-slate-200 top-0 z-50 flex flex-col p-3 shadow-2xl rounded-md">
                <div className="w-8 h-8 hover:bg-red-500 bg-slate-200 hover:text-white rounded-full flex justify-center items-center text-2xl absolute -top-3 -right-3 font-bold md:pb-1.5 cursor-pointer" onClick={() => setIsOpen(false)}>&times;</div>
                <div className="">
                <img src={img} alt={judul} className="w-full h-full md:h-[50%] lg:h-[35%] object-cover z-20 rounded-md"/>
                <h2 className="text-4xl font-bebas_neue mt-2">{judul}</h2>
                <p className="max-h-[80%]">{deskripsi}</p>
                </div>
            </div>
        </div>
    )
}

ArticleFormData.propTypes = {
    img: PropTypes.string.isRequired,
    judul: PropTypes.string.isRequired,
    deskripsi: PropTypes.string.isRequired,
    IsOpen: PropTypes.bool.isRequired,
    setIsOpen: PropTypes.func.isRequired
}
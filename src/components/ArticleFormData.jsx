import PropTypes from 'prop-types'

export default function ArticleFormData({img, judul, deskripsi, IsOpen}) {
    return(
        <div className={`relative w-screen ${IsOpen ? '' : 'hidden'}`}>
            <div className="w-screen h-screen bg-black opacity-50 fixed z-40 top-0 overflow-x-hidden"></div>
            <div className="w-screen h-[95vh] scale-[.82] mt-8 fixed bg-slate-200 top-0 z-50 flex flex-col p-3 rounded-md">
                <div className="w-[2rem] h-[2rem] bg-slate-200 rounded-full -top-3 -right-3 absolute flex justify-center items-center text-[1.5rem] z-10">&times;</div>
                <div className="">
                <img src={img} alt={judul} className="w-full h-[30%] object-cover z-20 rounded-md"/>
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
    IsOpen: PropTypes.bool.isRequired
}
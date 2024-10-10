import PropTypes from 'prop-types';


export default function Card({img, judul, deskripsi}) {
    return(
        <>
            <div className="w-[360px] h-[550px] bg-white flex justify-center flex-col gap-1 shadow-lg md:scale-95 md:hover:scale-100 transition ease-in duration-200 rounded-m1">
                <p className="text-2xl font-bold mb-2 p-2">{ judul }</p>
                <img src={ img } alt="logo" className=""/>
                <p className="text-md h-1/4 overflow-hidden mb-2 p-2 self-center text-center">{ deskripsi }</p>
                <button className="border-2 border-[rgba(0,0,0)] w-36 mb-5 rounded-sm text-sm self-center p-1"><a href="">Baca Selengkapnya</a></button>
            </div>
        </>
    )
}

Card.propTypes = {
    img: PropTypes.string.isRequired,       
    judul: PropTypes.string.isRequired,    
    deskripsi: PropTypes.string.isRequired, 
};
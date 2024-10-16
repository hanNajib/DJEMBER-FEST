import PropTypes from 'prop-types';

export default function Card({ img, judul, deskripsi, onClick }) {
    return (
        <>
            <div
                className="w-[45vw] h-[80vw] md:w-[360px] md:h-[550px] rounded-xl bg-white flex justify-center flex-col gap-1 shadow-lg md:scale-95 md:hover:scale-100 transition ease-in duration-200">
                <p className="text-sm md:text-2xl font-bold mb-2 p-2 text-center">{judul}</p>
                <img src={img} alt="logo" className="px-4" />
                <p className="text-xs md:text-base h-1/4 overflow-hidden mb-2 p-2 self-center text-center">{deskripsi}</p>
                <button
                    className="border-2 scale-90 md:scale-100 rounded-md border-[rgba(0,0,0)] w-36 mb-1 md:mb-5 text-xs md:text-sm self-center p-2"
                    onClick={onClick}>
                    Baca Selengkapnya
                </button>
            </div>
        </>
    );
}

Card.propTypes = {
    img: PropTypes.string.isRequired,
    judul: PropTypes.string.isRequired,
    deskripsi: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired, 
};

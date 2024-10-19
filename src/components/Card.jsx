import PropTypes from 'prop-types';

export default function Card({ img, judul, deskripsi, onClick }) {
    return (
        <div className="w-[45vw] h-[80vw] md:w-[360px] md:h-[550px] rounded-xl bg-white flex flex-col gap-1 shadow-lg md:scale-95 md:hover:scale-100 transition ease-in duration-200">
            <img src={img} alt="logo" className="px-4 aspect-video mt-5" />
            <p className="text-sm md:text-2xl font-bold text-center px-3 pt-1 md:pt-5 h-full max-h-10 md:max-h-20 align-middle">{judul}</p>
            <div className="h-1/2 overflow-hidden">
                <p className="text-xs md:text-base line-clamp-5 md:line-clamp-6 p-2 pb-0 self-center text-center">
                    {deskripsi}
                </p>
            </div>
            <button
                className="border-2 scale-75 md:scale-100 rounded-md border-[rgba(0,0,0)] w-36 mb-1 md:mb-5 text-xs md:text-sm self-center p-2"
                onClick={onClick}>
                Baca Selengkapnya
            </button>
        </div>
    );
}

Card.propTypes = {
    img: PropTypes.string.isRequired,
    judul: PropTypes.string.isRequired,
    deskripsi: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

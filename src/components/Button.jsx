import { useNavigate } from 'react-router-dom';
import propTypes from 'prop-types';

export default function Fillbutton({ children, href }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(href); 
  };

  return (
    <>
      <button
        className="relative mt-4 px-6 py-3 bg-transparent text-white font-semibold rounded-lg overflow-hidden group border-2 border-neutral-800"
        onClick={handleClick} // Panggil handler untuk navigasi
      >
        <span className="absolute inset-0 bg-yellow-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
        <span className="relative z-10 text-black">{children}</span>
      </button>
    </>
  );
}

Fillbutton.propTypes = {
  children: propTypes.string.isRequired,
  href: propTypes.string.isRequired,
};

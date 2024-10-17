import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Fillbutton({ children, href, fill }) {
  const navigate = useNavigate();

  const handleClick = () => {
    // Check if the href is an external link
    if (href.startsWith('http://') || href.startsWith('https://')) {
      window.location.href = href; // Open external link
    } else {
      navigate(href); // Navigate to internal route
    }
  };

  return (
    <>
      <button
        className="relative mt-4 px-6 py-3 bg-transparent text-white font-semibold rounded-lg overflow-hidden group border-2 border-neutral-800"
        onClick={handleClick}
      >
        <span className={`absolute inset-0 ${ fill } -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out`}></span>
        <span className="relative z-10 text-black">{children}</span>
      </button>
    </>
  );
}

Fillbutton.propTypes = {
  children: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  fill: PropTypes.string.isRequired
};

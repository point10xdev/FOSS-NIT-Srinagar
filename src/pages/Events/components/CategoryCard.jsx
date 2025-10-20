import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";
import PropTypes from "prop-types";

// Added 'description' prop
const CategoryCard = ({ img, title, description, url, index }) => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      anchorPlacement: "top-center",
      disable: "Phone",
      startEvent: "DOMContentLoaded",
      easing: "ease-out",
      mirror: true,
    });
  }, []);
  return (
    // Set a consistent width and ensure image covers
    <div data-aos="fade-down" data-aos-delay={index*100} className="mb-5 CardShadow w-full sm:w-80 flex flex-col">
      <img className="h-[450px] w-full object-cover overflow-hidden" src={img} alt={title + " image"} />
      <div className="p-4 bg-background flex-grow flex flex-col">
        <p className="text-3xl text-gray-700 textShadow-sm font-semibold font-figtree overflow-visible">{title}</p>
        
        {/* Added description paragraph with min-height */}
        <p className="text-gray-600 mt-2 mb-4 min-h-24 flex-grow">{description}</p>
        
        <Link to={url} className="mt-auto">
          <button 
              className="px-4 mt-4 md:px-6 py-2 font-kodeMono ShadowBlur text-sm md:text-base rounded-md font-medium text-gray-800 bg-primary border border-primary focus:outline-none text-center"
            >
            Show More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;

CategoryCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired, // Added prop type
  url: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
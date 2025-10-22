import { Link } from "react-router-dom";
import Aos from "aos"; // Keep this
import "aos/dist/aos.css"; // Keep this
// REMOVED useEffect

// Define the props interface
interface CategoryCardProps {
  img: string;
  title: string;
  description: string;
  url: string;
  index: number;
}

// Added 'description' prop
const CategoryCard = ({ img, title, description, url, index }: CategoryCardProps) => {
  // REMOVED Aos.init() CALL FROM HERE
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


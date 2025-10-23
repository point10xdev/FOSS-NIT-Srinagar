import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

interface CategoryCardProps {
  img: string;
  title: string;
  description: string;
  url: string;
  index: number;
}

const CategoryCard = ({ img, title, description, url, index }: CategoryCardProps) => {
  return (
    // MODIFIED: Reduced widths (w-full for small screens, adjusted others)
    <div data-aos="fade-down" data-aos-delay={index*100} className="mb-5 CardShadow w-full ss:w-64 sm:w-56 md:w-[220px] lg:w-60 flex flex-col">
      {/* MODIFIED: Reduced image height */}
      <img className="h-[300px] w-full object-cover overflow-hidden" src={img} alt={title + " category image"} /> {/* Added alt text */}
      <div className="p-4 bg-background flex-grow flex flex-col">
        {/* MODIFIED: Reduced text size */}
        <p className="text-2xl text-gray-700 textShadow-sm font-semibold font-figtree overflow-visible">{title}</p>

        {/* MODIFIED: Reduced min-height and text size */}
        <p className="text-gray-600 text-sm mt-2 mb-4 min-h-20 flex-grow">{description}</p>

        <Link to={url} className="mt-auto">
          <button
              className="px-4 mt-4 md:px-5 py-2 font-kodeMono ShadowBlur text-sm rounded-md font-medium text-gray-800 bg-primary border border-primary focus:outline-none text-center"
            >
            Show More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
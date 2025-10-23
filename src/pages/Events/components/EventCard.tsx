import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

interface EventCardProps {
  title: string;
  time: string;
  venue: string;
  url: string;
  image: string;
  index: number;
}

export default function EventCard({title, time, venue, url, image, index} : EventCardProps) {
  return (
    <>
      {/* MODIFIED: Changed Link wrapper */}
      <Link
        to={url}
        data-aos="fade-down"
        data-aos-delay={index * 100}
        // MODIFIED: Use bg-background (white), CardShadow, adjusted padding/width
        className="rounded-xl bg-background flex flex-col items-center CardShadow w-full ss:w-60 sm:w-56 md:w-[220px] lg:w-60 px-0 pt-0 pb-4 mb-4 overflow-hidden" // Added overflow-hidden
      >
        {/* MODIFIED: Image is now contained within the Link, no absolute positioning */}
        <img
          loading="lazy"
          // MODIFIED: Adjusted size, removed absolute positioning and margin
          className="w-full h-[300px] object-cover ImgShadow transform hover:scale-105 transition duration-200 ease-in-out mb-4" // Added bottom margin
          src={image != "/events/undefined" ? image : "/events/meme.jpg"}
          alt={`${title} event image`}
        />
        {/* MODIFIED: Removed margin-top, added padding */}
        <div className="w-full text-center px-3">
          {/* MODIFIED: Changed text color, removed text shadow */}
          <p className="font-semibold text-xl md:text-lg lg:text-xl text-gray-700 font-figtree normalcase capitalize">
            {title}
          </p>
          {/* MODIFIED: Text colors adjusted to match category card */}
          <p className="text-xs md:text-sm text-primary font-semibold font-kodeMono mt-1">{time}</p>
          <p className="text-sm md:text-base text-gray-600 mt-2 font-kodeMono">{venue}</p>
        </div>
      </Link>
    </>
  );
}
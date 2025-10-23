import { Link } from "react-router-dom";
import Aos from "aos"; // Keep this
import "aos/dist/aos.css"; // Keep this

interface EventCard {
  EventName: string;
  Description: string;
  CardImage: string;
  link: string; // Keep this, although we'll generate the correct link dynamically
}

interface CardProps {
  event: EventCard;
  index: number;
}

const Card = ({ event, index }: CardProps) => {
  return (
    <div
      className={`relative flex flex-col ${
        index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
      } items-center sm:space-x-6`}
    >
      <div
        data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
        data-aos-delay="250"
        className="w-full sm:max-w-sm"
      >
        <img
          src={event.CardImage}
          alt={event.EventName}
          className="w-full h-[460px] object-cover"
        />
      </div>
      <div
        className={`w-full md:py-16 md:px-16 lg2:max-w-4xl relative  ${
          index % 2 === 0 ? 'sm:-translate-x-40' : 'sm:translate-x-40'
        }`}
      >
        <div data-aos={index % 2 === 0 ? "fade-left" : "fade-right"} className="p-6 ShadowLarge md:p-8 lg:p-10 bg-background h-full">
          <div className="text-2xl font-figtree sm:text-3xl font-semibold mb-4 text-gray-700 textShadow-sm overflow-visible">
            {event.EventName}
          </div>
          <p className="mb-6 md:mb-8">{event.Description}</p>
          {/* --- MODIFIED LINE --- */}
          <Link
            // Construct the URL using /events/ and the event name
            to={`/events/${event.EventName}`} 
            className="px-3 md:px-6 py-3 ShadowBlur font-kodeMono text-sm md:text-base rounded-md font-medium text-gray-800 bg-primary border border-primary text-center"
          >
            EXPLORE
          </Link>
          {/* --- END OF MODIFIED LINE --- */}
        </div>
      </div>
    </div>
  );
};

export default Card;  
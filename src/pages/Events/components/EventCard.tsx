import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
// --- NEW: Import the EventDetail type ---
import { EventDetail } from "../../../constants/types/event-details";

// --- MODIFIED: The component now accepts the full event object ---
interface EventCardProps {
  event: EventDetail;
  index: number;
}

export default function EventCard({ event, index }: EventCardProps) {
  
  // --- NEW: Logic moved from EventPageLayout ---
  const { eventname, startTime, endTime, venue, cardImage, link } = event;
  const time = startTime && endTime ? `${startTime} - ${endTime}` : (startTime || "Time TBD");
  const venueDisplay = venue || "Venue TBD";
  const image = cardImage ? `/events/${cardImage}` : "/events/meme.jpg";
  
  return (
    <>
      <Link
        // MODIFIED: Use the 'link' property from the event object
        to={link}
        data-aos="fade-down"
        data-aos-delay={index * 100}
        className="rounded-xl bg-background flex flex-col items-center CardShadow w-full ss:w-60 sm:w-56 md:w-[220px] lg:w-60 px-0 pt-0 pb-4 mb-4 overflow-hidden"
      >
        <img
          loading="lazy"
          className="w-full h-[300px] object-cover ImgShadow transform hover:scale-105 transition duration-200 ease-in-out mb-4"
          // MODIFIED: Use the 'image' variable defined above
          src={image}
          // MODIFIED: Use 'eventname' for alt text
          alt={`${eventname} event image`}
        />
        <div className="w-full text-center px-3">
          <p className="font-semibold text-xl md:text-lg lg:text-xl text-gray-700 font-figtree normalcase capitalize">
            {/* MODIFIED: Use 'eventname' */}
            {eventname}
          </p>
          {/* MODIFIED: Use 'time' variable */}
          <p className="text-xs md:text-sm text-primary font-semibold font-kodeMono mt-1">{time}</p>
          {/* MODIFIED: Use 'venueDisplay' variable */}
          <p className="text-sm md:text-base text-gray-600 mt-2 font-kodeMono">{venueDisplay}</p>
        </div>
      </Link>
    </>
  );
}
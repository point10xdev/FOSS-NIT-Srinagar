import { EventDetail } from "../../../constants/types/event-details";
import EventCard from "./EventCard";

interface EventsPageLayoutProps {
  events: EventDetail[];
  title?: string;
}

const EventsPageLayout = ({ events, title = "Event List" }: EventsPageLayoutProps) => {
    return (
      <div className="">
        <div className="font-playfair px-4 sm:px-8 pt-8 ">
          <p className="text-gray-700 textShadow-md font-extrabold font-figtree text-4xl md:text-5xl leading-normal">
            {title}
          </p>
        </div>
        <div className="px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 justify-items-center pt-16 pb-10 relative">
          
          
          {events.map((item, index) => (
              <EventCard
                key={item.id}
                index={index}
                event={item} 
              />
          ))}
        </div>
      </div>
    );
  };

export default EventsPageLayout;
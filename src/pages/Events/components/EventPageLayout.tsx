// MODIFIED: Import EventDetail type
import { EventDetail } from "../../../constants/types/event-details";
import EventCard from "./EventCard";

interface EventsPageLayoutProps {
  // MODIFIED: Use EventDetail[]
  events: EventDetail[];
  title?: string;
}

// Add 'title' prop with a default value
const EventsPageLayout = ({ events, title = "Event List" }: EventsPageLayoutProps) => {
    return (
      // MODIFIED: Removed "bg-background ShadowLarge"
      <div className="">
        <div className="font-playfair px-8 pt-8 ">
          <p className="text-gray-700 textShadow-md font-extrabold font-figtree text-4xl md:text-5xl leading-normal">
            {title} {/* Use dynamic title */}
          </p>
        </div>
        <div className="px-10 flex flex-wrap justify-center gap-8 pt-20 pb-10 relative ">
          {events.map((item, index) => (
              <EventCard
                key={index}
                // MODIFIED: Use properties from EventDetail
                title={item.eventname}
                time={`${item.startTime || ""} - ${item.endTime || ""}`}
                venue={item.venue || "Venue TBD"}
                image={`/events/${item.cardImage}`}
                // MODIFIED: Use event name in URL as requested
                url={`/events/${item.eventname}`}
              />
          ))}
        </div>
      </div>
    );
  };

  
export default EventsPageLayout;
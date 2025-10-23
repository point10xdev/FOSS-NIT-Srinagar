import { eventCard } from "../../../constants/types/event-card";
import EventCard from "./EventCard";

interface EventsPageLayoutProps {
  events: eventCard[];
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
                title={item["EventName"]}
                time={item["Start Time"] + " - " + item["End Time"]}
                venue={item["Venue"]}
                image={`/events/${item["CardImage"]}`}
                url={`${index}`}
              />
          ))}
        </div>
      </div>
    );
  };

  
export default EventsPageLayout;


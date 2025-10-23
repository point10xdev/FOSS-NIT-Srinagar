import EventCard from "./EventCard";

// Define the prop interfaces based on mock data in EventsHome.jsx
interface Event {
  "Event Name": string;
  "Description" : string;
  "Date": string;
  "Start Time": string;
  "End Time": string;
  "Venue" : string;
  "Card Image": string;
}

interface EventsPageLayoutProps {
  events: Event[];
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
                title={item["Event Name"]}
                time={item["Start Time"] + " - " + item["End Time"]}
                venue={item["Venue"]}
                image={`/events/${item["Card Image"]}`}
                url={`${index}`}
              />
          ))}
        </div>
      </div>
    );
  };

  
export default EventsPageLayout;


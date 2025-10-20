import EventCard from "./EventCard";
import PropTypes from "prop-types";

// Add 'title' prop with a default value
const EventsPageLayout = ({ events, title = "Event List" }) => {
    return (
      <div className="bg-background ShadowLarge">
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

EventsPageLayout.propTypes = {  
  events: PropTypes.array.isRequired,
  title: PropTypes.string, // Add prop type for title
};
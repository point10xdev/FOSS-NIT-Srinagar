// 1. Import the data source you requested
import { eventCards } from "../../../constants/all-event-cards";
import Card from "./Card";
// 2. Import the type that the Card component expects
import { EventDetail } from "../../../constants/types/event-details";

const ExcitingEvents = () => {
  return (
    <div className="px-4 md:px-[140px] lg:px-[160px] lg2:px-[200px] xl:px-[280px] xl2:px-[320px]">
      <div className="text-left mb-20">
        {/* <p className="text-lg font-semibold font-kodeMono text-gray-400">JUST THE BEST</p> */}
        <h2 className="text-5xl font-figtree font-bold uppercase overflow-hidden text-white">
          The Most Exciting Event Lineup
        </h2>
      </div>

      <div className="space-y-8">
        {
          // 3. Map over eventCards and transform the data
          eventCards.map((card, index) => {
            
            // 4. Transform from 'eventCard' to 'EventDetail'
            const eventForCard: EventDetail = {
              id: `home-event-${index}`, // Add an ID
              eventname: card.EventName,
              description: card.Description,
              cardImage: card.CardImage,
              link: card.link,
              // Add defaults for other EventDetail properties
              category: "Hackathons", // Default category
              Date: card.Date,
              startTime: card["Start Time"],
              endTime: card["End Time"],
              venue: card.Venue
            };

            // 5. Pass the transformed object to the Card
            return (<Card key={index} index={index} event={eventForCard} />);
          })
        }
      </div>
    </div>
  );
};

export default ExcitingEvents;
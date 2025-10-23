import PageLayout from "../../../Components/PageLayout";
import EventsPageLayout from "./EventPageLayout";
import CategoryCard from "./CategoryCard";
import { eventCategories } from "../../../constants/event-category"; 
import { upcomingEvents } from "../../../constants/upcoming-events";

export default function EventsHome() {
  return (
    <PageLayout title={"Events"} imgUrl={"/events/events.jpg"}>
      
      {/* 1. Upcoming Events Section */}
      <div className="py-12">
        {upcomingEvents.length > 0 ? (
          // Pass the title "Upcoming Events" to the layout
          <EventsPageLayout events={upcomingEvents} title="Upcoming Events" />
        ) : (
          // MODIFIED: Removed "bg-background ShadowLarge"
          <div className="text-center py-10">
            <p className="text-gray-700 text-4xl font-figtree font-bold">Upcoming Events</p>
            <p className="text-gray-600 text-lg mt-4">No upcoming events. Stay tuned!</p>
          </div>
        )}
      </div>

      {/* 2. Types of Events Section */}
      <div className="pt-8 pb-12">
        <div className="font-playfair px-8 mb-12 text-center">
          <p className="text-gray-700 textShadow-md font-extrabold font-figtree text-4xl md:text-5xl leading-normal">
            Types of Events
          </p>
        </div>
        <div className="px-5 py-8 flex gap-8 flex-wrap items-stretch justify-center">
          {eventCategories.map((item, index) => (
            <CategoryCard 
              key={item.id} 
              index={index} 
              title={item.title} 
              description={item.description} // Pass description
              url={item.url} 
              img={item.img} 
            />
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
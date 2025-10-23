import PageLayout from "../../../Components/PageLayout";
import EventsPageLayout from "./EventPageLayout";
import CategoryCard from "./CategoryCard";
import { eventCategories } from "../../../constants/event-category-card";
// MODIFIED: Import the single source of truth and the type
import { eventDetails } from "../../../constants/all-event-details";
import { EventDetail } from "../../../constants/types/event-details";

export default function EventsHome() {
  // --- NEW: Dynamic Filtering Logic ---
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Normalize to the start of today for accurate comparison

  const in15Days = new Date(today);
  in15Days.setDate(today.getDate() + 15); // Set the date 15 days from now

  const upcomingEvents: EventDetail[] = eventDetails.filter(event => {
    if (!event.Date) {
      return false; // Don't include events that have no date
    }
    const eventDate = new Date(event.Date);
    // Check if the event date is on or after today AND on or before 15 days from now
    return eventDate >= today && eventDate <= in15Days;
  });
  // --- End of New Logic ---

  return (
    <PageLayout title={"Events"} imgUrl={"/events/events.jpg"}>

      {/* 1. Upcoming Events Section (This JSX remains the same, but now uses the dynamic list) */}
      <div className="py-12">
        {upcomingEvents.length > 0 ? (
          <EventsPageLayout events={upcomingEvents} title="Upcoming Events" />
        ) : (
          <div className="text-center py-10">
            <p className="text-gray-700 text-4xl font-figtree font-bold">Upcoming Events</p>
            <p className="text-gray-600 text-lg mt-4">No upcoming events in the next 15 days. Stay tuned!</p>
          </div>
        )}
      </div>

      {/* 2. Types of Events Section (No changes needed) */}
      <div className="pt-8 pb-12">
        <div className="font-playfair px-8 mb-12 text-center">
          <p className="text-gray-700 textShadow-md font-extrabold font-figtree text-4xl md:text-5xl leading-normal">
            Types of Events
          </p>
        </div>
        <div className="px-4 sm:px-6 grid grid-cols-1 ss:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 justify-items-center py-8">
          {eventCategories.map((item, index) => (
            <CategoryCard
              key={item.id}
              index={index}
              title={item.title}
              description={item.description}
              url={item.url}
              img={item.img}
            />
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
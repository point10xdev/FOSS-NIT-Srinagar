import { useParams } from "react-router-dom";
import PageLayout from "../../../Components/PageLayout";
import { eventDetails } from "../../../constants/all-event-details";
import { useEffect } from "react";

export default function EventDetailPage() {
  const { eventName } = useParams<{ eventName: string }>();

  // Find the event by its name
  const event = eventDetails.find(
    (e) => e.eventname === eventName
  );

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle event not found
  if (!event) {
    return (
      <PageLayout title="Error" imgUrl="/common/about-cover.jpeg">
        <div className="text-center py-20 bg-background ShadowLarge">
          <h2 className="text-gray-800 text-4xl font-figtree font-bold">Event Not Found</h2>
          <p className="text-gray-600 text-lg mt-4">
            The event you are looking for does not exist.
          </p>
        </div>
      </PageLayout>
    );
  }

  // Use a fallback image if cardImage is not specified
  const imageUrl = event.cardImage ? `/events/${event.cardImage}` : "/common/conpetition.jpeg";

  // Render the event details
  return (
    <PageLayout title={event.eventname} imgUrl={imageUrl}>
      <div className="px-4 md:px-12 py-4 md:py-12 font-playfair bg-background ShadowLarge">
        <div className="mb-8">
          <p className="font-semibold font-figtree textShadow-md text-4xl md:text-5xl text-gray-800 leading-normal mb-4 overflow-visible">
            {event.eventname}
          </p>
          {/* MODIFIED: Added whitespace-pre-line */}
          <p className="text-lg text-gray-700 whitespace-pre-line">{event.description}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="font-semibold text-gray-600 font-figtree textShadow-sm text-3xl leading-normal mb-3">Event Details</p>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
              <li><strong>Category:</strong> {event.category}</li>
              <li><strong>Date:</strong> {event.Date || "TBA"}</li>
              <li><strong>Time:</strong> {event.startTime && event.endTime ? `${event.startTime} - ${event.endTime}` : "TBA"}</li>
              <li><strong>Venue:</strong> {event.venue || "TBA"}</li>
            </ul>
          </div>
          
          {event.cardImage && (
             <div>
                <p className="font-semibold text-gray-600 font-figtree textShadow-sm text-3xl leading-normal mb-3">Event Poster</p>
                <img 
                  src={`/events/${event.cardImage}`} 
                  alt={`${event.eventname} poster`} 
                  className="w-full h-auto rounded-lg object-cover ImgShadow"
                />
             </div>
          )}
        </div>

      </div>
    </PageLayout>
  );
}
import { Route, Routes } from "react-router-dom";
import EventsHome from "./components/EventsHome";
import { useEffect } from "react";
import PageLayout from "../../Components/PageLayout";
import EventsPageLayout from "./components/EventPageLayout"; 
// MODIFIED: Import eventDetails (correct name)
import { eventDetails } from "../../constants/all-event-details"; 
// NEW: Import the new detail page component
import EventDetailPage from "./components/EventDetailPage";

// --- Updated Component ---
const Workshops = () => {
  // MODIFIED: Use eventDetails
  const workshopEvents = eventDetails.filter(event => event.category === "Workshops");
  return (
    <PageLayout title="Workshops" imgUrl="/events/workshops.jpg">
      <EventsPageLayout events={workshopEvents} title="All Workshops" />
    </PageLayout>
  );
};

// --- Updated Component ---
const Meetups = () => {
  // MODIFIED: Use eventDetails
  const meetupEvents = eventDetails.filter(event => event.category === "Meetups");
  return (
    <PageLayout title="Meetups" imgUrl="/events/meetups.jpg">
      <EventsPageLayout events={meetupEvents} title="All Meetups" />
    </PageLayout>
  );
};

// --- Updated Component ---
const Hackathons = () => {
  // MODIFIED: Use eventDetails
  const hackathonEvents = eventDetails.filter(event => event.category === "Hackathons");
  return (
    <PageLayout title="Hackathons" imgUrl="/events/hackathons.jpg">
      <EventsPageLayout events={hackathonEvents} title="All Hackathons" />
    </PageLayout>
  );
};

// --- Updated Component ---
const Talks = () => {
  // MODIFIED: Use eventDetails
  const talkEvents = eventDetails.filter(event => event.category === "Talks");
  return (
    <PageLayout title="Talks" imgUrl="/events/talks.jpg">
      <EventsPageLayout events={talkEvents} title="All Talks" />
    </PageLayout>
  );
};

export default function Events() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<EventsHome />} />
        <Route path="/workshops" element={<Workshops />} />
        <Route path="/meetups" element={<Meetups />} />
        <Route path="/hackathons" element={<Hackathons />} />
        <Route path="/talks" element={<Talks />} />
        {/* NEW: Add dynamic route for event details */}
        <Route path="/:eventName" element={<EventDetailPage />} />
      </Routes>
    </>
  );
}
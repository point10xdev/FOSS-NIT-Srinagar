import { Route, Routes } from "react-router-dom";
import EventsHome from "./components/EventsHome";
import { useEffect } from "react";
import PageLayout from "../../Components/PageLayout";
import EventsPageLayout from "./components/EventPageLayout"; // <-- Import this
import { allEvents } from "../../constants/all-event-details"; // <-- Import your new list

// --- Updated Component ---
const Workshops = () => {
  const workshopEvents = allEvents.filter(event => event.category === "Workshops");
  return (
    <PageLayout title="Workshops" imgUrl="/events/workshops.jpg">
      <EventsPageLayout events={workshopEvents} title="All Workshops" />
    </PageLayout>
  );
};

// --- Updated Component ---
const Meetups = () => {
  const meetupEvents = allEvents.filter(event => event.category === "Meetups");
  return (
    <PageLayout title="Meetups" imgUrl="/events/meetups.jpg">
      <EventsPageLayout events={meetupEvents} title="All Meetups" />
    </PageLayout>
  );
};

// --- Updated Component ---
const Hackathons = () => {
  const hackathonEvents = allEvents.filter(event => event.category === "Hackathons");
  return (
    <PageLayout title="Hackathons" imgUrl="/events/hackathons.jpg">
      <EventsPageLayout events={hackathonEvents} title="All Hackathons" />
    </PageLayout>
  );
};

// --- Updated Component ---
const Talks = () => {
  const talkEvents = allEvents.filter(event => event.category === "Talks");
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
      </Routes>
    </>
  );
}
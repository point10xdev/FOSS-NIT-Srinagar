// src/pages/Events/Events.jsx
import { Route, Routes } from "react-router-dom";
import EventsHome from "./components/EventsHome"; // Import the new main page
import Competitions from "./pages/Competitions";
import TalksAndWorkshops from "./pages/TalksAndWorkshops";
import Performances from "./pages/Performances";
import GamingZone from "./pages/GamingZone";
import EventDetails from "./pages/Detailing/EventDetails";
import { useEffect } from "react";
import ScrollToTop from "../../Components/ScrollToTop";
import GameZoneDetails from "./pages/Detailing/GameZoneDetails";
import PerformanceDetails from "./pages/Detailing/PerformanceDetails";
import TalksAndWorkshopsDetails from "./pages/Detailing/TalksAndWorkshopsDetails";
import WomenTech from "./pages/women in tech/WomenTech";

// Import PageLayout for placeholder components
import PageLayout from "../../Components/PageLayout"; 

// Placeholder components for new routes
const Workshops = () => <PageLayout title="Workshops"><div className="p-8 bg-white text-gray-800 text-center text-2xl">Workshops coming soon!</div></PageLayout>;
const Meetups = () => <PageLayout title="Meetups"><div className="p-8 bg-white text-gray-800 text-center text-2xl">Meetups coming soon!</div></PageLayout>;
const Hackathons = () => <PageLayout title="Hackathons"><div className="p-8 bg-white text-gray-800 text-center text-2xl">Hackathons coming soon!</div></PageLayout>;
const Talks = () => <PageLayout title="Talks"><div className="p-8 bg-white text-gray-800 text-center text-2xl">Talks coming soon!</div></PageLayout>;


export default function Events() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top
  }, []);
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Updated root path to show EventsHome */}
        <Route path="/" element={<EventsHome />} /> 

        {/* Existing routes */}
        <Route path="/competitions" element={<Competitions />} />
        <Route path="/talks-and-workshops" element={<TalksAndWorkshops />} />
        <Route path="/performances" element={<Performances />} />
        <Route path="/gaming-zone" element={<GamingZone />} />
        <Route path="/women-in-tech/*" element={<WomenTech />} />
        <Route path="gaming-zone/:index" element={<GameZoneDetails />} />
        <Route path="competitions/:index" element={<EventDetails />} />
        <Route path="performances/:index" element={<PerformanceDetails />} />
        <Route path="talks-and-workshops/:index" element={<TalksAndWorkshopsDetails />} />

        {/* Added routes for new categories */}
        <Route path="/workshops" element={<Workshops />} />
        <Route path="/meetups" element={<Meetups />} />
        <Route path="/hackathons" element={<Hackathons />} />
        <Route path="/talks" element={<Talks />} />
      </Routes>
    </>
  );
}
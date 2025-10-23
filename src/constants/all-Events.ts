// Based on event-category.ts, the categories are:
// "Workshops", "Meetups", "Hackathons", "Talks"

export interface EventDetail {
  id: string; // A unique identifier
  name: string;
  description: string;
  // The category key as requested, mapping to event-category.ts
  category: "Workshops" | "Meetups" | "Hackathons" | "Talks";
  
  // Optional fields from upcomingEvents
  startTime?: string;
  endTime?: string;
  venue?: string;
  cardImage: string;
  day?: string;

  // Optional fields for event details page
  leadName?: string;
  leadContact?: string;
  
  // Link from home-events or upcoming events
  link: string;
}

export const allEvents: EventDetail[] = [
  // --- Events from upcomingEvents ---
  {
    id: "git-github-workshop",
    name: "Intro to Git & GitHub",
    description: "An introductory workshop on version control using Git and GitHub.",
    category: "Workshops",
    startTime: "10:00 AM",
    endTime: "12:00 PM",
    venue: "CSE Conference Hall",
    cardImage: "git-github.jpg",
    link: "/events/workshops" // Maps to the workshop category page
  },
  {
    id: "linux-install-fest",
    name: "Linux Install Fest",
    description: "A hands-on session to help students install and set up Linux on their machines.",
    category: "Workshops",
    startTime: "1:00 PM",
    endTime: "4:00 PM",
    venue: "Mac Lab 1",
    cardImage: "linux-fest.jpg",
    link: "/events/workshops" // Maps to the workshop category page
  },

  // --- Events from home-events.ts ---
  {
    id: "openbuild-challenge",
    name: "OpenBuild Challenge",
    description: "A theme-based open-source prototyping event where creativity meets code. Build in the open, collaborate freely, and bring your ideas to life!",
    category: "Hackathons",
    cardImage: "", // Was empty in source
    link: "/events/OpenBuild Challenge", // Preserved from source
  },
  {
    id: "fossconnect-talk",
    name: "FOSSConnect: The Open Source Gallery Talk",
    description: "An engaging talk by a FOSS Delegate focused on open collaboration, real-world impact, and how you can start contributing to global projects.",
    category: "Talks",
    cardImage: "", // Was empty in source
    link: "/events/competitions/27", // Preserved from source
  },
  {
    id: "git-set-go-workshop",
    name: "Git Set Go",
    description: "A hands-on workshop on mastering Git and GitHub — learn version control the practical way through real coding exercises and collaboration.",
    category: "Workshops",
    cardImage: "", // Was empty in source
    link: "/events/gaming-zone", // Preserved from source
  },
  {
    id: "fixit-cert-gen-sprint",
    name: "FixIt: Certificate Generator Edition",
    description: "A contribution sprint around an open-source Certificate Generator project — fix issues, add features, and ship your improvements in style!",
    category: "Hackathons", // Classifying as a hackathon/sprint
    cardImage: "", // Was empty in source
    link: "/events/competitions/27", // Preserved from source
  }
];
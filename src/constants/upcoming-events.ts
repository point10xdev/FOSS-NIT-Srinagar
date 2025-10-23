// MODIFIED: Import EventDetail instead of eventCard
import { EventDetail } from "./types/event-details";

// MODIFIED: Change the type to EventDetail[] and update property names
export const upcomingEvents: EventDetail[] = [
  {
    id: "upcoming-1", // Added an ID for consistency
    eventname: "OpenBuild Challenge",
    description: "A theme-based open-source prototyping event where creativity meets code. Build in the open, collaborate freely, and bring your ideas to life!",
    category: "Hackathons", // Added category
    Date: "2025-11-10",
    startTime: "10:00 AM",
    endTime: "4:00 PM",
    venue: "Main Hall, NIT Srinagar",
    cardImage: "", // Keep placeholder or add image name
    link: "/events/OpenBuild Challenge"
  },
  {
    id: "upcoming-2", // Added an ID for consistency
    eventname: "FOSSConnect: The Open Source Gallery Talk",
    description: "An engaging talk by a FOSS Delegate focused on open collaboration, real-world impact, and how you can start contributing to global projects.",
    category: "Talks", // Added category
    Date: "2025-11-12",
    startTime: "2:00 PM",
    endTime: "5:00 PM",
    venue: "Auditorium, NIT Srinagar",
    cardImage: "", // Keep placeholder or add image name
    link: "/events/FOSSConnect: The Open Source Gallery Talk"
  },
  {
    id: "upcoming-3", // Added an ID for consistency
    eventname: "Git Set Go",
    description: "A hands-on workshop on mastering Git and GitHub — learn version control the practical way through real coding exercises and collaboration.",
    category: "Workshops", // Added category
    Date: "2025-11-15",
    startTime: "11:00 AM",
    endTime: "3:00 PM",
    venue: "Lab 3, NIT Srinagar",
    cardImage: "", // Keep placeholder or add image name
    link: "/events/Git Set Go"
  },
  {
    id: "upcoming-4", // Added an ID for consistency
    eventname: "FixIt: Certificate Generator Edition",
    description: "A contribution sprint around an open-source Certificate Generator project — fix issues, add features, and ship your improvements in style!",
    category: "Workshops", // Added category
    Date: "2025-11-18",
    startTime: "10:00 AM",
    endTime: "4:00 PM",
    venue: "Lab 5, NIT Srinagar",
    cardImage: "", // Keep placeholder or add image name
    link: "/events/FixIt: Certificate Generator Edition"
  }
];
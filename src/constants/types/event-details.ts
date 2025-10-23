export interface EventDetail {
  id: string; 
  eventname: string;
  description: string;
  category: "Workshops" | "Meetups" | "Hackathons" | "Talks";
  Date?: string;
  startTime?: string;
  endTime?: string;
  venue?: string;
  cardImage: string;
    
  // Link from home-events or upcoming events
  link: string;
}

// <-- ADDED THIS INTERFACE -->
export interface EventData {
  "Event Name": string;
  Description: string;
  "Start Time": string;
  "End Time": string;
  Day: string | number;
  "Lead Name": string;
  "Lead Contact Number": string;
  // Add other properties passed to TabView if known
  [key: string]: any; // Allow other properties for TabView
}
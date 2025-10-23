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
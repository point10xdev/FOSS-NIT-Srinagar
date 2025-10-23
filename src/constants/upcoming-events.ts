export interface UpcomingEvent {
  "Event Name": string;
  "Description" : string;
  "Date": string;
  "Start Time": string;
  "End Time": string;
  "Venue" : string;
  "Card Image": string;
}

// Data moved from src/pages/Events/components/EventsHome.tsx
export const upcomingEvents: UpcomingEvent[] = [
  {
    "Event Name": "Intro to Git & GitHub",
    "Description" : "kuch bhi",
    "Date": "kuch bhi",
    "Start Time": "10:00 AM",
    "End Time": "12:00 PM",
    "Venue": "CSE Conference Hall",
    "Card Image": "git-github.jpg"
  },
  {
    "Event Name": "Linux Install Fest",
    "Description" : "kuch bhi",
    "Date": "kuch bhi",
    "Start Time": "1:00 PM",
    "End Time": "4:00 PM",
    "Venue": "Mac Lab 1",
    "Card Image": "linux-fest.jpg"
  }
];
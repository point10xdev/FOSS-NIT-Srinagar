import { EventDetail } from "./types/event-details";

export const allEvents: EventDetail[] = [
  {
    id: "t1",
    eventname: "Intro to Open Source",
    description: "A great talk for beginners.",
    category: "Talks",
    cardImage: "talk1.jpg",
    link: "/events/talks/1"
  },
  {
    id: "w1",
    eventname: "Git & GitHub Workshop",
    description: "Learn the basics of version control.",
    category: "Workshops",
    cardImage: "workshop1.jpg",
    link: "/events/workshops/1"
  },
  {
    id: "t2",
    eventname: "The Future of FOSS",
    description: "An expert panel discussion.",
    category: "Talks",
    cardImage: "talk2.jpg",
    link: "/events/talks/2"
  }
  // ... all other events
];
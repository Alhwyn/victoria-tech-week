export interface CalendarEvent {
  id: number;
  title: string;
  description: string;
  company: string;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  location: string;
  category: string;
  speakers: {
    name: string;
    role: string;
    company: string;
    image: string;
  }[];
  registrationUrl?: string;
  isVirtual: boolean;
  maxAttendees?: number;
  tags: string[];
}

export const calendarEvents: CalendarEvent[] = [
  {
    id: 1,
    title: "TENFOLD TALKS",
    description: "Join us for an insightful discussion with industry leaders about the future of technology and innovation.",
    company: "TENFOLD",
    startDate: "2025-11-17",
    endDate: "2025-11-17",
    startTime: "18:00",
    endTime: "20:00",
    location: "Victoria Conference Centre",
    category: "Tech Talk",
    speakers: [
      {
        name: "Keiver Tremblay",
        role: "CEO",
        company: "Elastic Energy",
        image: "/speakers/1725794919482.jpeg"
      }
    ],
    registrationUrl: "https://www.tenfoldvictoria.com/",
    isVirtual: false,
    maxAttendees: 150,
    tags: ["technology", "innovation", "networking"]
  },
  {
    id: 2,
    title: "Tech Meets Talent: Navigating AI in Recruitment",
    description: "AI is disrupting recruitment for applicants and HR. Come discover the challenges and opportunities in this new era of hiring. UVic's Engineering & Computer Science Co-op team will host a panel of local companies and students.",
    company: "UVic Engineering & Computer Science Co-op",
    startDate: "2025-11-18",
    endDate: "2025-11-18",
    startTime: "17:00",
    endTime: "19:00",
    location: "777 Fort Street, Victoria, BC (Fort Tectoria)",
    category: "Tech Talk",
    speakers: [
      {
        name: "UVic Co-op Team",
        role: "Panel Moderators",
        company: "University of Victoria",
        image: "/speakers/placeholder.jpeg"
      }
    ],
    registrationUrl: "https://www.eventbrite.hk/e/tech-meets-talent-navigating-ai-in-recruitment-tickets-1839054113359",
    isVirtual: false,
    maxAttendees: 100,
    tags: ["AI", "recruitment", "talent", "tech", "networking", "panel"]
  },
  {
    id: 3,
    title: "Startup Intro to VC: Guide for Victoria Founders",
    description: "Learn venture capital basics, meet investors, and get access to 20,000+ investor contacts. This event teaches Victoria startup founders about venture capital and how to secure funding for business growth.",
    company: "HM Events",
    startDate: "2025-11-19",
    endDate: "2025-11-19",
    startTime: "18:00",
    endTime: "20:00",
    location: "Online (Virtual)",
    category: "Workshop",
    speakers: [
      {
        name: "HM Events Team",
        role: "VC Education Specialists",
        company: "HM Events",
        image: "/speakers/placeholder.jpeg"
      }
    ],
    registrationUrl: "https://www.eventbrite.hk/e/startup-intro-to-vc-guide-for-victoria-founders-tickets-1380172365699",
    isVirtual: true,
    maxAttendees: 200,
    tags: ["startup", "VC", "venture-capital", "funding", "founders", "investors"]
  },
  {
    id: 4,
    title: "Prompt Victoria Conference",
    description: "A comprehensive conference featuring multiple speakers discussing AI, machine learning, and the future of software development during Victoria Tech Week.",
    company: "VIATEC",
    startDate: "2025-11-21",
    endDate: "2025-11-21",
    startTime: "09:00",
    endTime: "17:00",
    location: "Victoria Convention Centre",
    category: "Conference",
    speakers: [],
    registrationUrl: "https://members.viatec.ca/event-calendar/Details/prompt-victoria-ai-conference-1447264?sourceTypeId=Hub",
    isVirtual: false,
    maxAttendees: 300,
    tags: ["AI", "machine-learning", "software-development", "conference", "networking"]
  },
  {
    id: 7,
    title: "Supabase Meetup",
    description: "Connect with the Supabase community in Victoria for networking, talks, and local collaboration opportunities.",
    company: "Supabase Community Events",
    startDate: "2025-11-19",
    endDate: "2025-11-19",
    startTime: "10:00",
    endTime: "11:00",
    location: "Victoria, British Columbia",
    category: "Meetup",
    speakers: [
      {
        name: "Keiver Tremblay",
        role: "Host",
        company: "Supabase",
        image: "/speakers/placeholder.jpeg"
      }
    ],
    registrationUrl: "https://luma.com/zh2iwgt5?tk=ue5CRD",
    isVirtual: false,
    maxAttendees: 100,
    tags: ["supabase", "community", "meetup", "networking", "victoria"]
  },
  {
    id: 5,
    title: "Water Connects - Haus of Owl's Projector Club",
    description: "A multi-sensory installation by Projector Club, part of the CTRL+ART+DREAM series. The experience blends poetry, projection, and water to explore the metaphor of water's memory—carrying stories, loss, and renewal.",
    company: "Haus of Owl's Projector Club",
    startDate: "2025-11-14",
    endDate: "2025-11-20",
    startTime: "18:00",
    endTime: "21:00",
    location: "780 Blanshard Street, Victoria",
    category: "Art Installation",
    speakers: [
      {
        name: "Joanna Streetly",
        role: "Poet & Installation Artist",
        company: "Projector Club",
        image: "/speakers/placeholder.jpeg"
      }
    ],
    registrationUrl: "https://www.victoria.ca/community-culture/events/cityvibe-events/haus-owls-projector-club",
    isVirtual: false,
    maxAttendees: 50,
    tags: ["art", "installation", "poetry", "projection", "multi-sensory", "drop-in"]
  },
  {
    id: 6,
    title: "Tour of Reliable Controls Manufacturing Facility",
    description: "VI ASHRAE and iWIST invite you to a dynamic evening of connection and discovery at Reliable Controls. Explore their manufacturing facility and learn about automation and production processes in the building controls industry.",
    company: "ASHRAE Vancouver Island",
    startDate: "2025-11-20",
    endDate: "2025-11-20",
    startTime: "15:00",
    endTime: "18:30",
    location: "Reliable Controls, 120 Hallowell Road Victoria, BC V9A 7K2 Canada",
    category: "Workshop",
    speakers: [
      {
        name: "ASHRAE Vancouver Island",
        role: "Event Organizers",
        company: "ASHRAE Vancouver Island",
        image: "/speakers/placeholder.jpeg"
      }
    ],
    registrationUrl: "https://www.eventbrite.ca/e/tour-of-reliable-controls-manufacturing-facility-tickets-1839415714919",
    isVirtual: false,
    maxAttendees: 100,
    tags: ["manufacturing", "automation", "facility-tour", "production-process", "reliable-controls", "building-controls", "engineering"]
  },
  {
    id: 8,
    title: "Innovation in an Age of Uncertainty",
    description: "Join us for an engaging discussion on navigating innovation and technology in uncertain times. This event brings together thought leaders and innovators to explore strategies for thriving in today's rapidly changing landscape.",
    company: "Victoria Tech Week",
    startDate: "2025-11-18",
    endDate: "2025-11-18",
    startTime: "16:00",
    endTime: "20:00",
    location: "Redbrick, 1515 Douglas Street",
    category: "Tech Talk",
    speakers: [],
    registrationUrl: "https://www.eventbrite.ca/e/innovation-in-an-age-of-uncertainty-tickets-1867508290569?aff=oddtdtcreator",
    isVirtual: false,
    tags: ["innovation", "technology", "networking", "uncertainty", "strategy"]
  },
  {
    id: 9,
    title: "Greentech Drinks - Victoria Tech Week Special Event",
    description: "Special edition of Green Drinks Victoria hosted at the Union Club in partnership with Westcom Business Solutions. Includes welcome drink, appetizers, showcase stations from local green tech companies, and networking with Victoria sustainability and tech crowd. Registration approval required.",
    company: "Green Drinks Victoria",
    startDate: "2025-11-19",
    endDate: "2025-11-19",
    startTime: "17:00",
    endTime: "22:00",
    location: "The Union Club of British Columbia, 805 Gordon St Victoria BC V8W 1Z6, Begbie Room and Lounge",
    category: "Climate/Greentech",
    speakers: [
      {
        name: "Chris Fernando",
        role: "Host",
        company: "Green Drinks Victoria",
        image: "/speakers/placeholder.jpeg"
      },
      {
        name: "Tony Ronson",
        role: "Host",
        company: "Green Drinks Victoria",
        image: "/speakers/placeholder.jpeg"
      },
      {
        name: "David Webb",
        role: "Host",
        company: "Green Drinks Victoria",
        image: "/speakers/placeholder.jpeg"
      },
      {
        name: "Keiver Tremblay",
        role: "Host",
        company: "Green Drinks Victoria",
        image: "/speakers/1725794919482.jpeg"
      }
    ],
    registrationUrl: "https://luma.com/ghffntif",
    isVirtual: false,
    tags: ["greentech", "climate", "sustainability", "networking", "green-drinks", "victoria-tech-week"]
  },
  {
    id: 10,
    title: "Unlocking Opportunities in Canada's Defence Sector - The ITB Academy advantage",
    description: "Join ITB Academy.ca a Goverly venture, for an inside look at how Canadian innovators can tap into billions in federal defence spending through the Industrial and Technological Benefits ITB Policy. Learn how our ITB Phase Alpha process helps companies identify alignment with defence primes, position their technologies under key industrial capabilities, and convert strategic relationships into revenue-generating opportunities. This session is ideal for companies in advanced manufacturing, clean technology, aerospace, artificial intelligence, quantum, cybersecurity, software development, telecommunications, energy storage, robotics, simulation and training, materials science, data analytics, transportation, and autonomous systems, as well as research institutions and engineering firms looking to break into Canada's growing defence and aerospace supply chain. Light snacks provided. Presentation 11am-11:45am, questions and networking to follow.",
    company: "Goverly",
    startDate: "2025-11-19",
    endDate: "2025-11-19",
    startTime: "11:00",
    endTime: "13:00",
    location: "777 Fort Street, Victoria, BC (Fort Tectoria)",
    category: "Workshop",
    speakers: [
      {
        name: "ITB Academy.ca",
        role: "Presenter",
        company: "Goverly",
        image: "/speakers/placeholder.jpeg"
      }
    ],
    registrationUrl: "https://www.lamppostsocial.com/victoria-tech-week/",
    isVirtual: false,
    tags: ["defence", "saas", "artificial-intelligence", "workshop", "goverly", "itb-policy", "government", "procurement", "cybersecurity", "aerospace"]
  }
];

// Helper functions for calendar events
export const getEventsByDate = (date: string): CalendarEvent[] => {
  return calendarEvents.filter(event => event.startDate === date);
};

export const getUpcomingEvents = (limit?: number): CalendarEvent[] => {
  const today = new Date().toISOString().split('T')[0];
  const upcoming = calendarEvents
    .filter(event => event.startDate >= today)
    .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
  
  return limit ? upcoming.slice(0, limit) : upcoming;
};

export const getEventsByCategory = (category: string): CalendarEvent[] => {
  return calendarEvents.filter(event => event.category === category);
};

export const getVirtualEvents = (): CalendarEvent[] => {
  return calendarEvents.filter(event => event.isVirtual);
};

export const getEventsByTag = (tag: string): CalendarEvent[] => {
  return calendarEvents.filter(event => event.tags.includes(tag.toLowerCase()));
};

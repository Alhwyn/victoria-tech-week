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
    title: "Cyrus Cafe w/ Claude Code",
    description: "Join us for a casual meetup at Nourish cafe featuring discussions about Claude Code and AI-assisted development.",
    company: "Ceedar",
    startDate: "2025-11-18",
    endDate: "2025-11-18",
    startTime: "10:00",
    endTime: "11:30",
    location: "225 Quebec St, Victoria, BC V8V 1W2",
    category: "Meetup",
    speakers: [
      {
        name: "Connor Turland",
        role: "CEO",
        company: "Ceedar",
        image: "/speakers/connor.jpeg"
      }
    ],
    registrationUrl: "https://luma.com/zv592wv6",
    isVirtual: false,
    tags: ["AI", "claude", "meetup", "networking", "development"]
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
    startDate: "2025-11-20",
    endDate: "2025-11-20",
    startTime: "08:00",
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
    id: 13,
    title: "Viala Technologies: Open House",
    description: "Come on by to Viala Technologies, your local special-purpose machine manufacturer and see how we do things! We started with just one employee 10 years ago, and have since grown into a staple in the Victorian manufacturing industry. Our new space is nearly 5000 square feet and we want to build your new machine in it. To celebrate tech week, our team of professionals will show you what it takes to build custom machines, including electrical, mechanical, and software demonstrations. We're excited to see you! Contact: info@vialatechnologies.com, 1 (250) 886-5526",
    company: "Viala Technologies",
    startDate: "2025-11-17",
    endDate: "2025-11-17",
    startTime: "16:00",
    endTime: "19:00",
    location: "2817 Quesnel St, Victoria, BC V8T 4K2",
    category: "Open House",
    speakers: [],
    isVirtual: false,
    tags: ["manufacturing", "open-house", "custom-machines", "electrical", "mechanical", "software", "facility-tour", "demonstration"]
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
  },
  {
    id: 11,
    title: "Discover Tectoria 2025",
    description: "Discover Tectoria is an exposition of more than 75 Greater Victoria tech companies, research projects, interactive displays and community partners under ONE roof. It is one of the only events where locals and visitors come together to discover the innovation that is stemming from right here in Tectoria. Note about Startup Alley Exhibitor Package for tech startup companies that are 3 years old or less.",
    company: "VIATEC",
    startDate: "2025-11-21",
    endDate: "2025-11-21",
    startTime: "10:00",
    endTime: "17:00",
    location: "Crystal Garden at 713 Douglas St Victoria BC V8W 3M6 Canada",
    category: "Exposition",
    speakers: [],
    registrationUrl: "https://members.viatec.ca/ap/Events/Register/xRF47nwuMCYC7",
    isVirtual: false,
    tags: ["exposition", "innovation", "tech-companies", "networking", "startup-alley", "tectoria"]
  },
  {
    id: 12,
    title: "Victoria Data Society Hockey Event with Victoria Royals",
    description: "Join the Victoria Data Society for an exciting hockey night with the Victoria Royals at Save-On-Foods Memorial Centre. Tickets are $17.50 for Section 114. A great opportunity to network with fellow data enthusiasts while enjoying a thrilling hockey game!",
    company: "Victoria Data Society",
    startDate: "2025-11-18",
    endDate: "2025-11-18",
    startTime: "19:00",
    endTime: "22:00",
    location: "Save-On-Foods Memorial Centre, 1920 Blanshard Street, Victoria, BC",
    category: "Networking",
    speakers: [],
    registrationUrl: "https://selectyourtickets.evenue.net/promotions/event/VR2526/VG12/VICDATA",
    isVirtual: false,
    tags: ["hockey", "data", "networking", "sports", "community", "victoria-royals"]
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

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
    location: "Victoria, British Columbia",
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
  },
  {
    id: 14,
    title: "Housing Systems Lab: AI for Real Infrastructure",
    description: "A hands-on working session for people in housing, construction and civic innovation who want to build faster with AI, automation and modern systems thinking. Jam on real bottlenecks across permitting, data, manufacturing, financing and coordination. Bring your skills, your laptop and an appetite for speed. Meet builders actually shipping real AI tools. Learn practical ways to apply AI to infrastructure problems. Help shape the blueprint for a faster Victoria. No pitches. No panels. Just problem-solving. Outputs will be published in the Victoria Housing Systems Playbook following Tech Week.",
    company: "Tenfold Victoria x BC Innovation Coalition",
    startDate: "2025-11-17",
    endDate: "2025-11-17",
    startTime: "11:30",
    endTime: "13:30",
    location: "1700 Blanshard St, Victoria, BC V8W 0G8",
    category: "Workshop",
    speakers: [
      {
        name: "Keiver Tremblay",
        role: "Host",
        company: "Tenfold Victoria",
        image: "/speakers/1725794919482.jpeg"
      },
      {
        name: "Aaron Nelson",
        role: "Co-Host",
        company: "BC Innovation Coalition",
        image: "/speakers/placeholder.jpeg"
      },
      {
        name: "Chris Fernando",
        role: "Co-Host",
        company: "Tenfold Victoria",
        image: "/speakers/placeholder.jpeg"
      }
    ],
    registrationUrl: "https://luma.com/jj349zso",
    isVirtual: false,
    tags: ["AI", "housing", "infrastructure", "workshop", "tenfold", "construction", "civic-innovation", "automation"]
  },
  {
    id: 15,
    title: "Tenfold Victoria: Founder's Firesides",
    description: "A night by the fire with lightning talks from founders building real products in Victoria. No fluff and no posturing, just truth, lessons learned and the raw reality behind the work. Unfiltered founder stories you won't get on any panel. Meet the builder core of Victoria. Spark collaborations for the rest of Tech Week. Short talks, sharp ideas, strong energy.",
    company: "Tenfold Victoria",
    startDate: "2025-11-17",
    endDate: "2025-11-17",
    startTime: "19:00",
    endTime: "21:00",
    location: "Victoria, British Columbia",
    category: "Meetup",
    speakers: [
      {
        name: "Keiver Tremblay",
        role: "Host",
        company: "Tenfold Victoria",
        image: "/speakers/1725794919482.jpeg"
      },
      {
        name: "Owen Works",
        role: "Co-Host",
        company: "Tenfold Victoria",
        image: "/speakers/placeholder.jpeg"
      }
    ],
    registrationUrl: "https://luma.com/1vd0qf1g",
    isVirtual: false,
    tags: ["founders", "startup", "meetup", "tenfold", "lightning-talks", "networking"]
  },
  {
    id: 16,
    title: "Tenfold Victoria - #077: In The Arena",
    description: "Join us at the Victoria Royals game as a Tenfold Field Unit to connect with others in the tech community. Shoutout to Victoria Data Society for securing a group rate and an entire section of seating. This is the perfect opportunity to kick back, meet people and show up strong to celebrate Victoria Tech Week. Puck drops at 7:05 PM. Meet in Section 114 with the VDS crowd and the rest of the Victoria tech community. Group rate: $17.50 (regular: $25). Come as you are. Bring a jacket. Bring a friend. Builders in the wild.",
    company: "Tenfold Victoria",
    startDate: "2025-11-18",
    endDate: "2025-11-18",
    startTime: "19:00",
    endTime: "22:00",
    location: "Save-On-Foods Memorial Centre, 1925 Blanshard St Suite 101, Victoria, BC V8T 4J2",
    category: "Networking",
    speakers: [
      {
        name: "Keiver Tremblay",
        role: "Host",
        company: "Tenfold Victoria",
        image: "/speakers/1725794919482.jpeg"
      },
      {
        name: "Build Canada",
        role: "Co-Host",
        company: "Build Canada",
        image: "/speakers/placeholder.jpeg"
      }
    ],
    registrationUrl: "https://luma.com/ydwz328f",
    isVirtual: false,
    tags: ["hockey", "networking", "tenfold", "sports", "community", "victoria-royals", "tech-week"]
  },
  {
    id: 17,
    title: "Tenfold Victoria - Future Skills Lab",
    description: "Two back to back 1-hour blocks of high-signal, builder-focused workshop sessions led by some of Victoria's sharpest builders, founders and creatives. Pick one session to go deep, or move between multiple. Block 1 Sessions (12-1 PM): AI search & GEO (Lautaro) - Modern approaches for ranking, retrieval and AI-driven search. Fundraising IRL (Ben & Keiver, Elastic Energy) - What actually matters when raising a pre-seed or seed round in 2025. UX Design (Suzanne & Kirk) - How senior designers break down flows, evaluate friction and rebuild clean, opinionated interfaces. Block 2 Sessions (1-2 PM): Gen AI creativity (Kirk Clyne) - A fast dive into the frontier of AI-powered art, video, and creative workflows. UX for AI (Suzanne) - Design patterns for LLM-infused products. PMF & Product Loops (Trelent) - What product-market fit actually looks like today. System architecture (Veilstream) - Patterns, tradeoffs and reasoning frameworks senior engineers use when designing real systems.",
    company: "Tenfold Victoria",
    startDate: "2025-11-19",
    endDate: "2025-11-19",
    startTime: "12:00",
    endTime: "14:00",
    location: "Victoria, British Columbia",
    category: "Workshop",
    speakers: [
      {
        name: "Keiver Tremblay",
        role: "Host",
        company: "Tenfold Victoria",
        image: "/speakers/1725794919482.jpeg"
      }
    ],
    registrationUrl: "https://luma.com/dvy7e4oc",
    isVirtual: false,
    tags: ["AI", "workshop", "tenfold", "victoria-tech-week", "skills", "learning", "UX", "fundraising", "architecture"]
  },
  {
    id: 18,
    title: "Tenfold Victoria - Afterlight: Victoria Tech Week Finale w/ Dopa",
    description: "Afterlight - the unofficial finale of Victoria Tech Week 2025. Hosted by: Dopa x Tenfold Victoria. Supported by: LampPost Social, Tourismo & Elastic Energy. A high-energy rooftop finale for founders, builders, students and visitors who want to end their week on a cultural high note. Music, friends, creativity and a view that does half the work. Features DJ set by Dopa, rooftop refreshments, 'Bet on Yourself' Zone with pool, poker, push-ups, pitch, etc., micro-goal bet boards, hourly raffles, ambient lighting and interactive visuals. $20 CAD covers venue, gear, beverages and cleanup. Any surplus supports future Tenfold events and grants. Ages 19+, wristband required for entry.",
    company: "Tenfold Victoria",
    startDate: "2025-11-21",
    endDate: "2025-11-21",
    startTime: "20:00",
    endTime: "23:30",
    location: "Victoria, British Columbia",
    category: "Networking",
    speakers: [
      {
        name: "Keiver Tremblay",
        role: "Host",
        company: "Tenfold Victoria",
        image: "/speakers/1725794919482.jpeg"
      },
      {
        name: "Owen Works",
        role: "Co-Host",
        company: "Tenfold Victoria",
        image: "/speakers/placeholder.jpeg"
      },
      {
        name: "Jared Leary",
        role: "Co-Host",
        company: "Dopa",
        image: "/speakers/placeholder.jpeg"
      }
    ],
    registrationUrl: "https://luma.com/grrmmj2p",
    isVirtual: false,
    tags: ["networking", "social", "music", "finale", "tenfold", "victoria-tech-week", "rooftop", "dj"]
  },
  {
    id: 19,
    title: "WHEN AIs START CHATTING: The Gossip protocols of MCP and A2A",
    description: "This session offers a summary of the exciting evolution of Modern AI from isolated models into interconnected Agentic AI systems that actively share knowledge, coordinate, and collaborate. Attendees will gain a foundational understanding of the Basics of AI and an in-depth overview of core Agentic AI concepts. We will demonstrate how these agents achieve complex goals by utilizing key components like Tools, Memory, and Planning. The discussion will highlight the critical need for communication standards, explaining why protocols such as the Multi-Agent Coordination Protocol (MCP) and Agent-to-Agent (A2A) messaging are now essential for system functionality. The event concludes with a focus on Best Practices, providing practical guidance on what to design, monitor, and restrict when building effective multi-agent systems, followed by Live Demonstrations of agents in action.",
    company: "AOT Technologies",
    startDate: "2025-11-21",
    endDate: "2025-11-21",
    startTime: "13:30",
    endTime: "15:30",
    location: "Downtown Victoria, 325-1207 Douglas Street",
    category: "Tech Talk",
    speakers: [],
    registrationUrl: "https://www.eventbrite.ca/e/victoria-tech-week-session-hosted-by-aot-technologies-tickets-1964474976537?aff=oddtdtcreator",
    isVirtual: false,
    tags: ["AI", "agentic-ai", "MCP", "A2A", "multi-agent-systems", "tech-talk", "victoria-tech-week", "machine-learning"]
  },
  {
    id: 20,
    title: "AI Conference After Party",
    description: "🌴🎉 IT'S AFTER PARTY TIME! 🎉🌴 The Prompt Victoria AI Conference is bringing the brains... now VDS is bringing the vibes. Karaoke from 7:00 PM – 9:00 PM. Blue Hawaiian drink special ALL NIGHT! Good vibes. Good times. Good people. Good music. This is your moment to kick back, sing loud, sip tropical, and hang with the Victoria tech fam in a place that feels like home. No tickets. No pressure. Just show up and let the night unfold. Let's make it legendary.",
    company: "Victoria Data Society",
    startDate: "2025-11-20",
    endDate: "2025-11-20",
    startTime: "19:00",
    endTime: "21:00",
    location: "Tora Tiki, 713 Cormorant Street, Victoria, BC",
    category: "Networking",
    speakers: [
      {
        name: "Anu Jolliffe",
        role: "Host",
        company: "Victoria Data Society",
        image: "/speakers/1750437762895.jpeg"
      }
    ],
    registrationUrl: "https://www.meetup.com/victoria-data/events/311919819/",
    isVirtual: false,
    tags: ["AI", "networking", "karaoke", "social", "after-party", "data", "victoria-tech-week"]
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

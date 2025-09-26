export const posterSessionData = {
  title: "Young Researchers' Poster Session",
  tagline: "Showcase Your Research. Shape the Future of Highways, Logistics & Urban Mobility.",
  deadline: "20 Oct 2025",
  notification: "30 Oct 2025",
  showcase: "21-22 November 2025",
  selectedCount: 15,
  prizes: 3,
  email: "agnivesh.civ@iitbhu.ac.in",
  themes: [
    "Highways & Expressway Planning",
    "Freight Systems & PM GatiShakti",
    "Logistics & Supply Chains",
    "Urban Transport & City–Highway Integration",
    "Electric Mobility & Future Corridors",
    "Road Safety & AI-enabled Solutions",
    "Sustainable Pavements & Materials",
    "Inclusivity in Transport (People with disability, gender, mobility)"
  ],
  guidelines: {
    eligibility: "UG/Master's/PhD students from Indian universities",
    format: "Extended abstract (max. 500 words)",
    submission: "PDF, Times New Roman, 12pt, single spacing",
    focus: "Practical relevance for field implementation"
  }
};

export const eventData = {
  name: "MargShakti Industry Conclave 2025",
  tagline: "Highways, Logistics & Urban Futures in the Pathways to Viksit Bharat 2047!",
  dates: "21-22 November 2025",
  venue: "IIT (BHU) Varanasi",

  hosts: [
    {
      name: "Dr. Agnivesh Pani",
      designation: "Assistant Professor",
      institution: "IIT (BHU) Varanasi"
    },
    {
      name: "Prof. Ankit Gupta",
      designation: "Professor and MoRTH Chair",
      institution: "IIT (BHU) Varanasi"
    }
  ],

  stats: [
    { value: "2", label: "Days", suffix: "" },
    { value: "10", label: "Sessions", suffix: "+" },
    { value: "20", label: "Speakers", suffix: "+" },
    { value: "Oct 20", label: "Poster Deadline", suffix: "", isDate: true }
  ],

  keyHighlights: [
    "MoRTH Freight Planning Manual Launch",
    "AI-Powered Highway Solutions",
    "Industry-Academia Collaboration",
    "Young Researchers's Symposium of Innovative Solutions"
  ]
};

export const sessionsData = {
  day1: {
    date: "21 November 2025",
    title: "Highways & Freight in the AI Era",
    sessions: [
      {
        id: "inaugural",
        time: "09:30 - 11:00",
        title: "Inaugural Session & Flagship Launches",
        type: "keynote",
        backgroundImage: "/images/sessions/inaugural.jpg",
        speakers: [
          "Invited Chief Guest #1 (MoRTH)",
          "Invited Chief Guest #2 (MoRTH)",
          "Director, IIT (BHU)"
        ],
        launches: [
          "MoRTH Freight Planning Manual",
          "Freight Planning Software IIT-FREIGHT"
        ]
      },
      {
        id: "session1",
        time: "11:15 - 12:45",
        title: "RashtraPath – Highways as the Arteries of India",
        backgroundImage: "/images/sessions/highways.jpg",
        chair: "Invited Speaker #1 (Arcadis)",
        panelists: [
          "Invited Speaker #2 (NICDC)",
          "Invited Speaker #3 (MoRTH)",
          "Invited Speaker #4 (IIT BHU)"
        ],
        focus: "National highways as drivers of integration & growth"
      },
      {
        id: "session2",
        time: "14:00 - 15:30",
        title: "Gati aur Soch – AI in Highway Planning",
        backgroundImage: "/images/sessions/ai-tech.jpg",
        chair: "Invited Speaker #5 (IIT BHU)",
        panelists: [
          "Invited Speaker #6 (DFCCIL)",
          "Invited Speaker #7 (NICDC)",
          "Invited Speaker #8 (ITSPE)"
        ],
        demo: "IIT-Freight Software"
      },
      {
        id: "session3",
        time: "15:45 - 17:15",
        title: "Marg Shakti for Bharat – Freight, Logistics & PM GatiShakti",
        backgroundImage: "/images/sessions/freight.jpg",
        chair: "Invited Speaker #9 (DFCCIL)",
        panelists: [
          "Invited Speaker #10 (Trucking Company #1)",
          "Invited Speaker #11 (Deloitte)",
          "Invited Speaker #12 (Trucking Company #2)",
          "Invited Speaker #13 (World Bank/ADB)"
        ],
        launch: "Inland Water Transport Mode Shift Study Report"
      },
      {
        id: "session4",
        time: "17:30 - 18:15",
        title: "Innovation Showcase – Next-Gen Decision Tools",
        backgroundImage: "/images/sessions/innovation.jpg",
        moderator: "Invited Speaker #14 (ITSPE)",
        presenters: "IIT BHU Student Teams",
        launches: [
          "TARAK (Army LLM Assistant)",
          "WeeBee (Gamified Commuting)",
          "PwD Travel Needs Dashboard"
        ]
      }
    ]
  },
  day2: {
    date: "22 November 2025",
    title: "Highways, Economy & Strategic Logistics",
    sessions: [
      {
        id: "session5",
        time: "TBD",
        title: "Samriddhi ke Path – Highways & UP Trillion-Dollar Economy",
        backgroundImage: "/images/sessions/economy.jpg",
        focus: "How highways drive ODOP, tourism, and logistics",
        chair: "TBD",
        panelists: ["UP Government Officials", "Industry Leaders"]
      },
      {
        id: "session6",
        time: "TBD",
        title: "Nayi Soch, Naye Samagri – Highway Materials Innovation",
        backgroundImage: "/images/sessions/materials.jpg",
        focus: "Recycled materials and sustainable pavements",
        chair: "TBD",
        panelists: ["Materials Experts", "Research Institutions"]
      },
      {
        id: "session7",
        time: "TBD",
        title: "NagarPath – Urban Mobility & Highway Integration",
        backgroundImage: "/images/sessions/urban.jpg",
        focus: "Linking highways with urban transport networks, ring roads, logistics terminals, and smart city mobility solutions",
        chair: "Urban Planning Expert",
        panelists: ["City Officials", "Transport Planners", "Smart City Experts", "Logistics Leaders"]
      },
      {
        id: "session8",
        time: "TBD",
        title: "Surakshit Marg – Road Safety in the AI Era",
        backgroundImage: "/images/sessions/safety.jpg",
        focus: "Crash analytics and safe systems approach",
        chair: "TBD",
        panelists: ["Safety Experts", "AI Specialists"]
      },
      {
        id: "session9",
        time: "TBD",
        title: "Urja Path – Electric Mobility & Future of Highways",
        backgroundImage: "/images/sessions/electric.jpg",
        focus: "EV-ready corridors and renewable integration",
        chair: "TBD",
        panelists: ["EV Industry", "Energy Experts"]
      },
      {
        id: "session10",
        time: "TBD",
        title: "Manthan Samapan – Roadmap to 2047",
        backgroundImage: "/images/sessions/roadmap.jpg",
        focus: "Forward-looking plenary with stakeholder commitments",
        type: "keynote",
        speakers: ["Secretary MoRTH", "Director IIT BHU", "Industry Leaders"]
      }
    ]
  }
};

export const launchesData = [
  {
    id: "freight-manual",
    icon: "🚛",
    title: "MoRTH Freight Planning Manual",
    category: "Documentation",
    description: "First-of-its-kind national reference framework for freight planning in India",
    features: [
      "Structured methodologies",
      "Demand forecasting",
      "Corridor prioritization",
      "Policy evaluation"
    ]
  },
  {
    id: "freight-software",
    icon: "🖥️",
    title: "IIT-Freight Software Prototype",
    category: "Software",
    description: "Interactive digital platform for simulating freight flows and testing growth scenarios",
    features: [
      "Freight flow simulation",
      "Growth scenario testing",
      "Data-driven decisions",
      "Policy impact analysis"
    ]
  },
  {
    id: "tarak",
    icon: "🪖",
    title: "TARAK – Tactical Army Assistant",
    category: "AI/LLM",
    description: "AI-powered Large Language Model assistant for Indian Army's logistics corps",
    features: [
      "SOP retrieval",
      "Convoy route planning",
      "Disruption forecasting",
      "Stress scenario simulation"
    ]
  },
  {
    id: "weebee",
    icon: "🐝",
    title: "WeeBee – Gamified Commuting",
    category: "Mobile App",
    description: "Behavioural mobility app nudging urban commuters toward sustainable travel",
    features: [
      "Gamification elements",
      "Hex-captures",
      "Community challenges",
      "Green commuting rewards"
    ]
  },
  {
    id: "mode-share",
    icon: "📊",
    title: "Mode Share & Growth Dashboard",
    category: "Analytics",
    description: "Data dashboard tracking vehicle growth, mode shares, and future demand",
    features: [
      "RTO data integration",
      "Growth modeling",
      "Demand forecasting",
      "Policy support tools"
    ]
  },
  {
    id: "water-transport",
    icon: "🚢",
    title: "Inland Water Transport Toolkit",
    category: "Research",
    description: "Evaluating inland waterways as alternative freight mode",
    features: [
      "Policy insights",
      "Demand assessment",
      "Integration strategies",
      "Multimodal planning"
    ]
  },
  {
    id: "pwd-dashboard",
    icon: "♿",
    title: "PwD Travel Needs Dashboard",
    category: "Accessibility",
    description: "Digital tool capturing mobility challenges of persons with disabilities",
    features: [
      "Accessibility gaps",
      "Travel patterns",
      "Intervention planning",
      "Inclusive design"
    ]
  },
  {
    id: "traffic-pcu",
    icon: "🚦",
    title: "Traffic PCU Software",
    category: "Traffic Analysis",
    description: "Refined Passenger Car Unit values for Indian road conditions",
    features: [
      "Capacity assessment",
      "Signal design",
      "Highway operations",
      "Indian road calibration"
    ]
  }
];

export const partnersData = {
  status: "To be announced soon"
};
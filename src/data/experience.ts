export type ExperienceCategory =
  | "Leadership"
  | "Teaching & Mentoring"
  | "Volunteer";

export type ExperienceItem = {
  id: string;
  category: ExperienceCategory;
  role: string;
  organization: string;
  date: string;
  bullets: string[];
  projectLink?: {
    label: string;
    href: string;
  };
};

export const experienceCategories: ExperienceCategory[] = [
  "Leadership",
  "Teaching & Mentoring",
  "Volunteer",
];

export const experience: ExperienceItem[] = [
  // Leadership (1-3)
  {
    id: "chairman-himti",
    category: "Leadership",
    role: "Chairman of HIMTI 2026/2027",
    organization: "HIMTI BINUS",
    date: "Feb 2026 - Present",
    bullets: [
      "Spearheaded the strategic direction for HIMTI 2026/2027, overseeing cross-functional divisions to enhance organizational scalability and operational efficiency.",
      "Engineered standardized Work Breakdown Structures (WBS) for flagship events, reducing planning friction, mitigating operational risks, and improving process maintainability for future cohorts.",
      "Supervised event timelines, logistics, and post-program evaluations, establishing clear failure points and monitoring strategies to ensure the reliability of subsequent projects.",
    ],
  },
  {
    id: "coordinator-digifest",
    category: "Leadership",
    role: "Coordinator, Event Division of DIGIFEST 2026",
    organization: "HIMTI@Malang",
    date: "Jul 2025 - Sep 2025",
    bullets: [
      "Managed complex logistical pipelines and external speaker communications.",
      "Directed the end-to-end execution of DIGIFEST 2025, a large-scale technology festival encompassing technical workshops and competitive programming events.",
    ],
  },
  {
    id: "academic-event-team",
    category: "Leadership",
    role: "Academic Event Team",
    organization: "HIMTI@Malang",
    date: "Jan 2025 - Dec 2025",
    bullets: [
      "Coordinated the end-to-end execution of academic and technology-focused events.",
      "Managed communications and logistical requirements with external industry.",
      "Designed and implemented structured event workflows with team.",
    ],
  },

  // Teaching & Mentoring (4-7)
  {
    id: "ta-algo-c",
    category: "Teaching & Mentoring",
    role: "Teaching Assistant, Algorithm & Programming in C",
    organization: "BINUS University, Malang",
    date: "Sep 2025 - Jan 2026",
    bullets: [
      "Mentored students in foundational C programming and algorithmic thinking.",
      "Designed and deployed targeted quizzes and practical exercises focused on algorithmic efficiency and memory safety in C.",
      "Provided additional consultation sessions to help students strengthen problem-solving and coding proficiency.",
    ],
  },
  {
    id: "freshmen-partner",
    category: "Teaching & Mentoring",
    role: "Freshmen Partner, Student Mentorship Program",
    organization: "BINUS University, Malang",
    date: "Sep 2025 - Jun 2026",
    bullets: [
      "Mentored and supported new students throughout their first academic year to help them adapt to university life.",
      "Facilitated strategic knowledge transfer and campus resource allocation, effectively resolving initial academic bottlenecks.",
    ],
  },
  {
    id: "duta-binusian",
    category: "Teaching & Mentoring",
    role: "Duta Binusian BINUS@Malang",
    organization: "BINUS University, Malang",
    date: "Aug 2025 - Dec 2025",
    bullets: [
      "Delivered targeted academic support and technical tutoring for School of Computer Science (SOCS) students.",
      "Streamlined the technical onboarding process for junior students.",
      "Diagnosed specific learning failure points among students and implemented personalized coaching strategies to bridge their knowledge gaps.",
    ],
  },
  {
    id: "freshmen-leader",
    category: "Teaching & Mentoring",
    role: "Freshmen Leader, Student Orientation Program",
    organization: "BINUS University, Malang",
    date: "Jul 2025 - Sep 2025",
    bullets: [
      "Executed structured academic onboarding pipelines for incoming freshmen, accelerating their campus adaptation and reducing initial transition friction.",
    ],
  },

  // Volunteer (8-10)
  {
    id: "himti-luminova",
    category: "Volunteer",
    role: "Initiator, HIMTI LUMINOVA Coaching Clinic (UI/UX and Business Model Canvas)",
    organization: "HIMTI",
    date: "2025",
    bullets: [
      "Spearheaded a city-wide digital literacy initiative across multiple high schools in Malang, delivering modular UI/UX and Business Model Canvas (BMC) training to accelerate student entrepreneurship.",
    ],
  },
  {
    id: "digitera-umkm",
    category: "Volunteer",
    role: "Volunteer Web Developer, DIGITERA UMKM Program",
    organization: "DIGITERA UMKM Program",
    date: "2025",
    bullets: [
      "Developed and supported the implementation of a website for SUPER HERU, helping enhance the business's digital presence and marketing reach.",
    ],
    projectLink: {
      label: "View SuperHeru web project",
      href: "/projects/superheru-web",
    },
  },
  {
    id: "krea-ton-basketball",
    category: "Volunteer",
    role: "Volunteer, Krea-Ton: Teaching Basketball in Saptorenggo Village",
    organization: "Krea-Ton",
    date: "2025",
    bullets: [
      "Led the development and executed structured physical education frameworks focusing on fundamental basketball mechanics for elementary students in Saptorenggo Village.",
    ],
  },
];

export const getLeadershipAndTeachingCount = (): number =>
  experience.filter(
    (item) =>
      item.category === "Leadership" || item.category === "Teaching & Mentoring"
  ).length;
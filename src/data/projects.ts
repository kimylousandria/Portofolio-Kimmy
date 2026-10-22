export type ProjectCategory = "Web" | "AI" | "Desktop" | "AR" | "Community";

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  category: ProjectCategory;
  roles: string[];
  stack: { layer: string; items: string[] }[];
  problem: string;
  solution: string;
  impact: string[];
  keyLearning: string;
  metrics?: { label: string; value: string }[];
  disclaimer?: string;
  extraNote?: string;
  images: { src: string; alt: string }[];
  liveUrl?: string;
  liveUrlConfirmed?: boolean;
};

export const projectCategories: ("All" | ProjectCategory)[] = [
  "All",
  "Web",
  "AI",
  "Desktop",
  "AR",
  "Community",
];

export const projects: Project[] = [
  {
    slug: "heartsense",
    title: "HeartSense",
    subtitle: "Supporting Early Heart Disease Risk Assessment Through AI.",
    date: "Nov 2025",
    category: "AI",
    roles: ["Full-Stack Developer", "Database Engineer"],
    stack: [
      { layer: "Backend", items: ["Laravel", "Cloudflare API"] },
      { layer: "Front End", items: ["Blade", "CSS"] },
      { layer: "Database", items: ["MySQL"] },
      { layer: "AI Model", items: ["XGBoost"] },
    ],
    metrics: [
      { label: "Accuracy", value: "0.7317" },
      { label: "Recall", value: "0.7118" },
    ],
    disclaimer: "Educational project. Results are not a medical diagnosis.",
    problem:
      "Heart disease remains one of the leading causes of death worldwide. Early identification of potential risk factors is very important, yet individuals do not always recognize warning signs or understand their level of risk before symptoms become severe.",
    solution:
      "HeartSense is an AI-driven predictive analytics platform engineered to assess cardiovascular disease risks using patient health data. By leveraging Cloudflare APIs to integrate scalable machine learning models, the system delivers highly reliable risk evaluations, driving early awareness and proactive healthcare management.",
    impact: [
      "Architected an accessible web platform that delivers AI-driven cardiovascular risk assessments, streamlining the user experience for health data input.",
      "Engineered predictive analytics workflows to process raw patient data into actionable insights, significantly accelerating early awareness of potential heart conditions.",
      "Simplified the process of obtaining health risk predictions using patient health data.",
    ],
    keyLearning:
      "Developing HeartSense reinforced my belief that the true value of AI lies in empowering human decision-making. This project deepened my understanding of how to bridge complex technology with preventive healthcare, successfully translating advanced predictive models into accessible and actionable insights for users.",
    images: [
      {
        src: "/images/heartsense1.png",
        alt: "HeartSense login page",
      },
      {
        src: "/images/heartsense3.png",
        alt: "HeartSense landing page and cardiovascular risk assessment overview",
      },
      {
        src: "/images/heartsense4.jpeg",
        alt: "HeartSense patient health data input form",
      },
      {
        src: "/images/heartsense2.png",
        alt: "HeartSense AI risk analysis result and health insights screen",
      },
    ],
  },
  {
    slug: "banking-system",
    title: "Banking System (Sangat Sumlit)",
    subtitle: "Desktop Banking System for Managing Financial Transactions.",
    date: "Nov 2025",
    category: "Desktop",
    roles: ["Full-Stack Developer"],
    stack: [
      { layer: "Backend", items: ["Java with JDBC"] },
      { layer: "Front End", items: ["Java Swing"] },
      { layer: "Database", items: ["MySQL"] },
    ],
    problem:
      "Financial transaction management demands absolute data integrity, robust security protocols, and highly reliable record-keeping. Operating without a scalable, structured architecture introduces severe operational bottlenecks, making balance tracking and fund transfers highly susceptible to human error and critical data discrepancies.",
    solution:
      "I engineered a centralized desktop banking management system using Java Swing and MySQL. By rigorously applying Object-Oriented Programming (OOP) principles, specifically encapsulation to secure account balances and modularity to handle transactions, the application delivers a highly maintainable and reliable architecture for monitoring financial activities and data flows.",
    impact: [
      "Optimized the handling of daily financial transactions by consolidating operations into a single, unified banking system.",
      "Increased speed and precision by automating core banking functions, including deposits, withdrawals, and fund transfers.",
      "Facilitated transparent transaction monitoring with detailed account logs and comprehensive history management.",
      "Delivered a highly structured, intuitive environment that accurately mimics real-world banking workflows for users.",
    ],
    keyLearning:
      "Architecting this banking system solidified my technical proficiency in strict Object-Oriented Programming (OOP), robust database integration, and secure transaction management. This project demonstrated my ability to engineer financial workflows that mirror enterprise-level operations, enforcing absolute data accuracy and consistency to maintain system reliability and deliver a highly secure user experience.",
    images: [
      {
        src: "/images/banking0.png",
        alt: "Banking System login and authentication window",
      },
      {
        src: "/images/banking3.png",
        alt: "Banking System main account dashboard and balance summary",
      },
      {
        src: "/images/banking7.png",
        alt: "Banking System deposit",
      },
      {
        src: "/images/banking5.png",
        alt: "Banking System withdrawal transaction interface",
      },
      {
        src: "/images/banking6.png",
        alt: "Banking System inter-account fund transfer workflow",
      },
      {
        src: "/images/banking4.png",
        alt: "Banking System transaction history log and audit view",
      },
    ],
  },
  {
    slug: "nusantara-guide",
    title: "Nusantara Guide",
    subtitle: "Social online travel agent aggregator.",
    date: "May 2026",
    category: "Web",
    roles: ["Project Manager", "Scrum Master"],
    stack: [
      { layer: "Backend", items: ["Laravel", "PHP"] },
      { layer: "Front End", items: ["Tailwind CSS", "Blade", "JavaScript"] },
      { layer: "Database", items: ["MySQL", "AWS S3"] },
    ],
    problem:
      "Fragmented travel planning across multiple apps overwhelms tourists with choices and deprives local route creators of economic opportunities. This friction turns travel inspiration into decision fatigue, leaving potential trips unbooked and local economies unsupported.",
    solution:
      "Nusantara Guide is engineered to eliminate friction in the travel booking pipeline. By integrating a centralized checkout ecosystem, the platform allows users to seamlessly clone and execute community-curated itineraries in a single transaction. It converts inspiration into action by mitigating user decision fatigue, and leverages an automated financial routing pipeline to ensure transparent, real-time commission distribution for local creators.",
    impact: [
      "The Copy Itinerary feature streamlines the user journey by converting complex travel planning into a direct, single cart checkout, effectively mitigating decision fatigue.",
      "Engineered an automated financial routing system that decentralizes tourism revenue, instantly distributing commissions to local creators to drive sustainable economic growth.",
      "Disrupted the traditional OTA model by architecting a community-driven platform where itineraries are continuously validated through user engagement, ratings, and transparent peer reviews.",
    ],
    keyLearning:
      "Leading Nusantara Guide as Project Manager and Scrum Master solidified my expertise in orchestrating cross-functional teams to build a scalable social-OTA platform. I rigorously managed agile workflows, mitigated API integration risks, and enforced a fault-tolerant architecture. Ultimately, this role bridged the gap between engineering execution and product vision, translating high level goals into actionable sprint deliverables that drive tangible economic impact.",
    images: [
      {
        src: "/images/nusantara1.png",
        alt: "Nusantara Guide home screen and featured community itineraries",
      },
      {
        src: "/images/nusantara2.png",
        alt: "Nusantara Guide destination discovery and route browser",
      },
      {
        src: "/images/nusantara3.png",
        alt: "Nusantara Guide itinerary detail and Copy Itinerary feature",
      },
      {
        src: "/images/nusantara4.png",
        alt: "Nusantara Guide unified single-cart checkout pipeline",
      },
      {
        src: "/images/nusantara5.png",
        alt: "Nusantara Guide creator commission and revenue dashboard",
      },
      {
        src: "/images/nusantara6.png",
        alt: "Nusantara Guide planning your journey",
      },
      {
        src: "/images/nusantara7.png",
        alt: "Nusantara Guide itinerary builder for local route creators",
      },
    ],
  },
  {
    slug: "carnivalhub",
    title: "CARNIVALHUB",
    subtitle: "Digital Ticketing & Food Pre-Order Platform.",
    date: "Nov 2025",
    category: "Web",
    roles: ["Full-Stack Developer"],
    stack: [
      { layer: "Backend", items: ["Laravel", "PHP"] },
      { layer: "Front End", items: ["Tailwind CSS", "Blade", "JavaScript"] },
      { layer: "Database", items: ["MySQL"] },
    ],
    problem:
      "Event organizers constantly battle operational bottlenecks when processing high-volume ticket and food transactions during peak hours. Relying on manual workflows introduces critical failure points, directly resulting in severe queue latency, logistical friction, and a degraded attendee experience.",
    solution:
      "Engineered a centralized web platform integrating ticketing and logistics pre-order pipelines into a unified transaction ecosystem. By automating previously manual workflows, the system actively mitigates on-ground bottlenecks, optimizing operational efficiency for organizers while ensuring a frictionless, zero-latency experience for attendees.",
    impact: [
      "Digitized the booking ecosystem to streamline ticket purchasing, significantly optimizing user accessibility and accelerating transaction completion.",
      "Engineered an automated pre-order logistics pipeline, drastically reducing on-ground bottlenecks and enforcing a zero-wait attendee experience.",
      "Consolidated complex transaction data into a unified dashboard, empowering organizers with streamlined, highly maintainable order management workflows.",
    ],
    keyLearning:
      "Building this platform reinforced that successful software relies on solving real user needs, not just stacking features. This project demonstrated how a well-structured system can simultaneously simplify backend operations for organizers and deliver a frictionless, enjoyable experience for attendees.",
    images: [
      {
        src: "/images/carnivalhub1.png",
        alt: "CARNIVALHUB event landing page and digital ticketing portal",
      },
      {
        src: "/images/carnivalhub2.png",
        alt: "CARNIVALHUB Admin page",
      },
      {
        src: "/images/carnivalhub4.jpeg",
        alt: "CARNIVALHUB invoice order page ",
      },
      {
        src: "/images/carnivalhub3.png",
        alt: "CARNIVALHUB organizer order management and transaction dashboard",
      },
      
    ],
  },
  {
    slug: "nutritales-ar",
    title: "NutriTalesAR",
    subtitle:
      "Teaching Healthy Eating Habits Through Augmented Reality Storytelling.",
    date: "Apr 2025",
    category: "AR",
    roles: ["AR Developer"],
    stack: [
      { layer: "Development", items: ["Unity"] },
      { layer: "AR Technology", items: ["Vuforia"] },
    ],
    problem:
      "Traditional learning methods often fail to effectively engage children in health education. Without interactive elements, crucial topics like healthy eating struggle to resonate, ultimately preventing the development of long-term behavioral awareness.",
    solution:
      'I built an augmented reality (AR) storybook that merges interactive digital storytelling with essential health education. By leveraging AR technology, this project transforms traditional nutritional lessons into an immersive, highly engaging experience, making it significantly easier for young learners to understand and adopt healthy eating habits. The story book is "The Adventures of Tummy and the Healthy Heroes".',
    impact: [
      "Elevated children's learning participation by transforming static reading into a dynamic, AR-driven storytelling experience.",
      "Simplified complex nutritional concepts into digestible, visually engaging lessons that are easy for young learners to grasp.",
      "Bridged narrative design with digital technology to deliver a deeply captivating and modernized educational journey.",
    ],
    keyLearning:
      "Developing this AR storybook reinforced that technology alone cannot drive behavioral change. I learned that bridging immersive AR with compelling storytelling is essential to make complex educational concepts memorable. Ultimately, this project deepened my ability to design digital experiences that are not just technically sound, but genuinely empathetic and impactful for young users.",
    images: [
      {
        src: "/images/NutriTalesAR1.png",
        alt: "NutriTales Scanning Procces",
      },
      {
        src: "/images/NutriTalesAR2.jpg",
        alt: "NutriTales HardBook",
      },
      {
        src: "/images/NutriTalesAR3.png",
        alt: "Procces Making of NutriTales AR with Unity Engine",
      },
    ],
     // Uses designed placeholder cover until nutritales1.png... are added
  },
  {
    slug: "superheru-web",
    title: "SuperHeru web",
    subtitle: "Strengthening Digital Presence for Local Businesses.",
    date: "Apr 2025",
    category: "Community",
    roles: ["Full-Stack Developer"],
    stack: [{ layer: "Front End", items: ["HTML", "CSS"] }],
    extraNote: "Built as part of the DIGITERA UMKM volunteer program.",
    liveUrl: "https://superheru.netlify.app",
    liveUrlConfirmed: false, // Set to true once owner confirms the site is live
    problem:
      "Depending too much on traditional marketing limits a small business's reach and visibility. Without a proper digital presence, it creates a direct barrier, making it hard for potential customers to discover the business and access product information online.",
    solution:
      "I developed a company profile website for Superheru, a local snack brand, to build its digital presence and make it easier for customers to find them online. The platform features a clean, user-friendly interface that clearly displays their chip catalog, business information, and contact details to ensure a seamless browsing experience.",
    impact: [
      "Built a dedicated company profile website that successfully transitioned Superheru into the digital space, significantly increasing brand visibility.",
      "Streamlined the way potential customers access the snack catalog, business details, and contact information through an easy-to-navigate layout.",
      "Elevated the brand's professional presentation to build trust and better engage potential customers.",
    ],
    keyLearning:
      "Building the Superheru website taught me that a successful digital product must balance technical execution with real business needs. An effective company profile does not require overly complex features; it relies on clear, user-centric design that helps customers find information quickly. This project highlighted how straightforward web solutions can create a meaningful impact for local businesses transitioning into the digital space.",
    images: [
      {
        src: "/images/superheru2.png",
        alt: "SuperHeru web landing page and brand showcase",
      },
      {
        src: "/images/superheru1.png",
        alt: "SuperHeru web snack product catalog and contact section",
      },
    ],
  },
  {
    slug: "franss-space",
    title: "FransSpace",
    subtitle:
      "Strengthening Digital Presence for Local boarding house and property owners.",
    date: "Apr 2025",
    category: "Web",
    roles: ["Full-Stack Developer"],
    stack: [{ layer: "Front End", items: ["HTML", "CSS"] }],
    problem:
      "The demand for boarding houses is growing as more students and professionals relocate. However, the search process remains highly inefficient. Renters often struggle with scattered information about prices, facilities, and actual room conditions. Relying on word-of-mouth or visiting locations one by one simply wastes valuable time.",
    solution:
      "I built a web platform to help students and professionals easily find temporary housing. By providing clear information on prices, locations, and facilities, the website allows users to quickly find a place that fits their budget and needs without the usual hassle.",
    impact: [
      "Speed up the process of finding temporary housing for students and professionals.",
      "Helped property owners neatly organize their room and facility data in one platform.",
      "Eliminated the hassle of manual searches, saving significant time for both renters and owners.",
      "Acted as a marketing tool to help owners promote their properties to a wider audience.",
    ],
    keyLearning:
      "Developing this platform reinforced that a successful digital product prioritizes clear data presentation over complex technical features. It demonstrated how organizing transparent information can directly solve real-world offline frustrations for users while simultaneously streamlining daily management for property owners.",
    images: [
      {
        src: "/images/franspace1.png",
        alt: "FransSpace boarding house platform hero and property overview",
      },
      {
        src: "/images/franspace2.png",
        alt: "FransSpace room listings with pricing and facility details",
      },
      {
        src: "/images/franspace3.png",
        alt: "FransSpace room condition gallery and amenities breakdown",
      },
      {
        src: "/images/franspace4.png",
        alt: "FransSpace location map and neighborhood guide",
      },
      
    ],
  },
];

export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((project) => project.slug === slug);

export const getAdjacentProjects = (
  slug: string
): { prev: Project | null; next: Project | null } => {
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return { prev: null, next: null };
  const prev = index > 0 ? projects[index - 1] : projects[projects.length - 1];
  const next = index < projects.length - 1 ? projects[index + 1] : projects[0];
  return { prev, next };
};
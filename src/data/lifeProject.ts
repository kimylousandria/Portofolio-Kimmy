export type LifeProjectMosaicItem = {
  caption: string;
  src?: string;
  alt: string;
  span?: "wide" | "tall" | "normal";
};

export type LifeProjectData = {
  heading: string;
  paragraphs: string[];
  mosaic: LifeProjectMosaicItem[];
};

export const lifeProject: LifeProjectData = {
  heading: "My Life Project",
  paragraphs: [
    "My ultimate life project is the continuous architecture of my own growth. I intentionally step outside my comfort zone, taking on leadership mandates that test my adaptability and resilience.",
    "To me, success is measured not by static milestones, but by the agility to learn and iterate in the face of uncertainty. The meaningful relationships and diverse viewpoints I encounter serve as vital components that shape my aspirations. Moving forward, I approach every challenge with curiosity, humility, and a purpose driven mindset, building a better version of myself every day.",
  ],
  mosaic: [
    {
      caption: "Freshmen Leader",
      src: "/images/freshmen.jpeg",
      alt: "Freshmen Leader orientation group photo at BINUS University",
      span: "wide",
    },
    {
      caption: "Teaching Assistant",
      src: "/images/TeachingAsistant.jpeg",
      alt: "Teaching Assistant session for Algorithm and Programming in C",
      span: "normal",
    },
    {
      caption: "HIMTI Abroad",
      src: "/images/himtimalang.jpeg",
      alt: "HIMTI cohort and comparative study activities",
      span: "normal",
    },
    {
      caption: "Duta Binusian Abroad",
      src: "/images/dutabinusian.jpeg",
      alt: "Duta Binusian mentorship and ambassador program",
      span: "wide",
    },
    {
      caption: "HIMTI Event",
      src: "/images/himti-event.jpg",
      alt: "HIMTI flagship technology event",
      span: "normal",
    },
    {
      caption: "Freshmen Partner",
      src: "/images/FP.jpg", // Missing asset — renders designed placeholder card
      alt: "Freshmen Partner year-long student mentorship",
      span: "normal",
    },
  ],
};
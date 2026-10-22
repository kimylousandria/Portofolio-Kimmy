export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "Programming",
    items: ["Python", "Java", "C", "SQL", "PHP", "Go", "C++"],
  },
  {
    category: "Web Development",
    items: ["Laravel", "HTML", "CSS", "JavaScript"],
  },
  {
    category: "Cloud",
    items: ["Microsoft Azure", "AlibabaCloud"],
  },
  {
    category: "Tools",
    items: ["Git", "MySQL", "Docker", "Cisco"],
  },
  {
    category: "Languages",
    items: ["Indonesian (Native)", "English (Proficient)"],
  },
  {
    category: "Interests",
    items: [
      "Software Engineering",
      "Cloud Computing",
      "Security & Network",
    ],
  },
];
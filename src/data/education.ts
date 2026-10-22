export type EducationItem = {
  institution: string;
  degree: string;
  location?: string;
  gpa?: string;
  date: string;
  coursework?: string[];
};

export const education: EducationItem[] = [
  {
    institution: "Bina Nusantara University (BINUS)",
    degree: "Computer Science Undergraduate",
    gpa: "3.69/4.00",
    date: "Sep 2024 - Present",
    coursework: [
      "Software Engineering",
      "Artificial Intelligence",
      "Data Structures & Algorithms",
      "Algorithm and Programming",
      "Database",
      "Object-Oriented Programming",
      "Security And Network",
    ],
  },
  {
    institution: "Brawijaya Smart School",
    degree: "Natural Science Major",
    location: "Malang, Indonesia",
    date: "14 Jul 2021 - 3 May 2024",
  },
];
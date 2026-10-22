export type SocialLink = {
  label: string;
  url: string;
};

export type SiteConfig = {
  name: string;
  role: string;
  tagline: string;
  closingLine: string;
  offerings: string[];
  email: string;
  phoneDisplay: string;
  phoneTel: string;
  whatsapp: string;
  linkedin: SocialLink;
  github: SocialLink;
  cv: string;
  about: string;
  gpa: string;
   portraits: {
    formal: { src: string; alt: string };
    casual: { src: string; alt: string };
    heroBg: { src: string; alt: string };
  };
};

export const site: SiteConfig = {
  name: "Kimmy Lousandria Lukito",
  role: "Computer Science Undergraduate",
  tagline: "Orchestrating the vision. Architecting the solution.",
  closingLine: "Orchestrating the vision. architecting the solution.",
  offerings: ["Cloud Enthusiast", "Full-Stack Engineering", "Tech Leadership"],
  email: "kimmylxxvii@gmail.com", // CONFIRM: CV lists kimmy.lukito@binus.ac.id
  phoneDisplay: "+62 812-4736-1364", // CONFIRM: CV prints +628247361364 (looks like a typo)
  phoneTel: "+6281247361364",
  whatsapp: "https://wa.me/6281247361364",
  linkedin: { label: "Kimmy Lousandria Lukito", url: "https://www.linkedin.com/in/kimmy-lousandria/?isSelfProfile=true" }, // fill the real profile URL; button is hidden when empty
  github: { label: "kimylousandria", url: "https://github.com/kimylousandria" },
  cv: "/CV-Kimmy-111026.pdf",
  about:
    "I am a Computer Science student at BINUS University driven by the intersection of robust software engineering and human centric problem solving. My technical foundation spans from architecting resilient infrastructure security systems to developing modular, high performance applications. I specialize in bridging the gap between complex code architecture and collaborative teamwork, orchestrating large scale technical initiatives through structured frameworks. I am highly drawn to Challenge Based Learning and am eager to collaborate with cross functional team to engineer intuitive, secure, and scalable software solutions that deliver meaningful real world impact.",
  gpa: "3.69/4.00",
  portraits: {
    formal: {
      src: "/images/kimmy-formal.jpeg",
      alt: "Kimmy Lousandria Lukito formal portrait in black shirt",
    },
    casual: {
      src: "/images/kimmy-nonformal.jpeg",
      alt: "Kimmy Lousandria Lukito casual portrait",
    },
    heroBg: {
      src: "/images/fl.jpeg",
      alt: "Atmospheric background from Freshmen Leader orientation",
    },
  },
};
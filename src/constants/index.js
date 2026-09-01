import project1 from "../assets/projects/langchain.png";
import project2 from "../assets/projects/vidyalaya.png";
import project3 from "../assets/projects/consultancy.png";
import project4 from "../assets/projects/blog.png";

export const HERO_CONTENT = `I am a driven Full-Stack Software Developer dedicated to crafting high-performance, scalable web applications. Currently based in Bareilly, I leverage my expertise in React, Next.js, and Node.js to build intuitive user experiences and robust backend systems. My passion lies in solving complex problems through clean code and innovative technologies like Generative AI, LangChain, and AI-powered applications.`;

export const ABOUT_TEXT = `With a solid foundation in modern web technologies and a focus on scalability, I bridge the gap between creative design and technical excellence. My journey in software development is fueled by a commitment to continuous learning and a desire to build tools that make a real-world impact. From architecting complex database schemas to developing seamless front-end interfaces, I strive for perfection in every line of code. I specialize in full-stack development with expertise in cloud deployment (Google Cloud Run, Vercel, Firebase), AI integration (Gemini API, LangChain), and scalable system architectures. Currently expanding my horizons into AI-driven applications and high-performance system design.`;

export const SKILLS = [
  {
    category: "Frontend",
    technologies: ["React.js", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3", "Vite"]
  },
  {
    category: "Backend",
    technologies: ["Node.js", "Express.js", "PHP", "Python", "Firebase", "Google Cloud Run"]
  },
  {
    category: "Database & Storage",
    technologies: ["MongoDB", "MySQL", "Cloud Firestore", "Google Sheets API"]
  },
  {
    category: "AI & LLM",
    technologies: ["LangChain", "OpenAI", "Google Gemini API", "Hugging Face", "AI Agents"]
  },
  {
    category: "Tools & Platforms",
    technologies: ["Git & GitHub", "Google Cloud Platform", "Vercel", "Firebase", "Docker", "Postman"]
  },
  {
    category: "Specializations",
    technologies: ["Full-Stack Development", "REST APIs", "School Management Systems", "E-commerce Solutions", "Blog Platforms", "Consultancy Portals"]
  }
];

export const EXPERIENCES = [
  {
    year: "Nov 2025 - Present",
    role: "Software Developer",
    company: "TISHHA Consultants LLP",
    description: `Developing and maintaining high-performance web applications with a focus on clean, modular code. Collaborating with cross-functional teams to design and implement features, optimize system stability, and handle full-stack development tasks.`,
    technologies: ["Node.js", "Express.js", "React.js", "Next.js", "PHP", "MySQL"],
  },
  {
    year: "June 2024 - Nov 2025",
    role: "Full Stack Web Developer",
    company: "Sheel Infotech Private Limited",
    description: `Built and maintained robust back-end systems and user-centric front-end applications. Key contributor to SIHIMS, implementing features for hospital workflows and ensuring quality through rigorous debugging and code reviews.`,
    technologies: ["JavaScript", "React.js", "Node.js", "Next.js", "PHP", "MySQL"],
  },
];

export const PROJECTS = [
  {
    title: "LangchainPython",
    image: project1,
    description:
      "A comprehensive exploration of LLMs and the LangChain framework, implementing chains, memory, embeddings, and a custom QABot.",
    technologies: ["Python", "LangChain", "OpenAI", "Hugging Face"],
  },
  {
    title: "Vidyalaya",
    image: project2,
    description:
      "An advanced school management portal built with Next.js and TypeScript, featuring a seamless user interface and robust data management.",
    technologies: ["Next.js", "TypeScript", "Vercel", "Firebase"],
  },
  {
    title: "IT Consultancy Site",
    image: project3,
    description:
      "A dynamic consultancy website that pulls and displays real-time data from Google Sheets, designed for maximum performance.",
    technologies: ["Vite", "JavaScript", "Tailwind CSS", "Google Sheets API"],
  },
  {
    title: "Full-Stack Blog App",
    image: project4,
    description:
      "A feature-rich blogging platform with separate frontend and backend services, implementing secure user authentication and rich text editing.",
    technologies: ["React", "Node.js", "TypeScript", "Express", "MongoDB"],
  },
];

export const CONTACT = {
  address: "India",
  phone: "+91 8218468090",
  email: "anjalisharma243001@gmail.com",
  github: "https://github.com/ItsAnjaliSharma",
  linkedin: "https://www.linkedin.com/in/anjali-sharma-746587259",
};



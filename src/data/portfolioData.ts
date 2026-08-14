import { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  personal: {
    name: "Naseem Khan",
    title: "Full-Stack Developer & Software Engineer",
    tagline: "Building high-performance web applications with modern frontend architectures, scalable cloud backends, and intelligent AI integrations.",
    email: "khannaseem1704@gmail.com",
    phone: "+91 8169045425",
    location: "Mumbai, Maharashtra, India",
    github: "https://github.com/Naseem2917",
    linkedin: "https://www.linkedin.com/in/naseem2917/"
  },
  about: {
    summary: "B.Sc. IT student currently pursuing Semester 5 at GES Shri Bhausaheb Vartak College (University of Mumbai). Achieved 9.27 SGPA in Semester 4 with a 9.06 Cumulative CGPA (Grade O). Experienced in building production-ready full-stack web applications using React, TypeScript, Firebase, and cutting-edge developer tools. Passionate about software engineering, leading student development teams in competitive hackathons, and organizing technical festivals.",
    highlights: [
      "9.06 Cumulative CGPA (Grade O) in B.Sc. IT (Univ. of Mumbai)",
      "Hackathon Team Leader (Led 3-member team building real-time AI full-stack web app)",
      "Lead Technical Organizer for 'Tech Today' Annual College Tech Festival"
    ]
  },
  skills: {
    frontend: [
      "React 18/19",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "Vite",
      "HTML5 / CSS3",
      "Three.js / WebGL",
      "Recharts",
      "RESTful APIs",
      "Responsive UI/UX"
    ],
    backend_and_cloud: [
      "Firebase",
      "Cloud Firestore",
      "Firebase Authentication",
      "Google Gemini API",
      "Cloudflare Workers",
      "Node.js",
      "MySQL / SQL",
      "Real-time Data Architecture"
    ],
    core_academics: [
      "Data Structures & Algorithms",
      "Java",
      "Python",
      "C / C++",
      "Database Management Systems (DBMS)",
      "Software Engineering",
      "Object Oriented Programming (OOP)"
    ],
    tools: [
      "Git & GitHub",
      "VS Code",
      "Postman",
      "Cloudflare",
      "Firebase Console",
      "npm / Vite"
    ]
  },
  projects: [
    {
      id: "ai-code-typer",
      title: "AI Code Typer",
      subtitle: "Independent AI Platform",
      description: "An interactive coding-typing mastery platform with Google Gemini AI practice generation, cloud sync, real-time WPM performance analytics, difficulty levels, achievement badges, and a secure Cloudflare Worker proxy architecture.",
      techStack: [
        "React",
        "TypeScript",
        "Firebase",
        "Google Gemini API",
        "Vite",
        "Tailwind CSS",
        "Recharts",
        "Cloudflare Workers"
      ],
      githubUrl: "https://github.com/Naseem2917/ai-code-typer",
      demoUrl: "https://naseem2917.github.io/ai-code-typer/",
      image: `${import.meta.env.BASE_URL}images/ai-code-typer.jpg`,
      featured: true
    },
    {
      id: "smart-complaint-box",
      title: "Smart Complaint Box",
      subtitle: "AI Management System (Team Lead)",
      description: "Intelligent grievance management system with AI complaint classification & priority triage, invalid text filtering, petition-style group complaints with supporting signatures, real-time status tracking, and a comprehensive admin analytics dashboard.",
      techStack: [
        "React 19",
        "TypeScript",
        "Firebase",
        "Cloud Firestore",
        "Google Gemini API",
        "Tailwind CSS",
        "Recharts"
      ],
      githubUrl: "https://github.com/Naseem2917/Smart-Complaint-Box",
      demoUrl: "https://smart-complaint-box-2025.web.app/",
      image: `${import.meta.env.BASE_URL}images/smart-complaint.jpg`,
      featured: true
    },
    {
      id: "whatsapp-clone",
      title: "WhatsApp Clone",
      subtitle: "Real-Time AI Messaging (Team Lead)",
      description: "Real-time chat platform with Firestore backend, live typing indicators, Google Gemini AI message rewriting, trip planning, smart reply recommendations, emoji reactions, media sharing, and scheduled messaging.",
      techStack: [
        "React",
        "TypeScript",
        "Firebase",
        "Cloud Firestore",
        "Google Gemini API",
        "Tailwind CSS",
        "Vite"
      ],
      githubUrl: "https://github.com/Naseem2917/WhatsApp",
      demoUrl: "https://whatsapp-hackthon.web.app/",
      image: `${import.meta.env.BASE_URL}images/whatsapp-clone.jpg`,
      featured: true
    }
  ],
  experience_and_education: [
    {
      type: "education",
      role: "B.Sc. Information Technology",
      organization: "GES Shri Bhausaheb Vartak College (University of Mumbai)",
      period: "2024 - 2027",
      description: "Currently pursuing Semester 5 (Expected Graduation: 2027). Scored 9.27 SGPA in Semester 4 with a Cumulative CGPA of 9.06 (Grade O). Key coursework: Java, Python, C/C++, Data Structures, DBMS, SQL, Software Engineering.",
      badge: "9.06 CGPA (Grade O)"
    },
    {
      type: "leadership",
      role: "Hackathon Team Leader",
      organization: "Vivek College of Commerce",
      period: "DEC 2025",
      description: "Led a 3-member developer team in an intensive 2-day hackathon (19/12/2025), architecting full-stack web application, real-time Firebase backend, and Gemini AI features.",
      badge: "Team Lead"
    },
    {
      type: "leadership",
      role: "Lead Technical Organizer",
      organization: "Tech Today (Annual College Fest)",
      period: "2024 - PRESENT",
      description: "Served as head organizer managing the IT Quiz and Photography competitions for the college's flagship annual 'Tech Today' tech festival alongside a supporting teammate.",
      badge: "Fest Lead"
    }
  ]
};

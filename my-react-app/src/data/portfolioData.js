// Portfolio Data - Edit this file to customize your portfolio
// ===============================================================

export const portfolioData = {
  // Personal Information
  name: "Kenneth Geveny Ayhuwan",
  title: "Your Title/Role",
  about: `An extremely junior programmer with a passion of typing and looking forward of my own field. 
Tell visitors who you are, what you do, and what makes you unique.
Highlight your passion and what drives you.`,
  
  // Contact Information
  email: "kenneth.gevenyay@gmail.com",
  phone: "+62 882 9473 0740",
  location: "Tangerang City, Indonesia",
  linkedin: "https://www.linkedin.com/in/kenneth-geveny-ayhuwan-0320273a5/",
  github: "https://github.com/caxerion",
  
  // Skills - Add or remove skills as needed
  skills: {
    frontend: [
      { name: "HTML5/CSS3", percentage: 82, icon: "" },
      { name: "JavaScript (ES6+)", percentage: 68, icon: "" },
      { name: "React/Next", percentage: 70, icon: "" },
      { name: "Svelte", percentage: 20, icon: "" },
      { name: "Bootstrap", percentage: 75, icon: "" },
      { name: "Tailwind", percentage: 62, icon: "" }
    ],
    backend: [
      { name: "Node JS", percentage: 58, icon: "" },
      { name: "PHP", percentage: 65, icon: "" },
      { name: "Express JS", percentage: 60, icon: ""},
      { name: "Python", percentage: 50, icon: "" },
      { name: "Laravel", percentage: 62, icon: "" },
      { name: "REST APIs", percentage: 58, icon: "" }
    ],
    database: [  
      { name: "MySQL", percentage: 72, icon: "" },
      { name: "Firebase", percentage: 58, icon: "" },
      { name: "MongoDB", percentage: 42, icon: "" },
      { name: "Prisma ORM", percentage: 40, icon: "" },
      { name: "SQLite", percentage: 55, icon: "" }
    ],
    gamedev: [
      { name: "Roblox Studio", percentage: 62, icon: "" },
      { name: "C++", percentage: 25, icon: "" },
      { name: "Lua", percentage: 55, icon: "" }
    ],
    design: [
      { name: "Figma/UI-UX Design", percentage: 60, icon: "" },
      { name: "Blender", percentage: 52, icon: "" },
      { name: "Photoshop", percentage: 45, icon: "" },
      { name: "MS PowerPoint", percentage: 85, icon: "" },
      { name: "Canva", percentage: 92, icon: "" },
      { name: "Prototyping", percentage: 60, icon: "" },
      { name: "Sketching", percentage: 60, icon: "" }
    ],
    tools: [
      { name: "GitHub", percentage: 75, icon: "" },
      { name: "VS Code", percentage: 75, icon: "" },
      { name: "Postman", percentage: 60, icon: "" },
      { name: "Terminal", percentage: 52, icon: "" },
      { name: "WordPress", percentage: 60, icon: "" },
      { name: "Replit", percentage: 68, icon: "" },
      { name: "cPanel", percentage: 48, icon: "" },
      { name: "MySQL Workbench", percentage: 62, icon: "" }
    ],
    other: [
      { name: "MS Word", percentage: 75, icon: "" },
      { name: "MS Excel", percentage: 62, icon: "" },
      { name: "Mentoring", percentage: 45, icon: "" },
      { name: "Public Speaking", percentage: 60, icon: "" }
    ]
  },
  
  // Projects - Add or remove projects as needed
  projects: [
    {
      id: 1,
      title: "Kenneth's Portfolio",
      description: "My current portfolio website is a showcase of my skills built to leave a lasting impression",
      tags: ["React", "CSS3"],
      link: "#",
      image: "/src/assets/portfolio.png"
    },
    {
      id: 2,
      title: "PTRE Stock Management",
      description: "Smart inventory management and pick up tracking app, storing and picking up functionallity.",
      tags: ["Laravel", "Bootstrap", "MySQL"],
      link: "#",
      image: "/src/assets/ptre2.jpg"
    },
    {
      id: 3,
      title: "Dapur Cuan!",
      description: "Coming Soon!",
      tags: ["React.js", "Tailwind"],
      link: "#",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop"
    },
    {
      id: 4,
      title: "Erfune Furniture Website",
      description: "A website that provides home furnitures for a fancy and elegant look.",
      tags: ["React", "Node.js", "MongoDB"],
      link: "#",
      image: "./src/assets/furniture_temp.jpg"
    },
    {
      id: 5,
      title: "Supervisor Housekeeping",
      description: "Grand Hotel Nusantara supervisor housekeeping app, rooms tracking & monitoring.",
      tags: ["React.js/Tailwind", "Express.js", "MySQL"],
      link: "https://tasky-task-b22b1.web.app",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop"
    },
    {
      id: 6,
      title: "Weather Dashboard",
      description: "Real-time weather tracking application with forecasts and location-based alerts.",
      tags: ["JavaScript", "OpenWeather API", "CSS3"],
      link: "#",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop"
    },
    {
      id: 7,
      title: "clienty downloader",
      description: "A comprehensive media downloader CLI-DL based no log in required, paste-link and go.",
      tags: ["React.js/Express.js", "CLI", "Python 3"],
      link: "https://github.com/Caxerion/clienty-source1.git",
      image: "./src/assets/Screenshot 2026-07-19 073007.png"
    }
  ],
  
  
  // Experience (optional)
  experience: [
    {
      id: 1,
      company: "Company Name",
      role: "Your Role",
      period: "2023 - Present",
      description: "What you accomplished here."
    }
  ],
  
  // Education (optional)
  education: [
    {
      id: 1,
      institution: "University Name",
      degree: "Your Degree",
      period: "2019 - 2023"
    }
  ]
};

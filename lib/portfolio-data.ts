export interface PortfolioData {
  personal: {
    name: string
    title: string
    description: string
    avatar: string
    email: string
    phone: string
    location: string
    social: {
      github: string
      linkedin: string
      twitter: string
    }
  }
  about: {
    description: string
    stats: Array<{
      number: string
      label: string
    }>
  }
  skills: Array<{
    name: string
    icon: string
  }>
  projects: Array<{
    title: string
    description: string
    technologies: string[]
    image: string
    github: string
    demo: string
  }>
  experience: Array<{
    title: string
    company: string
    date: string
    description: string
  }>
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Alex Johnson",
    title: "Full Stack Developer & UI/UX Designer",
    description:
      "I create beautiful, functional web applications that solve real-world problems. Passionate about clean code, user experience, and cutting-edge technologies.",
    avatar: "/placeholder.svg?height=300&width=300",
    email: "alex.johnson@example.com",
    phone: "+1 (555) 987-6543",
    location: "Seattle, WA",
    social: {
      github: "https://github.com/alexjohnson",
      linkedin: "https://linkedin.com/in/alexjohnson",
      twitter: "https://twitter.com/alexjohnson",
    },
  },
  about: {
    description:
      "I'm a passionate full-stack developer with 6+ years of experience building scalable web applications. I specialize in React, Node.js, and modern web technologies. When I'm not coding, you'll find me exploring new frameworks, contributing to open source, or mentoring aspiring developers.",
    stats: [
      { number: "75+", label: "Projects Completed" },
      { number: "6+", label: "Years Experience" },
      { number: "30+", label: "Happy Clients" },
      { number: "15+", label: "Open Source Contributions" },
    ],
  },
  skills: [
    { name: "JavaScript", icon: "⚡" },
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "Python", icon: "🐍" },
    { name: "TypeScript", icon: "📘" },
    { name: "Vue.js", icon: "💚" },
    { name: "HTML5", icon: "🌐" },
    { name: "CSS3", icon: "🎨" },
    { name: "Sass", icon: "💅" },
    { name: "Git", icon: "📚" },
    { name: "Docker", icon: "🐳" },
    { name: "AWS", icon: "☁️" },
  ],
  projects: [
    {
      title: "SaaS Dashboard Platform",
      description:
        "A comprehensive SaaS dashboard with analytics, user management, and billing integration. Built with React, Node.js, and PostgreSQL with real-time data visualization.",
      technologies: ["React", "Node.js", "PostgreSQL", "Chart.js", "Stripe", "Socket.io"],
      image: "📊",
      github: "https://github.com/alexjohnson/saas-dashboard",
      demo: "https://saas-dashboard-demo.vercel.app",
    },
    {
      title: "AI-Powered Chat Application",
      description:
        "Real-time chat application with AI-powered message suggestions and sentiment analysis. Features include file sharing, voice messages, and group chats.",
      technologies: ["Vue.js", "Express", "MongoDB", "OpenAI API", "WebRTC"],
      image: "🤖",
      github: "https://github.com/alexjohnson/ai-chat",
      demo: "https://ai-chat-demo.netlify.app",
    },
    {
      title: "E-Learning Platform",
      description:
        "Complete e-learning platform with course creation, video streaming, progress tracking, and interactive quizzes. Supports multiple payment gateways.",
      technologies: ["Next.js", "Prisma", "MySQL", "AWS S3", "Stripe"],
      image: "🎓",
      github: "https://github.com/alexjohnson/elearning",
      demo: "https://elearning-demo.com",
    },
    {
      title: "Cryptocurrency Tracker",
      description:
        "Real-time cryptocurrency tracking application with portfolio management, price alerts, and detailed market analysis charts.",
      technologies: ["React", "Redux", "CoinGecko API", "Chart.js", "Firebase"],
      image: "₿",
      github: "https://github.com/alexjohnson/crypto-tracker",
      demo: "https://crypto-tracker-demo.surge.sh",
    },
  ],
  experience: [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      date: "2022 - Present",
      description:
        "Lead a team of 5 developers in building scalable web applications. Architected microservices infrastructure that improved system performance by 40%. Mentored junior developers and established coding standards.",
    },
    {
      title: "Full Stack Developer",
      company: "InnovateLab",
      date: "2020 - 2022",
      description:
        "Developed and maintained 15+ client projects using React, Node.js, and various databases. Implemented CI/CD pipelines that reduced deployment time by 60%. Collaborated with designers to create pixel-perfect user interfaces.",
    },
    {
      title: "Frontend Developer",
      company: "Digital Creative Agency",
      date: "2019 - 2020",
      description:
        "Created responsive websites and web applications for diverse clients. Optimized website performance achieving 95+ Lighthouse scores. Worked closely with UX/UI designers to implement interactive user experiences.",
    },
    {
      title: "Junior Web Developer",
      company: "StartupHub Inc.",
      date: "2018 - 2019",
      description:
        "Built and maintained company website and internal tools. Learned modern web development practices and agile methodologies. Contributed to open-source projects and participated in code reviews.",
    },
  ],
}

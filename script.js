// Portfolio data will be loaded from JSON
let portfolioData = {}

// Load portfolio data from JSON file
async function loadPortfolioData() {
  try {
    const response = await fetch("data.json")
    portfolioData = await response.json()
    populatePortfolio()
  } catch (error) {
    console.error("Error loading portfolio data:", error)
    // Fallback to default data if JSON fails to load
    portfolioData = getDefaultData()
    populatePortfolio()
  }
}

// Default data fallback
function getDefaultData() {
  return {
    personal: {
      name: "John Developer",
      title: "Full Stack Developer",
      description: "I create amazing web experiences with modern technologies and clean, efficient code.",
      avatar: "https://via.placeholder.com/300x300/6366f1/ffffff?text=JD",
      email: "john@example.com",
      phone: "+1 (555) 123-4567",
      location: "San Francisco, CA",
      social: {
        github: "https://github.com/johndeveloper",
        linkedin: "https://linkedin.com/in/johndeveloper",
        twitter: "https://twitter.com/johndeveloper",
      },
    },
    about: {
      description:
        "I'm a passionate full-stack developer with over 5 years of experience creating digital solutions that make a difference. I love working with modern technologies and building applications that solve real-world problems.",
      stats: [
        { number: "50+", label: "Projects Completed" },
        { number: "5+", label: "Years Experience" },
        { number: "20+", label: "Happy Clients" },
        { number: "100%", label: "Satisfaction Rate" },
      ],
    },
    skills: [
      { name: "JavaScript", icon: "fab fa-js-square" },
      { name: "React", icon: "fab fa-react" },
      { name: "Node.js", icon: "fab fa-node-js" },
      { name: "Python", icon: "fab fa-python" },
      { name: "HTML5", icon: "fab fa-html5" },
      { name: "CSS3", icon: "fab fa-css3-alt" },
      { name: "Git", icon: "fab fa-git-alt" },
      { name: "Docker", icon: "fab fa-docker" },
    ],
    projects: [
      {
        title: "E-Commerce Platform",
        description:
          "A full-featured e-commerce platform built with React and Node.js, featuring user authentication, payment processing, and admin dashboard.",
        technologies: ["React", "Node.js", "MongoDB", "Stripe"],
        image: "🛒",
        github: "https://github.com/johndeveloper/ecommerce",
        demo: "https://ecommerce-demo.com",
      },
      {
        title: "Task Management App",
        description:
          "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
        technologies: ["Vue.js", "Express", "Socket.io", "PostgreSQL"],
        image: "📋",
        github: "https://github.com/johndeveloper/taskmanager",
        demo: "https://taskmanager-demo.com",
      },
      {
        title: "Weather Dashboard",
        description:
          "A responsive weather dashboard that provides detailed weather information and forecasts using multiple weather APIs.",
        technologies: ["JavaScript", "Chart.js", "Weather API", "CSS3"],
        image: "🌤️",
        github: "https://github.com/johndeveloper/weather",
        demo: "https://weather-demo.com",
      },
    ],
    experience: [
      {
        title: "Senior Full Stack Developer",
        company: "Tech Solutions Inc.",
        date: "2022 - Present",
        description:
          "Lead development of web applications using React, Node.js, and cloud technologies. Mentor junior developers and collaborate with cross-functional teams.",
      },
      {
        title: "Full Stack Developer",
        company: "Digital Agency Co.",
        date: "2020 - 2022",
        description:
          "Developed and maintained multiple client websites and web applications. Worked with various technologies including React, Vue.js, and PHP.",
      },
      {
        title: "Frontend Developer",
        company: "Startup Hub",
        date: "2019 - 2020",
        description:
          "Created responsive user interfaces and improved user experience for web applications. Collaborated closely with designers and backend developers.",
      },
    ],
  }
}

// Populate the portfolio with data
function populatePortfolio() {
  // Update navigation and hero
  document.getElementById("nav-name").textContent = portfolioData.personal.name
  document.getElementById("hero-name").textContent = portfolioData.personal.name
  document.getElementById("hero-subtitle").textContent = portfolioData.personal.title
  document.getElementById("hero-description").textContent = portfolioData.personal.description
  document.getElementById("hero-avatar").src = portfolioData.personal.avatar
  document.getElementById("hero-avatar").alt = portfolioData.personal.name

  // Update social links
  const socialContainer = document.getElementById("hero-social")
  socialContainer.innerHTML = ""
  Object.entries(portfolioData.personal.social).forEach(([platform, url]) => {
    const link = document.createElement("a")
    link.href = url
    link.className = "social-link"
    link.target = "_blank"
    link.rel = "noopener noreferrer"

    const iconClass =
      platform === "github"
        ? "fab fa-github"
        : platform === "linkedin"
          ? "fab fa-linkedin"
          : platform === "twitter"
            ? "fab fa-twitter"
            : "fas fa-link"

    link.innerHTML = `<i class="${iconClass}"></i>`
    socialContainer.appendChild(link)
  })

  // Update about section
  document.getElementById("about-description").textContent = portfolioData.about.description

  const statsContainer = document.getElementById("about-stats")
  statsContainer.innerHTML = ""
  portfolioData.about.stats.forEach((stat) => {
    const statDiv = document.createElement("div")
    statDiv.className = "stat-item"
    statDiv.innerHTML = `
            <span class="stat-number">${stat.number}</span>
            <span class="stat-label">${stat.label}</span>
        `
    statsContainer.appendChild(statDiv)
  })

  // Update skills section
  const skillsContainer = document.getElementById("skills-grid")
  skillsContainer.innerHTML = ""
  portfolioData.skills.forEach((skill) => {
    const skillDiv = document.createElement("div")
    skillDiv.className = "skill-item"
    skillDiv.innerHTML = `
            <div class="skill-icon">
                <i class="${skill.icon}"></i>
            </div>
            <div class="skill-name">${skill.name}</div>
        `
    skillsContainer.appendChild(skillDiv)
  })

  // Update projects section
  const projectsContainer = document.getElementById("projects-grid")
  projectsContainer.innerHTML = ""
  portfolioData.projects.forEach((project) => {
    const projectDiv = document.createElement("div")
    projectDiv.className = "project-card"

    const techTags = project.technologies.map((tech) => `<span class="tech-tag">${tech}</span>`).join("")

    projectDiv.innerHTML = `
            <div class="project-image">${project.image}</div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">${techTags}</div>
                <div class="project-links">
                    <a href="${project.demo}" class="project-link primary" target="_blank" rel="noopener noreferrer">
                        <i class="fas fa-external-link-alt"></i> Live Demo
                    </a>
                    <a href="${project.github}" class="project-link secondary" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-github"></i> Code
                    </a>
                </div>
            </div>
        `
    projectsContainer.appendChild(projectDiv)
  })

  // Update experience section
  const timelineContainer = document.getElementById("timeline")
  timelineContainer.innerHTML = ""
  portfolioData.experience.forEach((exp) => {
    const timelineDiv = document.createElement("div")
    timelineDiv.className = "timeline-item"
    timelineDiv.innerHTML = `
            <div class="timeline-content">
                <div class="timeline-date">${exp.date}</div>
                <h3 class="timeline-title">${exp.title}</h3>
                <div class="timeline-company">${exp.company}</div>
                <p class="timeline-description">${exp.description}</p>
            </div>
            <div class="timeline-dot"></div>
        `
    timelineContainer.appendChild(timelineDiv)
  })

  // Update contact section
  const contactContainer = document.getElementById("contact-info")
  contactContainer.innerHTML = `
        <div class="contact-item">
            <div class="contact-icon">
                <i class="fas fa-envelope"></i>
            </div>
            <div class="contact-details">
                <h4>Email</h4>
                <p>${portfolioData.personal.email}</p>
            </div>
        </div>
        <div class="contact-item">
            <div class="contact-icon">
                <i class="fas fa-phone"></i>
            </div>
            <div class="contact-details">
                <h4>Phone</h4>
                <p>${portfolioData.personal.phone}</p>
            </div>
        </div>
        <div class="contact-item">
            <div class="contact-icon">
                <i class="fas fa-map-marker-alt"></i>
            </div>
            <div class="contact-details">
                <h4>Location</h4>
                <p>${portfolioData.personal.location}</p>
            </div>
        </div>
    `

  // Update footer
  document.getElementById("footer-name").textContent = portfolioData.personal.name
  document.getElementById("current-year").textContent = new Date().getFullYear()
}

// Mobile navigation toggle
function initMobileNav() {
  const navToggle = document.getElementById("nav-toggle")
  const navMenu = document.getElementById("nav-menu")

  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active")
  })

  // Close mobile menu when clicking on a link
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active")
    })
  })
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })
}

// Contact form handling
function initContactForm() {
  const form = document.getElementById("contact-form")
  form.addEventListener("submit", (e) => {
    e.preventDefault()

    // Get form data
    const formData = new FormData(form)
    const name = formData.get("name")
    const email = formData.get("email")
    const message = formData.get("message")

    // Here you would typically send the data to a server
    // For now, we'll just show an alert
    alert(`Thank you ${name}! Your message has been received. I'll get back to you soon.`)

    // Reset form
    form.reset()
  })
}

// Intersection Observer for animations
function initAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in")
      }
    })
  }, observerOptions)

  // Observe all sections
  document.querySelectorAll("section").forEach((section) => {
    observer.observe(section)
  })
}

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  loadPortfolioData()
  initMobileNav()
  initSmoothScrolling()
  initContactForm()
  initAnimations()
})

// Update navbar on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar")
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(255, 255, 255, 0.98)"
    navbar.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)"
  } else {
    navbar.style.background = "rgba(255, 255, 255, 0.95)"
    navbar.style.boxShadow = "none"
  }
})

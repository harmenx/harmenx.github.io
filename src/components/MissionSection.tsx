type Project = {
  company: string;
  role: string;
  period: string;
  location?: string;
  highlights: string[];
};

const projects: Project[] = [
  {
    company: "Xero",
    role: "Senior Software Engineer",
    period: "Jun 2025 – Present",
    location: "Auckland, NZ",
    highlights: [
      "End-to-end ownership of rebuilding Xero's primary navigation — a system-critical surface across 4.5M customers — achieving zero downtime and 99.999% uptime throughout.",
      "Drove the WCAG 2.1 AA programme from the ground up, cutting accessibility defects by 20%.",
      "Designed a platform-wide degradation detection model, materially reducing MTTD.",
      "Rebuilt localisation architecture, reducing deployments needed by 50%.",
      "Led migration of SLO and monitoring infrastructure to Terraform."
    ]
  },
  {
    company: "Joker Seven",
    role: "Senior Software Engineer (Contract)",
    period: "Jan 2025 – Jun 2025",
    location: "Auckland, NZ",
    highlights: [
      "Defined the entire technical architecture of the mobile platform — React Native, TypeScript, .NET Core, and AWS.",
      "Shipped the company's first production AI system (LangChain, AWS), cutting manual onboarding overhead."
    ]
  },
  {
    company: "Amazon",
    role: "Senior Software Engineer (Contract)",
    period: "Jul 2024 – Dec 2024",
    location: "London, UK",
    highlights: [
      "Took on the SCP RECAP UI rebuild after it had stalled — restructured the approach and shipped ahead of schedule globally.",
      "Designed the API layer for a complex merchant workflow, decoupling frontend and backend teams.",
      "Championed circuit breaking, graceful degradation, and structured observability across distributed services.",
      "Acted as technical bridge between product, platform, and engineering."
    ]
  },
  {
    company: "Restaurant Brands International (via Machina Consulting)",
    role: "Technical Lead",
    period: "Oct 2023 – Jul 2024",
    location: "London, UK",
    highlights: [
      "Set technical strategy for a greenfield global SaaS platform across multiple brands, languages, and markets.",
      "Architected MapReduce + Snowflake batch solution — cut DynamoDB update processing time by 80%.",
      "Led the first AI initiative for behavioural insights in trading UX and compliance monitoring."
    ]
  },
  {
    company: "Archax",
    role: "Senior Software Engineer (Contract)",
    period: "Nov 2022 – Oct 2023",
    location: "London, UK",
    highlights: [
      "Shaped FDC3-compliant trading dashboards using D3.js and OpenFin.",
      "Embedded GDPR, AML, and KYC requirements load-bearing in the architecture.",
      "Designed zero-downtime upgrade pipeline on AWS Lambda and S3 for a regulated platform."
    ]
  },
  {
    company: "Nucleus Financial / Twig Education (via Machina Consulting)",
    role: "Senior Software Engineer",
    period: "Jul 2019 – Nov 2022",
    location: "Edinburgh, UK",
    highlights: [
      "Defined architecture of Nucleus Narrate from first principles (React/Material UI).",
      "Implemented MFE architecture on the Twig Education platform.",
      "Established mobile engineering practice for Nucleus Go (React Native)."
    ]
  },
  {
    company: "Machina Consulting",
    role: "Director & Principal Engineer",
    period: "Jul 2019 – Jul 2024",
    location: "Edinburgh · London, UK",
    highlights: [
      "Owner-operator of a boutique consultancy delivering Staff-level engineering and technical leadership across fintech, edtech, and global SaaS clients."
    ]
  },
  {
    company: "NZ Trade & Enterprise",
    role: "Technical Lead (Contract)",
    period: "Jul 2018 – May 2019",
    location: "Auckland, NZ",
    highlights: [
      "Led architecture and delivery of a government portal for 5,000+ customers and 500 staff.",
      "Drove 80% reduction in load times through caching strategy and pagination. NPS ~70."
    ]
  },
  {
    company: "New Zealand Transport Agency",
    role: "Software Engineer (Contract)",
    period: "Nov 2017 – Jul 2018",
    location: "Auckland, NZ",
    highlights: [
      "Developed tourism mobile apps (Xamarin, C#, Java) with accessibility features.",
      "Implemented automated testing frameworks for unit and integration testing."
    ]
  },
  {
    company: "Propellerhead",
    role: "Software Engineer (Contract)",
    period: "2016 – 2017",
    location: "Auckland, NZ",
    highlights: [
      "Enhanced AT Mobile (React Native, TypeScript, Redux) for 200,000+ users.",
      "Improved RESTful API design for Auckland Transport GTFS API.",
      "Built Auckland Museum RDF pipeline."
    ]
  },
  {
    company: "Solution Management",
    role: "Software Engineer",
    period: "2015 – 2016",
    location: "Auckland, NZ",
    highlights: [
      "Built web portal for Holden NZ and NZ Police to track vehicle builds (ASP.NET, C#, MySQL)."
    ]
  },
  {
    company: "MoneyMappa",
    role: "Software Engineer",
    period: "2012 – 2015",
    location: "Auckland, NZ",
    highlights: [
      "Created financial literacy tools and mobile apps (WebGL, Python, Swift, Java)."
    ]
  }
];

const WorkSection = ({ content }: { content?: { title?: string; description?: string } }) => {
  return (
    <section id="work" className="min-h-screen flex items-center justify-center py-20 bg-black/40">
      <div className="container mx-auto px-8 lg:px-12">
        <div className="max-w-6xl mx-auto text-center">
          {(content?.title || content?.description) && (
            <div className="mb-12">
              {content?.title && (
                <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
                  {content.title}
                </h2>
              )}
              {content?.description && (
                <p className="text-white/70 font-light max-w-2xl mx-auto">
                  {content.description}
                </p>
              )}
            </div>
          )}
          <div className="relative py-12">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-white/20" style={{ top: 0, bottom: 0 }} />
            <div className="flex flex-col gap-12">
              {projects.map((proj, idx) => {
                const isLeft = idx % 2 === 0;
                return (
                  <div key={idx} className="relative flex flex-col md:flex-row items-center justify-center">
                    <div className={`md:w-1/2 px-4 ${isLeft ? "md:pr-16 md:justify-end md:flex" : "md:pl-16 md:justify-start md:flex"} ${isLeft ? "order-1" : "order-3"}`}>
                      {isLeft && (
                        <div className="md:text-left">
                          <span className="text-white/50 font-light text-sm">{proj.period}</span>
                          {proj.location && (
                            <span className="text-white/40 font-light text-sm ml-2">· {proj.location}</span>
                          )}
                          <h3 className="text-xl font-light text-white mb-1">{proj.company}</h3>
                          <div className="text-white/70 font-light text-md mb-2">{proj.role}</div>
                          <ul className="list-disc pl-6 text-white/80 font-light space-y-1 mb-2 inline-block text-left">
                            {proj.highlights.map((h, i) => (
                              <li key={i}>{h}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col items-center order-2" />
                    <div className={`md:w-1/2 px-4 ${!isLeft ? "md:pl-16 md:justify-start md:flex" : "md:pr-16 md:justify-end md:flex"} ${!isLeft ? "order-3" : "order-1"}`}>
                      {!isLeft && (
                        <div className="md:text-left">
                          <span className="text-white/50 font-light text-sm">{proj.period}</span>
                          {proj.location && (
                            <span className="text-white/40 font-light text-sm ml-2">· {proj.location}</span>
                          )}
                          <h3 className="text-xl font-light text-white mb-1">{proj.company}</h3>
                          <div className="text-white/70 font-light text-md mb-2">{proj.role}</div>
                          <ul className="list-disc pl-6 text-white/80 font-light space-y-1 mb-2 inline-block text-left">
                            {proj.highlights.map((h, i) => (
                              <li key={i}>{h}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;

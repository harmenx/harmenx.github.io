type Project = {
  company: string;
  role: string;
  period: string;
  highlights: string[];
};

const projects: Project[] = [
  {
    company: "Joker Seven (HYPR Innovations)",
    role: "Senior Software Engineer",
    period: "Jan. 2025 – Present",
    highlights: [
      "Architected and delivered a scalable mobile app using React Native, TypeScript, and AWS.",
      "Developed NFC-based features and Wallet Pass integrations with secure token storage.",
      "Collaborated with designers and stakeholders for a user-centric, cloud-native experience."
    ]
  },
  {
    company: "Amazon",
    role: "Senior Software Engineer (Contract)",
    period: "Jul. 2024 – Dec. 2024",
    highlights: [
      "Rebuilt SCP RECAP UI, improving performance and usability for Amazon merchants.",
      "Designed and deployed scalable REST APIs using AWS, Spring Boot, and Lambda.",
      "Integrated cloud-native best practices for deployment and monitoring."
    ]
  },
  {
    company: "Machina Consulting",
    role: "Technical Lead",
    period: "Oct. 2023 – Jul. 2024",
    highlights: [
      "Built and deployed a global SaaS platform for Entertainment Partners (Python, React, AWS).",
      "Shipped mobile apps and microservices for Restaurant Brands International.",
      "Developed high-throughput payment pipeline and batch systems on AWS."
    ]
  },
  {
    company: "Archax",
    role: "Senior Software Engineer (Contract)",
    period: "Nov. 2022 – Oct. 2023",
    highlights: [
      "Engineered FDC3 compliant dashboards for a digital assets exchange.",
      "Ensured compliance with AML/KYC and GDPR standards.",
      "Implemented auto-upgrade service for multi-OS deployments."
    ]
  },
  {
    company: "Machina Hero",
    role: "Senior Software Engineer",
    period: "Jul. 2019 – Nov. 2022",
    highlights: [
      "Led development of Nucleus Narrate financial reporting platform.",
      "Built Nucleus Go mobile app and dashboards for Twig Education Platform.",
      "Improved Kubernetes architecture for automated deployments."
    ]
  },
  {
    company: "NZ Trade And Enterprise",
    role: "Technical Lead (Contract)",
    period: "Jul. 2018 – May. 2019",
    highlights: [
      "Delivered government customer portal for 5,000+ customers and 500 staff.",
      "Reduced page load times by 80% with React and TypeScript architecture.",
      "Engineered secure backend with Node, Redis, CosmosDB, Auth0."
    ]
  },
  {
    company: "New Zealand Transport Agency",
    role: "Senior Software Engineer & Scrum Master (Contract)",
    period: "Nov. 2017 – Jul. 2018",
    highlights: [
      "Developed tourism mobile apps (Xamarin, C#, Java), implemented accessibility features.",
      "Implemented automated testing frameworks for unit and integration testing."
    ]
  },
  {
    company: "Propellerhead",
    role: "Senior Software Engineer (Contract)",
    period: "Feb. 2017 – Nov. 2017",
    highlights: [
      "Enhanced AT Mobile (ReactNative, TypeScript, Redux) for 200,000+ users.",
      "Improved RESTful API design for Auckland Transport GTFS API."
    ]
  },
  {
    company: "DeRef",
    role: "DevOps Engineer (Contract)",
    period: "Jul. 2016 – Feb. 2017",
    highlights: [
      "Designed and implemented CI/CD pipelines and automated delivery (AWS, Python).",
      "Deployed and maintained development tools and infrastructure (Jenkins, Ansible, Vagrant, Bash)."
    ]
  },
  {
    company: "Solution Management",
    role: "Software Engineer",
    period: "Jul. 2015 – Jul. 2016",
    highlights: [
      "Designed and built web portal for Holden NZ and NZ Police to track vehicle builds.",
      "Maintained stored procedures for generating reports using SQLServer."
    ]
  },
  {
    company: "MoneyMappa",
    role: "Software Engineer",
    period: "Dec. 2012 – Jul. 2015",
    highlights: [
      "Created financial educational tools (HTML, CSS, JavaScript, Box2D, WebGL, Python, PHP).",
      "Developed cross-platform mobile games and marketing applications (Swift, Java)."
    ]
  }


];

const WorkSection = () => {
  return (
    <section id="work" className="min-h-screen flex items-center justify-center py-20 bg-black/40">
      <div className="container mx-auto px-8 lg:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <div className="relative py-12">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-white/20" style={{top: 0, bottom: 0}} />
            <div className="flex flex-col gap-12">
              {projects.map((proj, idx) => {
                const isLeft = idx % 2 === 0;
                return (
                  <div key={idx} className="relative flex flex-col md:flex-row items-center justify-center">
                    <div className={`md:w-1/2 px-4 ${isLeft ? "md:pr-16 md:justify-end md:flex" : "md:pl-16 md:justify-start md:flex"} ${isLeft ? "order-1" : "order-3"}`}>
                      {isLeft && (
                        <div className="md:text-left">
                          <span className="text-white/50 font-light text-sm">{proj.period}</span>
                          <h3 className="text-xl font-light text-white mb-1">{proj.company}</h3>
                          <div className="text-white/70 font-light text-md mb-2">{proj.role}</div>
                          <ul className="list-disc pl-6 text-white/80 font-light space-y-1 mb-2 inline-block">
                            {proj.highlights.map((h, i) => (
                              <li key={i}>{h}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col items-center order-2">
                   
                    </div>
                    <div className={`md:w-1/2 px-4 ${!isLeft ? "md:pl-16 md:justify-start md:flex" : "md:pr-16 md:justify-end md:flex"} ${!isLeft ? "order-3" : "order-1"}`}>
                      {!isLeft && (
                        <div className="md:text-left">
                          <span className="text-white/50 font-light text-sm">{proj.period}</span>
                          <h3 className="text-xl font-light text-white mb-1">{proj.company}</h3>
                          <div className="text-white/70 font-light text-md mb-2">{proj.role}</div>
                          <ul className="list-disc pl-6 md:pl-6 text-white/80 font-light space-y-1 mb-2 inline-block">
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
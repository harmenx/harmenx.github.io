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
  }
];

const WorkSection = () => {
  return (
    <section id="work" className="min-h-screen flex items-center justify-center py-20 bg-black/40">
      <div className="container mx-auto px-8 lg:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xl text-white/80 font-light leading-relaxed mb-12 max-w-3xl mx-auto">
          </p>
          <div className="space-y-12">
            {projects.map((proj, idx) => (
              <div key={idx} className="bg-black/30 rounded-xl p-8 text-left shadow-lg border border-white/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-light text-white mb-1">{proj.company}</h3>
                    <div className="text-white/70 font-light text-lg">{proj.role}</div>
                  </div>
                  <div className="text-white/50 font-light text-md mt-2 md:mt-0">{proj.period}</div>
                </div>
                <ul className="list-disc pl-6 text-white/80 font-light space-y-2">
                  {proj.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
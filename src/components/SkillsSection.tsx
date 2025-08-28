type Skill = { name: string; level: number };
type SkillsContent = { title?: string; description?: string; skills?: Skill[] };
const SkillsSection = ({ content }: { content?: SkillsContent }) => {
  const skills = content?.skills || [
    { name: "React & TypeScript", level: 95 },
    { name: "Node.js & APIs", level: 90 },
    { name: "UI/UX Design", level: 85 },
    { name: "Three.js & WebGL", level: 80 },
    { name: "Cloud Architecture", level: 88 },
    { name: "DevOps & CI/CD", level: 82 }
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center py-20 bg-black/30">
      <div className="container mx-auto px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
       
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-light text-white mb-8">Core Technologies</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white/90 font-light">{skill.name}</span>
                      <span className="text-white/60 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-1">
                      <div 
                        className="bg-white h-1 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-light text-white mb-8">Expertise Areas</h3>
              <div className="space-y-8">
                <div className="border border-white/20 p-6 rounded-lg hover:border-white/40 transition-all duration-300 bg-black/20">
                  <h4 className="text-white font-light text-lg mb-3">AI Engineering</h4>
                  <p className="text-white/70 font-light leading-relaxed text-sm">
                    Designing and deploying intelligent systems using Python, Hugging Face, LangChain, and AWS Sagemaker. Experience with LLMs, generative AI, and automation for real-world business solutions.
                  </p>
                </div>
                <div className="border border-white/20 p-6 rounded-lg hover:border-white/40 transition-all duration-300 bg-black/20">
                  <h4 className="text-white font-light text-lg mb-3">Cloud Architecture</h4>
                  <p className="text-white/70 font-light leading-relaxed text-sm">
                    Building scalable, secure, and resilient cloud infrastructure with AWS, Kubernetes, Terraform, and CI/CD. Proven record in DevOps, automation, and cloud-native best practices.
                  </p>
                </div>
                <div className="border border-white/20 p-6 rounded-lg hover:border-white/40 transition-all duration-300 bg-black/20">
                  <h4 className="text-white font-light text-lg mb-3">Front-end Development</h4>
                  <p className="text-white/70 font-light leading-relaxed text-sm">
                    Crafting responsive, interactive interfaces with React, Next.js, TypeScript, and modern CSS frameworks. Specializing in performance optimization, accessibility, and design systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
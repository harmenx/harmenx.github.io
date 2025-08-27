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
            <h2 className="text-5xl md:text-6xl font-light text-white mb-8 leading-tight">
              {content?.title || "Technical Arsenal"}
            </h2>
            <p className="text-xl text-white/80 font-light leading-relaxed max-w-2xl mx-auto">
              {content?.description || "A comprehensive toolkit honed through years of crafting digital experiences across platforms and industries."}
            </p>
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
                  <h4 className="text-white font-light text-lg mb-3">Frontend Development</h4>
                  <p className="text-white/70 font-light leading-relaxed text-sm">
                    Crafting responsive, interactive interfaces with React, Vue, and modern CSS frameworks. 
                    Specializing in performance optimization and accessibility.
                  </p>
                </div>
                
                <div className="border border-white/20 p-6 rounded-lg hover:border-white/40 transition-all duration-300 bg-black/20">
                  <h4 className="text-white font-light text-lg mb-3">Backend Systems</h4>
                  <p className="text-white/70 font-light leading-relaxed text-sm">
                    Building scalable APIs, microservices, and database architectures. 
                    Experience with cloud platforms and containerization.
                  </p>
                </div>
                
                <div className="border border-white/20 p-6 rounded-lg hover:border-white/40 transition-all duration-300 bg-black/20">
                  <h4 className="text-white font-light text-lg mb-3">Creative Technology</h4>
                  <p className="text-white/70 font-light leading-relaxed text-sm">
                    Exploring the intersection of art and technology through WebGL, 
                    interactive installations, and immersive experiences.
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
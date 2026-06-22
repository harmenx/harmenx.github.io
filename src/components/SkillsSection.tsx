type Skill = { name: string; level: number };
type SkillsContent = { title?: string; description?: string; skills?: Skill[] };
const SkillsSection = ({ content }: { content?: SkillsContent }) => {
  const skills = content?.skills || [];

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center py-20 bg-black/30">
      <div className="container mx-auto px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-light text-white mb-8">Technical Skills</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white/90 font-light">{skill.name}</span>
                      <span className="text-white/60 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-1">
                      <div
                        role="progressbar"
                        aria-valuenow={skill.level}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-label={skill.name}
                        className="bg-white h-1 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-light text-white mb-8">Engineering Competencies</h3>
              <div className="space-y-8">
                <div className="border border-white/20 p-6 rounded-lg hover:border-white/40 transition-all duration-300 bg-black/20">
                  <h4 className="text-white font-light text-lg mb-3">System Design & Reliability</h4>
                  <p className="text-white/70 font-light leading-relaxed text-sm">
                    Distributed systems, API design, HA patterns, fault tolerance, zero-downtime deployments,
                    SLO/SLA design, degradation detection, post-mortems, and chaos engineering.
                  </p>
                </div>
                <div className="border border-white/20 p-6 rounded-lg hover:border-white/40 transition-all duration-300 bg-black/20">
                  <h4 className="text-white font-light text-lg mb-3">Technical Leadership & Delivery</h4>
                  <p className="text-white/70 font-light leading-relaxed text-sm">
                    Technical strategy, RFC authoring, ADRs, design reviews, engineering standards,
                    cross-team alignment, roadmap ownership, stakeholder comms, and mentoring.
                  </p>
                </div>
                <div className="border border-white/20 p-6 rounded-lg hover:border-white/40 transition-all duration-300 bg-black/20">
                  <h4 className="text-white font-light text-lg mb-3">AI-Augmented Platforms</h4>
                  <p className="text-white/70 font-light leading-relaxed text-sm">
                    LangChain, LangGraph, AWS SageMaker, Bedrock, PyTorch, and agentic automation —
                    building production systems at the intersection of cloud-native infrastructure and applied AI.
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

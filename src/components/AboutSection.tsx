type AboutContent = {
  title?: string;
  description?: string;
  education?: string;
  certifications?: string[];
  recognition?: string[];
};

const AboutSection = ({ content }: { content?: AboutContent }) => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 bg-black/40">
      <div className="container mx-auto px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-light text-white mb-8 leading-tight">
                {content?.title || "About Harmen"}
              </h2>
              <div className="space-y-6 text-white/80 font-light leading-relaxed">
                <p>
                  {content?.description ||
                    "Staff Software Engineer with 13+ years setting technical direction and owning distributed systems end-to-end at scale."}
                </p>
              </div>

              <div className="mt-12 grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-light text-white mb-2">13+</div>
                  <div className="text-white/60 text-sm font-light tracking-wide">Years</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light text-white mb-2">AWS</div>
                  <div className="text-white/60 text-sm font-light tracking-wide">6 Certs</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light text-white mb-2">UK</div>
                  <div className="text-white/60 text-sm font-light tracking-wide">London</div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              {content?.education && (
                <div>
                  <h3 className="text-2xl font-light text-white mb-4">Education</h3>
                  <p className="text-white/70 font-light">{content.education}</p>
                </div>
              )}

              {content?.certifications && content.certifications.length > 0 && (
                <div>
                  <h3 className="text-2xl font-light text-white mb-4">Certifications</h3>
                  <ul className="space-y-2 text-white/70 font-light">
                    {content.certifications.map((cert, i) => (
                      <li key={i} className="flex items-start">
                        <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span>{cert}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {content?.recognition && content.recognition.length > 0 && (
                <div>
                  <h3 className="text-2xl font-light text-white mb-4">Recognition</h3>
                  <ul className="space-y-2 text-white/70 font-light">
                    {content.recognition.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

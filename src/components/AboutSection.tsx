type AboutContent = { title?: string; description?: string };
const AboutSection = ({ content }: { content?: AboutContent }) => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 bg-black/40">
      <div className="container mx-auto px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-light text-white mb-8 leading-tight">
                {content?.title || "About the Journey"}
              </h2>
              <div className="space-y-6 text-white/80 font-light leading-relaxed">
                <p>
                  {content?.description || "Born from a passion for both technology and storytelling, my journey began in the intersection of code and creativity. What started as curiosity about how digital worlds are built has evolved into a career dedicated to crafting experiences that matter."}
                </p>
                <p>
                  Over the past decade, I've had the privilege of working with startups, agencies, and enterprises, 
                  each project teaching me something new about the delicate balance between technical excellence 
                  and human connection.
                </p>
                <p>
                  When I'm not immersed in code, you'll find me exploring new technologies, contributing to 
                  open-source projects, or seeking inspiration in the world around us. Every experience 
                  informs the work, and every project is an opportunity to push boundaries.
                </p>
              </div>
              
              <div className="mt-12 grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-light text-white mb-2">10+</div>
                  <div className="text-white/60 text-sm font-light tracking-wide">Years</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light text-white mb-2">50+</div>
                  <div className="text-white/60 text-sm font-light tracking-wide">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light text-white mb-2">∞</div>
                  <div className="text-white/60 text-sm font-light tracking-wide">Curiosity</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <h3 className="text-2xl font-light text-white mb-6">Philosophy</h3>
              
              <div className="border-l-2 border-white/30 pl-6 bg-black/20 p-4 rounded-r">
                <blockquote className="text-white/80 font-light leading-relaxed italic">
                  "The best technology is invisible – it doesn't call attention to itself, 
                  but seamlessly enables human potential and creativity to flourish."
                </blockquote>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-lg font-light text-white">Core Values</h4>
                <ul className="space-y-3 text-white/70 font-light">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Continuous learning and adaptation in an ever-evolving landscape</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Collaboration and knowledge sharing within the community</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Ethical technology that respects privacy and human dignity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Sustainable practices in both code and business</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
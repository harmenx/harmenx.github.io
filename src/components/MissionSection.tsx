const MissionSection = () => {
  return (
    <section id="mission" className="min-h-screen flex items-center justify-center py-20 bg-black/40">
      <div className="container mx-auto px-8 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-light text-white mb-8 leading-tight">
            Mission Statement
          </h2>
          <p className="text-xl text-white/80 font-light leading-relaxed mb-12 max-w-3xl mx-auto">
            To bridge the gap between imagination and reality through code, design, and relentless innovation.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center group">
              <div className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center mx-auto mb-6 group-hover:border-white/60 transition-all duration-300">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <h3 className="text-xl font-light text-white mb-4">Innovation</h3>
              <p className="text-white/70 font-light leading-relaxed">
                Pushing the boundaries of what's possible with cutting-edge technology and creative solutions.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center mx-auto mb-6 group-hover:border-white/60 transition-all duration-300">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <h3 className="text-xl font-light text-white mb-4">Excellence</h3>
              <p className="text-white/70 font-light leading-relaxed">
                Delivering exceptional quality in every line of code, every pixel, and every user interaction.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center mx-auto mb-6 group-hover:border-white/60 transition-all duration-300">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <h3 className="text-xl font-light text-white mb-4">Impact</h3>
              <p className="text-white/70 font-light leading-relaxed">
                Creating meaningful experiences that resonate with users and drive real-world results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
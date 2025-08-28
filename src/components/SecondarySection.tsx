type SecondaryContent = { title?: string; description?: string };
const SecondarySection = ({ content }: { content?: SecondaryContent }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black/50">
      <div className="text-center px-8">
        <h2 className="text-4xl font-bold text-white mb-6">
          {content?.title || "Ready to Collaborate?"}
        </h2>
        <p className="text-xl text-white/70 font-light mb-8">
          {content?.description || "Let's bring your next project to life together."}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="https://linkedin.com/in/harmdark" 
            className="px-8 py-3 border border-white/30 text-white/80 hover:border-white/60 hover:text-white rounded-full transition-all duration-300 font-light"
          >
            Get in Touch
          </a>
          <a 
            href="#work" 
            className="px-8 py-3 bg-white/10 text-white hover:bg-white/20 rounded-full transition-all duration-300 font-light"
          >
            View Projects
          </a>
        </div>
      </div>
    </div>
  );
};

export default SecondarySection;
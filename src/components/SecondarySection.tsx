type ContactLink = { label: string; href: string };
type SecondaryContent = {
  title?: string;
  description?: string;
  links?: ContactLink[];
};

const defaultLinks: ContactLink[] = [
  { label: "Email", href: "mailto:harmen.dark@gmail.com" },
  { label: "LinkedIn", href: "https://linkedin.com/in/harmdark" },
  { label: "GitHub", href: "https://github.com/harmenx" },
];

const SecondarySection = ({
  content,
  onViewWork,
}: {
  content?: SecondaryContent;
  onViewWork?: () => void;
}) => {
  const links = content?.links ?? defaultLinks;

  return (
    <div className="min-h-screen flex items-center justify-center bg-black/50">
      <div className="text-center px-8">
        <h2 className="text-4xl font-bold text-white mb-6">
          {content?.title || "Contact"}
        </h2>
        <p className="text-xl text-white/70 font-light mb-8 max-w-lg mx-auto">
          {content?.description || "Available for staff engineering, technical leadership, and consulting roles."}
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center mb-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              className="px-8 py-3 border border-white/30 text-white/80 hover:border-white/60 hover:text-white rounded-full transition-all duration-300 font-light"
            >
              {link.label}
            </a>
          ))}
        </div>
        <button
          type="button"
          onClick={onViewWork}
          className="px-8 py-3 bg-white/10 text-white hover:bg-white/20 rounded-full transition-all duration-300 font-light"
        >
          View Experience
        </button>
      </div>
    </div>
  );
};

export default SecondarySection;

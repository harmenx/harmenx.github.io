import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center px-8">
        <h1 className="text-6xl font-light mb-4">404</h1>
        <p className="text-xl text-white/70 font-light mb-8">Page not found</p>
        <Link
          to="/"
          className="inline-block px-8 py-3 border border-white/30 text-white/80 hover:border-white/60 hover:text-white rounded-full transition-all duration-300 font-light"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

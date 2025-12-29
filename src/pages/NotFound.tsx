import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background gradient-radial noise-overlay">
      <div className="text-center space-y-6 relative z-10">
        <h1 className="text-8xl font-display font-bold text-primary neon-text">
          404
        </h1>
        <p className="text-xl text-muted-foreground">
          Страница не найдена
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-display font-semibold rounded-full hover:scale-105 transition-all duration-300 neon-glow"
        >
          Вернуться на главную
        </Link>
      </div>
    </div>
  );
};

export default NotFound;


import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center">
            <span className="text-xl font-bold text-primary">StudyAI</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
            >
              Возможности
            </a>
            <a
              href="#demo"
              className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
            >
              Примеры
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
            >
              Тарифы
            </a>
            <a
              href="#testimonials"
              className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
            >
              Отзывы
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
            >
              Контакты
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="rounded-full">
              Войти
            </Button>
            <Button className="rounded-full">Регистрация</Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg rounded-b-lg py-4 px-4 animate-fade-in-up">
            <nav className="flex flex-col space-y-4">
              <a
                href="#features"
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Возможности
              </a>
              <a
                href="#demo"
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Примеры
              </a>
              <a
                href="#pricing"
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Тарифы
              </a>
              <a
                href="#testimonials"
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Отзывы
              </a>
              <a
                href="#contact"
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Контакты
              </a>
              <div className="flex flex-col space-y-2 pt-2 border-t">
                <Button variant="ghost" className="w-full justify-start rounded-full">
                  Войти
                </Button>
                <Button className="w-full rounded-full">Регистрация</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;

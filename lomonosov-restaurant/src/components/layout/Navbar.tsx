import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Меню", href: "#menu" },
  { name: "Фуршет", href: "#buffet" },
  { name: "Акции", href: "#promotions" },
  { name: "Галерея", href: "#gallery" },
  { name: "Бронирование", href: "#booking" },
  { name: "Контакты", href: "#contacts" },
  { name: "Заказ еды", href: "https://vk.com/app6408974_-203648223#/", external: true },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const checkDesktop = () => {
      const desktop = window.innerWidth >= 768;
      setIsDesktop(desktop);
      
      // Автоматически закрываем мобильное меню при переходе на десктоп
      if (desktop) {
        setIsMobileMenuOpen(false);
      }
    };
    
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  // Блокируем прокрутку страницы когда мобильное меню открыто
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
    
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [isMobileMenuOpen]);

  // Закрываем меню по нажатию на Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };
    
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <span className={cn("font-serif text-2xl tracking-widest font-bold uppercase transition-colors", isScrolled ? "text-primary" : "text-white group-hover:text-white/80")}>
            Lomonosov
          </span>
        </a>

        {/* Desktop Nav — только на экранах >= 768px */}
        {isDesktop && (
          <nav style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className={cn(
                  "text-sm font-medium tracking-wide uppercase transition-colors hover:text-secondary",
                  isScrolled ? "text-foreground" : "text-white",
                  link.external && "border border-current px-3 py-1 rounded-sm"
                )}
              >
                {link.name}
              </a>
            ))}
          </nav>
        )}

        {/* Бургер — только на мобильных */}
        {!isDesktop && (
          <button
            className="p-2 relative z-[65]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground transition-all duration-300 rotate-0" />
            ) : (
              <Menu className={cn("w-6 h-6 transition-all duration-300", isScrolled ? "text-foreground" : "text-white")} />
            )}
          </button>
        )}
      </div>

      {/* Мобильное меню — НА ВЕСЬ ЭКРАН сплошной фон */}
      <div
        onClick={closeMenu}
        style={{
          position: "fixed",
          inset: 0,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100vw',
          height: '100dvh',
          zIndex: 55,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
          backgroundColor: "#ffffff",
          padding: "2rem 1.5rem",
          paddingTop: "5rem",
          opacity: isMobileMenuOpen ? 1 : 0,
          visibility: isMobileMenuOpen ? 'visible' : 'hidden',
          transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(-100%)',
          transition: 'opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1), transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), visibility 0.4s',
          willChange: 'opacity, transform',
          overflowY: 'auto',
        }}
      >
        <span className="font-serif text-3xl font-bold uppercase tracking-widest text-primary mb-8">
          Lomonosov
        </span>
        
        <div style={{ 
          width: '100%', 
          maxWidth: '320px', 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '0.75rem' 
        }}>
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.stopPropagation();
                setTimeout(closeMenu, 180);
              }}
              {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              style={{
                display: 'block',
                width: '100%',
                padding: '1rem 1.5rem',
                textAlign: 'center',
                backgroundColor: link.external ? '#d4af37' : '#f8f7f4',
                color: link.external ? '#ffffff' : '#1f2937',
                borderRadius: '12px',
                fontSize: link.external ? '0.95rem' : '1.15rem',
                fontWeight: link.external ? 600 : 500,
                fontFamily: link.external ? 'system-ui, sans-serif' : 'serif',
                textDecoration: 'none',
                textTransform: link.external ? 'uppercase' : 'none',
                letterSpacing: link.external ? '0.05em' : 'normal',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                opacity: isMobileMenuOpen ? 1 : 0,
                transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(25px)',
                transition: `all 0.25s ease ${0.07 * index}s`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.02)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = isMobileMenuOpen ? 'translateY(0)' : 'translateY(25px)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)';
              }}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
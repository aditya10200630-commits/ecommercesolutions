import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Locations', href: '#locations' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setIsMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2.5 group"
          >
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                isScrolled
                  ? 'bg-brand-600 shadow-md shadow-brand-600/20'
                  : 'bg-white/15 backdrop-blur-sm border border-white/20'
              }`}
            >
              <ShoppingBag className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col leading-none">
              <span
                className={`text-lg font-extrabold tracking-tight transition-colors duration-300 ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}
              >
                eComSolution
              </span>
              <span
                className={`text-[9px] font-semibold tracking-[0.2em] uppercase transition-colors duration-300 ${
                  isScrolled ? 'text-brand-600' : 'text-brand-200'
                }`}
              >
                .co.in
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isScrolled
                    ? 'text-gray-700 hover:text-brand-600 hover:bg-brand-50'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNav('#pricing')}
              className={`ml-3 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                isScrolled
                  ? 'bg-brand-600 text-white hover:bg-brand-700 shadow-md shadow-brand-600/20'
                  : 'bg-white text-brand-700 hover:bg-brand-50 shadow-lg'
              }`}
            >
              Get Started
            </button>
          </nav>

          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-gray-100 shadow-xl">
          <div className="container-custom py-4 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:text-brand-600 hover:bg-brand-50 rounded-lg font-medium"
              >
                {link.label}
              </button>
            ))}
            <button onClick={() => handleNav('#pricing')} className="btn-primary w-full mt-2">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

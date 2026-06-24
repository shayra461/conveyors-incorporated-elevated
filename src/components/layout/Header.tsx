import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png';
import { useLanguage } from '@/context/LanguageContext';

const navItems = [
  { labelKey: 'nav.home', path: '/' },
  { labelKey: 'nav.about', path: '/about' },
  { labelKey: 'nav.products', path: '/products' },
  { labelKey: 'nav.industries', path: '/industries' },
  { labelKey: 'nav.resources', path: '/resources' },
  { labelKey: 'nav.training', path: '/training' },
  { labelKey: 'nav.news', path: '/news' },
  { labelKey: 'nav.contact', path: '/contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t, language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? 'bg-slate-950/90 backdrop-blur-md shadow-2xl py-2' // Removed border-b to fix "white line" flash
        : 'bg-gradient-to-b from-black/60 to-transparent py-4'
        }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="relative z-10">
          <motion.img
            src={logo}
            alt="Conveyors Incorporated"
            className="h-12 sm:h-16 md:h-18 lg:h-20 xl:h-24 2xl:h-28 w-auto min-w-[120px] sm:min-w-[140px] md:min-w-[160px] object-contain"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-3 py-2 text-[13px] font-bold uppercase tracking-widest transition-all duration-300 relative group text-white/90 hover:text-white`}
            >
              {t(item.labelKey)}
              <span
                className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-accent transition-all duration-300 ${location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
              />
            </Link>
          ))}
          
          {/* Language Selector */}
          <div className="flex items-center ml-2 border border-white/20 rounded-lg overflow-hidden h-9 bg-black/20">
            <button
              onClick={() => setLanguage('en')}
              className={`px-2.5 py-1 text-xs font-bold transition-all h-full ${language === 'en' ? 'bg-accent text-slate-950' : 'bg-transparent text-white/70 hover:text-white'}`}
            >
              EN
            </button>
            <div className="w-px h-full bg-white/25"></div>
            <button
              onClick={() => setLanguage('es')}
              className={`px-2.5 py-1 text-xs font-bold transition-all h-full ${language === 'es' ? 'bg-accent text-slate-950' : 'bg-transparent text-white/70 hover:text-white'}`}
            >
              ES
            </button>
          </div>

          <Link to="/quote">
            <Button variant="accent" size="sm" className="ml-4 font-bold shadow-[0_0_20px_rgba(234,179,8,0.3)] hover:shadow-[0_0_30px_rgba(234,179,8,0.5)] transition-shadow">
              {t('nav.requestQuote')}
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden relative z-10 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-8 h-8 text-white" />
          ) : (
            <Menu className="w-8 h-8 text-white" />
          )}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full left-0 right-0 bg-card shadow-xl lg:hidden"
            >
              <nav className="container mx-auto px-6 py-6 flex flex-col gap-2 bg-slate-900 border-b border-border/40">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block px-4 py-3 text-base font-medium uppercase tracking-wider transition-colors ${location.pathname === item.path
                        ? 'text-accent bg-muted'
                        : 'text-foreground hover:text-accent hover:bg-muted'
                        }`}
                    >
                      {t(item.labelKey)}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.05 }}
                  className="pt-2 flex flex-col gap-4"
                >
                  <Link to="/quote" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button variant="hero" className="w-full">
                      {t('nav.requestQuote')}
                    </Button>
                  </Link>

                  {/* Mobile Language Switcher */}
                  <div className="flex justify-center items-center gap-4 pt-4 border-t border-white/10">
                    <span className="text-xs font-semibold text-white/50 uppercase tracking-wider">Language / Idioma:</span>
                    <div className="flex border border-white/20 rounded-lg overflow-hidden h-9 bg-black/20">
                      <button
                        onClick={() => { setLanguage('en'); setIsMobileMenuOpen(false); }}
                        className={`px-4 py-1 text-xs font-bold transition-all h-full ${language === 'en' ? 'bg-accent text-slate-950' : 'bg-transparent text-white'}`}
                      >
                        English
                      </button>
                      <div className="w-px h-full bg-white/20"></div>
                      <button
                        onClick={() => { setLanguage('es'); setIsMobileMenuOpen(false); }}
                        className={`px-4 py-1 text-xs font-bold transition-all h-full ${language === 'es' ? 'bg-accent text-slate-950' : 'bg-transparent text-white'}`}
                      >
                        Español
                      </button>
                    </div>
                  </div>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

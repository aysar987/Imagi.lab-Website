import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  activeSection: string;
}



export function Header({ activeSection }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'clients', label: 'Projects' },
    { id: 'faq', label: 'FAQ' },
    { id: 'social', label: 'Social Media' },
  ];
  
  
  
  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-auto max-w-5xl">
      <nav className="backdrop-blur-md bg-[#40BFE5]/10 border-2 border-[#40BFE5]/40 rounded-[30px] shadow-2xl px-8 py-3.5">
        <div className="flex items-center justify-center">
          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-6 text-base">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-all hover:text-[#40BFE5] hover:drop-shadow-[0_0_8px_rgba(64,191,229,0.6)] ${
                    activeSection === item.id ? 'text-[#40BFE5] drop-shadow-[0_0_8px_rgba(64,191,229,0.6)]' : 'text-white'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-[#40BFE5] hover:drop-shadow-[0_0_8px_rgba(64,191,229,0.6)] transition-all"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <ul className="md:hidden mt-4 pt-4 border-t border-white/20 space-y-3">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left transition-all hover:text-[#40BFE5] hover:drop-shadow-[0_0_8px_rgba(64,191,229,0.6)] ${
                    activeSection === item.id ? 'text-[#40BFE5] drop-shadow-[0_0_8px_rgba(64,191,229,0.6)]' : 'text-white'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}

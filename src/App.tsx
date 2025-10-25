import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { WhyImagilab } from './components/WhyImagilab';
import { ServicesSection } from './components/ServicesSection';
import { ClientsSection } from './components/ClientsSection';
import { FAQSection } from './components/FAQSection';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'why', 'services', 'clients', 'faq'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-black min-h-screen relative overflow-hidden">
      {/* Random Blue Gradients Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[10%] left-[15%] w-96 h-96 bg-[#40BFE5] rounded-full opacity-20 blur-[120px]" />
        <div className="absolute top-[40%] right-[10%] w-80 h-80 bg-blue-500 rounded-full opacity-15 blur-[100px]" />
        <div className="absolute bottom-[20%] left-[25%] w-72 h-72 bg-cyan-400 rounded-full opacity-25 blur-[90px]" />
        <div className="absolute top-[60%] right-[30%] w-64 h-64 bg-[#40BFE5] rounded-full opacity-10 blur-[80px]" />
        <div className="absolute bottom-[40%] left-[5%] w-56 h-56 bg-blue-600 rounded-full opacity-15 blur-[70px]" />
        <div className="absolute top-[25%] right-[45%] w-48 h-48 bg-cyan-300 rounded-full opacity-20 blur-[60px]" />
      </div>
      
      <div className="relative z-10">
        <Header activeSection={activeSection} />
        <HeroSection />
        <AboutSection />
        <WhyImagilab />
        <ServicesSection />
        <ClientsSection />
        <FAQSection />
      </div>
    </div>
  );
}

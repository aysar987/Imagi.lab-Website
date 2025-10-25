import logoImage from 'figma:asset/7e39f17d3ce500255732c5adc08a0baba4b8bb31.png';

export function HeroSection() {
  
  const handleGetStarted = () => {
    window.open("https://forms.gle/VhuVBqoZxmCNVFdS6", "_blank");
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-b from-black via-black to-[#40BFE5]/10 relative"
    >
      {/* Background Logo */}
      <div className="absolute inset-0 flex items-center justify-center opacity-50 pointer-events-none">
        <img 
          src={logoImage} 
          alt="" 
          className="w-[600px] h-[600px] object-contain"
        />
      </div>

      {/* Content */}
      <div className="text-center max-w-4xl relative z-10">
        <h1 
          className="text-7xl md:text-9xl mb-6 text-white" 
          style={{ fontFamily: 'Product Sans, sans-serif', fontWeight: 500 }}
        >
          Imagi.lab
        </h1>
        <p 
          className="text-xl md:text-2xl text-gray-300 mb-12" 
          style={{ fontFamily: 'Product Sans, sans-serif', fontWeight: 500 }}
        >
          Butuh website atau butuh sebuah desain ? <br />
  <span className="text-[#40BFE5]">imaji.lab</span> solusinya
        </p>

        <button
          onClick={handleGetStarted}
          className="backdrop-blur-md bg-[#40BFE5]/20 hover:bg-[#40BFE5]/30 border-2 border-[#40BFE5]/60 text-[#40BFE5] px-8 py-2 text-lg font-bold rounded-[30px] transition-all hover:drop-shadow-[0_0_12px_rgba(64,191,229,0.8)] hover:scale-105 uppercase tracking-wide"
          style={{ fontFamily: 'Product Sans, sans-serif' }}
        >
          Get Started!
        </button>
      </div>
    </section>
  );
}

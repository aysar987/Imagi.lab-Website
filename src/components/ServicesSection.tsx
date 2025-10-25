import { Code, Palette, Rocket } from 'lucide-react';

export function ServicesSection() {
  const services = [
    {
      icon: <Code size={48} />,
      title: 'Web Development',
      description:
        'Kami merancang dan membangun website serta aplikasi yang modern, responsif, dan mudah digunakan — dirancang untuk menghadirkan pengalaman pengguna terbaik.',
    },
    {
      icon: <Palette size={48} />,
      title: 'Design',
      description:
        'Mulai dari desain feeds Instagram, branding, hingga interface software — kami menciptakan desain visual yang estetik, konsisten, dan selaras dengan identitas Anda.',
    },
    {
      icon: <Rocket size={48} />,
      title: 'Editings',
      description:
        'Kami mengubah ide Anda menjadi karya visual yang menarik dan profesional, baik untuk kebutuhan promosi, konten media sosial, maupun presentasi bisnis.',
    },
  ];

  return (
    <section id="services" className="min-h-screen flex items-center justify-center px-6 py-6">
      <div className="max-w-7xl w-full">
        <h2 className="text-5xl md:text-6xl mb-16 text-[#40BFE5] text-center" style={{ fontFamily: 'Product Sans, sans-serif', fontWeight: 500 }}>
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="backdrop-blur-md bg-white/5 border border-[#40BFE5]/30 rounded-2xl p-8 hover:bg-white/10 transition-all hover:scale-105 hover:border-[#40BFE5] hover:drop-shadow-[0_0_16px_rgba(64,191,229,0.6)] cursor-pointer"
            >
              <div className="text-[#40BFE5] mb-6">{service.icon}</div>
              <h3 className="text-2xl mb-4 text-white">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

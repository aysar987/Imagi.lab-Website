import { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from './ui/carousel';
import flippyImage from 'figma:asset/6d74bf0b153c8aac995285ee19414bfc3ed95d46.png';
import phishScanImage from 'figma:asset/62f9a47278d9fcd7558dd1ce1be29ed3cf31483a.png';
import pkkmbImage from 'figma:asset/3980f9e8926a52c87ebd5f632ecf69d374911790.png';
import iccImage from 'figma:asset/599633f81022e03e612f7222cef25a3519e1746c.png';

export function ClientsSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });

    // Auto scroll every 3 seconds
    const autoScroll = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(autoScroll);
  }, [api]);

  const clients = [
    {
      name: 'Flippy',
      description:
        'Kami merancang Website belajar dengan metode interaktif dan menyenangkan, dirancang untuk membuat proses pembelajaran lebih efektif, mudah dipahami, dan tidak membosankan.',
      image: flippyImage,
    },
    {
      name: 'PhishScan',
      description:
        'Dalam rangka Hackathon tim kami membuat sebuah web AI yang berfungsi untuk mendeteksi link atau web phishing',
      image: phishScanImage,
    },
    {
      name: 'Logo PKKMB FT UH 2025',
      description:
        'Anggota tim kami mengambil bagian untuk ngedesain logo dari pkkmb fakultas teknik tahun 2025',
      image: pkkmbImage,
    },
    {
      name: 'Logo ICC UH',
      description:
        'Anggota tim kami ngedesain logo dari tim cybersecurity Universitas Hasanuddin',
      image: iccImage,
    },
  ];

  return (
    <section id="clients" className="min-h-screen flex items-center justify-center px-6 py-6 relative overflow-hidden">
      <div className="max-w-7xl w-full relative z-10">
        <h2 className="text-5xl md:text-6xl mb-16 text-[#40BFE5] text-center" style={{ fontFamily: 'Product Sans, sans-serif', fontWeight: 500 }}>
          Our Projects
        </h2>
        <div className="px-4 md:px-8">
          <Carousel
            setApi={setApi}
            opts={{
              align: 'center',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {clients.map((client, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div
                    className={`backdrop-blur-md bg-white/5 border border-[#40BFE5]/20 rounded-2xl p-6 transition-all duration-500 cursor-pointer ${
                      index === current 
                        ? 'opacity-100 blur-0 scale-100 hover:drop-shadow-[0_0_20px_rgba(64,191,229,0.6)] hover:scale-105' 
                        : 'opacity-40 blur-sm scale-95'
                    }`}
                  >
                    <div className="aspect-video mb-4 rounded-lg overflow-hidden border border-[#40BFE5]/10">
                      <img
                        src={client.image}
                        alt={client.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl mb-2 text-[#40BFE5]">{client.name}</h3>
                    <p className="text-gray-300 text-sm">{client.description}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-[#40BFE5] hover:bg-[#40BFE5]/80 text-black border-none -left-4 md:-left-12 hover:drop-shadow-[0_0_12px_rgba(64,191,229,0.8)] transition-all" />
            <CarouselNext className="bg-[#40BFE5] hover:bg-[#40BFE5]/80 text-black border-none -right-4 md:-right-12 hover:drop-shadow-[0_0_12px_rgba(64,191,229,0.8)] transition-all" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}

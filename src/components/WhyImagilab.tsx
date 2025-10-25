import { Users, DollarSign, Boxes, Award, Handshake } from 'lucide-react';

export function WhyImagilab() {
  const reasons = [
    {
      icon: <Users size={48} />,
      title: 'Profesional Developers',
      description:
        'Tim kami terdiri dari mahasiswa berpengalaman di bidang Teknologi Informasi dan Desain Digital dari Universitas Hasanuddin (UNHAS) dan Institut Teknologi Sepuluh Nopember (ITS). Kami menggabungkan kreativitas dan keahlian teknis untuk menghasilkan karya yang fungsional sekaligus estetis',
    },
    {
      icon: <DollarSign size={48} />,
      title: 'Harga Fleksibel',
      description:
        'Kami memahami setiap proyek punya kebutuhan dan budget berbeda. Karena itu, biaya pengerjaan dapat disesuaikan dan kami terbuka untuk negosiasi agar tetap ramah di kantong tanpa mengorbankan kualitas.',
    },
    {
      icon: <Boxes size={48} />,
      title: 'Adaptive Handling',
      description:
        'Tidak perlu memesan full project jika kamu hanya butuh bantuan di satu bagian saja — misalnya frontend, desain UI/UX, atau editing konten. Kami siap bantu sesuai kebutuhan spesifik proyekmu.',
    },
    {
      icon: <Award size={48} />,
      title: 'Kualitas Terjamin',
      description:
        'Kami berkomitmen memberikan hasil terbaik di setiap proyek. imaji.lab menyediakan layanan revisi agar hasil akhir benar-benar sesuai dengan ekspektasimu.',
    },
    {
      icon: <Handshake size={48} />,
      title: 'Profesional, Komunikatif, & Bertanggung Jawab',
      description:
        'Selama proses pengerjaan, kami menjaga komunikasi aktif dengan klien dan memastikan setiap tahapan berjalan transparan. Kami tidak hanya menyelesaikan proyek — kami membangun kepercayaan dan kepuasan klien.',
    },
  ];

  return (
    <section id="why" className="min-h-screen flex items-center justify-center px-6 py-6">
      <div className="max-w-7xl w-full">
        <h2 className="text-5xl md:text-6xl mb-16 text-[#40BFE5] text-center" style={{ fontFamily: 'Product Sans, sans-serif', fontWeight: 500 }}>
          Why Imagi.lab?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative backdrop-blur-md bg-gradient-to-br from-white/10 to-white/5 border-2 border-[#40BFE5]/20 rounded-3xl p-8 transition-all duration-300 hover:border-[#40BFE5]/60 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#40BFE5]/0 to-[#40BFE5]/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="text-[#40BFE5] mb-6 group-hover:scale-110 group-hover:drop-shadow-[0_0_12px_rgba(64,191,229,0.8)] transition-transform duration-300">{reason.icon}</div>
                <h3 className="text-2xl mb-4 text-white group-hover:text-[#40BFE5] transition-colors duration-300">{reason.title}</h3>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

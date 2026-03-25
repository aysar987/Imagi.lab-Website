"use client";

import Image from "next/image";
import { type ReactNode, useEffect, useState } from "react";
import {
  Award,
  Boxes,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Code,
  DollarSign,
  Handshake,
  Instagram,
  Linkedin,
  Menu,
  MessageCircle,
  Palette,
  Rocket,
  Users,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "clients", label: "Projects" },
  { id: "faq", label: "FAQ" },
  { id: "social", label: "Social Media" },
];

const reasons = [
  {
    Icon: Users,
    title: "Profesional Developers",
    description:
      "Tim kami terdiri dari mahasiswa berpengalaman di bidang Teknologi Informasi dan Desain Digital dari Universitas Hasanuddin (UNHAS) dan Institut Teknologi Sepuluh Nopember (ITS). Kami menggabungkan kreativitas dan keahlian teknis untuk menghasilkan karya yang fungsional sekaligus estetis.",
  },
  {
    Icon: DollarSign,
    title: "Harga Fleksibel",
    description:
      "Kami memahami setiap proyek punya kebutuhan dan budget berbeda. Karena itu, biaya pengerjaan dapat disesuaikan dan kami terbuka untuk negosiasi agar tetap ramah di kantong tanpa mengorbankan kualitas.",
  },
  {
    Icon: Boxes,
    title: "Adaptive Handling",
    description:
      "Tidak perlu memesan full project jika kamu hanya butuh bantuan di satu bagian saja, misalnya frontend, desain UI/UX, atau editing konten. Kami siap bantu sesuai kebutuhan spesifik proyekmu.",
  },
  {
    Icon: Award,
    title: "Kualitas Terjamin",
    description:
      "Kami berkomitmen memberikan hasil terbaik di setiap proyek. imaji.lab menyediakan layanan revisi agar hasil akhir benar-benar sesuai dengan ekspektasimu.",
  },
  {
    Icon: Handshake,
    title: "Profesional, Komunikatif, & Bertanggung Jawab",
    description:
      "Selama proses pengerjaan, kami menjaga komunikasi aktif dengan klien dan memastikan setiap tahapan berjalan transparan. Kami tidak hanya menyelesaikan proyek, kami membangun kepercayaan dan kepuasan klien.",
  },
];

const services = [
  {
    Icon: Code,
    title: "Web Development",
    description:
      "Kami merancang dan membangun website serta aplikasi yang modern, responsif, dan mudah digunakan, dirancang untuk menghadirkan pengalaman pengguna terbaik.",
  },
  {
    Icon: Palette,
    title: "Design",
    description:
      "Mulai dari desain feeds Instagram, branding, hingga interface software, kami menciptakan desain visual yang estetik, konsisten, dan selaras dengan identitas Anda.",
  },
  {
    Icon: Rocket,
    title: "Editings",
    description:
      "Kami mengubah ide Anda menjadi karya visual yang menarik dan profesional, baik untuk kebutuhan promosi, konten media sosial, maupun presentasi bisnis.",
  },
];

const projects = [
  {
    name: "Flippy",
    description:
      "Kami merancang website belajar dengan metode interaktif dan menyenangkan, dirancang untuk membuat proses pembelajaran lebih efektif, mudah dipahami, dan tidak membosankan.",
    image: "/imagilab/project-flippy.png",
  },
  {
    name: "PhishScan",
    description:
      "Dalam rangka hackathon, tim kami membuat sebuah web AI yang berfungsi untuk mendeteksi link atau web phishing.",
    image: "/imagilab/project-phishscan.png",
  },
  {
    name: "Logo PKKMB FT UH 2025",
    description:
      "Anggota tim kami mengambil bagian untuk mendesain logo PKKMB Fakultas Teknik tahun 2025.",
    image: "/imagilab/project-pkkmb.png",
  },
  {
    name: "Logo ICC UH",
    description:
      "Anggota tim kami mendesain logo dari tim cybersecurity Universitas Hasanuddin.",
    image: "/imagilab/project-icc.png",
  },
];

const faqs = [
  {
    question: "Apa jasa yang ditawarkan?",
    answer:
      "Kami mengubah ide Anda menjadi karya digital yang menarik dan profesional, mulai dari pembuatan website, desain visual, hingga editing konten untuk kebutuhan bisnis maupun personal.",
  },
  {
    question: "Berapa lama satu project website dikerjakan?",
    answer:
      "Waktu pengerjaan proyek bervariasi tergantung pada cakupan dan tingkat kompleksitasnya. Sebuah website sederhana biasanya memakan waktu sekitar 4 sampai 5 hari, sedangkan aplikasi web yang lebih kompleks dapat memakan waktu 2 sampai 3 pekan.",
  },
  {
    question: "Bagaimana proses pelayanannya?",
    answer:
      "Proses pelayanan kami dimulai dari diskusi kebutuhan dan tujuan proyek. Setelah itu, kami membuat konsep dan perencanaan detail, termasuk desain awal dan jadwal pengerjaan. Selama proses berlangsung, kami selalu berkomunikasi secara rutin untuk memastikan hasil sesuai harapan.",
  },
  {
    question: "Apakah Anda menyediakan dukungan setelah proyek selesai?",
    answer:
      "Ya, kami menyediakan layanan dukungan dan pemeliharaan berkelanjutan dalam rentang 6 bulan untuk memastikan hasil proyek Anda tetap optimal. Layanan ini mencakup pembaruan sistem, perbaikan bug, penyesuaian desain, serta pengembangan fitur tambahan sesuai kebutuhan Anda.",
  },
  {
    question: "Bagaimana penentuan biaya untuk setiap proyek?",
    answer:
      "Harga proyek kami disesuaikan berdasarkan tingkat kesulitan, kompleksitas, serta kebutuhan spesifik setiap klien. Kami akan memberikan estimasi biaya yang transparan setelah memahami detail proyek dan ruang lingkup pekerjaannya.",
  },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/imagilab.id/",
    Icon: Instagram,
  },
  {
    label: "WhatsApp",
    href: "#",
    Icon: MessageCircle,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/109692058/",
    Icon: Linkedin,
  },
];

function SectionTitle({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "mb-8 text-center text-5xl text-[#40BFE5] md:text-6xl",
        className,
      )}
      style={{ fontFamily: "var(--font-imagilab)", fontWeight: 500 }}
    >
      {children}
    </h2>
  );
}

export function ImagilabHomePage() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "why",
        "services",
        "clients",
        "faq",
        "social",
      ];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) {
          continue;
        }

        const { offsetTop, offsetHeight } = element;
        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveSection(section);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const autoScroll = window.setInterval(() => {
      setActiveProject((current) => (current + 1) % projects.length);
    }, 3000);

    return () => window.clearInterval(autoScroll);
  }, []);

  function scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (!element) {
      return;
    }

    element.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  }

  function showPreviousProject() {
    setActiveProject(
      (current) => (current - 1 + projects.length) % projects.length,
    );
  }

  function showNextProject() {
    setActiveProject((current) => (current + 1) % projects.length);
  }

  const orderedProjects = projects.map(
    (_, offset) => projects[(activeProject + offset) % projects.length],
  );
  const currentYear = new Date().getFullYear();

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-[10%] left-[15%] h-96 w-96 rounded-full bg-[#40BFE5] opacity-20 blur-[120px]" />
        <div className="absolute top-[40%] right-[10%] h-80 w-80 rounded-full bg-blue-500 opacity-15 blur-[100px]" />
        <div className="absolute bottom-[20%] left-[25%] h-72 w-72 rounded-full bg-cyan-400 opacity-25 blur-[90px]" />
        <div className="absolute top-[60%] right-[30%] h-64 w-64 rounded-full bg-[#40BFE5] opacity-10 blur-[80px]" />
        <div className="absolute bottom-[40%] left-[5%] h-56 w-56 rounded-full bg-blue-600 opacity-15 blur-[70px]" />
        <div className="absolute top-[25%] right-[45%] h-48 w-48 rounded-full bg-cyan-300 opacity-20 blur-[60px]" />
      </div>

      <div className="relative z-10">
        <header className="fixed top-6 left-1/2 z-50 w-auto max-w-5xl -translate-x-1/2">
          <nav className="rounded-[30px] border-2 border-[#40BFE5]/40 bg-[#40BFE5]/10 px-8 py-3.5 shadow-2xl backdrop-blur-md">
            <div className="flex items-center justify-center">
              <ul className="hidden items-center gap-6 text-base md:flex">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => scrollToSection(item.id)}
                      className={cn(
                        "transition-all hover:text-[#40BFE5] hover:drop-shadow-[0_0_8px_rgba(64,191,229,0.6)]",
                        activeSection === item.id
                          ? "text-[#40BFE5] drop-shadow-[0_0_8px_rgba(64,191,229,0.6)]"
                          : "text-white",
                      )}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className="text-white transition-all hover:text-[#40BFE5] hover:drop-shadow-[0_0_8px_rgba(64,191,229,0.6)] md:hidden"
                onClick={() => setMobileMenuOpen((open) => !open)}
                aria-label="Toggle navigation"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {mobileMenuOpen ? (
              <ul className="mt-4 space-y-3 border-t border-white/20 pt-4 md:hidden">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => scrollToSection(item.id)}
                      className={cn(
                        "block w-full text-left transition-all hover:text-[#40BFE5] hover:drop-shadow-[0_0_8px_rgba(64,191,229,0.6)]",
                        activeSection === item.id
                          ? "text-[#40BFE5] drop-shadow-[0_0_8px_rgba(64,191,229,0.6)]"
                          : "text-white",
                      )}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            ) : null}
          </nav>
        </header>

        <main>
          <section
            id="home"
            className="relative flex min-h-screen items-center justify-center bg-gradient-to-b from-black via-black to-[#40BFE5]/10 px-6"
          >
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-50">
              <Image
                src="/imagilab/hero-logo.png"
                alt=""
                width={600}
                height={600}
                className="h-[600px] w-[600px] object-contain"
              />
            </div>

            <div className="relative z-10 max-w-4xl text-center">
              <h1
                className="mb-6 text-7xl text-white md:text-9xl"
                style={{ fontFamily: "var(--font-imagilab)", fontWeight: 500 }}
              >
                Imagi.lab
              </h1>
              <p
                className="mb-12 text-xl text-gray-300 md:text-2xl"
                style={{ fontFamily: "var(--font-imagilab)", fontWeight: 500 }}
              >
                Butuh website atau butuh sebuah desain?
                <br />
                <span className="text-[#40BFE5]">imaji.lab</span> solusinya
              </p>

              <button
                type="button"
                onClick={() =>
                  window.open(
                    "https://forms.gle/VhuVBqoZxmCNVFdS6",
                    "_blank",
                    "noopener,noreferrer",
                  )
                }
                className="rounded-[30px] border-2 border-[#40BFE5]/60 bg-[#40BFE5]/20 px-8 py-2 text-lg font-bold tracking-wide text-[#40BFE5] uppercase transition-all hover:scale-105 hover:bg-[#40BFE5]/30 hover:drop-shadow-[0_0_12px_rgba(64,191,229,0.8)]"
                style={{ fontFamily: "var(--font-imagilab)" }}
              >
                Get Started!
              </button>
            </div>
          </section>

          <section
            id="about"
            className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-6"
          >
            <div className="relative z-10 max-w-4xl text-center">
              <SectionTitle>About Us</SectionTitle>
              <div className="space-y-6 text-xl text-gray-300">
                <p>
                  Imaji.lab adalah tim kreatif dan teknologi yang berfokus
                  menghadirkan solusi digital.
                </p>
                <p>
                  Mulai dari desain grafis, video editing, hingga pengembangan
                  website dan software, kami membantu individu maupun bisnis
                  dalam menyelesaikan kebutuhan digital yang kuat dan menarik.
                </p>
                <p>
                  Dengan pendekatan kolaboratif dan efisien, setiap ide memiliki
                  potensi besar untuk diwujudkan melalui sentuhan teknologi dan
                  kreativitas.
                </p>
              </div>
            </div>
          </section>

          <section
            id="why"
            className="flex min-h-screen items-center justify-center px-6 py-6"
          >
            <div className="w-full max-w-7xl">
              <SectionTitle className="mb-16">Why Imagi.lab?</SectionTitle>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {reasons.map(({ Icon, title, description }) => (
                  <div
                    key={title}
                    className="group relative rounded-3xl border-2 border-[#40BFE5]/20 bg-gradient-to-br from-white/10 to-white/5 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#40BFE5]/60"
                  >
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#40BFE5]/0 to-[#40BFE5]/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="relative z-10">
                      <div className="mb-6 text-[#40BFE5] transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_12px_rgba(64,191,229,0.8)]">
                        <Icon size={48} />
                      </div>
                      <h3 className="mb-4 text-2xl text-white transition-colors duration-300 group-hover:text-[#40BFE5]">
                        {title}
                      </h3>
                      <p className="text-gray-300 transition-colors duration-300 group-hover:text-gray-200">
                        {description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section
            id="services"
            className="flex min-h-screen items-center justify-center px-6 py-6"
          >
            <div className="w-full max-w-7xl">
              <SectionTitle className="mb-16">Our Services</SectionTitle>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {services.map(({ Icon, title, description }) => (
                  <div
                    key={title}
                    className="cursor-pointer rounded-2xl border border-[#40BFE5]/30 bg-white/5 p-8 transition-all hover:scale-105 hover:border-[#40BFE5] hover:bg-white/10 hover:drop-shadow-[0_0_16px_rgba(64,191,229,0.6)]"
                  >
                    <div className="mb-6 text-[#40BFE5]">
                      <Icon size={48} />
                    </div>
                    <h3 className="mb-4 text-2xl text-white">{title}</h3>
                    <p className="text-gray-300">{description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section
            id="clients"
            className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-6"
          >
            <div className="relative z-10 w-full max-w-7xl">
              <SectionTitle className="mb-16">Our Projects</SectionTitle>

              <div className="relative px-4 md:px-8">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {orderedProjects.slice(0, 3).map((project, index) => (
                    <article
                      key={`${project.name}-${index}`}
                      className={cn(
                        "rounded-2xl border border-[#40BFE5]/20 bg-white/5 p-6 transition-all duration-500",
                        index === 0
                          ? "scale-100 opacity-100 hover:scale-105 hover:drop-shadow-[0_0_20px_rgba(64,191,229,0.6)]"
                          : "scale-95 opacity-40 blur-sm",
                        index > 0 && "hidden md:block",
                        index > 1 && "md:hidden lg:block",
                      )}
                    >
                      <div className="mb-4 aspect-video overflow-hidden rounded-lg border border-[#40BFE5]/10">
                        <Image
                          src={project.image}
                          alt={project.name}
                          width={1200}
                          height={675}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <h3 className="mb-2 text-xl text-[#40BFE5]">
                        {project.name}
                      </h3>
                      <p className="text-sm text-gray-300">
                        {project.description}
                      </p>
                    </article>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={showPreviousProject}
                  className="absolute top-1/2 left-0 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#40BFE5] text-black transition-all hover:bg-[#40BFE5]/80 hover:drop-shadow-[0_0_12px_rgba(64,191,229,0.8)] md:-left-8"
                  aria-label="Show previous project"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={showNextProject}
                  className="absolute top-1/2 right-0 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#40BFE5] text-black transition-all hover:bg-[#40BFE5]/80 hover:drop-shadow-[0_0_12px_rgba(64,191,229,0.8)] md:-right-8"
                  aria-label="Show next project"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </section>

          <section
            id="faq"
            className="flex min-h-screen items-center justify-center px-6 py-6"
          >
            <div className="w-full max-w-4xl">
              <SectionTitle className="mb-16">FAQ</SectionTitle>
              <div className="space-y-4">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;

                  return (
                    <div
                      key={faq.question}
                      className={cn(
                        "rounded-lg border border-[#40BFE5]/30 bg-white/5 px-6 transition-all hover:drop-shadow-[0_0_12px_rgba(64,191,229,0.4)]",
                        isOpen && "border-[#40BFE5]",
                      )}
                    >
                      <button
                        type="button"
                        className="flex w-full items-center justify-between gap-4 py-5 text-left text-white transition-all hover:text-[#40BFE5] hover:drop-shadow-[0_0_8px_rgba(64,191,229,0.6)]"
                        onClick={() =>
                          setOpenFaq((current) =>
                            current === index ? null : index,
                          )
                        }
                        aria-expanded={isOpen}
                      >
                        <span>{faq.question}</span>
                        <ChevronDown
                          className={cn(
                            "h-5 w-5 shrink-0 transition-transform",
                            isOpen && "rotate-180",
                          )}
                        />
                      </button>

                      {isOpen ? (
                        <div className="pb-5 text-gray-300">{faq.answer}</div>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <section id="social" className="px-6 py-6">
            <div className="mx-auto max-w-4xl text-center">
              <h2
                className="mb-6 text-3xl text-[#40BFE5]"
                style={{
                  fontFamily: "var(--font-imagilab)",
                  fontWeight: 500,
                }}
              >
                Connect With Us
              </h2>
              <div className="mb-12 flex justify-center gap-4">
                {socialLinks.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    className="rounded-full border border-[#40BFE5]/30 bg-white/5 p-3 text-[#40BFE5] transition-all hover:scale-110 hover:bg-[#40BFE5] hover:text-black hover:drop-shadow-[0_0_12px_rgba(64,191,229,0.8)]"
                  >
                    <Icon size={24} />
                  </a>
                ))}
              </div>
              <div className="border-t border-white/10 pt-6">
                <p className="text-sm text-gray-500">
                  © {currentYear} Imaji.lab All rights reserved.
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

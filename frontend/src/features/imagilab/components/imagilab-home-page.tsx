import Image from "next/image";
import { Box, Clapperboard, Code2, PenTool } from "lucide-react";

const navigationItems = [
  { href: "#home", label: "Home", active: true },
  { href: "#about", label: "About" },
  { href: "#services", label: "Service" },
  { href: "#projects", label: "Projects" },
];

const serviceItems = [
  { label: "Software Dev", Icon: Code2 },
  { label: "Designing", Icon: PenTool },
  { label: "Video Editing", Icon: Clapperboard },
  { label: "3D Designing", Icon: Box },
];

const projectItems = [
  {
    title: "Nama Project",
    description: "Lorem ipsum dolor sit amet",
    date: "12-12-2026",
    accent: "bg-[linear-gradient(135deg,#cfb7a4_0%,#f2e8dc_38%,#ad8a72_100%)]",
  },
  {
    title: "Nama Project",
    description: "Lorem ipsum dolor sit amet",
    date: "12-12-2026",
    accent: "bg-[linear-gradient(135deg,#d7c1b0_0%,#f4ebdf_40%,#b49377_100%)]",
  },
  {
    title: "Nama Project",
    description: "Lorem ipsum dolor sit amet",
    date: "12-12-2026",
    accent: "bg-[linear-gradient(135deg,#ceb7a8_0%,#f0e8dd_36%,#9f7d66_100%)]",
  },
  {
    title: "Nama Project",
    description: "Lorem ipsum dolor sit amet",
    date: "12-12-2026",
    accent: "bg-[linear-gradient(135deg,#d8c2af_0%,#f4ebdf_42%,#ac896e_100%)]",
  },
  {
    title: "Nama Project",
    description: "Lorem ipsum dolor sit amet",
    date: "12-12-2026",
    accent: "bg-[linear-gradient(135deg,#d4bfac_0%,#f3eadf_38%,#a8866d_100%)]",
  },
];

const footerLinks = [
  { label: "Discord", href: "#", src: "/Footer/Footer-Discord.png" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/109692058/",
    src: "/Footer/Footer-Linkedin.png",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/imagilab.id/",
    src: "/Footer/Footer-Instagram.png",
  },
];

export function ImagilabHomePage() {
  const currentYear = new Date().getFullYear();

  return (
    <main className="relative overflow-x-clip bg-[#040404] text-white">
      <div aria-hidden className="fixed inset-0 -z-20 bg-[#040404]" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[#040404]"
      />

      <header className="fixed top-7 left-1/2 z-30 w-fit max-w-[calc(100%-2rem)] -translate-x-1/2">
        <nav
          aria-label="Primary"
          className="content-appear rounded-[1.15rem] border border-[#14bff2]/75 bg-[#050505] px-6 py-3 shadow-[0_0_0_1px_rgba(20,191,242,0.04)] sm:px-9"
        >
          <ul className="flex items-center gap-5 text-sm font-medium sm:gap-11 sm:text-[1.05rem]">
            {navigationItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  aria-current={item.active ? "page" : undefined}
                  className={[
                    "transition-colors duration-300",
                    item.active
                      ? "text-[#14bff2]"
                      : "text-white hover:text-[#14bff2]",
                  ].join(" ")}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <div className="relative bg-[#040404]">
        <section
          id="home"
          className="relative flex min-h-[46rem] w-full flex-col overflow-visible pt-28 pb-2 lg:min-h-[50rem] lg:pb-0"
        >
          <div className="relative flex min-h-[38rem] flex-1 items-center pb-8 lg:min-h-[41rem] lg:pb-8">
            <Image
              src="/imagilab/hero-logo.png"
              alt=""
              aria-hidden
              width={1400}
              height={1400}
              priority
              sizes="100vw"
              className="hero-art-appear pointer-events-none absolute top-[8.5rem] right-[-36%] z-0 w-[108vw] max-w-none opacity-[0.34] blur-[2px] lg:hidden"
            />

            <Image
              src="/imagilab/hero-logo.png"
              alt=""
              aria-hidden
              width={1400}
              height={1400}
              priority
              sizes="52vw"
              className="hero-art-appear pointer-events-none absolute top-[1rem] right-[2.5%] z-0 hidden w-[clamp(33rem,42vw,47rem)] max-w-none opacity-[0.82] blur-[2.6px] drop-shadow-[0_0_18px_rgba(24,194,243,0.25)] lg:block"
            />

            <Image
              src="/imagilab/Hero-Star2.png"
              alt=""
              aria-hidden
              width={700}
              height={700}
              sizes="(max-width: 639px) 42vw, 24vw"
              className="hero-art-appear pointer-events-none absolute bottom-[-2.5rem] left-[-22%] z-0 w-[48vw] max-w-[19rem] opacity-[0.96] drop-shadow-[0_0_40px_rgba(20,191,242,0.5)] sm:left-[-12%] sm:w-[24vw] lg:bottom-[-3.25rem] lg:left-[-9%]"
            />

            <Image
              src="/imagilab/Hero-Star.png"
              alt=""
              aria-hidden
              width={700}
              height={700}
              sizes="(max-width: 639px) 36vw, 18vw"
              className="hero-art-appear pointer-events-none absolute right-[-16%] bottom-[-2rem] z-0 w-[39vw] max-w-[15rem] opacity-[0.96] drop-shadow-[0_0_40px_rgba(20,191,242,0.5)] sm:right-[-8%] sm:w-[18vw] lg:right-[-6%] lg:bottom-[-5rem]"
            />

            <div
              id="about"
              className="relative z-10 max-w-[38rem] scroll-mt-36 pt-10 pr-5 pl-[clamp(1.5rem,7vw,6.5rem)] sm:pt-12 sm:pr-8 lg:pt-0"
            >
              <h1
                className="content-appear content-appear--delay-1 text-[clamp(4rem,7vw,5.6rem)] leading-[0.92] tracking-[-0.075em] text-[#18c2f3]"
                style={{ fontFamily: "var(--font-imagilab)", fontWeight: 500 }}
              >
                Imagi.lab
              </h1>

              <p className="content-appear content-appear--delay-2 mt-7 max-w-[37rem] text-[clamp(1.15rem,1.65vw,1.6rem)] leading-[1.6] text-white/92">
                Tim digital kreatif yang menghadirkan solusi digital, mulai dari
                desain dan video hingga pengembangan perangkat lunak
              </p>

              <div className="content-appear content-appear--delay-3 mt-7">
                <a
                  href="https://forms.gle/VhuVBqoZxmCNVFdS6"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-w-[12.8rem] items-center justify-center rounded-[0.9rem] bg-[#22bced] px-8 py-3 text-[1rem] font-bold text-black shadow-[0_10px_20px_rgba(24,194,243,0.16)] transition-colors duration-300 hover:bg-[#39c8f3]"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="relative scroll-mt-28 pt-0 pb-28">
          <div className="w-full px-5 sm:px-8 lg:px-10">
            <h2 className="content-appear content-appear--delay-4 text-center font-[family-name:var(--font-display)] text-[clamp(3.2rem,6vw,5.2rem)] font-bold tracking-[-0.07em] text-white">
              Our Service
            </h2>

            <div className="mx-auto mt-12 grid max-w-[1120px] grid-cols-1 gap-7 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4 lg:gap-8">
              {serviceItems.map(({ label, Icon }, index) => (
                <article
                  key={label}
                  className={`content-appear flex h-[12.6rem] items-center justify-center rounded-[2px] bg-[#20bced] px-4 text-center shadow-[0_14px_34px_rgba(0,0,0,0.18)] ${
                    index === 0
                      ? "content-appear--delay-1"
                      : index === 1
                        ? "content-appear--delay-2"
                        : index === 2
                          ? "content-appear--delay-3"
                          : "content-appear--delay-4"
                  }`}
                >
                  <div className="flex flex-col items-center gap-7 text-black">
                    <Icon className="h-14 w-14 stroke-[2.3]" />
                    <h3 className="text-[clamp(1.5rem,2vw,2rem)] font-semibold tracking-[-0.05em]">
                      {label}
                    </h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="relative scroll-mt-28 overflow-hidden pt-20 pb-24 text-black lg:pt-[5.25rem]"
        >
          <Image
            src="/Project/Project-Background.png"
            alt=""
            aria-hidden
            fill
            sizes="100vw"
            className="pointer-events-none absolute inset-0 z-0 object-cover object-top"
          />

          <blockquote className="content-appear content-appear--delay-1 relative z-10 mx-auto max-w-[72rem] px-5 text-center text-[clamp(1.65rem,3vw,3rem)] font-bold tracking-[-0.06em] text-black sm:px-8 lg:mt-2 lg:px-10">
            &quot;we create solution for your imagination&quot;
          </blockquote>

          <div className="content-appear content-appear--delay-2 relative z-10 mt-[4.5rem] flex justify-center px-5 sm:px-8 lg:mt-[5rem] lg:px-10">
            <div className="inline-flex min-w-[15rem] items-center justify-center bg-black px-9 py-4">
              <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.06em] text-[#20bced]">
                Projects
              </h2>
            </div>
          </div>

          <div className="relative z-10 mx-auto mt-[4.75rem] max-w-[1320px] lg:mt-[5.25rem]">
            <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 lg:hidden">
              {projectItems.map((project, index) => (
                <article
                  key={`${project.title}-mobile-${index}`}
                  className={`content-appear w-[19rem] shrink-0 snap-center overflow-hidden rounded-[10px] bg-black shadow-[0_18px_36px_rgba(0,0,0,0.22)] ${
                    index === 0
                      ? "content-appear--delay-1"
                      : index === 1
                        ? "content-appear--delay-2"
                        : index === 2
                          ? "content-appear--delay-3"
                          : "content-appear--delay-4"
                  }`}
                >
                  <div
                    className={`relative h-44 overflow-hidden ${project.accent}`}
                  >
                    <div className="absolute inset-x-[13%] top-5 h-14 rounded-t-full border-[10px] border-b-0 border-[#6cc5ff] opacity-95" />
                    <div className="absolute inset-x-[9%] bottom-0 h-24 bg-[radial-gradient(circle_at_10%_30%,rgba(37,37,37,0.95)_0,rgba(37,37,37,0.95)_18px,transparent_19px),radial-gradient(circle_at_24%_38%,rgba(62,46,39,0.88)_0,rgba(62,46,39,0.88)_18px,transparent_19px),radial-gradient(circle_at_40%_29%,rgba(33,33,33,0.95)_0,rgba(33,33,33,0.95)_19px,transparent_20px),radial-gradient(circle_at_57%_34%,rgba(64,49,42,0.9)_0,rgba(64,49,42,0.9)_20px,transparent_21px),radial-gradient(circle_at_74%_30%,rgba(39,39,39,0.95)_0,rgba(39,39,39,0.95)_18px,transparent_19px),radial-gradient(circle_at_88%_36%,rgba(57,42,35,0.9)_0,rgba(57,42,35,0.9)_18px,transparent_19px)] opacity-95" />
                    <div className="absolute inset-x-0 bottom-0 h-14 bg-[linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.24)_100%)]" />
                  </div>

                  <div className="space-y-2 px-4 pt-3 pb-4">
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="max-w-[10rem] text-[1.5rem] font-semibold tracking-[-0.06em] text-[#20bced]">
                          {project.title}
                        </h3>
                      <span className="text-[0.72rem] font-medium text-white">
                        {project.date}
                      </span>
                    </div>
                    <p className="text-[0.98rem] text-white">
                      {project.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="hidden overflow-visible pb-8 lg:block">
              <div className="relative left-1/2 flex w-[calc(100vw+19rem)] -translate-x-1/2 items-start justify-between">
                {projectItems.map((project, index) => (
                  <article
                    key={`${project.title}-${index}`}
                    className={`content-appear overflow-hidden rounded-[10px] bg-black shadow-[0_18px_36px_rgba(0,0,0,0.22)] ${
                      index === 0 || index === 4
                        ? "mt-3 w-[18rem]"
                      : index === 2
                          ? "w-[19.75rem]"
                          : "mt-2 w-[18rem]"
                    } ${
                      index === 0
                        ? "content-appear--delay-1"
                        : index === 1
                          ? "content-appear--delay-2"
                          : index === 2
                            ? "content-appear--delay-3"
                            : index === 3
                              ? "content-appear--delay-4"
                              : "content-appear--delay-4"
                    }`}
                    >
                      <div
                        className={`relative overflow-hidden ${project.accent} ${
                        index === 2 ? "h-[12.8rem]" : "h-[11.35rem]"
                      }`}
                    >
                      <div className="absolute inset-x-[13%] top-5 h-14 rounded-t-full border-[10px] border-b-0 border-[#6cc5ff] opacity-95" />
                      <div className="absolute inset-x-[9%] bottom-0 h-24 bg-[radial-gradient(circle_at_10%_30%,rgba(37,37,37,0.95)_0,rgba(37,37,37,0.95)_18px,transparent_19px),radial-gradient(circle_at_24%_38%,rgba(62,46,39,0.88)_0,rgba(62,46,39,0.88)_18px,transparent_19px),radial-gradient(circle_at_40%_29%,rgba(33,33,33,0.95)_0,rgba(33,33,33,0.95)_19px,transparent_20px),radial-gradient(circle_at_57%_34%,rgba(64,49,42,0.9)_0,rgba(64,49,42,0.9)_20px,transparent_21px),radial-gradient(circle_at_74%_30%,rgba(39,39,39,0.95)_0,rgba(39,39,39,0.95)_18px,transparent_19px),radial-gradient(circle_at_88%_36%,rgba(57,42,35,0.9)_0,rgba(57,42,35,0.9)_18px,transparent_19px)] opacity-95" />
                      <div className="absolute inset-x-0 bottom-0 h-14 bg-[linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.24)_100%)]" />
                    </div>

                    <div
                      className={`space-y-2 px-4 pt-3 ${
                        index === 2 ? "pb-5" : "pb-4"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="max-w-[9rem] text-[1.5rem] font-semibold tracking-[-0.06em] text-[#20bced]">
                          {project.title}
                        </h3>
                        <span className="text-[0.68rem] font-medium text-white">
                          {project.date}
                        </span>
                      </div>
                      <p className="text-[0.98rem] text-white">
                        {project.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-8 flex items-center justify-center gap-2.5">
              <span className="h-3.5 w-3.5 rounded-full bg-black" />
              <span className="h-3.5 w-3.5 rounded-full bg-black" />
              <span className="h-3.5 w-3.5 rounded-full bg-[#0b6f8c]" />
              <span className="h-3.5 w-3.5 rounded-full bg-black" />
              <span className="h-3.5 w-3.5 rounded-full bg-black" />
            </div>
          </div>
        </section>
      </div>

      <footer className="relative bg-[#040404] pb-0">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/12" />

        <div className="pointer-events-none absolute top-0 left-1/2 z-0 hidden -translate-x-1/2 -translate-y-[34%] lg:block">
          <div className="relative">
            <Image
              src="/Footer/Footer-iBot.png"
              alt=""
              aria-hidden
              width={460}
              height={380}
              className="w-[22rem]"
            />
            <span className="absolute right-[-6.25rem] bottom-[4.5rem] text-[3rem] font-semibold tracking-[-0.06em] text-white">
              iBot
            </span>
          </div>
        </div>

        <div className="relative z-10 flex flex-col gap-10 px-6 pt-8 sm:px-8 lg:flex-row lg:items-start lg:justify-between lg:px-14">
          <div className="pt-4">
            <div className="flex items-center gap-3">
              <Image
                src="/Footer/Footer-Logo.png"
                alt="Imagilab logo"
                width={48}
                height={48}
                className="h-10 w-10 object-contain"
              />
              <span
                className="text-[2rem] leading-none text-white"
                style={{
                  fontFamily: "var(--font-imagilab)",
                  fontWeight: 500,
                }}
              >
                Imagi.lab
              </span>
            </div>
            <p className="mt-12 text-sm text-white/86">
              © {currentYear} Imagi.lab All rights reserved.
            </p>
          </div>

          <div className="flex justify-center lg:hidden">
            <div className="relative text-center">
              <Image
                src="/Footer/Footer-iBot.png"
                alt=""
                aria-hidden
                width={320}
                height={280}
                className="mx-auto w-[14rem]"
              />
              <span className="mt-2 block text-[2rem] font-semibold tracking-[-0.06em] text-white">
                iBot
              </span>
            </div>
          </div>

          <div className="pt-4 text-left lg:ml-auto lg:pr-2 lg:text-right">
            <p className="text-[1.15rem] text-white">Connect With Us</p>
            <div className="mt-4 flex items-center gap-5 lg:justify-end">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <Image
                    src={link.src}
                    alt=""
                    aria-hidden
                    width={40}
                    height={40}
                    className="h-9 w-9 object-contain brightness-0 invert"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

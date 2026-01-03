import Image from "next/image";
import Particles from "@/components/Particles";
import ScreenDoor from "@/components/ScreenDoor";

export default function Home() {
  const services = [
    "marketing",
    "design",
    "research",
    "strategy",
    "writing",
    "video",
    "music",
    "products",
    "apps",
    "analytics",
    "lead generation",
    "AI integration",
    "consulting",
  ];

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Background layers */}
      <div className="gradient-bg" />
      <div className="grid-overlay" />
      <Particles />
      <div className="noise" />
      <div className="scan-lines" />

      <main className="flex-1 flex flex-col items-center justify-center px-6 relative z-10">
        {/* Interactive Screen Door */}
        <div className="mb-8 animate-fade-in">
          <ScreenDoor />
        </div>

        <div className="text-center max-w-2xl">
          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight animate-fade-in glitch cursor-default">
            <span className="text-accent">SCREEN</span>
            <span className="text-foreground">DOOR</span>
            <span className="block text-lg sm:text-xl md:text-2xl font-light tracking-[0.3em] text-muted mt-2">
              STUDIO
            </span>
          </h1>

          {/* Tagline */}
          <p className="font-pixel text-3xl sm:text-4xl md:text-5xl text-accent tagline-glow animate-fade-in-delay-1 mt-8">
            make things
          </p>

          {/* Services */}
          <div className="mt-12 text-muted text-sm sm:text-base leading-relaxed animate-fade-in-delay-2 text-center">
            <p>
              {services.slice(0, 7).map((service, index) => (
                <span key={service}>
                  {service}
                  {index < 6 && <span className="mx-2 opacity-30">·</span>}
                </span>
              ))}
            </p>
            <p className="mt-1">
              {services.slice(7).map((service, index) => (
                <span key={service}>
                  {service}
                  {index < services.length - 8 && <span className="mx-2 opacity-30">·</span>}
                </span>
              ))}
            </p>
          </div>

          {/* Contact */}
          <div className="mt-16 animate-fade-in-delay-3">
            <a
              href="mailto:jake@screendoorstudio.com"
              className="email-link inline-block text-foreground/70 text-sm tracking-widest uppercase hover:text-accent transition-all duration-300"
            >
              get in touch
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 animate-fade-in-delay-3 relative z-10">
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-4">
          <Image
            src="/logo.png"
            alt="Screendoor Studio"
            width={180}
            height={60}
            className="opacity-50 hover:opacity-100 transition-opacity duration-500"
          />
          <div className="text-center text-muted text-xs tracking-wide">
            <p>Birmingham, Alabama</p>
            <p className="mt-1">&copy; 2026 Screendoor Studio Inc.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

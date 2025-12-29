import Image from "next/image";

export default function Home() {
  const services = [
    "words",
    "music",
    "video",
    "design",
    "products",
    "marketing",
    "business",
    "non-profits",
    "consulting",
    "AI",
    "research",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex flex-col items-center justify-center px-6">
        <div className="text-center max-w-2xl">
          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight animate-fade-in">
            <span className="text-accent">SCREEN</span>
            <span className="text-foreground">DOOR</span>
            <span className="block text-lg sm:text-xl md:text-2xl font-light tracking-[0.3em] text-muted mt-2">
              STUDIO
            </span>
          </h1>

          {/* Services */}
          <p className="mt-12 text-muted text-sm sm:text-base leading-relaxed animate-fade-in-delay-1">
            {services.map((service, index) => (
              <span key={service}>
                {service}
                {index < services.length - 1 && (
                  <span className="mx-2 opacity-30">·</span>
                )}
              </span>
            ))}
          </p>

          {/* Contact */}
          <div className="mt-16 animate-fade-in-delay-2">
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
      <footer className="py-8 px-6 animate-fade-in-delay-2">
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-4">
          <Image
            src="/logo.jpg"
            alt="Screendoor Studio"
            width={180}
            height={60}
            className="opacity-70 hover:opacity-100 transition-opacity duration-300"
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

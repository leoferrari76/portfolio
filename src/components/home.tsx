import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AboutSection from "./AboutSection";
import ProjectShowcase from "./ProjectShowcase";
import ExperienceSection from "./ExperienceSection";
import { useAuth } from "../context/AuthContext";
import { useLanguage } from "../context/LanguageContext";
import { supabase } from "../lib/supabaseClient";

const LinkedInIcon = ({ size = 16 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = ({ size = 16 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const navLinks = (t: (k: string) => string) => [
  { href: "#about", label: t("nav.about") },
  { href: "#experience", label: t("nav.experience") },
  { href: "#projects", label: t("nav.projects") },
];

const Home = () => {
  const { user } = useAuth();
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleLanguage = () => setLanguage(language === "pt" ? "en" : "pt");

  const links = navLinks(t);

  return (
    <div className="min-h-screen bg-background">
      {/* ─── HEADER ─── */}
      <header className="fixed top-0 z-50 w-full border-b border-border/50 bg-background/85 backdrop-blur-md">
        <div className="container flex h-14 items-center justify-between">
          <a href="#" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
            <img src="/logo_lf.png" alt="LF" className="h-7 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300" />
          </a>

          <div className="flex items-center gap-5">
            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-7">
              {links.map((l) => (
                <a key={l.href} href={l.href}
                  className="font-ui text-[0.7rem] tracking-[0.14em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-200">
                  {l.label}
                </a>
              ))}
            </nav>

            <div className="w-px h-4 bg-border hidden md:block" />

            <button onClick={toggleLanguage}
              className="font-ui text-[0.68rem] tracking-[0.12em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-200">
              {language === "pt" ? "EN" : "PT"}
            </button>

            {user && (
              <button
                onClick={async () => { await supabase.auth.signOut(); window.location.reload(); }}
                className="font-ui text-[0.68rem] tracking-[0.12em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-200 hidden md:block">
                {t("nav.logout")}
              </button>
            )}

            {/* Mobile hamburger */}
            <button
              className="md:hidden flex flex-col gap-[5px] p-1"
              onClick={() => setMobileMenuOpen((o) => !o)}
              aria-label="Menu"
            >
              <motion.span animate={{ rotate: mobileMenuOpen ? 45 : 0, y: mobileMenuOpen ? 7 : 0 }}
                className="block w-5 h-px bg-foreground origin-center transition-colors" />
              <motion.span animate={{ opacity: mobileMenuOpen ? 0 : 1 }}
                className="block w-5 h-px bg-foreground" />
              <motion.span animate={{ rotate: mobileMenuOpen ? -45 : 0, y: mobileMenuOpen ? -7 : 0 }}
                className="block w-5 h-px bg-foreground origin-center" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="md:hidden overflow-hidden border-t border-border/50 bg-background/95 backdrop-blur-md"
            >
              <nav className="container py-5 flex flex-col gap-4">
                {links.map((l) => (
                  <a key={l.href} href={l.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-ui text-sm tracking-[0.12em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-200 py-1">
                    {l.label}
                  </a>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        {/* ─── HERO ─── */}
        <section className="relative min-h-screen flex flex-col overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[55%] h-[70%] bg-gradient-to-bl from-amber-50/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-stone-100/40 to-transparent" />
          </div>

          <div className="container relative flex-1 flex flex-col justify-end pb-16 pt-32">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-8 items-end">

              {/* Left: Typography */}
              <div className="order-2 lg:order-1">
                <motion.p className="section-label mb-8" variants={fadeUp} custom={0} initial="hidden" animate="show">
                  {t("home.label")}
                </motion.p>

                <motion.div className="mb-8" variants={fadeUp} custom={1} initial="hidden" animate="show">
                  <h1 className="font-display leading-[0.88] tracking-tight">
                    <span className="block text-[clamp(3.8rem,9.5vw,10rem)] font-light text-foreground">Leo</span>
                    <span className="block text-[clamp(3.8rem,9.5vw,10rem)] font-light text-foreground">
                      Ferrari<span className="text-primary">.</span>
                    </span>
                  </h1>
                </motion.div>

                <motion.div className="flex items-center gap-4 mb-8" variants={fadeUp} custom={2} initial="hidden" animate="show">
                  <div className="h-px w-10 bg-primary/70" />
                  <span className="section-label">{t("home.subtitle")}</span>
                </motion.div>

                <motion.p
                  className="text-base md:text-lg font-light text-foreground/85 max-w-xl leading-[1.7] mb-10"
                  variants={fadeUp} custom={3} initial="hidden" animate="show"
                >
                  {t("home.headline")}
                </motion.p>

                <motion.div className="flex items-center gap-5" variants={fadeUp} custom={4} initial="hidden" animate="show">
                  <a
                    href="https://www.linkedin.com/in/leonardomoraesferrari/"
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 text-sm font-medium text-foreground border border-foreground/20 px-5 py-2.5 hover:border-primary hover:text-primary transition-all duration-300 group"
                  >
                    <LinkedInIcon />
                    LinkedIn
                    <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </a>
                  <a href="#projects"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center gap-1.5">
                    {t("home.projects")}
                    <span className="text-primary">↓</span>
                  </a>
                </motion.div>
              </div>

              {/* Right: Photo */}
              <motion.div
                className="order-1 lg:order-2 flex justify-center lg:justify-end"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="relative">
                  <div className="absolute -top-3 -right-3 w-14 h-14 border-t-2 border-r-2 border-primary/60 pointer-events-none" />
                  <div className="absolute -bottom-3 -left-3 w-14 h-14 border-b-2 border-l-2 border-primary/30 pointer-events-none" />
                  <div className="w-[260px] md:w-[320px] lg:w-[340px] overflow-hidden">
                    <img src="/leoferrari.png" alt="Leonardo Ferrari" className="w-full aspect-[3/4] object-cover" />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Scroll hint */}
            <motion.a
              href="#about"
              className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.6 }}
            >
              <span className="section-label" style={{ fontSize: "0.58rem" }}>{t("home.scrollHint")}</span>
              <div className="w-px h-10 bg-gradient-to-b from-primary/50 to-transparent" />
            </motion.a>
          </div>
        </section>

        {/* ─── ABOUT ─── */}
        <section id="about" className="border-t border-border/50 py-24 md:py-32">
          <motion.div className="container" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7 }}>
            <AboutSection />
          </motion.div>
        </section>

        {/* ─── EXPERIENCE ─── */}
        <section id="experience" className="border-t border-border/50 py-24 md:py-32">
          <motion.div className="container" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7 }}>
            <ExperienceSection />
          </motion.div>
        </section>

        {/* ─── PROJECTS ─── */}
        <section id="projects" className="border-t border-border/50 py-24 md:py-32">
          <motion.div className="container" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7 }}>
            <h2 className="section-heading font-display text-2xl font-light tracking-tight mb-14">
              {t("home.projects")}
            </h2>
            <ProjectShowcase />
          </motion.div>
        </section>

        {/* ─── CONTACT CTA ─── */}
        <section className="border-t border-border/50 py-24 md:py-32">
          <motion.div className="container" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7 }}>
            <div className="max-w-2xl">
              <p className="section-label mb-6">
                {language === "pt" ? "Vamos trabalhar juntos" : "Let's work together"}
              </p>
              <h2 className="font-display text-[clamp(2rem,5vw,4rem)] font-light leading-[1.1] tracking-tight mb-8">
                {language === "pt"
                  ? <>Tem um projeto que precisa<br />de design que <span className="text-primary italic">funciona</span>?</>
                  : <>Got a project that needs<br />design that <span className="text-primary italic">works</span>?</>
                }
              </h2>
              <p className="text-base font-light text-muted-foreground leading-relaxed mb-10 max-w-lg">
                {language === "pt"
                  ? "Me conta o que você precisa. Respondo rápido."
                  : "Tell me what you need. I'll get back to you quickly."}
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="https://www.linkedin.com/in/leonardomoraesferrari/"
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-sm font-medium text-background bg-foreground px-6 py-3 hover:bg-primary hover:text-foreground transition-all duration-300 group"
                >
                  <LinkedInIcon />
                  LinkedIn
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </a>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-border/50">
        <div className="container py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <img src="/logo_lf.png" alt="LF" className="h-5 w-auto opacity-40" />
            <span className="text-xs text-muted-foreground">{t("footer.rights")}</span>
          </div>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/leonardomoraesferrari/" target="_blank" rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
            <a href="https://www.instagram.com/__leoferrari/" target="_blank" rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200" aria-label="Instagram">
              <InstagramIcon />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;

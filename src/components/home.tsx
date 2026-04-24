import { motion } from "framer-motion";
import AboutSection from "./AboutSection";
import ProjectShowcase from "./ProjectShowcase";
import ExperienceSection from "./ExperienceSection";
import { useAuth } from "../context/AuthContext";
import { useLanguage } from "../context/LanguageContext";
import { supabase } from "../lib/supabaseClient";

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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

const Home = () => {
  const { user } = useAuth();
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full border-b border-border/50 bg-background/85 backdrop-blur-md">
        <div className="container flex h-14 items-center justify-between">
          <a href="#" className="flex items-center">
            <img src="/logo_lf.png" alt="LF" className="h-7 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300" />
          </a>
          <div className="flex items-center gap-5">
            <nav className="hidden md:flex items-center gap-7">
              <a href="#about" className="font-ui text-[0.7rem] tracking-[0.14em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-200">
                {t('nav.about')}
              </a>
              <a href="#experience" className="font-ui text-[0.7rem] tracking-[0.14em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-200">
                {t('nav.experience')}
              </a>
              <a href="#projects" className="font-ui text-[0.7rem] tracking-[0.14em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-200">
                {t('nav.projects')}
              </a>
            </nav>
            <div className="w-px h-4 bg-border hidden md:block" />
            <button
              onClick={toggleLanguage}
              className="font-ui text-[0.68rem] tracking-[0.12em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {language === 'pt' ? 'EN' : 'PT'}
            </button>
            {user && (
              <button
                onClick={async () => {
                  await supabase.auth.signOut();
                  window.location.reload();
                }}
                className="font-ui text-[0.68rem] tracking-[0.12em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {t('nav.logout')}
              </button>
            )}
          </div>
        </div>
      </header>

      <main>
        {/* ─── HERO ─── */}
        <section className="relative min-h-screen flex flex-col overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[55%] h-[70%] bg-gradient-to-bl from-amber-50/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-stone-100/40 to-transparent" />
          </div>

          <div className="container relative flex-1 flex flex-col justify-end pb-16 pt-32">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-8 items-end">

              {/* Left: Typography */}
              <div className="order-2 lg:order-1">

                {/* Label */}
                <motion.p
                  className="section-label mb-8"
                  variants={fadeUp}
                  custom={0}
                  initial="hidden"
                  animate="show"
                >
                  {t('home.label')}
                </motion.p>

                {/* Name */}
                <motion.div
                  className="mb-8"
                  variants={fadeUp}
                  custom={1}
                  initial="hidden"
                  animate="show"
                >
                  <h1 className="font-display leading-[0.88] tracking-tight">
                    <span className="block text-[clamp(3.8rem,9.5vw,10rem)] font-light text-foreground">
                      Leo
                    </span>
                    <span className="block text-[clamp(3.8rem,9.5vw,10rem)] font-light text-foreground">
                      Ferrari<span className="text-primary">.</span>
                    </span>
                  </h1>
                </motion.div>

                {/* Divider with label */}
                <motion.div
                  className="flex items-center gap-4 mb-8"
                  variants={fadeUp}
                  custom={2}
                  initial="hidden"
                  animate="show"
                >
                  <div className="h-px w-10 bg-primary/70" />
                  <span className="section-label">{t('home.subtitle')} · 15+ {language === 'pt' ? 'anos' : 'years'}</span>
                </motion.div>

                {/* Headline */}
                <motion.p
                  className="text-base md:text-lg font-light text-foreground/75 max-w-xl leading-[1.7] mb-10"
                  variants={fadeUp}
                  custom={3}
                  initial="hidden"
                  animate="show"
                >
                  {t('home.headline')}
                </motion.p>

                {/* LinkedIn CTA */}
                <motion.div
                  className="flex items-center gap-5"
                  variants={fadeUp}
                  custom={4}
                  initial="hidden"
                  animate="show"
                >
                  <a
                    href="https://www.linkedin.com/in/leonardomoraesferrari/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 text-sm font-medium text-foreground border border-foreground/20 px-5 py-2.5 hover:border-primary hover:text-primary transition-all duration-300 group"
                  >
                    <LinkedInIcon />
                    LinkedIn
                    <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </a>
                  <a
                    href="#projects"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center gap-1.5"
                  >
                    {language === 'pt' ? 'Ver projetos' : 'View work'}
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
                  {/* Amber corner accent */}
                  <div className="absolute -top-3 -right-3 w-14 h-14 border-t-2 border-r-2 border-primary/60 pointer-events-none" />
                  <div className="absolute -bottom-3 -left-3 w-14 h-14 border-b-2 border-l-2 border-primary/30 pointer-events-none" />

                  <div className="w-[260px] md:w-[320px] lg:w-[340px] overflow-hidden">
                    <img
                      src="/leoferrari.png"
                      alt="Leonardo Ferrari"
                      className="w-full aspect-[3/4] object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Scroll hint */}
            <motion.div
              className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.6 }}
            >
              <span className="section-label" style={{ fontSize: '0.58rem' }}>{t('home.scrollHint')}</span>
              <div className="w-px h-10 bg-gradient-to-b from-primary/50 to-transparent" />
            </motion.div>
          </div>
        </section>

        {/* ─── ABOUT ─── */}
        <section id="about" className="border-t border-border/50 py-24 md:py-32">
          <motion.div
            className="container"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <AboutSection />
          </motion.div>
        </section>

        {/* ─── EXPERIENCE ─── */}
        <section id="experience" className="border-t border-border/50 py-24 md:py-32">
          <motion.div
            className="container"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <ExperienceSection />
          </motion.div>
        </section>

        {/* ─── PROJECTS ─── */}
        <section id="projects" className="border-t border-border/50 py-24 md:py-32">
          <motion.div
            className="container"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="section-heading font-display text-2xl font-light tracking-tight mb-14">
              {t('home.projects')}
            </h2>
            <ProjectShowcase />
          </motion.div>
        </section>
      </main>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-border/50">
        <div className="container py-10 flex flex-col md:flex-row justify-between items-center gap-5">
          <div className="flex items-center gap-4">
            <img src="/logo_lf.png" alt="LF" className="h-6 w-auto opacity-50" />
            <div className="flex flex-col gap-0.5">
              <span className="text-xs text-muted-foreground">{t('footer.rights')}</span>
              <span className="text-xs text-primary/70 font-display italic">{t('footer.tagline')}</span>
            </div>
          </div>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/leonardomoraesferrari/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://www.instagram.com/__leoferrari/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;

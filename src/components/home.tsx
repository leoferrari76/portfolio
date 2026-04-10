import { motion } from "framer-motion";
import AboutSection from "./AboutSection";
import ProjectShowcase from "./ProjectShowcase";
import ExperienceSection from "./ExperienceSection";
import { useAuth } from "../context/AuthContext";
import { useLanguage } from "../context/LanguageContext";
import { supabase } from "../lib/supabaseClient";
import { Button } from "./ui/button";

const Home = () => {
  const { user } = useAuth();
  const { language, setLanguage, t } = useLanguage();
  
  const toggleLanguage = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt');
  };
  
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70">
        <div className="container flex h-14 items-center justify-between">
          <a href="#" className="flex items-center">
            <img src="/logo_lf.png" alt="LF" className="h-7 w-auto opacity-80 hover:opacity-100 transition-opacity" />
          </a>
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-6">
              <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {t('nav.about')}
              </a>
              <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {t('nav.projects')}
              </a>
            </nav>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="text-xs text-muted-foreground hover:text-foreground px-2 h-7"
            >
              {language === 'pt' ? 'EN' : 'PT'}
            </Button>
            {user && (
              <button
                onClick={async () => {
                  await supabase.auth.signOut();
                  window.location.reload();
                }}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {t('nav.logout')}
              </button>
            )}
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <motion.section
          className="container pt-20 pb-24 md:pt-28 md:pb-32"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-5">
            {t('home.subtitle')}
          </p>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-[0.95] mb-8 text-foreground">
            {t('home.title')}
          </h1>
          <p className="text-sm text-muted-foreground">
            Campinas, SP &nbsp;·&nbsp; levva &nbsp;·&nbsp; 10+ anos de experiência
          </p>
        </motion.section>

        {/* About Section */}
        <section id="about" className="border-t border-border/60 py-20 md:py-28">
          <motion.div
            className="container"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <AboutSection />
          </motion.div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="border-t border-border/60 py-20 md:py-28">
          <motion.div
            className="container"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ExperienceSection />
          </motion.div>
        </section>

        {/* Projects */}
        <section id="projects" className="border-t border-border/60 py-20 md:py-28">
          <motion.div
            className="container"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-heading text-2xl font-semibold tracking-tight mb-12">
              {t('home.projects')}
            </h2>
            <ProjectShowcase />
          </motion.div>
        </section>
      </main>

      <footer className="border-t border-border/60">
        <div className="container py-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <img src="/logo_lf.png" alt="LF" className="h-6 w-auto opacity-60" />
            <span className="text-xs text-muted-foreground">{t('footer.rights')}</span>
          </div>
          <div className="flex gap-5">
            <a
              href="https://www.linkedin.com/in/leonardomoraesferrari/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/__leoferrari/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;

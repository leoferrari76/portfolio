import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const skills = [
  "Figma",
  "FigJam",
  "Miro",
  "Notion",
  "Adobe CC",
  "Metodologias Ágeis",
  "UX Research",
  "Design Systems",
  "Prototipação",
  "IA aplicada ao Design",
];

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 items-start">

        {/* Left: heading + label */}
        <div>
          <h2 className="section-heading font-display text-2xl font-light tracking-tight mb-6">
            {t("about.title")}
          </h2>
          <p className="section-label">
            Senior Product Designer<br />Campinas, SP
          </p>
        </div>

        {/* Right: bio + skills */}
        <div className="space-y-10">
          <motion.div
            className="space-y-5"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-base font-light text-foreground/80 leading-[1.8]">{t("about.bio1")}</p>
            <p className="text-base font-light text-muted-foreground leading-[1.8]">{t("about.bio2")}</p>
            <p className="text-base font-light text-muted-foreground leading-[1.8]">{t("about.bio3")}</p>
            <p className="text-base font-light text-muted-foreground leading-[1.8]">{t("about.bio4")}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="section-label mb-4">{t("about.tools")}</p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 border border-border text-xs font-light text-foreground/70 hover:border-primary/50 hover:text-foreground transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="pt-2 flex items-center gap-3 text-sm text-muted-foreground"
          >
            <a
              href="https://www.linkedin.com/in/leonardomoraesferrari/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-foreground transition-colors duration-200 group"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              <span className="font-ui text-xs tracking-wide">LinkedIn</span>
              <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity text-xs">↗</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

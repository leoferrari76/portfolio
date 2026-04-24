import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

const logos: Record<string, string> = {
  levva: "/levva.png",
  "CI&T": "/cit.png",
  "AB InBev": "/abinbev.png",
  "LF Design": "/lf.png",
};


const ExperienceSection: React.FC = () => {
  const { t, language } = useLanguage();
  const entries = translations[language].experience.entries;

  return (
    <section id="experience" className="space-y-20">

      {/* ─ Timeline ─ */}
      <div>
        <h2 className="section-heading font-display text-2xl font-light tracking-tight mb-14">
          {t("experience.title")}
        </h2>

        <div className="relative">
          <div className="absolute left-[7.5rem] md:left-[10.5rem] top-3 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent hidden sm:block" />

          <div className="space-y-0">
            {entries.map((entry: { company: string; role: string; period: string; description: string }, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group relative flex flex-col sm:flex-row gap-4 sm:gap-0 py-8 border-b border-border/40 last:border-0"
              >
                <div className="flex-shrink-0 sm:w-[7.5rem] md:w-[10.5rem]">
                  <span className="font-ui text-xs text-muted-foreground/70 tracking-wide tabular-nums">
                    {entry.period}
                  </span>
                </div>

                <div className="absolute left-[7.5rem] md:left-[10.5rem] top-[2.65rem] -translate-x-[0.3rem] hidden sm:block">
                  <div className="w-[7px] h-[7px] rounded-full bg-primary ring-2 ring-background group-hover:scale-125 transition-transform duration-200" />
                </div>

                <div className="sm:pl-10 md:pl-12 flex-1">
                  <div className="mb-2">
                    {logos[entry.company] ? (
                      <img
                        src={logos[entry.company]}
                        alt={entry.company}
                        className="h-6 w-auto opacity-60 group-hover:opacity-90 transition-opacity duration-200"
                      />
                    ) : (
                      <span className="font-ui text-sm font-semibold tracking-wide">{entry.company}</span>
                    )}
                  </div>
                  <p className="font-ui text-xs tracking-[0.1em] uppercase text-primary/80 mb-2">
                    {entry.role}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">
                    {entry.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default ExperienceSection;

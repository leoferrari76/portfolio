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

const stats = [
  { value: "15+", labelPt: "anos de experiência", labelEn: "years of experience" },
  { value: "4",   labelPt: "setores diferentes", labelEn: "different industries" },
  { value: "50+", labelPt: "projetos entregues", labelEn: "projects delivered" },
];

const AboutSection = () => {
  const { t, language } = useLanguage();

  return (
    <section className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 items-start">

        {/* Left: heading + stats */}
        <div className="space-y-10">
          <div>
            <h2 className="section-heading font-display text-2xl font-light tracking-tight mb-6">
              {t("about.title")}
            </h2>
          </div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {stats.map((s, i) => (
              <div key={i} className="border-l-2 border-border pl-4 group hover:border-primary transition-colors duration-300">
                <div className="font-display text-3xl font-light text-foreground leading-none mb-1">
                  {s.value}
                </div>
                <div className="section-label">
                  {language === "pt" ? s.labelPt : s.labelEn}
                </div>
              </div>
            ))}
          </motion.div>
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
            <p className="text-base font-light text-foreground/85 leading-[1.8]">{t("about.bio1")}</p>
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
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

import { useLanguage } from "../context/LanguageContext";

interface AboutSectionProps {
  name?: string;
  skills?: string[];
  speakerImage?: string;
  location?: string;
}

const AboutSection = ({
  name = "Leonardo Ferrari",
  skills = [
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
  ],
  speakerImage = "/leoferrari.png",
  location = "Campinas – SP",
}: AboutSectionProps) => {
  const { t } = useLanguage();
  return (
    <section className="w-full">
      <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
        {/* Photo */}
        <div className="w-full md:w-2/5 shrink-0">
          <div className="aspect-[3/4] overflow-hidden">
            <img
              src={speakerImage}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Bio Content */}
        <div className="w-full md:w-3/5 space-y-10 pt-0 md:pt-2">
          <div className="space-y-6">
            <h2 className="section-heading text-2xl font-semibold tracking-tight">
              {t('about.title')}
            </h2>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">{t('about.bio1')}</p>
              <p className="text-muted-foreground leading-relaxed">{t('about.bio2')}</p>
              <p className="text-muted-foreground leading-relaxed">{t('about.bio3')}</p>
              <p className="text-muted-foreground leading-relaxed">{t('about.bio4')}</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="section-heading text-sm font-semibold uppercase tracking-[0.12em] text-muted-foreground">
              {t('about.tools')}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 border border-border text-sm text-foreground/80"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-2 flex items-center gap-3 text-sm text-muted-foreground">
            <a
              href="https://www.linkedin.com/in/leonardomoraesferrari/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              LinkedIn
            </a>
            <span>·</span>
            <span>{location}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

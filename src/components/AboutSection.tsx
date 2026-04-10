import { useLanguage } from "../context/LanguageContext";

interface AboutSectionProps {
  name?: string;
  skills?: string[];
  speakerImage?: string;
  contactEmail?: string;
  phone?: string;
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
  contactEmail = "leoferrari@gmail.com",
  phone = "(19) 99128-6811",
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

          <div className="pt-2 space-y-1 text-sm text-muted-foreground">
            <p>{contactEmail}</p>
            <p>{phone}</p>
            <p>{location}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

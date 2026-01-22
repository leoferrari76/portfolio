import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useLanguage } from "../context/LanguageContext";

interface AboutSectionProps {
  name?: string;
  title?: string;
  bio?: string;
  skills?: string[];
  speakerImage?: string;
  contactEmail?: string;
  phone?: string;
  location?: string;
}

const AboutSection = ({
  name = "Leonardo Ferrari",
  title = "UX Designer Sênior | Estratégia, operação e execução ponta-a-ponta",
  bio,
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
    <section className="w-full md:py-24 bg-background py-0">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Speaker Image */}
          <div className="w-full flex justify-center md:justify-end md:w-1/2">
            <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden container">
              <img
                src={speakerImage}
                alt={`${name} speaking at an event`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Bio Content */}
          <div className="w-full md:w-1/2 space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">{t('about.title')}</h2>
              <p className="text-muted-foreground leading-relaxed">{t('about.bio1')}</p>
              <p className="text-muted-foreground leading-relaxed">
                {t('about.bio2')}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t('about.bio3')}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t('about.bio4')}
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">
                {t('about.tools')}
              </h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

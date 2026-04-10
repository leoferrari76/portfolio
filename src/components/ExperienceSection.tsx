import React from "react";
import { useLanguage } from "../context/LanguageContext";

const experiences = [
  {
    company: "levva",
    role: "Empresa levva",
    logo: "/levva.png",
    period: "2024 - atualmente",
  },
  {
    company: "CI&T",
    logo: "/cit.png",
    role: "Empresa CI&T",
    period: "2020-2024",
  },
  {
    company: "ABINBEV",
    logo: "/abinbev.png",
    role: "Empresa ABINBEV",
    period: "2018-2020",
  },
  {
    company: "LF",
    logo: "/lf.png",
    role: "Empresa LF Design",
    period: "2008-2018",
  },
  {/*{
    company: "levva",
    logo: "/artesanal.png",
    role: "levva/Projeto Artesanal",
    period: "2025",
  },
  {
    company: "levva",
    logo: "/ache.png",
    role: "levva/Projeto Aché",
    period: "2024",
  },
  {
    company: "levva",
    logo: "/gdm.png",
    role: "levva/Projeto GDM",
    period: "2024",
  },
  {
    company: "levva",
    logo: "/unipac.png",
    role: "levva/Projeto Unipac",
    period: "2024",
  },
  {
    company: "Ci&T",
    logo: "/vr.png",
    role: "CI&T/Projeto VR",
    period: "2023",
  },
  {
    company: "CI&T",
    logo: "/anbima.png",
    role: "CI&T/Projeto Anbima",
    period: "2023",
  },
  {
    company: "CI&T",
    logo: "/janssen.png",
    role: "CI&T/Projeto JanssenPro",
    period: "2020-2022",
  },
  {
    company: "Ci&T",
    logo: "/bitz.png",
    role: "CI&T/Projeto Bitz",
    period: "2022",
  },
  {
    company: "Ci&T",
    logo: "/next.png",
    role: "CI&T/Projeto Next",
    period: "2022",
  },*/}

];

const ExperienceSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="experience">
      <h2 className="section-heading text-2xl font-semibold tracking-tight mb-12">
        {t('experience.title')}
      </h2>
      <div className="flex flex-wrap gap-x-14 gap-y-10 items-center">
        {experiences.map((exp, idx) => (
          <div key={idx} className="flex flex-col items-start gap-1.5">
            <img
              src={exp.logo}
              alt={exp.company}
              className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity duration-200"
              title={exp.company}
            />
            <span className="text-xs text-muted-foreground tabular-nums">{exp.period}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection; 
export type Language = 'pt' | 'en';

export interface Translations {
  nav: {
    about: string;
    projects: string;
    experience: string;
    logout: string;
  };
  home: {
    title: string;
    subtitle: string;
    label: string;
    headline: string;
    subheadline: string;
    projects: string;
    scrollHint: string;
  };
  about: {
    title: string;
    bio1: string;
    bio2: string;
    bio3: string;
    bio4: string;
    tools: string;
  };
  experience: {
    title: string;
    entries: {
      company: string;
      role: string;
      period: string;
      description: string;
    }[];
  };
  projects: {
    addProject: string;
    noProjects: string;
    viewDetails: string;
    addNewProject: string;
    fillProjectData: string;
    projectTitle: string;
    projectTitlePlaceholder: string;
    mainImage: string;
    briefDescription: string;
    detailedContent: string;
    detailedContentPlaceholder: string;
    contentBlocks: string;
    addTextBlock: string;
    addTextBlockPlaceholder: string;
    addText: string;
    addImage: string;
    uploadImage: string;
    role: string;
    rolePlaceholder: string;
    duration: string;
    durationPlaceholder: string;
    cancel: string;
    saveProject: string;
    noContentBlocks: string;
    fileSelected: string;
  };
  projectDetail: {
    back: string;
    projectNotFound: string;
    backToHome: string;
    loading: string;
    editProject: string;
    saveChanges: string;
    currentCardImage: string;
  };
  footer: {
    rights: string;
    tagline: string;
  };
}

export const translations: Record<Language, Translations> = {
  pt: {
    nav: {
      about: 'Sobre',
      projects: 'Projetos',
      experience: 'Experiência',
      logout: 'Sair',
    },
    home: {
      title: 'Leo Ferrari',
      subtitle: 'Product Designer Sênior',
      label: 'Product Designer · Campinas, SP · levva',
      headline: 'Design sênior que transforma contextos complexos em produtos que funcionam — e fazem sentido para pessoas e negócios.',
      subheadline: '15+ anos em agências, multinacionais e empresas de tecnologia. Cada projeto me tornou mais preparado para o próximo desafio.',
      projects: 'Projetos',
      scrollHint: 'Rolar para explorar',
    },
    about: {
      title: 'Sobre mim',
      bio1: 'Sou designer com mais de 15 anos de experiência em UX, atuando de ponta a ponta nos projetos — da imersão com stakeholders até a entrega de soluções testadas, validadas e prontas para escalar.',
      bio2: 'Tenho facilidade em traduzir contextos complexos em produtos claros, objetivos e centrados no usuário. Já atuei em segmentos como finanças, saúde, indústria farmacêutica, agronegócio e educação, sempre com foco em clareza de processos, conexão com o negócio e entrega de valor real.',
      bio3: 'Além do desenvolvimento de produtos digitais, colaboro com times comerciais em projetos de pré-venda — construindo propostas que mostram, de forma estratégica, como o design gera impacto desde o início dos projetos.',
      bio4: 'Me destaco por facilitar decisões, organizar fluxos e formar designers com visão de produto. Investigo como IA e ferramentas no-code podem potencializar o trabalho de designers e acelerar a entrega de valor em produtos digitais.',
      tools: 'Ferramentas & Expertise',
    },
    experience: {
      title: 'Por onde andei',
      entries: [
        {
          company: 'levva',
          role: 'Product Designer Sênior',
          period: '2024 – presente',
          description: 'Design de produtos digitais e atuação estratégica em pré-venda, construindo propostas que mostram o impacto do design desde o início dos projetos.',
        },
        {
          company: 'CI&T',
          role: 'Product Designer Sênior',
          period: '2020 – 2024',
          description: 'Projetos para grandes empresas como VR Benefícios, Anbima, Janssen e Bitz. Design end-to-end com foco em escala e negócio.',
        },
        {
          company: 'AB InBev',
          role: 'UX Designer',
          period: '2018 – 2020',
          description: 'Design de ferramentas internas e plataformas digitais para a maior cervejaria do mundo.',
        },
        {
          company: 'LF Design',
          role: 'Fundador & Designer',
          period: '2008 – 2018',
          description: 'Agência própria por 10 anos — projetos gráficos, identidade visual e web para clientes como Bradesco. Construção de visão comercial e gestão de projetos.',
        },
      ],
    },
    projects: {
      addProject: 'Adicionar Projeto',
      noProjects: 'Nenhum projeto adicionado ainda.',
      viewDetails: 'Ver Detalhes',
      addNewProject: 'Adicionar Novo Projeto',
      fillProjectData: 'Preencha os dados do novo projeto.',
      projectTitle: 'Título do Projeto *',
      projectTitlePlaceholder: 'Ex: Redesign de E-commerce',
      mainImage: 'Imagem Principal do Projeto',
      briefDescription: 'Descrição Breve',
      detailedContent: 'Conteúdo Detalhado',
      detailedContentPlaceholder: 'Descreva o processo, desafios e soluções...',
      contentBlocks: 'Blocos de Conteúdo',
      addTextBlock: 'Adicionar Bloco de Texto',
      addTextBlockPlaceholder: 'Adicione um parágrafo ou etapa do processo...',
      addText: 'Adicionar Texto',
      addImage: 'Adicionar Imagem',
      uploadImage: 'Carregar Imagem',
      role: 'Sua Função',
      rolePlaceholder: 'Ex: Product Designer',
      duration: 'Duração',
      durationPlaceholder: 'Ex: 3 meses',
      cancel: 'Cancelar',
      saveProject: 'Salvar Projeto',
      noContentBlocks: 'Nenhum bloco adicionado.',
      fileSelected: 'Arquivo selecionado:',
    },
    projectDetail: {
      back: 'Voltar',
      projectNotFound: 'Projeto não encontrado',
      backToHome: 'Voltar ao Início',
      loading: 'Carregando projeto...',
      editProject: 'Editar Projeto',
      saveChanges: 'Salvar Alterações',
      currentCardImage: 'Imagem Principal do Card',
    },
    footer: {
      rights: '© 2025 Leonardo Ferrari.',
      tagline: 'Design que faz sentido.',
    },
  },
  en: {
    nav: {
      about: 'About',
      projects: 'Work',
      experience: 'Experience',
      logout: 'Logout',
    },
    home: {
      title: 'Leo Ferrari',
      subtitle: 'Senior Product Designer',
      label: 'Product Designer · Campinas, SP · levva',
      headline: 'Senior design that turns complex challenges into products that work — and make sense for people and businesses.',
      subheadline: '15+ years across agencies, multinationals, and tech companies. Every project made me better prepared for the next challenge.',
      projects: 'Work',
      scrollHint: 'Scroll to explore',
    },
    about: {
      title: 'About me',
      bio1: 'I\'m a designer with over 15 years of UX experience, working end-to-end on projects — from stakeholder immersion to delivering tested, validated, and scalable solutions.',
      bio2: 'I have a knack for translating complex contexts into clear, objective, and user-centered products. I\'ve worked in finance, healthcare, pharmaceuticals, agribusiness, and education, always focusing on process clarity, business connection, and real value delivery.',
      bio3: 'Beyond digital product development, I collaborate with commercial teams on pre-sales projects — building proposals that strategically show how design generates impact from the start.',
      bio4: 'I stand out for facilitating decisions, organizing flows, and coaching designers with a product mindset. I\'m actively exploring how AI and no-code tools can enhance designers\' work and accelerate value delivery.',
      tools: 'Tools & Expertise',
    },
    experience: {
      title: 'Where I\'ve been',
      entries: [
        {
          company: 'levva',
          role: 'Senior Product Designer',
          period: '2024 – present',
          description: 'Digital product design and strategic pre-sales work, building proposals that demonstrate design impact from day one.',
        },
        {
          company: 'CI&T',
          role: 'Senior Product Designer',
          period: '2020 – 2024',
          description: 'Projects for major companies including VR Benefícios, Anbima, Janssen, and Bitz. End-to-end design with focus on scale and business outcomes.',
        },
        {
          company: 'AB InBev',
          role: 'UX Designer',
          period: '2018 – 2020',
          description: 'Design of internal tools and digital platforms for the world\'s largest brewing company.',
        },
        {
          company: 'LF Design',
          role: 'Founder & Designer',
          period: '2008 – 2018',
          description: 'Own agency for 10 years — graphic design, visual identity, and web projects for clients including Bradesco. Built commercial vision and project management expertise.',
        },
      ],
    },
    projects: {
      addProject: 'Add Project',
      noProjects: 'No projects added yet.',
      viewDetails: 'View Details',
      addNewProject: 'Add New Project',
      fillProjectData: 'Fill in the new project data.',
      projectTitle: 'Project Title *',
      projectTitlePlaceholder: 'Ex: E-commerce Redesign',
      mainImage: 'Main Project Image',
      briefDescription: 'Brief Description',
      detailedContent: 'Detailed Content',
      detailedContentPlaceholder: 'Describe the process, challenges, and solutions...',
      contentBlocks: 'Content Blocks',
      addTextBlock: 'Add Text Block',
      addTextBlockPlaceholder: 'Add a paragraph or process step...',
      addText: 'Add Text',
      addImage: 'Add Image',
      uploadImage: 'Upload Image',
      role: 'Your Role',
      rolePlaceholder: 'Ex: Product Designer',
      duration: 'Duration',
      durationPlaceholder: 'Ex: 3 months',
      cancel: 'Cancel',
      saveProject: 'Save Project',
      noContentBlocks: 'No content blocks added yet.',
      fileSelected: 'File selected:',
    },
    projectDetail: {
      back: 'Back',
      projectNotFound: 'Project not found',
      backToHome: 'Back to Home',
      loading: 'Loading project...',
      editProject: 'Edit Project',
      saveChanges: 'Save Changes',
      currentCardImage: 'Main Card Image',
    },
    footer: {
      rights: '© 2025 Leonardo Ferrari.',
      tagline: 'Design that makes sense.',
    },
  },
};

export const getTranslation = (lang: Language, path: string): string => {
  const keys = path.split('.');
  let value: any = translations[lang];
  for (const key of keys) {
    value = value?.[key];
    if (value === undefined) return path;
  }
  return typeof value === 'string' ? value : path;
};

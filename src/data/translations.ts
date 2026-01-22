export type Language = 'pt' | 'en';

export interface Translations {
  nav: {
    about: string;
    projects: string;
    logout: string;
  };
  home: {
    title: string;
    subtitle: string;
    projects: string;
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
  };
}

export const translations: Record<Language, Translations> = {
  pt: {
    nav: {
      about: 'Sobre',
      projects: 'Projetos',
      logout: 'Sair',
    },
    home: {
      title: 'Leo Ferrari',
      subtitle: 'Product Designer Sênior',
      projects: 'Projetos',
    },
    about: {
      title: 'Sobre mim',
      bio1: 'Sou designer com mais de 10 anos de experiência em UX, atuando de ponta a ponta nos projetos, desde a imersão com stakeholders até a entrega de soluções testadas, validadas e prontas para escalar.',
      bio2: 'Tenho facilidade em traduzir contextos complexos em produtos claros, objetivos e centrados no usuário. Já atuei em segmentos como finanças, saúde, indústria farmacêutica, agronegócio e educação, sempre com foco em clareza de processos, conexão com o negócio e entrega de valor real.',
      bio3: 'Hoje, além de atuar no desenvolvimento de produtos digitais, também colaboro com o time comercial em projetos de pré-venda, ajudando a construir propostas que mostram, de forma estratégica, como o design pode gerar impacto desde o início dos projetos.',
      bio4: 'Me destaco por facilitar decisões, organizar fluxos e formar designers com visão de produto. Tenho investigado como IA e ferramentas no-code podem potencializar o trabalho de designers e acelerar a entrega de valor em produtos digitais.',
      tools: 'Ferramentas & Expertise',
    },
    experience: {
      title: 'Por onde andei',
    },
    projects: {
      addProject: 'Adicionar Projeto',
      noProjects: 'Nenhum projeto adicionado ainda. Clique em "Adicionar Projeto" para começar!',
      viewDetails: 'Ver Detalhes',
      addNewProject: 'Adicionar Novo Projeto',
      fillProjectData: 'Preencha os dados do novo projeto.',
      projectTitle: 'Título do Projeto *',
      projectTitlePlaceholder: 'Ex: Redesign de E-commerce',
      mainImage: 'Imagem Principal do Projeto (para o card)',
      briefDescription: 'Descrição Breve',
      detailedContent: 'Conteúdo Detalhado do Projeto (Processo, Resultados, etc.)',
      detailedContentPlaceholder: 'Adicione o conteúdo detalhado do projeto, explicando o processo, desafios e soluções...',
      contentBlocks: 'Blocos de Conteúdo Adicionais (Imagens e Texto)',
      addTextBlock: 'Adicionar Novo Bloco de Texto',
      addTextBlockPlaceholder: 'Adicione um parágrafo, etapa do processo, etc.',
      addText: 'Adicionar Texto',
      addImage: 'Adicionar Nova Imagem',
      uploadImage: 'Carregar Imagem',
      role: 'Sua Função',
      rolePlaceholder: 'Ex: UI/UX Designer',
      duration: 'Duração',
      durationPlaceholder: 'Ex: 3 meses, 1 ano',
      cancel: 'Cancelar',
      saveProject: 'Salvar Projeto',
      noContentBlocks: 'Nenhum bloco de conteúdo adicionado ainda.',
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
      rights: '© 2024 Leonardo Ferrari. Todos os direitos reservados.',
    },
  },
  en: {
    nav: {
      about: 'About',
      projects: 'Projects',
      logout: 'Logout',
    },
    home: {
      title: 'Leo Ferrari',
      subtitle: 'Senior Product Designer',
      projects: 'Projects',
    },
    about: {
      title: 'About me',
      bio1: 'I am a designer with over 10 years of experience in UX, working end-to-end on projects, from stakeholder immersion to delivering tested, validated, and scalable solutions.',
      bio2: 'I have a knack for translating complex contexts into clear, objective, and user-centered products. I have worked in segments such as finance, healthcare, pharmaceuticals, agribusiness, and education, always focusing on process clarity, business connection, and delivering real value.',
      bio3: 'Today, in addition to working on digital product development, I also collaborate with the commercial team on pre-sales projects, helping to build proposals that strategically show how design can generate impact from the beginning of projects.',
      bio4: 'I stand out for facilitating decisions, organizing flows, and training designers with a product vision. I have been investigating how AI and no-code tools can enhance designers\' work and accelerate value delivery in digital products.',
      tools: 'Tools & Expertise',
    },
    experience: {
      title: 'Where I\'ve been',
    },
    projects: {
      addProject: 'Add Project',
      noProjects: 'No projects added yet. Click "Add Project" to get started!',
      viewDetails: 'View Details',
      addNewProject: 'Add New Project',
      fillProjectData: 'Fill in the new project data.',
      projectTitle: 'Project Title *',
      projectTitlePlaceholder: 'Ex: E-commerce Redesign',
      mainImage: 'Main Project Image (for the card)',
      briefDescription: 'Brief Description',
      detailedContent: 'Detailed Project Content (Process, Results, etc.)',
      detailedContentPlaceholder: 'Add the detailed project content, explaining the process, challenges, and solutions...',
      contentBlocks: 'Additional Content Blocks (Images and Text)',
      addTextBlock: 'Add New Text Block',
      addTextBlockPlaceholder: 'Add a paragraph, process step, etc.',
      addText: 'Add Text',
      addImage: 'Add New Image',
      uploadImage: 'Upload Image',
      role: 'Your Role',
      rolePlaceholder: 'Ex: UI/UX Designer',
      duration: 'Duration',
      durationPlaceholder: 'Ex: 3 months, 1 year',
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
      rights: '© 2024 Leonardo Ferrari. All rights reserved.',
    },
  },
};

// Função helper para acessar traduções aninhadas
export const getTranslation = (lang: Language, path: string): string => {
  const keys = path.split('.');
  let value: any = translations[lang];
  
  for (const key of keys) {
    value = value?.[key];
    if (value === undefined) {
      return path; // Retorna a chave se não encontrar
    }
  }
  
  return typeof value === 'string' ? value : path;
};

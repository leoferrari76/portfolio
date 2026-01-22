import { Project } from './projects';
import { Language } from './translations';
import { getTranslatedContentBlocks } from './projectsContentTranslations';

// Traduções dos campos principais dos projetos
export const projectTranslations: Record<string, Record<Language, Partial<Project>>> = {
  'Ache': {
    pt: {
      title: 'Aché - Bula Digital / BackOffice',
      description: '<p>Projeto de design da Bula Digital e BackOffice do Laboratório Aché</p>',
      role: 'Product Designer',
      duration: '3 meses',
    },
    en: {
      title: 'Aché - Digital Leaflet / BackOffice',
      description: '<p>Digital Leaflet and BackOffice design project for Aché Laboratory</p>',
      role: 'Product Designer',
      duration: '3 months',
    },
  },
  'artesanal-investimentos': {
    pt: {
      title: 'Artesanal Investimentos',
      description: '<p>BluePrint</p>',
      role: 'Product Designer',
      duration: '3 meses',
    },
    en: {
      title: 'Artesanal Investimentos',
      description: '<p>BluePrint</p>',
      role: 'Product Designer',
      duration: '3 months',
    },
  },
  'vr-beneficios': {
    pt: {
      title: 'VR Benefícios — Integração de Ecossistemas',
      description: '<p>Discovery e MVP de integração de ecossistema de produtos</p>',
      role: 'Product Designer',
      duration: '3 meses',
    },
    en: {
      title: 'VR Benefits — Ecosystem Integration',
      description: '<p>Discovery and MVP for product ecosystem integration</p>',
      role: 'Product Designer',
      duration: '3 months',
    },
  },
  'gdm-sistema-recomendacao': {
    pt: {
      title: 'GDM - Sistema de Recomendação de Plantio',
      description: '<p>Plataforma digital com sistema de recomendação para otimização de plantio</p>',
      role: 'Product Designer',
      duration: '3 meses',
    },
    en: {
      title: 'GDM - Planting Recommendation System',
      description: '<p>Digital platform with recommendation system for planting optimization</p>',
      role: 'Product Designer',
      duration: '3 months',
    },
  },
  'unipac-srm': {
    pt: {
      title: 'Unipac - Sistema de Relacionamento (SRM)',
      description: '<p>Plataforma de SRM para modernização do relacionamento com clientes</p>',
      role: 'Product Designer',
      duration: '3 meses',
    },
    en: {
      title: 'Unipac - Relationship Management System (SRM)',
      description: '<p>SRM platform for modernizing customer relationships</p>',
      role: 'Product Designer',
      duration: '3 months',
    },
  },
  'janssenpro-latam': {
    pt: {
      title: 'JanssenPro - Plataforma LATAM',
      description: '<p>Plataforma unificada para médicos com acesso a pesquisas e medicamentos</p>',
      role: 'Product Designer',
      duration: '1 ano e 6 meses',
    },
    en: {
      title: 'JanssenPro - LATAM Platform',
      description: '<p>Unified platform for doctors with access to research and medications</p>',
      role: 'Product Designer',
      duration: '1 year and 6 months',
    },
  },
};

// Função para traduzir um projeto baseado no idioma
export const translateProject = (project: Project, language: Language): Project => {
  const translations = projectTranslations[project.id];
  
  // Traduz os contentBlocks se existirem
  const translatedContentBlocks = project.contentBlocks
    ? getTranslatedContentBlocks(project.id, project.contentBlocks, language)
    : undefined;
  
  if (!translations || !translations[language]) {
    // Se não houver tradução dos campos principais, mas houver contentBlocks traduzidos, usa eles
    if (translatedContentBlocks) {
      return {
        ...project,
        contentBlocks: translatedContentBlocks,
      };
    }
    // Se não houver tradução, retorna o projeto original
    return project;
  }
  
  const translatedFields = translations[language];
  
  return {
    ...project,
    ...translatedFields,
    // Sobrescreve os contentBlocks com a versão traduzida se existir
    contentBlocks: translatedContentBlocks || project.contentBlocks,
  };
};

// Função para traduzir uma lista de projetos
export const translateProjects = (projects: Project[], language: Language): Project[] => {
  return projects.map(project => translateProject(project, language));
};

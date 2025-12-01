export interface ContentBlock {
  id: string;
  type: "text" | "image";
  content: string;
  caption?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  contentBlocks?: ContentBlock[];
  detailedContent?: string;
  role: string;
  duration: string;
  imageUrl?: string;
}

// Exemplo inicial de projeto.
// Você pode duplicar este objeto e editar os campos para criar novos projetos.
export const projects: Project[] = [
  {
    id: "Ache",
    title: "Aché - Bula Digital / BackOffice",
    description:
      "<p>Projeto de design da Bula Digital e BackOffice do Laboratório Aché</p>",
    detailedContent:
      "<h2>Contexto & Desafio</h2><p>O laboratório Aché, um dos maiores do setor farmacêutico no Brasil, precisava adaptar suas bulas físicas para o ambiente digital, em cumprimento às novas normas da ANVISA, que exigem a disponibilização das bulas por meio de QR codes nas embalagens.</p>",
    role: "Product Designer",
    duration: "3 meses",
    imageUrl:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
    contentBlocks: [
      {
        id: "block-1",
        type: "text",
        content:
      "<p>Nosso desafio inicial foi entender profundamente as exigências regulatórias e aplicar essas diretrizes na bula digital. Dois pontos críticos surgiram:</p>" +
      "<p>1. Já existia um layout aprovado da bula digital, mas sem validação técnica, de usabilidade ou de viabilidade — focava apenas em atender a legislação, sem considerar a experiência real do usuário.</p>" +
      "<p>2. O processo de cadastro e atualização das bulas no ambiente digital era extremamente complexo e precisava ser redesenhado para garantir eficiência, segurança e auditabilidade.</p>"<br/> +
      "<p>Em um prazo desafiador de apenas três meses, precisávamos entregar:</p>" +
      "<p>- A nova bula digital, funcional e acessível.</p>" +
      "<p>- O backoffice para gerenciamento, cadastro e histórico de alterações.</p>" +
      "<p>A solução final foi uma bula digital moderna, intuitiva e completamente compatível com as normas da ANVISA, além de um backoffice robusto e seguro para gerenciar todo o processo de cadastro e atualização das bulas.</p>",
      },
    ],
  },
  {
    id: "projeto-2",
    title: "Novo Projeto",
    description:
      "<p>Descrição breve do seu projeto aqui.</p>",
    detailedContent:
      "<h2>Visão Geral</h2>" +
      "<p>Adicione aqui o conteúdo detalhado do seu projeto. Você pode usar HTML para formatar o texto.</p>" +
      "<h3>Desafios</h3>" +
      "<p>Descreva os principais desafios enfrentados neste projeto.</p>" +
      "<h3>Solução</h3>" +
      "<p>Explique como você resolveu esses desafios.</p>",
    role: "Product Designer",
    duration: "6 meses",
    imageUrl:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
    contentBlocks: [],
  },
];



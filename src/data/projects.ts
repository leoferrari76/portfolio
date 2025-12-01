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
    id: "example-1",
    title: "Teste de Projeto",
    description:
      "<p>Este é um projeto de exemplo. Edite o arquivo <code>src/data/projects.ts</code> para adicionar seus próprios projetos.</p>",
    detailedContent:
      "<h2>Contexto</h2><p>Descreva aqui o problema, o contexto e o processo de design.</p>",
    role: "Product Designer",
    duration: "3 meses",
    imageUrl:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
    contentBlocks: [
      {
        id: "block-1",
        type: "text",
        content:
          "<p>Use blocos de conteúdo para adicionar imagens e textos complementares ao seu estudo de caso.</p>",
      },
    ],
  },
];



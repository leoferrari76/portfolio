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
      "<h3><b>Contexto & Desafio</b></h3><p>O laboratório Aché, um dos maiores do setor farmacêutico no Brasil, precisava adaptar suas bulas físicas para o ambiente digital, em cumprimento às novas normas da ANVISA, que exigem a disponibilização das bulas por meio de QR codes nas embalagens.</p>",
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
          "<p>2. O processo de cadastro e atualização das bulas no ambiente digital era extremamente complexo e precisava ser redesenhado para garantir eficiência, segurança e auditabilidade.</p>" +
          "<p>&nbsp;</p>" +
          "<p>Em um prazo desafiador de apenas três meses, precisávamos entregar:</p>" +
          "<p>- A nova bula digital, funcional e acessível.</p>" +
          "<p>- O backoffice para gerenciamento, cadastro e histórico de alterações.</p>" +
          "<p>&nbsp;</p>" +
          "<p>A solução final foi uma bula digital moderna, intuitiva e completamente compatível com as normas da ANVISA, além de um backoffice robusto e seguro para gerenciar todo o processo de cadastro e atualização das bulas.</p>" +
          "<p>&nbsp;</p><p>&nbsp;</p>" +
          "<h3><b>Objetivo & Sucesso Esperado</b></h3>" +
          "<p>Nosso objetivo era redesenhar a bula digital com foco em usabilidade, viabilidade técnica e aderência às regras da ANVISA, garantindo:</p>" +
          "<p>- A criação da primeira bula digital do Aché, publicada via QR Code, com histórico completo de alterações para fins de auditoria;</p>" +
          "<p>- Um backoffice robusto e fácil de operar para o time interno do laboratório;</p>" +
          "<p>- Acessibilidade plena para todos os usuários, incluindo pessoas com deficiência.</p>" +
          "<p>&nbsp;</p>" +
          "<p>Além da entrega técnica, o sucesso seria medido por:</p>" +
          "<p>- Redução de custos com impressão de papel;</p>" +
          "<p>- Eficiência no processo de atualização de bulas (tempo de cadastro e revisão);</p>" +
          "<p>- Acessibilidade garantida conforme exigências legais e melhores práticas.</p>" +
          "<p>&nbsp;</p>" +
          "<p>Com base no estudo de fluxo, estimamos que a solução poderia reduzir em até 50% o tempo de atualização e revisão de bulas digitais no médio prazo, além de ampliar significativamente o acesso para pessoas com deficiência visual e idosos.</p>" +
          "<p>&nbsp;</p>" +
          "<h3><b>Processo & Abordagem</b></h3>" +
          "<p>- Adotamos um processo colaborativo, com foco na cocriação:</p>" +
          "<p>- Entrevistas detalhadas com todos os times envolvidos na criação da bula física;</p>" +
          "<p>- Cocriação intensiva com os times internos do Aché para mapear e validar o fluxo do backoffice;</p>" +
          "<p>- Aproximação constante com o time de desenvolvimento para ajustar componentes e garantir viabilidade técnica;</p>" +
          "<p>- Alinhamento periódico com o gerente de design do Aché, explicando a necessidade de alterações no design pré-aprovado;</p>" +
          "<p>- Cerimônias ágeis (daily, planning, review e refinamento) com alta participação do cliente, assegurando agilidade nas decisões e no desenvolvimento.</p>" +
          "<p>&nbsp;</p>" +
          "<h3><b>Decisões Importantes & Trade-offs</b></h3>" +
          "<p>O ponto mais desafiador do projeto foi a necessidade de revisar o design previamente aprovado da bula digital, que não havia passado por nenhuma avaliação de usabilidade.</p>" +
          "<p>Após uma análise detalhada, percebi que algumas features e elementos do layout não agregariam valor real aos usuários e, ao mesmo tempo, poderiam comprometer o prazo. Junto ao time de desenvolvimento e com base em dados das pesquisas, propus cortes estratégicos no escopo.</p>" +
          "<p>Com o apoio do gerente de design do Aché e dos stakeholders, conseguimos aprovar as mudanças, priorizando o que era realmente essencial para garantir uma entrega funcional, acessível e dentro do prazo.</p>" +
          "<p>&nbsp;</p>" +
          "<h3><b>Resultados</b></h3>" +
          "<p>Apesar do prazo apertado, o resultado foi bastante positivo:</p>" +
          "<p>- Entregamos o backoffice funcional, que já foi utilizado na criação da primeira bula digital do Aché, publicada com QR Code e com todo o histórico de auditoria ativo;</p>" +
          "<p>- Houve redução significativa no uso de papel para a bula do medicamento piloto, gerando economia e impacto ambiental positivo;</p>" +
          "<p>- A plataforma garantiu conformidade com todas as exigências legais e abriu caminho para que futuras bulas digitais fossem criadas de forma mais ágil.</p>" +
          "<p>&nbsp;</p>" +
          "<p>Embora não tenha sido possível coletar feedbacks de usuários finais (o medicamento era de uso muito restrito), o projeto estabeleceu um novo padrão de operação dentro do laboratório.</p>" +
          "<p>&nbsp;</p>" +
          "<h3><b>Aprendizados & Conclusões</b></h3>" +
          "<p>Este projeto reforçou um aprendizado importante: como um time alinhado e um cliente participativo podem acelerar entregas de alta complexidade, mesmo com restrições regulatórias rígidas.</p>" +
          "<p>Além disso, me desafiou a equilibrar estética, usabilidade, acessibilidade e viabilidade técnica — algo que considero uma das habilidades mais críticas em projetos digitais de impacto social.</p>" +
          "<p>O projeto também me mostrou como decisões bem fundamentadas, mesmo impopulares no início (como o corte de features), podem salvar um projeto e garantir uma entrega que atende tanto aos usuários quanto às exigências do negócio.</p>",
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



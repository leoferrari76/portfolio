import { ContentBlock } from './projects';
import { Language } from './translations';

// Traduções dos contentBlocks por projeto e por idioma
export const contentBlocksTranslations: Record<string, Record<Language, ContentBlock[]>> = {
  'Ache': {
    pt: [
      {
        id: "block-1",
        type: "text",
        content:
          "<h3><b>Contexto & Desafio</b></h3>" +
          "<p>O laboratório Aché, um dos maiores do setor farmacêutico no Brasil, precisava adaptar suas bulas físicas para o ambiente digital, em cumprimento às novas normas da ANVISA, que exigem a disponibilização das bulas por meio de QR codes nas embalagens.</p>" +
          "<p>&nbsp;</p>" +
          "<p>Nosso desafio inicial foi entender profundamente as exigências regulatórias e aplicar essas diretrizes na bula digital. Dois pontos críticos surgiram:</p>" +
          "<p>&nbsp;</p>" +
          "<p>1. Já existia um layout aprovado da bula digital, mas sem validação técnica, de usabilidade ou de viabilidade — focava apenas em atender a legislação, sem considerar a experiência real do usuário.</p>" +
          "<p>&nbsp;</p>" +
          "<p>2. O processo de cadastro e atualização das bulas no ambiente digital era extremamente complexo e precisava ser redesenhado para garantir eficiência, segurança e auditabilidade.</p>" +
          "<p>&nbsp;</p>" +
          "<p>Em um prazo desafiador de apenas três meses, precisávamos entregar:</p>" +
          "<p>- A nova bula digital, funcional e acessível.</p>" +
          "<p>- O backoffice para gerenciamento, cadastro e histórico de alterações.</p>" +
          "<p>&nbsp;</p>" +
          "<p>A solução final foi uma bula digital moderna, intuitiva e completamente compatível com as normas da ANVISA, além de um backoffice robusto e seguro para gerenciar todo o processo de cadastro e atualização das bulas.</p>",
      },
      {
        id: "block-2",
        type: "text",
        content:
          "<h3><b>Objetivo & Sucesso Esperado</b></h3>" +
          "<p>Nosso objetivo era redesenhar a bula digital com foco em usabilidade, viabilidade técnica e aderência às regras da ANVISA, garantindo:</p>" +
          "<p>&nbsp;</p>" +
          "<p>- A criação da primeira bula digital do Aché, publicada via QR Code, com histórico completo de alterações para fins de auditoria;</p>" +
          "<p>- Um backoffice robusto e fácil de operar para o time interno do laboratório;</p>" +
          "<p>- Acessibilidade plena para todos os usuários, incluindo pessoas com deficiência.</p>" +
          "<p>&nbsp;</p>" +
          "<p>Além da entrega técnica, o sucesso seria medido por:</p>" +
          "<p>&nbsp;</p>" +
          "<p>- Redução de custos com impressão de papel;</p>" +
          "<p>- Eficiência no processo de atualização de bulas (tempo de cadastro e revisão);</p>" +
          "<p>- Acessibilidade garantida conforme exigências legais e melhores práticas.</p>" +
          "<p>&nbsp;</p>" +
          "<p>Com base no estudo de fluxo, estimamos que a solução poderia reduzir em até 50% o tempo de atualização e revisão de bulas digitais no médio prazo, além de ampliar significativamente o acesso para pessoas com deficiência visual e idosos.</p>",
      },
      {
        id: "block-3",
        type: "text",
        content:
          "<h3><b>Processo & Abordagem</b></h3>" +
          "<p>Adotamos um processo colaborativo, com foco na cocriação:</p>" +
          "<p>&nbsp;</p>" +
          "<p>- Entrevistas detalhadas com todos os times envolvidos na criação da bula física;</p>" +
          "<p>- Cocriação intensiva com os times internos do Aché para mapear e validar o fluxo do backoffice;</p>" +
          "<p>- Aproximação constante com o time de desenvolvimento para ajustar componentes e garantir viabilidade técnica;</p>" +
          "<p>- Alinhamento periódico com o gerente de design do Aché, explicando a necessidade de alterações no design pré-aprovado;</p>" +
          "<p>- Cerimônias ágeis (daily, planning, review e refinamento) com alta participação do cliente, assegurando agilidade nas decisões e no desenvolvimento.</p>",
      },
      {
        id: "block-4",
        type: "text",
        content:
          "<h3><b>Decisões Importantes & Trade-offs</b></h3>" +
          "<p>O ponto mais desafiador do projeto foi a necessidade de revisar o design previamente aprovado da bula digital, que não havia passado por nenhuma avaliação de usabilidade.</p>" +
          "<p>&nbsp;</p>" +
          "<p>Após uma análise detalhada, percebi que algumas features e elementos do layout não agregariam valor real aos usuários e, ao mesmo tempo, poderiam comprometer o prazo. Junto ao time de desenvolvimento e com base em dados das pesquisas, propus cortes estratégicos no escopo.</p>" +
          "<p>&nbsp;</p>" +
          "<p>Com o apoio do gerente de design do Aché e dos stakeholders, conseguimos aprovar as mudanças, priorizando o que era realmente essencial para garantir uma entrega funcional, acessível e dentro do prazo.</p>",
      },
      {
        id: "block-5",
        type: "text",
        content:
          "<h3><b>Resultados</b></h3>" +
          "<p>Apesar do prazo apertado, o resultado foi bastante positivo:</p>" +
          "<p>&nbsp;</p>" +
          "<p>- Entregamos o backoffice funcional, que já foi utilizado na criação da primeira bula digital do Aché, publicada com QR Code e com todo o histórico de auditoria ativo;</p>" +
          "<p>- Houve redução significativa no uso de papel para a bula do medicamento piloto, gerando economia e impacto ambiental positivo;</p>" +
          "<p>- A plataforma garantiu conformidade com todas as exigências legais e abriu caminho para que futuras bulas digitais fossem criadas de forma mais ágil.</p>" +
          "<p>&nbsp;</p>" +
          "<p>Embora não tenha sido possível coletar feedbacks de usuários finais (o medicamento era de uso muito restrito), o projeto estabeleceu um novo padrão de operação dentro do laboratório.</p>",
      },
      {
        id: "block-6",
        type: "text",
        content:
          "<h3><b>Aprendizados & Conclusões</b></h3>" +
          "<p>Este projeto reforçou um aprendizado importante: como um time alinhado e um cliente participativo podem acelerar entregas de alta complexidade, mesmo com restrições regulatórias rígidas.</p>" +
          "<p>&nbsp;</p>" +
          "<p>Além disso, me desafiou a equilibrar estética, usabilidade, acessibilidade e viabilidade técnica — algo que considero uma das habilidades mais críticas em projetos digitais de impacto social.</p>" +
          "<p>&nbsp;</p>" +
          "<p>O projeto também me mostrou como decisões bem fundamentadas, mesmo impopulares no início (como o corte de features), podem salvar um projeto e garantir uma entrega que atende tanto aos usuários quanto às exigências do negócio.</p>",
      },
    ],
    en: [
      {
        id: "block-1",
        type: "text",
        content:
          "<h3><b>Context & Challenge</b></h3>" +
          "<p>Aché Laboratory, one of the largest pharmaceutical companies in Brazil, needed to adapt its physical leaflets to the digital environment, in compliance with new ANVISA regulations that require leaflets to be made available via QR codes on packaging.</p>" +
          "<p>&nbsp;</p>" +
          "<p>Our initial challenge was to deeply understand the regulatory requirements and apply these guidelines to the digital leaflet. Two critical points emerged:</p>" +
          "<p>&nbsp;</p>" +
          "<p>1. There was already an approved digital leaflet layout, but without technical, usability, or feasibility validation — it focused only on meeting legislation, without considering the real user experience.</p>" +
          "<p>&nbsp;</p>" +
          "<p>2. The process of registering and updating leaflets in the digital environment was extremely complex and needed to be redesigned to ensure efficiency, security, and auditability.</p>" +
          "<p>&nbsp;</p>" +
          "<p>Within a challenging deadline of just three months, we needed to deliver:</p>" +
          "<p>- The new digital leaflet, functional and accessible.</p>" +
          "<p>- The backoffice for management, registration, and change history.</p>" +
          "<p>&nbsp;</p>" +
          "<p>The final solution was a modern, intuitive digital leaflet fully compliant with ANVISA standards, plus a robust and secure backoffice to manage the entire leaflet registration and update process.</p>",
      },
      {
        id: "block-2",
        type: "text",
        content:
          "<h3><b>Objective & Expected Success</b></h3>" +
          "<p>Our goal was to redesign the digital leaflet focusing on usability, technical feasibility, and adherence to ANVISA rules, ensuring:</p>" +
          "<p>&nbsp;</p>" +
          "<p>- The creation of Aché's first digital leaflet, published via QR Code, with complete change history for audit purposes;</p>" +
          "<p>- A robust and easy-to-operate backoffice for the laboratory's internal team;</p>" +
          "<p>- Full accessibility for all users, including people with disabilities.</p>" +
          "<p>&nbsp;</p>" +
          "<p>Beyond the technical delivery, success would be measured by:</p>" +
          "<p>&nbsp;</p>" +
          "<p>- Reduction in paper printing costs;</p>" +
          "<p>- Efficiency in the leaflet update process (registration and review time);</p>" +
          "<p>- Accessibility guaranteed according to legal requirements and best practices.</p>" +
          "<p>&nbsp;</p>" +
          "<p>Based on the flow study, we estimated that the solution could reduce digital leaflet update and review time by up to 50% in the medium term, in addition to significantly expanding access for visually impaired people and the elderly.</p>",
      },
      {
        id: "block-3",
        type: "text",
        content:
          "<h3><b>Process & Approach</b></h3>" +
          "<p>We adopted a collaborative process, focusing on co-creation:</p>" +
          "<p>&nbsp;</p>" +
          "<p>- Detailed interviews with all teams involved in creating the physical leaflet;</p>" +
          "<p>- Intensive co-creation with Aché's internal teams to map and validate the backoffice flow;</p>" +
          "<p>- Constant collaboration with the development team to adjust components and ensure technical feasibility;</p>" +
          "<p>- Periodic alignment with Aché's design manager, explaining the need for changes to the pre-approved design;</p>" +
          "<p>- Agile ceremonies (daily, planning, review, and refinement) with high client participation, ensuring agility in decisions and development.</p>",
      },
      {
        id: "block-4",
        type: "text",
        content:
          "<h3><b>Important Decisions & Trade-offs</b></h3>" +
          "<p>The most challenging point of the project was the need to review the previously approved digital leaflet design, which had not undergone any usability evaluation.</p>" +
          "<p>&nbsp;</p>" +
          "<p>After a detailed analysis, I realized that some features and layout elements would not add real value to users and, at the same time, could compromise the deadline. Together with the development team and based on research data, I proposed strategic scope cuts.</p>" +
          "<p>&nbsp;</p>" +
          "<p>With the support of Aché's design manager and stakeholders, we managed to approve the changes, prioritizing what was truly essential to ensure a functional, accessible delivery within the deadline.</p>",
      },
      {
        id: "block-5",
        type: "text",
        content:
          "<h3><b>Results</b></h3>" +
          "<p>Despite the tight deadline, the result was quite positive:</p>" +
          "<p>&nbsp;</p>" +
          "<p>- We delivered a functional backoffice, which was already used in creating Aché's first digital leaflet, published with QR Code and with the complete audit history active;</p>" +
          "<p>- There was a significant reduction in paper use for the pilot medication leaflet, generating savings and positive environmental impact;</p>" +
          "<p>- The platform ensured compliance with all legal requirements and paved the way for future digital leaflets to be created more agilely.</p>" +
          "<p>&nbsp;</p>" +
          "<p>Although it was not possible to collect feedback from end users (the medication was very restricted), the project established a new operational standard within the laboratory.</p>",
      },
      {
        id: "block-6",
        type: "text",
        content:
          "<h3><b>Learnings & Conclusions</b></h3>" +
          "<p>This project reinforced an important learning: how an aligned team and a participatory client can accelerate high-complexity deliveries, even with strict regulatory constraints.</p>" +
          "<p>&nbsp;</p>" +
          "<p>Furthermore, it challenged me to balance aesthetics, usability, accessibility, and technical feasibility — something I consider one of the most critical skills in digital projects with social impact.</p>" +
          "<p>&nbsp;</p>" +
          "<p>The project also showed me how well-founded decisions, even if unpopular at first (such as cutting features), can save a project and ensure a delivery that meets both users and business requirements.</p>",
      },
    ],
  },
  'artesanal-investimentos': {
    pt: [
      {
        id: "block-1",
        type: "text",
        content:
          "<h3><b>Contexto & Desafio</b></h3>" +
          "<p>A Artesanal Investimento é uma gestora de recursos com mais de 15 anos no mercado financeiro, atuando com fundos de renda variável, renda fixa e derivativos. Apesar do crescimento acelerado, muitos processos internos continuavam baseados em planilhas, e-mails e trocas informais, gerando informações fragmentadas e retrabalho.</p>" +
          "<p>&nbsp;</p>" +
          "<p>Com o aumento da complexidade das operações, a diretoria começou a sentir a necessidade urgente de um dashboard centralizado para análise dos fundos e processos mais estruturados para a gestão de dados e relatórios.</p>" +
          "<p>&nbsp;</p>" +
          "<p>Nosso desafio foi realizar um mapeamento macro de todos os processos da empresa e entregar um blueprint estratégico, documentando:</p>" +
          "<p>&nbsp;</p>" +
          "<p>- Fluxos e interações entre áreas;</p>" +
          "<p>- Pontos de atenção e gargalos;</p>" +
          "<p>- Oportunidades de melhoria e eficiência;</p>" +
          "<p>- Proposta inicial de arquitetura para um banco de dados centralizado.</p>" +
          "<p>&nbsp;</p>" +
          "<p>Além disso, foi essencial entender profundamente a complexidade do mercado financeiro, seus termos técnicos, regulamentações e particularidades.</p>",
      },
    ],
    en: [
      {
        id: "block-1",
        type: "text",
        content:
          "<h3><b>Context & Challenge</b></h3>" +
          "<p>Artesanal Investimentos is an asset management company with over 15 years in the financial market, operating with equity funds, fixed income, and derivatives. Despite rapid growth, many internal processes remained based on spreadsheets, emails, and informal exchanges, generating fragmented information and rework.</p>" +
          "<p>&nbsp;</p>" +
          "<p>With the increasing complexity of operations, the board began to feel an urgent need for a centralized dashboard for fund analysis and more structured processes for data and report management.</p>" +
          "<p>&nbsp;</p>" +
          "<p>Our challenge was to perform a macro mapping of all company processes and deliver a strategic blueprint, documenting:</p>" +
          "<p>&nbsp;</p>" +
          "<p>- Flows and interactions between areas;</p>" +
          "<p>- Attention points and bottlenecks;</p>" +
          "<p>- Improvement and efficiency opportunities;</p>" +
          "<p>- Initial proposal for a centralized database architecture.</p>" +
          "<p>&nbsp;</p>" +
          "<p>Furthermore, it was essential to deeply understand the complexity of the financial market, its technical terms, regulations, and particularities.</p>",
      },
    ],
  },
  // NOTA: Para adicionar traduções de outros projetos, adicione uma entrada aqui
  // seguindo o mesmo padrão do projeto 'Ache' acima.
  // Exemplo:
  // 'vr-beneficios': {
  //   pt: [/* blocos em português */],
  //   en: [/* blocos em inglês */],
  // },
};

// Função para obter os contentBlocks traduzidos
export const getTranslatedContentBlocks = (
  projectId: string,
  originalBlocks: ContentBlock[],
  language: Language
): ContentBlock[] => {
  const translations = contentBlocksTranslations[projectId];
  
  if (!translations || !translations[language]) {
    // Se não houver tradução, retorna os blocos originais
    return originalBlocks;
  }
  
  return translations[language];
};

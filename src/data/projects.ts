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
    title: "Artesanal Investimentos",
    description:
      "<p>BluePrint</p>",
    detailedContent:
     "<h3><b>Contexto & Desafio</b></h3><p>A Artesanal Investimento é uma gestora de recursos com mais de 15 anos no mercado financeiro, atuando com fundos de renda variável, renda fixa e derivativos. Apesar do crescimento acelerado, muitos processos internos continuavam baseados em planilhas, e-mails e trocas informais, gerando informações fragmentadas e retrabalho.</p>",
    role: "Product Designer",
    duration: "3 meses",
    imageUrl:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
    contentBlocks: [
      {
        id: "block-1",
        type: "text",
        content:
        "<p>Com o aumento da complexidade das operações, a diretoria começou a sentir a necessidade urgente de um dashboard centralizado para análise dos fundos e processos mais estruturados para a gestão de dados e relatórios.</p>" +
        "<p>Nosso desafio foi realizar um mapeamento macro de todos os processos da empresa e entregar um **blueprint estratégico**, documentando:</p>" +
        "<p>- Fluxos e interações entre áreas;</p>" +
        "<p>- Pontos de atenção e gargalos;</p>" +
        "<p>- Oportunidades de melhoria e eficiência;</p>" +
        "<p>- Proposta inicial de arquitetura para um banco de dados centralizado.</p>" +
        "<p>&nbsp;</p>" +
        "<p>Além disso, foi essencial entender profundamente a complexidade do mercado financeiro, seus termos técnicos, regulamentações e particularidades.</p>" +
        "<p>&nbsp;</p>" +
        "<h3><b>Objetivo & Sucesso Esperado</b></h3>" +
        "<p>Nosso objetivo era, em apenas dois meses:</p>" +
        "<p>- Mapear os fluxos completos de criação e gestão de fundos financeiros;</p>" +
        "<p>- Identificar oportunidades de centralização e automação;</p>" +
        "<p>- Propor um blueprint detalhado com fluxos e arquitetura de dados;</p>" +
        "<p>- Criar um protótipo inicial do sistema futuro, integrando regras de negócio, usabilidade e viabilidade técnica.</p>" +
        "<p>&nbsp;</p>" +
        "<p>O sucesso seria medido por:</p>" +
        "<p>- Eliminação da dependência de planilhas e processos manuais;</p>" +
        "<p>- Melhoria da comunicação entre áreas;</p>" +
        "<p>- Definição clara de um fluxo centralizado de ponta a ponta;</p>" +
        "<p>- Entrega de um dashboard que subsidiasse decisões estratégicas rápidas;</p>" +
        "<p>- Estabelecimento de uma base para a criação de um sistema escalável.</p>" +
        "<p>&nbsp;</p>" +
        "<p>Nosso mapeamento previa que, com o novo sistema, a empresa poderia:</p>" +
        "<p>- Reduzir significativamente o retrabalho nas áreas operacionais;</p>" +
        "<p>- Aumentar a confiabilidade e rastreabilidade dos dados;</p>" +
        "<p>- Ter ganhos claros de agilidade, governança e segurança.</p>" +
        "<p>&nbsp;</p>" +
        "<h3><b>Meu Papel no Projeto</b></h3>" +
        "<p>Atuei como responsável pela criação do blueprint, conduzindo:</p>" +
        "<p>- Entrevistas presenciais e remotas com stakeholders e usuários-chave;</p>" +
        "<p>- Análise profunda dos processos atuais e identificação de gargalos;</p>" +
        "<p>- Definição, junto ao PO, das principais oportunidades de transformação;</p>" +
        "<p>- Criação de protótipos iniciais do novo sistema, conectando usabilidade, regras de negócio e viabilidade técnica;</p>" +
        "<p>- Apresentação do blueprint completo para toda a empresa, promovendo alinhamento e engajamento;</p>" +
        "<p>- Condução do discovery detalhado pós-blueprint para criação dos fluxos e telas do MVP.</p>" +
        "<p>- Além do Blueprint criei uma visualização sistêmica dos processos internos. Esse foi um plus a mais que tomei a liberdade para criar e mostrar ao cliente.</p>" +
        "<p>&nbsp;</p>" +
        "<h3><b>Processo & Abordagem</b></h3>" +
        "<p>Para garantir um mapeamento preciso, utilizamos:</p>" +
        "<p>- Entrevistas estruturadas com as áreas operacionais, comercial, financeira e de tecnologia;</p>" +
        "<p>- Sessões de revisão e validação colaborativa com cada área;</p>" +
        "<p>- Workshops de cocriação com stakeholders para definir o fluxo ideal do novo sistema;</p>" +
        "<p>- Sessões de alinhamento estratégico com a diretoria para validar o direcionamento geral;</p>" +
        "<p>- Documentação e prototipação no Miro e Figma para tangibilizar o blueprint.</p>" +
        "<p>&nbsp;</p>" +
        "<h3><b>Decisões Importantes & Trade-offs</b></h3>" +
        "<p>Inicialmente, havíamos definido (eu e PO) com o time da Artesanal que o MVP começaria pelo fluxo de cadastro inicial dos fundos de investimento.</p>" +
        "<p>Porém, durante o processo, a diretoria decidiu mudar o recorte do MVP para outra etapa do fluxo, priorizando um ponto que, para eles, teria mais impacto imediato.</p>" +
        "<p>Essa mudança exigiu que, em pleno andamento, fizéssemos um novo discovery micro, revendo entrevistas, fluxos e priorizações para adaptar o projeto às novas expectativas, sem perder a consistência do trabalho realizado até ali.</p>" +
        "<p>Essa virada foi crucial para garantir que o projeto mantivesse seu valor estratégico, mesmo com mudanças internas.</p>" +
        "<p>&nbsp;</p>" +
        "<h3><b>Resultados</b></h3>" +
        "<p>Apesar de termos concluído com sucesso o blueprint, o projeto não avançou para as fases seguintes por motivos internos da Artesanal, como mudança de prioridades e reestruturação.</p>" +
        "<p>Ainda assim, o projeto teve impactos importantes durante o processo:</p>" +
        "<p>- Trouxe visibilidade inédita sobre ineficiências operacionais;</p>" +
        "<p>- Gerou conversas internas que antes não ocorriam entre as áreas;</p>" +
        "<p>- Iniciou um movimento de conscientização sobre a necessidade de dados centralizados e processos digitais.</p>" +
        "<p>&nbsp;</p>" +
        "<p>O blueprint e o discovery detalhado ficaram como referência interna para futuras iniciativas de digitalização.</p>" +
        "<p>&nbsp;</p>" +
        "<h3><b>Reflexão Pessoal</b></h3>" +
        "<p>Esse foi um dos projetos mais desafiadores da minha carreira, especialmente pelo contexto técnico e pela alta complexidade regulatória do mercado financeiro.</p>" +
        "<p>Tive que aprender rapidamente sobre fundos de investimento, regras de compliance e estruturas de dados altamente específicas, além de lidar com um ambiente de alta pressão e mudanças constantes de escopo.</p>" +
        "<p>Meu maior aprendizado foi a importância de construir entregas que gerem valor, mesmo quando o projeto não segue até a implementação. Além disso, ficou claro como habilidades de escuta ativa, síntese e adaptação rápida são essenciais em projetos estratégicos e de transformação digital.</p>" ,
      }
    ],
  },
];



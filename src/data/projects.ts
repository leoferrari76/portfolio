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

export const projects: Project[] = [
  {
    id: "Ache",
    title: "Aché - Bula Digital / BackOffice",
    description:
      "<p>Projeto de design da Bula Digital e BackOffice do Laboratório Aché</p>",
    role: "Product Designer",
    duration: "3 meses",
    imageUrl:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
    contentBlocks: [
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
  },
  {
    id: "artesanal-investimentos",
    title: "Artesanal Investimentos",
    description: "<p>BluePrint</p>",
    role: "Product Designer",
    duration: "3 meses",
    imageUrl:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
    contentBlocks: [
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
      {
        id: "block-2",
        type: "text",
        content:
          "<h3><b>Objetivo & Sucesso Esperado</b></h3>" +
          "<p>Nosso objetivo era, em apenas dois meses:</p>" +
          "<p>&nbsp;</p>" +
          "<p>- Mapear os fluxos completos de criação e gestão de fundos financeiros;</p>" +
          "<p>- Identificar oportunidades de centralização e automação;</p>" +
          "<p>- Propor um blueprint detalhado com fluxos e arquitetura de dados;</p>" +
          "<p>- Criar um protótipo inicial do sistema futuro, integrando regras de negócio, usabilidade e viabilidade técnica.</p>" +
          "<p>&nbsp;</p>" +
          "<p>O sucesso seria medido por:</p>" +
          "<p>&nbsp;</p>" +
          "<p>- Eliminação da dependência de planilhas e processos manuais;</p>" +
          "<p>- Melhoria da comunicação entre áreas;</p>" +
          "<p>- Definição clara de um fluxo centralizado de ponta a ponta;</p>" +
          "<p>- Entrega de um dashboard que subsidiasse decisões estratégicas rápidas;</p>" +
          "<p>- Estabelecimento de uma base para a criação de um sistema escalável.</p>" +
          "<p>&nbsp;</p>" +
          "<p>Nosso mapeamento previa que, com o novo sistema, a empresa poderia:</p>" +
          "<p>&nbsp;</p>" +
          "<p>- Reduzir significativamente o retrabalho nas áreas operacionais;</p>" +
          "<p>- Aumentar a confiabilidade e rastreabilidade dos dados;</p>" +
          "<p>- Ter ganhos claros de agilidade, governança e segurança.</p>",
      },
      {
        id: "block-3",
        type: "text",
        content:
          "<h3><b>Meu Papel no Projeto</b></h3>" +
          "<p>Atuei como responsável pela criação do blueprint, conduzindo:</p>" +
          "<p>&nbsp;</p>" +
          "<p>- Entrevistas presenciais e remotas com stakeholders e usuários-chave;</p>" +
          "<p>- Análise profunda dos processos atuais e identificação de gargalos;</p>" +
          "<p>- Definição, junto ao PO, das principais oportunidades de transformação;</p>" +
          "<p>- Criação de protótipos iniciais do novo sistema, conectando usabilidade, regras de negócio e viabilidade técnica;</p>" +
          "<p>- Apresentação do blueprint completo para toda a empresa, promovendo alinhamento e engajamento;</p>" +
          "<p>- Condução do discovery detalhado pós-blueprint para criação dos fluxos e telas do MVP;</p>" +
          "<p>- Além do Blueprint criei uma visualização sistêmica dos processos internos. Esse foi um plus a mais que tomei a liberdade para criar e mostrar ao cliente.</p>",
      },
      {
        id: "block-4",
        type: "text",
        content:
          "<h3><b>Processo & Abordagem</b></h3>" +
          "<p>Para garantir um mapeamento preciso, utilizamos:</p>" +
          "<p>&nbsp;</p>" +
          "<p>- Entrevistas estruturadas com as áreas operacionais, comercial, financeira e de tecnologia;</p>" +
          "<p>- Sessões de revisão e validação colaborativa com cada área;</p>" +
          "<p>- Workshops de cocriação com stakeholders para definir o fluxo ideal do novo sistema;</p>" +
          "<p>- Sessões de alinhamento estratégico com a diretoria para validar o direcionamento geral;</p>" +
          "<p>- Documentação e prototipação no Miro e Figma para tangibilizar o blueprint.</p>",
      },
      {
        id: "block-5",
        type: "text",
        content:
          "<h3><b>Decisões Importantes & Trade-offs</b></h3>" +
          "<p>Inicialmente, havíamos definido (eu e PO) com o time da Artesanal que o MVP começaria pelo fluxo de cadastro inicial dos fundos de investimento.</p>" +
          "<p>&nbsp;</p>" +
          "<p>Porém, durante o processo, a diretoria decidiu mudar o recorte do MVP para outra etapa do fluxo, priorizando um ponto que, para eles, teria mais impacto imediato.</p>" +
          "<p>&nbsp;</p>" +
          "<p>Essa mudança exigiu que, em pleno andamento, fizéssemos um novo discovery micro, revendo entrevistas, fluxos e priorizações para adaptar o projeto às novas expectativas, sem perder a consistência do trabalho realizado até ali.</p>" +
          "<p>&nbsp;</p>" +
          "<p>Essa virada foi crucial para garantir que o projeto mantivesse seu valor estratégico, mesmo com mudanças internas.</p>",
      },
      {
        id: "block-6",
        type: "text",
        content:
          "<h3><b>Resultados</b></h3>" +
          "<p>Apesar de termos concluído com sucesso o blueprint, o projeto não avançou para as fases seguintes por motivos internos da Artesanal, como mudança de prioridades e reestruturação.</p>" +
          "<p>&nbsp;</p>" +
          "<p>Ainda assim, o projeto teve impactos importantes durante o processo:</p>" +
          "<p>&nbsp;</p>" +
          "<p>- Trouxe visibilidade inédita sobre ineficiências operacionais;</p>" +
          "<p>- Gerou conversas internas que antes não ocorriam entre as áreas;</p>" +
          "<p>- Iniciou um movimento de conscientização sobre a necessidade de dados centralizados e processos digitais.</p>" +
          "<p>&nbsp;</p>" +
          "<p>O blueprint e o discovery detalhado ficaram como referência interna para futuras iniciativas de digitalização.</p>",
      },
      {
        id: "block-7",
        type: "text",
        content:
          "<h3><b>Reflexão Pessoal</b></h3>" +
          "<p>Esse foi um dos projetos mais desafiadores da minha carreira, especialmente pelo contexto técnico e pela alta complexidade regulatória do mercado financeiro.</p>" +
          "<p>&nbsp;</p>" +
          "<p>Tive que aprender rapidamente sobre fundos de investimento, regras de compliance e estruturas de dados altamente específicas, além de lidar com um ambiente de alta pressão e mudanças constantes de escopo.</p>" +
          "<p>&nbsp;</p>" +
          "<p>Meu maior aprendizado foi a importância de construir entregas que gerem valor, mesmo quando o projeto não segue até a implementação. Além disso, ficou claro como habilidades de escuta ativa, síntese e adaptação rápida são essenciais em projetos estratégicos e de transformação digital.</p>",
      },
    ],
  },
  {
    id: "vr-beneficios",
    title: "VR Benefícios — Integração de Ecossistemas",
    description:
      "<p>Discovery e MVP de integração de ecossistema de produtos</p>",
    role: "Product Designer",
    duration: "3 meses",
    imageUrl:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
    contentBlocks: [
      {
        id: "block-1",
        type: "text",
        content:
          "<h3><b>Contexto & Desafio</b></h3>" +
          "<p>A VR Benefícios, líder em soluções de benefícios corporativos, adquiriu três grandes empresas (Pontomais, Globall e Audaz) para expandir seu ecossistema de produtos. Com isso, o cliente final — gestores de RH — passaria a ter acesso a um ambiente unificado, reunindo diversas ferramentas para otimizar seu dia a dia.</p>" +
          "<p>&nbsp;</p>" +
          "<p>O principal desafio estava na complexidade dessa integração: plataformas distintas, tecnologias diferentes, fluxos pouco conectados e perfis variados de clientes. Nosso foco foi mapear essas dores e criar um MVP funcional para validar o conceito de ecossistema integrado.</p>",
      },
      {
        id: "block-2",
        type: "text",
        content:
          "<h3><b>Objetivo & Sucesso Esperado</b></h3>" +
          "<p>Com um prazo de 3 meses, nosso objetivo foi realizar um discovery completo, mapear as jornadas dos usuários nas diferentes plataformas, identificar oportunidades e desenvolver um MVP navegável para validação durante a feira CONARH 2022.</p>" +
          "<p>&nbsp;</p>" +
          "<p>O sucesso esperado era validar o MVP com clientes durante a feira e, a partir dos aprendizados, estruturar o roadmap para o desenvolvimento completo da plataforma integrada.</p>",
      },
      {
        id: "block-3",
        type: "text",
        content:
          "<h3><b>Meu Papel no Projeto</b></h3>" +
          "<p>Como designer de produto, atuei principalmente na frente de pesquisa e validação:</p>" +
          "<p>&nbsp;</p>" +
          "<p>- Condução de entrevistas com usuários e stakeholders das diferentes plataformas para entender necessidades e dores;</p>" +
          "<p>- Consolidação dos aprendizados e definição das jornadas de usuário;</p>" +
          "<p>- Mapeamento dos desafios técnicos relacionados às integrações e sistemas legados;</p>" +
          "<p>- Participação ativa na criação de fluxos e componentes do MVP, em co-criação com outro designer do time;</p>" +
          "<p>- Planejamento e condução de testes de usabilidade com clientes, além da seleção e agendamento dos participantes;</p>" +
          "<p>- Apoio nas decisões de priorização das entregas junto ao time e stakeholders.</p>",
      },
      {
        id: "block-4",
        type: "text",
        content:
          "<h3><b>Processo & Abordagem</b></h3>" +
          "<p>- Discovery intenso com entrevistas, benchmarks e validação de fluxos;</p>" +
          "<p>- Testes de usabilidade remotos para validar o protótipo do MVP;</p>" +
          "<p>- Co-criação com áreas de tecnologia, arquitetura e design para definir prioridades;</p>" +
          "<p>- Participação em cerimônias ágeis (daily, planning, review e refinamento);</p>" +
          "<p>- Alinhamento frequente com o diretor de novos negócios e outras lideranças para garantir foco nas regras de negócio.</p>",
      },
      {
        id: "block-5",
        type: "text",
        content:
          "<h3><b>Decisões Importantes & Trade-offs</b></h3>" +
          "<p>Após o mapeamento dos sistemas, tomamos uma decisão crucial: simplificar ao máximo o MVP para viabilizar a entrega no prazo. Optamos por criar um dashboard central, integrando inicialmente apenas as funcionalidades da própria VR, deixando as integrações mais complexas para etapas futuras.</p>" +
          "<p>&nbsp;</p>" +
          "<p>Essa decisão exigiu o redesenho do MVP e revalidações rápidas, mas foi fundamental para garantir uma entrega funcional e viável no curto prazo.</p>",
      },
      {
        id: "block-6",
        type: "text",
        content:
          "<h3><b>Resultados (Impacto)</b></h3>" +
          "<p>Entregamos o MVP a tempo para a validação na CONARH 2022, onde o projeto recebeu feedbacks positivos por endereçar dores importantes dos clientes.</p>" +
          "<p>&nbsp;</p>" +
          "<p>Apesar das limitações técnicas — como o &quot;super menu&quot; que não atingiu totalmente as expectativas por conta da complexidade das integrações — o MVP serviu como base para a visão futura do ecossistema.</p>" +
          "<p>&nbsp;</p>" +
          "<p>Minha atuação no projeto encerrou-se após a entrega e validação do MVP, então não acompanhei o desenvolvimento posterior.</p>",
      },
      {
        id: "block-7",
        type: "text",
        content:
          "<h3><b>Reflexão Pessoal</b></h3>" +
          "<p>Esse projeto foi um marco importante no meu desenvolvimento como designer, principalmente pelo papel ativo que tive na frente de UX Research. Realizei entrevistas, testes e co-criações em um cenário de alta pressão e com múltiplos entraves técnicos.</p>" +
          "<p>&nbsp;</p>" +
          "<p>Foi também um projeto que demandou forte integração com áreas técnicas e desenvolvimento, além de lidar com ajustes constantes de planejamento e escopo.</p>" +
          "<p>&nbsp;</p>" +
          "<p>Sai com aprendizados sólidos sobre integração de ecossistemas e sobre como estruturar projetos de alta complexidade de forma prática e realista.</p>",
      },
    ],
  },
  {
    id: "gdm-sistema-recomendacao",
    title: "GDM - Sistema de Recomendação de Plantio",
    description:
      "<p>Plataforma digital com sistema de recomendação para otimização de plantio</p>",
    role: "Product Designer",
    duration: "3 meses",
    imageUrl:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
    contentBlocks: [
      {
        id: "block-1",
        type: "text",
        content:
          "<h3><b>Contexto & Desafio</b></h3>" +
          "<p>A GDM (Grupo Don Mario) é uma referência global em genética vegetal, com mais de 40 anos de atuação e presença em cerca de 45% da produção mundial de soja. No Brasil, lidera o mercado de sementes, com aproximadamente 70% de participação.</p>" +
          "<p>&nbsp;</p>" +
          "<p>O desafio era criar uma plataforma digital que integrasse diferentes agentes — vendedores, agricultores e a própria GDM — em um sistema único. O objetivo principal era desenvolver um sistema de recomendação para plantio, capaz de oferecer aos agricultores indicações personalizadas para otimizar a produção, reduzir desperdícios e aumentar a rentabilidade.</p>" +
          "<p>&nbsp;</p>" +
          "<p>Os desafios foram múltiplos:</p>" +
          "<p>&nbsp;</p>" +
          "<p>- Complexidade técnica elevada: integração de dados agrícolas, informações de satélite e tecnologias de sementes;</p>" +
          "<p>- Forte barreira de linguagem, com times mistos entre Brasil e Argentina, demandando comunicação constante em português, espanhol e &quot;portunhol&quot;;</p>" +
          "<p>- Necessidade de lançamento em tempo crítico (entre as safras); caso o prazo não fosse cumprido, o sistema ficaria um ano parado;</p>" +
          "<p>- MVP inicial com escopo mal definido e heranças de decisões anteriores que geraram complexidade adicional.</p>",
      },
      {
        id: "block-2",
        type: "text",
        content:
          "<h3><b>Objetivo & Sucesso Esperado</b></h3>" +
          "<p>O objetivo era claro e desafiador: criar, em três meses, uma plataforma funcional para ser usada por um grupo piloto de vendedores.</p>" +
          "<p>&nbsp;</p>" +
          "<p>O sucesso seria medido pela:</p>" +
          "<p>&nbsp;</p>" +
          "<p>- Entrega da plataforma no prazo;</p>" +
          "<p>- Uso real do sistema por vendedores da GDM durante o ciclo agrícola;</p>" +
          "<p>- Análise dos resultados 45 dias após o início da operação, validando a eficiência do sistema de recomendação.</p>",
      },
      {
        id: "block-3",
        type: "text",
        content:
          "<h3><b>Meu Papel no Projeto</b></h3>" +
          "<p>Entrei no projeto em um momento crítico, com parte do time original já desligada e o MVP em desenvolvimento.</p>" +
          "<p>&nbsp;</p>" +
          "<p>Minhas principais responsabilidades foram:</p>" +
          "<p>&nbsp;</p>" +
          "<p>- Mentoria de uma designer júnior, orientando no processo de redesign;</p>" +
          "<p>- Reavaliar e redesenhar os wireframes criados anteriormente, ajustando-os às necessidades reais de negócio e à viabilidade técnica;</p>" +
          "<p>- Conduzir entrevistas e alinhamentos diários com stakeholders para entender melhor as regras de negócio e validar soluções;</p>" +
          "<p>- Criar protótipos de alta fidelidade para testes e validações rápidas;</p>" +
          "<p>- Alinhar com o time de desenvolvimento as prioridades e viabilidades, garantindo entregas dentro do prazo sem comprometer a experiência;</p>" +
          "<p>- Atuar como um defensor do design, explicando seu valor e importância em um ambiente com pouca maturidade em UX/UI.</p>",
      },
      {
        id: "block-4",
        type: "text",
        content:
          "<h3><b>Processo & Abordagem</b></h3>" +
          "<p>Diante do contexto e da urgência, adotamos uma abordagem extremamente pragmática e colaborativa:</p>" +
          "<p>&nbsp;</p>" +
          "<p>- Cerimônias ágeis diárias (daily, planning, review e refinamento) com participação ativa dos stakeholders;</p>" +
          "<p>- Entrevistas e reuniões frequentes para entendimento de regras de negócio;</p>" +
          "<p>- Validações rápidas e iterativas, com foco em entrega e adaptação;</p>" +
          "<p>- Comunicação intensiva em português e espanhol, com forte atuação para evitar ruídos e desalinhamentos.</p>",
      },
      {
        id: "block-5",
        type: "text",
        content:
          "<h3><b>Decisões Importantes & Trade-offs</b></h3>" +
          "<p><b>Momento-chave: mostrar o valor do design em um ambiente técnico e desconfiado</b></p>" +
          "<p>&nbsp;</p>" +
          "<p>Ao longo do projeto, houve momentos críticos onde precisei atuar fortemente para defender o valor do design e da usabilidade, especialmente nas telas relacionadas ao sistema de recomendação.</p>" +
          "<p>&nbsp;</p>" +
          "<p>Muitas decisões importantes giraram em torno da disposição de informações sensíveis, como dados de sementes e condições agrícolas, que precisavam ser exibidas de forma simples, porém precisa.</p>" +
          "<p>&nbsp;</p>" +
          "<p>Com base na minha experiência, consegui conduzir o time a escolhas de interface que equilibraram complexidade técnica, clareza e usabilidade — sempre dentro do prazo apertado.</p>",
      },
      {
        id: "block-6",
        type: "text",
        content:
          "<h3><b>Resultados (Impacto)</b></h3>" +
          "<p>Apesar dos inúmeros desafios, entregamos a plataforma no prazo, com todos os fluxos e integrações essenciais para o MVP.</p>" +
          "<p>&nbsp;</p>" +
          "<p>Após a entrega, a plataforma entrou em fase de uso real, com coleta de dados programada para acontecer logo após a &quot;safrinha&quot;.</p>" +
          "<p>&nbsp;</p>" +
          "<p>Os principais impactos imediatos foram:</p>" +
          "<p>&nbsp;</p>" +
          "<p>- Criação de um sistema inédito e unificado, mesmo dentro de um MVP;</p>" +
          "<p>- Fortalecimento da cultura de design e UX dentro da GDM, que até então tinha pouca familiaridade com essas práticas;</p>" +
          "<p>- Prova de que projetos complexos podem ser resgatados e entregues com qualidade, mesmo sob pressão.</p>",
      },
      {
        id: "block-7",
        type: "text",
        content:
          "<h3><b>Reflexão Pessoal</b></h3>" +
          "<p>Esse projeto me ensinou, na prática, a importância da resiliência e da adaptação rápida.</p>" +
          "<p>&nbsp;</p>" +
          "<p>Entrei no meio do caminho, com um cenário de baixa maturidade em design, heranças problemáticas do time anterior e um cronograma rígido. Precisei assumir diferentes papéis ao mesmo tempo: mentor, facilitador, designer estratégico e, em alguns momentos, quase mediador cultural.</p>" +
          "<p>&nbsp;</p>" +
          "<p>Aprendi que, mesmo em projetos com altíssima pressão e complexidade, o design pode (e deve) ser um aliado poderoso para simplificar problemas e acelerar decisões — desde que seja bem defendido e alinhado com a realidade do time.</p>",
      },
    ],
  },
  {
    id: "unipac-srm",
    title: "Unipac - Sistema de Relacionamento (SRM)",
    description:
      "<p>Plataforma de SRM para modernização do relacionamento com clientes</p>",
    role: "Product Designer",
    duration: "3 meses",
    imageUrl:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
    contentBlocks: [
      {
        id: "block-1",
        type: "text",
        content:
          "<h3><b>Contexto & Desafio</b></h3>" +
          "<p>A Unipac, braço da Jacto, construtora de máquinas agrícolas, é referência em tecnologias de aplicação de polímeros e uma das indústrias mais completas do Brasil.</p>" +
          "<p>&nbsp;</p>" +
          "<p>Apesar de ser referência em tecnologia, ela tinha baixa maturidade tecnológica nos seus processos internos, com muito uso de planilhas e descentralização de informações e conhecimento.</p>" +
          "<p>&nbsp;</p>" +
          "<p>Com grandes clientes e parceiros de diversos mercados, entre eles, automotivo, agronegócio, logístico, alimentício e veículos elétricos industriais, a Unipac precisava se modernizar em suas relações.</p>" +
          "<p>&nbsp;</p>" +
          "<p>Com um tempo curto de 3 meses e baixo investimento para essa primeira fase, nosso desafio foi entender todo o processo envolvido em sua relação com os clientes e principalmente entender a real necessidade e dores existentes para essa transformação digital, criando e desenvolvendo um sistema único de relacionamento.</p>",
      },
      {
        id: "block-2",
        type: "text",
        content:
          "<h3><b>Objetivo & Sucesso Esperado</b></h3>" +
          "<p>O objetivo do projeto foi criar uma plataforma exclusiva de SRM para que a Unipac pudesse melhorar o seu atendimento junto aos clientes, mostrando alta maturidade tecnológica, com processos transparentes, centralizados e organizados.</p>" +
          "<p>&nbsp;</p>" +
          "<p>Como sucesso estipulamos alguns KPIs, como: tempo gasto anteriormente x com o SRM e engajamento.</p>",
      },
      {
        id: "block-3",
        type: "text",
        content:
          "<h3><b>Meu Papel no Projeto</b></h3>" +
          "<p>Como designer principal no projeto, recolhi informações já existentes anteriormente feitas pelo time comercial e time de design da levva, como entendimento das dores reais e necessidades, criando algumas telas para validação junto ao time Unipac.</p>" +
          "<p>&nbsp;</p>" +
          "<p>Fiz entrevistas com stakeholders e usuários internos para aprovação de fluxos e melhorias na ferramenta que estava sendo desenvolvida.</p>" +
          "<p>&nbsp;</p>" +
          "<p>Como o tempo era curto alinhei com o time de desenvolvimento o tipo de framework para desenvolvimento e agilidade na criação de componentes. Esse alinhamento foi importantíssimo para que o projeto fosse desenvolvido no tempo exato estipulado no início (3 meses).</p>" +
          "<p>&nbsp;</p>" +
          "<p>Ajudei em decisões de prioridade junto ao time de stakeholders e desenvolvimento, alinhando usabilidade, regras de negócio e viabilidade. Essas decisões foram, novamente, essenciais para que o prazo do projeto fosse seguido.</p>" +
          "<p>&nbsp;</p>" +
          "<p>Tive conversas de alinhamento com o Diretor executivo de tecnologia da Unipac em vários momentos, trazendo nossos desafios e soluções. Ouvindo sua opinião para juntos decidir alguns caminhos que deveriam ser seguidos.</p>",
      },
      {
        id: "block-4",
        type: "text",
        content:
          "<h3><b>Processo & Abordagem</b></h3>" +
          "<p>Para entendimento das dores e necessidades, durante um mês, fizemos entrevistas com stakeholders, usuários internos que fazem parte do processo de atendimento ao cliente, produção e transformação dos polímeros e time de TI da Unipac.</p>" +
          "<p>&nbsp;</p>" +
          "<p>Durante esse mês o time de design aqui da levva fez uma dinâmica para definição de prioridades das features necessárias, desenhando um wireframe para melhor entendimento junto ao cliente das necessidades.</p>" +
          "<p>&nbsp;</p>" +
          "<p>Foram encontros presenciais dentro da Unipac para essas abordagens, onde conseguimos estreitar as relações entre os times.</p>" +
          "<p>&nbsp;</p>" +
          "<p>Durante os três meses, seguimos os ritos do Agile, com daily, review junto ao cliente, refinamentos e plannings.</p>",
      },
      {
        id: "block-5",
        type: "text",
        content:
          "<h3><b>Decisões Importantes & Trade-offs</b></h3>" +
          "<p>Como inicialmente, sem o refinamento das histórias, já havia sido definido um MVP, tive que tomar algumas decisões junto ao time e stakeholder para um novo recorte desse MVP, pois como o tempo era curto precisávamos enxugar mais algumas coisas.</p>" +
          "<p>&nbsp;</p>" +
          "<p>Conversei diretamente com o Diretor executivo, após conversa com o time de desenvolvimento, para entender onde iria gerar mais valor para a primeira entrega. Tivemos que novamente fazer outro recorte.</p>" +
          "<p>&nbsp;</p>" +
          "<p>Em outro momento, onde não tinha sido feito o refinamento, em conversas com usuários do time de project & quality da Unipac, tivemos que fazer um novo entendimento das dores reais e necessidades para o redesign da esteira de qualidade dos projetos. Tivemos que enxugar um pouco mais o processo para caber dentro do MVP, com as regras de negócio, usabilidade e viabilidade, trazendo valor para o time de projetos.</p>",
      },
      {
        id: "block-6",
        type: "text",
        content:
          "<h3><b>Resultados</b></h3>" +
          "<p>Em três meses, primeira fase, criamos e desenvolvemos um SRM para teste com um único cliente, onde a Unipac poderia criar usuários, criar um processo de criação de projeto, definir metas, ver o andamento de processos e uma área de relacionamento de ticket quality.</p>" +
          "<p>&nbsp;</p>" +
          "<p>Conseguimos centralizar as novas informações em um único lugar, diminuímos os processos que antes eram manuais para o digital.</p>" +
          "<p>&nbsp;</p>" +
          "<p>Recebemos elogios pelo trabalho, mas não conseguimos continuar com as outras fases por questões de verbas e prioridade do cliente. Dessa maneira não tivemos a oportunidade de rever nossas métricas e KPIs.</p>",
      },
      {
        id: "block-7",
        type: "text",
        content:
          "<h3><b>Reflexão Pessoal</b></h3>" +
          "<p>Foi meu primeiro projeto dentro da levva, fui contratado para dar continuidade a ele. Um desafio muito grande porque a expectativa era enorme com a minha contratação. Momento de conhecer as pessoas, criar vínculos e confiança dentro da empresa.</p>" +
          "<p>&nbsp;</p>" +
          "<p>O projeto foi muito legal, como fazia um tempo que não colocava a mão na massa, na CI&T eu estava mais focado na estratégia, &quot;reaprendi&quot; a usar um design system e organização. No final deu tudo certo, com feedback de todos de um ótimo trabalho e mostrou para mim meu potencial em se adaptar a qualquer situação.</p>",
      },
    ],
  },
  {
    id: "janssenpro-latam",
    title: "JanssenPro - Plataforma LATAM",
    description:
      "<p>Plataforma unificada para médicos com acesso a pesquisas e medicamentos</p>",
    role: "Product Designer",
    duration: "1 ano e 6 meses",
    imageUrl:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
    contentBlocks: [
      {
        id: "block-1",
        type: "text",
        content:
          "<h3><b>Contexto & Desafio</b></h3>" +
          "<p>A JanssenPro, braço médico e de pesquisa da J&J, precisava criar uma plataforma única para LATAM, onde os médicos pudessem ter acesso às pesquisas e remédios desenvolvidos pela J&J. Na época, a JanssenPro tinha um site em cada país da América do Sul e da América do Norte.</p>" +
          "<p>&nbsp;</p>" +
          "<p>A maioria dos médicos associados não utilizavam o site existente por falta de informação, por ser confuso, muito descentralizado e pouca confiança nos dados. Preferiam utilizar outras plataformas existentes apesar do esforço ser maior.</p>",
      },
      {
        id: "block-2",
        type: "text",
        content:
          "<h3><b>Objetivo & Sucesso Esperado</b></h3>" +
          "<p>Nosso objetivo no projeto era mapear todas as dores e necessidades dos stakeholders e key users (médicos).</p>" +
          "<p>&nbsp;</p>" +
          "<p>Criar uma plataforma completa com segmentação por áreas de estudos, centralizar todas as informações existentes num único lugar.</p>" +
          "<p>&nbsp;</p>" +
          "<p>Aumentar em 20% a criação de contas na plataforma.</p>" +
          "<p>&nbsp;</p>" +
          "<p>Aumentar em 60% o engajamento com os médicos associados.</p>" +
          "<p>&nbsp;</p>" +
          "<p>Criar uma plataforma muito focada na usabilidade e trazer confiança nos dados inseridos.</p>",
      },
      {
        id: "block-3",
        type: "text",
        content:
          "<h3><b>Meu Papel no Projeto</b></h3>" +
          "<p>Criação e moderação de uma dinâmica em inglês para mais de 20 pessoas da América Latina.</p>" +
          "<p>&nbsp;</p>" +
          "<p>Meu papel como UX designer foi criar as telas em co-criação com outro designer.</p>" +
          "<p>&nbsp;</p>" +
          "<p>Fazer entrevistas com médicos e stakeholders.</p>" +
          "<p>&nbsp;</p>" +
          "<p>Dinâmicas de design review com médicos e stakeholders.</p>" +
          "<p>&nbsp;</p>" +
          "<p>Elaborar fluxos de usabilidade para a plataforma.</p>" +
          "<p>&nbsp;</p>" +
          "<p>Criação da biblioteca de informações dentro do site.</p>" +
          "<p>&nbsp;</p>" +
          "<p>Entender as regras de negócio para alinhar usabilidade.</p>" +
          "<p>&nbsp;</p>" +
          "<p>Alinhar com o time de desenvolvimento a viabilidade das features.</p>" +
          "<p>&nbsp;</p>" +
          "<p>Consolidar as informações das entrevistas.</p>",
      },
      {
        id: "block-4",
        type: "text",
        content:
          "<h3><b>Processo & Abordagem</b></h3>" +
          "<p>Dinâmica de long term goal para alinhamento de expectativas com os stakeholders.</p>" +
          "<p>&nbsp;</p>" +
          "<p>Entrevistas diárias e semanais com médicos.</p>" +
          "<p>&nbsp;</p>" +
          "<p>Validação das etapas e design com médicos e stakeholders. Cerimônias ágeis (daily, planning, review e refinamento) com participação ativa do cliente, garantindo ritmo constante nas entregas.</p>" +
          "<p>&nbsp;</p>" +
          "<p>Benchmark dos sites consultados por outros médicos.</p>" +
          "<p>&nbsp;</p>" +
          "<p>Design review de telas e fluxos para validação.</p>",
      },
      {
        id: "block-5",
        type: "text",
        content:
          "<h3><b>Decisões Importantes & Trade-offs</b></h3>" +
          "<p>O trade-off desse projeto foi o maior que já passei na vida. Quando me contrataram para o projeto meu objetivo era redesenhar uma landing page criada por uma agência europeia. Após a minha dinâmica de entendimento do long term goal, chegaram à conclusão que deveriam criar toda uma plataforma para LATAM. O projeto nesse momento se tornou enorme.</p>" +
          "<p>&nbsp;</p>" +
          "<p>Com todo o estudo em mãos, consolidados e feedback de médicos, tomei a decisão de mudar a disposição da arquitetura da informação na home, dando mais ênfase nas áreas médicas do que no conteúdo em si, e dentro de cada área médica o conteúdo específico.</p>" +
          "<p>&nbsp;</p>" +
          "<p>Trouxe a ideia de trazer conteúdos que não tinham proteção para a home não logada, para aguçar a curiosidade e engajamento de novos médicos. Aumentando assim o número de contas criadas.</p>",
      },
      {
        id: "block-6",
        type: "text",
        content:
          "<h3><b>Resultados (Impacto)</b></h3>" +
          "<p>Depois de 1 ano e 6 meses no projeto, fui promovido para designer sênior e fui designado para outro projeto.</p>" +
          "<p>&nbsp;</p>" +
          "<p>Um MVP foi desenvolvido.</p>" +
          "<p>&nbsp;</p>" +
          "<p>Aumentaram em muito o número de criação de contas e retenção.</p>" +
          "<p>&nbsp;</p>" +
          "<p>Unificaram as plataformas LATAM.</p>",
      },
      {
        id: "block-7",
        type: "text",
        content:
          "<h3><b>Reflexão Pessoal</b></h3>" +
          "<p>Acho que foi meu momento mais desafiador. Entrei para o projeto com o objetivo de redesenhar uma tela. Me colocaram numa sala com mais de 20 médicos de LATAM para fazer uma dinâmica. Fiz a dinâmica em inglês e saímos dela com um projeto novo e muito maior do que o inicial.</p>" +
          "<p>&nbsp;</p>" +
          "<p>Só me mostrou a minha capacidade de atuar em cenários desafiadores, com alta pressão de resultados.</p>",
      },
    ],
  },
];
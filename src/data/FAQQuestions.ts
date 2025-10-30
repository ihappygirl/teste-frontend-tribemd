export interface FAQItem {
    id: number;
    question: string;
    answer: string[];
    image?: string | null;
}

export const FAQS: FAQItem[] = [
    {
        id: 1,
        question: "Como fazer a migração de dados do atual sistema, para o BIPP Assistant?",
        answer: [
            "Passo 1: Solicite os arquivos de exportação - Entre em contato com o administrador do sistema atual para solicitar os arquivos de exportação. Esses arquivos devem incluir uma planilha com o cadastro dos pacientes e quaisquer outros arquivos relacionados. Alguns sistemas (iClinic) permitem que você exporte seus dados diretamente da plataforma.",
            "Passo 2: Envie os arquivos para a equipe de suporte do BIPP Assistant - Após receber os arquivos de exportação, envie-os para o email suporte@bippassistant.com.br, incluindo seu nome completo e o nome do sistema utilizado anteriormente. A nossa equipe técnica será responsável por importar os dados e informá-los quando a migração estiver concluída.",
            "A importação é realizada para assinantes do plano."    
        ]
    },
    {
        id: 2,
        question: "O aplicativo pode ser usado para gerenciar uma clínica com vários usuários?",
        answer: [
            "O aplicativo pode ser usado para gerenciar uma clínica com vários usuários? Sim! Segue abaixo os usuários disponíveis em nosso sistema para uma clínica",
            "• Responsável técnico — De acordo CFM, a clínica deve ter um responsável técnico que deve ser médico. Esse usuário possui acesso a todas informações do sistema, inclusive funções de médico.",
            "• Médico(s) — Realiza todas as funções do prontuário.",
            "• Profissional de Saúde 'Não Médico' — Psicólogo ou outro profissional.",
            "• Secretária(o) (Sem custo) — Realiza cadastro de pacientes; faz agendamentos; funções financeiras; customiza horários de funcionamento da clínica.",
            "• Administrador de Clínica (Sem custo) — Cadastrar médicos e secretárias(os) no sistema, e gerenciar a Clínica. Tem acesso a todas as informações, exceto informações particulares de pacientes conforme a LGPD",
            "• Contador (Sem custo) — O contador vai ter apenas acesso a parte financeira para auxílio na contabilidade da clínica."
        ]
    },
    {
        id: 3,
        question: "Como fazer pesquisas de Medicamentos",
        answer: [
            "O Bipp Assistant possui um extenso banco de dados de medicamentos na área psiquiátrica. Esse banco de dados abrange todas as especificações necessárias, incluindo informações sobre interações medicamentosas."
        ]
    },
    {
        id: 4,
        question: "Quais os cursos do BIPP ASSISTANT estão disponíveis gratuitamente para a classe médica?",
        answer: [
            "Estão disponíveis gratuitamente para todos os médicos cadastrados na plataforma BIPP Assistant o conteúdo do BIPP Standard. Além disso:",
            "• Atualizações diárias;",
            "• BIPP Pills;",
            "• Flashcards;",
            "• Artigos científicos."
        ]
    },
    {
        id: 5,
        question: "O sistema possui telemedicina integrada?",
        answer: [
            "É com satisfação que informamos que nosso sistema já conta com uma plataforma própria de teleconsulta, a qual está disponível sem custo adicional e sem limites de uso.",
            "É importante destacar que nossa solução de teleconsulta está em total conformidade com as regulamentações do Conselho Regional de Medicina (CRM) relacionadas à telemedicina. Priorizamos a adesão rigorosa às normas estabelecidas para garantir a qualidade e a segurança dos serviços oferecidos.",
        ]
    },
    {
        id: 6,
        question: "Quais são as políticas de cancelamento?",
        answer: [
            "Planos pagos – “Essencial” e “Completo” – possuem prazo mínimo de 12 (doze) meses de carência. O pagamento dos planos pagos pode ser realizado de duas formas: mensal (com validade mensal) ou anual (com validade de 12 meses). Caso o USUÁRIO opte por cancelar antes destes 12 (doze) meses, tanto no plano com pagamento mensal quanto anual, o USUÁRIO pagará uma multa equivalente a duas parcelas do plano mensal completo, baseando-se no valor da mensalidade que estiver em vigor no momento do cancelamento.",
            "Certificado Digital – Caso o usuário tenha adquirido o certificado digital SafeID, esse ficará na posse do USUÁRIO pelo período de 12 meses (a contar da data de criação), e havendo interesse em renovação, o cliente deverá entrar em contato direto com a certificadora Safeweb."
        ]
    },
    {
        id: 7,
        question: "O sistema possui aplicativo para celular?",
        answer: [
            "Fico feliz em informar que sim, temos um aplicativo disponível para Android e também é possível instalar o BIPP Assistant no sistema IOS. Além disso, você também pode utilizar a plataforma diretamente pelo navegador, sendo o Google Chrome a nossa recomendação. Segue abaixo o link para download do aplicativo para Android e IOS. Se tiver alguma dúvida ou precisar de mais ajuda, por favor, não hesite em me contatar.",
            "ANDROID",
            "INSTALANDO EM SEU IOS(Apple)"
        ]
    },
    {
        id: 8,
        question: "O BIPP Assistant fornece segurança das minhas informações?",
        answer: [
            "Gostaríamos de esclarecer que a segurança dos dados armazenados em nossos servidores é inteiramente responsabilidade da BIPP Assistant. Contamos com medidas de segurança avançadas para garantir a integridade e a confidencialidade das informações de nossos clientes.",
            "Além disso, informamos que não há possibilidade de perda de dados em nossa plataforma. Contamos com sistemas de backup e redundância de dados para garantir que todas as informações inseridas em nosso sistema sejam armazenadas de forma segura e permanente.",
            "Caso você tenha alguma dúvida ou precise de mais informações sobre a segurança dos dados em nossa plataforma, não hesite em entrar em contato conosco. Estamos sempre disponíveis para esclarecer qualquer questão relacionada aos nossos serviços.",
            "Agradecemos por escolher a BIPP Assistant como seu prontuário eletrônico para a área de saúde mental e nos colocamos à disposição para ajudá-la no que for necessário."
        ]
    },
    {
        id: 9,
        question: 'Como funciona o "Backup" e a segurança dos meus dados?',
        answer: [
            "O sistema de backup do BIPP Assistant foi desenvolvido para garantir a segurança total dos dados armazenados em nossos servidores. Para isso, contamos com uma empresa especializada em segurança, que realiza backups semanais e garante que todas as informações sejam armazenadas de forma segura e acessível em caso de necessidade de restauração. Esta empresa é especialista no serviço e reconhecida a nível mundial.",
            "Além disso, possuímos um backup próprio como segunda via de segurança, que é acionado apenas em casos extremamente raros, como desastres naturais, incêndios ou outras situações de emergência que possam comprometer a integridade dos nossos sistemas.",
            "Nosso sistema de backup é altamente confiável e utiliza tecnologias de ponta para garantir a integridade dos dados, incluindo criptografia, armazenamento em nuvem e procedimentos rigorosos de segurança. Dessa forma, nossos clientes podem ter a tranquilidade de saber que seus dados estão seguros e protegidos em caso de qualquer imprevisto."
        ]
    },
    {
        id: 10,
        question: "Mensagem automáticas de lembrete de consulta o que é?",
        answer: [
            "Trata-se de um recurso que permite o envio automatizado de diversos tipos de mensagens via WhatsApp e/ou e-mail, utilizando um número de telefone virtual vinculado ao nosso sistema.",
            "As mensagens automáticas têm como objetivo principal o envio de lembretes de consultas. No momento do agendamento, o sistema envia uma mensagem instantânea para lembrar o paciente da consulta marcada. Além disso, também é enviada uma mensagem de lembrete 24 horas antes do horário agendado. Essas mensagens são enviadas de forma completamente automática, não exigindo qualquer intervenção manual.",
            "Esse recurso garante a praticidade e a eficiência na comunicação com os pacientes, ajudando a reduzir o número de faltas e a otimizar o fluxo de atendimento. Com as mensagens automáticas, você não precisa se preocupar em realizar cliques ou enviar lembretes manualmente, pois nosso sistema cuida disso de maneira automatizada.",
            "Estamos à disposição para fornecer mais informações sobre como as mensagens automáticas podem beneficiar a sua clínica ou consultório. Não hesite em entrar em contato caso tenha alguma dúvida adicional."
        ]
    },
    {
        id: 11,
        question: "Como faço a assinatura do plano pago?",
        answer: [
            "Caso já tenha seu cadastro:",
            "Acesse o sistema e siga os passos da interface para assinatura."
        ],
        image: "https://assist.tribemd.com/wp-content/uploads/2024/09/bipp-assistant-assinatura-1024x685.webp"
    }
];
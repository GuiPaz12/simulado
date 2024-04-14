// Mock das questões
const questions = [
    {
        question: "Qual é o objetivo principal do Estatuto do Magistério?",
        options: ["Proporcionar qualidade de ensino", "Regular a carreira dos professores", "Promover a educação nacional democrática"],
        answer: "Proporcionar qualidade de ensino"
    },
    {
        question: "Quais são os princípios e diretrizes do Magistério Público Municipal?",
        options: ["Gestão do Sistema Educacional", "Resultados da educação escolar", "Aperfeiçoamento profissional"],
        answer: "Gestão do Sistema Educacional"
    },
    // Adicionando mais questões
    {
        question: "Qual é a carga horária semanal para um Professor II com regência em turmas do primeiro segmento do Ensino Fundamental?",
        options: ["20 horas", "25 horas", "30 horas"],
        answer: "20 horas"
    },
    {
        question: "Quais são os direitos especiais dos membros do Magistério de acordo com o Estatuto?",
        options: ["Liberdade na escolha do processo didático", "Participação em cursos de aperfeiçoamento", "Assistir o cônjuge em caso de doença"],
        answer: "Liberdade na escolha do processo didático"
    },
    {
        question: "Quais são os deveres especiais dos servidores do Magistério?",
        options: ["Participar das atividades de educação no Município", "Alterar o horário de trabalho sem autorização", "Sair com os alunos para manifestações sem autorização"],
        answer: "Participar das atividades de educação no Município"
    },
    // Adicione mais questões aqui
];



const main = document.querySelector('main');
const submitBtn = document.getElementById('submitBtn');

// Função para renderizar as questões na página
function renderQuestions() {
    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        
        const questionTitle = document.createElement('h2');
        questionTitle.textContent = `Questão ${index + 1}: ${q.question}`;
        questionDiv.appendChild(questionTitle);
        
        const optionsList = document.createElement('ul');
        optionsList.classList.add('options');
        
        q.options.forEach(option => {
            const optionItem = document.createElement('li');
            const optionInput = document.createElement('input');
            optionInput.type = 'radio';
            optionInput.name = `question${index}`;
            optionInput.value = option;
            const optionLabel = document.createElement('label');
            optionLabel.textContent = option;
            optionLabel.prepend(optionInput);
            optionItem.appendChild(optionLabel);
            optionsList.appendChild(optionItem);
        });
        
        questionDiv.appendChild(optionsList);
        main.appendChild(questionDiv);
    });
}

renderQuestions();

// Função para verificar respostas ao clicar no botão de enviar
submitBtn.addEventListener('click', () => {
    let score = 0;
    questions.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption) {
            if (selectedOption.value === q.answer) {
                score++;
            }
        }
    });
    alert(`Você acertou ${score} de ${questions.length} questões.`);
});

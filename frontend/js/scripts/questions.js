import { buildQuestions } from '/js/math/Builders.js'

// Função para extrair os dados da configuração de questões
function getQuestionsConfig() {
    let i = 1;
    let questionsConfigList = [];

    while (true) {
        let themeSelect = document.getElementById(`theme-${i}`);
        let styleSelect = document.getElementById(`style-${i}`);

        if ((!themeSelect) || (!styleSelect)) {
            break;
        }

        let qTheme = themeSelect.options[themeSelect.selectedIndex].value;
        let qStyle = styleSelect.options[styleSelect.selectedIndex].value;

        if (!["firstDet", "pythagoras", "sin", "cos", "tan", "radToDeg", "degToRad", "pythagoreanIdentity"].includes(qTheme)) {
            i++;
            continue;
        }
        if (!['D', 'O'].includes(qStyle)) {
            i++;
            continue;
        }

        let question = {
            theme: qTheme,
            style: qStyle
        }

        questionsConfigList.push(question);
        i++;
    }

    return questionsConfigList;
}

// Função para extrair dados dos questões geradas
function getQuestions() {
    let list = [];
    let el;
    let i = 1;
    while (true) {
        el = document.getElementById(`question-${i}`);
        if (el === null) {
            break;
        }

        const theme = document.getElementById(`question-${i}-theme`).textContent;
        const context = document.getElementById(`question-${i}-context`).textContent;
        const alternatives = document.getElementById(`question-${i}-alternatives`);

        let data = {
            theme: theme,
            context: context,
            hasAlternatives: Boolean(alternatives),
            answers: !Boolean(alternatives) ? [] : [
                document.getElementById(`question-${i}-answer-a`).textContent,
                document.getElementById(`question-${i}-answer-b`).textContent,
                document.getElementById(`question-${i}-answer-c`).textContent,
                document.getElementById(`question-${i}-answer-d`).textContent
            ]
        };

        list.push(data);
        i++;
    }

    return list;
}

// Função para gerar as opções de questão
function renderOptions(count) {
    const container = document.getElementById("questions-container");
    container.innerHTML = "";

    for (let i = 1; i <= count; i++) {
        const div = document.createElement("div");
        div.className = "bg-base-100 rounded-lg p-4 flex justify-between items-center shadow-md";
        div.innerHTML = `
            <span class="font-semibold text-base-content">QUESTÃO ${i}</span>
            <div class="flex gap-2">
                <select
                        class="select bg-base-200 text-base-content cursor-pointer w-full max-w-xs rounded-lg focus:ring-indigo-500 outline-none"
                        id="theme-${i}">
                    <option value="firstDet">Primeira Determinação</option>
                    <option value="pythagoras">Teorema de Pitágoras</option>
                    <option value="sin">Seno</option>
                    <option value="cos">Cosseno</option>
                    <option value="tan">Tangente</option>
                    <option value="radToDeg">Conversão de Radianos para Graus</option>
                    <option value="degToRad">Conversão de Graus para Radianos</option>
                    <option value="pythagoreanIdentity">Relação Geral da Trigonometria</option>
                </select>
                <select
                        class="select bg-base-200 text-base-content cursor-pointer px-3 py-1 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                        id="style-${i}">
                    <option value="D">Demonstrativa</option>
                    <option value="O">Objetiva</option>
                </select>
            </div>
        `;


        container.appendChild(div);
    }
}

// Função para renderizar as questões
function renderQuestions(questions, container_id) {
    const container = document.getElementById(container_id);
    container.innerHTML = "";

    for (let i = 1; i <= questions.length; i++) {
        let q = questions[i - 1];

        let newQuestion = document.createElement("div");
        newQuestion.className = "bg-base-100 rounded-lg p-6 mb-4 shadow-md";
        newQuestion.id = `question-${i}`
        newQuestion.innerHTML = `
            <h3 class="font-bold text-base-content text-lg mb-3" id="question-${i}-theme">Questão ${i} - ${q.theme}</h3>
            <p class="text-base-content font-semibold"">
                <span id="question-${i}-context">${q.context}</span>
                ${q.hasAlternatives ? `
                <div id="question-${i}-alternatives">
                <br><b class="text-base-content">a)</b> <span id="question-${i}-answer-a">${q.answers[0]}</span>
                <br><b class="text-base-content">b)</b> <span id="question-${i}-answer-b">${q.answers[1]}</span>
                <br><b class="text-base-content">c)</b> <span id="question-${i}-answer-c">${q.answers[2]}</span>
                <br><b class="text-base-content">d)</b> <span id="question-${i}-answer-d">${q.answers[3]}</span>
                </div>
                ` : `
                <br><br>
                <div class='mt-3 p-3 bg-base-200 rounded text-base-content italic'>
                    Espaço para resposta demonstrativa
                </div>
                `}
            </p>
        `;

        container.append(newQuestion);
    }
}

// Eventos
document.getElementById("btn-renderOptions").addEventListener("click", function () {
    renderOptions(document.getElementById('in-count').value);
});
document.getElementById("btn-renderQuestions").addEventListener("click", function () {
    let questionsConfigList = getQuestionsConfig();
    let questions = buildQuestions(questionsConfigList);

    renderQuestions(questions, "questions-list");
    document.getElementById("mdl_questionsList").showModal();
});
document.getElementById("btn-print").addEventListener("click", function () {
    const questions = getQuestions();

    fetch("http://localhost/api-pdf/main.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(questions)
    })
    .then(response => {
        if (!response.ok) {
          throw new Error("Erro ao gerar o PDF");
        }
        return response.blob();
    })
    .then(blob => {
        const url = window.URL.createObjectURL(blob);
        window.open(url, "_blank");
    })
    .catch(err => {
        alert("Erro: " + err.message);
    });
});
document.getElementById("btn-closeModal").addEventListener("click", function () {
    document.getElementById('mdl_questionsList').close();
});
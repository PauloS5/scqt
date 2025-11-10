// Função para gerar as opções de questão
export function renderOptions(count) {
    const container = document.getElementById("questions-container");
    container.innerHTML = "";

    for (let i = 1; i <= count; i++) {
        const div = document.createElement("div");
        div.className = "bg-gray-50 border border-gray-300 rounded-lg p-4 flex justify-between items-center";

        div.innerHTML = `
            <span class="font-semibold text-gray-900">QUESTÃO ${i}</span>
            <div class="flex gap-2">
                <select
                    class="bg-white border border-gray-300 text-gray-900 cursor-pointer px-3 py-1 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                    id="theme-${i}">
                    <option value="primeiraDet">Primeira Determinação</option>
                    <option value="pitagoras">Teorema de Pitágoras</option>
                    <option value="relacaoTrig">Relação Trigonométrica</option>
                </select>
                <select
                    class="bg-white border border-gray-300 text-gray-900 cursor-pointer px-3 py-1 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                    id="style-${i}">
                    <option value="style1">Demonstrativa</option>
                    <option value="style2">Objetiva</option>
                </select>
            </div>
        `;

        container.appendChild(div);
    }
}

// Função para renderizar as questões
export function renderQuestions(questions, container_id) {
    const container = document.getElementById(container_id);
    container.innerHTML = "";

    for (let i = 1; i <= questions.length; i++) {
        let q = questions[i - 1];

        let newQuestion = document.createElement("div");
        newQuestion.className = "bg-white border border-indigo-200 rounded-lg p-6 mb-4 shadow-sm";
        newQuestion.innerHTML = `
            <h3 class="font-bold text-gray-900 text-lg mb-3">Questão ${q.number} - ${q.theme}</h3>
            <p class="text-gray-800 font-semibold">
                ${q.context}
                ${q.hasAlternatives ? `
                    <br><br><b class="text-gray-900">a)</b> ${q.answers[0]}
                    <br><b class="text-gray-900">b)</b> ${q.answers[1]}
                    <br><b class="text-gray-900">c)</b> ${q.answers[2]}
                    <br><b class="text-gray-900">d)</b> ${q.answers[3]}
                `: "<br><br><div class='mt-3 p-3 bg-gray-50 border border-gray-300 rounded text-gray-600 italic'>Espaço para resposta dissertativa</div>"}
            </p>
        `;

        container.append(newQuestion);
    }
}
// Renderers.js - função robusta para gerar as questões
function renderOptions(count) {
    const container = document.getElementById("questions-container");

    container.innerHTML = "";

    for (let i = 1; i <= count; i++) {
        const div = document.createElement("div");
        div.className = "text-white flex justify-between items-center";

        div.innerHTML = `
            <span class="font-semibold">QUESTÃO ${i}</span>
            <div>
                <select
                    class="bg-slate-800 hover:bg-slate-700 text-white cursor-pointer mt-2 p-1 rounded mx-2"
                    id="theme-${i}">

                    <option value="theme1">Primeira Determinação</option>
                    <option value="theme2">Teorema de Pitágoras</option>
                    <option value="theme3">Relação Trigométrica</option>
                </select>
                <select
                    class="bg-slate-800 hover:bg-slate-700 text-white cursor-pointer mt-2 p-1 rounded mx-2"
                    id="style-${i}">

                    <option value="style1">Demonstrativa</option>
                    <option value="style2">Objetiva</option>
                </select>
            <div>
        `;

        container.appendChild(div);
    }
}

// Função para renderizar as questões
export function renderQuestions(questions, container_id) {
    const container = document.getElementById(container_id);

    for (let i = 1; i <= questions.length; i++) {
        let q = questions[i-1];

        let newQuestion = document.createElement("div");
        newQuestion.innerHTML = `
            <h3 class="font-semibold">Questão ${q.number} - ${q.theme}</h3>
            <p>
                ${q.context}
                ${q.hasAlternatives ? `
                    <br>
                    <b>a)</b> ${q.answers[0]} <br>
                    <b>b)</b> ${q.answers[1]} <br>
                    <b>c)</b> ${q.answers[2]} <br>
                    <b>d)</b> ${q.answers[3]} <br>
                `:"<br><br><br><br><br>"}
            </p>
            <hr>
        `;

        container.append(newQuestion);
    }
}
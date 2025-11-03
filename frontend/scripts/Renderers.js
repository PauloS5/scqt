// Renderers.js - função robusta para gerar as questões
function renderOptions(count) {
    const container = document.getElementById("questions-container");

    container.innerHTML = "";

    for (let i = 1; i <= count; i++) {
        const div = document.createElement("div");
        div.className = "text-white";

        div.innerHTML = `
            <span class="font-semibold">QUESTÃO ${i}</span>
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
        `;

        container.appendChild(div);
    }
}

// Função para renderizar as questões
function renderQuestions(questions) {

}
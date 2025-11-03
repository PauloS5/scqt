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

                <option value="">Assunto</option>
                <option value="A">Assunto A</option>
                <option value="B">Assunto B</option>
                <option value="C">Assunto C</option>
                <option value="D">Assunto D</option>
            </select>
            <select
                class="bg-slate-800 hover:bg-slate-700 text-white cursor-pointer mt-2 p-1 rounded mx-2"
                id="style-${i}">

                <option value="">Estilo</option>
                <option value="A">Estilo A</option>
                <option value="B">Estilo B</option>
                <option value="C">Estilo C</option>
            </select>
        `;

        container.appendChild(div);
    }
}

// Função para renderizar as questões
function renderQuestions(questions) {

}
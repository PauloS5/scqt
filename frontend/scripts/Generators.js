// Função para gerar uma questão para se encontrar a primeira determinação de um ângulo ou quantidade de voltas com base em graus
function generateFirstDetQ() {
    const turnsCount = Math.floor(Math.random() * 10) + 1;
    const firstDet = Math.floor(Math.random() * 360);

    return {
        value: turnsCount + firstDet,
        answers: {
            turnsCount: turnsCount,
            firstDet: firstDet
        }
    };
}
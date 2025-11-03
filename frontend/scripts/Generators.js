// Função para gerar uma questão para se encontrar a primeira determinação de um ângulo
function generateFirstDetQ() {
    const turnsCount = Math.floor(Math.random() * 10) + 1;
    const firstDet = Math.floor(Math.random() * 360);

    return turnsCount + firstDet;
}
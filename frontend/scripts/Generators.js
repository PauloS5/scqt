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

// Função paara gerar uma questão que envolva o teorema de pitágoras
function generatePythagoreanTheoremQ() {
    const pythagoreanValue = [
        {catA: 3,  catB: 4,  hip: 5},
        {catA: 5,  catB: 12, hip: 13},
        {catA: 7,  catB: 24, hip: 25},
        {catA: 8,  catB: 15, hip: 17},
        {catA: 9,  catB: 40, hip: 41},
        {catA: 11, catB: 60, hip: 61},
        {catA: 12, catB: 35, hip: 37},
        {catA: 13, catB: 84, hip: 85},
        {catA: 16, catB: 63, hip: 65},
        {catA: 20, catB: 21, hip: 29}
    ];

    let multiplier = Math.floor(Math.random() * 10) + 1;

    if (Math.floor(Math.random() * 2)) {
        multiplier =multiplier/10;
    }

    let values = pythagoreanValue[Math.floor(Math.random() * 10)];

    values.catA *= multiplier;
    values.catB *= multiplier;
    values.hip  *= multiplier;

    values.catA = Math.floor(values.catA * 10) / 10;
    values.catB = Math.floor(values.catB * 10) / 10;
    values.hip  = Math.floor(values.hip  * 10) / 10;

    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return {
                values: {
                    catA: values.catA,
                    catB: values.catB,
                    hip: null
                },
                answer: values.hip
            };
            break;
        case 1:
            return {
                values: {
                    catA: values.catA,
                    catB: null,
                    hip: values.hip
                },
                answer: values.catB
            };
            break;
        case 2:
            return {
                values: {
                    catA: null,
                    catB: values.catB,
                    hip: values.hip
                },
                answer: values.catA
            };
            break;
    }
}
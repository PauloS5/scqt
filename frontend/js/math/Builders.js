import * as generators from '/js/math/Generators.js'

function fisherYates(arr) {
    for (let i = arr.length-1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i+1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr;
}

function generateAlternativesForFirstDetQ(value) {
    let alternatives = [];
    alternatives.push(value);
    alternatives.push(Math.round(value * 2));
    alternatives.push(value - (10 * (Math.floor(Math.random() * 2) + 1)));
    alternatives.push(value + (10 * (Math.floor(Math.random() * 4) + 1)));
    
    return fisherYates(alternatives);
}

function generateAlternativesForPythagoreanTheoremQ(value) {
    let alternatives = [];
    alternatives.push(value);
    alternatives.push(value * 0.5);
    alternatives.push(value - 1);
    alternatives.push(value * 2);
    
    return fisherYates(alternatives);
}

function generateAlternativesForSinQ(value) {
    let alternatives = [];
    alternatives.push(value);
    alternatives.push(value * Math.floor(Math.random() * 10))/10;
    alternatives.push(value * (() => {
        let n;
        do {
            n = Math.floor(Math.random() * 10)/10;
        } while (n === alternatives[1]);
        return n;
    })());
    alternatives.push(value * (() => {
        let n;
        do {
            n = Math.floor(Math.random() * 10)/10;
        } while ((n === alternatives[1]) && (n === alternatives[2]));
        return n;
    })());
    
    alternatives[0] = Math.round(alternatives[0] * 100)/100;
    alternatives[1] = Math.round(alternatives[1] * 100)/100;
    alternatives[2] = Math.round(alternatives[2] * 100)/100;
    alternatives[3] = Math.round(alternatives[3] * 100)/100;

    return fisherYates(alternatives);
}

function generateAlternativesForCosQ(value) {
    let alternatives = [];
    alternatives.push(value);
    alternatives.push(value * Math.floor(Math.random() * 10))/10;
    alternatives.push(value * (() => {
        let n;
        do {
            n = Math.floor(Math.random() * 10)/10;
        } while (n === alternatives[1]);
        return n;
    })());
    alternatives.push(value * (() => {
        let n;
        do {
            n = Math.floor(Math.random() * 10)/10;
        } while ((n === alternatives[1]) && (n === alternatives[2]));
        return n;
    })());
    
    alternatives[0] = Math.round(alternatives[0] * 100)/100;
    alternatives[1] = Math.round(alternatives[1] * 100)/100;
    alternatives[2] = Math.round(alternatives[2] * 100)/100;
    alternatives[3] = Math.round(alternatives[3] * 100)/100;

    return fisherYates(alternatives);
}

function generateAlternativesForTanQ(value) {
    let alternatives = [];
    alternatives.push(value);
    alternatives.push(value * Math.floor(Math.random() * 10))/10;
    alternatives.push(value * (() => {
        let n;
        do {
            n = Math.floor(Math.random() * 10)/10;
        } while (n === alternatives[1]);
        return n;
    })());
    alternatives.push(value * (() => {
        let n;
        do {
            n = Math.floor(Math.random() * 10)/10;
        } while ((n === alternatives[1]) && (n === alternatives[2]));
        return n;
    })());
    
    alternatives[0] = Math.round(alternatives[0] * 100)/100;
    alternatives[1] = Math.round(alternatives[1] * 100)/100;
    alternatives[2] = Math.round(alternatives[2] * 100)/100;
    alternatives[3] = Math.round(alternatives[3] * 100)/100;
    
    return fisherYates(alternatives);
}

function generateAlternativesForRadToDegQ(value) {
    let alternatives = [];
    alternatives.push(value);
    alternatives.push(value * 0.5);
    alternatives.push(value * 1.5);
    alternatives.push(value * 2);
    
    return fisherYates(alternatives);
}

function generateAlternativesForDegToRadQ(coefficient, divider) {
    let alternatives = [];
    alternatives.push({coefficient: coefficient, divider: divider});
    alternatives.push({coefficient: divider, divider: coefficient});
    alternatives.push({coefficient: (()=>{
        let value;
        do {
            const coe = (Math.random >= 0.5) ? 1 : -1;
            const sub = Math.floor((Math.random() * 3) + 1) * coe;
            value = coefficient + sub;
        } while (value <= 0);
        return value;
    })(), divider: divider});
    alternatives.push({coefficient: coefficient, divider: (()=>{
        let value;
        do {
            const coe = (Math.random >= 0.5) ? 1 : -1;
            const sub = Math.floor((Math.random() * 3) + 1) * coe;
            value = coefficient + sub;
        } while (value <= 0);
        return value;
    })()});
    
    return fisherYates(alternatives);
}

function generateAlternativesForPythagoreanIdentityQ(value) {
    let alternatives = [];
    alternatives.push(value);
    alternatives.push(value * Math.floor(Math.random() * 10))/10;
    alternatives.push(value * (() => {
        let n;
        do {
            n = Math.floor(Math.random() * 10)/10;
        } while (n === alternatives[1]);
        return n;
    })());
    alternatives.push(value * (() => {
        let n;
        do {
            n = Math.floor(Math.random() * 10)/10;
        } while ((n === alternatives[1]) && (n === alternatives[2]));
        return n;
    })());
    
    return fisherYates(alternatives);
}

export function buildQuestions(questionsData) {
    let questions = [];

    for (const q of questionsData) {
        let preparedQuestion;
        let newQuestion = {};
        newQuestion.theme = "";
        newQuestion.context = "";
        newQuestion.hasAlternatives = false;
        newQuestion.answers = [];

        if (q.style === 'O') {
            newQuestion.hasAlternatives = true;
        }
        switch (q.theme) {
            case "firstDet":
                preparedQuestion = generators.generateFirstDetQ();
                newQuestion.theme = "Primeira Determinação";
                newQuestion.context = `Determine a primeira determinação do ângulo ${preparedQuestion.values.totalDegrees}:`;
                if (newQuestion.hasAlternatives) {
                    newQuestion.answers = generateAlternativesForFirstDetQ(preparedQuestion.answer.firstDet);
                    newQuestion.answers = newQuestion.answers.map(value => {
                        return value + " °";
                    });
                }
                break; 
            case "pythagoras":
                preparedQuestion = generators.generatePythagoreanTheoremQ();
                newQuestion.theme = "Teorema de Pitágoras";

                if (preparedQuestion.answer.hip){
                    newQuestion.context = `Dado um triângulo retângulo com um cateto que mede ${preparedQuestion.values.catA} e outro que mede ${preparedQuestion.values.catB}, determine a hipotenusa:`;
                }
                if (preparedQuestion.answer.catA){
                    newQuestion.context = `Dado um triângulo retângulo com um cateto que mede ${preparedQuestion.values.catB} e hipotenusa medindo ${preparedQuestion.values.hip}, determine o valor do outro cateto:`;
                }
                if (preparedQuestion.answer.catB){
                    newQuestion.context = `Dado um triângulo retângulo com um cateto que mede ${preparedQuestion.values.catA} e hipotenusa medindo ${preparedQuestion.values.hip}, determine o valor do outro cateto:`;
                }

                if (newQuestion.hasAlternatives) {
                    if (preparedQuestion.answer.hip){
                        newQuestion.answers = generateAlternativesForPythagoreanTheoremQ(preparedQuestion.answer.hip);
                    }
                    if (preparedQuestion.answer.catA){
                        newQuestion.answers = generateAlternativesForPythagoreanTheoremQ(preparedQuestion.answer.catA);
                    }
                    if (preparedQuestion.answer.catB){
                        newQuestion.answers = generateAlternativesForPythagoreanTheoremQ(preparedQuestion.answer.catB);
                    }
                }
                break;
            case "sin":
                preparedQuestion = generators.generateSinQ();
                newQuestion.theme = "Seno";
                newQuestion.context = `Determine o seno de um ângulo α em que seu cateto oposto mede ${preparedQuestion.values.catOpp} e sua hipotenusa mede ${preparedQuestion.values.hip}:`;
                if (newQuestion.hasAlternatives) {
                    newQuestion.answers = generateAlternativesForSinQ(preparedQuestion.answer.sin)
                }
                break;
            case "cos":
                preparedQuestion = generators.generateCosQ();
                newQuestion.theme = "Cosseno";
                newQuestion.context = `Determine o cosseno de um ângulo α em que seu cateto adjacente mede ${preparedQuestion.values.catAdj} e sua hipotenusa mede ${preparedQuestion.values.hip}:`;
                if (newQuestion.hasAlternatives) {
                    newQuestion.answers = generateAlternativesForCosQ(preparedQuestion.answer.cos)
                }
                break;
            case "tan":
                preparedQuestion = generators.generateTanQ();
                newQuestion.theme = "Tangente";
                newQuestion.context = `Determine o tangente de um ângulo α em que seu cateto adjacente mede ${preparedQuestion.values.catAdj} seu cateto oposto mede ${preparedQuestion.values.catOpp}:`;
                if (newQuestion.hasAlternatives) {
                    newQuestion.answers = generateAlternativesForTanQ(preparedQuestion.answer.tan)
                }
                break;
            case "radToDeg":
                preparedQuestion = generators.generateRadToDegQ();
                newQuestion.theme = "Conversão: Radianos para Graus";
                newQuestion.context = `Converta ${preparedQuestion.values.coefficient}π/${preparedQuestion.values.divider} rad em graus:`;
                if (newQuestion.hasAlternatives) {
                    newQuestion.answers = generateAlternativesForRadToDegQ(preparedQuestion.answer.firstDet)
                    newQuestion.answers = newQuestion.answers.map(value => {
                        return value + " °";
                    });
                }
                break;
            case "degToRad":
                preparedQuestion = generators.generateDegToRadQ();
                newQuestion.theme = "Conversão: Graus para Radianos";
                newQuestion.context = `Converta ${preparedQuestion.values.degrees} graus em radianos:`;
                if (newQuestion.hasAlternatives) {
                    newQuestion.answers = generateAlternativesForDegToRadQ(preparedQuestion.answer.firstDet)
                    newQuestion.answers = newQuestion.answers.map(value => {
                        return value + " rad";
                    });
                }
                break;
            case "pythagoreanIdentity":
                preparedQuestion = generators.generatePythagoreanIdentityQ();
                newQuestion.theme = "Relação Fundamental da Trigonometria";
                if (preparedQuestion.answer.cos) {
                    newQuestion.context = `Calcule o valor do cosseno de um ângulo α sendo o seno do mesmo é ${preparedQuestion.values.sin}:`;
                }
                if (preparedQuestion.answer.sin) {
                    newQuestion.context = `Calcule o valor do seno de um ângulo α sendo o cosseno do mesmo é ${preparedQuestion.values.cos}:`;
                }
                if (newQuestion.hasAlternatives) {
                    newQuestion.answers = generateAlternativesForPythagoreanIdentityQ(preparedQuestion.answer.firstDet)
                }
                break;
        }
        questions.push(newQuestion);
    }
    return questions;
}
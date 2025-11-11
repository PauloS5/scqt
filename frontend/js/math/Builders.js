function fisherYates(arr) {
    for (let i = arr.length-1; i > 0; i--) {
        const j = Math.floor(Math.random * (i+1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr;
}

function generateAlternativesForFirstDetQ(value) {
    let alternatives = [];
    alternatives.push(value);
    alternatives.push(value * 0.5);
    alternatives.push(value * 1.5);
    alternatives.push(value * 2);
    
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
    alternatives.push({coefficient: coefficient (()=>{
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
                newQuestion.theme = "Primeira Determinação";
                newQuestion.context = `Determine a primeira determinação do ângulo ${q.values.totalDegrees}:`;
                if (hasAlternatives) {
                    newQuestion.answers = generateAlternativesForFirstDetQ(q.answer.firstDet);
                    newQuestion.answers = newQuestion.answers.map(value => {
                        return value + " °";
                    });
                }
                break; 
            case "pythagoras":
                newQuestion.theme = "Teorema de Pitágoras";

                if (q.answer.hip){
                    newQuestion.context = `Dado um triângulo retângulo com um cateto que mede ${q.values.catA} e outro que mede ${q.values.catA}, determine a hipotenusa:`;
                }
                if (q.answer.catA){
                    newQuestion.context = `Dado um triângulo retângulo com um cateto que mede ${q.values.catB} e hipotenusa medindo ${q.values.hip}, determine o valor do outro cateto:`;
                }
                if (q.answer.catB){
                    newQuestion.context = `Dado um triângulo retângulo com um cateto que mede ${q.values.catA} e hipotenusa medindo ${q.values.hip}, determine o valor do outro cateto:`;
                }

                if (hasAlternatives) {
                    if (q.answer.hip){
                        newQuestion.answers = generateAlternativesForPythagoreanTheoremQ(q.answers.hip);
                    }
                    if (q.answer.catA){
                        newQuestion.answers = generateAlternativesForPythagoreanTheoremQ(q.answers.catA);
                    }
                    if (q.answer.catB){
                        newQuestion.answers = generateAlternativesForPythagoreanTheoremQ(q.answers.catB);
                    }
                }
                break;
            case "sin":
                newQuestion.theme = "Seno";
                newQuestion.context = `Determine o seno de um ângulo α em que seu cateto oposto mede ${q.values.catOpp} e sua hipotenusa mede ${q.values.hip}:`;
                if (hasAlternatives) {
                    newQuestion.answers = generateAlternativesForSinQ(q.answers.firstDet)
                }
                break;
            case "cos":
                newQuestion.theme = "Cosseno";
                newQuestion.context = `Determine o cosseno de um ângulo α em que seu cateto adjacente mede ${q.values.catAdj} e sua hipotenusa mede ${q.values.hip}:`;
                if (hasAlternatives) {
                    newQuestion.answers = generateAlternativesForCosQ(q.answers.firstDet)
                }
                break;
            case "tan":
                newQuestion.theme = "Tangente";
                newQuestion.context = `Determine o tangente de um ângulo α em que seu cateto adjacente mede ${q.values.catAdj} seu cateto oposto mede ${q.values.catOpp}:`;
                if (hasAlternatives) {
                    newQuestion.answers = generateAlternativesForTanQ(q.answers.firstDet)
                }
                break;
            case "radToDeg":
                newQuestion.theme = "Conversão: Radianos para Graus";
                newQuestion.context = `Converta ${q.values.coefficient}π/${q.values.divider} rad em graus:`;
                if (hasAlternatives) {
                    newQuestion.answers = generateAlternativesForRadToDegQ(q.answers.firstDet)
                    newQuestion.answers = newQuestion.answers.map(value => {
                        return value + " °";
                    });
                }
                break;
            case "degToRad":
                newQuestion.theme = "Conversão: Graus para Radianos";
                newQuestion.context = `Converta ${q.values.degrees} graus em radianos:`;
                if (hasAlternatives) {
                    newQuestion.answers = generateAlternativesForDegToRadQ(q.answers.firstDet)
                    newQuestion.answers = newQuestion.answers.map(value => {
                        return value + " rad";
                    });
                }
                break;
            case "pythagoreanIdentity":
                newQuestion.theme = "Relação Fundamental da Trigonometria";
                if (q.answer.cos) {
                    newQuestion.context = `Calcule o valor do cosseno de um ângulo α sendo o seno do mesmo é ${q.values.sin}:`;
                }
                if (q.answer.sin) {
                    newQuestion.context = `Calcule o valor do seno de um ângulo α sendo o cosseno do mesmo é ${q.values.cos}:`;
                }
                if (hasAlternatives) {
                    newQuestion.answers = generateAlternativesForPythagoreanIdentityQ(q.answers.firstDet)
                }
                break;
        }
        questions.push(newQuestion);
    }
    return questions;
}
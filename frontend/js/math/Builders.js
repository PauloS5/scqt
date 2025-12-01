/*
    FUNÇÕES PARA ESTRUTURAR AS QUESTÕES
*/

import * as genQuestions from '/js/math/QuestionsGenerators.js';
import * as genAlternatives from '/js/math/AlternativesGenerators.js';

// Função para estruturar uma questão sobre Primeira Determinação
export function buildFirstDetQ(questionInfo) {
    questionData = genQuestions.generateFirstDetQ();
    newQuestion.theme = "Primeira Determinação";
    newQuestion.context = `Determine a primeira determinação do ângulo ${questionData.values.totalDegrees}:`;

    if (questionInfo.style === 'O') {
        newQuestion.answers = generateAlternativesForFirstDetQ(questionData.answer.firstDet);
        newQuestion.answers = newQuestion.answers.map(value => {
            return value + " °";
        });
    }

    return newQuestion;
}

// Função para estruturar uma questão sobre O Teorema de Pitágoras
export function buildPythagoreanTheoremQ(questionInfo) {
    questionData = genQuestions.generatePythagoreanTheoremQ();
    newQuestion.theme = "Teorema de Pitágoras";
    if (questionData.answer.hip) {
        newQuestion.context = `Dado um triângulo retângulo com um cateto que mede ${questionData.values.catA} e outro que mede ${questionData.values.catB}, determine a hipotenusa:`;
    } else {
        newQuestion.context = `Dado um triângulo retângulo com um cateto que mede ${questionData.values.catA} e hipotenusa medindo ${questionData.values.hip}, determine o valor do outro cateto:`;
    }

    if (questionInfo.hasAlternatives) {
        if (questionData.answer.hip) {
            newQuestion.answers = generateAlternativesForPythagoreanTheoremQ(questionData.answer.hip);
        } else {
            newQuestion.answers = generateAlternativesForPythagoreanTheoremQ(questionData.answer.catB);
        }
    }

    return newQuestion;
}

// Função para estruturar uma questão sobre Seno
export function buildSinQ(questionInfo) {
    questionData = genQuestions.generateSinQ();
    newQuestion.theme = "Seno";
    newQuestion.context = `Determine o seno de um ângulo α em que seu cateto oposto mede ${questionData.values.catOpp} e sua hipotenusa mede ${questionData.values.hip}:`;

    if (questionInfo.hasAlternatives) {
        newQuestion.answers = generateAlternativesForSinQ(preparedQuestion.answer.sin)
    }

    return newQuestion;
}

// Função para estruturar uma questão sobre Cosseno
export function buildCosQ(questionInfo) {
    questionData = genQuestions.generateCosQ();
    newQuestion.theme = "Seno";
    newQuestion.context = `Determine o cosseno de um ângulo α em que seu cateto adjacente mede ${questionData.values.catAdj} e sua hipotenusa mede ${questionData.values.hip}:`;

    if (questionInfo.hasAlternatives) {
        newQuestion.answers = generateAlternativesForCosQ(preparedQuestion.answer.sin)
    }

    return newQuestion;
}

// Função para estruturar uma questão sobre Tangente
export function buildTanQ(questionInfo) {
    questionData = genQuestions.generateTanQ();
    newQuestion.theme = "Tangente";
    newQuestion.context = `Determine o tangente de um ângulo α em que seu cateto adjacente mede ${questionData.values.catAdj} seu cateto oposto mede ${questionData.values.catOpp}:`;

    if (newQuestion.hasAlternatives) {
        newQuestion.answers = generateAlternativesForTanQ(questionData.answer.tan)
    }

    return newQuestion;
}

switch (q.theme) {
    case "firstDet":

        break;
    case "pythagoras":

        break;
    case "sin":

        break;
    case "cos":

    case "tan":

        break;
    case "radToDeg":
        preparedQuestion = genQuestions.generateRadToDegQ();
        newQuestion.theme = "Conversão: Radianos para Graus";
        newQuestion.context = `Converta ${preparedQuestion.values.coefficient}π/${preparedQuestion.values.divider} rad em graus:`;
        if (newQuestion.hasAlternatives) {
            newQuestion.answers = generateAlternativesForRadToDegQ(preparedQuestion.answer.degrees)
            newQuestion.answers = newQuestion.answers.map(value => {
                return value + " °";
            });
        }
        break;
    case "degToRad":
        preparedQuestion = genQuestions.generateDegToRadQ();
        newQuestion.theme = "Conversão: Graus para Radianos";
        newQuestion.context = `Converta ${preparedQuestion.values.degrees} graus em radianos:`;
        if (newQuestion.hasAlternatives) {
            newQuestion.answers = generateAlternativesForDegToRadQ(preparedQuestion.answer.coefficient, preparedQuestion.answer.divider)
            newQuestion.answers = newQuestion.answers.map(value => {
                return value.coefficient + "π/" + value.divider + " rad";
            });
        }
        break;
    case "pythagoreanIdentity":
        preparedQuestion = genQuestions.generatePythagoreanIdentityQ();
        newQuestion.theme = "Relação Fundamental da Trigonometria";
        if (preparedQuestion.answer.cos) {
            newQuestion.context = `Calcule o valor do cosseno de um ângulo α sendo o seno do mesmo é ${Math.round((preparedQuestion.values.sin) * 100) / 100}:`;
            if (newQuestion.hasAlternatives) {
                newQuestion.answers = generateAlternativesForPythagoreanIdentityQ(preparedQuestion.answer.cos);
            }
        }
        if (preparedQuestion.answer.sin) {
            newQuestion.context = `Calcule o valor do seno de um ângulo α sendo o cosseno do mesmo é ${Math.round((preparedQuestion.values.cos) * 100) / 100}:`;
            if (newQuestion.hasAlternatives) {
                newQuestion.answers = generateAlternativesForPythagoreanIdentityQ(preparedQuestion.answer.sin);
            }
        }
        break;
}
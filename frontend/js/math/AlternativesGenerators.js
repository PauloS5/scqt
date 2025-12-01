/*
    FUNÇÕES RESPONSÁVEIS POR GERAR ALTERNATIVAS 
*/

// Função auxiliar para embaralhar as questões
function fisherYates(arr) {
    for (let i = arr.length-1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i+1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr;
}

// Função para gerar alternativas para uma questão sobre Primeira Determinação
export function generateAlternativesForFirstDetQ(value) {
    let alternatives = [];
    alternatives.push(value);
    alternatives.push(Math.round(value * 2));
    alternatives.push(value - (10 * (Math.floor(Math.random() * 2) + 1)));
    alternatives.push(value + (10 * (Math.floor(Math.random() * 4) + 1)));
    
    return fisherYates(alternatives);
}

// Função para gerar alternativas para uma questão sobre O Teorema de Pitágoras
export function generateAlternativesForPythagoreanTheoremQ(value) {
    let alternatives = [];
    alternatives.push(value);
    alternatives.push(value * 0.5);
    alternatives.push(value - 1);
    alternatives.push(value * 2);
    
    return fisherYates(alternatives);
}

// Função para gerar alternativas para uma questão sobre Seno
export function generateAlternativesForSinQ(value) {
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

// Função para gerar alternativas para uma questão sobre Cosseno
export function generateAlternativesForCosQ(value) {
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

// Função para gerar alternativas para uma questão sobre Tangente
export function generateAlternativesForTanQ(value) {
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

// Função para gerar alternativas para uma questão sobre Conversão de Radianos para Graus
export function generateAlternativesForRadToDegQ(value) {
    let alternatives = [];
    alternatives.push(value);
    alternatives.push(value * 0.5);
    alternatives.push(value * 1.5);
    alternatives.push(value * 2);
    
    return fisherYates(alternatives);
}

// Função para gerar alternativas para uma questão sobre Conversão de Graus para Radianos
export function generateAlternativesForDegToRadQ(coefficient, divider) {
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

// Função para gerar alternativas para uma questão sobre A Relação Fundamental da Trigonometria
export function generateAlternativesForPythagoreanIdentityQ(value) {
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
const notableAngles = [
    {sin: 0.0175, cos: 0.9998, tan: 0.0175},
    {sin: 0.0349, cos: 0.9994, tan: 0.0349},
    {sin: 0.0523, cos: 0.9986, tan: 0.0524},
    {sin: 0.0698, cos: 0.9976, tan: 0.0699},
    {sin: 0.0872, cos: 0.9962, tan: 0.0875},
    {sin: 0.1045, cos: 0.9945, tan: 0.1051},
    {sin: 0.1219, cos: 0.9925, tan: 0.1228},
    {sin: 0.1392, cos: 0.9903, tan: 0.1405},
    {sin: 0.1564, cos: 0.9877, tan: 0.1584},
    {sin: 0.1736, cos: 0.9848, tan: 0.1763},
    {sin: 0.1908, cos: 0.9816, tan: 0.1944},
    {sin: 0.2079, cos: 0.9781, tan: 0.2126},
    {sin: 0.2250, cos: 0.9744, tan: 0.2309},
    {sin: 0.2419, cos: 0.9703, tan: 0.2493},
    {sin: 0.2588, cos: 0.9659, tan: 0.2679},
    {sin: 0.2756, cos: 0.9613, tan: 0.2867},
    {sin: 0.2924, cos: 0.9563, tan: 0.3057},
    {sin: 0.3090, cos: 0.9511, tan: 0.3249},
    {sin: 0.3256, cos: 0.9455, tan: 0.3443},
    {sin: 0.3420, cos: 0.9397, tan: 0.3640},
    {sin: 0.3584, cos: 0.9336, tan: 0.3839},
    {sin: 0.3746, cos: 0.9272, tan: 0.4040},
    {sin: 0.3907, cos: 0.9205, tan: 0.4245},
    {sin: 0.4067, cos: 0.9135, tan: 0.4452},
    {sin: 0.4226, cos: 0.9063, tan: 0.4663},
    {sin: 0.4384, cos: 0.8988, tan: 0.4877},
    {sin: 0.4540, cos: 0.8910, tan: 0.5095},
    {sin: 0.4695, cos: 0.8829, tan: 0.5317},
    {sin: 0.4848, cos: 0.8746, tan: 0.5543},
    {sin: 0.5000, cos: 0.8660, tan: 0.5774},
    {sin: 0.5150, cos: 0.8572, tan: 0.6009},
    {sin: 0.5299, cos: 0.8480, tan: 0.6249},
    {sin: 0.5446, cos: 0.8387, tan: 0.6494},
    {sin: 0.5592, cos: 0.8290, tan: 0.6745},
    {sin: 0.5736, cos: 0.8192, tan: 0.7002},
    {sin: 0.5878, cos: 0.8090, tan: 0.7265},
    {sin: 0.6018, cos: 0.7986, tan: 0.7536},
    {sin: 0.6157, cos: 0.7880, tan: 0.7813},
    {sin: 0.6293, cos: 0.7771, tan: 0.8098},
    {sin: 0.6428, cos: 0.7660, tan: 0.8391},
    {sin: 0.6561, cos: 0.7547, tan: 0.8693},
    {sin: 0.6691, cos: 0.7431, tan: 0.9004},
    {sin: 0.6820, cos: 0.7314, tan: 0.9325},
    {sin: 0.6947, cos: 0.7193, tan: 0.9657},
    {sin: 0.7071, cos: 0.7071, tan: 1},
    {sin: 0.7193, cos: 0.6947, tan: 1.0355},
    {sin: 0.7314, cos: 0.6820, tan: 1.0724},
    {sin: 0.7431, cos: 0.6691, tan: 1.1106},
    {sin: 0.7547, cos: 0.6561, tan: 1.1504},
    {sin: 0.7660, cos: 0.6428, tan: 1.1918},
    {sin: 0.7771, cos: 0.6293, tan: 1.2349},
    {sin: 0.7880, cos: 0.6157, tan: 1.2799},
    {sin: 0.7986, cos: 0.6018, tan: 1.3270},
    {sin: 0.8090, cos: 0.5878, tan: 1.3764},
    {sin: 0.8192, cos: 0.5736, tan: 1.4281},
    {sin: 0.8290, cos: 0.5592, tan: 1.4826},
    {sin: 0.8387, cos: 0.5446, tan: 1.5399},
    {sin: 0.8480, cos: 0.5299, tan: 1.6003},
    {sin: 0.8572, cos: 0.5150, tan: 1.6643},
    {sin: 0.8660, cos: 0.5000, tan: 1.7321},
    {sin: 0.8746, cos: 0.4848, tan: 1.8040},
    {sin: 0.8829, cos: 0.4695, tan: 1.8807},
    {sin: 0.8910, cos: 0.4540, tan: 1.9626},
    {sin: 0.8988, cos: 0.4384, tan: 2.0503},
    {sin: 0.9063, cos: 0.4226, tan: 2.1445},
    {sin: 0.9135, cos: 0.4067, tan: 2.2460},
    {sin: 0.9205, cos: 0.3907, tan: 2.3559},
    {sin: 0.9272, cos: 0.3746, tan: 2.4751},
    {sin: 0.9336, cos: 0.3584, tan: 2.6051},
    {sin: 0.9397, cos: 0.3420, tan: 2.7475},
    {sin: 0.9455, cos: 0.3256, tan: 2.9042},
    {sin: 0.9511, cos: 0.3090, tan: 3.0777},
    {sin: 0.9563, cos: 0.2924, tan: 3.2709},
    {sin: 0.9613, cos: 0.2756, tan: 3.4874},
    {sin: 0.9659, cos: 0.2588, tan: 3.7321},
    {sin: 0.9703, cos: 0.2419, tan: 4.0108},
    {sin: 0.9744, cos: 0.2250, tan: 4.3315},
    {sin: 0.9781, cos: 0.2079, tan: 4.7046},
    {sin: 0.9816, cos: 0.1908, tan: 5.1446},
    {sin: 0.9848, cos: 0.1736, tan: 5.6713},
    {sin: 0.9877, cos: 0.1564, tan: 6.3138},
    {sin: 0.9903, cos: 0.1392, tan: 7.1154},
    {sin: 0.9925, cos: 0.1219, tan: 8.1443},
    {sin: 0.9945, cos: 0.1045, tan: 9.5144},
    {sin: 0.9962, cos: 0.0872, tan: 11.4301},
    {sin: 0.9976, cos: 0.0698, tan: 14.3007},
    {sin: 0.9986, cos: 0.0523, tan: 19.0811},
    {sin: 0.9994, cos: 0.0349, tan: 28.6363},
    {sin: 0.9998, cos: 0.0175, tan: 57.2900}
];

// Função para gerar uma questão sobre Primeira Determinação
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

// Função para gerar uma questão sobre Teorema de Pitágoras
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
        case 1:
            return {
                values: {
                    catA: values.catA,
                    catB: null,
                    hip: values.hip
                },
                answer: values.catB
            };
        case 2:
            return {
                values: {
                    catA: null,
                    catB: values.catB,
                    hip: values.hip
                },
                answer: values.catA
            };
    }
}

// Função para gerar um questão sobre Relações Trigonométricas
function generateTrigonometricRelationshipQ() {
    let values = notableAngles[Math.floor(Math.random() * 89)];

    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return {
                values: {
                    sin: values.sin,
                    cos: values.cos,
                    tan: null
                },
                answer: values.tan
            };
        case 1:
            return {
                values: {
                    sin: values.sin,
                    cos: null,
                    tan: values.tan
                },
                answer: values.cos
            };
        case 2:
            return {
                values: {
                    sin: null,
                    cos: values.cos,
                    tan: values.tan
                },
                answer: values.sin
            };
    }
}
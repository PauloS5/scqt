export function buildQuestionObject(type, data) {
  let context = "";

  switch (type) {

    case "FIRST_DET":
      context = `Um ponto executa ${data.values.totalDegrees}° de rotação. 
      Quantas voltas completas ele dá e qual é o valor da primeira determinação (ângulo final entre 0° e 360°)?`;
      return createObject("Primeira Determinação", context);

    case "PYTHAGOREAN_THEOREM":
      context = `Em um triângulo retângulo, os catetos medem ${data.values.catA} e ${data.values.catB}. 
      Calcule o valor da hipotenusa.`;
      return createObject("Teorema de Pitágoras", context);

    case "SINE":
      context = `Em um triângulo retângulo, o cateto oposto ao ângulo mede ${data.values.catOpp} 
      e a hipotenusa mede ${data.values.hip}. 
      Determine o valor do seno desse ângulo.`;
      return createObject("Seno", context);

    case "COSINE":
      context = `Em um triângulo retângulo, o cateto adjacente ao ângulo mede ${data.values.catAdj} 
      e a hipotenusa mede ${data.values.hip}. 
      Determine o valor do cosseno desse ângulo.`;
      return createObject("Cosseno", context);

    case "TANGENT":
      context = `Em um triângulo retângulo, o cateto oposto ao ângulo mede ${data.values.catOpp} 
      e o cateto adjacente mede ${data.values.catAdj}. 
      Determine o valor da tangente desse ângulo.`;
      return createObject("Tangente", context);

    case "RAD_TO_DEG":
      context = `Converta a expressão abaixo para graus:\n\n${data.values.coefficient}π / ${data.values.divider}`;
      return createObject("Conversão de Radianos para Graus", context);

    case "DEG_TO_RAD":
      context = `Converta o seguinte valor em graus para radianos:\n\n${data.values.degrees}°`;
      return createObject("Conversão de Graus para Radianos", context);

    case "PYTHAGOREAN_IDENTITY":
      context = `Considerando o ângulo informado, sabe-se que ${data.values.sin ? "o seno" : "o cosseno"} vale ${
        data.values.sin ?? data.values.cos
      }. Determine o valor da outra razão trigonométrica utilizando a relação fundamental: sen²(x) + cos²(x) = 1.`;
      return createObject("Relação Fundamental da Trigonometria", context);

    default:
      throw new Error("Tipo de questão inválido.");
  }
}

// Função auxiliar que cria o objeto final no formato esperado
function createObject(theme, context) {
  return {
    theme,
    context,
    hasAlternatives: false,
    answers: []
  };
}
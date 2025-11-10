// Importações (ajuste o caminho conforme sua estrutura)
import { buildQuestionObject } from "./Builders.js";
import {
  generateFirstDetQ,
  generatePythagoreanTheoremQ,
  generateSinQ,
  generateCosQ,
  generateTanQ,
  generateRadToDegQ,
  generateDegToRadQ,
  generatePythagoreanIdentityQ
} from "./Generators.js";
import send from "./Requesters.js";  // caso export default, ajuste conforme necessário

// Mapeamento do tipo da questão com o gerador correspondente
const questionMap = {
  FIRST_DET: generateFirstDetQ,
  PYTHAGOREAN_THEOREM: generatePythagoreanTheoremQ,
  SINE: generateSinQ,
  COSINE: generateCosQ,
  TANGENT: generateTanQ,
  RAD_TO_DEG: generateRadToDegQ,
  DEG_TO_RAD: generateDegToRadQ,
  PYTHAGOREAN_IDENTITY: generatePythagoreanIdentityQ
};

// === FUNÇÃO PRINCIPAL ===
function main() {
  const questions = [];
  let i = 0;

  while (true) {
    const themeSelect = document.querySelector(`#theme-${i}`);
    const styleSelect = document.querySelector(`#style-${i}`);

    if (!themeSelect || !styleSelect) break;

    const theme = themeSelect.value;  // ex: "SINE"
    const style = styleSelect.value;  // ex: "D" ou "S"

    const generate = questionMap[theme];
    if (!generate) {
      console.warn(`⚠ Tipo de questão não encontrado no índice ${i}`);
      i++;
      continue;
    }

    // Gera valores e respostas da questão
    const generated = generate();

    // Cria o objeto padrão usando o builder
    const questionObject = buildQuestionObject(theme, generated);

    // Se estilo for demonstrativa, adiciona alternativas
    if (style === "D") {
      const answers = [...document.querySelectorAll(`.answer-${i}`)]
        .map(input => input.value.trim())
        .filter(v => v !== "");

      if (answers.length > 0) {
        questionObject.hasAlternatives = true;
        questionObject.answers = answers;
      }
    }

    questions.push(questionObject);
    i++;
  }

  // Envia para API
  send(questions);
}

// === EVENTO DO BOTÃO ===
document.querySelector("#btn-genPdf").addEventListener("click", main);

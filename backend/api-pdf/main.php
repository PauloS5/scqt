<?php

// Importação da biblioteca
require_once 'vendor/autoload.php';

// Permitindo o CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: Content-Type");

// Puxando os dados do corpo da requisição
$questions = json_decode(file_get_contents("php://input"));

// Iníciando o PDF
$pdf = new FPDF();
$pdf->AddPage();
$pdf->SetFont('Arial', '', 12);

// Percorrendo as questões
foreach ($questions as $index => $q) {

    // Cabeçalho da questão
    $questionHeader = sprintf(
        utf8_decode("Questão %d (%s)\n"),
        $index + 1,
        utf8_decode($q->theme)
    );
    $pdf->SetFont('Arial', 'B', 12);
    $pdf->MultiCell(0, 6, $questionHeader);
    $pdf->Ln(1);

    // Contexto / Enunciado
    $pdf->SetFont('Arial', '', 12);
    $pdf->MultiCell(0, 6, utf8_decode($q->context));
    $pdf->Ln(2);

    // Verifica se há alternativas
    if ($q->hasAlternatives) {
        $letters = ['a', 'b', 'c', 'd'];

        foreach ($q->answers as $i => $answer) {
            $line = sprintf("%s) %s", $letters[$i], utf8_decode($answer));
            $pdf->MultiCell(0, 6, $line);
        }

        $pdf->Ln(3);
    } else {
        $pdf->Ln(24);
    }
}

// Exibir PDF no navegador
header("Content-Type: application/pdf");
$pdf->Output('I');
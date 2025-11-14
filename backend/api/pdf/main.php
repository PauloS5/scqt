<?php

require_once $_SERVER['DOCUMENT_ROOT'] . '/api/vendor/autoload.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: Content-Type");

$questions = json_decode(file_get_contents("php://input"));

$pdf = new FPDF();
$pdf->AddPage();
$pdf->SetFont('Arial', '', 12);

foreach ($questions as $index => $q) {
    $questionHeader = sprintf(
        utf8_decode("Questão %d (%s)\n"),
        $index + 1,
        utf8_decode($q->theme)
    );
    $pdf->SetFont('Arial', 'B', 12);
    $pdf->MultiCell(0, 6, $questionHeader);
    $pdf->Ln(1);

    $pdf->SetFont('Arial', '', 12);
    $pdf->MultiCell(0, 6, utf8_decode($q->context));
    $pdf->Ln(2);

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

header("Content-Type: application/pdf");
$pdf->Output('I');
function send(questions) {
    fetch("http://localhost/api-pdf/main.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(questions)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Erro ao gerar o PDF");
        }
        return response.blob();
    })
    .then(blob => {
        const url = window.URL.createObjectURL(blob);
        window.open(url, "_blank");
    })
    .catch(err => {
        alert("Erro: " + err.message);
    });
}
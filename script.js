function submitQuiz() {
    const answer = document.querySelector('input[name="q1"]:checked');
    const result = document.getElementById('result');
    if (answer && answer.value === "3") {
        result.textContent = "Parabéns! Resposta correta.";
        result.style.color = "green";
    } else {
        result.textContent = "Resposta incorreta. Tente novamente.";
        result.style.color = "red";
    }
}

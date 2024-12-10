function submitQuiz() {
    const answers = {
        q1: "2",
        q2: "3",
        q3: "1",
        q4: "1",
        q5: "2",
        q6: "1",
        q7: "1"
    };

    let score = 0;
    const totalQuestions = Object.keys(answers).length;

    for (const question in answers) {
        const selected = document.querySelector(`input[name="${question}"]:checked`);
        if (selected && selected.value === answers[question]) {
            score++;
        }
    }

    const result = document.getElementById("result");
    result.textContent = `Você acertou ${score} de ${totalQuestions} perguntas.`;
    result.style.color = score === totalQuestions ? "green" : "red";
}

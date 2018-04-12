let nome = document.getElementById("nome");
let email = document.getElementById("email");
let mensagem = document.getElementById("mensagem");
let enviar = document.getElementById("enviar");
let feedback = document.getElementById("feedback");

enviar.onclick = function (e) {
    e.preventDefault();

    if (nome.value && email.value && mensagem.value) {
        let validaEmail = validaEmail(email.value);

        if (validaEmail) {
            mostraFeedback("Sua mensagem foi enviada com sucesso!");
        } else {
            mostraFeedback("Digite em e-mail válido!");
        }

    } else {
        feedback.textContent = ("Todos os campos são obrigatórios!");
    }
}

function validaEmail(email) {
    let padrao = / ^ [a - z0 - 9\ - \.\_ / ] + @[a - z0 - 9] + \.[a - z] + (\.[a - z] + ) ? $ /;
    return padrao.test(email);
}

function mostraFeedback(mensagem) {
    feedback.style.display = "block";
    feedback.textContent = mensagem;
}

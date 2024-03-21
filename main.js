document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form-validacao');
    const mensagem = document.getElementById('mensagem');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const campoA = parseInt(document.getElementById('campoA').value);
        const campoB = parseInt(document.getElementById('campoB').value);

        if (!isNaN(campoA) && !isNaN(campoB)) {
            if (campoB > campoA) {
                mensagem.textContent = 'Formulário válido!';
                mensagem.style.color = 'green';
            } else {
                mensagem.textContent = 'Campo B deve ser maior que o Campo A.';
                mensagem.style.color = 'red';
            }
        } else {
            mensagem.textContent = 'Por favor, insira valores numéricos em ambos os campos.';
            mensagem.style.color = 'red';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const telefoneInput = document.getElementById('telefone');
    const form = document.getElementById('contact-form');
    const resultDiv = document.getElementById('form-result');

    // Máscara dinâmica para telefone
    telefoneInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, ''); // mantém apenas números
        if (value.length > 11) value = value.slice(0, 11);

        if (value.length === 11) {
            // Celular
            value = `(${value.slice(0,2)}) ${value.slice(2,7)}-${value.slice(7,11)}`;
        } else if (value.length === 10) {
            // Fixo
            value = `(${value.slice(0,2)}) ${value.slice(2,6)}-${value.slice(6,10)}`;
        } else if (value.length > 6) {
            value = `(${value.slice(0,2)}) ${value.slice(2,7)}-${value.slice(7)}`;
        } else if (value.length > 2) {
            value = `(${value.slice(0,2)}) ${value.slice(2)}`;
        } else if (value.length > 0) {
            value = `(${value}`;
        }

        e.target.value = value;
    });

    // Captura e exibe os dados do formulário
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const telefone = telefoneInput.value;
        const mensagem = document.getElementById('mensagem').value;

        resultDiv.innerHTML = `
            <h3>Mensagem enviada</h3>
            <p><b>Nome:</b> ${nome}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Telefone:</b> ${telefone}</p>
            <p><b>Mensagem:</b> ${mensagem}</p>
        `;

        // Limpa o formulário após envio
        form.reset();
    });
});

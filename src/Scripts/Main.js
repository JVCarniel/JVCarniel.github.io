const form = document.getElementById('formContato');
const mensagem = document.getElementById('mensagem-enviada');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const dados = new FormData(form);

    try {
        const resposta = await fetch("https://formspree.io/f/xkgbqvge", {
            method: "POST",
            body: dados,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (resposta.ok) {
            mensagem.textContent = "Mensagem enviada com sucesso!";
            mensagem.style.color = "lightgreen";
            form.reset();
        } else {
            mensagem.textContent = "Erro ao enviar. Tente novamente.";
            mensagem.style.color = "red";
        }
    } catch (erro) {
        mensagem.textContent = "Erro de conexão. Tente mais tarde.";
        mensagem.style.color = "orange";
    }
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const destino = document.querySelector(this.getAttribute('href'));
        if (destino) {
            destino.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

document.querySelectorAll('.projeto').forEach(projeto => {
    projeto.addEventListener('click', () => {
        const url = projeto.getAttribute('data-git');
        if (url) {
            window.open(url, '_blank'); // abre em nova aba
        }
    });
});
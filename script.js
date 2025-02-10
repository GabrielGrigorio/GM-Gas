// Função para destacar a seção atual no menu de navegação
function highlightCurrentSection() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Função para mostrar o botão "voltar ao topo"
function backToTopButton() {
    const button = document.createElement('button');
    button.innerText = 'Voltar ao Topo';
    button.id = 'backToTop';
    button.style.position = 'fixed';
    button.style.bottom = '20px';}

// Função para destacar a seção atual no menu de navegação
function highlightCurrentSection() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if
         // Função para lidar com o envio do formulário de contato
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    // Captura os dados do formulário
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    // Aqui você pode adicionar lógica para enviar os dados para um servidor
    // Por enquanto, vamos apenas exibir um alerta
    alert(`Obrigado, ${name}! Sua mensagem foi enviada com sucesso.\n\nDetalhes:\nEmail: ${email}\nTelefone: ${phone}\nMensagem: ${message}`);
    // Limpa o formulário após o envio
    document.getElementById('contactForm').reset();
});
function searchFunction() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const produtos = document.querySelectorAll('.produtos .item');
    const servicos = document.querySelectorAll('.servicos .item');

    // Filtrar produtos
    produtos.forEach(item => {
        const title = item.querySelector('h3').textContent.toLowerCase();
        if (title.includes(filter)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });

    // Filtrar serviços
    servicos.forEach(item => {
        const title = item.querySelector('h3').textContent.toLowerCase();
        if (title.includes(filter)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
}

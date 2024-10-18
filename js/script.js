window.addEventListener('scroll', function () {
    var content = document.querySelectorAll('.content');
    for (var i = 0; i < content.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = content[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            content[i].classList.add("active");
        } else {
            content[i].classList.remove("active");
        }
    }
});

// Scroll suave para links de âncoras
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Função para voltar ao topo com scroll suave
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function toggleInfo() {
    var infoContainer = document.querySelector('.info-container');
    infoContainer.classList.toggle('active');
}

// Função para atualizar a data de modificação
document.addEventListener('DOMContentLoaded', function() {
    var dataAtualizacao = new Date(document.lastModified);
    var dia = dataAtualizacao.getDate().toString().padStart(2, '0');
    var mes = (dataAtualizacao.getMonth() + 1).toString().padStart(2, '0'); // Meses começam do zero
    var ano = dataAtualizacao.getFullYear();
    document.getElementById('data-atualizacao').textContent = `${dia}/${mes}/${ano}.`;
});

// Retornar ao topo 

 // Seleciona a seta
 const scrollToTopBtn = document.getElementById('scrollToTop');

 // Função para mostrar/esconder o botão
 const toggleScrollToTopBtn = () => {
     if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
         scrollToTopBtn.classList.add('visible');
     } else {
         scrollToTopBtn.classList.remove('visible');
     }
 };

 // Adiciona os eventos
 window.addEventListener('scroll', toggleScrollToTopBtn);
 scrollToTopBtn.addEventListener('click', scrollToTop);
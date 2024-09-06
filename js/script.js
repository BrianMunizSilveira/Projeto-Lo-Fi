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
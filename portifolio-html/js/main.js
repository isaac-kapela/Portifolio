// let menuIcon = document.querySelector('#menu-icons');
// let navBar = document.querySelector('.navBar');

// menuIcon.addEventListener('click', () => { // Corrigido: adicionei o evento 'click' ao invés de substituir o listener
//     menuIcon.classList.toggle('fa-x');
//     navBar.classList.toggle('ativa');
// });


// // ================================================= link ativo da seção de rolagem ================================================================
// let secoes = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header nav a');

// window.addEventListener('scroll', () => { // Corrigido: adicionei um listener de evento de rolagem para chamar a função
//     secoes.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if (top >= offset && top < offset + height) {
//             navLinks.forEach(link => { // Corrigido: ajustei o forEach
//                 link.classList.remove('ativo');
//             });
//             document.querySelector('header nav a[href="#' + id + '"]').classList.add('ativo'); // Corrigido: ajustei a seleção do link ativo
//         }
//     });
// });


// // ================================================= navegação fixa ================================================================

// let header = document.querySelector('header');

// window.addEventListener('scroll', () => { // Corrigido: adicionei um listener de evento de rolagem
//     header.classList.toggle('fixa', window.scrollY > 100);
// });


// // ================================================= remoção de ícone de alternância e barra de navegação ================================================================

// menuIcon.classList.remove('fa-x'); // Corrigido: removi a classe 'fa-x' do menuIcon
// navBar.classList.remove('ativa'); // Corrigido: removi a classe 'ativa' da navBar


// // ================================================= revelação de rolagem ================================================================

// ScrollReveal({
//     distance: '80px',
//     duration: 2000,
//     delay: 400,
// });

// ScrollReveal().reveal('.home-content, .cabecalho', { origin: 'top' }); // Corrigido: ajustei a seleção da classe 'cabecalho'
// ScrollReveal().reveal('.home-img, .servicos-container, .portifolio-box, .contato form', { origin: 'bottom' }); // Corrigido: ajustei a seleção das classes
// ScrollReveal().reveal('.img-sobre', { origin: 'left' });
// ScrollReveal().reveal('.sobre-content', { origin: 'right' }); // Corrigido: ajustei a seleção da classe '.sobre-content'

// // ================================================= digitação ================================================================

const digitei = new Typed('.digitado', {
    strings: ['Desenvolvedor Web', 'Desenvolvedor Front-End', 'Desenvolvedor Full-Stack'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1000, // Corrigido: ajustei a propriedade backDelay
    loop: true,
});

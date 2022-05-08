window.addEventListener('scroll', onScroll);

onScroll();

function onScroll(){
    showNavOnScroll();
    showBacktoTopButton();

    activateMenuAtCurrentSection(home)
    activateMenuAtCurrentSection(services)
    activateMenuAtCurrentSection(about)
    activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section){
    // linha alvo
    const targetLine = scrollY + innerHeight / 2
// verificar se a seção passou da linha
// quais dados vou precisar?
    // topo da seção
    const sectionTop = section.offsetTop
    // altura da seção
    const sectionHeight = section.offsetHeight
    // o topo da seção passou ou encostou na linha alvo
    const sectionTopReachOrPassedTargedline = targetLine >= sectionTop
// verificar se a base está abaixo da linha alvo
// quais dados vou precisar?
    // a seção termina onde?
    const sectionEndsAt = sectionTop + sectionHeight
    // o final da seção passou da linha alvo
    const sectionEndPassedTargetline = sectionEndsAt <= targetLine

    // limites da seção
    const sectionBoundaries = sectionTopReachOrPassedTargedline && !sectionEndPassedTargetline

    const sectionId = section.getAttribute('id')
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

    menuElement.classList.remove('active')
    if(sectionBoundaries) {
        menuElement.classList.add('active')
    }
}
function showNavOnScroll(){
    if(scrollY > 0){
        navigation.classList.add('scroll');
    }else{
        navigation.classList.remove('scroll');
    }
}
function showBacktoTopButton() {
    if (scrollY > 500) {
      backtoTopButton.classList.add('show');
    } else {
      backtoTopButton.classList.remove('show');
    }
  }

function openMenu(){
    document.body.classList.add('menu-expanded');
}
function closeMenu(){
    document.body.classList.remove('menu-expanded');
}


// window.sr = ScrollReveal({ reset: true });

// sr.reveal(`#home,
// #home img,
// #home .stats,
// #services,
// #services header,
// #services .card,
// #about,
// #about header,
// #about .content,
// #contact,
// #contact header,
// #contact .content,
// #contact .content img`, {origin: 'top', distance: '30px', duration: 700,});

// ScrollReveal({origin: 'top', distance: '30px', duration: 700,}).reveal(`#home,
// #home img,
// #home .stats,
// #services,
// #services header,
// #services .card,
// #about,
// #about header,
// #about .content`)
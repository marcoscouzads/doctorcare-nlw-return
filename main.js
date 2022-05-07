window.addEventListener('scroll', onScroll)
onScroll()

function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  //posição da linha
  const targetLine = scrollY + innerHeight / 2

  // verificar se a seção passou da linha
  //quais dados vou precisar?

  // Linha imaginaria
  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight

  // topo da caixa para medir
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop
  // console.log('ta acima', sectionTopReachOrPassedTargetLine)
  const sectionEndsAt = sectionTop + sectionHeight

  // fundo da caixa para medir  (aqui pode ser invertido para simplicar a lógica)
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine
  // console.log('passou', sectionEndPassedTargetLine)

  // comparar os limites da sessão
  const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine


  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
    console.log('dentro de home')
  }
}

function showNavOnScroll() {
  if (scrollY == 0) {
    // Essa prop define a altura da pag, quando igual a zero significa q esta no topo da pagina
    navigation.classList.remove('scroll')
  } else {
    navigation.classList.add('scroll')
  }
  // console.log(scrollY)
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 400) {
    // Essa prop define a altura da pag, quando igual a zero significa q esta no topo da pagina
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
  #home, 
  #home img, 
  #home .stats, 
  #services, 
  #services header, 
  #services .card,
  #about,
  #about header,
  #about .content`)

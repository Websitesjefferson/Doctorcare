window.addEventListener('scroll', Scroll)

Scroll()



function Scroll(){
   shownavOnscroll()
   backtopbuttonOnscroll()

   ativarmenu(home)
   ativarmenu(services)
   ativarmenu(about)
   ativarmenu(contato)
}
function ativarmenu(section){
   //linha alvo
   const targetline = scrollY + innerHeight /2

   //altura sa seção
   const sectiontop = section.offsetTop

   //altura da seção
   const sectionheight = section.offsetHeight

   // o topo da seção chegou ou ultrapassou a linha alvo
   const sectiontopreach =  targetline >= sectiontop

   //seção termina aonde?
   const sectionendsat = sectiontop + sectionheight

   //o final da seção passou da linha alvo
   const sectionendpassedtargetline = sectionendsat <= targetline
   
   //limites da seção
   const sectionbourdes = sectiontopreach && !sectionendpassedtargetline

   const sectionId = section.getAttribute('id')
   const menuelement = document.querySelector(`.menu a[href*=${sectionId}]`)

   menuelement.classList.remove('active')
   if (sectionbourdes) {
      menuelement.classList.add('active')

   }


}

function shownavOnscroll(){
   if(scrollY > 0){
      navegation.classList.add('content')  //para adicionar um class em uma tag e adicionar o stylo
   }else{
      navegation.classList.remove('content') // para remover a class da tag e retirar o stylo
   }
}
function backtopbuttonOnscroll(){
   if(scrollY > 500){
      backtopbutton.classList.add('show')
   }else {
      backtopbutton.classList.remove('show')
   }
}
function openmenu(){
   document.body.classList.add('menu-expe')
}
function closemenu(){
   document.body.classList.remove('menu-expe')
}

function closet(){
   document.body.classList.remove('menu-expe')
}

ScrollReveal({
   origin: 'top',
   distance: '30px',
   duration: 1500,
}).reveal('#home, #home img, #home .starts, #services, #services header, #services .card, #about');

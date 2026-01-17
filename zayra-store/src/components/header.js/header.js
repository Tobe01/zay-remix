export default function ActivateHamburger(){
  const hamburger = document.querySelector('.js-hamburger');
  const hamburgerContainer = document.querySelector('.js-HamburgerContainer');
  
  hamburger.addEventListener('click', ()=>{
    // hamburgerContainer.addClassList('active');
    console.log('works');
  })
}
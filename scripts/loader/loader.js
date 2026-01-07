export function loaderEffect(){
  const loaders = document.querySelector('.js-loader');
  
  loaders.innerHTML += ` <img class="zay" src="images/logo/zayra-logo-1.webp" alt="zayraLogo">
    <div class="loading">
      <div class="load"></div>
      <div class="load"></div>
      <div class="load"></div>
      <div class="load"></div>
    </div>`

  window.addEventListener('load', ()=>{
      setTimeout(()=>{
       document.querySelector('.js-loader').style.display = "none";
      }, 1000)
    })
  }
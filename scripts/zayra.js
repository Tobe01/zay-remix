const threeItems = [{
  image: "images/women/2927.webp",
  title: "WOMEN'S",
}, {
  image: "images/kids/2149328403.webp",
  title: "KIDS",
}, {
  image: "images/men/2927.webp",
  title: "MEN'S",
}]



// Handles Href on 3Cards at homepage
export function renderThree(){
  const threeContainer = document.querySelector('.js-threeCards');
  
  if(threeContainer){
    threeItems.forEach((items)=>{
    threeContainer.innerHTML += `<div class="women js-cards">
            <a href="shop.html">
               <img src="${items.image}" alt="women" loading="lazy">
              <div class="threeCardsLabel">
                  <p>${items.title}</p>
              </div>
            </a>
          </div>`
    });
  } 

  const controlThree = document.querySelectorAll('.js-cards');
     controlThree.forEach((card, index) =>{
      card.id = `card-${index}`
      card.addEventListener('click', ()=>{
        const mensFashion = document.querySelector('.js-mens-fashion');
        const kidsFashion = document.querySelector('.js-kids-fashion');
        const womensFashion = document.querySelector('.js-womens-fashion');

        const items = document.querySelector('.js-shop-container');
        const mens = document.querySelector('.js-mens-container');
        const kids = document.querySelector('.js-kids-container');
        const womens = document.querySelector('.js-womens-container');

        const maleStyle = getComputedStyle(mensFashion);
        const babiesStyle = getComputedStyle(kidsFashion);
        const femaleStyle = getComputedStyle(womensFashion);

        const itemsStyle = getComputedStyle(items);
        const mensStyle = getComputedStyle(mens);
        const kidsStyle = getComputedStyle(kids);
        const womensStyle = getComputedStyle(womens);

        const maleColor = maleStyle.color;
        const maleBackground = maleStyle.backgroundColor;

        const babiesColor = babiesStyle.color;
        const babiesBackground = babiesStyle.backgroundColor;

        const femaleColor = femaleStyle.color;
        const femaleBackground = femaleStyle.backgroundColor;

        const itemsVisibility = itemsStyle.visibility;
        const itemDisplay = itemsStyle.display;

        const mensVisibility = mensStyle.visibility;
        const mensDisplay = mensStyle.display;

        const kidsVisibility = kidsStyle.visibility;
        const kidsDisplay = kidsStyle.display;

        const womensVisibility = womensStyle.visibility;
        const womensDisplay = womensStyle.display;
        
        const card0 = controlThree[0];
        const card1 = controlThree[1];
        const card2 = controlThree[2];

        if(index === 0){
          window.location.href = 'shop.html';
          womens.style.visibility = "visible";
          womens.style.display = "grid";
          womensFashion.style.color = "white";
          womensFashion.style.backgroundColor = "grey";
        }
        

      });
     });
 }
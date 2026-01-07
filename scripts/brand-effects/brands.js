const brandsItem = [{
  image1: "Fashion Brand Art Design Logo-Photoroom.png",
  image2: "stones-and-bones-pdHQR3lA-mg-unsplash.webp",
},{
  image1: "Beige Minimalist brand fashion logo-Photoroom.png",
  image2: "101931.webp",
},{
  image1: "Black & White Minimalist Business Logo-Photoroom.png",
  image2: "30792.webp",
},{
  image1: "Black & White Modern Professional Fashion Clothing Brand Logo-Photoroom.png",
  image2: "105526.webp",
},{
  image1: "Black minimalis brand fashion logo-Photoroom.png",
  image2: "1528.webp",
},{
  image1: "Black Minimalist Fashion Brand Logo-Photoroom.png",
  image2: "2148310034.webp",
},{
  image1: "Black White Minimal Modern Simple Bold Business Mag Logo-Photoroom.png",
  image2: "2148733312.webp",
},{
  image1: "Black White Minimalist Professional Initial Logo-Photoroom.png",
  image2: "2148665680.webp",
},{
  image1: "Black White Minimalist Simple Monogram Typography Logo-Photoroom.png",
  image2: "2148316178.webp",
},{
  image1: "Initial Brand Fashion Logo-Photoroom.png",
  image2:  "27926.webp",
},{
  image1: "Cream Black Typography Loop Brand Logo-Photoroom.png",
  image2: "2148336544.webp",
},{
  image1: "Minimalist typography brand Fashion Logo-Photoroom.png",
  image2: "2148098447.webp",
}]


export function brandsss(){
  const brandscontainer = document.querySelector('.js-brandsContainer');

  if (brandscontainer){
      brandsItem.forEach((brand)=> {
      brandscontainer.innerHTML += `
          <a href="#">
                  <div class="brandsCards-container js-brandsCards">
                    <img class="brandsImg1 js-firstImg" src="images/brands/${brand.image1}" loading="lazy">
                    <img class="brandsImg2 js-secndImg" src="images/brandsItems/${brand.image2}" alt="brand" loading="lazy">
                  </div>
                </a>      
        `
    });
  }

  const brandsCards = document.querySelectorAll('.js-brandsCards');

     brandsCards.forEach((card) => {
      const firstImage = card.querySelector('.js-firstImg');
      const secondImage = card.querySelector('.js-secndImg');

      card.addEventListener('mouseenter', () => {
        firstImage.style.visibility = 'hidden';
        firstImage.style.display = 'none';
        secondImage.style.visibility = 'visible';
        secondImage.style.display = 'inline';
      });

      card.addEventListener('mouseleave', () => {
        firstImage.style.visibility = 'visible';
        firstImage.style.display = 'inline';
        secondImage.style.visibility = 'hidden';
        secondImage.style.display = 'none';
      });
    });
}


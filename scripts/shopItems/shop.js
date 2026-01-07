import { shopData } from '../../data/shopdata.js';
import { mensData } from '../../data/mensData.js';
import { kidsData } from '../../data/kidsData.js';
import { womensData } from '../../data/womensData.js';
import { bagQuantity, loveButton } from '../navigation/nav.js';
import { cart, favourites, renderCart } from '../../data/cart.js';
import { formatCurrency } from '../../utils/money.js';
import { loaderEffect } from '../loader/loader.js';

loaderEffect();

// Delete Cart Item
  // const deleteItem = document.querySelectorAll('.js-deleteBtn');
  // deleteItem.forEach((button) =>{
  //   button.addEventListener('click', (event)=>{
  //     const deleteItem = event.target;
  //     event.target.closest('.js-checkoutCont').remove();
  //   });
  // });

// const savedValue =  Number(localStorage.getItem('value') || 0);
// bagQuantity.forEach((bag) =>{
//   bag.textContent = savedValue;
// });

const newValue = Number(localStorage.getItem('new') || 0);
loveButton.forEach((btn) =>{
  btn.textContent = newValue;
});

export function renderShopItems(){
// Shop data
  let shopDataHTML = '';

  shopData.forEach((shop)=>{
     shopDataHTML += `
       <div class="card-item-container js-CardPreview" data-shop-id="${shop.id}">   
            <div class="topImg-container js-topImg-container">

              <img src="images/shopItems/${shop.images.image1}" alt="item-images" loading="lazy" class="images">

              <img src="images/shopItems/${shop.images.image2}" alt="item-images" loading="lazy" class="images">

              <img src="images/shopItems/${shop.images.image3}" alt="item-images" loading="lazy" class="images">

              <div class="HoverDiv js-hoverItem">View Item <img src="images/icons/arrow_outward_18dp_FFFFFF_FILL0_wght400_GRAD0_opsz20.svg" alt="arrowOutward"></div>

            </div>
         
            <div class="bottomItem-container">
              <div class="bottomItem-top">
                <h1>${shop.itemName}</h1>
                <h3>${shop.itemDescription}</h3>
              </div>
              <p>$${formatCurrency(shop.priceCents)}</p>
              <div class="colors-container js-colors-container">

                <button class="btn1 js-button"><img src="images/colors/${shop.colorPicker.btn1}" alt="colorPicker"></button>

                <button class="btn1 js-button"><img src="images/colors/${shop.colorPicker.btn2}" alt="colorPicker"></button>

                <button class="btn1 js-button"><img src="images/colors/${shop.colorPicker.btn3}" alt="colorPicker"></button>
                
              </div>
            </div>
          </div>     
     `
  })

  const shopItems = document.querySelector('.js-shop-container');
  if(!shopItems) return;

  shopItems.innerHTML += shopDataHTML;

  //  Item Catories

  const trendyContainer = document.querySelector('.js-trendyContainer');
  trendyContainer.innerHTML = `
          <div class="trend">
            <h1>Trending Now</h1>
            <h3>Fill Your Wardrobe With The Latest Looks</h3>
          </div>
          <div class="trend1 js-trend1">
            <button class="fashion" data-item>AARON MARTINEZ</button>
            <button class="js-mens-fashion">Men's</button>
            <button class="js-kids-fashion">Kids</button>
            <button class="js-womens-fashion">Women's</button>
          </div>`

   // Button selection for items type
  const trendingBtn = document.querySelectorAll('.js-trend1 button');
  trendingBtn.forEach((button, index) =>{
    button.id = `button-${index}`;

    button.addEventListener('click', ()=>{
      const items = document.querySelector('.js-shop-container');
      const mens = document.querySelector('.js-mens-container');
      const kids = document.querySelector('.js-kids-container');
      const womens = document.querySelector('.js-womens-container');

      const itemsStyle = getComputedStyle(items);
      const mensStyle = getComputedStyle(mens);
      const kidsStyle = getComputedStyle(kids);
      const womensStyle = getComputedStyle(womens);

      const itemsVisibility = itemsStyle.visibility;
      const itemDisplay = itemsStyle.display;

      const mensVisibility = mensStyle.visibility;
      const mensDisplay = mensStyle.display;

      const kidsVisibility = kidsStyle.visibility;
      const kidsDisplay = kidsStyle.display;

      const womensVisibility = womensStyle.visibility;
      const womensDisplay = womensStyle.display;

      const btn0 = trendingBtn[0];
      const btn1 = trendingBtn[1];
      const btn2 = trendingBtn[2];
      const btn3 = trendingBtn[3];
      

      const btn0Style = getComputedStyle(btn0);
      const btn1Style = getComputedStyle(btn1);
      const btn2Style = getComputedStyle(btn2);
      const btn3Style = getComputedStyle(btn3);

      const btn0color = btn0Style.color;
      const btn0background = btn0Style.backgroundColor;

      const btn1color = btn1Style.color;
      const btn1background = btn1Style.backgroundColor;

      const btn2color = btn2Style.color;
      const btn2background = btn2Style.backgroundColor;

      const btn3color = btn3Style.color;
      const btn3background = btn3Style.backgroundColor;

      if(index === 0  && btn0color === 'rgb(0, 0, 0)' && btn0background === 'rgb(255, 255, 255)'){
        btn0.style.color = "white";
        btn0.style.backgroundColor = "grey";
        btn1.style.color = "black";
        btn1.style.backgroundColor = "white";
        btn2.style.color = "black";
        btn2.style.backgroundColor = "white";
        btn3.style.color = "black";
        btn3.style.backgroundColor = "white";
        items.style.visibility = "visible";
        items.style.display = "grid";
        mens.style.visibility = "hidden";
        mens.style.display = "none";
        kids.style.visibility = "hidden";
        kids.style.display = "none";
        womens.style.visibility = "hidden";
        womens.style.display = "none";
      } else if(index === 1  && btn1color === 'rgb(0, 0, 0)' && btn1background === 'rgb(255, 255, 255)'){
        btn0.style.color = "black";
        btn0.style.backgroundColor = "white";
        btn1.style.color = "white";
        btn1.style.backgroundColor = "grey";
        btn2.style.color = "black";
        btn2.style.backgroundColor = "white";
        btn3.style.color = "black";
        btn3.style.backgroundColor = "white";
        items.style.visibility = "hidden";
        items.style.display = "none";
        mens.style.visibility = "visible";
        mens.style.display = "grid";
        kids.style.visibility = "hidden";
        kids.style.display = "none";
        womens.style.visibility = "hidden";
        womens.style.display = "none";
      } else if(index === 2  && btn2color === 'rgb(0, 0, 0)' && btn2background === 'rgb(255, 255, 255)'){
        btn0.style.color = "black";
        btn0.style.backgroundColor = "white";
        btn1.style.color = "black";
        btn1.style.backgroundColor = "white";
        btn2.style.color = "white";
        btn2.style.backgroundColor = "grey";
        btn3.style.color = "black";
        btn3.style.backgroundColor = "white";
        items.style.visibility = "hidden";
        items.style.display = "none";
        mens.style.visibility = "hidden";
        mens.style.display = "none";
        kids.style.visibility = "visible";
        kids.style.display = "grid";
        womens.style.visibility = "hidden";
        womens.style.display = "none";
      } else if(index === 3  && btn3color === 'rgb(0, 0, 0)' && btn3background === 'rgb(255, 255, 255)'){
        btn0.style.color = "black";
        btn0.style.backgroundColor = "white";
        btn1.style.color = "black";
        btn1.style.backgroundColor = "white";
        btn2.style.color = "black";
        btn2.style.backgroundColor = "white";
        btn3.style.color = "white";
        btn3.style.backgroundColor = "grey";
        items.style.visibility = "hidden";
        items.style.display = "none";
        mens.style.visibility = "hidden";
        mens.style.display = "none";
        kids.style.visibility = "hidden";
        kids.style.display = "none";
        womens.style.visibility = "visible";
        womens.style.display = "grid";
      }


    })
  });


  // Men's Data

  const mensContainer = document.querySelector('.js-mens-container');

  if(mensContainer){
    mensData.forEach((mens) =>{
      mensContainer.innerHTML += `<div class="card-item-container js-CardPreview">   
              <div class="topImg-container js-topImg-container">

                <img src="images/shopItems/${mens.images.image1}" alt="item-images" loading="lazy" class="images">

                <img src="images/shopItems/${mens.images.image2}" alt="item-images" loading="lazy" class="images">

                <img src="images/shopItems/${mens.images.image3}" alt="item-images" loading="lazy" class="images">

                <div class="HoverDiv js-hoverItem">View Item <img src="images/icons/arrow_outward_18dp_FFFFFF_FILL0_wght400_GRAD0_opsz20.svg" alt="arrowOutward"></div>

              </div>
          
              <div class="bottomItem-container">
                <div class="bottomItem-top">
                  <h1>${mens.itemName}</h1>
                  <h3>${mens.itemDescription}</h3>
                </div>
                <p>$${formatCurrency(mens.priceCents)}</p>
                <div class="colors-container js-colors-container">

                  <button class="btn1 js-button"><img src="images/colors/${mens.colorPicker.btn1}" alt="colorPicker"></button>

                  <button class="btn1 js-button"><img src="images/colors/${mens.colorPicker.btn2}" alt="colorPicker"></button>

                  <button class="btn1 js-button"><img src="images/colors/${mens.colorPicker.btn3}" alt="colorPicker"></button>
                  
                </div>
              </div>
            </div> `
    })
  }

  // kid's Data

  const kidsContainer = document.querySelector('.js-kids-container');

  if(kidsContainer){
    kidsData.forEach((kids) =>{
      kidsContainer.innerHTML += `<div class="card-item-container js-CardPreview">   
              <div class="topImg-container js-topImg-container">

                <img src="images/shopItems/${kids.images.image1}" alt="item-images" loading="lazy" class="images">

                <img src="images/shopItems/${kids.images.image2}" alt="item-images" loading="lazy" class="images">

                <img src="images/shopItems/${kids.images.image3}" alt="item-images" loading="lazy" class="images">

                <div class="HoverDiv js-hoverItem">View Item <img src="images/icons/arrow_outward_18dp_FFFFFF_FILL0_wght400_GRAD0_opsz20.svg" alt="arrowOutward"></div>

              </div>
          
              <div class="bottomItem-container">
                <div class="bottomItem-top">
                  <h1>${kids.itemName}</h1>
                  <h3>${kids.itemDescription}</h3>
                </div>
                <p>$${formatCurrency(kids.priceCents)}</p>
                <div class="colors-container js-colors-container">

                  <button class="btn1 js-button"><img src="images/colors/${kids.colorPicker.btn1}" alt="colorPicker"></button>

                  <button class="btn1 js-button"><img src="images/colors/${kids.colorPicker.btn2}" alt="colorPicker"></button>

                  <button class="btn1 js-button"><img src="images/colors/${kids.colorPicker.btn3}" alt="colorPicker"></button>
                  
                </div>
              </div>
            </div> `
    })
  }

  // Women's Data

  const womensContainer = document.querySelector('.js-womens-container');

  if(womensContainer){
    womensData.forEach((womens) =>{
      womensContainer.innerHTML += `<div class="card-item-container js-CardPreview">   
              <div class="topImg-container js-topImg-container">

                <img src="images/shopItems/${womens.images.image1}" alt="item-images" loading="lazy" class="images">

                <img src="images/shopItems/${womens.images.image2}" alt="item-images" loading="lazy" class="images">

                <img src="images/shopItems/${womens.images.image3}" alt="item-images" loading="lazy" class="images">

                <div class="HoverDiv js-hoverItem">View Item <img src="images/icons/arrow_outward_18dp_FFFFFF_FILL0_wght400_GRAD0_opsz20.svg" alt="arrowOutward"></div>

              </div>
          
              <div class="bottomItem-container">
                <div class="bottomItem-top">
                  <h1>${womens.itemName}</h1>
                  <h3>${womens.itemDescription}</h3>
                </div>
                <p>$${formatCurrency(womens.priceCents)}</p>
                <div class="colors-container js-colors-container">

                  <button class="btn1 js-button"><img src="images/colors/${womens.colorPicker.btn1}" alt="colorPicker"></button>

                  <button class="btn1 js-button"><img src="images/colors/${womens.colorPicker.btn2}" alt="colorPicker"></button>

                  <button class="btn1 js-button"><img src="images/colors/${womens.colorPicker.btn3}" alt="colorPicker"></button>
                  
                </div>
              </div>
            </div> `
    })
  }


// Scripts for color picker
  const buttons = document.querySelectorAll('.js-button');
  
  buttons.forEach((button, index) =>{
    button.id = index + 1;    
  })



  buttons.forEach((btn) =>{
    btn.addEventListener('click', e =>{
       e.stopPropagation(); 
       e.preventDefault();
    })
  })

  // Preview Items

const cardPreview = document.querySelectorAll('.js-CardPreview');

  cardPreview.forEach((card) =>{
    card.addEventListener('click', ()=>{
      const itemPreview = document.querySelector('.js-viewItemContainer');
      const style = getComputedStyle(itemPreview);
      const cardId = Number(card.dataset.shopId);

      const shop = shopData.find(item => item.id === cardId);
      if (!shop) return;

       if(style.visibility === "hidden"){
        itemPreview.style.visibility = "visible";
       } else {
        itemPreview.style.visibility = "hidden";
       }

    // Display preview window
      itemPreview.innerHTML = `<div class="viewSub js-viewSub">
          <div class="backToShop js-backToShop">
            <img src="images/icons/close_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg" alt="arrowBack">
        </div>
        <div class="viewCards">
            <div class="imgContainer js-imgCont">
              <img src="images/shopItems/${shop.images.image1}" alt="item-images" loading="lazy" class="images">

              <img src="images/shopItems/${shop.images.image2}" alt="item-images" loading="lazy" class="images">

              <img src="images/shopItems/${shop.images.image3}" alt="item-images" loading="lazy" class="images">

              <div class="arrowDiv">
                <button><img src="images/icons/keyboard_arrow_left_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg" alt="arrowLeft"></button>
                <button><img src="images/icons/keyboard_arrow_right_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg" alt="arrowRight"></button>
              </div>
            </div>

            <div class="itemsCont">

              <div class="itemCost">
                <div class="itemDetail">
                  <div>
                    <h1 class="js-addDesc">${shop.itemDescription}</h1>
                    <!-- From Uiverse.io by SalladShooter --> 
                      <div class="like-wrapper">
                        <input class="check  js-faveBtn" type="checkbox" id="like-toggle" />
                        <label class="container" for="like-toggle">
                          <svg
                            viewBox="0 0 512 512"
                            xmlns="http://www.w3.org/2000/svg"
                            class="icon inactive"
                          >
                            <path
                              d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"
                            ></path>
                          </svg>
                          <svg
                            viewBox="0 0 512 512"
                            xmlns="http://www.w3.org/2000/svg"
                            class="icon active"
                          >
                            <path
                              d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
                            ></path>
                          </svg>
                          <div class="checkmark"></div>
                        </label>
                      </div>
                  </div>
                  <div>
                    <img src="${shop.ratings.star}" alt="rating">
                    <p>${(shop.ratings.count * 10)/100}<span>(${shop.ratings.reviews} reviews)</span></p>
                  </div>

                </div>

              <div class="Itemu">
                <div class="categoryContainer">
                  <div class="itemCategory">
                    <p>Category:</p>
                    <h4>${shop.itemCategory}</h4>
                  </div>
                  <div class="itemOrder">
                    <img src="images/icons/delivery_truck_speed_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg" alt="deliveryTruck">
                    <p>Express delivery available</p>
                  </div>
                </div>
                
                <div class="itemPrice">
                  <p>Price:</p>
                  <h1 class="js-addPrice">$${formatCurrency(shop.priceCents)}</h1>
                </div>
              </div>
            </div>
              
              <div class="itemDescription">
                <h1>Description:</h1>
                <p>${shop.productDesc}</p>
              </div>

              <div class="ItemQuan">
                <p>Quantity:</p>
                <div class="controlQuan js-controlQuan">
                  <button class="js-minusBtn"><img src="images/icons/check_indeterminate_small_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg" alt="minus"></button>
                  <input class="js-quantityInput">
                  <button class="js-plusBtn"><img src="images/icons/add_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg" alt="add"></button>
                </div>
              </div>

              <button class="addItem js-addItem" data-button-tag="${shop.buttonTag}" data-item-desc="${shop.itemDescription}" data-item-img="${shop.images.image1}" data-item-price="$${formatCurrency(shop.priceCents)}">Add to Cart</button>

            </div>
        </div>
      </div>`

      // Control buttons to view images
      const controlButtons = document.querySelectorAll('.arrowDiv button');
      const imgCont = document.querySelectorAll('.js-imgCont img.images');
      controlButtons.forEach((button, index) =>{
        button.addEventListener('click', ()=>{
          
          button.id = index;

          imgCont.forEach((img, index) =>{
            img.id = `img-${index}`;

          });
            const img0 = imgCont[0];
            const img1 = imgCont[1];
            const img2 = imgCont[2];

            const img0Style = getComputedStyle(img0);
            const img1Style = getComputedStyle(img1);
            const img2Style = getComputedStyle(img2);


            // move forward (button 0)
            if (button.id === '0' && img0Style.visibility === "visible") {
              img1.style.visibility = "visible";
              img1.style.display = "flex";
              img0.style.visibility = "hidden";
              img0.style.display = "none";
            } else if (button.id === '0' && img1Style.visibility === "visible") {
              img2.style.visibility = "visible";
              img2.style.display = "flex";
              img1.style.visibility = "hidden";
              img1.style.display = "none";
            } else if (button.id === '0' && img2Style.visibility === "visible") {
              img0.style.visibility = "visible";
              img0.style.display = "flex";
              img2.style.visibility = "hidden";
              img2.style.display = "none";
            }

            // move backward (button 1)
            else if (button.id === '1' && img2Style.visibility === "visible") {
              img1.style.visibility = "visible";
              img1.style.display = "flex";
              img2.style.visibility = "hidden";
              img2.style.display = "none";
            } else if (button.id === '1' && img1Style.visibility === "visible") {
              img0.style.visibility = "visible";
              img0.style.display = "flex";
              img1.style.visibility = "hidden";
              img1.style.display = "none";
            } else if (button.id === '1' && img0Style.visibility === "visible") {
              img2.style.visibility = "visible";
              img2.style.display = "flex";
              img0.style.visibility = "hidden";
              img0.style.display = "none";
            }

        });
        
      });

      // Control Item Quantity and with toast notifications
      const quantityInput = document.querySelectorAll('.js-quantityInput');

      quantityInput.forEach((input) =>{
          const plusButton = document.querySelectorAll('.js-plusBtn');
          const minusButton = document.querySelectorAll('.js-minusBtn');
          const addToCart = document.querySelectorAll('.js-addItem');
          input.value = 1;

          plusButton.forEach((button) =>{
            button.addEventListener('click', ()=>{
            const container = document.querySelector('.js-controlQuan');
            const style = getComputedStyle(container);

            input.value = Number(input.value) + 1;

            if(input.value >= 1 && style.border === '1px solid rgba(206, 17, 17, 1)'){
              container.style.border = '1px solid rgb(126, 125, 125)';

            } else {
              container.style.border = '1px solid rgb(126, 125, 125)';
            };

            if(input.value >= 11 && style.border === '1px solid rgb(126, 125, 125)'){
              input.value = Number(10);
              container.style.border = '1px solid rgba(206, 17, 17, 1)';
              
              Toastify({
              text: "Quantity can't be more than 10",
              duration: 3000,
              gravity: "bottom",
              position: "right",
              style: {
              background: "linear-gradient(to right, #b00600ff, #c93d3dff)",
              },
              }).showToast();

            } else {
              container.style.border = '1px solid rgb(126, 125, 125)';
            }

          });
        });

          minusButton.forEach((button) =>{
          button.addEventListener('click', ()=>{
            const container = document.querySelector('.js-controlQuan');
            const style = getComputedStyle(container);
            
            input.value = Number(input.value) - 1;

            if(input.value <= 0 && style.border === '1px solid rgb(126, 125, 125)'){
              input.value = Number(1);
              container.style.border = '1px solid rgba(206, 17, 17, 1)';

              Toastify({
              text: "Quantity can't be less than 1",
              duration: 3000,
              gravity: "bottom",
              position: "right",
              style: {
              background: "linear-gradient(to right, #b00600ff, #c93d3dff)",
              },
              }).showToast();
            } else {
              container.style.border = '1px solid rgb(126, 125, 125)';
            }
          });
        });

          addToCart.forEach((addBtn) =>{
            addBtn.addEventListener('click', (event)=>{

              const cardId = Number(card.dataset.shopId);  

              Toastify({
                text: "Item Added to Cart!",
                duration: 3000,
                gravity: "top",
                position: "right",
                style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
              },
              }).showToast();

              bagQuantity.forEach((bag) =>{
                let current = Number(bag.textContent);
                let savedValue = current + 1;
                bag.textContent = savedValue;

                // localStorage.setItem('value', savedValue);

                renderCart(addBtn, input.value);


                  if(input.value > 10){
                    input.value = Number(10);
                    
                    Toastify({
                    text: "Quantity can't be more than 10",
                    duration: 3000,
                    gravity: "bottom",
                    position: "right",
                    style: {
                    background: "linear-gradient(to right, #b00600ff, #c93d3dff)",
                    },
                    }).showToast();

                  } else if (input.value < 1){
                    input.value = Number(1);

                    Toastify({
                    text: "Quantity can't be less than 1",
                    duration: 3000,
                    gravity: "bottom",
                    position: "right",
                    style: {
                    background: "linear-gradient(to right, #b00600ff, #c93d3dff)",
                    },
                    }).showToast();

                  } else if (input.value > 1){
                    input.value = Number(1);
                  };

                });

            });
        });
      
      });

      // Close Preview window
      const backToShop = document.querySelector('.js-backToShop');
      backToShop.addEventListener('click', ()=>{
        const itemPreview = document.querySelector('.js-viewItemContainer');
        const imgCont = document.querySelectorAll('.js-imgCont img.images');
        const style = getComputedStyle(itemPreview);
        
        if(style.visibility === "visible"){
            itemPreview.style.visibility = "hidden";
          } else {
          itemPreview.style.visibility = "visible";
          };
        
         imgCont.forEach((img, index) =>{
            img.id = `img-${index}`;

          });
            const img1 = imgCont[0];
            const img2 = imgCont[1];
            const img3 = imgCont[2];

            const img1Style = getComputedStyle(img1);
            const img2Style = getComputedStyle(img2);
            const img3Style = getComputedStyle(img3);
            
            if(img1Style.visibility === "visible"){
              img1.style.visibility = "hidden";
              img1.style.display = "none";
            } else if (img2Style.visibility === "visible"){
              img2.style.visibility = "hidden";
              img2.style.display = "none";
            } else if(img3Style.visibility === "visible"){
              img3.style.visibility = "hidden";
              img3.style.display = "none";
            };
          
      });
      
      // toast Notification for avourite button
      const faveButton = document.querySelectorAll('.js-faveBtn');

      let isChecked = false;

      faveButton.forEach((fave) =>{
        fave.addEventListener('click', ()=>{
          isChecked = !isChecked;

          // This ensures there are no duplicate added favourites    

          if(isChecked){
            loveButton.forEach((btn) =>{
              const current = Number(btn.textContent);
              let newValue = current + 1;
              btn.textContent = newValue;

              localStorage.setItem('new', newValue);
              });

          Toastify({
            text: "Added to Wishlist ❤️",
            duration: 3000,
            gravity: "top",
            position: "right",
            style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          },
          }).showToast();
        } else {
            loveButton.forEach((btn) =>{
              const current = Number(btn.textContent);
              const newValue = current + 1;
              btn.textContent = newValue;
              localStorage.removeItem('new', newValue);
            });

            

          Toastify({
            text: "removed from Wishlist",
            duration: 3000,
            gravity: "top",
            position: "right",
            style: {
            background: "linear-gradient(to right, #b00058ff, #c93d3dff)",
          },
          }).showToast();

                }   
          });
        });

      });

  });


  // View Items hover effect
  const cardView = document.querySelectorAll('.js-CardPreview');

  cardView.forEach((card) =>{
    card.addEventListener('mouseenter', ()=>{
      const hoverItem = card.querySelector('.js-hoverItem');
        hoverItem.style.visibility = "visible";
        hoverItem.style.display = "flex";
    });


    card.addEventListener('mouseleave', ()=>{
      const hoverItem = card.querySelector('.js-hoverItem');
        hoverItem.style.visibility = "hidden";
        hoverItem.style.display = "none";
    });
  });


  // ignore hover if on button

  const btnColors = document.querySelectorAll('.js-colors-container button');

    btnColors.forEach((colors) =>{
    colors.addEventListener('mouseenter', ()=>{
      const card = colors.closest('.js-CardPreview');
      const hoverItem = card.querySelector('.js-hoverItem');
      hoverItem.style.visibility = "hidden";
      hoverItem.style.display = "none";
    });

    colors.addEventListener('mouseleave', ()=>{
      const card = colors.closest('.js-CardPreview');
      const hoverItem = card.querySelector('.js-hoverItem');
      hoverItem.style.visibility = "visible";
      hoverItem.style.display = "flex";
    });
  });

  // Switch between images;

  const cards = document.querySelectorAll('.js-CardPreview');

  cards.forEach(card =>{
    const buttons = card.querySelectorAll('.js-colors-container button');
    const images = card.querySelectorAll('.js-topImg-container img');

    buttons.forEach((btn, i) =>{
      btn.addEventListener('click', ()=>{
        images.forEach((img, j) =>{
          const style = getComputedStyle(img);

          if(i === j){
            img.style.visibility = "visible";
          } else {
            img.style.visibility = "hidden";
          }
        });
      });
    });
  });


  // Switch button border colors


  const cardContainer = document.querySelectorAll('.js-CardPreview');

  cardContainer.forEach((card) =>{
    const buttonsBorder = card.querySelectorAll('.js-button');

    buttonsBorder.forEach((btn) =>{
    btn.addEventListener('click', ()=>{
      const style = getComputedStyle(btn);

      buttonsBorder.forEach((selectedBtn) =>{
        selectedBtn.style.border = "1px solid rgb(231, 222, 222)";
        btn.style.border = "1px solid black";
      });
     });
    });
  });



  return cardPreview;
}







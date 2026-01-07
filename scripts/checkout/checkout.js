import { loaderEffect } from '../loader/loader.js';
import { shopData } from '../../data/shopdata.js';
import { bagQuantity, loveButton } from '../navigation/nav.js';
import { cart, favourites, renderCart, saveToStorage } from '../../data/cart.js';
import { formatCurrency } from '../../utils/money.js';
import { renderShopItems } from '../shopItems/shop.js';

let cartSummaryHTML = '';

cart.forEach((cartItem) =>{

  const buttonTag = cartItem.buttonTag;

  let matchingData;

  shopData.forEach((product)=>{
    if(product.buttonTag === buttonTag){
      matchingData = product;
    }
  });

  cartSummaryHTML += ` <div class="checkoutContents js-checkoutCont">
              <div class="checkoutTop">
                <div class="checkoutImage">
                  <img src="images/shopItems/${matchingData.images.image1}" src="image" alt="checkoutImage">
                </div>
                <div class="checkoutItems">
                  <h1>${matchingData.itemDescription}</h1>
                  <p>$${formatCurrency(matchingData.priceCents)}</p>

                  <div class="ItemQuan">
                    <p>Quantity: ${cartItem.quantity}</p>
                    <div class="controlQuan">
                      <button><img src="images/icons/check_indeterminate_small_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg" alt="minus"></button>
                      <input inputmode="numeric">
                      <button><img src="images/icons/add_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg" alt="add"></button>
                    </div>
                  </div>

                </div>
              </div>

              <div class="deleteContainer">
                <button class="js-deleteBtn"><img src="images/icons/delete_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg" alt="deleteIcon"></button>
              </div>
            </div>
       `;
});

document.querySelector('.js-checkoutLeft')
 .innerHTML = cartSummaryHTML;

 // Delete Cart Item
  const deleteItem = document.querySelectorAll('.js-deleteBtn');
  deleteItem.forEach((button) =>{
    button.addEventListener('click', (event)=>{
      const deleteItem = event.target;
      event.target.closest('.js-checkoutCont').remove();
      saveToStorage();
    });
  });
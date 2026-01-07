export let cart =  [{
     buttonTag: 1,
      itemDesc: 'Slim Stacked Flare Embroidered Strip Tricot Track Pants',
      quantity: 1
  }]

// JSON.parse(localStorage.getItem('cart'));


// if(!Array.isArray(cart)){
  // cart = 
  
  // [{
      
    // }, {
    //   buttonTag: 2,
    //   itemDesc: 'Unisex Performance Tracksuit Set in Army color',
    //   quantity: 1
    // }];
// }
 

export function saveToStorage(){
  localStorage.setItem('cart', JSON.stringify(cart));
}

export const favourites = [];


export function renderCart(addBtn, value){
  
   const quantity = Number(value);
  // AddItems to Cart
    const buttonTag = addBtn.dataset.buttonTag;
    
    const desc = addBtn.dataset.itemDesc;
    const img  = addBtn.dataset.itemImg;
    const price = addBtn.dataset.itemPrice;
      
    let matchingItem;
  
    cart.forEach((cartItem) =>{
      if(buttonTag === cartItem.buttonTag){
        matchingItem = cartItem;  
      };
    });
  
    if(matchingItem){
      matchingItem.quantity += quantity;
    } else {
      cart.push({
      buttonTag: buttonTag,
      image: img,
      itemDesc: desc,
      price: price,
      quantity: quantity,
      });
    };

    saveToStorage();
    console.log(cart);
}

 
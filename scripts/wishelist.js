// Wishes
const notyf = new Notyf({
  duration: 2500,
  position: { x: 'right', y: 'top' }
});

const deleteWishes = document.querySelectorAll('.js-deleteWish');

deleteWishes.forEach((deleteBtn) =>{
  deleteBtn.addEventListener('click', (event)=> {
    let buttonClicked = event.target;
    event.target.closest('.wishCont').remove();
    
    notyf.error('Item Deleted from Wishlist!');
    
      
  })
})

const addWishes = document.querySelectorAll('.js-addWishes');

addWishes.forEach((addWish) =>{
  addWish.addEventListener('click', ()=>{
    
    notyf.success('Wish Added to Cart!');

  })
})
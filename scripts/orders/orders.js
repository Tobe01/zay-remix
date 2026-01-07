const editButton = document.querySelector('.js-editBag');

    editButton.addEventListener('click', ()=>{
      const editItems = document.querySelector('.js-editItems');

      if(editItems){
        editItems.style.visibility = "visible";
      }
    })

    const stayIn = document.querySelector('.js-stayInCheckout');

    stayIn.addEventListener('click', ()=>{
      const editItems = document.querySelector('.js-editItems');

      if(editItems){
        editItems.style.visibility = "hidden";
      }
    });



  const firstDelivery = document.querySelector('.js-delivery1');
  const secondDelivery = document.querySelector('.js-delivery2');

  firstDelivery.addEventListener('click', ()=>{
    const secondDelivery = document.querySelector('.js-delivery2');
    const SecondStyle = getComputedStyle(secondDelivery);
    const contactField = document.querySelector('.js-contactsField');
    const addressField = document.querySelector('.js-addressField');
    const contactStyle = getComputedStyle(contactField);
    const addressStyle = getComputedStyle(addressField);
    let SecondBorder = SecondStyle.border;
    SecondBorder = "1px solid rgb(19, 18, 18)";
    let secondColor = SecondStyle.color;

    const style = getComputedStyle(firstDelivery);
    let border = style.border;
    let color = style.color;

    if (border && SecondBorder){
      border = "1px solid rgb(19, 18, 18)";
      SecondBorder = "1px solid rgb(173, 173, 173)";
      secondDelivery.style.border = SecondBorder;
      firstDelivery.style.color = "rgb(19, 18, 18)";
      secondDelivery.style.color = "rgb(173, 173, 173)";
      firstDelivery.style.border = border;
      addressField.style.visibility = "hidden";
      contactField.style.visibility = "visible";
    }
  })

  secondDelivery.addEventListener('click', ()=>{
    const contactField = document.querySelector('.js-contactsField');
    const addressField = document.querySelector('.js-addressField');
    const firstDelivery = document.querySelector('.js-delivery1');
    const FirstStyle = getComputedStyle(firstDelivery);
    const contactStyle = getComputedStyle(contactField);
    const addressStyle = getComputedStyle(addressField);
    let firstBorder = FirstStyle.border;
    firstBorder = "1px solid rgb(19, 18, 18)";

    let firstColor = FirstStyle.color;

    const style = getComputedStyle(secondDelivery);
    let border = style.border;
    let color = style.color;
    

    if(border){
      border = "1px solid rgb(19, 18, 18)";
      firstBorder = "1px solid rgb(173, 173, 173)";
      firstDelivery.style.border = firstBorder;
      firstDelivery.style.color = "rgb(173, 173, 173)";
      secondDelivery.style.color = "rgb(19, 18, 18)"
      secondDelivery.style.border = border;
      addressField.style.visibility = "visible";
      contactField.style.visibility = "hidden";
    }
  })


  // Order button and Payments Modal

  document.addEventListener('DOMContentLoaded', ()=>{
     const  orderButton = document.querySelector('.js-submitOrder');

     if(!orderButton) return;

      orderButton.addEventListener('click', ()=>{
        const paymentModal = document.querySelector('.js-paymentContainer');
        const style = getComputedStyle(paymentModal).visibility;

        if(style === "hidden"){
          paymentModal.style.visibility = "visible";
        }
      })

  });

  const payButton = document.querySelector('.js-payCheckout');

  payButton.addEventListener('click', ()=>{
      
      Swal.fire({
      title: 'success!',
      text: 'Payment Processed Successfully!',
      icon: 'success',
      confirmButtonText: 'Continue'
    });

  })





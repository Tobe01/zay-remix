import { Header } from '../components/header';
import './checkout.css';
import '../media-queries/header.css';
import '../media-queries/main.css';
import './items.css';
import './shop.css';

export function Checkout(){
  return(
    <>
      <title>checkout</title>

      <Header />
      <section class="checkout">
          <div class="checkoutParent js-checkNumber">
            <h1>Shopping Cart (5)</h1>
          </div>
          <div class="deliveredBy js-shopCart">
            <div class="mainCheckout-container">

                <div class="Array-container">

                  <div class="checkoutLeft js-checkoutLeft">
                  {/* <!-- rendered in checkout.js --> */}
                  <div class="checkoutContents js-checkoutCont">
                    <div class="checkoutTop">
                      <div class="checkoutImage">
                        <img src="images/shopItems/3305.webp" alt="checkoutImage" />
                      </div>
                      <div class="checkoutItems">
                        <h1>Slim Stacked Flare Embroidered Strip Tricot Track Pants</h1>
                        <p>$22.50</p>

                        <div class="ItemQuan">
                          <p>Quantity: 2</p>
                          <div class="controlQuan">
                            <button><img src="images/icons/check_indeterminate_small_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg" alt="minus" /></button>
                            <input inputmode="numeric" />
                            <button><img src="images/icons/add_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg" alt="add" /></button>
                          </div>
                        </div>

                      </div>
                    </div>

                    <div class="deleteContainer">
                      <button class="js-deleteBtn"><img src="images/icons/delete_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg" alt="deleteIcon" /></button>
                    </div>
                  </div>
              </div>

            </div>
              
              <div class="js-OrderContainer">
              {/* <!-- Rendered in cart.js --> */}
                <div class="OrderSummary">
                    <div class="orderSummary-Top">
                      <h1>Order Summary</h1>
                      <div class="orderfirst">
                        <div class="subtotal">
                          <p>Subtotal</p>
                          <p>$58.00</p>
                        </div>
                        <div class="discount">
                          <p>Discount</p>
                          <p>$-6.60</p>
                        </div>
                      </div>

                      <div class="orderSecond">
                        <div class="orderTotal">
                          <p>Order total</p>
                          <p>$51.40</p>
                        </div>

                        <div class="orderDiscount">
                          <h4>Discounts included:</h4>
                          <p>boohooMAN Up to 70% SALE <span>-£6.60</span></p>
                        </div>
                      </div>

                      <div class="add-container">
                          <a  href="/orders.html"><button>CHECKOUT</button></a>
                          <button><img src="images/icons/apple.webp" alt="apple-logo" loading="lazy" /> Pay</button>
                          <button><img src="images/payments/PayPal_Logo_Horizontal_Full_Color_RGB-002-1.webp" alt="paypal-icon" /> Checkout</button>
                      </div>

                      <div class="orderBottom">
                        <img src="images/payments/068BjcjwBw0snwHIq0KNo5m-15.webp" alt="paymentsLogo" />
                        <img src="images/payments/images (1).webp" alt="paymentsLogo" />
                        <img src="images/payments/Mclick.webp" alt="paymentsLogo" />
                        <img src="images/payments/apple-pay.webp" alt="paymentsLogo" />
                        <img src="images/payments/images (1).webp" alt="paymentsLogo" />
                        <img src="images/payments/images.webp" alt="paymentsLogo" />
                        <img src="images/payments/Mclick.webp" alt="paymentsLogo" />
                        <img src="images/payments/images (1).webp" alt="paymentsLogo" />
                        <img src="images/payments/images (1).webp" alt="paymentsLogo" />
                      </div>
                    </div>

                    <div class="promoPromo">
                      <h3>Promo Code</h3>
                      <div class="promoIn">
                        <input type="search" placeholder="Enter code here..." />
                        <button>APPLY</button>
                      </div>
                    </div>
                </div>
                
              </div>

        </div>

        </div>
      </section>
    </>
  )
}
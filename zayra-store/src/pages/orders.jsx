import { OrdersHeader } from '../components/orders-header';
import '../media-queries/header.css';
import '../media-queries/main.css';
import './orders.css';

export function Orders(){
  return(
    <>
    <title>Orders</title>
     <OrdersHeader/>

     <main> 
        <section className="checkoutMain">
          <div className="contactDetails">
            <div className="formSub">
              <h1>Delivery Options</h1>
              <div className="selectDelivery">
                <div className="selectDeliverySub">
                  <button className="js-delivery1">
                  <img src="images/icons/newdelivery.svg" alt="deliveryvanIcon" />
                  <p>Delivery Details</p>
                  </button>
                  <button className="js-delivery2">
                    <img src="images/icons/newlocation.svg" alt="locationsIcon" />
                    <p>Delivery Address</p>
                  </button>
                </div>
              </div>

              <div className="formField js-contactsField">
                <p>Contact Details</p>
                <div>
                  <label>First Name</label>
                  <div>
                    <input type="text" name="name" placeholder="Enter First Name" required />
                  </div>
                </div>

                <div>
                  <label>Last Name</label>
                  <div>
                    <input type="text" name="surname" placeholder="Enter Last Name" required />
                  </div>
                </div>

                <div>
                  <label>Country</label>
                  <select name="Country" id="Country" required>
                    <option value="NG">Nigeria</option>
                    <option value="GB">United Kingdom</option>
                    <option value="US">United States</option>
                  </select>
                </div>

                <div>
                  <label>Phone Number</label>
                  <div>
                    <input type="text" name="phone number" placeholder="Enter Valid Phone Number" required />
                  </div>
                </div>
                
                <div className="closeDrop js-addressField">
                  <p>Contact Address</p>
                    <div className="closeForm js-closeForm">
                        <div>
                          <label>Address Line 1</label>
                          <div>
                            <input type="text" name="Address" placeholder="Enter Contact  Address 1" required />
                          </div>
                        </div>

                        <div>
                          <label>Address Line 2 (optional)</label>
                          <div>
                            <input type="text" name="city" required placeholder="Enter Contact  Address 2" />
                          </div>
                        </div>
                        
                        <div>
                          <label>City</label>
                          <div>
                            <input type="text" name="city" placeholder="Enter City" required />
                          </div>
                        </div>

                        <div>
                          <label>Landmark (optional)</label>
                          <div>
                            <input type="text" name="city" required placeholder="Enter Closest Landmark" />
                          </div>
                        </div>
                    </div>
                </div>

              </div>

            </div>
          </div>

          <div className="paymentOrder">
            <div className="yourOrder">
              <div className="suby">
                <h1>Selected Items</h1>
                <div className="yourOrderSub">
                  <p>Shopping Cart (5)</p>
                  <button className="js-editBag">Edit Bag</button>
                </div>
              </div>
              
              <div className="checkoutTop">
                <div className="checkoutImagee">
                  <img src="images/women/2927.webp" alt="checkoutImage" loading="lazy" />
                </div>
                <div className="checkoutItems">
                  <b>Mens Casual Premium Slim Fit T-Shirts</b>
                  <p>$22.30</p>
                </div>
              </div>

              <div className="OrderSummaary">
              <div className="orderSummaary-Top">
                  <h1>Order Summary</h1>
                  <div className="orderfirst">
                    <div className="subtotaal">
                      <p>Subtotal</p>
                      <p>£58.00</p>
                    </div>
                    <div className="discoount">
                      <p>Discount</p>
                      <p>-£6.60</p>
                    </div>
                  </div>

                  <div className="orderSecoond">
                    <div className="orderTootal">
                      <p>Order total</p>
                      <p>£51.40</p>
                    </div>

                    <div className="orderDiscount">
                      <h4>Discounts included:</h4>
                      <p>70% SALE <span>-£6.60</span></p>
                    </div>
                  </div>
              </div>
              </div>

            </div>

            <div className="paymentsSubmit">
                <div className="payments">
                  <p>Payment Method</p>
                  <div>
                    <img src="images/payments/images (1).webp" alt="PaymentsIcon" loading="lazy" />
                    <img src="images/payments/images.webp" alt="PaymentsIcon" loading="lazy" />
                    <img src="images/payments/images (1).webp" alt="PaymentsIcon" loading="lazy" />
                    <img src="images/payments/images (1).webp" alt="PaymentsIcon" loading="lazy" />
                  </div>
                  <select className="selectFund" name="payment method" required>
                    <option>Select your prefered payment method</option>
                    <option>Paystack</option>
                    <option>MasterCard</option>
                  </select>
                </div>

                <div className="submitOrder js-submitOrder">
                  <button>Make Payment</button>
                </div> 
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
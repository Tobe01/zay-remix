import { Header } from '../components/header';
import '../media-queries/header.css';
import '../media-queries/main.css';
import './shop.css';

export function ShopModal(){
  return(
    <>
     <Header/>
     <div className="viewItemContainer">
        {/* <!-- Items rendered in Shop.js --> */}
        <div className="viewSub">
            <div className="backToShop">
              <img src="images/icons/close_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg" alt="arrowBack"/>
            </div>
            <div className="viewCards">
                <div className="imgContainer">
                  <img src="images/shopItems/2149684322.webp" alt="item-images" loading="lazy"/>

                  <img src="images/shopItems/2149684359.webp" alt="item-images" loading="lazy"/>

                  <img src="images/shopItems/2149684357.webp" alt="item-images" loading="lazy"/>

                  <div className="arrowDiv">
                    <button><img src="images/icons/keyboard_arrow_left_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg" alt="arrowLeft"/></button>
                    <button><img src="images/icons/keyboard_arrow_right_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg" alt="arrowRight"/></button>
                  </div>
                </div>

                <div className="itemsCont">

                  <div className="itemCost">
                    <div className="itemDetail">
                      <div>
                        <h1>Slim Stacked Flare Embroidered Strip Tricot Track Pants</h1>
                        {/* <!-- From Uiverse.io by SalladShooter --> */}
                          <div className="like-wrapper">
                            <input className="check" type="checkbox" id="like-toggle"/>
                            <label className="container" htmlFor="like-toggle">
                              <svg
                                viewBox="0 0 512 512"
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon inactive"
                              >
                                <path
                                  d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"
                                ></path>
                              </svg>
                              <svg
                                viewBox="0 0 512 512"
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon active"
                              >
                                <path
                                  d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
                                ></path>
                              </svg>
                              <div className="checkmark"></div>
                            </label>
                          </div>
                      </div>
                      <div>
                        <img src="images/ratings/star_24dp_B89230_FILL1_wght700_GRAD0_opsz24.svg" alt="rating"/>
                        <p>51<span>259</span></p>
                      </div>

                    </div>

                  <div className="Itemu">
                    <div className="categoryContainer">
                      <div className="itemCategory">
                        <p>Category:</p>
                        <h4>womens's clothing</h4>
                      </div>
                      <div className="itemOrder">
                        <img src="images/icons/delivery_truck_speed_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg" alt="deliveryTruck"/>
                        <p>Express delivery available</p>
                      </div>
                    </div>
                    
                    <div className="itemPrice">
                      <p>Price:</p>
                      <h1>$22.30</h1>
                    </div>
                  </div>
                  </div>
                  
                  <div className="itemDescription">
                    <h1>Description:</h1>
                    <p>Light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fash.</p>
                  </div>

                  <div className="ItemQuan">
                    <p>Quantity:</p>
                    <div className="controlQuan">
                      <button><img src="images/icons/check_indeterminate_small_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg" alt="minus"/></button>
                      <input/>
                      <button><img src="images/icons/add_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg" alt="add"/></button>
                    </div>
                  </div>

                  <button className="addItem">Add to Cart</button>

                </div>
            </div>
        </div>
     </div>
    </>
  )
}
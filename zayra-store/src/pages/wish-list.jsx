import { WishHeader } from '../components/wish-list-header';
import './wish-list.css';
import '../media-queries/header.css';
import '../media-queries/main.css';

export function WishList(){
  return(
    <>
    <title>Wishes</title>

     <WishHeader />
      <main className="wishU"> 
        <section className="wishlist-container">

          <div className="wishCont">
            <div className="wishCard">

                <div className="imageDesc">
                    <div className="imageContainer">
                      <img src="images/shopItems/2149153329.webp" alt="checkoutImage" />
                    </div>
                    <div className="descriptionContainer">
                      <div className="priceDesc">
                        <h1>Slim Stacked Flare Embroidered Strip Tricot Track Pants</h1>
                        <p>$22.30</p>
                      </div>
                      <button className="js-deleteWish">
                        <img src="images/icons/delete_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg" alt="deleteIcon" />
                      </button>
                    </div>
                  </div>

                  <div className="buttonsContainer js-addWishes">
                      <button>Add To Cart</button>
                  </div>

            </div>
          </div>
          
          <div className="wishCont">
            <div className="wishCard">

                <div className="imageDesc">
                    <div className="imageContainer">
                      <img src="images/shopItems/2149684356.webp" alt="checkoutImage" />
                    </div>
                    <div className="descriptionContainer">
                      <div className="priceDesc">
                        <h1>Slim Stacked Flare Embroidered Strip Tricot Track Pants</h1>
                        <p>$22.30</p>
                      </div>
                      <button className="js-deleteWish">
                        <img src="images/icons/delete_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg" alt="deleteIcon" />
                      </button>
                    </div>
                  </div>

                  <div className="buttonsContainer js-addWishes">
                      <button>Add To Cart</button>
                  </div>

            </div>
          </div>

        </section>
      </main>
    </>
  )
}
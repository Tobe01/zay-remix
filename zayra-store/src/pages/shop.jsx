import { Header } from '../components/header';
import { Footer } from '../components/footer';
import '../media-queries/header.css';
import '../media-queries/main.css';
import './shop.css';

export function Shop(){
  return(
    <>
     <title>Shop</title>
     <Header/>
      <main>
        <div className="shop-main-container">
          <div className="shop-container">
              <div className="shop-container-sub">
                {/* <!-- Rendered in JavaScript --> */}
                <div className="trend">
                  <h1>Trending Now</h1>
                  <h3>Fill Your Wardrobe With The Latest Looks</h3>
                </div>
                <div className="trend1">
                  <button className="fashion" data-item>AARON MARTINEZ</button>
                  <button>Men's</button>
                  <button>Kids</button>
                  <button>Women's</button>
                </div>
              </div>

              <div className="main-shopItems">
                  {/* <!-- Shop items called inside js --> */}
                <div className="item-container fade-in-up">
                  {/* <!-- All Shop Items rendered in JavaScript --> */}
                  <div className="card-item-container">   
                      <div className="topImg-container">

                        <img src="images/shopItems/2149684322.webp" alt="item-images" loading="lazy" className="images"/>

                        <img src="images/shopItems/2149684359.webp" alt="item-images" loading="lazy" className="images"/>

                        <img src="images/shopItems/2149684357.webp" alt="item-images" loading="lazy" className="images"/>

                        <div className="HoverDiv">View Item <img src="images/icons/arrow_outward_18dp_FFFFFF_FILL0_wght400_GRAD0_opsz20.svg" alt="arrowOutward"/></div>

                      </div>
              
                      <div className="bottomItem-container">
                        <div className="bottomItem-top">
                          <h1>Aaron Martinez</h1>
                          <h3>Slim Stacked Flare Embroidered Strip Tricot Track Pants</h3>
                        </div>
                        <p>$22.30</p>
                        <div className="colors-container">

                          <button className="btn1"><img src="images/colors/brownish.webp" alt="colorPicker"/></button>

                          <button className="btn1"><img src="images/colors/violet.webp" alt="colorPicker"/></button>

                          <button className="btn1"><img src="images/colors/plain.webp" alt="colorPicker"/></button>
                          
                        </div>
                      </div>
                  </div>     

                </div>
              </div>
          </div>
        </div>
      </main>
     <Footer/>
    </>
  )
}
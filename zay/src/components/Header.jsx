import { NavLink } from 'react-router-dom';
import './Header.css';
import './Header/interval.css';
import './Header/sub-nav.css';
import './Header/wishlist.css';
import './Header/subhover.css';


export function Header(){
  return(
    <>
      <title>Home</title>
      
      <div className="main-mobile-nav js-main-mobile-nav">
          <div className="main-mobile-nav-sub">
              <div className="mobile-nav-left">
                {/* From Uiverse.io by JulanDeAlb */}
                  <label className="hamburger js-hamburger">
                    <input className="hamburger-input" type="checkbox" />
                    <svg viewBox="0 0 32 32">
                      <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                      <path className="line" d="M7 16 27 16"></path>
                    </svg>
                  </label>
              </div>

              <div className="mobile-right">
                <NavLink to="/login"><img src="images/icons/person_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg" alt="personIcon" /></NavLink>
                <NavLink to="/wishlist">
                  <span className="favContainer js-love">
                    <img src="images/icons/favorite_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg" alt="favIcon" />
                    <div className="quantity js-fav">0</div>
                  </span>
                </NavLink>

                <NavLink to="/checkout">
                  <span className="quantityContainer">
                    <img src="images/icons/local_mall_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg" alt="localMall" />
                    <div className="quantity js-bag">0</div>
                  </span>
                </NavLink>
              </div>
          </div>

          <div className="mobile-searchbar-main js-mobile-input">
            <div className="mobile-search-bar">
                <button className="first-button">
                  <img src="images/icons/search_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg" alt="search icon" />
                </button>
                <input className="mobile-input" placeholder="Search for products, brands, or categories" />
                <button className="second-button">
                  <img src="images/icons/photo_camera_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg" alt="photoCam" />
                </button>
            </div>
          </div>

          <div className="HamburgerContainer js-hamburgerContainer">     
            <div className="hamburgerItems js-hamburgerItems">
                <div className="closeContainer">
                  <NavLink to="/">
                  <img src="images/logo/zayra-logo-1.webp" alt="zayraLogo" />
                  </NavLink>
                    
                  <span className="closeWin">
                    <img src="images/icons/close_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg" alt="closeIcon" />
                  </span>
                </div>
                <div className="directoriesContainer">
                    <NavLink to="/">
                      <div>
                        <img src="images/icons/home_app_logo_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg" alt="homeIcon" />
                        <p>Home</p>
                      </div>
                    </NavLink>

                    <NavLink to="shop.html">
                      <div>
                          <img src="images/icons/person_heart_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg" alt="womenIcon" />
                          <p>Women</p>
                      </div>
                    </NavLink>

                    <NavLink to="shop.html">
                      <div>
                        <img src="images/icons/person_shield_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg" alt="menIcon" />
                        <p>Men</p>
                      </div>
                    </NavLink>

                    <NavLink to="shop.html">
                      <div>
                        <img src="images/icons/face_left_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg" alt="kidsIcon" />
                        <p>Kids</p>
                      </div>
                    </NavLink>

                    <NavLink to="shop.html">
                      <div>
                        <img src="images/icons/sports_football_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg" alt="SportsIcon" />
                        <p>Sport</p>
                      </div>
                    </NavLink>

                    <NavLink to="shop.html">
                      <div>
                        <img src="images/icons/spa_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg" alt="beautyIcon" />
                        <p>Beauty</p>
                      </div>
                    </NavLink>
                </div>

                <div className="NewItemsContainer">
                    <NavLink to="shop.html">
                      <div>
                        <img src="images/icons/notifications_unread_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg" alt="newIcon" />
                        <p>NEW IN</p>
                      </div>
                    </NavLink>

                    <NavLink to="shop.html">
                      <div>
                        <img src="images/icons/laundry_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg" alt="laudryIcon" />
                        <p>CLOTHING</p>
                      </div>
                    </NavLink>

                    <NavLink to="shop.html">
                      <div>
                        <img src="images/icons/footprint_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg" alt="shoesIcon" />
                        <p>SHOES</p>
                      </div>
                    </NavLink>

                    <NavLink to="shop.html">
                      <div>
                        <img src="images/icons/aod_watch_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg" alt="watchIcon" />
                        <p>ACCESSORIES</p>
                      </div>
                    </NavLink>

                    <NavLink to="shop.html">
                      <div>
                        <img src="images/icons/sports_football_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg" alt="footbalIcon" />
                        <p>SPORTS</p>
                      </div>
                    </NavLink>

                    <NavLink to="shop.html">
                      <div>
                        <img src="images/icons/brand_family_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg" alt="brandsIcon" />
                        <p>BRANDS</p>
                      </div>
                    </NavLink>

                    <NavLink to="shop.html">
                      <div>
                        <img src="images/icons/checkroom_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg" alt="checkroomIcon" />
                        <p>DESIGNER</p>
                      </div>
                    </NavLink>

                    <NavLink to="shop.html">  
                      <div>
                        <img src="images/icons/price_check_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg" alt="priceIcon" />
                        <p>SALE</p>
                      </div>
                    </NavLink>

                </div>
            </div>
          </div>
      </div>
       
      <div className="top-nav js-navigation">
        <div className="top-nav-items">
            <NavLink>
              <span><p>Contact & FAQs</p></span>
            </NavLink>
            <NavLink>
              <span><p>Delivery</p></span>
            </NavLink>
            <NavLink>
              <span><p>Returns</p></span>
            </NavLink>
            <NavLink>
              <span><p>Track Orders</p></span>
            </NavLink>
            <NavLink>
              <span><p>Share Your Ideas</p></span>
            </NavLink>
            <NavLink>
              <span><p>Gift Cards</p></span>
            </NavLink>
          </div>
      </div>
            
      <div className="middle-nav js-navigation">
          <div className="left js-left-items">
              <NavLink to="/"><div>ZAYRA</div></NavLink>
              <NavLink to="shop.html"><p>WOMEN</p></NavLink>
              <NavLink to="shop.html"><p>MEN</p></NavLink>
              <NavLink to="shop.html"><p>KIDS</p></NavLink>
              <NavLink to="shop.html"><p>SPORT</p></NavLink>
              <NavLink to="shop.html"><p>BEAUTY</p></NavLink>
              <NavLink to="shop.html"><p>HOME</p></NavLink>
          </div>
          <div className="right">
            <div className="right-sub">
              <div className="right-sub1">
                <span>
                  <img src="images/icons/search_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg" alt="search icon" />
                </span>
                <input className="js-search-input" placeholder="Search for products, brands, or ..." />
              </div>
              <div className="right-sub-icon">
                <NavLink to="/login">
                  <span>
                  <img src="images/icons/person_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg" alt="login icon" />
                </span>
                </NavLink>
                <NavLink to="/wishlist">
                  <span className="favContainer js-love">
                    <img src="images/icons/favorite_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg" alt="wishlist" />
                    <div className="quantity js-fav">0</div>
                  </span>
                </NavLink>
                <NavLink to="/checkout">
                  <span className="quantityContainer">
                    <img src="images/icons/local_mall_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg" alt="localMall" />
                    <div className="quantity js-bag">0</div>
                  </span>
                </NavLink>
              </div>
            </div>
          </div>
      </div>
            
      <div className="bottom-nav js-navigation">
          <div className="bottom-sub js-newHoverContainer">
            <div className="NewHover js-newHover">
                  <p>NEW IN</p>
            </div>
            <div className="NewHover js-newHover">
                  <p>CLOTHING</p>
            </div>
            <div className="NewHover js-newHover">
                  <p>SHOES</p>
            </div>
            <div className="NewHover js-newHover">
                  <p>ACCESSORIES</p>
            </div>
            <div className="NewHover js-newHover">
                  <p>SPORT</p>
            </div>
            <div className="NewHover js-newHover">
                  <p>BRANDS</p>
            </div>
            <div className="NewHover js-newHover">
                  <p>DESIGNER</p>
            </div>
            <div className="NewHover js-newHover">
                  <p>RE-ZAYRA</p>
            </div>
            <div className="NewHover js-newHover">
                  <p>SALE</p>
            </div>
          </div>
      </div>
              
      <div className="main-search js-main-search">
        <div className="main-search-container">
          <button className="close-button js-close-button">
            <img src="images/icons/close_small_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg" alt="closeMall" />
          </button>
          <input className="main-search-bar" type="search" placeholder="Search for products, brands, or categories" />
          <button className="search-button">
            <img src="images/icons/search_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg" alt="searchIcon" />
          </button>
        </div>
      </div>

      <div className="intervalContainer">
          <div className="interval-sub-container">
            <div className="firstInterval js-firstInterval">
              <NavLink>FAST SHIPPING</NavLink>
              <NavLink>FAST DELIVERY</NavLink>
              <NavLink>FREE RETURN</NavLink>
            </div>

            <div className="secondInterval js-secondInterval">
              <NavLink>REFRESH, REVIVE, RECIRCULATE: RE-ZAY &copy;</NavLink>
            </div>
          </div>

          <div className="subHover js-subHover">
              <div className="brandsA-Z">
                <b><h4>Brands A-Z</h4></b>
                <p>Clothing brands</p>
                <p>Shoe brands</p>
                <p>Accessories brands</p>
                <p>Sports brands</p>
                <p>Designer brands</p>
              </div>
              <div className="ManageBrands">
                <b><h4>Manage your brands</h4></b>
                <p>Dulale Diva</p>
                <p>Light Studio</p>
                <p>Ellen Joe</p>
                <p>Dallas</p>
                <p>Mag</p>
                <p>Loop</p>
                <p>Syntia Delaney</p>
                <p>Emillia</p>
              </div>
              <div className="ManageBrands">
                <b><h4>Popular brands</h4></b>
                <p>Julia Alves</p>
                <p>Hanover Fasion Brand</p>
                <p>Aaron Martinex</p>
                <p>Gucci</p>
              </div>
              <div className="subHoverImages">
                <NavLink to="/">
                  <div className="subHoverImages-div">
                    <img src="images/brandsHover/paul-cuoco-CO2vOhPqlrM-unsplash.webp" alt="subhoverImage" loading="lazy" />
                  </div>
                </NavLink>
                <NavLink to="/">
                  <div className="subHoverImages-div">
                    <img src="images/brandsHover/jonas-b-AVSxYIcBxoM-unsplash.webp" alt="subhoverImage" loading="lazy" />
                  </div>
                </NavLink>
                <NavLink to="/">
                  <div className="subHoverImages-div">
                    <img src="images/brandsHover/cornelia-ng-zZLhoEwGCeM-unsplash.webp" alt="subhoverImage" loading="lazy" />
                  </div>
                </NavLink>
                <NavLink to="/">
                    <div className="subHoverImages-div">
                      <img src="images/brandsHover/mostafa-mahmoudi-J4DnKxz_3sA-unsplash.webp" alt="subhoverImage" loading="lazy" />
                    </div>
                </NavLink>
                <NavLink to="/">
                    <div className="subHoverImages-div">
                      <img src="images/brandsHover/john-torcasio-TJrkkhdB39E-unsplash.webp" alt="subhoverImage" loading="lazy" />
                    </div>
                </NavLink>
                <NavLink to="/">
                    <div className="subHoverImages-div">
                      <img src="images/brandsHover/arno-senoner-KKZhQk3j0yA-unsplash.webp" alt="subhoverImage" loading="lazy" />
                    </div>
                </NavLink>
                <NavLink to="/">
                    <div className="subHoverImages-div">
                      <img src="images/brandsHover/tom-radetzki-trdk1R0F3tg-unsplash.webp" alt="subhoverImage" loading="lazy" />
                    </div>
                </NavLink>
                <NavLink to="/">
                    <div className="subHoverImages-div">
                      <img src="images/brandsHover/paul-lichtblau-updW-QUccFE-unsplash.webp" alt="subhoverImage" loading="lazy" />
                    </div>
                </NavLink>
              </div>
          </div>
      </div>
    </>
  )
};
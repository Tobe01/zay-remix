export function Navigation(){
  const mainNav = document.querySelector('.js-header-nav')
  .innerHTML += `<div class="main-mobile-nav js-main-mobile-nav">
                      <div class="main-mobile-nav-sub">


                        <div class="mobile-nav-left">
                          <!-- From Uiverse.io by JulanDeAlb --> 
                            <label class="hamburger js-hamburger">
                              <input class="hamburger-input" type="checkbox">
                              <svg viewBox="0 0 32 32">
                                <path class="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                                <path class="line" d="M7 16 27 16"></path>
                              </svg>
                            </label>
                        </div>

                        <div class="mobile-right">
                          <a href="/Signup"><img src="images/icons/person_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"></a>
                          <a href="/wishlist">
                            <span class="favContainer js-love">
                            <img src="images/icons/favorite_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg">
                            <div class="quantity js-fav">0</div>
                            </span>
                          </a>
                          <a href="/checkout">
                            <span class="quantityContainer">
                            <img src="images/icons/local_mall_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg">
                            <div class="quantity js-bag">0</div>
                            </span>
                          </a>
                        </div>

                      </div>

                      <div class="mobile-searchbar-main js-mobile-input">
                          <div class="mobile-search-bar">
                            <button class="first-button">
                              <img src="images/icons/search_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg" alt="search icon">
                            </button>
                            <input class="mobile-input" placeholder="Search for products, brands, or categories">
                            <button class="second-button"><img src="images/icons/photo_camera_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"></button>
                          </div>
                      </div>


                      <div class="HamburgerContainer js-hamburgerContainer">
                      
                        <div class="hamburgerItems js-hamburgerItems">

                            <div class="closeContainer">
                              <a href="/">
                               <img src="images/logo/zayra-logo-1.webp" alt="zayraLogo">
                              </a>
                               
                               <span class="closeWin">
                                 <img src="images/icons/close_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg" alt="closeIcon">
                               </span>
                            </div>

                            <div class="directoriesContainer">
                              <a href="/">
                                <div>
                                <img src="images/icons/home_app_logo_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg" alt="homeIcon">
                                <p>Home</p>
                               </div>
                              </a>

                              <a href="shop.html">
                               <div>
                                <img src="images/icons/person_heart_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg" alt="womenIcon">
                                <p>Women</p>
                               </div>
                              </a>

                              <a href="shop.html">
                               <div>
                                <img src="images/icons/person_shield_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg" alt="menIcon">
                                <p>Men</p>
                               </div>
                              </a>

                              <a href="shop.html">
                                <div>
                                <img src="images/icons/face_left_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg" alt="kidsIcon">
                                <p>Kids</p>
                               </div>
                              </a>

                              <a href="shop.html">
                               <div>
                                <img src="images/icons/sports_football_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg" alt="SportsIcon">
                                <p>Sport</p>
                               </div>
                              </a>

                              <a href="shop.html">
                               <div>
                                <img src="images/icons/spa_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg" alt="beautyIcon">
                                <p>Beauty</p>
                               </div>
                              </a>
 
                            </div>

                            <div class="NewItemsContainer">

                              <a href="shop.html">
                                <div>
                                <img src="images/icons/notifications_unread_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg" alt="newIcon">
                                <p>NEW IN</p>
                               </div>
                              </a>

                              <a href="shop.html">
                                <div>
                                <img src="images/icons/laundry_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg" alt="laudryIcon">
                                <p>CLOTHING</p>
                               </div>
                              </a>

                              <a href="shop.html">
                               <div>
                                <img src="images/icons/footprint_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg" alt="shoesIcon">
                                <p>SHOES</p>
                               </div>
                              </a>

                              <a href="shop.html">
                                <div>
                                <img src="images/icons/aod_watch_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg" alt="watchIcon">
                                <p>ACCESSORIES</p>
                               </div>
                              </a>

                              <a href="shop.html">
                               <div>
                                <img src="images/icons/sports_football_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg" alt="footbalIcon">
                                <p>SPORTS</p>
                               </div>
                              </a>

                             <a href="shop.html">
                               <div>
                                <img src="images/icons/brand_family_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg" alt="brandsIcon">
                                <p>BRANDS</p>
                               </div>
                             </a>

                             <a href="shop.html">
                               <div>
                                <img src="images/icons/checkroom_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg" alt="checkroomIcon">
                                <p>DESIGNER</p>
                               </div>
                             </a>

                             <a href="shop.html">  
                              <div>
                                <img src="images/icons/price_check_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg" alt="priceIcon">
                                <p>SALE</p>
                               </div>
                             </a>

                            </div>
                        </div>
                      </div>


                  </div>

                
            <div class="top-nav js-navigation">
              <div class="top-nav-items">
                <a>
                  <span><p>Contact & FAQs</p></span>
                </a>
                <a>
                  <span><p>Delivery</p></span>
                </a>
                <a>
                <span><p>Returns</p></span>
                </a>
                <a>
                  <span><p>Track Orders</p></span>
                </a>
                <a>
                <span><p>Share Your Ideas</p></span>
                </a>
                <a>
                  <span><p>Gift Cards</p></span>
                </a>
              </div>
            </div>
            
            <div class="middle-nav js-navigation">
              <div class="left js-left-items">
                  <a href="/"><div>ZAYRA</div></a>
                  <a href="shop.html"><p>WOMEN</p></a>
                  <a href="shop.html"><p>MEN</p></a>
                  <a href="shop.html"><p>KIDS</p></a>
                  <a href="shop.html"><p>SPORT</p></a>
                  <a href="shop.html"><p>BEAUTY</p></a>
                  <a href="shop.html"><p>HOME</p></a>
              </div>
              <div class="right">
                <div class="right-sub">
                  <div class="right-sub1">
                  <span>
                    <img src="images/icons/search_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg" alt="search icon">
                    </span>
                    <input class="js-search-input" placeholder="Search for products, brands, or ...">
                  </div>
                  <div class="right-sub-icon">
                      <a href="/Signup">
                      <span><img src="images/icons/person_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg" alt="login icon"></span>
                      </a>
                      <a href="/wishlist">
                        <span class="favContainer js-love">
                          <img src="images/icons/favorite_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg" alt="wishlist">
                          <div class="quantity js-fav">0</div>
                        </span>
                      </a>
                      <a href="/checkout">
                        <span class="quantityContainer">
                          <img src="images/icons/local_mall_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg">
                          <div class="quantity js-bag">0</div>
                        </span>
                      </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="bottom-nav js-navigation">
                <div class="bottom-sub js-newHoverContainer">
                  
                </div>
              </div>
              
              <div class="main-search js-main-search">
                <div class="main-search-container">
                  <button class="close-button js-close-button"><img src="images/icons/close_small_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"></button>
                  <input class="main-search-bar" type="search" placeholder="Search for products, brands, or categories">
                  <button class="search-button"><img src="images/icons/search_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"></button>
                </div>
              </div>

                  <div class="intervalContainer">
                    <div class="interval-sub-container">
                      <div class="firstInterval js-firstInterval">
                        <a>FAST SHIPPING</a>
                        <a>FAST DELIVERY</a>
                        <a>FREE RETURN</a>
                      </div>

                      <div class="secondInterval js-secondInterval">
                        <a>REFRESH, REVIVE, RECIRCULATE: RE-ZAY &copy;</a>
                      </div>
                    </div>

                    <div class="subHover js-subHover">
                        <div class="brandsA-Z">
                          <b><h4>Brands A-Z</h4></b>
                          <p>Clothing brands</p>
                          <p>Shoe brands</p>
                          <p>Accessories brands</p>
                          <p>Sports brands</p>
                          <p>Designer brands</p>
                        </div>
                        <div class="ManageBrands">
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
                          <div class="ManageBrands">
                          <b><h4>Popular brands</h4></b>
                          <p>Julia Alves</p>
                          <p>Hanover Fasion Brand</p>
                          <p>Aaron Martinex</p>
                          <p>Gucci</p>
                          </div>
                        <div class="subHoverImages">
                          <a href="#">
                          <div class="subHoverImages-div">
                              <img src="images/brandsHover/paul-cuoco-CO2vOhPqlrM-unsplash.webp" alt="subhoverImage" loading="lazy">
                            </div>
                          </a>
                          <a href="#">
                          <div class="subHoverImages-div">
                              <img src="images/brandsHover/jonas-b-AVSxYIcBxoM-unsplash.webp" alt="subhoverImage" loading="lazy">
                            </div>
                          </a>
                          <a href="#">
                          <div class="subHoverImages-div">
                              <img src="images/brandsHover/cornelia-ng-zZLhoEwGCeM-unsplash.webp" alt="subhoverImage" loading="lazy">
                            </div>
                          </a>
                          <a href="#">
                          <div class="subHoverImages-div">
                              <img src="images/brandsHover/mostafa-mahmoudi-J4DnKxz_3sA-unsplash.webp" alt="subhoverImage" loading="lazy">
                            </div>
                          </a>
                          <a href="#">
                          <div class="subHoverImages-div">
                              <img src="images/brandsHover/john-torcasio-TJrkkhdB39E-unsplash.webp" alt="subhoverImage" loading="lazy">
                            </div>
                          </a>
                          <a href="#">
                          <div class="subHoverImages-div">
                              <img src="images/brandsHover/arno-senoner-KKZhQk3j0yA-unsplash.webp" alt="subhoverImage" loading="lazy">
                            </div>
                          </a>
                          <a href="#">
                          <div class="subHoverImages-div">
                              <img src="images/brandsHover/tom-radetzki-trdk1R0F3tg-unsplash.webp" alt="subhoverImage" loading="lazy">
                            </div>
                          </a>
                          <a href="#">
                          <div class="subHoverImages-div">
                              <img src="images/brandsHover/paul-lichtblau-updW-QUccFE-unsplash.webp" alt="subhoverImage" loading="lazy">
                            </div>
                          </a>
                        </div>
                      </div
                  </div>
                `

          const searchBar = document.querySelector('.js-search-input');
          const mainSearch = document.querySelector('.js-main-search');
          const closeButton = document.querySelector('.js-close-button');

          searchBar.addEventListener('click', ()=>{
              const currentVisibility = getComputedStyle(mainSearch).visibility;

              searchBar.placeholder = "Search for products, brands, or ca";

              if(currentVisibility === "hidden"){
              setTimeout(()=>{
                mainSearch.style.visibility = "visible";
              }, 500)
              }else{
              mainSearch.style.visibility = "hidden";
              }
            });

          closeButton.addEventListener('click', ()=>{
            const currentVisibility = getComputedStyle(mainSearch).visibility;

            if(currentVisibility === "visible" && searchBar.placeholder === "Search for products, brands, or ca" ){
              mainSearch.style.visibility = "hidden";
              searchBar.placeholder = "Search for products, brands, or ...";
            }else{
              mainSearch.style.visibilty = "visible";
              searchBar.placeholder = "Search for products, brands, or ca";
            }
          })

          window.addEventListener('resize', ()=>{
            const mobileNav = document.querySelector('.js-main-mobile-nav');
            const mainSearch = document.querySelector('.js-main-search');
            // scripts for nav bar that appears after clicking the landing page nav
            const mainSearchVisibility = getComputedStyle(mainSearch).visibility;
            const currentView = getComputedStyle(mobileNav).visibility;
            const width = window.innerWidth;  

            if((width <= 1070 && currentView === "hidden") || (width <= 1070 && currentView === "hidden") || (width <= 1070 && mainSearchVisibility === "visible")){
                mobileNav.style.visibility = "visible";
                mainSearch.style.visibility = "hidden";
              } else if (width >= 1070) {
                mobileNav.style.visibility = "hidden";
                mainSearch.style.visibility = "hidden";
              }
            })

            // Scripts for Main Search on mobile devices

            // const cameraSearch = document.querySelector('.js-camera-Search');
            
            // cameraSearch.addEventListener('click', ()=> {
            //     const sections = document.querySelectorAll('.js-navigation');
            //     const central = document.querySelector('.js-centralSearch');
            //     const mobileNav = document.querySelector('.js-main-mobile-nav');
            //     const centralVisibility = getComputedStyle(central).visibility;
            //     const currentView = getComputedStyle(mobileNav).visibility;
            //     const sectionsVisibility = getComputedStyle(sections[0]).visibility; 

            //     if(centralVisibility === "hidden" && currentView === "visible" && sectionsVisibility === "visible"){
            //       central.style.visibility = "visible";
            //       mobileNav.style.visibility = "hidden";
            //       sections.forEach(section => section.style.visibility = "hidden");
            //     } else{
            //       central.style.visibility = "hidden";
            //       mobileNav.style.visibility = "visible";
            //       sections.forEach(section => section.style.visibility = "visible");
            //     }
            //   });


            // const cancelButton = document.querySelector('.js-searchButton');

            // cancelButton.addEventListener('click', ()=>{
            //   const mobileNav = document.querySelector('.js-main-mobile-nav');
            //   const sections = document.querySelectorAll('.js-navigation');
            //   const central = document.querySelector('.js-centralSearch');
            //   const centralVisibility = getComputedStyle(central).visibility;
            //   const currentView = getComputedStyle(mobileNav).visibility;
            //   const sectionsVisibility = getComputedStyle(sections[0]).visibility; 

            //   if(centralVisibility === "visible" && sectionsVisibility === "hidden" && currentView === "hidden"){
            //     central.style.visibility = "hidden";
            //     mobileNav.style.visibility = "visible";
            //     sections.forEach(section => section.style.visibility = "visible");
            //   } else {
            //     central.style.visibility = "visible";
            //     mobileNav.style.visibility = "hidden";
            //     sections.forEach(section => section.style.visibility = "hidden");
            //   }
            // }) 

            setInterval(()=>{
              const firstInterval = document.querySelector('.js-firstInterval');
              const secondInterval = document.querySelector('.js-secondInterval');

              const firstVisibility = getComputedStyle(firstInterval).visibility;
              const secondVisibility = getComputedStyle(secondInterval).visibility;

              const firstOpacity = getComputedStyle(firstInterval).opacity;
              const secondOpacity = getComputedStyle(secondInterval).opacity;

              if((firstVisibility === "hidden" && secondVisibility === "hidden") || (firstOpacity === 0 && secondOpacity === 0)){
               firstInterval.style.visibility = "visible";
               secondInterval.style.visibility = "hidden";
               firstInterval.style.opacity = 1;
               secondInterval.style.opacity = 0;
              } else if ((firstVisibility === "visible" && secondVisibility === "hidden") || (firstOpacity === 1 && secondOpacity === 0)){
               firstInterval.style.visibility = "hidden";
               secondInterval.style.visibility = "visible";
               firstInterval.style.opacity = 0;
               secondInterval.style.opacity = 1;
              } else if ((firstVisibility === "hidden" && secondVisibility === "visible") || (firstOpacity === 0 && secondOpacity === 1)){
                firstInterval.style.visibility = "visible";
                secondInterval.style.visibility = "hidden";
                firstInterval.style.opacity = 1;
                secondInterval.style.opacity = 0;
              }
            }, 4000);


            // Scripts for hover effect on new items

           
        // scripts for SubHover

        const newHover = [{
          title: 'NEW IN',
        }, {
          title: 'CLOTHING',
        }, {
          title: 'SHOES',
        }, {
          title: 'ACCESSORIES',
        }, {
          title: 'SPORT',
        }, {
          title: 'BRANDS',
        }, {
          title: 'DESIGNER',
        }, {
          title: 'RE-ZAYRA',
        }, {
          title: 'SALE',
        }]

        const renderHover = document.querySelector('.js-newHoverContainer');

        if(renderHover){
          newHover.forEach((item)=>{
            renderHover.innerHTML += `
                    <div class="NewHover js-newHover">
                        <p>${item.title}</p>
                    </div>
                  `
          })
        }

      const hoverItems = document.querySelectorAll('.js-newHover');

      hoverItems.forEach((item) => {
        const subHover = document.querySelector('.js-subHover');

        let isOver = false;

        item.addEventListener('mouseenter', () => {
          subHover.style.visibility = "visible";
        });

        subHover.addEventListener('mouseenter', ()=>{
           isOver = true;
        });

        subHover.addEventListener('mouseleave', ()=>{
           isOver = false;
           subHover.style.visibility = "hidden";
        })

        item.addEventListener('mouseleave', ()=>{
          setTimeout(()=>{
            if(!isOver){
              subHover.style.visibility = "hidden";
            }
          }, 100)
        })
        
      });


      const hamBurg = document.querySelector('.js-hamburger');
      const closeBurg = document.querySelector('.closeWin');

      hamBurg.addEventListener('click', ()=>{
        const hamCont = document.querySelector('.js-hamburgerContainer');
        const hamItems = document.querySelector('.js-hamburgerItems');
        hamCont.classList.add('active');
        hamItems.classList.add('active');

      });

      closeBurg.addEventListener('click', ()=>{
        const hamCont = document.querySelector('.js-hamburgerContainer');
        const hamItems = document.querySelector('.js-hamburgerItems');
        hamCont.classList.remove('active');
        hamItems.classList.remove('active');

      })

   
}; Navigation();

export const bagQuantity = document.querySelectorAll('.js-bag');
export const loveButton = document.querySelectorAll('.js-fav');

import './SignupHeader.css';

export function SignupHeader(){
  return(
    <>
      <nav className="logingNav">
          <div className="logingNav-main">
            <a href="shop.html">
              <button><span><img src="images/icons/arrow_left_alt_24dp_EFEFEF_FILL0_wght400_GRAD0_opsz24.svg" alt="arrowLeft" /></span>Continue Shopping</button>
            </a>
            <div className="logingNavIcon">
              <a href="index.html">
                <img src="images/logo/White Black Minimalist Typography Studio Name Logo.webp" alt="ZaraLogo" />
              </a>
            </div>

            <div className="faqs">
              <a>
                <img src="images/icons/help_24dp_EFEFEF_FILL0_wght400_GRAD0_opsz24.svg" alt="helpIcon" />
                <p>Contact & FAQs</p>
              </a>
            </div>
          </div>
      </nav>
    </>
  )
};
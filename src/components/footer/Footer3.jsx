import Link from "next/link";
import ThumbFooter from "../../../public/assets/imgs/thumb/footer.webp";
import FooterLogoWhite from "../../../public/assets/imgs/rook/home/Rook-white.png";
import Image from "next/image";
import { formModalContext } from "@/pages/_app";
import { useContext } from "react";


export default function Footer3(
  { customThumbFooter }
) {
  const { setShowModal } = useContext(formModalContext);
  const openTicket = () => {

    if (document) {
      // get the button with the id zohohc-asap-web-launcherbox
      const chatButton = document.getElementById('zohohc-asap-web-launcherbox');
  
      // click the chat button
      chatButton.click();
    }
    
  }
  return (
    <>
      <footer className="footer__area">
        <div className="footer__top">
          <div className="container footer-line"></div>
          {/* <Image
            priority
            width={1160}
            style={{ height: "auto" }}
            src={customThumbFooter ?? ThumbFooter}
            alt="Footer Image"
            data-speed="0.75"
          /> */}
          {/* <div style={{
                width: 1160,
                height: 662,
                // backgroundImage: "radial-gradient(#0c0c0c 3.5px, transparent 3.5px), radial-gradient(#0c0c0c 3.5px, transparent 3.5px)",
                // backgroundSize: "27px 27px",
                // backgroundPosition: "0 0, 13.5px 13.5px",
                backgroundColor: "#fff"
              }}>  */}
          {/* </div> */}
        </div>

        <div className="footer__btm">
          <div className="container">
            <div className="row footer__row">
              <div className="col-xxl-12">
                <div className="footer__inner">
{/* col-1 */}

                  <div className="footer__widget-2">
                    <Image
                      priority
                      style={{ width: "auto", height: 45 }}
                      className="footer__logo"
                      src={FooterLogoWhite}
                      alt="Footer Logo"
                    />
                   
                    
                  </div>

{/* col-2 */}
                  <div className="footer__widget-2">
                    <h2 className="footer__widget-title">Get in Touch</h2>
                    <ul className="footer__contact">
                    <li>
                        <a href="mailto:fellows@rookhq.com">
                          empower@rookhq.com
                        </a>
                      </li>
                      <li>
                        <a href="tel:07092700022" className="phone">
                          (+91) 709 270 0022{" "}
                        </a>
                      </li>
                     
                    </ul>
                  </div>

{/* col-3 */}

                  <div className="footer__widget-2">
                  <h2 className="footer__widget-title">Follow Us</h2>
                   
                    <ul className="footer__social">
                      <li>
                        <a href="https://www.linkedin.com/company/rook/mycompany/verification/">
                          <span>
                            <i className="fa-brands fa-linkedin"></i>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/rookhq/">
                          <span>
                            <i className="fa-brands fa-instagram"></i>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.facebook.com/RookCom">
                          <span>
                            <i className="fa-brands fa-facebook-f"></i>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.youtube.com/@rookl">
                          <span>
                            <i className="fa-brands fa-youtube"></i>
                          </span>
                        </a>
                      </li>

                    </ul>
                  </div>

                 
{/* col-4 */}

                  <div className="footer__widget-2" style={{width:"300px"}} >
                    <h2 className="footer__widget-title">Terms and Conditions</h2>
                    {/* <ul className="footer__contact">
                      <li>© All Rights Reserved 2020 - 2024 <br /><strong>Rook Ecom Private Limited</strong></li>
                      
                     
                      <li>
                      Disclaimer: All logos and trademarks belong to their respective owners.
                      </li>
                    </ul> */}
                  </div>

{/* col-5 */}
<div className="footer__widget-3 text-center text-md-left">
  <h2 className="footer__widget-title">Work with Us</h2>
  <ul className="footer__contact"></ul>
</div>

<hr />
<div className="footer__copyright text-end"  style={{borderTop:"1px solid #171717"}}  >
                    <p>
                      © All Rights Reserved 2020 - {new Date().getFullYear()}{" "}
                      <a href="https://rookhq.com/" target="_blank">
                        Rook Ecom Private Limited
                      </a> 
                    </p>
                    {/* <p>
                    Disclaimer: All logos and trademarks belong to their respective owners.
                    </p> */}
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

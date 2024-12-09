import Link from "next/link";
import { formModalContext } from "@/pages/_app";
import { useContext } from "react";


const PortfolioV2CTA = () => {
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
      <section className="cta__area">
        <div className="container line pt-140 pb-110">
          <div className="line-3"></div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="cta__content">
                <p className="cta__sub-title">Work with us</p>
                <h2 className="cta__title title-anim">
                  We would love to hear more about your project
                </h2>
                <div className="btn_wrapper">
                  <button
                    onClick={openTicket}
                   
                    className="wc-btn-primary btn-hover btn-item"
                  >
                    <span></span>Start Your <br /> Journey
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioV2CTA;

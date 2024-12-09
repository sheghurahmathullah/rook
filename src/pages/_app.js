import "bootstrap/dist/css/bootstrap.min.css";
import "../../public/assets/scss/master.scss";
import "@/styles/extra.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import { createContext, useState } from "react";
import Script from "next/script";
import CollectionForm from "@/components/form/CollectionForm";
// import browserEnv from "browser-env";

config.autoAddCss = false;

export const formModalContext = createContext();

export default function App({ Component, pageProps }) {
  const [showModal, setShowModal] = useState(false);
  // const [showEventModal, setShowEventModal] = useState(true);

  function onClose() {
    setShowModal(false);
  }

  // function onEventClose() {
  //   setShowEventModal(false);
  // }

  return (
    <>
      <formModalContext.Provider value={{ showModal, setShowModal }}>
        <Component {...pageProps} />;
        {showModal && (
          <div className="custom-modal">
            <div className="overlay" onClick={onClose}></div>
            <div className="modal-content">
              <div className="modal-main-div">
                <button className="close-button" onClick={onClose}>
                  <i className="fa-solid fa-close"></i>
                </button>
                <CollectionForm />
              </div>
            </div>
          </div>
        )}
        {/* { showEventModal && (
        <div className="custom-modal">
          <div className="overlay" onClick={onEventClose}></div>
          <div className="modal-content">
            <div className="modal-main-div">
              <button className="close-button" onClick={onEventClose}>
                <i className="fa-solid fa-close"></i>
              </button>
              <div id="container">
      <div id="content">
        <h1>Happy New Year 2024!</h1>
        <p>Wishing you a year filled with joy, success, and prosperity.</p>
      </div>
                  <iframe src="https://www.youtube.com/embed/aa7b7n-F5Vg?si=HaLp8UoQ_MA3PIaj&amp;autoplay=1&amp;mute=1&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              <div id="continue" style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                paddingTop: "80px"
              }}>
                <a href="#" onClick={onEventClose} style={{ color: "gray", textDecoration: "underline" }}>
                  Continue to the site <i className="fa-solid fa-chevron-right"></i>
                </a>
              </div>
              </div>
            </div>
          </div>
        </div>
      )} */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-7WRHQFLLDH"
          id={"gtag-script"}
        />
        <Script id={"script-tag"} strategy="lazyOnload">
          {`  window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-7WRHQFLLDH');`}
        </Script>
        <Script id={"clarity-script"} type="text/javascript">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "l1kjlp016k");
          `}
        </Script>
        <Script id={"wati-script"} strategy="lazyOnload">
          {`
            var url = 'https://wati-integration-prod-service.clare.ai/v2/watiWidget.js?41620';
            var s = document.createElement('script');
            s.type = 'text/javascript';
            s.async = true;
            s.src = url;
            var options = {
              "enabled":true,
              "chatButtonSetting":{
                "backgroundColor":"#00e785",
                "ctaText":"Talk With Us",
                "borderRadius":"25",
                "marginLeft": "0",
                "marginRight": "20",
                "marginBottom": "20",
                "ctaIconWATI":false,
                "position":"right"
              },
              "brandSetting":{
                "brandName":"Rook Fellows",
                "brandSubTitle":"undefined",
                "brandImg":"https://media.licdn.com/dms/image/D560BAQEBJdb6nvjrcg/company-logo_200_200/0/1704008762846/rf_logo?e=1715212800&v=beta&t=dg4stLIayx25GoDX08OrRp0h5LPhN7WI-zC2Oz6ua7I",
                "welcomeText":"Elevate Your Brand's Digital Footprint!",
                "messageText":"",
                "backgroundColor":"#00e785",
                "ctaText":"Talk With Us",
                "borderRadius":"25",
                "autoShow":false,
                "phoneNumber":"917092700022"
              }
            };
            s.onload = function() {
              CreateWhatsappChatWidget(options);
            };
            var x = document.getElementsByTagName('script')[0];
            x.parentNode.insertBefore(s, x);
          `}
        </Script>
        <Script id={"wa-button"}>
          {`
            // event listener to check if a class is available in the DOM
            const checkExist = setInterval(function() {
              if (document.querySelector(".wa-chat-box-poweredby")) {
                const promoLink = document.querySelector(".wa-chat-box-poweredby");
                // set innerhtml to empty string
                promoLink.innerHTML = "";
                promoLink.style.height = "20px";
                clearInterval(checkExist);

              }
            }, 100);
          `}
        </Script>
        <Script
          type="text/javascript"
          id="zohodesk_webWidget"
          nonce="rookfellows"
          src="https://desk.zoho.in/portal/api/web/inapp/129922000000218015?orgId=60025162283"
          defer
        ></Script>
        <Script id="start-your-journey">
          {`
            //write the javascript to get the element with the id zohohc-asap-web-launcherbox and hide it
            let checkExist_1 = setInterval(function() {
              if (document.getElementById('zohohc-asap-web-launcherbox')) {
                var zohodesk_webWidget = document.getElementById('zohohc-asap-web-launcherbox');
                zohodesk_webWidget.style.display = 'none';
                clearInterval(checkExist_1);
              }
            }, 100);

          `}
        </Script>
      </formModalContext.Provider>
    </>
  );
}

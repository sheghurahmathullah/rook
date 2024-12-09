import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger, SplitText } from "@/plugins";
import Shape23 from "../../../public/assets/imgs/rook/home/Rook-round-logo.png";
import ScrollDown from "../../../public/assets/imgs/essential-img/scrolldown.svg";
import Image from "next/image";
import animationCharCome from "@/lib/utils/animationCharCome";
import Link from "next/link";
import { formModalContext } from "@/pages/_app";
import { useContext } from "react";

gsap.registerPlugin(ScrollTrigger);

const ModernAgencyHero = () => {
  const charAnim = useRef();
  const charAnim2 = useRef();
  const heroTextAnim = useRef();
  useEffect(() => {
    animationCharCome(charAnim.current);
    animationCharCome(charAnim2.current);
    if (typeof window !== "undefined") {
      let hero__text_animation = heroTextAnim.current;
      let tHero = gsap.context(() => {
        let split_text_animation = new SplitText(hero__text_animation, {
          type: "chars words",
        });
        gsap.from(
          split_text_animation.words,
          { duration: 1, x: 50, autoAlpha: 0, stagger: 0.05 },
          "-=1"
        );
        let imageTl_8 = gsap.timeline({
          scrollTrigger: {
            trigger: ".portfolio__big",
            start: "top top+=90",
            pin: true,
            markers: false,
            scrub: 1,
            pinSpacing: false,
            end: "bottom bottom+=150",
          },
        });
        imageTl_8.to(".portfolio__big-inner", {
          width: "100%",
        });
      });
      return () => tHero.revert();
    }
  }, []);


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
      <section className="hero__area-4 sp-x">
        <div className="hero__content-8">
        <div style={{ display: "flex", alignItems: "center" }}>
  <h2
    
    className="sec-title-4 sec-title-5"
    ref={charAnim}
  >
    Empower{" "}
  </h2>
  <Image
    className="d-none d-md-block"
    priority
    width={120}
    style={{
      height: "120px",
      marginLeft: "10px",
      animation: "rotateImage 5s linear infinite",
    }}
    src={Shape23}
    alt="shape"
  />
</div>

<style jsx>{`
  @keyframes rotateImage {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  /* Media query for mobile screens */
  @media (max-width: 768px) {
    .sec-title-4 {
      text-align: center;
      width: 100%; /* Ensures text occupies full width for centering */
    }
  }
     @media (max-width: 768px) {
    /* Mobile screens - stack the buttons vertically */
    div {
      flex-direction: column;
    }

    .btn_wrapper {
      margin-left: 0 !important; /* Remove negative margin on mobile */
      margin-bottom: 10px; /* Optional: Add space between buttons */
    }
  }
`}</style>
          <h2 className="sec-title-4 animation__char_come" ref={charAnim2}>
            Your Business <span>Digitally</span>
          </h2>
          <div className="scroll-wrapper">
            <div className="scroll-down">
              <span>scroll</span>
              <Image
                priority
                style={{ width: "auto", height: "auto" }}
                src={ScrollDown}
                alt="Scroll Down"
              />
            </div>
            
            <div
  style={{
    display: "flex",
    justifyContent: "center", // Keeps buttons centered horizontally
    alignItems: "center", // Aligns buttons vertically
    gap: "5px", // Small space between buttons
    flexDirection: "row", // Default layout for larger screens
  }}
>
  <div className="btn_wrapper btn_centered">
    <button
    style={{border:"2px solid #0096d4"}}
      onClick={openTicket}
      className="wc-btn-primary btn-hover btn-item"
    >
      <span></span>Connect <br /> with us{" "}
      <i className="fa-solid fa-arrow-right"></i>
    </button>
  </div>
  <div
    className="btn_wrapper btn_centered"
    style={{
      marginLeft: "-600px", // Adjust the container's margin for larger screens
    }}
  >
    <button
      onClick={openTicket}
      style={{border:"2px solid #0096d4"}}
      className="wc-btn-primary btn-hover btn-item"
    >
      <span></span>Success <br /> Stories{" "}
      <i className="fa-solid fa-arrow-right"></i>
    </button>
  </div>
</div>










            
            
            
          </div>
        </div>
      </section>
      
    </>
  );
};

export default ModernAgencyHero;

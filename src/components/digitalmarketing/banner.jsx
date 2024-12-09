import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { SplitText } from "@/plugins";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Link from "next/link.js";
import ArrowDownBig from "../../../public/assets/imgs/icon/arrow-down-big.webp";
import Hero1bg from "../../../public/assets/imgs/hero/1/1-bg.webp";
import Image from "next/image.js";

const DigitalAgencyHero = () => {

    const [padding, setPadding] = useState({ paddingBottom: "300px", paddingLeft: "30px" });

  useEffect(() => {
    const updatePadding = () => {
      if (window.innerWidth < 768) { // Adjust the breakpoint as needed
        setPadding({ paddingBottom: "0px", paddingLeft: "0px" });
      } else {
        setPadding({ paddingBottom: "300px", paddingLeft: "30px" });
      }
    };

    updatePadding(); // Set initial padding based on current screen size
    window.addEventListener("resize", updatePadding);

    return () => window.removeEventListener("resize", updatePadding);
  }, []);
  const heroTitle = useRef();
  const heroSubTitle = useRef();
  useEffect(() => {
    if (typeof window !== "undefined") {
      let tHero = gsap.context(() => {
        gsap.set(".experience", {
          y: 50,
          opacity: 0,
        });
        let split_hero__title = new SplitText(heroTitle.current, {
          type: "chars",
        });
        let split_hero__subtitle = new SplitText(heroSubTitle.current, {
          type: "chars words",
        });

        gsap.from(split_hero__title.chars, {
          duration: 1,
          x: 70,
          autoAlpha: 0,
          stagger: 0.1,
        });
        gsap.from(
          split_hero__subtitle.words,
          { duration: 1, x: 50, autoAlpha: 0, stagger: 0.05 },
          "-=1"
        );

        gsap.to(
          ".experience",
          {
            y: 0,
            opacity: 1,
            duration: 2,
            ease: "power2.out",
          },
          "-=1.5"
        );
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <section className="hero__area " >
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="hero__content animation__hero_one">
                <Link href="/service/marketing">
                Get More Customers with Results-Driven Digital Marketing
                 </Link>
                <div className="hero__title-wrapper">
                  <h1   style={{ fontSize: "clamp(30px, 8vw, 100px)",color:"white" }}  ref={heroTitle}>
                    Digital <br/>Marketing
                  </h1>
                  <p className="hero__sub-title" ref={heroSubTitle}>
                    With every single one of our clients, Making a meaningful impression through thoughtful digital marketing strategies.
                  </p>
                </div>
                <div className="btn_wrapper btn_centered" style={padding}>
      <button className="wc-btn-primary btn-hover btn-item">
        <span></span>Get quote{" "}
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
              </div>
            </div>
          </div>
        </div>

        <Image
          priority
          style={{ width: "auto", height: "auto" }}
          src={Hero1bg}
          alt="image"
          className="hero1_bg"
        />
      </section>
    </>
  );
};

export default DigitalAgencyHero;

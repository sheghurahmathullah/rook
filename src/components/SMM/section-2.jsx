import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger, ScrollSmoother } from "@/plugins";
import Link from "next/link";
import Image from "next/image";
// import One from "../../../public/assets/imgs/about/2/1.jpg";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const DesignStudioAbout = () => {
   const [bgColor, setBgColor] = useState("");
  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        gsap.to(".about__img-2 img", {
          scale: 1.15,
          duration: 1,
          scrollTrigger: {
            trigger: ".about__img-2",
            start: "top bottom",
            markers: false,
            scrub: 1,
            end: "bottom center",
          },
        });
        ScrollSmoother.create({
          smooth: 1.35,
          effects: device_width < 1025 ? false : true,
          smoothTouch: false,
          normalizeScroll: false,
          ignoreMobileResize: true,
        });
      });
      return () => tHero.revert();
    }
  }, []);


  const [theme, setTheme] = useState();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const bodyElement = document.querySelector("body");

      // Function to update theme based on body class
      const updateTheme = () => {
        if (bodyElement.classList.contains("dark")) {
          setTheme("dark");
        } else {
          setTheme("light");
        }
      };

      // Call updateTheme initially
      updateTheme();

      // Set up a MutationObserver to watch for class changes
      const observer = new MutationObserver(() => {
        updateTheme();
      });

      observer.observe(bodyElement, {
        attributes: true, // Watch for attribute changes
        attributeFilter: ["class"], // Specifically watch the 'class' attribute
      });

      // Cleanup observer on component unmount
      return () => observer.disconnect();
    }
  }, []);


  const themestyle = () => ({
    background: theme === "light" ? "#ffff" : "",
  });

  const fontstyle = () => ({
    background: theme === "light" ? "#ffff" : "",
    color: theme === "light" ? "#000" : "#fff",
  });

  



  return (
    <>
      <section className="about__area-2"style={themestyle()}>
        <div className="container pt-130 pb-110">
          <div className="row">
            <div className="col-xxl-12">
              <div className="sec-title-wrapper">
                <h2 className="sec-title title-anim" style={fontstyle()}>
                Social media success is like discovering the magic formula for your brand’s growth—once you find it, everything clicks into place.
                </h2>
              </div>
              <div className="sec-text-wrapper">
                <div className="sec-text text-anim text-justify text-center" style={{width:"80%", fontstyle}} >
                    
                  <p>
                  In the ever-shifting world of social media, knowing where to focus your efforts can feel like navigating a maze. That’s where we come in. We take the guesswork out of the equation, finding the perfect mix of strategies that will propel your brand forward. From crafting a visionary plan to executing with precision, we manage every detail, constantly refining and adapting to keep you ahead of the trends and deeply connected with the right audience.
                  </p>
                </div>
                <div className="btn_wrapper">
                        <button
                          className="wc-btn-primary "
                          onMouseEnter={() => setBgColor("#ffd800")}
                          onMouseLeave={() => setBgColor("")}
                          style={{
                            border: "2px solid #ffd800",
                            backgroundColor: bgColor,
                          }}
                        >
                          <span></span> Book A Free <br />
                          Consultation <i className="fa-solid fa-arrow-right"></i>
                        </button>
                      </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about__img-2 pb-130">
          <Image
            priority
            width={100}
            style={{ height: "auto" }}
            // src={One}
            src="/assets/imgs/digitalmarketing/smm/smm-banner2.jpg"
            alt="About Image"
            data-speed="0.2"
          />
        </div>
      </section>
    </>
  );
};

export default DesignStudioAbout;

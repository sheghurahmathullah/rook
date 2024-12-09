import { useEffect,useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger, ScrollSmoother } from "@/plugins";
import Link from "next/link";
import Image from "next/image";
// import One from "../../../public/assets/imgs/about/2/1.jpg";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const DesignStudioAbout = () => {
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
      <section className="about__area-2" style={themestyle()}>
        <div className="container pt-130 pb-110">
          <div className="row">
            <div className="col-xxl-12">
              <div className="sec-title-wrapper">
                <h2 className="sec-title title-anim"style={fontstyle()}>
                  You’re one decision away from your biggest breakthrough.
                </h2>
              </div>
              <div className="sec-text-wrapper">
                <div className="sec-text text-anim"style={fontstyle()}>
                  <p>
                    We will pinpoint your customers based on their behaviours,
                    interests, activities, preferences—even of their shopping
                    habits. By creating, managing and tweaking your Facebook
                    ads, our Facebook ads specialists will reduce your CPA,
                    increase your ROI, and generate greater awareness about your
                    brand.
                  </p>
                </div>
                <div className="sec-btn btn_wrapper">
                  <Link
                    className="wc-btn-pink btn-hover btn-item"
                    style={{border:"2px solid #0096d4"}}
                    href="/about"
                  >
                    <span></span> Build My <br />Campaign{" "}
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about__img-2">
          <Image
            priority
            width={100}
            style={{ height: "auto" }}
            src="/assets/imgs/digitalmarketing/metaads/meta-banner.png"
            // src={One}
            alt="About Image"
            data-speed="0.2"
          />
        </div>
      </section>
    </>
  );
};

export default DesignStudioAbout;

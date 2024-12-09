import { useEffect, useRef,useState } from "react";
import { gsap } from "gsap";
import { SplitText } from "@/plugins";
import HeroShape from "../../../public/assets/imgs/hero/4/Ellipse 1.png";
import HeroShape3 from "../../../public/assets/imgs/hero/4/star-blue.png";
import HeroShape2 from "../../../public/assets/imgs/hero/4/hero-shape-2.webp";

import Link from "next/link.js";

import Image from "next/image.js";

const StartupAgencyHero = () => {
  const [bgColor, setBgColor] = useState("#0096d4");
  const heroTitle = useRef();
  const heroText = useRef();
  const heroAnchor = useRef();
  const heroImg = useRef();

  useEffect(() => {
    if (typeof window !== "undefined") {
      let tHero = gsap.context(() => {
        gsap.set(heroImg.current, {
          opacity: 0,
          y: 50,
        });
        gsap.set(heroAnchor.current, {
          opacity: 0,
          y: 50,
        });

        let split_hero6_title = new SplitText(heroTitle.current, {
          type: "chars",
        });
        let split_hero6_desc = new SplitText(heroText.current, {
          type: "chars words",
        });

        gsap.from(split_hero6_title.chars, {
            duration: 0.2, // Minimal duration for very quick animations
            x: 20, // Reduced distance to make the animation appear smoother and faster
            autoAlpha: 0,
            stagger: 0.01, // Minimal stagger for rapid character transitions
          });
          gsap.from(
            split_hero6_desc.words,
            {
              duration: 0.2, // Reduced duration for quick transitions
              x: 15, // Lowered distance for a snappier effect
              autoAlpha: 0,
              stagger: 0.008, // Very low stagger for fast word transitions
            },
            "-=0.2" // Adjust overlap for minimal sequencing
          );
        gsap.to(
          heroAnchor.current,
          { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
          "-=1.5"
        );
        gsap.to(
          heroImg.current,
          { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
          "-=1"
        );
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <section className="hero__area-6 pb-130 ">
        <div className="container g-0 line_4">
          <div className="line-col-4">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="hero__content-6 hero__six_anim">
              
                <h1 className="hero__title-6 " ref={heroTitle} style={{fontSize: "clamp(30px, 8vw, 100px)"}}>
                Email  <br /> Marketing {" "}
                </h1>
                <p ref={heroText} style={{fontSize:"20px"}}> 
               <strong>Emails that resonate with the right people, creating lasting connections and trust.</strong> <br />
              
                </p>
                <Link
                  className="btn-started btn-hover"
                  style={{ backgroundColor: bgColor }}
                  href="/contact"
                  ref={heroAnchor}
                  onMouseEnter={() => setBgColor("#dc2e3e")}
      onMouseLeave={() => setBgColor("#0096d4")}
                >
                  Get Strategy
                </Link>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 text-justify heroPadding">
  <div className="hero__right-6">
    <p ref={heroText}>
      <strong></strong> <br />
      The right email at the right time can convert a cold lead into a warm lead, a fellow business into a loyal customer, and a first-time buyer into a lifelong advocate of your brand. Tell your audience just what they want to hear, when they want to hear it. 
    </p>
  </div>
  <style jsx>{`
    .heroPadding {
      padding-top: 320px;
      transition: '0.1s ease-in-out'
    }
    @media (max-width: 768px) {
      .heroPadding {
        padding-top: 10px;
      }
    }
  `}</style>
</div>
          </div>
        </div>
        <Image
          priority
          width={80}
          height={158}
          className="hero__shape"
          src={HeroShape}
          alt="Shape Image"
        />

<Image
          priority
           width={38}
          height={49}
          className="hero__shape-3"
          src={HeroShape3}
          alt="Shape Image"
        />

<Image
          priority
          width={48}
          height={48}
          className="hero__shape-2"
          src={HeroShape2}
          alt="Shape Image"
        />
      </section>
    </>
  );
};

export default StartupAgencyHero;

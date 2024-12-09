import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Service21 from "../../../public/assets/imgs/service/2/S.svg";
import Service22 from "../../../public/assets/imgs/service/2/M.svg";
import Service23 from "../../../public/assets/imgs/service/2/SMM.svg";
import Service24 from "../../../public/assets/imgs/service/2/E.svg";
import Image from "next/image";
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const ServiceElementV3 = () => {

  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        let animation__services2 = gsap.utils.toArray(
          ".animation__service-2 .service__item-2"
        );
        gsap.set(animation__services2, {
          opacity: 0,
          x: -30,
        });

        if (animation__services2) {
          if (device_width < 1023) {
            animation__services2.forEach((item, i) => {
              gsap.to(item, {
                scrollTrigger: {
                  trigger: item,
                  start: "top center+=200",
                  markers: false,
                },
                opacity: 1,
                x: 0,
                ease: "power2.out",
                duration: 2,
                stagger: {
                  each: 0.4,
                },
              });
            });
          } else {
            gsap.to(".animation__service-2 .service__item-2", {
              scrollTrigger: {
                trigger: ".animation__service-2",
                start: "top center+=200",
                markers: false,
              },
              opacity: 1,
              x: 0,
              ease: "power2.out",
              duration: 2,
              stagger: {
                each: 0.4,
              },
            });
          }
        }
      });
      return () => tHero.revert();
    }
  }, []);


  

 // ... imports and useEffect remain the same ...

 return (
  <>
    <section className="service__area-2 pt-130 pb-110">
      <div className="container">
        <div className="row">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <div className="sec-title-wrapper">
              <h2 className="sec-title title-anim">Sub Services</h2>
            </div>
          </div>
        </div>

        <div className="row pt-140">
          <div className="col-12">
            <div className="row g-4 animation__service-2">
            <div className="col-lg-3 col-md-6 col-12">
  <Link 
    href="/service/seo" 
    className="service__item-2" 
    style={{
      padding: "20px",
      height: "100%",
      display: "block",
      border: "1px solid #2C2C2C",
      transition: "all 0.3s ease",
      textDecoration: "none"
    }}
  >
    <div>
      <Image width={112} height={124} src={Service21} alt="Service Icon" />
      <h3 className="service__title-2">
        Search Engine <br /> Optimization
      </h3>
    </div>
  </Link>
</div>

<div className="col-lg-3 col-md-6 col-12">
  <Link 
    href="/service/metaads" 
    className="service__item-2" 
    style={{
      padding: "20px",
      height: "100%",
      display: "block",
      border: "1px solid #2C2C2C",
      transition: "all 0.3s ease",
      textDecoration: "none"
    }}
  >
    <div>
      <Image className="pt-2" priority width={112} height={124} src={Service22} alt="Service Icon" />
      <h3 className="service__title-2">
        Meta <br /> Ads
      </h3>
    </div>
  </Link>
</div>
              <div className="col-lg-3 col-md-6 col-12">
                <Link 
                  href="/service/SMM" 
                  className="service__item-2"
                  style={{
                    padding: "20px",
                    height: "100%",
                    display: "block",
                    border: "1px solid #2C2C2C",
                    transition: "all 0.3s ease",
                    textDecoration: "none"
                  }}
                >
                  <div>
                    <Image priority width={112} height={124} src={Service23} alt="Service Icon" />
                    <h3 className="service__title-2">
                      Social Media <br /> Management
                    </h3>
                  </div>
                </Link>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <Link
                  href="/service/emailmarketing" 
                  className="service__item-2"
                  style={{
                    padding: "20px",
                    height: "100%",
                    display: "block",
                    border: "1px solid #2C2C2C",
                    transition: "all 0.3s ease",
                    textDecoration: "none"
                  }}
                >
                  <div>
                    <Image priority width={112} height={124} src={Service24} alt="Service Icon" />
                    <h3 className="service__title-2">
                      Email <br /> Marketing
                    </h3>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);
};

export default ServiceElementV3;

import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Link from "next/link";
// import service1 from "../../../public/assets/imgs/service/4/service-1.png";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const StartupAgencyService = () => {

  const [color, setColor] = useState("#ffd800");
        const [marginTop, setMarginTop] = useState("-120px");
      
        useEffect(() => {
          const updateMarginTop = () => {
            if (window.innerWidth <= 768) {
              setMarginTop("0px"); // Mobile screen
            } else {
              setMarginTop("-120px"); // Larger screens
            }
          };
      
          // Initial call and event listener for resize
          updateMarginTop();
          window.addEventListener("resize", updateMarginTop);
      
          // Cleanup listener on unmount
          return () => window.removeEventListener("resize", updateMarginTop);
        }, []);
        
  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        gsap.set(".fade_bottom_2", { y: 30, opacity: 0 });

        if (device_width < 1023) {
          const fadeArray = gsap.utils.toArray(".fade_bottom_2");
          fadeArray.forEach((item, i) => {
            let fadeTl = gsap.timeline({
              scrollTrigger: {
                trigger: item,
                start: "top center+=200",
              },
            });
            fadeTl.to(item, {
              y: 0,
              opacity: 1,
              ease: "power2.out",
              duration: 1.5,
            });
          });
        } else {
          gsap.to(".fade_bottom_2", {
            scrollTrigger: {
              trigger: ".fade_bottom_2",
              start: "top center+=300",
              markers: false,
            },
            y: 0,
            opacity: 1,
            ease: "power2.out",
            duration: 1,
            stagger: {
              each: 0.2,
            },
          });
        }
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <section className="service__area-4">
        <div className="container g-0 line_4 pt-150 pb-140">
          <div className="line-col-4">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <div className="row">
            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6">
              <div className="service__left-6">
                
                <h3 className="sec-title-6 title-anim">
                But Why <br /> Choose Us?
                </h3>
              </div>
            </div>
            <div className="col-xxl-7 col-xl-7 col-lg-6 col-md-6">
           
            </div>
          </div>
          <div className="service__inner-4">
            <div className="row">
              <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6">
                <div className="service__img-left">
                  <Image
                    priority
                    width={430}
                    style={{ height: "auto" }}
                    // src={service1}
                    src="/assets/imgs/gtmstrategy/gtm-choose-us.jpg"
                    alt="Service"
                  />
                </div>
              </div>
              <div className="col-xxl-7 col-xl-7 col-lg-6 col-md-6" style={{ marginTop}}>
                <div className="service__list-4">
                  <div className="service__item-4 fade_bottom_2">
                    <div className="service__item-number" style={{color:"#808080"}}>
                      <span>01</span>
                    </div>
                    <div className="service__title-wrapper-4">
                      <h4 style={{color: color}}>
                        <Link
                          className="service__item-title"
                          href=""
                           onMouseEnter={() => setColor("#0096d4")}
                           onMouseLeave={() => setColor("#ffd800")}
                        >
                          	Market-Proven Expertise
                        </Link>
                      </h4>
                      <p>We have a proven track record of crafting successful Go-to-Market plans for various business and industries.</p>
                    </div>
                   
                  </div>
                  <div className="service__item-4 fade_bottom_2">
                    <div className="service__item-number" style={{color:"#808080"}}>
                      <span>02</span>
                    </div>
                    <div className="service__title-wrapper-4">
                      <h4>
                        <Link
                          className="service__item-title"
                          href=""
                        >
                          		Data-Driven Strategies
                        </Link>
                      </h4>
                      <p>We utilize market research and competitor analysis to build a plan based on cold, hard facts.</p>
                    </div>
                   
                  </div>
                  <div className="service__item-4 fade_bottom_2">
                    <div className="service__item-number" style={{color:"#808080"}}>
                      <span>03</span>
                    </div>
                    <div className="service__title-wrapper-4">
                      <h4>
                        <Link
                          className="service__item-title"
                          href=""
                        >
                          		Agile & Collaborative
                        </Link>
                      </h4>
                      <p>We work closely with you every step of the way, tailoring the plan to your unique needs and budget.</p>
                    </div>
                   
                  </div>
                  <div className="service__item-4 fade_bottom_2">
                    <div className="service__item-number" style={{color:"#808080"}}>
                      <span>04</span>
                    </div>
                    <div className="service__title-wrapper-4">
                      <h4>
                        <Link
                          className="service__item-title"
                          href=""
                        >
                          	Affordable & Scalable
                        </Link>
                      </h4>
                      <p>Our plan provides an incredible value, and our services scale as your business grows.</p>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StartupAgencyService;

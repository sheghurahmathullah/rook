import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import { Accordion } from "react-bootstrap";
import Link from "next/link.js";
import imgsBg41 from "../../../public/assets/imgs/bg/4/Group 30.png";
import imgsBg42 from "../../../public/assets/imgs/bg/4/2.png";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const StartupAgencyFaq = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        gsap.set(".fade_bottom_3", { y: 30, opacity: 0 });

        if (device_width < 1023) {
          const fadeArray = gsap.utils.toArray(".fade_bottom_3");
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
          gsap.to(".fade_bottom_3", {
            scrollTrigger: {
              trigger: ".fade_bottom_3",
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
      <section className="faq__area-4 pt-150 pb-150">
        <div className="container g-0">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-7 col-md-6 pt-5">
              <div className="faq__sec-title text-anim">
                <h2 className="sec-subtile-6">Expertise</h2>
                <h3 className="sec-title-6 title-anim">
                Get Your Audience to Double-Tap Without Thinking
                </h3>
               
                <Link className="btn-view" href="/about">
                  Know More <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>

            <div className="col-xxl-4 col-xl-4 col-lg-5 col-md-6">
              <div className="faq__list-4">
                <Accordion
                  defaultActiveKey="0"
                  className="accordion"
                  id="accordionExample"
                >
                  <Accordion.Item
                    eventKey="0"
                    className="accordion-item fade_bottom_3"
                  >
             
                    <Accordion.Body className="accordion-body">
                      <p>
                      User-generated content (UGC) builds trust and drives action—but only if it’s done right. We craft UGC that stops your audience in their tracks and motivates them to engage with your brand on a deeper level.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item
                    eventKey="1"
                    className="accordion-item fade_bottom_3"
                  >
                    <Accordion.Header
                      className="accordion-header"
                      id="headingTwo"
                    >
                 	Reduce CPA
                    </Accordion.Header>
                    <Accordion.Header
                      className="accordion-header"
                      id="headingTwo"
                    >
                 	Boost ROAS
                    </Accordion.Header>
                    
                    <Accordion.Header
                      className="accordion-header"
                      id="headingTwo"
                    >
                 	Lower CPC
                    </Accordion.Header>
                    <Accordion.Header
                      className="accordion-header"
                      id="headingTwo"
                    >
                 		Decrease CPM
                    </Accordion.Header>
                  </Accordion.Item>

                 

                  
                </Accordion>
              </div>
            </div>
          </div>
          <Image
            priority
            width={94}
            height={62}
            className="faq__img6-1"
            src={imgsBg41}
            alt="Shape"
          />
          <Image
            priority
            width={134}
            height={178}
            className="faq__img6-2"
            src={imgsBg42}
            alt="Shape"
          />
        </div>
      </section>
    </>
  );
};

export default StartupAgencyFaq;

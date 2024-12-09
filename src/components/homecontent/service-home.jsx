import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Link from "next/link";
import CountUp from 'react-countup';

gsap.registerPlugin(ScrollTrigger);

const DigitalMarketingService = () => {
  const serviceList = useRef();
  useEffect(() => {
    if (typeof window !== "undefined") {
      imageAnimation(serviceList.current.children);
      let tHero = gsap.context(() => {
        let service__items_3 = gsap.utils.toArray(".service_animation");
        let service__items_heading = gsap.utils.toArray(
          ".service_animation h3"
        );
        let service__items_content = gsap.utils.toArray(
          ".service_animation .service__content-3"
        );

        service__items_3.forEach((service_item, i) => {
          gsap.set([service__items_heading[i], service__items_content[i]], {
            x: -30,
            opacity: 0,
          });

          let service3_timeline = gsap.timeline({
            scrollTrigger: {
              trigger: service_item,
              start: "top center+=200",
              markers: false,
            },
          });

          service3_timeline.to(service__items_heading[i], {
            x: 0,
            opacity: 1,
            ease: "power2.out",
            duration: 1.5,
            stagger: {
              each: 0.2,
            },
          });
          service3_timeline.to(
            service__items_content[i],
            {
              x: 0,
              opacity: 1,
              ease: "power2.out",
              duration: 1.5,
              stagger: {
                each: 0.2,
              },
            },
            "-=1"
          );
        });
      });
      return () => tHero.revert();
    }
  }, []);

  const imageAnimation = (data) => {
    function followImageCursor(event, serviceImgItem) {
      const contentBox = serviceImgItem.getBoundingClientRect();
      const dx = event.clientX - contentBox.x;
      const dy = event.clientY - contentBox.y;
      serviceImgItem.children[3].style.transform = `translate(${dx}px, ${dy}px)`;
    }

    for (let i = 0; i < data.length; i++) {
      data[i].addEventListener("mousemove", (event) => {
        setInterval(followImageCursor(event, data[i]), 1000);
      });
    }
  };

  return (
    <>
      <section className="service__area-3 pb-150">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="sec-title-wrapper pt-130 text-anim">
                <h2 className="sec-sub-title title-anim">Services</h2>
                <h3 className="sec-title title-anim">
                  Our marketing <br /> Services
                </h3>
                <p>
                  Consumers today rely heavily on digital means to research
                  products. We research a brand of bldend engaging with it,
                  according to the meanwhile, 51% of consumers say they use
                  Google to research products before buying.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xx-12">
              <div className="service__list-3" ref={serviceList}>
                <div className="service__item-3 service_animation">
                  <h3>
                    <Link href="/service-details" className="service__title-3">
                    Web Development 
                    </Link>
                  </h3>
                  <div className="service__content-3">
                    
                    <p>
                    Your website is the first thing your customers see. It needs to make a strong opening move. You need strategic web design wizardry on the table, sparking innovation where there was once only a blank board.
                    </p>
                    <ul className="">
                      <li>+ <CountUp end={100} /> Custom built functional websites </li>
                      <li>+ 3 No code websites </li>
                      <li>+ 1 Ecommerce Website</li>
                    </ul>
                  </div>
                  <div className="service__btn-3">
                    <div className="btn_wrapper">
                      <Link
                        href="/service-details"
                        className="wc-btn-black btn-hover btn-item"
                      >
                        <span></span> Build My Website 
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>

                  <div
                    className="service__hover-3"
                    style={{
                      backgroundImage: "url(assets/imgs/service/3/1.jpg)",
                    }}
                  ></div>
                </div>

                <div className="service__item-3 service_animation">
                  <h3>
                    <Link href="/service-details" className="service__title-3 ">
                    Nurturing Automation 
                    </Link>
                  </h3>
                  <div className="service__content-3">
                    <p>
                    Transform first-time buyers into long-term customers with epic automated workflows and personalized nurture campaigns.
                    <br />
                    Send out a cleverly crafted personalised communication that hooks your audience, builds excitement, and keeps them eagerly awaiting the next update.
                    </p>
                    <ul className="">
                      <li>+ <CountUp end={10} /> Automated workflows </li>
                      <li>+ 30% increase in lead conversions</li>
                     
                    </ul>
                  </div>
                  <div className="service__btn-3">
                    <div className="btn_wrapper">
                      <Link
                        href="/service-details"
                        className="wc-btn-black btn-hover btn-item"
                      >
                        <span></span> Automate  My <br />Growth Now
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>

                  <div
                    className="service__hover-3"
                    style={{
                      backgroundImage: "url(assets/imgs/service/3/2.png)",
                    }}
                  ></div>
                </div>

                <div className="service__item-3 service_animation">
                  <h3 className="">
                    <Link href="/service-details" className="service__title-3">
                      Digital Marketing
                      <br />
                      Marketing
                    </Link>
                  </h3>
                  <div className="service__content-3">
                    <p>
                    Your next customer is scrolling—make them stop and engage.

With digital campaigns crafted specifically for your business goals and success metrics, get ready for growth that’s measurable, sustainable, and uniquely yours.

                    </p>
                    <ul className="">
                      <li>+ 40% increase in lead generation </li>
                      <li>+ 50% boost in organic traffic </li>
       
                    </ul>
                  </div>
                  <div className="service__btn-3">
                    <div className="btn_wrapper">
                      <Link
                        href="/service-details"
                        className="wc-btn-black btn-hover btn-item"
                      >
                        <span></span> Start <br />Your Digital <br />Transformation
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>

                  <div
                    className="service__hover-3"
                    style={{
                      backgroundImage: "url(assets/imgs/service/3/3.png)",
                    }}
                  ></div>
                </div>

                <div className="service__item-3 service_animation">
                  <h3 className="">
                    <Link href="/service-details" className="service__title-3">
                    GTM - Strategy 
                    </Link>
                  </h3>
                  <div className="service__content-3">
                    <p>
                    Stand out in the crowd with a GTM plan that’s anything but ordinary.
                    </p>
                    
                  </div>
                  <div className="service__btn-3">
                    <div className="btn_wrapper">
                      <Link
                        href="/service-details"
                        className="wc-btn-black btn-hover btn-item "
                      >
                        <span className="pl-5"></span> Claim My <br /> Free Strategy <br /> Session
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>

                  <div
                    className="service__hover-3"
                    style={{
                      backgroundImage: "url(assets/imgs/service/3/4.png)",
                    }}
                  ></div>
                </div>

                <div className="service3__img-wrap">
                  <div className="service3__img"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalMarketingService;

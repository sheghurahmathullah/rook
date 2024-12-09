import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Link from "next/link";
import { formModalContext } from "@/pages/_app";
import { useContext } from "react";

gsap.registerPlugin(ScrollTrigger);

const DigitalMarketingService = () => {
  const { setShowModal } = useContext(formModalContext);
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
      <section className="service__area-3 pb-150">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="sec-title-wrapper pt-130 text-anim">
                <h2 className="sec-sub-title title-anim">We Grow Together</h2>
                <h3 className="sec-title title-anim">
                  Our Consultancy <br /> Services
                </h3>
                <p style={{ textAlign: "justify" }}>
                  We enable clients to create high-value solutions through
                  expert consultancy, design, marketing, and product
                  development.
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
                      Startup <br />
                      Consultancy
                    </Link>
                  </h3>
                  <div className="service__content-3">
                    <p className="text-justify">
                      Guiding startups to success with expert advice and
                      strategic solutions.
                    </p>
                    <ul className="">
                      <li>+ Acceleration</li>
                      <li>+ Expert Advice</li>
                      <li>+ Success Guidance</li>
                    </ul>
                  </div>
                  <div className="service__btn-3">
                    <div className="btn_wrapper">
                      <button
                        
                        onClick={openTicket}
                        className="wc-btn-black btn-hover btn-item"
                      >
                        <span></span> Start Your <br /> Journey
                        <i className="fa-solid fa-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                  <div
                    className="service__hover-3"
                    style={{
                      backgroundImage: "url(assets/imgs/service/3/1.webp)",
                    }}
                  ></div>
                </div>

                <div className="service__item-3 service_animation">
                  <h3>
                    <Link href="/service-details" className="service__title-3 ">
                      Business <br />
                      Consultancy
                    </Link>
                  </h3>
                  <div className="service__content-3">
                    <p className="text-justify">
                      Driving business success through expert guidance and
                      strategic consultancy services.
                    </p>
                    <ul className="">
                      <li>+ Expert Guidance</li>
                      <li>+ Strategic Consultancy</li>
                      <li>+ Market Survey</li>
                    </ul>
                  </div>
                  <div className="service__btn-3">
                    <div className="btn_wrapper">
                      <button
                        
                        onClick={openTicket}
                        className="wc-btn-black btn-hover btn-item"
                      >
                        <span></span> Start Your <br /> Journey
                        <i className="fa-solid fa-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                  <div
                    className="service__hover-3"
                    style={{
                      backgroundImage: "url(assets/imgs/service/3/2.webp)",
                    }}
                  ></div>
                </div>

                <div className="service__item-3 service_animation">
                  <h3 className="">
                    <Link href="/service-details" className="service__title-3">
                      IPR Services
                    </Link>
                  </h3>
                  <div className="service__content-3">
                    <p className="text-justify">
                      Safeguarding innovation and creativity with comprehensive
                      Intellectual Property Rights solutions.
                    </p>
                    <ul className="">
                      <li>+ Patent</li>
                      <li>+ Trademark</li>
                      <li>+ Copyright</li>
                    </ul>
                  </div>
                  <div className="service__btn-3">
                    <div className="btn_wrapper">
                      <button
                        onClick={openTicket}
                        className="wc-btn-black btn-hover btn-item"
                      >
                        <span></span> Start Your <br /> Journey
                        <i className="fa-solid fa-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                  <div
                    className="service__hover-3"
                    style={{
                      backgroundImage: "url(assets/imgs/service/3/3.webp)",
                    }}
                  ></div>
                </div>

                {/* <div className="service__item-3 service_animation">
                  <h3 className="">
                    <Link href="/service-details" className="service__title-3">
                      Social
                      <br />
                      Marketing
                    </Link>
                  </h3>
                  <div className="service__content-3">
                    <p>
                      We help brands stand out through aweful, elegant visual
                      design. Our design mainly philosophy.
                    </p>
                    <ul className="">
                      <li>+ Logo Design</li>
                      <li>+ Advertisement</li>
                      <li>+ Promotion</li>
                    </ul>
                  </div>
                  <div className="service__btn-3">
                    <div className="btn_wrapper">
                      <Link
                        href="#"
                        className="wc-btn-black btn-hover btn-item"
                      >
                        <span></span> Details
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>

                  <div
                    className="service__hover-3"
                    style={{
                      backgroundImage: "url(assets/imgs/service/3/4.webp)",
                    }}
                  ></div>
                </div> */}

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

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Link from "next/link";
import Service11 from "../../../public/assets/imgs/rook/designing/branding-concept.webp";
import Service12 from "../../../public/assets/imgs/rook/designing/280x380-2.svg";
import Service13 from "../../../public/assets/imgs/rook/designing/user-centric-website.webp";
import Service14 from "../../../public/assets/imgs/rook/designing/mobile-ui.webp";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const ServiceElementV2 = () => {
  const [activeList, setActiveList] = useState(1);
  const [activeImg, setActiveImg] = useState(1);
  const [activeShape, setActiveShape] = useState(1);

  const serviceList = useRef();

  useEffect(() => {
    if (typeof window !== "undefined") {
      let listItem = serviceList.current.children;
      console.log(listItem);
      for (let i = 0; i < listItem.length; i++) {
        listItem[i].addEventListener("mousemove", function (e) {
          var service_id = this.getAttribute("data-service");
          setActiveImg(parseInt(service_id));
          setActiveShape(parseInt(service_id));

          if (service_id != 1) {
            setActiveList(0);
          }
        });

        listItem[i].addEventListener("mouseout", function (e) {
          var service_id = this.getAttribute("data-service");
          setActiveList(parseInt(service_id));
        });
      }

      let tHero = gsap.context(() => {
        let home1_services = gsap.utils.toArray(".animation_home1_service");
        let service__number = gsap.utils.toArray(
          ".animation_home1_service .service__number span"
        );
        let service__title = gsap.utils.toArray(
          ".animation_home1_service .service__title"
        );
        let service__text = gsap.utils.toArray(
          ".animation_home1_service .service__text p"
        );
        let service__link = gsap.utils.toArray(
          ".animation_home1_service .service__link p"
        );

        home1_services.forEach((service, i) => {
          gsap.set(
            [
              service__number[i],
              service__title[i],
              service__text[i],
              service__link[i],
            ],
            { opacity: 0, x: -50 }
          );

          let home1ServiceTl = gsap.timeline({
            scrollTrigger: {
              trigger: service,
              start: "top center+=300",
              end: "bottom bottom",
              markers: false,
            },
          });

          home1ServiceTl.to(service__number[i], {
            x: 0,
            opacity: 1,
            duration: 1.2,
          });
          home1ServiceTl.to(
            service__title[i],
            {
              x: 0,
              opacity: 1,
              duration: 1.2,
            },
            "-=1"
          );
          home1ServiceTl.to(
            service__text[i],
            {
              x: 0,
              opacity: 1,
              duration: 1.2,
            },
            "-=1"
          );
          home1ServiceTl.to(
            service__link[i],
            {
              x: 0,
              opacity: 1,
              duration: 1.2,
            },
            "-=1"
          );
        });
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <section className="service__area service-v2 pt-110 pb-150">
        <div className="container">
          <div className="row">
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <div className="sec-title-wrapper wrap">
                <h2 className="sec-sub-title title-anim">services we provide</h2>
                <h3 className="sec-title title-anim">
                  designing the <br />future
                </h3>
              </div>
            </div>
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
              <div className="service__top-text text-anim">
                <p>
                  We are crafting the future, where boundless imagination knows <span>no limits</span>{" "}, inspiring innovation beyond imagination&apos;s horizons.
                </p>
              </div>
            </div>
          </div>

          <div className="service__list-wrapper">
            <div className="row">
              <div className="col-xxl-4 col-xl-4 col-lg-0 col-md-0">
                <div className="service__img-wrapper">
                  <Image
                    priority
                    width={280}
                    style={{ height: "auto" }}
                    src={Service11}
                    alt="Service Image"
                    className={
                      activeImg == 1
                        ? "service__img img-1 active"
                        : "service__img img-1"
                    }
                  />
                  <Image
                    priority
                    width={280}
                    style={{ height: "auto" }}
                    src={Service12}
                    alt="Service Image"
                    className={
                      activeImg == 2
                        ? "service__img img-2 active"
                        : "service__img img-2"
                    }
                  />
                  <Image
                    priority
                    width={280}
                    style={{ height: "auto" }}
                    src={Service13}
                    alt="Service Image"
                    className={
                      activeImg == 3
                        ? "service__img img-3 active"
                        : "service__img img-3"
                    }
                  />
                  <Image
                    priority
                    width={280}
                    style={{ height: "auto" }}
                    src={Service14}
                    alt="Service Image"
                    className={
                      activeImg == 4
                        ? "service__img img-4 active"
                        : "service__img img-4"
                    }
                  />

                  <span
                    className={
                      activeShape == 1
                        ? "shapes shape-box-1 current"
                        : "shapes shape-box-1"
                    }
                  ></span>
                  <span
                    className={
                      activeShape == 2
                        ? "shapes shape-box-2 current"
                        : "shapes shape-box-2"
                    }
                  ></span>
                  <span
                    className={
                      activeShape == 3
                        ? "shapes shape-box-3 current"
                        : "shapes shape-box-3"
                    }
                  ></span>
                  <span
                    className={
                      activeShape == 4
                        ? "shapes shape-box-4 current"
                        : "shapes shape-box-4"
                    }
                  ></span>
                </div>
              </div>
              <div className="col-xxl-8 col-xl-8 col-lg-12 col-md-12">
                <div className="service__list" ref={serviceList}>
                  <div
                    className={activeList == 1 ? "active" : ""}
                    data-service="1"
                  >
                    <div className="service__item animation_home1_service">
                      <div className="service__number">
                        <span>01</span>
                      </div>
                      <div className="service__title-wrapper">
                        <h4 className="service__title">
                          Iconic Brand Identities
                        </h4>
                      </div>
                      <div className="service__text">
                        <p>
                          We craft Brand Identities that resonate, leaving lasting
                          impressions and driving brand
                          loyalty.
                        </p>
                      </div>
                      <div className="service__link">
                        <p>
                          <i className="fa-solid fa-arrow-right"></i>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className={activeList == 2 ? "active" : ""}
                    data-service="2"
                  >
                    <div className="service__item  animation_home1_service">
                      <div className="service__number">
                        <span>02</span>
                      </div>
                      <div className="service__title-wrapper">
                        <h4 className="service__title">
                          Captivating
                          Social Media Visuals
                        </h4>
                      </div>
                      <div className="service__text">
                        <p>
                          We create Social Media Visuals that engage, inform, and leave
                          a memorable impact on your
                          audience.
                        </p>
                      </div>
                      <div className="service__link">
                        <p>
                          <i className="fa-solid fa-arrow-right"></i>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className={activeList == 3 ? "active" : ""}
                    data-service="3"
                  >
                    <div className="service__item  animation_home1_service">
                      <div className="service__number">
                        <span>03</span>
                      </div>
                      <div className="service__title-wrapper">
                        <h4 className="service__title">
                          User-Centric
                          Websites
                        </h4>
                      </div>
                      <div className="service__text">
                        <p>
                          We design websites that seamlessly blend
                          aesthetics and functionality for
                          an exceptional online
                          experience.
                        </p>
                      </div>
                      <div className="service__link">
                        <p>
                          <i className="fa-solid fa-arrow-right"></i>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className={activeList == 4 ? "active" : ""}
                    data-service="4"
                  >
                    <div className="service__item  animation_home1_service">
                      <div className="service__number">
                        <span>04</span>
                      </div>
                      <div className="service__title-wrapper">
                        <h4 className="service__title">
                          Crafting mobile
                          interfaces
                        </h4>
                      </div>
                      <div className="service__text">
                        <p>
                          We prioritize user engagement,
                          making your app intuitive,
                          responsive, and visually
                          appealing.
                        </p>
                      </div>
                      <div className="service__link">
                        <p>
                          <i className="fa-solid fa-arrow-right"></i>
                        </p>
                      </div>
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

export default ServiceElementV2;

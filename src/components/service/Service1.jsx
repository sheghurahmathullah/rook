import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Link from "next/link";
import Service11 from "../../../public/assets/imgs/rook/digital-marketing/mark1.webp";
import Service12 from "../../../public/assets/imgs/rook/digital-marketing/mark2.webp";
import Service13 from "../../../public/assets/imgs/rook/digital-marketing/mark3.webp";
import Service14 from "../../../public/assets/imgs/rook/digital-marketing/mark4.webp";
import Service15 from "../../../public/assets/imgs/rook/digital-marketing/mark5.webp";
import Service16 from "../../../public/assets/imgs/rook/digital-marketing/mark6.webp";
import Image from "next/image";
import { formModalContext } from "@/pages/_app";
import { useContext } from "react";


gsap.registerPlugin(ScrollTrigger);

const Service1 = () => {
  const { setShowModal } = useContext(formModalContext);
  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        if (device_width > 1200) {
          gsap.to(".service__list-6", {
            scrollTrigger: {
              trigger: ".service__area-6",
              pin: ".service__list-6",
              pinSpacing: true,
              start: "top top",
              end: "bottom bottom",
            },
          });

          gsap.to(".service__image-wrap", {
            scrollTrigger: {
              trigger: ".service__area-6",
              pin: ".mid-content",
              pinSpacing: true,
              start: "top top",
              end: "bottom bottom",
              markers: false,
            },
          });

          let service_images = gsap.utils.toArray(".service__image");
          let service_imagess = gsap.utils.toArray(".service__image img");
          let service_items = gsap.utils.toArray(".service__item-6");

          if (service_items) {
            service_items.forEach((image, i) => {
              let tl = gsap.timeline({
                scrollTrigger: {
                  trigger: image,
                  scrub: 1,
                  start: "top top-=600",
                  markers: false,
                },
              });
              tl.to(service_images[i], {
                zIndex: "1",
              });
              tl.to(
                service_imagess[i],
                {
                  opacity: 0,
                  duration: 1,
                  scale: 1.2,
                  ease: "power4.out",
                },
                "-=1"
              );
            });
          }

          let navItems = gsap.utils.toArray(".service__list-6 li a");
          if (navItems) {
            navItems.forEach((nav) => {
              nav.addEventListener("click", (e) => {
                e.preventDefault();
                const ids = nav.getAttribute("href");
                gsap.to(window, {
                  duration: 0.5,
                  scrollTo: ids,
                  ease: "power4.out",
                });
              });
            });
          }
        }
      });
      return () => tHero.revert();
    }
  }, []);
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
      <section className="service__area-6">
        <div className="container">
          <div className="row inherit-row">
            <div className="col-xxl-12">
              <div className="content-wrapper">
                <div className="left-content">
                  <ul className="service__list-6">
                    <li>
                      <a href="#service_1">
                        Social Media Marketing
                      </a>
                    </li>
                    <li>
                      <a href="#service_2">
                        Search Engine Optimization
                      </a>
                    </li>
                    <li>
                      <a href="#service_3">
                        Pay-Per-Click Advertising
                      </a>
                    </li>
                    <li>
                      <a href="#service_4">
                        Web Analytics and Tracking
                      </a>
                    </li>
                    <li>
                      <a href="#service_5">
                        Content Strategy
                      </a>
                    </li>
                    <li>
                      <a href="#service_6">
                        Mobile Marketing
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="mid-content">
                  <div className="service__image">
                    <Image
                      priority
                      style={{ width: "auto", height: "auto" }}
                      src={Service11}
                      alt="Service Image"
                    />
                  </div>
                  <div className="service__image">
                    <Image
                      priority
                      style={{ width: "auto", height: "auto" }}
                      src={Service12}
                      alt="Service Image"
                    />
                  </div>
                  <div className="service__image">
                    <Image
                      priority
                      style={{ width: "auto", height: "auto" }}
                      src={Service13}
                      alt="Service Image"
                    />
                  </div>
                  <div className="service__image">
                    <Image
                      priority
                      style={{ width: "auto", height: "auto" }}
                      src={Service14}
                      alt="Service Image"
                    />
                  </div>
                  <div className="service__image">
                    <Image
                      priority
                      style={{ width: "auto", height: "auto" }}
                      src={Service15}
                      alt="Service Image"
                    />
                  </div>
                  <div className="service__image">
                    <Image
                      priority
                      style={{ width: "auto", height: "auto" }}
                      src={Service16}
                      alt="Service Image"
                    />
                  </div>
                </div>

                <div className="right-content">
                  <div className="service__items-6">
                    <div
                      className="service__item-6 has__service_animation"
                      id="service_1"
                      data-secid="1"
                    >
                      {/* <div className="image-tab">
                        <Image
                          priority
                          style={{ width: "auto", height: "auto" }}
                          src={Service11}
                          alt="Service Image"
                        />
                      </div> */}

                      <div className="animation__service_page">
                        <h2 className="service__title-6">
                          Social Media Marketing
                        </h2>
                        <p className="text-justify">
                          Harnessing the power of social platforms to boost brand visibility, engagement, and customer connections.
                        </p>
                        <ul>
                          <li>+ Brand Visibility</li>
                          <li>+ Customer Engagement</li>
                          <li>+ Social Platforms</li>
                        </ul>
                        <div className="btn_wrapper">
                          <button
                            onClick={openTicket}
                            className="wc-btn-secondary btn-item btn-hover"
                          >
                            <span></span>Start Your
                            <br />
                            Journey <i className="fa-solid fa-arrow-right"></i>
                          </button>
                        </div>
                      </div>
                    </div>

                    <div
                      className="service__item-6"
                      id="service_2"
                      data-secid="2"
                    >
                      <div className="image-tab">
                        <Image
                          priority
                          style={{ width: "auto", height: "auto" }}
                          src={Service12}
                          alt="Service Image"
                        />
                      </div>

                      <div className="animation__service_page">
                        <h2 className="service__title-6">
                          Search Engine Optimization
                        </h2>
                        <p className="text-justify">
                          Elevating your online presence by optimizing for search engines, driving organic traffic, and maximizing visibility.
                        </p>
                        <ul>
                          <li>+ Organic Traffic</li>
                          <li>+ SEO Optimization</li>
                          <li>+ Online Presence</li>
                        </ul>
                        <div className="btn_wrapper">
                          <button
                            onClick={openTicket}
                            className="wc-btn-secondary btn-item btn-hover"
                          >
                            <span></span>Start Your
                            <br />
                            Journey <i className="fa-solid fa-arrow-right"></i>
                          </button>
                        </div>
                      </div>
                    </div>

                    <div
                      className="service__item-6"
                      id="service_3"
                      data-secid="3"
                    >
                      <div className="image-tab">
                        <Image
                          priority
                          style={{ width: "auto", height: "auto" }}
                          src={Service13}
                          alt="Service Image"
                        />
                      </div>

                      <div className="animation__service_page">
                        <h2 className="service__title-6">
                          Pay-Per-Click Advertising
                        </h2>
                        <p className="text-justify">  
                          Instantly reaching your target audience with highly targeted ads, optimizing ROI through precise budget control.
                        </p>
                        <ul>
                          <li>+ Targeted Ads</li>
                          <li>+ ROI Optimization</li>
                          <li>+ Budget Control</li>
                        </ul>
                        <div className="btn_wrapper">
                          <button
                            onClick={openTicket}
                            className="wc-btn-secondary btn-item btn-hover"
                          >
                            <span></span>Start Your
                            <br />
                            Journey <i className="fa-solid fa-arrow-right"></i>
                          </button>
                        </div>
                      </div>
                    </div>

                    <div
                      className="service__item-6"
                      id="service_4"
                      data-secid="4"
                    >
                      <div className="image-tab">
                        <Image
                          priority
                          style={{ width: "auto", height: "auto" }}
                          src={Service14}
                          alt="Service Image"
                        />
                      </div>

                      <div className="animation__service_page">
                        <h2 className="service__title-6">
                          Web Analytics and Tracking
                        </h2>
                        <p className="text-justify">
                          Gaining insights into user behavior, enabling data-driven decisions to enhance website performance and conversions.
                        </p>
                        <ul>
                          <li>+ User Behavior Insights</li>
                          <li>+ Data-Driven Decisions</li>
                          <li>+ Website Performance</li>
                        </ul>
                        <div className="btn_wrapper">
                          <button
                            onClick={openTicket}
                            className="wc-btn-secondary btn-item btn-hover"
                          >
                            <span></span>Start Your
                            <br />
                            Journey <i className="fa-solid fa-arrow-right"></i>
                          </button>
                        </div>
                      </div>
                    </div>

                    <div
                      className="service__item-6"
                      id="service_5"
                      data-secid="5"
                    >
                      <div className="image-tab">
                        <Image
                          priority
                          style={{ width: "auto", height: "auto" }}
                          src={Service15}
                          alt="Service Image"
                        />
                      </div>

                      <div className="animation__service_page">
                        <h2 className="service__title-6">
                          Content Strategy
                        </h2>
                        <p className="text-justify">
                          Crafting compelling content that resonates with your audience, driving brand authority and customer loyalty.
                        </p>
                        <ul>
                          <li>+ Compelling Content</li>
                          <li>+ Brand Authority</li>
                          <li>+ Customer Loyalty</li>
                        </ul>
                        <div className="btn_wrapper">
                          <button
                            
                            onClick={openTicket}
                            className="wc-btn-secondary btn-item btn-hover"
                          >
                            <span></span>Start Your
                            <br />
                            Journey <i className="fa-solid fa-arrow-right"></i>
                          </button>
                        </div>
                      </div>
                    </div>

                    <div
                      className="service__item-6"
                      id="service_6"
                      data-secid="6"
                    >
                      <div className="image-tab">
                        <Image
                          priority
                          style={{ width: "auto", height: "auto" }}
                          src={Service14}
                          alt="Service Image"
                        />
                      </div>

                      <div className="animation__service_page">
                        <h2 className="service__title-6">
                          Mobile Marketing
                        </h2>
                        <p className="text-justify">
                          Engaging with your audience on mobile devices, ensuring a seamless and personalized user experience.
                        </p>
                        <ul>
                          <li>+ Audience Engagement</li>
                          <li>+ Mobile User Experience</li>
                          <li>+ Personalization</li>
                        </ul>
                        <div className="btn_wrapper">
                          <button
                            onClick={openTicket}
                            className="wc-btn-secondary btn-item btn-hover"
                          >
                            <span></span>Start Your
                            <br />
                            Journey <i className="fa-solid fa-arrow-right"></i>
                          </button>
                        </div>
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

export default Service1;

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useEffect, useState } from "react";
import { Power1, gsap } from "gsap";
import { ScrollSmoother } from "@/plugins";
import Link from "next/link.js";
// import About31 from "../../../public/assets/temp/image.png";
import Image from "next/image.js";

function Tabsection() {
  const [activeTab, setActiveTab] = useState("webdev");

  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
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

  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        gsap.set(".counter_animation .counter__anim", { y: -100, opacity: 0 });
        if (device_width < 1023) {
          const counterArray = gsap.utils.toArray(
            ".counter_animation .counter__anim"
          );
          counterArray.forEach((item, i) => {
            let counterTl = gsap.timeline({
              scrollTrigger: {
                trigger: item,
                start: "top center+=200",
              },
            });
            counterTl.to(item, {
              y: 0,
              opacity: 1,
              ease: "bounce",
              duration: 1.5,
            });
          });
        } else {
          gsap.to(".counter_animation .counter__anim", {
            scrollTrigger: {
              trigger: ".counter_animation",
              start: "top center+=300",
            },
            y: 0,
            opacity: 1,
            ease: "bounce",
            duration: 1.5,
            stagger: {
              each: 0.3,
            },
          });
        }
        for (let i = 1; i < 5; i++) {
          gsap.from(gsap.utils.toArray(`.count${i}`), {
            textContent: 0,
            duration: 1,
            delay: 0.2,
            ease: Power1.easeIn,
            snap: { textContent: 1 },
            stagger: 1,
            scrollTrigger: {
              trigger: `.counter__number`,
            },
          });
        }
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

  const tabStyle = (tabKey) => ({
    color:
      theme == "dark" ? (activeTab === tabKey ? "black" : "white") : "black",
  });

  const themestyle = () => ({
    background: theme === "light" ? "#ffff" : "",
  });

  const fontstyle = () => ({
    background: theme === "light" ? "#ffff" : "",
    color: theme === "light" ? "#000" : "#fff",
  });

  return (
    <div className="w-5/6 px-5">
      <div className="service-title-style text-anim pt-130">
        {/* <h2 className="sec-subtile-6">Serves</h2> */}
        <h3 className="sec-title-6 title-anim">Our Services</h3>
      </div>
      <Tabs
        activeKey={activeTab}
        onSelect={(k) => setActiveTab(k)}
        id="fill-tab-example"
        className="mb-3"
        fill
      >
        <Tab
          eventKey="webdev"
          className="mx-2"
          title={<span style={tabStyle("webdev")}>Website Development</span>}
        >
          <section className="about__area-3" style={themestyle()}>
            <div className="container pt-100 pb-110">
              <div className="row">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 ">
                  <div className="about__img-3 img-fluid pl-5 responsive-img">
                    <Image
                      priority
                      src="/assets/imgs/homepage/service-1.jpg"
                      alt="About Thumbnail"
                      width={400}
                    height={500}
                      data-speed="auto"
                      className="smootherReset768"
                    />
                    <style jsx>{`
                      .responsive-img {
                        width: 350px;
                        height: 500px;
                      }

                      /* Media query for mobile screens */
                      @media (max-width: 768px) {
                        .responsive-img {
                          width: 300px;
                          height: 400px;
                        }
                      }
                    `}</style>
                  </div>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                  <div className="sec-title-wrapper" style={themestyle()}>
                    <h3 className="sec-title title-anim" style={fontstyle()}>
                      Website Development
                    </h3>
                  </div>
                  <div className="sec-text-wrapper">
                    <div className="sec-text text-anim">
                      <p className="text-justify">
                      <strong className="fs-5">
  Your website is where brand perception begins. Let&apos;s make it powerful.
</strong>
                        <br />
                        Your website is the first thing your customers see. It
                        needs to make a strong opening move. You need strategic
                        web design wizardry on the table, sparking innovation
                        where there was once only a blank board.
                      </p>
                      <br />

                      <div className="flex items-justify mt-40 justify-between">
                        <span className="line-3"></span>

                        <div className="row">
                          <div className="col-xxl-12">
                            <div className="counter_row counter_animation">
                              <div className="counter_item-2 counter_anim justify-content-center align-content-center align-items-center">
                                <h2
                                  className="count1 text-center"
                                  style={fontstyle()}
                                >
                                  7
                                </h2>
                                <p className="text-center">
                                  Custom built <br />
                                  functional websites{" "}
                                </p>
                                <span className="counter__border"></span>
                              </div>

                              <div className="counter_item-2 counter_anim">
                                <h2
                                  className="count2 text-center"
                                  style={fontstyle()}
                                >
                                  3
                                </h2>
                                <p className="text-center">
                                  No code <br />
                                  websites{" "}
                                </p>
                                <span className="counter__border"></span>
                              </div>

                              <div className="counter_item-2 counter_anim">
                                <h2
                                  className="count2 text-center"
                                  style={fontstyle()}
                                >
                                  1
                                </h2>
                                <p className="text-center">
                                  Ecommerce
                                  <br /> Website{" "}
                                </p>
                                <span className="counter__border"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="btn_wrapper">
                        <Link
                          className="wc-btn-light btn-hover btn-item"
                          style={{ border: "2px solid #0096d4" }}
                          href="/about"
                        >
                          <span></span> Build My <br />
                          Website
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Tab>

        <Tab
          eventKey="automation"
          title={
            <span style={tabStyle("automation")}>Nurturing Automation</span>
          }
        >
          <section className="about__area-3" style={themestyle()}>
            <div className="container pt-100 pb-110">
              <div className="row">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                  <Image
                    priority
                    src="/assets/imgs/homepage/service-4.png"
                    alt="About Thumbnail"
                    data-speed="auto"
                    width={400}
                    height={500}
                    className="smootherReset768"
                  />
                  <style jsx>{`
                    .responsive-img {
                      width: 400px;
                      height: 500px;
                    }

                    /* Media query for mobile screens */
                    @media (max-width: 768px) {
                      .responsive-img {
                        width: 300px;
                        height: 400px;
                      }
                    }
                  `}</style>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                  <div className="sec-title-wrapper">
                    <h3 className="sec-title title-anim" style={fontstyle()}>
                      Nurturing Automation
                    </h3>
                  </div>
                  <div className="sec-text-wrapper">
                    <div className="sec-text text-anim">
                      <p>
                        <strong className="fs-5">
                          Transform first-time buyers into long-term customers
                          with epic automated workflows and personalized nurture
                          campaigns.
                        </strong>{" "}
                        <br /> <br /> Send out a cleverly crafted personalised
                        communication that hooks your audience, builds
                        excitement, and keeps them eagerly awaiting the next
                        update.
                      </p>

                      <br />

                      <div className="flex items-justify justify-between">
                        <span className="line-3"></span>

                        <div className="row">
                          <div className="col-xxl-12">
                            <div className="counter_row counter_animation">
                              <div className="counter_item-2 counter_anim">
                                <h2
                                  className="count1 text-center"
                                  style={fontstyle()}
                                >
                                  100+
                                </h2>
                                <p className="text-center">
                                  Automated workflows{" "}
                                </p>
                                <span className="counter__border"></span>
                              </div>

                              <div className="counter_item-2 counter_anim">
                                <h2
                                  className="count2 text-center"
                                  style={fontstyle()}
                                >
                                  30%
                                </h2>
                                <p className="text-center">
                                  increase in lead conversions
                                </p>
                                <span className="counter__border"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="btn_wrapper">
                        <Link
                          className="wc-btn-light btn-hover btn-item text-center"
                          style={{ border: "2px solid #0096d4" }}
                          href="/about"
                        >
                          <span></span> Automate My
                          <br /> Growth Now{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Tab>
        <Tab
          eventKey="marketing"
          title={<span style={tabStyle("marketing")}>Digital Marketing</span>}
        >
          <section className="about__area-3" style={themestyle()}>
            <div className="container pt-100 pb-110">
              <div className="row">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                  <Image
                    priority
                    src="/assets/imgs/homepage/service-3.png"
                    alt="About Thumbnail"
                    width={400}
                    height={500}
                    data-speed="auto"
                    className="smootherReset768"
                  />
                  <style jsx>{`
                    .responsive-img {
                      width: 400px;
                      height: 500px;
                    }

                    /* Media query for mobile screens */
                    @media (max-width: 768px) {
                      .responsive-img {
                        width: 300px;
                        height: 400px;
                      }
                    }
                  `}</style>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                  <div className="sec-title-wrapper">
                    <h3 className="sec-title title-anim" style={fontstyle()}>
                      Digital Marketing
                    </h3>
                  </div>
                  <div className="sec-text-wrapper">
                    <div className="sec-text text-anim">
                      <p>
                        <strong className="fs-5">
                          Your next customer is scrolling—make them stop and
                          engage.
                        </strong>{" "}
                        <br /> With digital campaigns crafted specifically for
                        your business goals and success metrics, get ready for
                        growth that’s measurable, sustainable, and uniquely
                        yours.
                      </p>

                      <br />

                      <div className="flex items-justify justify-between">
                        <span className="line-3"></span>

                        <div className="row">
                          <div className="col-xxl-12">
                            <div className="counter_row counter_animation">
                              <div className="counter_item-2 counter_anim">
                                <h2
                                  className="count1 text-center"
                                  style={fontstyle()}
                                >
                                  40%
                                </h2>
                                <p className="text-center">
                                  increase in lead generation{" "}
                                </p>
                                <span className="counter__border"></span>
                              </div>

                              <div className="counter_item-2 counter_anim">
                                <h2
                                  className="count2 text-center"
                                  style={fontstyle()}
                                >
                                  50%
                                </h2>
                                <p className="text-center">
                                  boost in organic traffic
                                </p>
                                <span className="counter__border"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="btn_wrapper">
                        <Link
                          className="wc-btn-light btn-hover text-center btn-item"
                          style={{ border: "2px solid #0096d4" }}
                          href="/about"
                        >
                          <span></span> Start Your Digital <br />
                          Transformation{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Tab>
        <Tab
          eventKey="gtm"
          title={<span style={tabStyle("gtm")}>GTM - Strategy</span>}
        >
          <section className="about__area-3" style={themestyle()}>
            <div className="container pt-100 pb-110">
              <div className="row">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                  <Image
                    priority
                    src="/assets/imgs/homepage/service-2.png"
                    alt="About Thumbnail"
                    width={400}
                    height={500}
                    data-speed="auto"
                    className="smootherReset768"
                  />
                  <style jsx>{`
                    .responsive-img {
                      width: 400px;
                      height: 500px;
                    }

                    /* Media query for mobile screens */
                    @media (max-width: 768px) {
                      .responsive-img {
                        width: 300px;
                        height: 400px;
                      }
                    }
                  `}</style>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                  <div className="sec-title-wrapper">
                    <h3 className="sec-title title-anim" style={fontstyle()}>
                      GTM - Strategy
                    </h3>
                  </div>
                  <div className="sec-text-wrapper">
                    <div className="sec-text text-anim">
                      <p>
                        <strong>
                          {" "}
                          Stand out in the crowd with a GTM plan that’s anything
                          but ordinary.
                        </strong>
                      </p>
                      <div className="btn_wrapper">
                        <Link
                          className="wc-btn-light btn-hover btn-item text-center p-3"
                          style={{ border: "2px solid #0096d4" }}
                          href="/about"
                        >
                          <span></span> Claim My Free
                          <br /> Strategy Session{" "}
                          {/* <i className="fa-solid fa-arrow-right"></i> */}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Tab>
      </Tabs>
    </div>
  );
}

export default Tabsection;

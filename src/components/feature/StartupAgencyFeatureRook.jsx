import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Feature41 from "../../../public/assets/imgs/feature/4/1.webp";
import Feature42 from "../../../public/assets/imgs/feature/4/2.webp";
import Feature43 from "../../../public/assets/imgs/feature/4/3.webp";
import Feature from "../../../public/assets/imgs/rook/consultancy/630x538.webp";
import Icon1 from "../../../public/assets/imgs/feature/4/icon-1.webp";
import Icon2 from "../../../public/assets/imgs/feature/4/icon-2.webp";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const StartupAgencyFeatureRook = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        gsap.set(".fade_bottom_4", { y: 30, opacity: 0 });

        if (device_width < 1023) {
          const fadeArray = gsap.utils.toArray(".fade_bottom_4");
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
          gsap.to(".fade_bottom_4", {
            scrollTrigger: {
              trigger: ".fade_bottom_4",
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
      <section className="feature__area-6">
        <div className="container line_4">
          <div className="line-col-4">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <div className="row">
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-6">
              <div className="feature__content-left">
                <h2 className="sec-subtile-6">What We Offer</h2>
                <h3 className="sec-title-6 title-anim">
                  We elevates your company with diverse services.
                </h3>
              </div>
            </div>
            <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-6">
              <div className="feature__content-right">
                <h4 className="feature__title-6">In-Depth Data Analysis</h4>
                <p className="text-justify">
                  Conducting in-depth analysis to extract valuable business insights that drive strategic decision-making and growth.{" "}
                  {/* <span>brands and design features</span> from a hybrid
                  perspective.
                </p>
                <p>
                  Regulatory oneven an enterprises such she and the got the did
                  attributing and pushed. */}
                </p>

                <h4 className="feature__title-6">Custom and bespoke services</h4>
                <p>
                  Brand Identity{" "}<br />
                  Market Analysis{" "}<br />
                  Marketing Campaigns{" "}
                </p>

                <Image
                  priority
                  width={130}
                  height={97}
                  className="feature__img-1"
                  src={Feature41}
                  alt="Icon"
                />
                <Image
                  priority
                  width={99}
                  height={131}
                  className="feature__img-2"
                  src={Feature42}
                  alt="Icon"
                />
                <Image
                  priority
                  width={38}
                  height={38}
                  className="feature__img-3"
                  src={Feature43}
                  alt="Icon"
                />
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="feature__content">
                <Image
                  priority
                  width={630}
                  style={{ height: "auto" }}
                  src={Feature}
                  alt="Features Image"
                />
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="feature__content-btm">
                <div className="feature__content-item fade_bottom_4">
                  <Image
                    priority
                    width={50}
                    height={50}
                    src={Icon1}
                    alt="Features Image"
                  />
                  <h5>
                    Conceptualize<br /> Strategy
                  </h5>
                  <p>Turning ideas into strategies, offering a roadmap for business success in a competitive market.</p>
                </div>
                <div className="feature__content-item fade_bottom_4">
                  <Image
                    priority
                    width={50}
                    height={50}
                    src={Icon2}
                    alt="Features Image"
                  />
                  <h5>
                    Identify Execution <br /> Plan
                  </h5>
                  <p>Creating detailed plans to turn strategies into results, promoting efficient progress towards business goals.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StartupAgencyFeatureRook;

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import FeatureIcon1 from "../../../public/assets/imgs/feature/icon/1.webp";
import FeatureIcon2 from "../../../public/assets/imgs/feature/icon/2.webp";
import FeatureIcon3 from "../../../public/assets/imgs/feature/icon/3.webp";
import FeatureIcon4 from "../../../public/assets/imgs/feature/icon/4.webp";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const DesignStudioFeatureRook = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      setTimeout(() => {
        let tHero = gsap.context(() => {
          let animation__feature2 = gsap.utils.toArray(
            ".animation__feature2 .feature__item"
          );
          if (device_width < 1023) {
            animation__feature2.forEach((item, i) => {
              gsap.set(item, { opacity: 0, y: 60 });
              let featured2Timeline = gsap.timeline({
                scrollTrigger: {
                  trigger: item,
                  start: "top center+=200",
                },
              });
              featured2Timeline.to(item, {
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: "power4.out",
              });
            });
          } else {
            gsap.set(".animation__feature2 .feature__item", {
              opacity: 0,
              y: 40,
            });
            gsap.to(".animation__feature2 .feature__item", {
              scrollTrigger: {
                trigger: ".animation__feature2",
                start: "top center+=200",
              },
              opacity: 1,
              y: 0,
              duration: 2,
              ease: "power4.out",
              stagger: 0.3,
            });
          }
        });
        return () => tHero.revert();
      }, 1000);
    }
  }, []);
  return (
    <>
      <section className="feature__area-2 pt-42 pb-100">
        <div className="feature__top">
          <div className="container">
            <div className="row">
              <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-6">
                <div className="sec-title-wrapper">
                  <h2 className="sec-title title-anim">
                    Empower your business with Rook.
                  </h2>
                </div>
              </div>
              <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-6">
                <div className="feature__text text-anim">
                  <p style={{ textAlign: "justify" }}>
                    Unleash the full potential of your business with Rook
                  ! Our expertise and innovation will drive your
                    business towards accelerated growth and deliver outstanding
                    results that set you apart in the market.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
{/* 
        <div className="feature__btm">
          <div className="container">
            <div className="row">
              <div className="col-xxl-12">
                <div className="feature__list animation__feature2">
                  <Link href="/service/consultancy">
                    <div className="feature__item">
                      <Image
                        priority
                        width={108}
                        height={108}
                        src={FeatureIcon2}
                        alt="Feature Icon"
                      />
                      <h3 className="feature__title">Consultancy</h3>
                      <p>
                        We provide expert guidance and solutions to overcome
                        challenges and achieve success.
                      </p>
                    </div>
                  </Link>
                  <Link href="/service/designing">
                    <div className="feature__item">
                      <Image
                        priority
                        width={108}
                        height={108}
                        src={FeatureIcon1}
                        alt="Feature Icon"
                      />
                      <h3 className="feature__title">Designing</h3>
                      <p>
                        We create visually appealing designs that captivate and
                        leave a lasting impression.
                      </p>
                    </div>
                  </Link>
                  <Link href="/service/marketing">
                    <div className="feature__item">
                      <Image
                        priority
                        width={108}
                        height={108}
                        src={FeatureIcon3}
                        alt="Feature Icon"
                      />
                      <h3 className="feature__title">Digital Marketing</h3>
                      <p>
                        We create impactful marketing campaigns and establish a
                        strong online presence for brands.
                      </p>
                    </div>
                  </Link>
                  <Link href="/service/development">
                    <div className="feature__item">
                      <Image
                        priority
                        width={108}
                        height={108}
                        src={FeatureIcon4}
                        alt="Feature Icon"
                      />
                      <h3 className="feature__title">Product Development</h3>
                      <p>
                        We transform ideas into innovative applications and
                        websites, establishing a strong digital presence.
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </section>
    </>
  );
};

export default DesignStudioFeatureRook;

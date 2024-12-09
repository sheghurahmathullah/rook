import { useEffect } from "react";
import Tilt from "react-parallax-tilt";
import { FreeMode, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { gsap } from "gsap";
import { ScrollTrigger, ScrollSmoother } from "@/plugins";
import work1 from "../../../public/assets/imgs/rook/home/sample-portfolio/hgf.webp";
import work2 from "../../../public/assets/imgs/rook/home/sample-portfolio/hgg.webp";
import work3 from "../../../public/assets/imgs/rook/home/sample-portfolio/uy.webp";
import work4 from "../../../public/assets/imgs/rook/home/sample-portfolio/oo.webp";
import work5 from "../../../public/assets/imgs/rook/home/sample-portfolio/jkk.webp";
import work6 from "../../../public/assets/imgs/rook/home/sample-portfolio/pp.webp";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import Link from "next/link";
import Image from "next/image";

const ModernAgencyWork = () => {
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
      <div className="work__area-8">
        <div className="sec-top sp-x">
          <h6 className="text-end about-sub-right">Our Portfolio</h6>
          <div className="section_wrapper">
            <h4 className="react_border">
              <span>03</span>
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="roll__slider">
            <Swiper
              modules={[FreeMode, Autoplay]}
              spaceBetween={60}
              slidesPerView={1}
              freeMode={true}
              loop={true}
              centeredSlides={true}
              allowTouchMove={false}
              speed={10000}
              autoplay={{
                delay: 1,
                disableOnInteraction: true,
              }}
            >
              <div className="swiper-wrapper">
                <SwiperSlide>
                  <h2 className="rollslide_title-1">
                    Success <span>stories</span>
                  </h2>
                </SwiperSlide>
                <SwiperSlide>
                  <h2 className="rollslide_title-1">
                    Success <span>stories</span>
                  </h2>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </div>

        <div className="work8__title fade_bottom_3">
          {/* <p>
            {" "}
            Our Customer-Centric Approach Puts Your Needs at the
            Heart of Everything We Do.
          </p> */}
        </div>

        <div className="workitems sp-x">
          <div className="work8 fade_bottom_3">
            <Tilt className="work8__inner">
              <Link
                href="/portfolio-details"
                className="wc-tilt"
                data-speed="1"
              >
                <div className="work8__thumb">
                  <Image
                    priority
                    width={655}
                    style={{ height: "auto" }}
                    src={work1}
                    alt="The Moon Bistro image"
                  />
                </div>
                <div className="work8__content tilt">
                  <h4 className="work8__content__title">
                    The Moon <span>Bistro</span>
                  </h4>
                  <p>
                    {/* Natre, New York <br />- 2019 */}
                    Social Media Post
                  </p>
                </div>
              </Link>
            </Tilt>
          </div>

          <div className="work8 fade_bottom_3">
            <Tilt className="work8__inner">
              <Link
                href="/portfolio-details"
                className="wc-tilt"
                data-speed="1.2"
              >
                <div className="work8__thumb">
                  <Image
                    priority
                    width={655}
                    style={{ height: "auto" }}
                    src={work2}
                    alt="Turk image"
                  />
                </div>
                <div className="work8__content tilt">
                  <h4 className="work8__content__title">
                    <span>TURK</span>
                  </h4>
                  <p>
                    {/* Natre, New York <br />- 2019 */}
                    Elite Business Cards
                  </p>
                </div>
              </Link>
            </Tilt>
          </div>
          <div className="work8 fade_bottom_3">
            <Tilt className="work8__inner">
              <Link
                href="/portfolio-details"
                className="wc-tilt"
                data-speed="1.3"
              >
                <div className="work8__thumb">
                  <Image
                    priority
                    width={330}
                    style={{ height: "auto" }}
                    src={work4}
                    alt="Advertisement Post image"
                  />
                </div>
                <div className="work8__content tilt">
                  <h4 className="work8__content__title">
                    Advertisement <span>Post</span>
                  </h4>
                  <p>Social Media Presence</p>
                </div>
              </Link>
            </Tilt>
          </div>

          <div className="work8 fade_bottom_3">
            <Tilt className="work8__inner">
              <Link
                href="/portfolio-details"
                className="wc-tilt"
                data-speed="1.2"
              >
                <div className="work8__thumb">
                  <Image
                    priority
                    width={440}
                    style={{ height: "auto" }}
                    src={work3}
                    alt="Moufil image"
                  />
                </div>
                <div className="work8__content tilt">
                  <h4 className="work8__content__title">
                    Moufil <span></span>
                  </h4>
                  <p>
                    {/* Natre, New York <br />- 2019 */}
                    Website Development
                  </p>
                </div>
              </Link>
            </Tilt>
          </div>
          <div className="work8 fade_bottom_3">
            <Tilt className="work8__inner">
              <Link
                href="/portfolio-details"
                className="wc-tilt"
                data-speed="1.2"
              >
                <div className="work8__thumb">
                  <Image
                    priority
                    width={655}
                    style={{ height: "auto" }}
                    src={work6}
                    alt="Au Chains Image"
                  />
                </div>
                <div className="work8__content tilt">
                  <h4 className="work8__content__title">
                    Au<span>Chains</span>
                  </h4>
                  <p>
                    {/* Natre, New York <br />- 2019 */}
                    Online Advertisement
                  </p>
                </div>
              </Link>
            </Tilt>
          </div>
          <div className="work8 fade_bottom_3">
            <Tilt className="work8__inner">
              <Link
                href="/portfolio-details"
                className="wc-tilt"
                data-speed="1"
              >
                <div className="work8__thumb">
                  <Image
                    priority
                    width={655}
                    style={{ height: "auto" }}
                    src={work5}
                    alt="Gavine & Co image"
                  />
                </div>
                <div className="work8__content tilt">
                  <h4 className="work8__content__title">
                    <span>Gavine & Co</span>
                  </h4>
                  <p>
                    Branding <br /> - 2023
                  </p>
                </div>
              </Link>
            </Tilt>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="work8__btn">
              <Link href="/portfolio" className="blog__btn about_btn">
                view more success stories
                <span>
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModernAgencyWork;

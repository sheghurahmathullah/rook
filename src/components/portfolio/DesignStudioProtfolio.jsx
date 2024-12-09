import { Autoplay, EffectFade, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Portfilio21 from "../../../public/assets/imgs/rook/portfolio/caruda.webp";
import Portfilio22 from "../../../public/assets/imgs/rook/portfolio/moufil.webp";
import Portfilio23 from "../../../public/assets/imgs/rook/portfolio/fineques.webp";
import Portfilio24 from "../../../public/assets/imgs/rook/portfolio/jdilipcaterers.webp";
import Portfilio25 from "../../../public/assets/imgs/rook/portfolio/varthaga.webp";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import Link from "next/link";

const DesignStudioProtfolio = () => {
  return (
    <>
      <section className="portfolio__area-2">
        <div className="container g-0 line pt-100 pb-140">
          <div className="row">
            <div className="col-xxl-12">
              <div className="sec-title-wrapper text-anim">
                <div>
                  <h2 className="title-anim sec-title-3">
                    TRANSFORM YOUR BUSINESS{" "}
                    <span
                      style={{
                        fontFamily: "newYork, serif",
                        fontWeight: "normal",
                      }}
                    >
                      DIGITALLY
                    </span>
                  </h2>
                </div>
                <p className="sec-text">
                  Worked with global brands & agency at the intersection of flat
                  design and digital technology.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="portfolio__slider-2">
          <Swiper
            modules={[Autoplay, EffectFade, Pagination]}
            spaceBetween={0}
            effect={"fade"}
            slidesPerView={1}
            loop={true}
            speed={1500}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              el: ".swiper-pagination",
              clickable: true,
              renderBullet: function (i, className) {
                return `
                <button class="${className}">
                  <svg class="circle-progress"><circle class="circle-origin" r="24.5" cx="25" cy="25"></circle></svg><span></span>
                </button>
              `;
              },
            }}
          >
            <div className="swiper-wrapper">
              {/* moufil */}
              <SwiperSlide>
                <div className="portfolio__slide-2">
                  <div className="slide-img">
                    <Link href="https://moufil.com/">
                      <Image
                        priority
                        style={{ width: "100%", height: "auto" }}
                        src={Portfilio22}
                        alt="Portfolio Image"
                      />
                    </Link>
                  </div>
                  <div className="slide-content">
                    <h2 className="sec-title">
                      <Link href="https://moufil.com/">
                        Moufil <span></span>
                      </Link>
                    </h2>
                    <p>
                      Crafting innovative solutions through Website and Product
                      Development.
                    </p>
                    <div className="btn-common-wrap">
                      <Link href="https://moufil.com/" className="btn-common">
                        Explore More <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* fineques */}
              <SwiperSlide>
                <div className="portfolio__slide-2">
                  <div className="slide-img">
                    <Link href="https://finequs.com/">
                      <Image
                        priority
                        style={{ width: "100%", height: "auto" }}
                        src={Portfilio23}
                        alt="Portfolio Image"
                      />
                    </Link>
                  </div>
                  <div className="slide-content">
                    <h2 className="sec-title">
                      <Link href="https://finequs.com/">
                        Finequs <span></span>
                      </Link>
                    </h2>
                    <p>
                      Bringing Ideas to life through Creative and Impactful
                      Graphic Designing.
                    </p>
                    <div className="btn-common-wrap">
                      <Link href="https://finequs.com/" className="btn-common">
                        Explore More <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* caruda.in */}
              <SwiperSlide>
                <div className="portfolio__slide-2">
                  <div className="slide-img">
                    <Link href="https://caruda.in">
                      <Image
                        priority
                        style={{ width: "100%", height: "auto" }}
                        src={Portfilio21}
                        alt="Portfolio Image"
                      />
                    </Link>
                  </div>
                  <div className="slide-content">
                    <h2 className="sec-title">
                      <Link href="https://caruda.in">
                        Caruda <span></span>
                      </Link>
                    </h2>
                    <p>
                      Elevating brands through creative product development.
                    </p>
                    <div className="btn-common-wrap">
                      <Link href="https://caruda.in" className="btn-common">
                        Explore More <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* jdilipcaterers */}
              <SwiperSlide>
                <div className="portfolio__slide-2">
                  <div className="slide-img">
                    <Link href="https://jdilipcaterers.com/">
                      <Image
                        priority
                        style={{ width: "100%", height: "auto" }}
                        src={Portfilio24}
                        alt="Portfolio Image"
                      />
                    </Link>
                  </div>
                  <div className="slide-content">
                    <h2 className="sec-title">
                      <Link href="https://jdilipcaterers.com/">
                        J Dilip <span>Caterers</span>
                      </Link>
                    </h2>
                    <p>
                      Creating impactful solutions through Product Development.
                    </p>
                    <div className="btn-common-wrap">
                      <Link
                        href="https://jdilipcaterers.com/"
                        className="btn-common"
                      >
                        Explore More <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* varthaga */}
              <SwiperSlide>
                <div className="portfolio__slide-2">
                  <div className="slide-img">
                    <Link href="https://varthaga.co/">
                      <Image
                        priority
                        style={{ width: "100%", height: "auto" }}
                        src={Portfilio25}
                        alt="Portfolio Image"
                      />
                    </Link>
                  </div>
                  <div className="slide-content">
                    <h2 className="sec-title">
                      <Link href="https://varthaga.co/">
                        Varthaga <span>Enterprises</span>
                      </Link>
                    </h2>
                    <p>
                      Crafting innovative solutions through Website and Product
                      Development.
                    </p>
                    <div className="btn-common-wrap">
                      <Link href="https://varthaga.co/" className="btn-common">
                        Explore More <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </div>

            <div className="swiper-pagination circle-pagination right"></div>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default DesignStudioProtfolio;

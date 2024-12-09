import { Autoplay, EffectFade, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// import Portfilio21 from "../../../public/assets/imgs/portfolio/2/1.jpg";
// import Portfilio22 from "../../../public/assets/imgs/portfolio/2/2.jpg";
// import Portfilio23 from "../../../public/assets/imgs/portfolio/2/3.jpg";
// import Portfilio24 from "../../../public/assets/imgs/portfolio/2/4.jpg";
// import Portfilio25 from "../../../public/assets/imgs/portfolio/2/5.jpg";
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
        <div className="container g-0 line">
          <div className="row">
            <div className="col-xxl-12">
             
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
            {/* <SwiperSlide>
                <div className="portfolio__slide-2">
                  <div className="slide-img">
                    <Link href="/portfolio-details">
                      <img
                        priority
                        style={{ width: "100%", height: "600px" }}
                        // src={Portfilio21}
                        src="https://img.freepik.com/premium-photo/integrating-email-segmentation-targeted-marketing-campaigns_1247965-4650.jpg?w=740"
                        alt="Portfolio Image"
                      />
                    </Link>
                  </div>
                  <div className="slide-content">
                    <h2 className="sec-title" style={{fontSize:"50px"}}>
                      {" "}
                      <Link href="/portfolio-details">
                      How email marketing <br /> generates a higher <br /> ROI than any other channel?
                      </Link>
                    </h2>
                   
                   <strong>Many marketers struggle with ROI from email campaigns <br />—usually because their timing’s off.</strong>
                   
                   <p>
                   Think about your own inbox. It's flooded with promo emails, and if one lands at the wrong time, it's easily ignored or even annoying.
                    </p>
                    
                  </div>
                </div>
              </SwiperSlide> */}

<SwiperSlide>
                <div className="portfolio__slide-2">
                  <div className="slide-img">
                    <Link href="/portfolio-details">
                      <Image
                        priority
                        style={{ width: "100%", height: "auto" }}
                        // src={Portfilio21}
                        src="/assets/imgs/digitalmarketing/emailmarketing/section-2-1.jpg"
                        alt="Portfolio Image"
                      />
                    </Link>
                  </div>
                  <div className="slide-content">
                    <h2 className="sec-title" style={{fontSize:"50px"}}>
                      {" "}
                      <Link href="/portfolio-details">
                      How email marketing <br /> generates a higher <br /> ROI than any other channel?
                      </Link>
                    </h2>
                   
                   <strong>Many marketers struggle with ROI from email campaigns <br />—usually because their timing’s off.</strong>
                   
                   <p>
  Think about your own inbox. It&apos;s flooded with promo emails, and if one lands at the wrong time, it&apos;s easily ignored or even annoying.
</p>

                    
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="portfolio__slide-2">
                  <div className="slide-img">
                    <Link href="/portfolio-details">
                      <Image
                        priority
                        style={{ width: "100%", height: "auto" }}
                        // src={Portfilio21}
                        src="/assets/imgs/digitalmarketing/emailmarketing/section-2-2.jpg"
                        alt="Portfolio Image"
                      />
                    </Link>
                  </div>
                  <div className="slide-content">
                    <h2 className="sec-title" style={{fontSize:"50px"}}>
                      {" "}
                      <Link href="/portfolio-details">
                      So how does email marketing still outshine every other channel?
                      </Link>
                    </h2>
                   
                   <strong>Some agencies overuse it, but when done right, email <br /> marketing is a powerful tool. Our specialists know how  <br />to connect with  your audience at the perfect moment, <br /> boosting sales, leads, and traffic.</strong>
                   
                  
                    
                  </div>
                </div>
              </SwiperSlide>

              {/* <SwiperSlide>
                <div className="portfolio__slide-2">
                  <div className="slide-img">
                    <Link href="/portfolio-details">
                      <Image
                        priority
                        style={{ width: "100%", height: "auto" }}
                        // src={Portfilio22}
                        alt="Portfolio Image"
                      />
                    </Link>
                  </div>
                  <div className="slide-content">
                    <h2 className="sec-title">
                      <Link href="/portfolio-details">
                        crodyflw <span>Website</span>
                      </Link>
                    </h2>
                    <p>
                      We are passionate designers, developers and digital
                      marketeers. We produce best projects that both ourselves
                    </p>
                    <div className="btn-common-wrap">
                      <Link href="/portfolio-details" className="btn-common">
                        View details <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide> */}

           

              

             
            </div>

            <div className="swiper-pagination circle-pagination right"></div>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default DesignStudioProtfolio;

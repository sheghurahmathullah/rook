import { FreeMode, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Testimonial41 from "../../../public/assets/imgs/rook/home/ravichandran.webp";
import Testimonial42 from "../../../public/assets/imgs/rook/home/bala.webp";
import Testimonial43 from "../../../public/assets/imgs/rook/home/shanthosh.webp";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const StartupAgencyTestimonial = () => {
  return (
    <>
      <section className="testimonial__area-4 ">
        <div className="container g-0 line_4">
          <div className="line-col-4">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <div className="row">
            <div className="col-xxl-12">
              <div className="testimonial__sec-title text-anim">
                <h2 className="sec-subtile-6">Testimonials</h2>
                <h3 className="sec-title-6 title-anim">Hear from our satisfied clients.</h3>
                <p>
                  Read the honest feedback from the people who have used our solutions and experienced the benefits
                </p>
              </div>
            </div>
            <div className="testimonial__slider-4">
              <Swiper
                modules={[FreeMode, Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={3}
                freeMode={true}
                loop={true}
                speed={2000}
                navigation={{
                  prevEl: ".prev-button",
                  nextEl: ".next-button",
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                }}
                pagination={{
                  el: ".pagination",
                  type: "fraction",
                }}
                className="swiper testimonial__slider-4"
              >
                <div className="swiper-wrapper">

                  <SwiperSlide>
                    <div className="testimonial__slide-4">
                      <Image
                        priority
                        width={100}
                        height={100}
                        style={{borderRadius:"50%"}}
                        className="testimonial__img-4"
                        src={Testimonial41}
                        alt="Testimonial Image"
                      />
                      <div className="testimonial__info-4">
                        <h4 className="testimonial__feedback-4">
                          Startup Success
                        </h4>
                        <p>
                          Rook Fellows transformed my startup vision into reality with exceptional design and strategic digital marketing.
                        </p>
                        <h5 className="testimonial__name-4">
                          Ravichandran
                        </h5>
                        <h6 className="testimonial__role-4 pt-2">
                          FOUNDER & CEO MOUFIL
                        </h6>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="testimonial__slide-4">
                      <Image
                        priority
                        width={100}
                        height={100}
                        style={{borderRadius:"50%"}}
                        className="testimonial__img-4"
                        src={Testimonial42}
                        alt="Testimonial Image"
                      />
                      <div className="testimonial__info-4">
                        <h4 className="testimonial__feedback-4">Consultancy Excellence</h4>
                        <p>
                          Incredible consultancy—Rook Fellows guided us to success, providing expert insights and unwavering support.
                        </p>
                        <h5 className="testimonial__name-4">
                          Balaskandan Raghunathan
                        </h5>
                        <h6 className="testimonial__role-4 pt-2">FOUNDER & CEO CAPITAL GROUPS</h6>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="testimonial__slide-4">
                      <Image
                        priority
                        
                        width={100}
                        height={100}
                        style={{borderRadius:"50%"}}
                        className="testimonial__img-4"
                        src={Testimonial43}
                        alt="Testimonial Image"
                      />
                      <div className="testimonial__info-4">
                        <h4 className="testimonial__feedback-4">
                          Product Development
                        </h4>
                        <p>
                          Product development excellence! Rook Fellows exceeded our expectations, delivering innovation and precision.
                        </p>
                        <h5 className="testimonial__name-4">
                          Santhosh Kumar
                        </h5>
                        <h6 className="testimonial__role-4 pt-2">
                          FOUNDER SPINACLE
                        </h6>
                      </div>
                    </div>
                  </SwiperSlide>

                  {/* <SwiperSlide>
                    <div className="testimonial__slide-4">
                      <Image
                        priority
                        width={85}
                        height={85}
                        className="testimonial__img-4"
                        src={Testimonial41}
                        alt="Testimonial Image"
                      />
                      <div className="testimonial__info-4">
                        <h4 className="testimonial__feedback-4">
                          Design Quality
                        </h4>
                        <p>
                          Our philosophy is built on people who are addicted on
                          creating, learning, and growing together, which allows
                          us to discover better others miss.
                        </p>
                        <h5 className="testimonial__name-4">
                          Jessica Sherlock
                        </h5>
                        <h6 className="testimonial__role-4">
                          Manager, Oitaka{" "}
                        </h6>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="testimonial__slide-4">
                      <Image
                        priority
                        width={85}
                        height={85}
                        className="testimonial__img-4"
                        src={Testimonial42}
                        alt="Testimonial Image"
                      />
                      <div className="testimonial__info-4">
                        <h4 className="testimonial__feedback-4">Clean Code</h4>
                        <p>
                          I am very glod happy with this theme, the website
                          loads much faster than any other theme I have used so
                          far clean code and responsive layout.
                        </p>
                        <h5 className="testimonial__name-4">Sharoon Kavin</h5>
                        <h6 className="testimonial__role-4">CEO, Sharoon</h6>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="testimonial__slide-4">
                      <Image
                        priority
                        width={85}
                        height={85}
                        className="testimonial__img-4"
                        src={Testimonial43}
                        alt="Testimonial Image"
                      />
                      <div className="testimonial__info-4">
                        <h4 className="testimonial__feedback-4">
                          Instant Support
                        </h4>
                        <p>
                          In the next time I hire Axtra as they helping
                          innovators and brands through cultural insight,
                          strategiccal vision, and innovation and look too
                          beyond.
                        </p>
                        <h5 className="testimonial__name-4">Sharly Mehroon</h5>
                        <h6 className="testimonial__role-4">
                          Manager, Kavitan
                        </h6>
                      </div>
                    </div>
                  </SwiperSlide> */}

                </div>
                <div className="testimonial__btn-4">
                  <div
                    style={{ cursor: "pointer" }}
                    className="next-button swipper-btn"
                  >
                    <i className="fa-solid fa-arrow-left"></i>
                  </div>
                  <div
                    style={{ cursor: "pointer" }}
                    className="prev-button swipper-btn"
                  >
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                  <div className="pagination testimonial__pagination-4">
                    <div className="pag"></div>
                  </div>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StartupAgencyTestimonial;

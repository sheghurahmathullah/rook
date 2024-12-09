import { FreeMode, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";

const DesignStudioRoll = () => {
  return (
    <>
      <section className="roll__area-2">
        <div className="roll__slider">
          <Swiper
            modules={[FreeMode, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            freeMode={true}
            loop={true}
            centeredSlides={true}
            allowTouchMove={false}
            simulateTouch={false}
            speed={2000}
            autoplay={{
              delay: 1,
              disableOnInteraction: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 3,
              },
              800: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
              1300: {
                slidesPerView: 5,
              },
              1900: {
                slidesPerView: 8,
              },
            }}
          >
        <SwiperSlide>
              <div className="roll__slide">
                <h2>Website Development</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Digital Marketing</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
  <div className="roll__slide px-4">
    <h2
      style={{
        whiteSpace: "nowrap",
        textAlign: "center",
        fontSize: "1.6rem",
        paddingTop:"1px"
      }}
    >
      Nurturing Automation
    </h2>
  </div>
</SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>GTM - Strategy </h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Website Development</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Digital Marketing</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
  <div className="roll__slide">
    <h2
      style={{
        whiteSpace: "nowrap",
        textAlign: "center",
        fontSize: "1.6rem",
        paddingTop:"1px"
      }}
    >
      Nurturing Automation
    </h2>
  </div>
</SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>GTM - Strategy </h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Website Development</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Digital Marketing</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
  <div className="roll__slide">
    <h2
      style={{
        whiteSpace: "nowrap",
        textAlign: "center",
        fontSize: "1.6rem",
        paddingTop:"1px"
      }}
    >
      Nurturing Automation
    </h2>
  </div>
</SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>GTM - Strategy </h2>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <section className="roll__area-3">
        <div className="roll__slider">
          <Swiper
            modules={[FreeMode, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            freeMode={true}
            centeredSlides={true}
            allowTouchMove={false}
            simulateTouch={false}
            loop={true}
            autoplay={{
              delay: 1,
              disableOnInteraction: true,
            }}
            speed={2000}
            breakpoints={{
              640: {
                slidesPerView: 3,
              },
              800: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
              1300: {
                slidesPerView: 5,
              },
              1900: {
                slidesPerView: 8,
              },
            }}
            dir="rtl"
          >
          
           
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Efficiency</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Streamline</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Protection</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Expandability</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Integration</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Advisory</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Innovation</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Interface</h2>
              </div>
            </SwiperSlide>
          
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Optimize</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Content</h2>
              </div>
            </SwiperSlide>
            
            
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Adaptability</h2>
              </div>
            </SwiperSlide>
           
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Infrastructure</h2>
              </div>
            </SwiperSlide>
         
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Progress</h2>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default DesignStudioRoll;

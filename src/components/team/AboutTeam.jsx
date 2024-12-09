import { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { gsap } from "gsap";
import Team1 from "../../../public/assets/imgs/team/1.webp";
import Team2 from "../../../public/assets/imgs/team/2.webp";
import Team3 from "../../../public/assets/imgs/team/3.webp";
import Team4 from "../../../public/assets/imgs/team/4.webp";
import Team5 from "../../../public/assets/imgs/team/5.webp";
import Team6 from "../../../public/assets/imgs/team/6.webp";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import Link from "next/link";
import Image from "next/image";

const AboutTeam = () => {
  if (typeof window !== "undefined") {
    document.addEventListener("mousemove", mousemoveHandler);
  }
  function mousemoveHandler(e) {
    let team_cursor = document.getElementById("team_cursor");
    try {
      const target = e.target;
      let tHero = gsap.context(() => {
        let tl = gsap.timeline({
          defaults: {
            x: e.clientX,
            y: e.clientY,
          },
        });
        let t2 = gsap.timeline({
          defaults: {
            x: e.clientX,
            y: e.clientY,
          },
        });

        // Team Page Team Cursor
        if (target.closest(".team__slider")) {
          tl.to(
            team_cursor,
            {
              opacity: 1,
              ease: "power4.out",
            },
            "-=0.3"
          );
        } else {
          t2.to(
            team_cursor,
            {
              opacity: 0,
              ease: "power4.out",
            },
            "-=0.3"
          );
        }
      });
      return () => tHero.revert();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <section className="team__area pt-140 pb-140">
        <div className="sec-title-wrapper">
          <h2 className="sec-sub-title title-anim">Our Team</h2>
          <h3 className="sec-title title-anim">Meet Our Brilliant Minds.</h3>
        </div>

        <div className="team__slider">
          <Swiper
            modules={[FreeMode]}
            spaceBetween={30}
            slidesPerView={1}
            freeMode={true}
            loop={false}
            speed={2000}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1000: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide>
              <div className="team__slide">
                <Link href="/leadership/aravindh-ravichandran">
                  <Image
                    priority
                    style={{ width: "100%", height: "auto" }}
                    src={Team1}
                    alt="Team Member"
                  />
                  <div className="team__info">
                    <h4 className="team__member-name">Aravindh Ravichandran</h4>
                    <h5 className="team__member-role">Founder</h5>
                  </div>
                </Link>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="team__slide">
                <Link href="/leadership/amrish-krishnan">
                  <Image
                    priority
                    style={{ width: "100%", height: "auto" }}
                    src={Team2}
                    alt="Team Member"
                  />
                  <div className="team__info">
                    <h4 className="team__member-name">Amrish Krishnan</h4>
                    <h5 className="team__member-role">Advisor</h5>
                  </div>
                </Link>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="team__slide">
                <Link href="/leadership/venkada-ramanan">
                  <Image
                    priority
                    style={{ width: "100%", height: "auto" }}
                    src={Team3}
                    alt="Team Member"
                  />
                  <div className="team__info">
                    <h4 className="team__member-name">Venkada Ramanan</h4>
                    <h5 className="team__member-role">Chief Operating Officer</h5>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
            {/* 
            <SwiperSlide>
              <div className="team__slide">
                <Link href="/leadership/rahul-b">
                  <Image
                    priority
                    style={{ width: "100%", height: "auto" }}
                    src={Team4}
                    alt="Team Member"
                  />
                  <div className="team__info">
                    <h4 className="team__member-name">Rahul B</h4>
                    <h5 className="team__member-role">Senior Developer</h5>
                  </div>
                </Link>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="team__slide">
                <Link href="/leadership/sabari-h">
                  <Image
                    priority
                    style={{ width: "100%", height: "auto" }}
                    src={Team5}
                    alt="Team Member"
                  />
                  <div className="team__info">
                    <h4 className="team__member-name">Sabari H</h4>
                    <h5 className="team__member-role">Senior Developer</h5>
                  </div>
                </Link>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="team__slide">
                <Link href="/leadership/pranshu-jha">
                  <Image
                    priority
                    style={{ width: "100%", height: "auto" }}
                    src={Team6}
                    alt="Team Member"
                  />
                  <div className="team__info">
                    <h4 className="team__member-name">Pranshu Jha</h4>
                    <h5 className="team__member-role">Chief Executive Officer</h5>
                  </div>
                </Link>
              </div>
            </SwiperSlide> */}

            {/* 
            <SwiperSlide>
              <div className="team__slide">
                <Link href="/team-details">
                  <Image
                    priority
                    style={{ width: "100%", height: "auto" }}
                    src={Team3}
                    alt="Team Member"
                  />
                  <div className="team__info">
                    <h4 className="team__member-name">Jassica Oliver</h4>
                    <h5 className="team__member-role">Lead Designer</h5>
                  </div>
                </Link>
              </div>
            </SwiperSlide> */}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default AboutTeam;

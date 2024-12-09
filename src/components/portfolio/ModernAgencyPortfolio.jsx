import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Link from "next/link";
import { useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const ModernAgencyPortfolio = () => {
  const hoverWrap = useRef();

  const words = [
    "BRAND TOGETHER",
    "BRAND TOGETHER",
    "BRAND TOGETHER",
  ];
  const urls = ["business.webp", "strategy.webp", "technology.webp"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentWordIndex((currentWordIndex + 1) % words.length);
    }, 4000); // Change the word every 2 seconds (2000 milliseconds)

    return () => {
      clearTimeout(timer);
    };
  }, [currentWordIndex, words.length]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hover_title = hoverWrap.current;

      if (hover_title && hover_title.children.length > 0) {
        function hoverImgFunc(event, hover_title) {
          const contentBox = hover_title.getBoundingClientRect();
          const dx = event.clientX - contentBox.x;
          const dy = event.clientY - contentBox.y;
          hover_title.children[0].style.transform = `translate(${dx}px, ${dy}px)`;
        }

        hover_title.addEventListener("mousemove", (event) => {
          setInterval(hoverImgFunc(event, hover_title), 1000);
        });
      }
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        gsap.set(".fade_bottom_2", { y: 30, opacity: 0 });

        if (device_width < 1023) {
          const fadeArray = gsap.utils.toArray(".fade_bottom_2");
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
          gsap.to(".fade_bottom_2", {
            scrollTrigger: {
              trigger: ".fade_bottom_2",
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
      <div className="about__area-8 sp-x">
        <h6 className="text-end about-sub-right">About Rook</h6>
        <div className="section_wrapper b-100">
          <h4 className="react_border">
            <span>02</span>
          </h4>
        </div>
        <div className="row justify-content-between">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            {/* <div className="about8">
              <h2 className="about8__title fade_bottom_2">
                inspired <br /> with creativity <br /> <span>and </span>
                <Link href="/about" className="hover_wrap" ref={hoverWrap}>
                  SPACES
                  <span
                    className="hover_img"
                    style={{
                      backgroundImage:
                        "url(assets/imgs/portfolio/detail/7.webp)",
                    }}
                  ></span>
                </Link>
              </h2>
            </div> */}
            <div className="about8">
              <h2 className="about8__title fade_bottom_2">
              Building <br /> sustainable <br />growth for  <span>your </span>
                <Link
                  href="/about"
                  style={{color:"#ffd800"}}
                  className="hover_wrap text-carousel-vertical"
                  ref={hoverWrap}
                >
                  {words[currentWordIndex]}
                  {/* <span
                    className="hover_img"
                    style={{
                      backgroundImage:
                        `url(assets/imgs/rook/home/${urls[currentWordIndex]})`,
                    }}
                  ></span> */}
                </Link>
              </h2>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <div
              className="about8__content fade_bottom_2 "
              style={{ textAlign: "justify" }}
            >
              <p>
                {" "}
                We’re your digital knight, wielding strategic precision and creative flair to empower your business in conquering the digital realm. With cutting-edge technology and innovative strategies, we guide your brand to new heights, ensuring its triumph in the ever-evolving digital landscape.

              </p>
              <Link
                href="https://rookhq.com/about"
                className="blog__btn about_btn" style={{paddingTop:"0px"}}
              >
                Read More{" "}
                <span>
                  <i className="fa-solid fa-arrow-right" style={{paddingTop:"0px",paddingRight:"0px"}}></i>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModernAgencyPortfolio;

import Link from "next/link";
import { useEffect, useRef } from "react";
import VideoFrame from "../../../public/assets/imgs/essential-img/video-frame.webp";
import SvgStar from "../../../public/assets/imgs/essential-img/svgstar.webp";
import Shape24 from "../../../public/assets/imgs/shape/24.webp";
import Image from "next/image";

const ModernAgencySingleImage = () => {
  const hoverImage = useRef();
  const hoverImage2 = useRef();
  const hoverWrap = useRef();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hover_8_wrap = hoverWrap.current.children;
      const h8_wrap_len = hover_8_wrap.length;

      if (h8_wrap_len == 1) {
        function showCase8Func(event, hover_8_wrap) {
          const contentBox = hover_8_wrap[0].getBoundingClientRect();
          const dx = event.pageX;
          const dy = event.clientY - contentBox.y;
          hoverImage.current.style.transform = `translate(${dx}px, ${dy}px)`;
        }
        hover_8_wrap[0].addEventListener("mousemove", (event) => {
          setInterval(showCase8Func(event, hover_8_wrap), 1000);
          hoverImage.current.classList.add("active");
        });
        hover_8_wrap[0].addEventListener("mouseout", (event) => {
          hoverImage.current.classList.remove("active");
        });
      }

      if (h8_wrap_len == 2) {
        function showCase8Func(event, hover_8_wrap) {
          const contentBox = hover_8_wrap[0].getBoundingClientRect();
          const dx = event.pageX;
          const dy = event.clientY - contentBox.y;
          hoverImage.current.style.transform = `translate(${dx}px, ${dy}px)`;
        }
        hover_8_wrap[0].addEventListener("mousemove", (event) => {
          setInterval(showCase8Func(event, hover_8_wrap), 1000);
          hoverImage.current.classList.add("active");
        });
        hover_8_wrap[0].addEventListener("mouseout", (event) => {
          hoverImage.current.classList.remove("active");
        });

        function showCase8Func2(event, hover_8_wrap) {
          const contentBox = hover_8_wrap[1].getBoundingClientRect();
          const dx = event.pageX;
          const dy = event.clientY - contentBox.y;
          hoverImage2.current.style.transform = `translate(${dx}px, ${dy}px)`;
        }
        hover_8_wrap[1].addEventListener("mousemove", (event) => {
          setInterval(showCase8Func2(event, hover_8_wrap), 1000);
          hoverImage2.current.classList.add("active");
        });
        hover_8_wrap[1].addEventListener("mouseout", (event) => {
          hoverImage2.current.classList.remove("active");
        });
      }
    }
  }, []);
  return (
    <>
      <div className="single__image-8  text-center sp-x">
        <div className="col-lg-10 text-center m-auto">
          <div className="singlecontent">
            <div className="hover_8_wrap">
              <h2 className="tech_title fade_bottom_4" ref={hoverWrap}>
                EMPOWER YOUR BUSINESS
                WITH INNOVATIVE DIGITAL SOLUTION
              </h2>
              {/* <div
                className="hover_8_img"
                style={{
                  backgroundImage: "url(assets/imgs/portfolio/detail/7.webp)",
                }}
                ref={hoverImage}
              ></div>
              <div
                className="hover_8_img_2"
                style={{
                  backgroundImage: "url(assets/imgs/portfolio/detail/6.webp)",
                }}
                ref={hoverImage2}
              ></div> */}
            </div>
            <p className="single_dis pb-110 fade_bottom_4">
              {/* Creating a successful digital services for innovative start-up and{" "}
              <br />
              established businesses with trendy design front and back-end{" "}
              <br /> development. */}
              Our Team&apos;s Deep Market understanding delivers Strategic Solutions  {" "}
              <br />to keep your Business Ahead.
            </p>
            <div className="btn_wrapper btn_centered justify-content-center">
              <button
               style={{border:"2px solid #0096d4"}}
                
                className="wc-btn-primary btn-hover btn-item"
              >
                <span></span>Start Your <br /> Journey{" "}
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
            {/* <div className="single__thumb">
              <video loop muted autoPlay playsInline>
                <source src="assets/video/video.mp4" type="video/mp4" />
              </video>
              <Image
                priority
                style={{ width: "100%", height: "100%" }}
                src={VideoFrame}
                alt="image"
                className="video-frame"
              />
              <Image
                priority
                width={113}
                style={{ height: "auto" }}
                className="svgstar"
                src={SvgStar}
                alt="shape"
              />
              <Image
                priority
                width={77}
                style={{ height: "auto" }}
                src={Shape24}
                alt="shape"
                className="shape-2"
              />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ModernAgencySingleImage;

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Link from "next/link";
import Portfilio11 from "../../../public/assets/imgs/portfolio/1/1.webp";
import Portfilio12 from "../../../public/assets/imgs/portfolio/1/2.webp";
import Portfilio13 from "../../../public/assets/imgs/portfolio/1/3.webp";
import Portfilio14 from "../../../public/assets/imgs/portfolio/1/4.webp";
import Image from "next/image";
import { Color } from "../../../public/assets/gsap-plugins/chroma.min";

gsap.registerPlugin(ScrollTrigger);

const DigitalAgencyPortfolio = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        if (device_width > 767) {
          let portfolioline = gsap.timeline({
            scrollTrigger: {
              trigger: ".portfolio__area",
              start: "top center-=200",
              pin: ".portfolio__text",
              end: "bottom bottom+=80",
              markers: false,
              pinSpacing: false,
              scrub: 1,
            },
          });

          portfolioline.to(".portfolio__text", {
            scale: 1.5,
            duration: 1,
          });
          portfolioline.to(".portfolio__text", {
            scale: 1.5,
            duration: 1,
          });
          portfolioline.to(
            ".portfolio__text",
            {
              scale: 1.5,
              duration: 1,
            },
            "-=1"
          );
        }

        let portfolio_lists = gsap.utils.toArray(".portfolio__item");
        portfolio_lists.forEach((portfolio, i) => {
          gsap.set(portfolio, { opacity: 0.7 });
          let t1 = gsap.timeline();

          t1.set(portfolio, {
            position: "relative",
          });
          t1.to(portfolio, {
            scrollTrigger: {
              trigger: portfolio,
              scrub: 2,
              duration: 3.5,
              start: "top bottom+=100",
              end: "bottom center",
              markers: false,
            },
            scale: 1 ,
            opacity: 1,
            rotateX: 0,
          });
        });
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <section className="portfolio__area pb-140">
        <div className="container">
          <div className="row top_row">
            <h2 className="portfolio__text">Success Stories</h2>
            <div className="portfolio__list-1">
              
              <div className="portfolio__card">
                <div className="portfolio__item">

                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Image
                        priority
                        style={{  width: "80%", height: "auto", borderRadius: "1.5%"}}
                        className="mover portfolio-image"
                        src={Portfilio11}
                        alt="Portfolio Image"
                      />
                    </div>
                    {/* <div className="portfolio__info">
                      <h3 className="portfolio__title">Arteck Lyon Conseil</h3>
                      <p>02 May 2021</p>
                    </div> */}
                </div>
                <div  className="portfolio__description">
                  <Image className="portfolio-logo" src="/assets/imgs/rook/home/clients/moufil.webp" alt="Moufil" />
                  <p style={{ color: "#ffffff" }}>Moufil, a Capital Culinary brand, specializes in ready-to-eat Indian cuisine. Their focus lies on delivering high-quality, authentic flavors through fresh ingredients and minimal preservatives.  Moufil caters to busy individuals seeking convenient, healthy meals like chapatti, paratha, and sweet treats. Committed to customer satisfaction, they prioritize freshness and taste, aiming to be the leading provider of delicious Indian fare.</p>
                    {/* <button style={{ marginTop: "20px", border: "20px", padding: "10px" }}>View Project</button> */}
                  <div className="portfolio__btn btn_wrapper" data-speed="1" data-lag="0.2">
                    <Link className="wc-btn-secondary btn-hover btn-item" href="https://moufil.com" style={{ color: "#ffffff"}}>
                    <span></span>View <br />
                      projects <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>  
              
              <div className="portfolio__card">
                <div className="portfolio__item">

                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Image
                        priority
                        style={{  width: "80%", height: "auto", borderRadius: "1.5%"}}
                        className="mover portfolio-image"
                        src={Portfilio12}
                        alt="Portfolio Image"
                      />
                    </div>
                </div>
                <div  className="portfolio__description">
                  <Image className="portfolio-logo" src="/assets/imgs/rook/home/clients/Finequs.webp" alt="Finequs" />
                  <p style={{ color: "#ffffff" }}>Finequs is a phygital company that aims to fix a major gap in financial services. Despite progress, only 10% have access to formal credit. People struggle to find loans due to limited reach, lack of options, and small loan sizes. Finequs believes it&apos;s time to include everyone by making financial services accessible and convenient.</p>
                    <div
                className="portfolio__btn btn_wrapper"
                data-speed="1"
                data-lag="0.2"
              >
                <Link
                  className="wc-btn-secondary btn-hover btn-item"
                        href="https://finequs.com/" style={{
                    color: "#ffffff",
                  }}
                >
                  <span></span>View <br />
                  projects <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
                  
                </div>
              </div>  
              <div className="portfolio__card">
                <div className="portfolio__item">

                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Image
                        priority
                        style={{  width: "80%", height: "auto", borderRadius: "1.5%"}}
                        className="mover portfolio-image"
                        src={Portfilio13}
                        alt="Portfolio Image"
                      />
                    </div>
                    {/* <div className="portfolio__info">
                      <h3 className="portfolio__title">Arteck Lyon Conseil</h3>
                      <p>02 May 2021</p>
                    </div> */}
                </div>
                <div  className="portfolio__description">
                  <h1 style={{color: "#7c7c7c", fontWeight: "bolder", marginBottom: "50px"}}>Caruda.in</h1>
                  <p style={{ color: "#ffffff" }}>Pick Me Courier, a service offered by Caruda Aachi International Courier & Cargo (CAICAC), has established itself as a trusted global shipping partner since 2014. They specialize in efficiently and securely delivering a wide range of items, from everyday household goods and delectable Indian treats (masalas, sweets!) to festive gifts, important documents, medicine, and even commercial articles. Pick Me Courier prioritizes reuniting families across the globe.</p>
                    {/* <button style={{ marginTop: "20px", border: "20px", padding: "10px" }}>View Project</button> */}
                    <div
                className="portfolio__btn btn_wrapper"
                data-speed="1"
                data-lag="0.2"
              >
                <Link
                  className="wc-btn-secondary btn-hover btn-item"
                        href="https://caruda.in" style={{
                    color: "#ffffff",
                  }}
                >
                  <span></span>View <br />
                  projects <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
                  
                </div>
              </div>  
              
              <div className="portfolio__card">
                <div className="portfolio__item">

                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Image
                        priority
                        style={{  width: "80%", height: "auto", borderRadius: "1.5%"}}
                        className="mover portfolio-image"
                        src={Portfilio14}
                        alt="Portfolio Image"
                      />
                    </div>
                    {/* <div className="portfolio__info">
                      <h3 className="portfolio__title">Arteck Lyon Conseil</h3>
                      <p>02 May 2021</p>
                    </div> */}
                </div>
                <div  className="portfolio__description">
                  <Image className="portfolio-logo" src="/assets/imgs/rook/home/clients/CEG.webp" alt="Capital Engineering" />
                  <p style={{ color: "#ffffff" }}>Established in 2006, Capital Engineering Consultancy (CEC) has grown into a global firm with offices across the U.A.E., Oman, India, KSA, and the UK.  Their expertise spans Engineering Consultancy, Design (residential, commercial, industrial), and specialized services like BIM and Environmental Solutions. CEC prioritizes creating unique and client-focused designs for projects like hotels, infrastructure, and oil & gas facilities. Their rapid growth and impressive clientele showcase their dedication to excellence.</p>
                    {/* <button style={{ marginTop: "20px", border: "20px", padding: "10px" }}>View Project</button> */}
                    <div
                className="portfolio__btn btn_wrapper"
                data-speed="1"
                data-lag="0.2"
              >
                <Link
                  className="wc-btn-secondary btn-hover btn-item"
                        href="https://engg.capital/" style={{
                    color: "#ffffff",
                  }}
                >
                  <span></span>View <br />
                  projects <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
                  
                </div>
              </div>  
              
            </div>
          </div>

          {/* <div className="row row_bottom">
            <div className="col-xxl-12">
              <div
                className="portfolio__btn btn_wrapper"
                data-speed="1"
                data-lag="0.2"
              >
                <Link
                  className="wc-btn-secondary btn-hover btn-item"
                  href="/portfolio"
                >
                  <span></span>View <br />
                  all projects <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default DigitalAgencyPortfolio;

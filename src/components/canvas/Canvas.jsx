import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import logoWhite2 from "../../../public/assets/imgs/rook/Rook-white.png";
import Shape11 from "../../../public/assets/imgs/shape/11.webp";
import Shape12 from "../../../public/assets/imgs/shape/12.webp";
import Image from "next/image";

const Canvas = ({ bladeMode = "", ofCanvasArea }) => {
  const [accordion, setAccordion] = useState(0);
  const [subAccordion, setSubAccordion] = useState(0);
  const headerTitle = useRef();
  let [path, setPath] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setTimeout(() => {
        setPath(window.location.pathname);

        let rootParent = headerTitle.current.children;
        for (let i = 0; i < rootParent.length; i++) {
          let firstParent = rootParent[i].children;
          for (let j = 0; j < firstParent.length; j++) {
            if (firstParent[j].className.includes("header_title")) {
              let arr = firstParent[j].children[0].textContent.split("");
              let spanData = "";
              for (let k = 0; k < arr.length; k++) {
                if (arr[k] == " ") {
                  spanData += `<span style='width:2vw;'>${arr[k]}</span>`;
                } else {
                  spanData += `<span>${arr[k]}</span>`;
                }
              }
              let result = '<div class="menu-text">' + spanData + "</div>";
              firstParent[j].children[0].innerHTML = result;
            }
          }
        }
      }, 10);
    }
  }, []);
  const openData = (data) => {
    setAccordion(data);
  };
  const openSubData = (data) => {
    setSubAccordion(data);
  };
  const closeCanvas = () => {
    ofCanvasArea.current.style.opacity = "0";
    ofCanvasArea.current.style.visibility = "hidden";
    if (bladeMode) {
      let header_bg = bladeMode;
      header_bg.style.setProperty("mix-blend-mode", "exclusion");
    }
  };
  return (
    <>
      <div className="offcanvas__area" ref={ofCanvasArea}>
        <div className="offcanvas__body">
          <div
            className="offcanvas__left modern-scrollbar"
            style={{ maxHeight: "100vh", overflowY: "auto" }}
          >
            <div className="offcanvas__logo">
              <Link href="/">
                <Image
                  priority
                  style={{ width: "auto", height: "40px" }}
                  src={logoWhite2}
                  alt="Offcanvas Logo"
                />
              </Link>
            </div>
            <div className="offcanvas__social">
              <h3 className="social-title">Our Socials</h3>
              <ul>
                <li>
                  <Link href="https://www.linkedin.com/company/rook/mycompany/verification/">
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link href="https://www.facebook.com/RookCom">Facebook</Link>
                </li>
                <li>
                  <Link href="https://www.instagram.com/rookhq/">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link href="https://www.crunchbase.com/organization/rook">
                    Crunchbase
                  </Link>
                </li>
                <li>
                  <Link href="https://www.youtube.com/@rookl">YouTube</Link>
                </li>
                <li>
                  <Link href="https://x.com/RookHQ">X</Link>
                </li>
              </ul>
            </div>
            <div className="offcanvas__links">
              {/* <ul>
                <li>
                  <Link href="https://rookhq.com">k</Link>
                </li>
                <li>
                  <Link href="https://rookhq.com/about">Who We Are?</Link>
                </li>
                <li>
                  <Link href="https://rookhq.com/happenings">Happenings</Link>
                </li>
              </ul> */}
            </div>
          </div>
          <div className="offcanvas__mid">
            <div className="offcanvas__menu-wrapper">
              <nav className="offcanvas__menu">
                <ul className="menu-anim title" ref={headerTitle}>
                  <li>
                    {path != "/domains" ? (
                      <>
                        <div className="header_title">
                          <Link href={"/"}>What We Do?</Link>
                          <div className="accordian-btn">
                            {accordion === 1 ? (
                              <div onClick={() => openData(0)}>-</div>
                            ) : (
                              <div onClick={() => openData(1)}>+</div>
                            )}
                          </div>
                        </div>
                        <ul
                          className="sub_title"
                          style={
                            accordion === 1
                              ? { display: "" }
                              : { display: "none" }
                          }
                        >
                          <li>
                            <Link href={"/service/marketing"}>
                              Digital Marketing
                            </Link>
                          </li>
                          {/* <li>
                          <Link href={"/service/consultancy"}>Consultancy</Link>
                        </li> */}
                          <li>
                            <Link href={"/service/seo"}>SEO</Link>
                          </li>
                          <li>
                            <Link href={"/service/metaads"}>MetaAds</Link>
                          </li>
                          <li>
                            <Link href={"/service/smm"}>
                              Social Media Management
                            </Link>
                          </li>
                          <li>
                            <Link href={"/service/emailmarketing"}>
                              Email Marketing
                            </Link>
                          </li>

                          <li>
                            <Link href={"/service/leadnurturing"}>
                              Lead Nurturing
                            </Link>
                          </li>
                        </ul>
                      </>
                    ) : (
                      // <Link href={"/"}>What We Do?</Link>
                      <div />
                    )}
                  </li>
                  <li>
                    <div className="header_title">
                      <Link href={"/service/gtmstrategy"}>
                        Rook For Startups
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="header_title">
                      <Link href={"/"}>Rook For Business</Link>
                    </div>
                  </li>
                  <li>
                    <div id="domain-link" className="header_title">
                      {path == "/domains" ? (
                        <Link href={"/"}>ROOK FELLOWS</Link>
                      ) : (
                        <Link href={"/"}>Success Stories</Link>
                      )}
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="offcanvas__right">
            <div className="offcanvas__search">
              <form action="#">
                <input type="text" name="search" placeholder="Search keyword" />
                <button>
                  <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                </button>
              </form>
            </div>
            <div className="offcanvas__contact">
              <h3>Contact Us</h3>
              <ul>
                <li>
                  <a href="tel:07092700022" className="phone">
                    (+91) 709 270 0022{" "}
                  </a>
                </li>
                <li>
                  <a href="mailto:fellows@rookhq.com">fellows@rookhq.com</a>
                </li>
                <li>
                  No.248, Kuberan Nagar 11th Street Extn, Chennai, India -
                  600091.
                </li>
              </ul>
            </div>
            <Image
              priority
              style={{ width: "auto", height: "auto" }}
              src={Shape11}
              alt="shape"
              className="shape-1"
            />
            <Image
              priority
              style={{ width: "auto", height: "auto" }}
              src={Shape12}
              alt="shape"
              className="shape-2"
            />
          </div>
          <div className="offcanvas__close">
            <button type="button" onClick={closeCanvas}>
              <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Canvas;

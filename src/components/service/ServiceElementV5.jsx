import animationCharCome from "@/lib/utils/animationCharCome";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

const ServiceElementV5 = () => {
  const charAnim = useRef();
  useEffect(() => {
    animationCharCome(charAnim.current);
  }, []);
  return (
    <div>
      <section className="portfolio__service service-v5 pt-140 pb-140">
        <div className="container">
          <div className="row">
            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6">
              <h2 className="sec-title animation__char_come" ref={charAnim}>
                {" "}
                WE MAKE STATE OF THE ART PRODUCTS.
              </h2>
            </div>
            <div className="col-xxl-7 col-xl-7 col-lg-6 col-md-6">
              <div className="sec-text">
                <p style={{textAlign: "justify"}}>
                  Unlock your business&apos;s full potential with our tailor-made,
                  cutting-edge digital solutions, crafted to perfectly match
                  your business needs.
                </p>
              </div>
            </div>
          </div>
          <div className="portfolio__service-list">
            <div className="row">
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                <div className="portfolio__service-item">
                  <div>
                    <h3 className="ps-title">
                      Website
                    </h3>
                    <p className="mb-2">
                      Crafting engaging websites that captivate your audience and drive your online presence to new heights with excellence.
                    </p>
                    <ul>
                      <li>+ React</li>
                      <li>+ Next JS</li>
                      <li>+ HTML/CSS</li>
                      <li>+ More</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                <div className="portfolio__service-item">
                  <div>
                    <h3 className="ps-title">
                      Mobile App
                    </h3>
                    <p className="mb-2">
                      Building user-friendly apps that enhance customer experiences and streamline your business operations for success.
                    </p>
                    <ul>
                      <li>+ Java & Kotlin</li>
                      <li>+ React Native</li>
                      <li>+ Flutter</li>
                      <li>+ More</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                <div className="portfolio__service-item">
                  <div>
                    <h3 className="ps-title">
                      DAPP
                    </h3>
                    <p className="mb-2">
                      Pioneering decentralized applications that leverage blockchain technology for secure, transparent, and innovative solutions.
                    </p>
                    <ul>
                      <li>+ Solidity</li>
                      <li>+ Ethereum</li>
                      <li>+ Web3.js</li>
                      <li>+ More</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="row">
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                <div className="portfolio__service-item">
                  <Link href="/service-details">
                    <h3 className="ps-title">
                      Frontend <br /> Developemnt
                    </h3>
                    <ul>
                      <li>+ WordPress</li>
                      <li>+ Python</li>
                      <li>+ PHP & Laravel</li>
                    </ul>
                  </Link>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                <div className="portfolio__service-item">
                  <Link href="/service-details">
                    <h3 className="ps-title">
                      Backend
                      <br /> Developemnt
                    </h3>
                    <ul>
                      <li>+ WordPress</li>
                      <li>+ Python</li>
                      <li>+ PHP & Laravel</li>
                    </ul>
                  </Link>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                <div className="portfolio__service-item">
                  <Link href="/service-details">
                    <h3 className="ps-title">
                      Android
                      <br /> Developemnt
                    </h3>
                    <ul>
                      <li>+ WordPress</li>
                      <li>+ Python</li>
                      <li>+ PHP & Laravel</li>
                    </ul>
                  </Link>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceElementV5;

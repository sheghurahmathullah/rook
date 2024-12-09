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
      <section className="portfolio__service service-v5 pt-100 pb-100 ">
        <div className="container">
          <div className="row">
           
          <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6">
              <h2 className="sec-title animation__char_come" ref={charAnim}>
                {" "}
                I MAKE THE Service BETTER.
              </h2>
            </div>
           
          </div>
          <div className="portfolio__service-list">
            <div className="row">
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                <div className="portfolio__service-item">
                  <Link href="/service/seo">
                    <h3 className="ps-title">
                      Search Engine <br />Optimization
                    </h3>
                   
                  </Link>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                <div className="portfolio__service-item">
                  <Link href="/service/metaads">
                    <h3 className="ps-title">
                      Meta <br /> Ads
                    </h3>
                   
                  </Link>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                <div className="portfolio__service-item">
                  <Link href="/service/smm">
                    <h3 className="ps-title">
                      Social Media <br /> Management
                    </h3>
                    
                  </Link>
                </div>
              </div>

              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                <div className="portfolio__service-item">
                  <Link href="/service/emailmarketing">
                    <h3 className="ps-title">
                      Email <br />Marketing
                    </h3>
                    
                  </Link>
                </div>
              </div>
            </div>
          
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceElementV5;

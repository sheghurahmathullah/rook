import Image from "next/image";
import Link from "next/link";

import Author from "../../../public/assets/imgs/blog/detail/author.webp";
import Detail1 from "../../../public/assets/imgs/blog/detail/1.webp";
import Detail2 from "../../../public/assets/imgs/blog/detail/2.webp";
import Detail3 from "../../../public/assets/imgs/blog/detail/3.webp";
import { useEffect, useRef } from "react";
import animationWordCome from "@/lib/utils/animationWordCome";

const BlogDetails1 = () => {
  const wordAnim = useRef();
  const wordAnim2 = useRef();
  useEffect(() => {
    animationWordCome(wordAnim.current);
    animationWordCome(wordAnim2.current);
  }, []);
  return (
    <>
      <section className="blog__detail">
        <div className="container g-0 line pt-140">
          <span className="line-3"></span>
          <div className="row">
            <div className="col-xxl-8 col-xl-10 offset-xxl-2 offset-xl-1">
              <div className="blog__detail-top">
                {/* <h2
                  className="blog__detail-date animation__word_come"
                  ref={wordAnim}
                >
                  Design, Marketing <span>25 Jan 2019</span>
                </h2> */}
                <h3
                  className="blog__detail-title animation__word_come"
                  ref={wordAnim2}
                >
                  Your Elite Corporate Domain Portfolio
                </h3>
                {/* <div className="blog__detail-metalist">
                  <div className="blog__detail-meta">
                    <Image
                      priority
                      style={{ width: "auto", height: "auto" }}
                      src={Author}
                      alt="Author Picture"
                    />
                    <p>
                      Writen by <span>Codexpand</span>
                    </p>
                  </div>
                  <div className="blog__detail-meta">
                    <p>
                      Viewed <span>3 min read</span>
                    </p>
                  </div>
                </div> */}
              </div>
            </div>
            {/* <div className="col-xxl-12">
              <div className="blog__detail-thumb">
                <Image
                  priority
                  style={{ width: "auto", height: "auto" }}
                  src={Detail1}
                  alt="Blog Thumbnail"
                  data-speed="0.5"
                />
              </div>
            </div> */}
            <div className="col-xxl-8 col-xl-10 offset-xxl-2 offset-xl-1 ">
              <div className="blog__detail-content">
                <p>
                  At Rook Fellows Domains, we specialize in curating an exclusive corporate domain
                  portfolio tailored specifically for Hlo Ventures and its esteemed affiliates. Just like your
                  business, your online presence deserves nothing but the best. That&apos;s why we&apos;ve
                  dedicated ourselves to providing a selection of premium domains to protect and
                  enhance your intellectual brand.{" "}
                </p>
                <h2>Why Choose Rook Fellows Domains?</h2>
                <p style={{marginTop: "3%"}}>
                  <strong>- Exclusivity:</strong> Our domain portfolio is available only to <strong> Hlo Ventures and its affiliates, </strong>
                  ensuring that your brand remains unique and protected in the digital landscape.   
                </p>
                <p>
                  <strong>- Elite Selection:</strong> Each domain in our portfolio is handpicked to reflect the caliber and
                  prestige of your brand. From memorable brand names to strategic keyword domains, we
                  offer a range of options to suit your specific needs.
                </p>
                <p>
                  <strong>- Strategic Protection:</strong> With Rook Fellows Domains, you can rest assured that your
                  intellectual property is safeguarded against infringement and misuse. Our expert team is
                  dedicated to ensuring that your brand remains secure and recognizable online.

                </p>
                <h2>How It Works</h2>
                <ul>
                  <li >1. <strong> Browse:</strong>  Explore our carefully curated portfolio of premium domains exclusive to <strong> Hlo Ventures and its affiliates</strong></li>
                  <br />
                  <li>2. <strong> Select:</strong> Choose the domains that best represent your brand identity and align with your strategic goals.</li>
                  <br />
                  <li>3. <strong> Secure:</strong> Reserve your chosen domains with ease, knowing that they are protected and ready to support your business objectives.</li>
                </ul>
                <h2>Contact Us</h2>
                <p>
                  For general inquiries regarding the company or to explore our exclusive domain portfolio, please email us at <strong><Link href="mailto:domains@rookfellows.com">
                  domains@rookfellows.com.</Link></strong>
                </p>
                <p>
                  Our dedicated team is here to assist you in building and safeguarding your online
                  presence with Rook Fellows Domains. Rook Fellows Domains may help you elevate your brand since they combine excellence and exclusivity.
                </p>
              </div>
              {/* <div className="blog__detail-tags">
                <p className="sub-title-anim">
                  tags: <Link href="/blog">design</Link>,{" "}
                  <Link href="/blog">figma</Link>,
                  <Link href="/tag">update</Link>
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetails1;

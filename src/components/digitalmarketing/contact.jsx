import animationCharCome from "@/lib/utils/animationCharCome";
import animationWordCome from "@/lib/utils/animationWordCome";
import { useEffect, useRef } from "react";

const Contact1 = () => {
  const charAnim = useRef();
  const wordAnim = useRef();
  useEffect(() => {
    animationCharCome(charAnim.current);
    animationWordCome(wordAnim.current);
  }, []);
  return (
    <>
      <section className="contact__area-6">
        <div className="container g-0 line">
          <span className="line-3"></span>
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="sec-title-wrapper">
                <h2 className="sec-title-2 animation__char_come" ref={charAnim}>
                  Let’s get in touch
                </h2>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="contact__text">
              <p className="responsive-margin" style={{
    paddingTop: "10px",
    maxHeight: "150px",
    maxWidth: "500px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "normal"
  }}
>
  {
    "Whether you're just starting out or looking to scale, Rook is here to take your brand to the next level. Our expert team will help you drive growth, discover new opportunities, and turn your vision into a digital success story."
  }
</p>

<style jsx>{`
  .responsive-margin {
    margin-left: -100px; /* Shift left on larger screens */
  }

  /* Media query for small screens */
  @media (max-width: 600px) {
    .responsive-margin {
      margin-left: 0; /* Reset margin on small screens */
    }
  }
`}</style>

              </div>
            </div>
          </div>
          <div className="row contact__btm">
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
              <div className="contact__info">
                <h3
                  className="sub-title-anim-top animation__word_come"
                  ref={wordAnim}
                >
                  {"What’s the next big step"}
                  <br />
                  for your digital marketing strategy? 
                </h3>
                <ul>
                  <li>
                    <a href="tel:+(2)578365379">+91 70927 00022</a>
                  </li>
                  <li>
                    <a href="mailto:hello@example.com">empower@rookhq.com</a>
                  </li>
                  <li>
                    <span>
                    248, 11th St, Kuberan Nagar Extension,<br /> Kuberan Nagar, Madipakkam, <br />Chennai, Tamil Nadu 600091
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
              <div className="contact__form">
                <form action="assets/mail.php" method="POST">
                  <div className="row g-3">
                    <div className="col-xxl-6 col-xl-6 col-12">
                      <input type="text" name="name" placeholder="Name *" />
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-12">
                      <input type="email" name="email" placeholder="Email *" />
                    </div>
                  </div>
                  <div className="row g-3">
                    <div className="col-xxl-6 col-xl-6 col-12">
                      <input type="tel" name="phone" placeholder="Phone" />
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-12">
                      <input
                        type="text"
                        name="subject"
                        placeholder="Services of Interest *"
                      />
                    </div>
                  </div>
                  <div className="row g-3">
                    <div className="col-12">
                      <textarea
                        name="message"
                        placeholder="Messages *"
                      ></textarea>
                    </div>
                  </div>
                  <div className="row g-3">
                    <div className="col-12">
                      <div className="btn_wrapper">
                        <button className="wc-btn-primary btn-hover btn-item"
                        style={{border:"2px solid #0096d4"}}>
                          <span></span> Send <br />
                          Messages <i className="fa-solid fa-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact1;

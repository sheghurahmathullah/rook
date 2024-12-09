import Link from "next/link";

const DigitalAgencyCTA = () => {
  return (
    <>
      <section className="cta__area">
        <div className="container line pb-110">
          <div className="line-3"></div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="cta__content">
                <p className="cta__sub-title">Curious?</p>
                <h2 className="cta__title title-anim">
                Explore Infinite Possibilities with Dots AI
                </h2>
                <div className="btn_wrapper">
                <Link
                    className="wc-btn-pink btn-hover btn-item"
                    href="https://dotsai.app"
                  >
                    <span></span> Try Dots<br /> AI Now{" "}
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalAgencyCTA;

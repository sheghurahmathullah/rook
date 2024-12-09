import ServiceDetail from "../../../public/assets/imgs/rook/product-development/footer-thumb.gif";
import Shape6 from "../../../public/assets/imgs/icon/shape-6.webp";
import Image from "next/image";

const ServiceDetailsService = () => {
  return (
    <>
      <section className="service__detail">
        <div className="container g-0 line pb-140">
          <div className="line-3"></div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="sec-title-wrapper">
                <h2 className="sec-title title-anim">
                  We are a bootstrapped company that understands our
                  clients&apos; needs and helps them grow.
                </h2>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
              <div className="service__detail-circle">
                <span></span>
              </div>
            </div>
            <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-9">
              <div className="service__detail-img">
                <Image
                  priority
                  width={960}
                  height={500}
                  style={{ height: "auto" }}
                  src="/assets/imgs/rook/product-development/footer-thumb.gif"
                  // src="https://images.pexels.com/photos/574073/pexels-photo-574073.webp?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Service detail image"
                />
                <Image
                  priority
                  width={51}
                  style={{ height: "auto" }}
                  src={Shape6}
                  alt="Service shape image"
                  className="sd-shape"
                />
              </div>
              <div className="service__detail-content">
                <p style={{ textAlign: "justify" }}>
                  We deliver robust and secure applications which are scalable
                  and reliable. We create powerful products designed to meet
                  your business needs.
                </p>
                <p style={{ textAlign: "justify" }}>
                  Our commitment is to provide scalable, secure, and dependable
                  applications, ensuring your digital solutions exceed
                  expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailsService;

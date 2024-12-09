import Link from "next/link";
import Thumb404 from "../../../public/assets/imgs/thumb/404.webp";
import Image from "next/image";

const ComingSoon = () => {
  return (
    <>
      <section className="error__page">
        <div className="container line">
          <span className="line-3"></span>
          <div className="row">
            <div className="col-xxl-12">
              <div className="error__content">
                {/* <Image
                  priority
                  style={{ width: "auto", height: "auto" }}
                  src={Thumb404}
                  alt="Page not found"
                /> */}
                <h2>Something Awesome is Coming Soon</h2>
                <p>
                  &quot;We are putting the final touches on our site and we can&apos;t wait to share it with you.&quot;
                </p>
                <div className="btn_wrapper">
                  <Link
                    href="/"
                    className="wc-btn-primary btn-hover btn-item"
                  >
                    <span></span> Back to <br />
                    Homepage <i className="fa-solid fa-arrow-right"></i>
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

export default ComingSoon;

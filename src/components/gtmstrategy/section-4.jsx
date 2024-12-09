import Image from "next/image.js";

const StartupAgencySolution = () => {
  return (
    <>
      <section className="solution__area-4">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Column for Image */}
            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6">
              <div className="solution__image">
                <Image
                  src="/assets/imgs/gtmstrategy/custom-gtm.jpg"
                  alt="Custom GTM Plan"
                  className="img-fluid"
                  style={{
                    width: "100%",
                    height: "400px",
                    objectFit: "cover",
                    borderRadius: "10px",
                    border: "1px solid white", // White border
                    
                  }}
                />
              </div>
            </div>

            {/* Right Column for Content */}
            <div className="col-xxl-5 offset-xxl-2 col-xl-5 offset-xl-2 col-lg-6 col-md-6">
              <div className="solution__content">
                <h3 className="sec-title-6 title-anim">
                  Invest In A Custom <br /> GTM Plan That <br /> Delivers Results.
                </h3>
                <h2 className="sec-subtile-6">Here&apos;s What You Get</h2>
                <ul className="solution__list title-anim">
                  <li>Targeted Customer <br /> Persona</li>
                  <li>Optimized Marketing <br /> Channels</li>
                  <li>Actionable Launch <br /> Timeline</li>
                  <li>Dedicated Account <br /> Manager</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StartupAgencySolution;

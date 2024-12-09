import Image from "next/image";
import Shape1 from "../../../public/assets/imgs/home-7/shape-1.webp";
import Shape2 from "../../../public/assets/imgs/home-7/shape-2.webp";
import Shape3 from "../../../public/assets/imgs/home-7/shape-3.webp";

const ServiceV6Hero = () => {
  return (
    <>
      <section className="hero__area-7">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="hero__title-wrap-7">
                <h1 className="hero__title-7">
                  Bring Imagination{" "}
                  <Image
                    priority
                    width={135}
                    style={{ height: "auto" }}
                    src={Shape1}
                    alt="shape"
                  />{" "}
                  To Life With Every Design{" "}
                  <Image
                    priority
                    width={125}
                    style={{ height: "auto" }}
                    src={Shape2}
                    alt="shape"
                  />
                </h1>
              </div>
              <div className="hero__text-7">
                <h2 className="about"></h2>
                <p className="text-justify">
                  Unlocking creativity, we breathe life into designs, turning visions into stunning, tangible realities with every project.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Image
          priority
          width={320}
          style={{ height: "auto" }}
          src={Shape3}
          alt="shape"
          className="shape-1"
        />
      </section>
    </>
  );
};

export default ServiceV6Hero;

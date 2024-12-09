import Story1 from "../../../public/assets/imgs/story/1.webp";
import Story2 from "../../../public/assets/imgs/story/2.webp";
import Story3 from "../../../public/assets/imgs/story/3.webp";
import Story4 from "../../../public/assets/imgs/story/4.webp";
import Image from "next/image";

const AboutStory = () => {
  return (
    <>
      <section className="story__area">
        <div className="container g-0 line pt-140">
          <span className="line-3"></span>
          <div className="sec-title-wrapper">
            <div className="from-text">
              from <span>2020</span>
            </div>

            <div className="row">
              <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                <h2 className="sec-sub-title title-anim px-3">Evolving Beyond Limits</h2>
                <h3 className="sec-title title-anim px-3">Our story</h3>
              </div>
              <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                <div className="story__text">
                  <p>
                  In 2020, Rook sprouted in Chennai, India, a fledgling team of ambitious 
                  entrepreneurs. Navigating early struggles revealed a crucial void: the 
                  pressing need for automation tools capable of handling intricate tasks such 
                  as social media management and marketing. Traditional AIs fell short, 
                  until the advent of generative AI revolutionized our approach, empowering 
                  entrepreneurs to intelligently navigate and conquer the challenges of their 
                  early stages. As we pioneered this transformative journey, our commitment 
                  to innovation has become the cornerstone of Rook&apos;s mission, shaping a 
                  future where entrepreneurs thrive with intelligent solutions.
                  </p>
                  <p>
                  Rook&apos;s journey signifies a pivotal moment in startup dynamics. Faced with 
                  the inadequacy of conventional AI, we embraced generative AI to redefine 
                  the startup landscape. Committed to innovation, we provide entrepreneurs 
                  with tools that transcend limitations, shaping a future where challenges 
                  metamorphose into opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
              <div className="story__img-wrapper">
                <Image
                  priority
                  width={300}
                  style={{ height: "auto" }}
                  src={Story1}
                  alt="Story Thumbnail"
                  className="w-100"
                />
              </div>
            </div>
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
              <div className="story__img-wrapper img-anim">
                <Image
                  priority
                  width={520}
                  style={{ height: "auto" }}
                  src={Story2}
                  alt="Story Thumbnail"
                  data-speed="auto"
                />
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <div className="story__img-wrapper">
                <Image
                  priority
                  width={230}
                  style={{ height: "auto" }}
                  src={Story3}
                  alt="Story Thumbnail"
                />
                <Image
                  priority
                  width={410}
                  style={{ height: "auto" }}
                  src={Story4}
                  alt="Story Thumbnail"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutStory;

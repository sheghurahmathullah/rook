import { useEffect, useRef } from "react";
import TeamDetails from "../../../public/assets/imgs/team/2.webp";
import Image from "next/image.js";
import animationCharCome from "@/lib/utils/animationCharCome";

const TeamDetailsAmrishKrishnan = () => {
  const charAnim = useRef();
  const charAnim2 = useRef();
  useEffect(() => {
    animationCharCome(charAnim.current);
    animationCharCome(charAnim2.current);
  }, []);
  return (
    <>
      <section className="team__detail">
        <div className="container line pb-140">
          <div className="line-3"></div>
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-8 offset-lg-0 offset-md-2">
              <div className="team__member-img">
                <Image
                  priority
                  style={{ width: "100%", height: "100%" }}
                  src={TeamDetails}
                  alt="Team Member Picture"
                  data-speed="0.5"
                />
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
              <div className="sec-title-wrapper pt-120">
                <h2
                  className="team__member-name-7 animation__char_come"
                  ref={charAnim}
                >
                  Amrish <br />
                  Krishnan
                </h2>
                <h3
                  className="team__member-role-7 animation__char_come"
                  ref={charAnim2}
                >
                  Senior Partner, at
                  <span> Rook</span>
                </h3>
                <p>
                Passionate about empowering founders and CEOs to create impactful and high-value businesses. 
                An accomplished investor with a knack for identifying opportunities that drive growth. 
                Recognized as one of &amp;quot;The Most Admired Global Indians 2023&amp;quot; by Passion Vista is a testament to his 
                dedication to fostering creativity, innovation, and progress in the entrepreneurial ecosystem. 
                He is also honoured as the Young Achiever of 2022-23 by Indian Achievers Forum and honoured with the 
                Outstanding Leadership Award in 2023 at Internet 2.0 in Dubai. 
                </p>
                <p>
                Recognized as an Innovation Ambassador at 
                MOE&amp;apos;s Innovation Cell, Government of India, he works to foster creativity and progress in the entrepreneurial ecosystem. 
                Proudly serving as a advisory board member at Rook, Legacies, and Hion Studios, where he collaborates with visionary 
                entrepreneurs to harness the power of digital marketing, technology, and innovation.
                </p>
              </div>
              {/* <div className="team__member-work">
                <h4 className="work-title">Portfolio :</h4>
                <ul>
                  <li>
                    <a href="#">Behance</a>
                  </li>
                  <li>
                    <a href="#">Dribble</a>
                  </li>
                  <li>
                    <a href="#">Meduim</a>
                  </li>
                </ul>
              </div> */}
              <div className="team__member-social">
                <h4 className="work-title">Follow :</h4>
                <ul>
                  {/* <li>
                    <a href="#">
                      <span>
                        <i className="fa-brands fa-facebook-f"></i>
                      </span>
                    </a>
                  </li> */}
                  <li>
                    <a href="https://twitter.com/AmrishKrishnan">
                      <span>
                        <i className="fa-brands fa-twitter"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/buddy_its_me_who/">
                      <span>
                        <i className="fa-brands fa-instagram"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/amrish-krishnan">
                      <span>
                        <i className="fa-brands fa-linkedin"></i>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamDetailsAmrishKrishnan;

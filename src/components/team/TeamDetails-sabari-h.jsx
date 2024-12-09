import { useEffect, useRef } from "react";
import TeamDetails from "../../../public/assets/imgs/team/5.webp";
import Image from "next/image.js";
import animationCharCome from "@/lib/utils/animationCharCome";

const TeamDetailsSabariH = () => {
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
                  style={{ width: "100%", height: "102%" }}
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
                  Sabari H
                </h2>
                <h3
                  className="team__member-role-7 animation__char_come"
                  ref={charAnim2}
                >
                  Senior Developer, at
                  <span> Rook</span>
                </h3>
                <p>
                Sabari H, a Senior Developer at Rook, is a seasoned professional renowned for his 
                prowess in driving innovation and efficiency within the tech landscape. Armed with 
                a versatile skill set that spans web development and expertise in web3, Sabari 
                excels in transforming intricate technical requirements into seamless solutions. 
                His proficiency in backend technologies, coupled with a passion for problem-solving 
                and task automation, distinguishes him as a valuable asset at Rook.
                </p>
                <p>
                In the dynamic and fast-paced atmosphere of Rook, Sabari&apos;s leadership style embodies 
                a perfect fusion of technical excellence and collaborative spirit. Continuously 
                pushing the boundaries, he consistently enhances the company&apos;s technological capabilities, 
                ensuring the delivery of robust solutions. Sabari&apos;s commitment to innovation and 
                his ability to contribute to projects involving smart contracts underscore his pivotal 
                role in elevating Rook&apos;s position in the ever-evolving tech landscape.
                </p>
              </div>
              <div className="team__member-work">
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
              </div>
              <div className="team__member-social">
                <h4 className="work-title">Follow :</h4>
                <ul>
                  <li>
                    <a href="#">
                      <span>
                        <i className="fa-brands fa-facebook-f"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>
                        <i className="fa-brands fa-twitter"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>
                        <i className="fa-brands fa-instagram"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
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

export default TeamDetailsSabariH;

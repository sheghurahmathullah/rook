import { useEffect, useRef } from "react";
import TeamDetails from "../../../public/assets/imgs/team/1.webp";
import Image from "next/image.js";
import animationCharCome from "@/lib/utils/animationCharCome";

const TeamDetailsAravindRavichandran = () => {
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
                  Aravindh <br />
                  Ravichandran
                </h2>
                <h3
                  className="team__member-role-7 animation__char_come"
                  ref={charAnim2}
                >
                  Founder of
                  <span> Rook</span>
                </h3>
                <p>
                Aravindh Ravichandran is a serial entrepreneur and a visionary leader with a passion for shaping a 
                brighter future. As the CEO of Hlo, he oversees a dynamic parent company that manages groundbreaking 
                ventures in diverse sectors, such as Rook, a tech conglomerate that specializes in digital solutions 
                and SaaS tools, and Legacies, a media conglomerate that empowers brands to connect authentically with 
                their audience.
                </p>
                <p>
                Beyond the business world, he is deeply committed to philanthropic efforts through the Aravindh 
                Foundation, where he champions blood donation initiatives and makes a tangible impact on lives 
                in the community. He welcomes connections with like-minded professionals to explore potential 
                collaborations and investments in ventures that can shape industries and create lasting impact.
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
                    <a href="https://twitter.com/AravAVR">
                      <span>
                        <i className="fa-brands fa-twitter"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/aravavr/">
                      <span>
                        <i className="fa-brands fa-instagram"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/avra/">
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

export default TeamDetailsAravindRavichandran;

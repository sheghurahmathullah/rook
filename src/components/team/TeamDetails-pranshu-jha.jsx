import { useEffect, useRef } from "react";
import TeamDetails from "../../../public/assets/imgs/team/6.webp";
import Image from "next/image.js";
import animationCharCome from "@/lib/utils/animationCharCome";

const TeamDetailsPranshuJha = () => {
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
                  Pranshu <br />
                  Jha
                </h2>
                <h3
                  className="team__member-role-7 animation__char_come"
                  ref={charAnim2}
                >
                  Senior Developer, at
                  <span> Rook</span>
                </h3>
                <p>
                  Pranshu Jha, a Senior Developer at Rook, stands at the forefront of technological innovation with a specialization in blockchain. Pranshu brings a unique blend of technical prowess and strategic vision to the Rook team, playing a crucial role in the development and implementation of cutting-edge solutions. With a passion for pushing the boundaries of technology, Pranshu Jha continues to elevate Rook&apos;s standing in the tech landscape, showcasing his commitment to excellence and innovation.
                </p>
                <p>
                  His hands-on experience in crafting creative solutions adds a valuable dimension to the company&apos;s portfolio. Pranshu Jha&apos;s dedication to staying at the forefront of technology and delivering exceptional results underscores his role as a driving force in Rook&apos;s senior development team.
                </p>
              </div>
              <div className="team__member-work">
                <h4 className="work-title">Portfolio :</h4>
                <ul>
                  <li>
                    <a href="https://pranshujha.com/">Website</a>
                  </li>
                  <li>
                    <a href="https://blog.pranshujha.com/">Blog</a>
                  </li>
                </ul>
              </div>
              <div className="team__member-social">
                <h4 className="work-title">Follow :</h4>
                <ul>
                  <li>
                    <a href="https://twitter.com/pranshuj73">
                      <span>
                        <i className="fa-brands fa-twitter"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/pranshuj73">
                      <span>
                        <i className="fa-brands fa-instagram"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/pranshuj73/">
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

export default TeamDetailsPranshuJha;

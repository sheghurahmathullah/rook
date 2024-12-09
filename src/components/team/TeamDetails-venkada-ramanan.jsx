import { useEffect, useRef } from "react";
import TeamDetails from "../../../public/assets/imgs/team/3.webp";
import Image from "next/image.js";
import animationCharCome from "@/lib/utils/animationCharCome";

const TeamDetailsVenkadaRamanan = () => {
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
                  style={{ width: "90%", height: "100%"}}
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
                  Venkada <br />
                  Ramanan
                </h2>
                <h3
                  className="team__member-role-7 animation__char_come"
                  ref={charAnim2}
                >
                  Chief Operating Officer, at
                  <span> Rook</span>
                </h3>
                <p>
                  Venkada Ramanan P, the Chief Operating Officer at Rook, is a seasoned executive renowned for his strategic acumen and operational excellence. With a proven track record of driving organizational growth and optimizing business processes, Venkada Ramanan P is a key architect of Rook&apos;s success. His leadership extends beyond the boardroom, fostering a culture of innovation and collaboration that permeates throughout the company.
                </p>
                <p>
                  As COO, Venkada Ramanan P oversees the seamless execution of Rook&apos;s operations, ensuring efficiency and alignment with strategic objectives. His ability to drive cross-functional initiatives playing a crucial role in the company&apos;s success with a focus on excellence in the dynamic tech landscape.
                </p>
              </div>
              <div className="team__member-work">
                <h4 className="work-title">Portfolio :</h4>
                <ul>
                  <li>
                    <a href="https://github.com/VenkadaRamananP">GitHub</a>
                  </li>
                </ul>
              </div>
              <div className="team__member-social">
                <h4 className="work-title">Follow :</h4>
                <ul>
                  <li>
                    <a href="https://instagram.com/kickerdhan_venkadaramanan_p">
                      <span>
                        <i className="fa-brands fa-instagram"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/venkada-ramanan-p-b271b01b4/">
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

export default TeamDetailsVenkadaRamanan;

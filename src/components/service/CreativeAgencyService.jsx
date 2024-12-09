import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger, ScrollSmoother } from "@/plugins";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const CreativeAgencyService = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        let animation_services_7 = gsap.utils.toArray(
          ".animation_service_7 .service__item-7"
        );
        gsap.set(animation_services_7, {
          opacity: 0,
          x: -30,
        });

        if (animation_services_7) {
          if (device_width < 1023) {
            animation_services_7.forEach((item, i) => {
              gsap.to(item, {
                scrollTrigger: {
                  trigger: item,
                  start: "top center+=200",
                  markers: false,
                },
                opacity: 1,
                x: -0,
                ease: "power2.out",
                duration: 2,
                stagger: {
                  each: 0.4,
                },
              });
            });
          } else {
            gsap.to(".animation_service_7 .service__item-7", {
              scrollTrigger: {
                trigger: ".animation_service_7",
                start: "top center+=200",
                markers: false,
              },
              opacity: 1,
              x: 0,
              ease: "power2.out",
              duration: 2,
              stagger: {
                each: 0.4,
              },
            });
          }
        }
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <section className="service__area-7 pt-130">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="service__items-7 animation_service_7">
                <div className="service__item-7">
                  <div>
                    <h3 className="service__title-7">
                      Website <span>Design</span>
                    </h3>
                  </div>
                  <p className="text-justify">
                    Crafting captivating websites that engage users, drive conversions, and reflect your brand&apos;s unique identity.
                  </p>
                  <ul>
                    <li>+ User Engagement</li>
                    <li>+ Conversion Optimization</li>
                    <li>+ Unique Brand Identity</li>
                  </ul>
                </div>
                <div className="service__item-7">
                  <div>
                    <h3 className="service__title-7">
                      Mobile App <span>Design</span>
                    </h3>
                  </div>
                  <p className="text-justify">
                    Creating intuitive mobile apps with stunning visuals, ensuring seamless user experiences and mobile functionality.
                  </p>
                  <ul>
                    <li>+ Intuitive Mobile Apps</li>
                    <li>+ Stunning Visuals</li>
                    <li>+ Seamless User Experiences</li>
                  </ul>
                </div>
                <div className="service__item-7">
                  <div>
                    <h3 className="service__title-7">
                      Social Media <span>Ads</span>
                    </h3>
                  </div>
                  <p className="text-justify">
                    Designing eye-catching social media visuals and ads that captivate audiences and drive online engagement.
                  </p>
                  <ul>
                    <li>+ Eye-catching Visuals</li>
                    <li>+ Audience Engagement</li>
                    <li>+ Online Engagement</li>
                  </ul>
                </div>
                <div className="service__item-7">
                  <div>
                    <h3 className="service__title-7">
                      Poster <span>Design</span>
                    </h3>
                  </div>
                  <p className="text-justify">
                    Designing impactful posters that convey messages, promote events, and leave a lasting visual impression.
                  </p>
                  <ul>
                    <li>+ Message Conveyance</li>
                    <li>+ Event Promotion</li>
                    <li>+ Lasting Visual Impression</li>
                  </ul>
                </div>
                <div className="service__item-7">
                  <div>
                    <h3 className="service__title-7">
                      Illustration <span>Design</span>
                    </h3>
                  </div>
                  <p className="text-justify">
                    Bringing ideas to life through custom illustrations, adding creativity and visual storytelling to your projects.
                  </p>
                  <ul>
                    <li>+ Custom Illustrations</li>
                    <li>+ Creative Visual Storytelling</li>
                  </ul>
                </div>
                <div className="service__item-7">
                  <div>
                    <h3 className="service__title-7">
                      Graphic <span>Design</span>
                    </h3>
                  </div>
                  <p className="text-justify">
                    Visualizing concepts, crafting designs that leave a mark, and conveying messages with creative precision.
                  </p>
                  <ul>
                    <li>+ Concept Visualization</li>
                    <li>+ Creative Precision</li>
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CreativeAgencyService;

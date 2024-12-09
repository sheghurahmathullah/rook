import { useEffect, useRef } from "react";
import { Power1, gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Link from "next/link.js";
import Image from "next/image.js";

gsap.registerPlugin(ScrollTrigger);

const DigitalMarketingWorkflow = () => {
  const workflowWrapper = useRef();

  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        if (device_width > 1200) {
          var workflow_section_3 = workflowWrapper.current;
          if (workflow_section_3) {
            let duration = 1,
              sections = gsap.utils.toArray(".wf_panel"),
              sectionIncrement = duration / (sections.length - 1),
              tl = gsap.timeline({
                scrollTrigger: {
                  trigger: ".workflow__wrapper-3",
                  pin: true,
                  scrub: 1,
                  start: "top top",
                  end: "+=5000",
                },
              });

            tl.to(sections, {
              xPercent: -100 * (sections.length - 1),
              duration: duration,
              ease: "none",
            });

            sections.forEach((section, index) => {
              let tween = gsap.from(section, {
                opacity: 0,
                scale: 0.6,
                duration: 0.5,
                force3D: true,
                paused: true,
              });
              addSectionCallbacks(tl, {
                start: sectionIncrement * (index - 0.99),
                end: sectionIncrement * (index + 0.99),
                onEnter: () => tween.play(),
                onLeave: () => tween.reverse(),
                onEnterBack: () => tween.play(),
                onLeaveBack: () => tween.reverse(),
              });
              index || tween.progress(1);
            });

            function addSectionCallbacks(
              timeline,
              { start, end, param, onEnter, onLeave, onEnterBack, onLeaveBack }
            ) {
              let trackDirection = (animation) => {
                  let onUpdate = animation.eventCallback("onUpdate"),
                    prevTime = animation.time();
                  animation.direction = animation.reversed() ? -1 : 1;
                  animation.eventCallback("onUpdate", () => {
                    let time = animation.time();
                    if (prevTime !== time) {
                      animation.direction = time < prevTime ? -1 : 1;
                      prevTime = time;
                    }
                    onUpdate && onUpdate.call(animation);
                  });
                },
                empty = (v) => v;
              timeline.direction || trackDirection(timeline);
              start >= 0 &&
                timeline.add(
                  () =>
                    ((timeline.direction < 0 ? onLeaveBack : onEnter) || empty)(
                      param
                    ),
                  start
                );
              end <= timeline.duration() &&
                timeline.add(
                  () =>
                    ((timeline.direction < 0 ? onEnterBack : onLeave) || empty)(
                      param
                    ),
                  end
                );
            }
          }
          for (let i = 1; i < 5; i++) {
            gsap.from(gsap.utils.toArray(`.count${i}`), {
              textContent: 0,
              duration: 1,
              delay: 3,
              ease: Power1.easeIn,
              snap: { textContent: 1 },
              stagger: 1,
              scrollTrigger: {
                trigger: ".counter__number",
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
      <section className="workflow__area-3">
        <div className="workflow__wrapper-3" ref={workflowWrapper}>
          

        <div className="choose-wrapper wf_panel">
            <div className="container">
              <div className="row">
                <div className="col-xxl-12">
                  <div className="choose-title-wrapper">
                    <h2 className="choose-title title-anim" style={{fontSize:"100px",color:"#0096d4"}}>
                      steps in Digital Marketing
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="research__area wf_panel pt-150">
  <div className="container inner_content">
    <div className="row">
      {/* Left Column: Content */}
      <div className="col-xxl-6 col-xl-6 col-lg-6 text-center">
        <div className="sec-title-wrapper">
          <h2 className="sec-sub-title">
            Step 01
          </h2>
          <h3 className="sec-title">
          Research & Strategy Development
          </h3>
          <p>
          We dive deep into our customers’ world to uncover insights, crafting strategies that feel like they were made just for them.
          </p>
        </div>
      </div>

      {/* Right Column: Image */}
      <div className="col-xxl-6 col-xl-6 col-lg-6 pt-5">
        <div className="image-wrapper img-fluid">
          <Image 
            src="/assets/imgs/digitalmarketing/step-1.png" 
            alt="Campaign Execution & Promotion" 
            style={{ width: "100%", height: "300px", borderRadius: "8px" }} // Adjust as needed
          />
        </div>
      </div>
    </div>
  </div>
</div>

          <div className="research__area wf_panel pt-150">
  <div className="container inner_content">
    <div className="row">
      {/* Left Column: Content */}
      <div className="col-xxl-6 col-xl-6 col-lg-6 text-center">
        <div className="sec-title-wrapper">
          <h2 className="sec-sub-title">
            Step 02
          </h2>
          <h3 className="sec-title">
          	Content Creation & Optimization
          </h3>
          <p>
          We tell stories that matter, designing content that not only captures attention but also connects on a personal level with our customers.

          </p>
        </div>
      </div>

      {/* Right Column: Image */}
      <div className="col-xxl-6 col-xl-6 col-lg-6 pt-5">
        <div className="image-wrapper">
          <Image 
            src="/assets/imgs/digitalmarketing/step-2.jpg" 
            alt="Campaign Execution & Promotion" 
            style={{ width: "100%", height: "300px", borderRadius: "8px" }} // Adjust as needed
          />
        </div>
      </div>
    </div>
  </div>
</div>

         


          <div className="research__area wf_panel pt-150">
  <div className="container inner_content">
    <div className="row">
      {/* Left Column: Content */}
      <div className="col-xxl-6 col-xl-6 col-lg-6 text-center">
        <div className="sec-title-wrapper">
          <h2 className="sec-sub-title">
            Step 03
          </h2>
          <h3 className="sec-title">
            Campaign Execution & Promotion
          </h3>
          <p>
  We launch campaigns that speak directly to our customers&apos; hearts, delivering value when and where they need it most.
</p>
        </div>
      </div>

      {/* Right Column: Image */}
      <div className="col-xxl-6 col-xl-6 col-lg-6 pt-5">
        <div className="image-wrapper">
          <Image 
            src="/assets/imgs/digitalmarketing/step-3.jpeg" 
            alt="Campaign Execution & Promotion" 
            style={{ width: "100%", height: "300px", borderRadius: "8px" }} // Adjust as needed
          />
        </div>
      </div>
    </div>
  </div>
</div>

<div className="research__area wf_panel pt-150">
  <div className="container inner_content">
    <div className="row">
      {/* Left Column: Content */}
      <div className="col-xxl-6 col-xl-6 col-lg-6 text-center">
        <div className="sec-title-wrapper">
          <h2 className="sec-sub-title">
            Step 04
          </h2>
          <h3 className="sec-title">
          Analytics, Monitoring & Optimization
          </h3>
          <p>
        We track the pulse of our customers’ journey, constantly refining our approach to keep them engaged, satisfied, and coming back for more.
          </p>
        </div>
      </div>

      {/* Right Column: Image */}
      <div className="col-xxl-6 col-xl-6 col-lg-6 pt-5">
        <div className="image-wrapper">
          <Image 
            src="/assets/imgs/digitalmarketing/step-4.jpg" 
            alt="Campaign Execution & Promotion" 
            style={{ width: "100%", height: "300px", borderRadius: "8px" }} // Adjust as needed
          />
        </div>
      </div>
    </div>
  </div>
</div>

         
         
         


          {/* CTA area start */}
          
          {/* CTA area end */}
        </div>
      </section>
    </>
  );
};

export default DigitalMarketingWorkflow;

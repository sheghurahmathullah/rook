import { useEffect, useRef } from "react";
import { ScrollTrigger } from "@/plugins";
import Link from "next/link";


const DigitalMarketingService = () => {
  
 

  
  return (
    <>
      <section className="service__area-3 ">
        <div className="container">
          <div className="row">
            <div className="col-xxl-10">
            <div className="text-anim">
  <h2 className="sec-sub-title title-anim" >Lead Nurturing Automation</h2>
  <h3 className="sec-title title-anim">
    
  <span className="highlight-text" style={{color:'#0096d4'}}> Build Relationships</span> <br /> Not Just Pipelines
</h3>
<p className="custom-paragraph text-justify w-75" style={{ textAlign: "justify" }}>
  Many marketers struggle to keep leads engaged long enough to convert—usually because their messaging isn&apos;t timely or relevant. Think about it: how many times have you signed up for something and then received irrelevant or poorly timed follow-ups? <strong>It&apos;s easy to lose interest.</strong>
  <br /> <br />
  So, how can automation help you build lasting relationships with leads? When done right, <strong>it&apos;s a game-changer.</strong> Our specialists know how to nurture leads at the perfect moment, guiding them through their journey and turning interest into conversions with personalized, timely content that builds trust and keeps them engaged.
</p>
<style jsx>{`
  @media (max-width: 768px) {
    .custom-paragraph {
      width: 90%;
      padding-left: 0;
      text-align: center;
      margin: 0 auto;
    }
  }
`}</style>

</div>
            </div>
          </div>

          <div className="row">
            <div className="col-xx-12">
              <div className="service__list-3">
                

                <div className="service__item-3 service_animation">
                    
                  <h3>
                    <Link href="/service-details" className="service__title-3 ">
                    Seamless <br /> Campaigns, <br /> Zero Hassle
                    </Link>
                  </h3>
                  <div className="w-75 text-justify">
                    <p>
                    We take care of every detail—from mapping out nurturing flows to setting up automated follow-ups—so you can focus on what you do best: scaling your business. With our expertise, your leads always receive the right information, exactly when they’re ready for it.
                    </p>
                    
                  </div>
                

                  <div
                    className="service__hover-3"
                    style={{
                      backgroundImage: "url(assets/imgs/service/3/2.png)",
                    }}
                  ></div>
                </div>

                <div className="service__item-3 service_animation">
                <div></div>
                  <div className="w-75 text-justify">
                    <p>
                    Automation doesn’t mean setting it and forgetting it. We continuously monitor performance and fine-tune your nurturing strategy, ensuring every email, every touchpoint, and every moment of engagement is optimized for maximum impact. The result? Stronger relationships and higher conversions.
                    </p>
                  
                  </div>
                  <h3>
                    <Link href="/service-details" className="service__title-3">
                    	Constant Refinement, <br /> Relentless Results
                    </Link>
                  </h3>
                </div>

                <div className="service__item-3 service_animation">
                    
                  <h3>
                    <Link href="/service-details" className="service__title-3 ">
                    	Personalized  <br />  At Scale, Effortlessly
                    </Link>
                  </h3>
                  <div className="w-75 text-justify">
                  <p>
  With dynamic content and segmentation, we personalize every email to resonate with each lead, making them feel like you&apos;re speaking directly to them. All while automating the process to save you time and effort. It&apos;s the perfect blend of scale and personalization—because your leads deserve both.
</p>
                    
                  </div>
                

                  <div
                    className="service__hover-3"
                    style={{
                      backgroundImage: "url(assets/imgs/service/3/2.png)",
                    }}
                  ></div>
                </div>

                <div className="service__item-3 service_animation">
                <div></div>
                  <div className="w-75 text-justify">
                    <p>
                    Imagine having a 24/7 sales team that always knows the right thing to say. Our automated nurturing sequences guide your leads from curiosity to commitment, sending them the right messages at just the right time. And the best part? It’s all hands-off for you.
                    </p>
                  
                  </div>
                  <h3>
                    <Link href="/service-details" className="service__title-3">
                    	Automated Campaigns <br /> That Spark Action
                    </Link>
                  </h3>
                </div>

               

                <div className="service3__img-wrap">
                  <div className="service3__img"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalMarketingService;

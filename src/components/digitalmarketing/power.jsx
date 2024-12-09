import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const ServiceElementV3 = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        let animation__services2 = gsap.utils.toArray(
          ".animation__service-2 .service__item-2"
        );
        gsap.set(animation__services2, {
          opacity: 0,
          x: -30,
        });

        if (animation__services2) {
          if (device_width < 1023) {
            animation__services2.forEach((item, i) => {
              gsap.to(item, {
                scrollTrigger: {
                  trigger: item,
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
            });
          } else {
            gsap.to(".animation__service-2 .service__item-2", {
              scrollTrigger: {
                trigger: ".animation__service-2",
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
      <section className="service__area-2 pt-130 pb-110">
      <div className="container">
  <div className="row">
    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
      <div className="sec-text text-anim">
        <p>
          Our team will deliver fast, impactful results to give you a reason to celebrate, but we’re also dedicated to ensuring your brand thrives over the long haul with steady, sustainable growth.
        </p>
      </div>
    </div>
    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
      <div className="sec-title-wrapper">
        <h2 className="sec-title title-anim">
      
        Let’s leverage the power of digital marketing to <br /> 
  <span className="highlight-text" style={{color:"#0096d4",fontSize:"70px"}}>Grow your brand.</span>
        </h2>
      </div>
    </div>

    
  </div>

  {/* Service Items in 2x2 Grid */}
  <div className="row pt-140">
    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
      <div className="service__item-2">
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" height="70px" viewBox="0 -960 960 960" width="70px" fill="#0096d4"><path d="m344-60-76-128-144-32 14-148-98-112 98-112-14-148 144-32 76-128 136 58 136-58 76 128 144 32-14 148 98 112-98 112 14 148-144 32-76 128-136-58-136 58Zm34-102 102-44 104 44 56-96 110-26-10-112 74-84-74-86 10-112-110-24-58-96-102 44-104-44-56 96-110 24 10 112-74 86 74 84-10 114 110 24 58 96Zm102-318Zm-42 142 226-226-56-58-170 170-86-84-56 56 142 142Z"/></svg>
      
          <h3 className="service__title-2">
            Proven <br /> Expertise
          </h3>
          <p style={{width:"400px"}}>
  Our team of experienced digital marketers specializes in creating tailored strategies that drive real results. Whether it&apos;s SEO, paid media, or content marketing, we have the knowledge and skills to grow your brand effectively.
</p>
        </div>
      </div>
    </div>
    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
      <div className="service__item-2">
        <div>
      <svg id="Layer_3" height="70" viewBox="0 0 64 64" width="70" xmlns="http://www.w3.org/2000/svg" fill="#0096d4" data-name="Layer 3"><path d="m9 36a1 1 0 0 0 0 2h1.019c0-.134-.017-.268-.017-.4v-1.6z"/><path d="m15.07 55c-.023 0-.047 0-.071 0a1 1 0 0 1 -.707-.292l-3.612-3.608-5.331 1.18a2.982 2.982 0 0 0 -2.349 2.928v5.792h5v-3h2v3h7v-8l-1.2 1.6a1 1 0 0 1 -.73.4z"/><path d="m14.892 52.477 1.673-2.232-1.638-1.092-2.24 1.12z"/><path d="m20 46.709a7.038 7.038 0 0 1 -4 0v.755l2 1.336 2-1.333z"/><path d="m24 32.108a4.6 4.6 0 0 0 -2.833 1.943l-.334.5a1 1 0 0 1 -.8.446 1.056 1.056 0 0 1 -.828-.4l-1.879-2.5a2.815 2.815 0 0 0 -3.709-.635l-1.617 1.072v5.066a8.737 8.737 0 0 0 1.9 5.435 5.244 5.244 0 0 0 8.188 0 8.736 8.736 0 0 0 1.912-5.435z"/><path d="m17.276 25a10.834 10.834 0 0 0 -5.576 1.543 3.523 3.523 0 0 0 -1.636 3.7l.214 1.066a.966.966 0 0 1 .163-.142l2.059-1.367a4.741 4.741 0 0 1 6.419 1.1l1.06 1.415a6.592 6.592 0 0 1 5.021-2.315.99.99 0 0 1 .873.538l.06-.3a3.511 3.511 0 0 0 -1.636-3.7 10.834 10.834 0 0 0 -5.575-1.538z"/><path d="m19.434 50.245 1.673 2.232 2.205-2.204-2.24-1.12z"/><path d="m30.649 52.28-5.33-1.18-3.612 3.612a1 1 0 0 1 -.707.288c-.024 0-.048 0-.071 0a1 1 0 0 1 -.73-.4l-1.199-1.6v8h7v-3h2v3h5v-5.792a2.982 2.982 0 0 0 -2.351-2.928z"/><path d="m26 37.6c0 .134-.012.268-.017.4h1.017a1 1 0 0 0 0-2h-1z"/><path d="m31 16a9 9 0 1 1 17.767 2h4.233v-4h-1.394a1 1 0 0 1 -.968-.751 10.92 10.92 0 0 0 -1.171-2.827 1 1 0 0 1 .154-1.216l.984-.985-2.828-2.828-.984.984a1 1 0 0 1 -1.216.155 10.915 10.915 0 0 0 -2.827-1.171 1 1 0 0 1 -.75-.968v-1.393h-4v1.393a1 1 0 0 1 -.751.968 10.921 10.921 0 0 0 -2.828 1.171 1 1 0 0 1 -1.216-.155l-.984-.984-2.828 2.828.984.985a1 1 0 0 1 .154 1.216 10.92 10.92 0 0 0 -1.171 2.827 1 1 0 0 1 -.967.751h-1.393v4h1.393a1 1 0 0 1 .967.75 10.92 10.92 0 0 0 1.171 2.827 1 1 0 0 1 -.154 1.216l-.984.985 2.828 2.828.984-.984a1 1 0 0 1 1.216-.155c.187.111.385.206.579.3v-2.307a9.019 9.019 0 0 1 -4-7.46z"/><path d="m56 26a1 1 0 0 1 -1-1v-5h-18v20h24v-14zm-13-4h10v2h-10zm-2 4h12v2h-12zm17 11a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1-1v-6a1 1 0 0 1 1-1h16c1 0 1 .77 1 1.937z"/><path d="m42 36h14v-4h-14z"/><path d="m56.999 21.414v2.585h2.585z"/><path d="m45 52h3v4h-10v6h16v-10h3l-6-7z"/><path d="m8 11h7v3l7-6-7-6v3h-13v15h6z"/></svg>
          <h3 className="service__title-2">
            Data-Driven <br /> Approach
          </h3>
          <p style={{width:"400px"}}>
            We believe in making decisions based on data. Our campaigns are continuously optimized using performance metrics to ensure maximum ROI and sustainable growth for your brand.
          </p>
        </div>
      </div>
    </div>
    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 pt-5">
      <div className="service__item-2">
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" height="70px" viewBox="0 -960 960 960" width="70px" fill="#0096d4"><path d="M120-840h330v330H120v-330Zm60 59v188-188Zm330-59h330v330H510v-330Zm83 59v188-188ZM120-450h330v330H120v-330Zm60 81v189-189Zm465-81h60v135h135v60H705v135h-60v-135H510v-60h135v-135Zm-75-330v210h210v-210H570Zm-390 0v210h210v-210H180Zm0 390v210h210v-210H180Z"/></svg>
          <h3 className="service__title-2">
            Customized <br /> Solutions
          </h3>
          <p style={{width:"400px"}}>
  At Rook, we understand that every business is unique. We work closely with you to develop a digital marketing strategy that&apos;s aligned with your specific goals, ensuring the best possible outcome for your brand.
</p>

        </div>
      </div>
    </div>
    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 pt-5">
      <div className="service__item-2">
        <div>
        <svg fill="#0096d4"  id="Layer_1" height="70" viewBox="0 0 64 64" width="70" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m45 32a2 2 0 0 0 2 2 7 7 0 0 1 0 14h-17.2a10 10 0 1 0 0 4h17.2a11 11 0 0 0 0-22 2 2 0 0 0 -2 2zm-25 24a6 6 0 1 1 6-6 6 6 0 0 1 -6 6z"/><path d="m17 34h17.17l-.59.59a2 2 0 1 0 2.83 2.83l4-4a2 2 0 0 0 .25-.31s.05-.1.08-.15a1.17 1.17 0 0 0 .16-.39c0-.06 0-.11.05-.17a2 2 0 0 0 0-.78c0-.06 0-.11-.05-.17a1.17 1.17 0 0 0 -.16-.39c0-.05-.05-.1-.08-.15a2 2 0 0 0 -.25-.31l-4-4a2 2 0 0 0 -2.83 2.83l.59.59h-17.17a7 7 0 0 1 0-14h17.2a10 10 0 1 0 0-4h-17.2a11 11 0 0 0 0 22zm27-26a6 6 0 1 1 -6 6 6 6 0 0 1 6-6z"/><path d="m20.59 47.59-1.65 1.65a2 2 0 0 0 -2.35 3.18l1 1a2 2 0 0 0 2.83 0l3-3a2 2 0 0 0 -2.83-2.83z"/></svg>
          <h3 className="service__title-2">
            End-to-End <br /> Support
          </h3>
          <p style={{
  maxWidth: "400px", // Sets a maximum width for larger screens
  width: "100%",     // Allows the element to take full width on smaller screens
}}>
  From strategy development to execution and ongoing optimization, we provide comprehensive support at every step of the process. You’ll have a dedicated team behind you, working to ensure both immediate results and long-term success.
</p>
        </div>
      </div>
    </div>
  </div>
</div>

      </section>
    </>
  );
};

export default ServiceElementV3;

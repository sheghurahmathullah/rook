import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const ServiceBrand = () => {
  const BrandRow1 = ["NEXUS", "Finequs", "CEG", "GHBBQ", "moufil", "FF"]
  const BrandRow2 = ["ZOHO", "CM", "VOILA", "DIALECTICA", "KFC", "topmate"]

  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        gsap.set(".fade_bottom", { y: 30, opacity: 0 });

        if (device_width < 1023) {
          const fadeArray = gsap.utils.toArray(".fade_bottom");
          fadeArray.forEach((item, i) => {
            let fadeTl = gsap.timeline({
              scrollTrigger: {
                trigger: item,
                start: "top center+=200",
              },
            });
            fadeTl.to(item, {
              y: 0,
              opacity: 1,
              ease: "power2.out",
              duration: 1.5,
            });
          });
        } else {
          gsap.to(".fade_bottom", {
            scrollTrigger: {
              trigger: ".fade_bottom",
              start: "top center+=300",
              markers: false,
            },
            y: 0,
            opacity: 1,
            ease: "power2.out",
            duration: 1,
            stagger: {
              each: 0.2,
            },
          });
        }
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <section className="brand__area">
        <div
          className="container line pt-140 pb-100"
          style={{ paddingBottom: "100px" }}
        >
          <span className="line-3"></span>
          <div className="row">
            <div className="col-xxl-12">
              <h2 className="brand__title-3 title-anim">
                We are happy to work with global largest brands
              </h2>
              <div className="client__logo">
                {BrandRow1.map((brand, index) => (
                  <Image
                    key={index} priority
                    width={300} height={200}
                    src={`/assets/imgs/rook/home/clients/${brand}.png`}
                    alt={brand}
                    className="fade_bottom_5 clientImg"
                  />
                ))}
              </div>
              <div className="client__logo">
                {BrandRow2.map((brand, index) => (
                  <Image
                    key={index} priority
                    width={300} height={200}
                    src={`/assets/imgs/rook/home/clients/${brand}.png`}
                    alt={brand}
                    className="fade_bottom_5 clientImg"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceBrand;

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Image from "next/image";
import { useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const ModernAgencyBrand = () => {
  const BrandRow1 = ["NEXUS", "Finequs", "CEG", "GHBBQ", "moufil", "FF"];
  const BrandRow2 = ["ZOHO", "CM", "VOILA", "DIALECTICA", "KFC", "topmate"];

  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        gsap.set(".fade_bottom_5", { y: 30, opacity: 0 });

        if (device_width < 1023) {
          const fadeArray = gsap.utils.toArray(".fade_bottom_5");
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
          gsap.to(".fade_bottom_5", {
            scrollTrigger: {
              trigger: ".fade_bottom_5",
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

  const [theme, setTheme] = useState();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const bodyElement = document.querySelector("body");

      // Function to update theme based on body class
      const updateTheme = () => {
        if (bodyElement.classList.contains("dark")) {
          setTheme("dark");
        } else {
          setTheme("light");
        }
      };

      // Call updateTheme initially
      updateTheme();

      // Set up a MutationObserver to watch for class changes
      const observer = new MutationObserver(() => {
        updateTheme();
      });

      observer.observe(bodyElement, {
        attributes: true, // Watch for attribute changes
        attributeFilter: ["class"], // Specifically watch the 'class' attribute
      });

      // Cleanup observer on component unmount
      return () => observer.disconnect();
    }
  }, []);

  const themestyle = () => ({
    background: theme === "light" ? "#ffff" : "",
  });

  const fontstyle = () => ({
    background: theme === "light" ? "#ffff" : "",
    color: theme === "light" ? "#000" : "#fff",
  });

  return (
    <div style={themestyle()} className="client__area-8 sp-x pb-0">
      <h6 className="text-end about-sub-right" style={fontstyle()}>
        Our Clients
      </h6>
      <div className="section_wrapper">
        <h4 className="react_border">
          <span style={fontstyle()}>04</span>
        </h4>
      </div>
      <div className="client__section">
        <h2
          className="client__section__title fade_bottom_5"
          style={fontstyle()}
        >
          Starting{" "}
          <span>
            strong,
            <br />
            scaling smart <br />
            let’s drive your{" "}
          </span>{" "}
          <br />
          <span style={{ color: "#0096d4", fontWeight: "bold" }}>
            Growth forward
          </span>
        </h2>
        <p
          className="client__section__dis fade_bottom_5 align-items-center align-content-center text-justify"
          style={{
            paddingTop: "10px",
            maxHeight: "260px", // Adjust this value to set the maximum height
            maxWidth: "500px", // Adjust this value to increase the width
            overflow: "hidden", // Ensures content that exceeds max height is hidden
            textOverflow: "ellipsis", // Adds ellipsis if text overflows
            whiteSpace: "normal", // Keeps text in normal paragraph format
          }}
        >
          &quot;It’s easy for businesses to get lost in the noise of the market,
          especially when marketing doesn’t seem to pay off. But at Rook, we
          focus on what works for you. We take the time to understand your
          unique goals and challenges, then craft a personalized strategy that
          moves you forward. The results we generate aren’t just numbers—they’re
          proof of what a tailored approach can do for your brand.&quot;
        </p>
      </div>
      {/* <div className="separatorSubtile">
        <h2 className="sec-subtile-6">Our Company</h2>
      </div>
      <div className="client__logo">
        {BrandRow1.map((brand, index) => (
          <Image
            key={index} priority
            width={300} height={200}
            src={`/assets/imgs/rook/home/clients/${brand}.webp`}
            alt={brand}
            className="fade_bottom_5 clientImg"
          />
        ))}
      </div>
      <div className="separatorSubtile">
        <h2 className="sec-subtile-6">Our People</h2>
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
      </div> */}
    </div>
  );
};

export default ModernAgencyBrand;

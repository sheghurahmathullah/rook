import { useEffect,useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const ModernAgencyBrand = () => {
  const BrandRow1 = ["NEXUS", "Finequs", "CEG", "GHBBQ", "moufil", "FF"]
  const BrandRow2 = ["ZOHO", "CM", "VOILA", "DIALECTICA", "KFC", "topmate"]

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
    <div className="client__area-8 sp-x mt-5 pb-0" style={themestyle()}>
      <h6 className="text-end about-sub-right"></h6>
      <div className="section_wrapper">
        <h4 className="react_border" style={fontstyle()}>
          <span style={fontstyle()}>02</span>
        </h4>
      </div>
      <div className="client__section" style={fontstyle()}>
      <h2 className="client__section__title fade_bottom_5" style={fontstyle()}>
  <span>What makes Facebook ads<br /> such a valuable</span> <br />
   <span style={{ color: "#0096d4",fontWeight:"bold" }}>Marketing Tool?</span>
</h2>
<p
  className="client__section__dis fade_bottom_5 text-justify"
  style={{
    paddingTop: "10px",
    maxHeight: "260px", // Adjust this value to set the maximum height
    maxWidth: "500px", // Adjust this value to increase the width
    overflow: "hidden", // Ensures content that exceeds max height is hidden
    textOverflow: "ellipsis", // Adds ellipsis if text overflows
    whiteSpace: "normal", // Keeps text in normal paragraph format
  }}
>
  &quot;With over 2 billion active users on Facebook and 1 billion on Instagram, Meta offers unparalleled advertising potential. We specialize in creating customized campaigns that target your specific audience, optimize results, and maximize ROI. Leveraging exclusive access to Meta&apos;s eCommerce resources and insights, we ensure your campaigns stay ahead of trends and drive meaningful results.&quot;
</p>

      </div>

    </div>
  );
};

export default ModernAgencyBrand;

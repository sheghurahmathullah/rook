import { useEffect,useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Brand2 from "../../../public/assets/imgs/Clients&Partners/myprobuddy.png";
import Brand3 from "../../../public/assets/imgs/Clients&Partners/myprobuddy.png";
import Brand4 from "../../../public/assets/imgs/Clients&Partners/myprobuddy.png";
import Brand5 from "../../../public/assets/imgs/Clients&Partners/myprobuddy.png";
// import Brand2 from "../../../public/assets/imgs/Clients&Partners/newclients/2.png";
// import Brand3 from "../../../public/assets/imgs/Clients&Partners/newclients/3.png";
// import Brand4 from "../../../public/assets/imgs/Clients&Partners/newclients/4.png";
// import Brand5 from "../../../public/assets/imgs/Clients&Partners/newclients/5.png";
// import Brand6 from "../../../public/assets/imgs/Clients&Partners/newclients/Group 251.png";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const DigitalAgencyBrand = () => {
    const [isHovered1, setIsHovered1] = useState(false); 
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);
    const [isHovered4, setIsHovered4] = useState(false);
    const [isHovered5, setIsHovered5] = useState(false);
    const [isHovered6, setIsHovered6] = useState(false);
    
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

  const [theme, setTheme] = useState();

  const imageStyle = () => ({
    background: theme === "light" 
      ? "url('../../../public/assets/imgs/Clients&Partners/newclients/4-1.png') no-repeat center center/cover"
      : "url('../../../public/assets/imgs/Clients&Partners/myprobuddy.png') no-repeat center center/cover",
   
  });



  return (
    <>
      <section className="brand__area">
        <div className="container g-0 line pt-1 pb-130">
          <span className="line-3"></span>
          <div className="row">
            <div className="col-xxl-12">
              <div className="sec-title-wrapper">
                <h2 className="sec-sub-title title-anim fs-1 fs-lg-1" style={{fontWeight:"bold"}}>Our Clients and Partners</h2>
               
              </div>
            </div>

            <div className="col-xxl-12 ">
              <div className="brand__list">
              <div
      className="brand__item fade_bottom"
      onMouseEnter={() => setIsHovered1(true)}
      onMouseLeave={() => setIsHovered1(false)}
      style={{
        transition: "transform 0.3s ease", // Smooth transition effect
        padding:"5px",
        borderRadius:"5px",
        transform: isHovered1 ? "scale(1.1)" : "scale(1)", // Scale up on hover
      }}
    >
      <Image
  priority
  width={250}
  height={127}
  style={{
    borderRadius: "5px",
  }}
  src={
    theme === "light"
      ? "/assets/imgs/Clients&Partners/clients/icm-dark.png"
      : "/assets/imgs/Clients&Partners/clients/icm-light.png"
  }
  alt="Brand Logo"
/>
    </div>
  

    <div
      className="brand__item fade_bottom"
      onMouseEnter={() => setIsHovered2(true)}
      onMouseLeave={() => setIsHovered2(false)}
      style={{
        transition: "transform 0.3s ease", // Smooth transition effect
        padding:"5px",
        transform: isHovered2 ? "scale(1.1)" : "scale(1)", // Scale up on hover
      }}
    >
        <Image
  priority
  width={250}
  height={127}
  style={{
    borderRadius: "5px",
  }}
  src={
    theme === "light"
      ? "/assets/imgs/Clients&Partners/clients/finequs-dark.png"
      : "/assets/imgs/Clients&Partners/clients/finequs-light.png"
  }
  alt="Brand Logo"
/>
    </div>
    <div
    
      className="brand__item fade_bottom"
      onMouseEnter={() => setIsHovered3(true)}
      onMouseLeave={() => setIsHovered3(false)}
      style={{
        transition: "transform 0.3s ease", // Smooth transition effect
        padding:"5px",
        transform: isHovered3 ? "scale(1.2)" : "scale(1)", // Scale up on hover
      }}
    >
         <Image
  priority
  width={250}
  height={127}
  style={{
    borderRadius: "5px",
  }}
  src={
    theme === "light"
       ? "/assets/imgs/Clients&Partners/clients/intonate-dark.png"
      : "/assets/imgs/Clients&Partners/clients/intonate-light.png"
  }
  alt="Brand Logo"
/>
    </div>
    <div 
      className="brand__item fade_bottom"
      onMouseEnter={() => setIsHovered4(true)}
      onMouseLeave={() => setIsHovered4(false)}
      style={{
        transition: "transform 0.3s ease", // Smooth transition effect
        padding:"5px",
        transform: isHovered4 ? "scale(1.1)" : "scale(1)", // Scale up on hover
      }}
    >
       <Image
  priority
  width={250}
  height={127}
  style={{
    borderRadius: "5px",
  }}
  src={
    theme === "light"
      ? "/assets/imgs/Clients&Partners/clients/dsp-dark.png"
      : "/assets/imgs/Clients&Partners/clients/dsp-light.png"
  }
  alt="Brand Logo"
/>
    </div>
    <div
      className="brand__item fade_bottom"
      onMouseEnter={() => setIsHovered5(true)}
      
      onMouseLeave={() => setIsHovered5(false)}
      style={{
        transition: "transform 0.3s ease", // Smooth transition effect
        padding:"5px",
        transform: isHovered5 ? "scale(1.1)" : "scale(1)", // Scale up on hover
      }}
    >
       <Image
  priority
  width={250}
  height={127}
  style={{
    borderRadius: "5px",
  }}
  src={
    theme === "light"
           ? "/assets/imgs/Clients&Partners/clients/capital-dark.png"
      : "/assets/imgs/Clients&Partners/clients/capital-light.png"
  }
  alt="Brand Logo"
/>
    </div>
    {/* <div
      className="brand__item fade_bottom"
      onMouseEnter={() => setIsHovered6(true)}
      onMouseLeave={() => setIsHovered6(false)}
      style={{
        transition: "transform 0.3s ease", // Smooth transition effect
        
        transform: isHovered6 ? "scale(1.1)" : "scale(1)", // Scale up on hover
      }}
    >
      <Image
        priority
        width={250}
        height={127}
        src={Brand6}
        alt="Brand Logo"
      />
    </div> */}
  
    
    
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalAgencyBrand;
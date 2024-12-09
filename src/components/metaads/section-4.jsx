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
        With our expert guidance, your campaigns will evolve continuously, maximizing reach and engagement from start to finish.
        </p>
      </div>
    </div>
    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
      <div className="sec-title-wrapper">
        <h2 className="sec-title title-anim">
        Relax and let our expert team take care of everything, from planning to execution.
        </h2>
      </div>
    </div>

    
  </div>

  {/* Service Items in 2x2 Grid */}
  <div className="row pt-140">
    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
      <div className="service__item-2">
        <div>
       <svg id="Layer_1" fill="#0096d4" height={70} width={70} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m484.91 265.09h-90.857c-3.658-72.98-64.181-131.229-138.053-131.229s-134.395 58.249-138.053 131.229h-90.857c-3.866 0-7 3.134-7 7v38.113c0 3.344 2.365 6.221 5.646 6.868l36.581 7.212 19.825 47.851-20.77 30.972c-1.862 2.776-1.501 6.483.863 8.849l53.9 53.899c2.364 2.363 6.072 2.726 8.849.863l30.971-20.769 47.85 19.823 7.214 36.583c.647 3.28 3.524 5.646 6.868 5.646h76.226c3.344 0 6.221-2.365 6.868-5.646l7.213-36.582 47.851-19.824 30.971 20.769c2.774 1.862 6.482 1.501 8.849-.864l53.899-53.898c2.364-2.365 2.726-6.071.863-8.849l-20.769-30.971 19.824-47.852 36.582-7.212c3.28-.647 5.646-3.524 5.646-6.868v-38.113c0-3.866-3.134-7-7-7zm-228.91-117.229c68.5 0 124.229 55.729 124.229 124.229 0 29.541-10.371 56.702-27.655 78.047-4.184-20.067-14.523-38.392-29.829-52.456-10.885-10.003-23.722-17.299-37.566-21.579 12.984-9.183 21.486-24.303 21.486-41.381 0-27.937-22.729-50.665-50.665-50.665s-50.665 22.729-50.665 50.665c0 17.078 8.502 32.198 21.486 41.381-13.844 4.279-26.681 11.576-37.567 21.579-15.305 14.064-25.645 32.39-29.828 52.456-17.284-21.345-27.655-48.506-27.655-78.047 0-68.5 55.729-124.229 124.229-124.229zm8.986 202.935-8.927 12.779-8.928-12.779 6.505-65.058c.787-.021 1.571-.055 2.363-.055.832 0 1.655.035 2.481.058zm-8.986-79.408c-20.217 0-36.665-16.448-36.665-36.666s16.448-36.665 36.665-36.665 36.665 16.448 36.665 36.665-16.448 36.666-36.665 36.666zm-21.83 85.301 16.151 23.118c1.31 1.875 3.452 2.991 5.738 2.991s4.429-1.117 5.738-2.991l16.15-23.118c.958-1.371 1.394-3.041 1.227-4.705l-6.468-64.669c36.174 7.123 64.036 36.992 67.599 75.045v.886c-22.165 20.515-51.794 33.075-84.306 33.075s-62.141-12.56-84.306-33.075v-.886c3.566-38.095 31.485-67.99 67.718-75.071l-6.469 64.695c-.167 1.664.269 3.334 1.227 4.705zm243.74-52.239-34.613 6.824c-2.298.453-4.217 2.025-5.113 4.188l-22.694 54.778c-.896 2.164-.651 4.633.653 6.578l19.652 29.306-45.762 45.762-29.306-19.652c-1.944-1.306-4.414-1.552-6.578-.653l-54.777 22.694c-2.163.896-3.735 2.815-4.188 5.112l-6.825 34.614h-64.717l-6.825-34.615c-.453-2.298-2.025-4.216-4.189-5.112l-54.776-22.693c-2.165-.898-4.635-.652-6.578.653l-29.305 19.652-45.763-45.762 19.653-29.306c1.305-1.945 1.55-4.414.653-6.578l-22.695-54.778c-.896-2.163-2.815-3.735-5.112-4.188l-34.613-6.824v-25.358h83.854c3.658 72.98 64.181 131.229 138.053 131.229s134.395-58.249 138.053-131.229h83.857v25.358zm-256.625-223.436-6.684 34.922c-.51 2.664.565 5.384 2.761 6.979 2.194 1.595 5.113 1.779 7.49.469l31.147-17.147 31.146 17.147c1.056.581 2.217.868 3.375.868 1.45 0 2.896-.45 4.115-1.337 2.195-1.595 3.271-4.314 2.761-6.979l-6.684-34.922 25.935-24.324c1.979-1.855 2.707-4.688 1.868-7.269-.838-2.58-3.092-4.444-5.784-4.782l-35.277-4.435-15.119-32.181c-1.154-2.456-3.623-4.023-6.336-4.023s-5.182 1.567-6.336 4.023l-15.119 32.181-35.277 4.435c-2.692.338-4.946 2.202-5.784 4.782-.839 2.58-.11 5.413 1.868 7.269zm18.83-27.399c2.381-.299 4.442-1.797 5.463-3.969l10.422-22.184 10.422 22.184c1.021 2.172 3.082 3.67 5.463 3.969l24.318 3.057-17.878 16.768c-1.75 1.642-2.537 4.064-2.086 6.421l4.607 24.073-21.471-11.82c-2.101-1.158-4.649-1.158-6.752 0l-21.472 11.82 4.607-24.073c.451-2.356-.336-4.779-2.086-6.421l-17.877-16.768 24.318-3.057zm118.791 72.114-5.097 26.63c-.51 2.664.565 5.384 2.761 6.979 2.194 1.595 5.113 1.778 7.49.469l23.751-13.075 23.751 13.075c1.056.581 2.217.868 3.375.868 1.451 0 2.896-.45 4.115-1.337 2.195-1.595 3.271-4.314 2.761-6.979l-5.097-26.63 19.775-18.548c1.979-1.855 2.707-4.688 1.868-7.269-.838-2.58-3.093-4.444-5.784-4.782l-26.9-3.381-11.528-24.539c-1.154-2.456-3.623-4.023-6.336-4.023s-5.182 1.567-6.336 4.023l-11.528 24.539-26.9 3.381c-2.691.338-4.946 2.202-5.784 4.782-.839 2.58-.11 5.413 1.868 7.269zm16.61-20.569c2.381-.299 4.442-1.797 5.463-3.969l6.832-14.542 6.832 14.542c1.021 2.172 3.082 3.67 5.463 3.969l15.94 2.004-11.719 10.991c-1.75 1.642-2.537 4.064-2.086 6.421l3.021 15.78-14.075-7.748c-1.051-.579-2.214-.868-3.376-.868s-2.325.289-3.376.868l-14.075 7.748 3.021-15.78c.451-2.356-.336-4.779-2.086-6.421l-11.719-10.991zm-280.234 20.569-5.097 26.63c-.51 2.664.565 5.384 2.761 6.979 2.194 1.595 5.113 1.778 7.49.469l23.751-13.075 23.751 13.075c1.056.581 2.217.868 3.375.868 1.451 0 2.896-.45 4.115-1.337 2.195-1.595 3.271-4.314 2.761-6.979l-5.097-26.63 19.775-18.548c1.979-1.855 2.707-4.688 1.868-7.269-.838-2.58-3.093-4.444-5.784-4.782l-26.9-3.381-11.528-24.539c-1.154-2.456-3.623-4.023-6.336-4.023s-5.182 1.568-6.336 4.023l-11.528 24.539-26.9 3.381c-2.691.338-4.946 2.202-5.784 4.782-.839 2.58-.11 5.413 1.868 7.269zm16.611-20.569c2.381-.299 4.442-1.797 5.463-3.969l6.831-14.542 6.832 14.542c1.021 2.172 3.082 3.67 5.463 3.969l15.94 2.004-11.719 10.991c-1.75 1.642-2.537 4.064-2.086 6.421l3.021 15.78-14.075-7.748c-1.051-.579-2.214-.868-3.376-.868s-2.325.289-3.376.868l-14.075 7.748 3.021-15.78c.451-2.356-.336-4.779-2.086-6.421l-11.719-10.991zm320.587 70.545-8.637 18.383-20.153 2.533c-2.691.338-4.946 2.202-5.784 4.782-.839 2.58-.11 5.413 1.868 7.269l14.815 13.896-3.818 19.949c-.51 2.665.565 5.385 2.761 6.979 2.194 1.595 5.112 1.779 7.49.469l17.794-9.796 17.793 9.796c1.055.581 2.217.868 3.375.868 1.45 0 2.896-.45 4.115-1.337 2.195-1.595 3.271-4.314 2.761-6.979l-3.818-19.949 14.815-13.896c1.979-1.855 2.707-4.688 1.868-7.269-.838-2.58-3.092-4.444-5.784-4.782l-20.152-2.533-8.637-18.383c-1.154-2.456-3.623-4.023-6.336-4.023s-5.182 1.567-6.336 4.023zm6.336 19.438 3.939 8.387c1.021 2.172 3.082 3.67 5.463 3.969l9.193 1.155-6.759 6.34c-1.75 1.642-2.537 4.064-2.086 6.422l1.741 9.1-8.116-4.469c-2.101-1.157-4.649-1.159-6.752 0l-8.117 4.469 1.741-9.1c.451-2.357-.336-4.78-2.086-6.422l-6.759-6.34 9.193-1.155c2.381-.299 4.442-1.797 5.463-3.969l3.94-8.387zm-389.858 27.423-3.818 19.949c-.511 2.665.565 5.385 2.761 6.979 1.221.887 2.664 1.337 4.115 1.337 1.158 0 2.32-.287 3.375-.868l17.793-9.796 17.793 9.796c2.375 1.308 5.294 1.125 7.49-.469 2.195-1.595 3.271-4.314 2.761-6.979l-3.817-19.95 14.814-13.896c1.979-1.856 2.707-4.688 1.868-7.269s-3.093-4.444-5.784-4.782l-20.152-2.533-8.637-18.383c-1.154-2.456-3.623-4.023-6.336-4.023s-5.182 1.567-6.336 4.023l-8.637 18.383-20.152 2.533c-2.692.338-4.946 2.202-5.784 4.782-.839 2.58-.11 5.413 1.868 7.269l14.815 13.896zm14.823-15.069c2.381-.299 4.442-1.797 5.463-3.969l3.939-8.386 3.939 8.386c1.021 2.172 3.082 3.67 5.463 3.969l9.194 1.155-6.759 6.34c-1.75 1.642-2.537 4.064-2.086 6.421l1.741 9.101-8.117-4.469c-1.051-.579-2.214-.868-3.376-.868s-2.325.289-3.376.868l-8.116 4.469 1.741-9.1c.451-2.357-.336-4.78-2.086-6.422l-6.759-6.34 9.193-1.155z"/></svg>

          <h3 className="service__title-2">
           Expertise and <br /> Experience
          </h3>
          <p style={{width:"400px"}}>
          Our team of seasoned professionals brings years of experience in managing and optimizing paid social campaigns, ensuring your brand achieves the best possible results.
          </p>
        </div>
      </div>
    </div>
    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
      <div className="service__item-2">
        <div>
       <svg id="Layer_1" viewBox="0 0 512 512" fill="#0096d4" xmlns="http://www.w3.org/2000/svg" height={70} width={70} data-name="Layer 1"><path d="m244.282 299.48v41.014a21.394 21.394 0 0 0 21.326 21.326h4.168a27.257 27.257 0 0 0 54.349 0h4.138a21.392 21.392 0 0 0 21.326-21.326v-41.014c5.892-12.013 14.773-22.647 23.855-33.54 19.372-23.165 39.663-47.48 39.663-91.023a7.114 7.114 0 0 0 -7.1-7.1h-37.162a7.114 7.114 0 0 0 -7.1 7.1 10.275 10.275 0 1 1 -20.55 0 7.114 7.114 0 0 0 -7.1-7.1h-30.06v-30.061a7.114 7.114 0 0 0 -7.1-7.1 10.275 10.275 0 0 1 0-20.549 7.115 7.115 0 0 0 7.1-7.1v-37.161a7.115 7.115 0 0 0 -7.1-7.1 116.184 116.184 0 0 0 -116.17 116.171c0 43.543 20.291 67.858 39.662 91.023 9.083 10.893 17.963 21.527 23.855 33.54zm61.88 69.5a12.975 12.975 0 0 1 -18.452 0 13.219 13.219 0 0 1 -3.679-7.156h25.81a13.225 13.225 0 0 1 -3.679 7.152zm-81.337-266.17a101.684 101.684 0 0 1 65.012-29.6v23.74a24.531 24.531 0 0 0 -17.388 23.45 24.528 24.528 0 0 0 17.388 23.423v31.1a7.114 7.114 0 0 0 7.1 7.1h31.1a24.48 24.48 0 0 0 40.755 10.2 24.663 24.663 0 0 0 6.122-10.2h23.769c-2.127 34.145-19.486 54.953-36.1 74.842-9.053 10.835-17.906 21.441-24.459 33.971h-82.374c-6.553-12.53-15.4-23.136-24.459-33.971-17.733-21.24-36.328-43.485-36.328-81.941a101.653 101.653 0 0 1 29.862-72.118zm240.561-61.567a41.248 41.248 0 0 0 -79.752-14.789 115.8 115.8 0 0 0 -46.88-9.87 7.09 7.09 0 0 0 -7.071 7.1v31.125a24.467 24.467 0 0 0 0 46.848v31.1a7.072 7.072 0 0 0 7.071 7.1h31.126a24.482 24.482 0 0 0 46.848 0h31.1a7.078 7.078 0 0 0 7.1-7.1 115.833 115.833 0 0 0 -13.358-54.131 41.352 41.352 0 0 0 23.816-37.383zm-66.506-2.414a7.061 7.061 0 0 1 10.031 0l6.754 6.754 23.682-23.711a7.1 7.1 0 0 1 10.031 10.059l-28.712 28.684a7.061 7.061 0 0 1 -10.031 0l-11.755-11.755a7.061 7.061 0 0 1 0-10.031zm41.62 86.826h-29.808a7.1 7.1 0 0 0 -7.1 7.1 10.289 10.289 0 0 1 -20.578 0 7.1 7.1 0 0 0 -7.1-7.1h-30.061v-30.063a7.071 7.071 0 0 0 -7.1-7.07 10.283 10.283 0 0 1 -7.243-17.561 10.161 10.161 0 0 1 7.243-3.017 7.1 7.1 0 0 0 7.1-7.1v-29.804a101.6 101.6 0 0 1 37.029 9.765c0 .147-.011.291-.011.438a41.343 41.343 0 0 0 41.243 41.272c1.111 0 2.208-.057 3.3-.144a101.4 101.4 0 0 1 13.086 43.284zm-38.171 254.358a23.406 23.406 0 0 0 -19.228-3.219c-.143.057-.316.086-.46.144l-100.823 33.943a40.669 40.669 0 0 0 -3.937-10.4 31.308 31.308 0 0 0 -14.081-13.541l-68.433-31.673a52.312 52.312 0 0 0 -22.533-5.059 73.987 73.987 0 0 0 -21.555 3.708l-41.531 12.847-1.523-5.46a14.284 14.284 0 0 0 -17.475-9.916l-33.713 9.4a14.249 14.249 0 0 0 -9.916 17.475l34.315 123.325a14.2 14.2 0 0 0 17.474 9.887l33.714-9.37a14.236 14.236 0 0 0 9.887-17.474l-2.156-7.76 11.209-2.788 58.516 22.3c7.962 3.018 15.463 5.49 23.079 6.352a41.7 41.7 0 0 0 24.086-4.024l132.812-65.644c1.235-.633 2.471-1.265 3.736-1.869 12.588-6.236 26.3-13.019 20.2-34.92a28.642 28.642 0 0 0 -11.664-16.264zm-319.082 9.858a7.1 7.1 0 0 1 -8.709-4.943v-.086a7.067 7.067 0 1 1 13.623-3.766l.029.087a7.088 7.088 0 0 1 -4.943 8.708zm304.28 28.629c-1.408.69-2.788 1.351-4.052 2.041l-132.5 65.471a28.133 28.133 0 0 1 -16.268 2.645c-6.035-.69-12.559-2.846-19.572-5.518l-60.586-23.079a7.256 7.256 0 0 0 -4.225-.259l-13.767 3.42-23.017-82.834 41.9-12.934a59.749 59.749 0 0 1 17.388-3.1 38.353 38.353 0 0 1 16.612 3.794l68.433 31.673a17.2 17.2 0 0 1 7.645 7.5 26.644 26.644 0 0 1 3.19 12.732v.517a21.5 21.5 0 0 1 -.4 3.737 20.958 20.958 0 0 1 -1.064 3.707 14.6 14.6 0 0 1 -8.536 8.8c-4.225 1.581-9.427 1.265-14.686-.776l-46.1-18.02a7.085 7.085 0 1 0 -5.172 13.183l46.1 18.021c8.479 3.305 17.245 3.65 24.8.834 7.357-2.731 13.393-8.306 16.785-16.871a36.445 36.445 0 0 0 1.781-6.208c.087-.46.173-.92.23-1.38l104.589-35.208a9.547 9.547 0 0 1 7.53 1.5 14.288 14.288 0 0 1 5.777 8.162c2.964 10.63-5.256 14.711-12.815 18.45z"/></svg>
          <h3 className="service__title-2">
          Tailored <br /> Solutions
          </h3>
          <p style={{width:"400px"}}>
          We take a customized approach to each campaign, carefully crafting strategies that align with your specific goals, target audience, and market trends for maximum impact.
          </p>
        </div>
      </div>
    </div>
    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 pt-5">
      <div className="service__item-2">
        <div>
        <svg id="Layer_1"  fill="#0096d4" height={70} width={70} enable-background="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m256 361.77c58.32 0 105.77-47.45 105.77-105.77s-47.45-105.77-105.77-105.77-105.77 47.45-105.77 105.77 47.45 105.77 105.77 105.77zm0-12c-32.49 0-61.18-16.62-78.01-41.8l15.07-8.7c1.38-.8 2.38-2.11 2.8-3.65.41-1.54.2-3.18-.6-4.55-6.14-10.61-9.38-22.73-9.38-35.06 0-38.67 31.46-70.13 70.13-70.13s70.13 31.46 70.13 70.13c0 12.33-3.24 24.46-9.38 35.06-.8 1.38-1.01 3.02-.6 4.55.41 1.54 1.42 2.85 2.8 3.65l15.07 8.7c-16.85 25.18-45.54 41.8-78.03 41.8zm-81.91-87.77c.76 10.35 3.46 20.46 7.96 29.76l-10.08 5.82c-5.39-10.85-8.74-22.87-9.54-35.58zm-11.66-12c.81-12.71 4.16-24.74 9.54-35.58l10.1 5.83c-4.42 9.11-7.21 19.16-7.98 29.75zm99.57-87.57c12.71.81 24.74 4.16 35.58 9.54l-5.83 10.1c-9.11-4.42-19.16-7.21-29.75-7.98zm-41.75 19.64-5.83-10.1c10.85-5.39 22.87-8.74 35.58-9.54v11.66c-10.6.77-20.64 3.56-29.75 7.98zm117.66 67.93c-.77-10.6-3.56-20.64-7.98-29.75l10.1-5.83c5.39 10.85 8.74 22.87 9.54 35.58zm11.66 12c-.81 12.71-4.16 24.74-9.54 35.58l-10.08-5.82c4.5-9.3 7.2-19.42 7.96-29.76zm-15.56-57.97-10.1 5.83c-5.83-8.55-13.22-15.95-21.77-21.77l5.83-10.1c10.29 6.88 19.16 15.75 26.04 26.04zm-129.98-26.04 5.83 10.1c-8.55 5.83-15.95 13.22-21.78 21.77l-10.1-5.83c6.89-10.29 15.76-19.16 26.05-26.04zm-23.39 198.1c13.52 8.51 28.19 14.59 43.73 18.13v25.09c0 8.28 6.74 15.01 15.02 15.01h33.23c8.28 0 15.02-6.74 15.02-15.01v-25.09c15.54-3.53 30.21-9.62 43.73-18.13l17.75 17.76c5.85 5.85 15.38 5.85 21.23 0l23.5-23.5c2.83-2.83 4.39-6.6 4.39-10.62s-1.56-7.79-4.39-10.62l-17.75-17.75c8.51-13.52 14.6-28.19 18.13-43.73h25.09c8.28 0 15.02-6.74 15.02-15.02v-33.23c0-8.28-6.74-15.02-15.02-15.02h-25.08c-3.54-15.54-9.62-30.21-18.13-43.73l17.75-17.75c5.85-5.85 5.85-15.38 0-21.23l-23.49-23.49c-2.83-2.83-6.6-4.39-10.62-4.39s-7.79 1.56-10.62 4.39l-17.75 17.75c-13.52-8.51-28.19-14.59-43.73-18.13v-25.09c0-8.28-6.74-15.02-15.02-15.02h-33.23c-8.28 0-15.02 6.74-15.02 15.02v25.09c-15.54 3.53-30.21 9.62-43.73 18.13l-17.75-17.75c-2.83-2.83-6.6-4.39-10.62-4.39s-7.79 1.56-10.62 4.39l-23.5 23.5c-5.85 5.85-5.85 15.38 0 21.23l17.75 17.75c-8.51 13.52-14.6 28.2-18.13 43.73h-25.09c-8.28 0-15.01 6.74-15.01 15.02v33.23c0 8.28 6.74 15.02 15.01 15.02h25.08c3.54 15.54 9.62 30.21 18.13 43.73l-17.75 17.75c-5.85 5.85-5.85 15.38 0 21.23l23.5 23.5c5.86 5.86 15.38 5.85 21.23 0zm-30.5 9.27-23.5-23.5c-1.16-1.16-1.16-3.11 0-4.26l21.2-21.2c2.04-2.04 2.34-5.23.72-7.61-9.96-14.67-16.7-30.92-20.02-48.28-.54-2.83-3.01-4.87-5.89-4.87h-29.96c-1.63 0-3.01-1.38-3.01-3.02v-33.23c0-1.63 1.38-3.02 3.01-3.02h29.96c2.88 0 5.35-2.05 5.89-4.87 3.32-17.36 10.05-33.6 20.02-48.28 1.62-2.38 1.31-5.58-.72-7.61l-21.2-21.2c-1.16-1.16-1.16-3.11 0-4.26l23.5-23.5c.76-.76 1.66-.87 2.13-.87s1.37.11 2.13.87l21.2 21.2c2.04 2.04 5.23 2.34 7.61.72 14.68-9.96 30.92-16.7 48.28-20.02 2.83-.54 4.87-3.01 4.87-5.89v-29.97c0-1.63 1.38-3.02 3.02-3.02h33.23c1.63 0 3.02 1.38 3.02 3.02v29.97c0 2.88 2.05 5.35 4.87 5.89 17.36 3.32 33.61 10.05 48.28 20.01 2.38 1.62 5.58 1.32 7.61-.72l21.2-21.2c.76-.76 1.66-.87 2.13-.87s1.37.11 2.13.87l23.5 23.5c1.16 1.16 1.16 3.11 0 4.26l-21.2 21.2c-2.04 2.04-2.34 5.23-.72 7.61 9.96 14.68 16.7 30.92 20.02 48.29.54 2.83 3.01 4.87 5.89 4.87h29.96c1.63 0 3.02 1.38 3.02 3.02v33.23c0 1.63-1.38 3.02-3.02 3.02h-29.96c-2.88 0-5.35 2.05-5.89 4.87-3.32 17.36-10.05 33.61-20.02 48.28-1.62 2.38-1.31 5.58.72 7.61l21.2 21.2c.76.76.87 1.66.87 2.13s-.11 1.37-.87 2.13l-23.5 23.49c-1.16 1.16-3.11 1.16-4.26 0l-21.2-21.2c-2.04-2.04-5.23-2.34-7.61-.72-14.68 9.96-30.92 16.7-48.28 20.02-2.83.54-4.87 3.01-4.87 5.89v29.97c0 1.63-1.38 3.01-3.02 3.01h-33.23c-1.63 0-3.02-1.38-3.02-3.01v-29.97c0-2.88-2.05-5.35-4.87-5.89-17.36-3.32-33.6-10.05-48.28-20.01-1.02-.7-2.2-1.04-3.37-1.04-1.55 0-3.08.6-4.24 1.76l-21.2 21.2c-1.15 1.15-3.11 1.15-4.26 0zm154-105.31-30.53-19.79c.33-1.37.53-2.79.53-4.26 0-10-8.14-18.14-18.14-18.14s-18.14 8.14-18.14 18.14 8.14 18.14 18.14 18.14c4.17 0 8.01-1.43 11.08-3.81l30.54 19.79c1.01.65 2.14.97 3.26.97 1.97 0 3.89-.97 5.04-2.74 1.8-2.78 1.01-6.49-1.78-8.3zm-54.28-24.05c0-3.38 2.75-6.14 6.14-6.14s6.14 2.75 6.14 6.14-2.75 6.14-6.14 6.14-6.14-2.76-6.14-6.14zm227 96.3c-25.72 58.99-72.88 104.44-132.78 127.96-28.55 11.21-58.36 16.81-88.14 16.81-32.7 0-65.36-6.75-96.24-20.21-3.04-1.32-4.43-4.86-3.1-7.9s4.86-4.43 7.9-3.1c29.69 12.95 60.68 19.08 91.18 19.08 88.35.01 172.67-51.41 210.18-137.43 48.34-110.86.5-241.73-106.63-295.83l8.86 31.55c.9 3.19-.96 6.5-4.15 7.4-.54.15-1.09.23-1.62.23-2.62 0-5.03-1.73-5.77-4.38l-12.41-44.2c-.43-1.53-.23-3.17.54-4.56s2.08-2.41 3.61-2.84l44.2-12.41c3.19-.9 6.5.96 7.4 4.15s-.96 6.5-4.15 7.4l-28.84 8.08c52.6 27.19 92.93 72.27 114.2 128 22.64 59.3 21.13 124.01-4.24 182.2zm-366.19 40.75-2.61 45.84c-.18 3.19-2.83 5.66-5.98 5.66-.12 0-.23 0-.35-.01l-45.84-2.61c-3.31-.19-5.84-3.02-5.65-6.33s3.03-5.85 6.33-5.65l34.71 1.98c-74.41-69.63-97.02-178.46-56.14-272.23 21.04-48.27 56.33-87.45 102.02-113.31 44.2-25.01 96.18-35.6 146.36-29.81 3.29.38 5.65 3.36 5.27 6.65s-3.35 5.65-6.65 5.27c-100.63-11.61-195.47 43.05-236 136-38.4 88.07-17.84 190.12 50.93 256.36l1.62-28.49c.19-3.31 3-5.85 6.33-5.65 3.31.19 5.84 3.02 5.65 6.33z"/></svg>

          <h3 className="service__title-2">
          Continuous <br /> Optimization
          </h3>
          <p style={{width:"400px"}}>
          We don’t just launch campaigns—we constantly monitor, test, and optimize to uncover new opportunities for growth, keeping your performance ahead of the curve.
          </p>
        </div>
      </div>
    </div>
    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 pt-5">
      <div className="service__item-2">
        <div>
        <svg id="Layer_1" fill="#0096d4" enable-background="new 0 0 50 50" height="70" viewBox="0 0 50 50" width="70" xmlns="http://www.w3.org/2000/svg"><g id="_x33_3"><path d="m29.3 7.8c.6 0 1-.4 1-1s-.4-1-1-1h-17.6c-.6 0-1 .4-1 1s.4 1 1 1z"/><path d="m5.8 11.4c0 .6.4 1 1 1h27.4c.6 0 1-.4 1-1s-.4-1-1-1h-27.4c-.6 0-1 .4-1 1z"/><path d="m6.8 16.9h27.4c.6 0 1-.4 1-1s-.4-1-1-1h-27.4c-.6 0-1 .4-1 1s.4 1 1 1z"/><path d="m43.5 1h-37c-3 0-5.5 2.5-5.5 5.5v39.1c0 1.9 1.5 3.4 3.4 3.4h32.2c1.9 0 3.4-1.5 3.4-3.4v-6.1c0-.6-.4-1-1-1s-1 .4-1 1v6.1c0 .8-.6 1.4-1.4 1.4h-32.2c-.8 0-1.4-.6-1.4-1.4v-39.1c0-1.9 1.6-3.5 3.5-3.5h32.8c-.8 1-1.3 2.3-1.3 3.5 0 .1 0 4.6 0 4.5v14.2c0 .6.4 1 1 1s1-.4 1-1v-13.2h5.6c1.9 0 3.4-1.5 3.4-3.4v-2.1c0-3-2.4-5.5-5.5-5.5zm3.5 7.6c0 .8-.6 1.4-1.4 1.4h-5.6v-3.5c0-1.9 1.5-3.5 3.5-3.5 1.9 0 3.5 1.6 3.5 3.5z"/><path d="m44.7 28h-10.4c-.5 0-.9.4-1 .8h-2.8c-1.4-5.2-6.2-9.1-11.8-9.1-6.7 0-12.2 5.5-12.2 12.2s5.5 12.2 12.2 12.2c5.4 0 10-3.5 11.6-8.4h3c.1.5.5.8 1 .8h10.4c2.4 0 4.3-1.9 4.3-4.3s-1.9-4.2-4.3-4.2zm-26 14.2c-5.7 0-10.3-4.6-10.3-10.2s4.6-10.2 10.3-10.2c6.2 0 11 5.4 10.1 11.6-.7 4.9-4.9 8.8-10.1 8.8zm12.1-8.6c.2-1.2.1-2 .1-2.8h2.4v3h-2.5s0-.1 0-.2zm13.9 1.1h-9.4v-4.7h9.4c1.3 0 2.3 1.1 2.3 2.3s-1.1 2.4-2.3 2.4z"/><path d="m11.9 32.7h2v5.1h-2z"/><path d="m15.7 29.1h2v8.8h-2z"/><path d="m23.5 26.1h2v11.7h-2z"/><path d="m19.6 30.9h2v7h-2z"/></g></svg>


          <h3 className="service__title-2">
          Transparent Reporting  <br /> and Insights
          </h3>
          <p
  style={{
    maxWidth: "400px", // Sets a maximum width for larger screens
    width: "100%",     // Allows the element to take full width on smaller screens
  }}
>
  With detailed, easy-to-understand reports, you&apos;ll always have clear visibility into your campaign&apos;s performance, ensuring you&apos;re informed and confident in your marketing decisions.
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
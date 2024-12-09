import { useEffect, useRef } from "react";
import TeamDetails from "../../../public/assets/imgs/team/4.webp";
import Image from "next/image.js";
import animationCharCome from "@/lib/utils/animationCharCome";

const TeamDetailsRahulB = () => {
  const charAnim = useRef();
  const charAnim2 = useRef();
  useEffect(() => {
    animationCharCome(charAnim.current);
    animationCharCome(charAnim2.current);
  }, []);
  return (
    <div className="container pt-150 px-4 py-8">
      <h1 className="text-2xl font-semibold mb-8 text-[#FF8F40] text-center">Terms and Conditions</h1>
      <div className="bg-white shadow-md rounded-lg p-6 prose max-w-3xl mx-auto">
        <p className="text-lg mb-4 text-justify">
          Please read these terms and conditions carefully before using our website.
        </p>
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-justify text-[#5F248E] mb-2">1. Acceptance of Terms:</h2>
          <p className='text-justify'>
          Your access to and use of this website, as well as any services provided by MyProBuddy, are conditioned upon your acceptance and compliance with these terms and conditions. By accessing this website and using our services, you acknowledge that you have read, understood, and agree to be bound by these terms.
          </p>
        </div>
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-[#5F248E] mb-2">2. User Responsibilities</h2>
          <p className='text-justify'>
          You agree to use our website and services for lawful purposes only and to comply with all applicable laws, regulations, and guidelines. You further agree not to engage in any conduct that may disrupt or interfere with the operation of our website or services.

          </p>
        </div>
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-[#5F248E] mb-2">3. Intellectual Property</h2>
          <p className='text-justify'>
          All content and materials provided on this website, including but not limited to text, graphics, logos, images, and software, are the property of MyProBuddy or its licensors and are protected by copyright and other intellectual property laws. You are granted a limited, non-exclusive, and non-transferable license to access and use the content and materials for personal and non-commercial purposes only.

          </p>
        </div>
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-[#5F248E] mb-2">4. Limitation of Liability</h2>
          <p className='text-justify'>
          MyProBuddy shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in any way connected with your use of our website or services, including but not limited to any errors or omissions in any content or materials, any unauthorized access to or use of our servers, and any interruption or cessation of our services.
          </p>
        </div>
        <p className="text-sm text-gray-600 mt-8">
          These Terms and Conditions were last updated on April 18, 2024.
        </p>
        <footer className="mt-8">
        <div className="bg-gray-200 py-4 px-6 rounded-lg">
          <div className="flex flex-col md:flex-row justify-between sm:items-center items-left">
            <div className='my-2 text-left'>
              <p className="text-sm text-gray-600">Address:</p>
              <p className="text-sm text-gray-800">C5 Jains Ansruta, Valluvar kottam high <br/>road, Nungambakkam, chennai, Tamil Nadu 600034.</p>
            </div>
            <div className='my-2 text-left'>
              <p className="text-sm text-gray-600">Contact Info:</p>
              <p className="text-sm text-gray-800">Phone: +91 9952237700 </p>
              <p className="text-sm text-gray-800">Email: reachus@myprobuddy.com</p>
            </div>
          </div>
        </div>
      </footer>
      </div>
      
    </div>
  );
};

export default TeamDetailsRahulB;

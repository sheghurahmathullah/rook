import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import DigitalAgencyBrand from "@/components/gtmstrategy/section-5";
import StartupAgencyTestimonial from "@/components/digitalmarketing/testiomonials";
import StartupAgencyHero from "@/components/gtmstrategy/gtm-banner";
import Contact1 from "@/components/gtmstrategy/section-7";
import DigitalMarketingWorkflow from "@/components/gtmstrategy/section-2"
import StartupAgencyService from "@/components/gtmstrategy/section-3"
import ServiceElementV3 from "@/components/emailmarketing/section-3"
import DesignStudioProtfolio from "@/components/emailmarketing/section-1"
import StartupAgencySolution from "@/components/gtmstrategy/section-4"


import navData from "@/data/navDataRook.json";
import customThumbFooter from "../../../public/assets/imgs/rook/footer.webp"

const ServiceDark = () => {
  return (
    <>
      <Head>
        <title>Rook Fellows - Best Technology & Digital Marketing Consultancy Company</title>
        <meta name="description" content="Rook Fellows is the creative and digital agency of choice for the world's largest brands. " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header1" footer="footer3" defaultMode="dark" customNavData={navData} customThumbFooter={customThumbFooter}>
          <StartupAgencyHero/>
          <DigitalMarketingWorkflow/>
          <StartupAgencyService/>
          <StartupAgencySolution/>
        
        
        
         
         
          {/* <ServiceHero /> */}
          
          
          <DigitalAgencyBrand/>
          <StartupAgencyTestimonial/>
          <Contact1/>
        </RootLayout>
      </main>
    </>
  );
};

export default ServiceDark;

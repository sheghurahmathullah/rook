import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import ServiceHero from "@/components/digitalmarketing/banner";
import DigitalMarketingWorkflow from "@/components/digitalmarketing/steps";
import DigitalAgencyBrand from "@/components/emailmarketing/section-4";
import StartupAgencyTestimonial from "@/components/digitalmarketing/testiomonials";
import StartupAgencyHero from "@/components/emailmarketing/banner-emailmarketing";
import Contact1 from "@/components/emailmarketing/section-5";
import Service1 from "@/components/service/Service1";
import ServiceBrand from "@/components/brand/ServiceBrand";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import DesignStudioAbout from "@/components/emailmarketing/section-2"
import ServiceElementV3 from "@/components/emailmarketing/section-3"
import DesignStudioProtfolio from "@/components/emailmarketing/section-1"


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
          <DesignStudioProtfolio/>
        
          <DesignStudioAbout/>
          <ServiceElementV3/>
         
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

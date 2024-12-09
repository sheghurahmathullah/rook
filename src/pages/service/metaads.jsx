import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import ServiceHero from "@/components/digitalmarketing/banner";
import DigitalMarketingWorkflow from "@/components/digitalmarketing/steps";
import DigitalAgencyBrand from "@/components/metaads/section-6";
import StartupAgencyTestimonial from "@/components/digitalmarketing/testiomonials";
import StartupAgencyHero from "@/components/metaads/banner";
import Contact1 from "@/components/metaads/section-8";
import Service1 from "@/components/service/Service1";
import ServiceBrand from "@/components/brand/ServiceBrand";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import ModernAgencyBrand from "@/components/metaads/section-2"
import DesignStudioAbout from "@/components/metaads/section-3"
import ServiceElementV3 from "@/components/metaads/section-4"
import StartupAgencyFaq from "@/components/metaads/section-5"

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
          <ModernAgencyBrand/>
          <DesignStudioAbout/>
          <ServiceElementV3/>
          <StartupAgencyFaq/>
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

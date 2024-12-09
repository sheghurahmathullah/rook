import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import ServiceHero from "@/components/digitalmarketing/banner";
import DigitalMarketingWorkflow from "@/components/digitalmarketing/steps";
import ServiceElementV3 from "@/components/digitalmarketing/power";
import DigitalAgencyBrand from "@/components/digitalmarketing/clients";
import StartupAgencyTestimonial from "@/components/digitalmarketing/testiomonials";
import StartupAgencyHero from "@/components/digitalmarketing/banner-1";
import Contact1 from "@/components/digitalmarketing/contact";
import ServiceElementV5 from "@/components/digitalmarketing/sub-service";
import Service1 from "@/components/service/Service1";
import ServiceBrand from "@/components/brand/ServiceBrand";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import navData from "@/data/navDataRook.json";
import Tabsection from "@/components/digitalmarketing/nav";
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
          <Tabsection/>
          {/* <ServiceElementV5/> */}
          {/* <ServiceHero /> */}
          <DigitalMarketingWorkflow/>
          <ServiceElementV3/>
          <DigitalAgencyBrand/>
          <StartupAgencyTestimonial/>
          <Contact1/>
          {/* <ServiceBrand /> */}
          {/* <Service1 /> */}
          {/* <DigitalAgencyCTA /> */}
        </RootLayout>
      </main>
    </>
  );
};

export default ServiceDark;

import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import ServiceV6Hero from "@/components/hero/ServiceV6Hero";
import CreativeAgencyService from "@/components/service/CreativeAgencyService";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import navData from "@/data/navDataRook.json";
import ServiceElementV2 from "@/components/service/ServiceElementV2";
import customThumbFooter from "../../../public/assets/imgs/rook/footer.webp"

const ServiceV6Dark = () => {
  return (
    <div>
      <Head>
        <title>Rook Fellows - Best Technology & Digital Marketing Consultancy Company</title>
        <meta name="description" content="Rook Fellows is the creative and digital agency of choice for the world's largest brands. " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header1" footer="footer3" defaultMode="dark" customNavData={navData} customThumbFooter={customThumbFooter}>
          <ServiceV6Hero />
          <CreativeAgencyService />
          <ServiceElementV2 />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </div>
  );
};

export default ServiceV6Dark;

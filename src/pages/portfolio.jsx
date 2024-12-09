import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import DigitalAgencyPortfolio from "@/components/portfolio/DigitalAgencyPortfolio";
import PortfolioV2CTA from "@/components/cta/PortfolioV2CTA";
import navData from "@/data/navDataRook.json";
// import customThumbFooter from "../../public/assets/imgs/rook/portfolio/1160x662.svg"
import customThumbFooter from "../../public/assets/imgs/rook/footer.webp"

const PortfolioV3Dark = () => {
  return (
    <>
      <Head>
        <title>Rook Fellows - Best Technology & Digital Marketing Consultancy Company</title>
        <meta name="description" content="Rook Fellows is the creative and digital agency of choice for the world's largest brands. " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header1" footer="footer3" defaultMode="dark" customNavData={navData} customThumbFooter={customThumbFooter}>
          <DigitalAgencyPortfolio />
          <PortfolioV2CTA />
        </RootLayout>
      </main>
    </>
  );
};

export default PortfolioV3Dark;

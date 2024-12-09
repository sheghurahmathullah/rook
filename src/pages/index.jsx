import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
// import ModernAgencyHero from "@/components/hero/ModernAgencyHero";
import ModernAgencyHero from "@/components/homecontent/banner-home";
import ModernAgencyPortfolio from "@/components/portfolio/ModernAgencyPortfolio";
import ModernAgencyWork from "@/components/work/ModernAgencyWork";
import ModernAgencySingleImage from "@/components/singleImage/ModernAgencySingleImage";
import ModernAgencyBrand from "@/components/brand/ModernAgencyBrand";
import DesignStudioFeatureRook from "@/components/feature/DesignStudioFeatureRook";
import DesignStudioRollRook from "@/components/roll/DesignStudioRollRook";
import navData from "@/data/navDataRook.json";
import StartupAgencyTestimonial from "@/components/testimonial/StartupAgencyTestimonial";
import DigitalMarketingService from "@/components/homecontent/service-home"
import DigitalAgencyBrand from "@/components/homecontent/partners-home"
import Contact1 from "@/components/homecontent/contact-home"
import Tabsection from "@/components/homecontent/tabs-home"

import customThumbFooter from "../../public/assets/imgs/rook/footer.webp"

const ModernAgencyDark = () => {

    return (
        <div>
            <Head>
                <title>Rook - Best Technology & Digital Marketing Consultancy Company</title>
                <meta name="description" content="Rook Fellows is the creative and digital agency of choice for the world's largest brands. " />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <main>
                <RootLayout header="header1"  footer="footer3" defaultMode="dark" customNavData={navData} customThumbFooter={customThumbFooter}>
                    {/* <button id="zf_button_160565" style={{ display: "block" }}>Form</button> */}

                    <ModernAgencyHero />
                    <ModernAgencyPortfolio />
                    <DesignStudioFeatureRook />
                    <DesignStudioRollRook />
                    <Tabsection/>
                    {/* <DigitalMarketingService/> */}
                   
                  

                    {/* <ModernAgencyWork /> */}
                    {/* <ModernAgencyAbout /> */}
                    <ModernAgencyBrand />
                    <DigitalAgencyBrand/>
                    <StartupAgencyTestimonial />
                   
                    <ModernAgencySingleImage />
                    <Contact1/>
                    {/* <ModernAgencyWork2 /> */}{/* Awards section */}

                </RootLayout>
            </main>
        </div>
    );
};

export default ModernAgencyDark;

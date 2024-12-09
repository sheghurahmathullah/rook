import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import ModernAgencyHero from "@/components/hero/ModernAgencyHero";
import ModernAgencyPortfolio from "@/components/portfolio/ModernAgencyPortfolio";
import ModernAgencyWork from "@/components/work/ModernAgencyWork";
import ModernAgencySingleImage from "@/components/singleImage/ModernAgencySingleImage";
import ModernAgencyBrand from "@/components/brand/ModernAgencyBrand";
import DesignStudioFeatureRook from "@/components/feature/DesignStudioFeatureRook";
import DesignStudioRollRook from "@/components/roll/DesignStudioRollRook";
import BlogDetails1 from "@/components/blog/BlogDetails1";
import navData from "@/data/navDataDomains.json";
import StartupAgencyTestimonial from "@/components/testimonial/StartupAgencyTestimonial";
import customThumbFooter from "../../public/assets/imgs/rook/footer.webp"

const ModernAgencyDark = () => {

    return (
        <div>
            <Head>
                <title>Rook Fellows - Best Technology & Digital Marketing Consultancy Company</title>
                <meta name="description" content="Rook Fellows is the creative and digital agency of choice for the world's largest brands. " />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <main>
                <RootLayout header="header2"  footer="footer3" defaultMode="dark" customNavData={navData} customThumbFooter={customThumbFooter}>
                   <BlogDetails1/>
                </RootLayout>
            </main>
        </div>
    );
};

export default ModernAgencyDark;

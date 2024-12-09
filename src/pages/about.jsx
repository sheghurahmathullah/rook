import DigitalAgencyBrand from "@/components/brand/DigitalAgencyBrand";
import RootLayout from "@/components/common/layout/RootLayout";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import AboutHero from "@/components/hero/AboutHero";
import AboutStory from "@/components/story/AboutStory";
import AboutTeam from "@/components/team/AboutTeam";
import Head from "next/head";
import NavDataRook from "@/data/navDataRook.json"

const About = () => {
    return (
        <div>
            <Head>
                <title>About</title>
                <meta name="description" content="About Description" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <main>
            <RootLayout header="header1" footer="footer5" defaultMode="dark" customNavData={NavDataRook}>
                    <AboutHero />
                    <AboutStory />
                    {/* <AboutCounter /> */}
                    <AboutTeam />
                     <DigitalAgencyBrand />
                   {/* <AboutTestimonial /> */}
                    <DigitalAgencyCTA />
                </RootLayout>
            </main>
        </div>
    );
};

export default About;

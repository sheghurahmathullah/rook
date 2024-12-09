import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import StartupAgencyHero from "@/components/hero/StartupAgencyHero";
import StartupAgencyWorkflow from "@/components/workflow/StartupAgencyWorkflow";
import StartupAgencyFeature from "@/components/feature/StartupAgencyFeature";
import StartupAgencyService from "@/components/service/StartupAgencyService";
import StartupAgencyFaq from "@/components/faq/StartupAgencyFaq";
import StartupAgencyPortfolio from "@/components/portfolio/StartupAgencyPortfolio";
import StartupAgencyBrand from "@/components/brand/StartupAgencyBrand";
import StartupAgencyTestimonial from "@/components/testimonial/StartupAgencyTestimonial";
import StartupAgencySolution from "@/components/solution/StartupAgencySolution";
import StartupAgencyBlog from "@/components/blog/StartupAgencyBlog";
import StartupAgencyCTA from "@/components/cta/StartupAgencyCTA";
import NavDataRook from "@/data/navDataRook.json"

const StartupAgency = () => {
  return (
    <div>
      <Head>
        <title>Rook - Intelligent Business Solutions</title>
        <meta name="description" content="Empowering entrepreneurs with user-friendly, sustainable, and innovative AI-driven solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header1" footer="footer-britain"  defaultMode="dark" customNavData={NavDataRook}>
          <StartupAgencyHero
            title={"Empowering\nBritain\nEntrepreneurs"}
            text="Discover Rook's bespoke Startup Solution revolutionising Britain businesses with user-friendly and sustainable AI-driven tools."
            anchor="Explore Our Products"
            image={"/assets/imgs/rook/britain/img.webp"}
          />
          <StartupAgencyWorkflow
            title="How We Work"
            subtitle="Tailored for Success"
            description="Navigate modern business complexities with seamless collaboration, adaptable networking, and global exposure strategies."
            title1="Local Collaboration"
            description1="Collaborate seamlessly with our team, prioritizing teamwork for shared success."
            title2="Adaptable Networking"
            description2="Stay ahead with adaptive networking, leveraging the latest technologies for visibility."
            title3="Global Exposure"
            description3="Extend your reach globally with brand strategy tools, effortlessly navigating regulatory challenges."
          />
          <StartupAgencyFeature
            subtitle="Innovative Solutions for the UK"
            title="Crafting Intelligent Solutions for Britain Businesses"
            featureTitle="Next-Gen Products for the UK Market"
            featureDescription="Redefine the future of Britain business with user-friendly designs and sustainable AI solutions tailored for the UK business landscape."
            additionalDescription="Navigate regulatory challenges in the UK effortlessly, attributing success to understanding the nuances of the Britain market and pushing boundaries."
            features={[
              {
                title: "User-Centric Design for the UK",
                description: "Craft seamless experiences with designs focused on user engagement and satisfaction in the UK."
              },
              {
                title: "Sustainable Solutions for the UK",
                description: "Contribute to a greener future in the UK with AI-driven tools focused on reducing carbon emissions and environmental impact."
              }
            ]}
          />
          <StartupAgencyPortfolio />
          <StartupAgencyBrand
            title="Trusted by Leading Brands"
          />
          {/* <StartupAgencyBlog /> */}
          <StartupAgencyCTA />
        </RootLayout>
      </main>

    </div>
  );
};

export default StartupAgency;
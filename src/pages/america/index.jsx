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
import NavDataRook from "@/data/navDataRook.json";

const StartupAgency = () => {
  return (
    <div>
      <Head>
        <title>Rook - Intelligent Business Solutions</title>
        <meta name="description" content="Empowering entrepreneurs with user-friendly, sustainable, and innovative AI-driven solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header1"  defaultMode="dark" footer="footer-america" customNavData={NavDataRook}>
          <StartupAgencyHero
            title={"Empowering\nAmerican\nEntrepreneurs"}
            text="Explore Rook's Startup Solution - transforming American businesses with cutting-edge, user-friendly, and sustainable AI-driven tools."
            anchor="Explore Our Products"
            image={"/assets/imgs/rook/america/img.webp"}
          />
          <StartupAgencyWorkflow
            title="How We Work"
            subtitle="Tailored for Success"
            description="Navigate the complexities of modern business with seamless collaboration, adaptable networking, and strategies for global exposure."
            title1="Local Collaboration"
            description1="Effortlessly collaborate with our team, emphasizing teamwork for shared success and tailored solutions for the US market."
            title2="Adaptable Networking"
            description2="Stay ahead in the market with adaptive networking, leveraging the latest technologies for increased visibility and innovation."
            title3="Global Exposure"
            description3="Extend your business globally with brand strategy tools, expertly navigating regulatory challenges in the US landscape."
          />
          <StartupAgencyFeature
            subtitle="Innovative Solutions for America"
            title="Crafting Intelligent Solutions for American Businesses"
            featureTitle="Next-Gen Products for the US Market"
            featureDescription="Redefine the future of American business with cutting-edge designs and sustainable AI solutions tailored for the US business landscape."
            additionalDescription="Navigate regulatory challenges in the US effortlessly, attributing success to understanding American market nuances and pushing boundaries."
            features={[
              {
                title: "User-Centric Design for America",
                description: "Craft seamless experiences with designs focused on user engagement and satisfaction in the US."
              },
              {
                title: "Sustainable Solutions for America",
                description: "Contribute to a greener future in America with AI-driven tools focused on reducing carbon emissions and environmental impact."
              }
            ]}
          />
          <StartupAgencyPortfolio />
          <StartupAgencyBrand
            title="Trusted by Leading US Brands"
          />
          {/* <StartupAgencyBlog /> */}
          <StartupAgencyCTA />
        </RootLayout>
      </main>
    </div>

  );
};

export default StartupAgency;

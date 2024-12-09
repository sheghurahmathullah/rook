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
        <title>Rook - Smart Solutions for Entrepreneurs</title>
        <meta name="description" content="Empowering entrepreneurs with AI-driven solutions for business success." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header1" footer="footer-emirates"  defaultMode="dark" customNavData={NavDataRook}>
          <StartupAgencyHero
            title={"Empowering\nEmirati\nEntrepreneurs"}
            text="Experience the magic of Rook's Startup Solution. Our AI-driven tools are tailor-made to revolutionise your business in the UAE, ensuring efficiency, innovation, and success."
            anchor="Explore Our Products"
            image={"/assets/imgs/rook/emirates/landing.webp"}
          />
          <StartupAgencyWorkflow
            title="How We Work"
            subtitle="Tailored for Success"
            description="Navigate the complexities of modern business with our innovative solutions. From seamless collaboration to adaptable networking, we empower you at every step."
            title1="Local Collaboration"
            description1="Collaborate seamlessly with our team, ensuring your ideas align with market dynamics. We prioritize teamwork to achieve success together."
            title2="Adaptable Networking"
            description2="Stay ahead in the market with our adaptive networking strategies. We leverage the latest technologies to keep your business visible and relevant."
            title3="Global Exposure"
            description3="Extend your reach beyond borders. Our brand strategy tools help you gain exposure on a global scale, navigating regulatory challenges effortlessly."
          />
          <StartupAgencyFeature
            subtitle="Innovative Solutions for the UAE"
            title="Crafting Intelligent Solutions for Emirati Businesses"
            featureTitle="Next-Gen Products for the UAE Market"
            featureDescription="Redefine the future of Emirati business with user-friendly designs and sustainable AI solutions tailored for the UAE business landscape."
            additionalDescription="Navigate regulatory challenges in the UAE effortlessly, attributing success to understanding Emirati market nuances and pushing boundaries."
            features={[
              {
                title: "User-Centric Design for the UAE",
                description: "Craft seamless experiences with designs focused on user engagement and satisfaction in the UAE."
              },
              {
                title: "Sustainable Solutions for the UAE",
                description: "Contribute to a greener future in the UAE with AI-driven tools focused on reducing carbon emissions and environmental impact."
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
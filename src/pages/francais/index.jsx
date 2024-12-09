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
        <title>Rook - Solutions Intelligentes pour les Entrepreneurs</title>
        <meta name="description" content="Autonomisez les entrepreneurs avec des solutions innovantes et durables alimentées par l'IA." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header1" footer="footer-francais"  defaultMode="dark" customNavData={NavDataRook}>
          <StartupAgencyHero
            title={"Dynamiser les\nentrepreneurs\nfrançais"}
            text="Découvrez la solution de démarrage de Rook - révolutionnez vos entreprises françaises avec des outils alimentés par l'IA, conviviaux et durables."
            anchor="Explorez Nos Produits"
            image={"/assets/imgs/rook/francais/img.webp"}
          />
          <StartupAgencyWorkflow
            title="Comment Nous Travaillons"
            subtitle="Adapté pour le Succès"
            description="Naviguez dans les complexités du monde des affaires modernes avec une collaboration transparente, un réseautage adaptable et des stratégies d'exposition mondiale."
            title1="Collaboration Locale"
            description1="Collaborez sans effort avec notre équipe, mettant l'accent sur le travail d'équipe pour un succès partagé et des solutions adaptées au marché français."
            title2="Réseautage Adaptable"
            description2="Restez en avance sur le marché avec des stratégies de réseautage adaptatives, exploitant les dernières technologies pour une visibilité accrue et l'innovation."
            title3="Exposition Globale"
            description3="Étendez votre entreprise à l'échelle mondiale avec des outils de stratégie de marque, naviguant habilement à travers les défis réglementaires dans le paysage français."
          />
          <StartupAgencyFeature
            subtitle="Solutions Innovantes pour la France"
            title="Création de Solutions Intelligentes pour les Entreprises Françaises"
            featureTitle="Produits de Dernière Génération pour le Marché Français"
            featureDescription="Redéfinissez l'avenir des entreprises françaises avec des designs conviviaux et des solutions d'IA durables, adaptées au marché français."
            additionalDescription="Naviguez sans effort à travers les défis réglementaires en France, attribuant le succès à la compréhension des subtilités du marché français et à la repousse des limites."
            features={[
              {
                title: "Design Intuitif pour la France",
                description: "Créez des expériences sans couture avec des designs axés sur l'engagement utilisateur en France."
              },
              {
                title: "Solutions Durables pour la France",
                description: "Contribuez à un avenir plus vert en France avec des outils alimentés par l'IA axés sur la réduction des émissions de carbone et de l'impact environnemental."
              }
            ]}
          />
          <StartupAgencyPortfolio />
          <StartupAgencyBrand
            title="Fait Confiance par les Grandes Marques Françaises"
          />
          {/* <StartupAgencyBlog /> */}
          <StartupAgencyCTA />
        </RootLayout>
      </main>
    </div>

  );
};

export default StartupAgency;

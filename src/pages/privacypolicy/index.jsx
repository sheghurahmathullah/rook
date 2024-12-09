import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import BlogDetails1 from "../privacypolicy/details";
import navData from "@/data/navDataDomains.json";
import customThumbFooter from "../../../public/assets/imgs/rook/footer.webp"

const TermsAndConditions = () => {
  return (
    <>
      <Head>
        <title>Blog Details Dark</title>
        <meta name="description" content="Blog Details Dark Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header1" footer="footer3" defaultMode="dark" customNavData={navData} customThumbFooter={customThumbFooter}>
          <BlogDetails1 />
        </RootLayout>
      </main>
    </>
  );
};

export default TermsAndConditions;

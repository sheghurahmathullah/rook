import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import BlogDetails1 from "./details";
import navData from "@/data/navDataDomains.json";
import customThumbFooter from "../../../public/assets/imgs/rook/footer.webp"

const CancellationPolicy = () => {
  return (
    <>
      <Head>
        <title>Cancelation Policy</title>
        <meta name="description" content="Blog Details Dark Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header1" footer="footer5" defaultMode="dark" customNavData={navData} customThumbFooter={customThumbFooter}>
          <BlogDetails1 />
        </RootLayout>
      </main>
    </>
  );
};

export default CancellationPolicy;

import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import Error1 from "@/components/error/Error1";
import navData from "@/data/navDataRook.json";

const Error = () => {
  return (
    <>
      <Head>
        <title>Rook Fellows - Best Technology & Digital Marketing Consultancy Company</title>
        <meta name="description" content="Rook Fellows is the creative and digital agency of choice for the world's largest brands. " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header1" footer="none" defaultMode="dark" customNavData={navData}>
          <Error1 />
        </RootLayout>
      </main>
    </>
  );
};

export default Error;

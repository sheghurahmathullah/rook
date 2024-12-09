import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        ></link>

        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="author" content="Rook" />
        {/* <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=5" /> */}
        <meta name="theme-color" content="#000000" />
        <link rel="manifest" href="/assets/favicon/site.webmanifest" />
        {/* favicon icon */}
        <link rel="shortcut icon" href="/assets/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/favicon/apple-touch-icon.webp"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/favicon/favicon-32x32.webp"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/favicon/favicon-16x16.webp"
        />

        <link rel="stylesheet" href="/modal/modal.css" />
        <Script src="/modal/modal.js" />

        <meta
          name="description"
          content="Rook Fellows: Revolutionizing Digital Marketing with Cutting-Edge Solutions. From SEO to social media, unleash the power of automation for unparalleled efficiency and success in the digital landscape."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.fellows.rookhq.com" />
        <meta name="twitter:card" content="#WeGrowTogether" />
        <meta name="twitter:site" content="@RookFellows" />
        <meta
          name="twitter:title"
          content="Rook Fellows - Empower your business with innovative digital solutions"
        />
        <meta
          name="twitter:description"
          content="Empowering your business and elevate your online presence with innovative digital solutions powered by Rook Fellows."
        />
        <meta
          name="twitter:image"
          content="https://twitter.com/RookFellows/photo"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Rook Fellows - Empower your business with innovative digital solutions"
        />
        <meta
          property="og:description"
          content="Empowering your business and elevate your online presence with innovative digital solutions powered by Rook Fellows."
        />
        <meta
          property="og:image"
          content="https://fellows.rookhq.com/assets/favicon/favicon.ico"
        />
        <meta property="og:url" content="https://fellows.rookhq.com" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

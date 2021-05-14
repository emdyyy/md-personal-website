import "tailwindcss/tailwind.css";
import Head from "next/head";

function PersonalWebsite({ Component, pageProps }: any) {
  return (
    <>
      <Head>
        <link href="/fonts/gilroy-extrabold.otf" rel="stylesheet" />
        <link href="/fonts/gilroy-light.otf" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default PersonalWebsite;

import Head from "next/head";
import Navbar from "../components/navbar";
import Logo from "../components/logo";
import Footer from "../components/footer";

const Page = (props: any) => {
  const { title, desc, children } = props;
  return (
    <>
      <Head>
        <title>Mateusz Dettlaff - {title}</title>
        <meta name="description" content={desc} />
      </Head>
      <Logo />
      <Navbar {...props} />
      {children}
      <Footer />
    </>
  );
};
export default Page;

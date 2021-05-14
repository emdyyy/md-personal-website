import Head from "next/head";
import Image from "next/image";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Mateusz Dettlaff - Home</title>
        <meta name="description" content="Mateusz Dettlaff Personal Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-40 w-40 relative">
        <Image
          src={"/images/md.png"}
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Home;

import Page from "../components/page";
import Image from "next/image";

const Home = () => {
  return (
    <Page title="Home" desc="Mateusz Dettlaff Personal Website">
      <main className="grid place-content-center md:flex md:flex-row-reverse h-screen">
        <div className="m-auto md:mr-auto md:ml-0 h-64 w-64 relative">
          <Image
            src="/images/md.png"
            alt="Picture of the author"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
        <p className="text-center text-primary font-gilroy mt-5 text-lg w-2/3 md:w-64 ml-auto mr-auto md:m-auto md:mr-10">
          I'm Mateusz Dettlaff, a blog owner, developer & aspired student
        </p>
      </main>
    </Page>
  );
};

export default Home;

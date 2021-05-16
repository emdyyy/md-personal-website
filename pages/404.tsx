import Page from "../components/page";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <Page
      title="404"
      desc="Oops I couldn't find what you're looking for"
      portfolioHidden={true}
      contactHidden={true}
      blogHidden={true}
    >
      <main className="min-h-screen grid place-content-center">
        <h1 className="font-gilroy font-bold text-center text-3xl">
          Oops I couldn't find what you're looking for
        </h1>
        <Link href="/">
          <a className="border-primary border-2 p-1 w-1/2 lg:w-1/3 mt-5 ml-auto mr-auto font-bold active:bg-primary focus:bg-primary focus:outline-none focus:text-white disabled:border-secondary disabled:text-secondary text-center font-gilroy">
            back to home
          </a>
        </Link>
      </main>
    </Page>
  );
};
export default NotFoundPage;

import Page from "../components/page";

const Blog = () => {
  return (
    <Page title="Blog" desc="See my latest news" blogHidden={true}>
      <main className="min-h-screen grid place-content-center">
        <h1 className="font-gilroy font-bold text-center text-3xl">
          coming soon...
        </h1>
      </main>
    </Page>
  );
};
export default Blog;

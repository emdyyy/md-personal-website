import Link from "next/link";

const Navbar = (props: any) => {
  const { contactHidden, portfolioHidden, blogHidden } = props;
  return (
    <nav className="fixed right-0">
      <ul className="flex md:flex-col space-x-7 m-3 font-gilroy font-bold text-primary text-lg text-right md:h-screen md:justify-center md:space-y-20 md:text-xl md:mr-10">
        <li>
          <Link href="/contact">
            <a
              className={
                "hover:text-primary-light transition-all ease-in-out duration-400" +
                  contactHidden && contactHidden !== undefined
                  ? " hidden"
                  : ""
              }
            >
              say hi.
            </a>
          </Link>
        </li>
        <li>
          <Link href="/portfolio">
            <a
              className={
                "hover:text-primary-light transition-all ease-in-out duration-400" +
                  portfolioHidden && portfolioHidden !== undefined
                  ? " hidden"
                  : ""
              }
            >
              work.
            </a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a
              className={
                "hover:text-primary-light transition-all ease-in-out duration-400" +
                  blogHidden && blogHidden !== undefined
                  ? " hidden"
                  : ""
              }
            >
              blog.
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;

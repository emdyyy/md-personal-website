import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed inset-y-0 right-0">
      <ul className="flex md:flex-col space-x-7 m-3 font-gilroy font-bold text-primary text-lg text-right md:h-screen md:justify-center md:space-y-20 md:text-xl md:mr-10">
        <li>
          <Link href="/contact">
            <a className="hover:text-primary-light transition-all ease-in-out duration-400">
              say hi.
            </a>
          </Link>
        </li>
        <li>
          <Link href="/portfolio">
            <a className="hover:text-primary-light transition-all ease-in-out duration-400">
              work.
            </a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a className="hover:text-primary-light transition-all ease-in-out duration-400">
              blog.
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;

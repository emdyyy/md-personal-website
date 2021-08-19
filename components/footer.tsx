const Footer = () => {
  return (
    <footer>
      <nav className="fixed inset-x-0 bottom-0 w-1/4">
        <ul className="flex space-x-7 m-3 font-gilroy text-secondary text-lg">
          <li>
            <a
              href="https://twitter.com/matdettlaff"
              className="hover:text-primary transition-all ease-in-out duration-400"
            >
              twit
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/mateusz-dettlaff-9381a21a7/"
              className="hover:text-primary transition-all ease-in-out duration-400"
            >
              linkd
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/em.dy7/"
              className="hover:text-primary transition-all ease-in-out duration-400"
            >
              insta
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};
export default Footer;

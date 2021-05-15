import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="h-10 w-10 fixed m-3 ">
      <Link href="/">
        <a>
          <Image
            src="/images/md-logo.svg"
            alt="MD Logo"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </a>
      </Link>
    </div>
  );
};
export default Logo;

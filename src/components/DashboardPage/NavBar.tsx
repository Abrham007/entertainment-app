import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <header className="lg:absolute lg:h-full  md:px-[25px] md:pt-[23px] lg:p-8">
      <div className="max-w-full h-[56px] md:h-[72px] lg:w-[96px] lg:h-full lg:max-h-[960px] flex lg:flex-col lg:gap-[75px] justify-between items-center px-4 md:p-6 lg:px-8 lg:py-9  bg-SemiDarkBlue md:rounded-[10px] lg:roudned-[20px]">
        <Image
          src="/images/logo.svg"
          alt="red movie symbol"
          width={33}
          height={27}
          className="h-5 lg:h-6 lg:w-8"
        ></Image>
        <nav>
          <ul className="w-[133px] lg:w-[20px] lg:h-[200px] flex lg:flex-col justify-between">
            <li>
              <Link href="/">
                <Image
                  src={"/images/icon-nav-home.svg"}
                  alt=""
                  width={20}
                  height={20}
                  className="h-4 md:h-5"
                ></Image>
              </Link>
            </li>
            <li>
              <Link href="/">
                <Image
                  src={"/images/icon-nav-movies.svg"}
                  alt=""
                  width={20}
                  height={20}
                  className="h-4 md:h-5"
                ></Image>
              </Link>
            </li>
            <li>
              <Link href="/">
                <Image
                  src={"/images/icon-nav-tv-series.svg"}
                  alt=""
                  width={20}
                  height={20}
                  className="h-4 md:h-5"
                ></Image>
              </Link>
            </li>
            <li>
              <Link href="/">
                <Image
                  src={"/images/icon-nav-bookmark.svg"}
                  alt=""
                  width={20}
                  height={20}
                  className="h-4 md:h-5"
                ></Image>
              </Link>
            </li>
          </ul>
        </nav>
        <Image
          src="/images/image-avatar.png"
          alt="profile avatar"
          width={80}
          height={80}
          className="w-6 h-6 md:w-8 md:h-8 border border-solid border-White rounded-full lg:mt-auto"
        ></Image>
      </div>
    </header>
  );
}

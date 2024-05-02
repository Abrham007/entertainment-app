import Image from "next/image";

export default function SearchBar() {
  return (
    <div className="w-full flex gap-6 items-center justify-center">
      <button>
        <Image
          src="/images/icon-search.svg"
          alt="search icon"
          width={32}
          height={32}
          className="w-6 h-6 md:w-8 md:h-8"
        ></Image>
      </button>
      <input
        type="text"
        placeholder="Search for movies or TV series"
        className="w-full text-[1rem] font-normal md:text-xl text-White bg-transparent outline-none border-none"
      />
    </div>
  );
}

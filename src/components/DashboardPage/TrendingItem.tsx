import Image, { getImageProps } from "next/image";

export default function TrendingItem() {
  const common = { alt: "" };

  const {
    props: { srcSet: tablet },
  } = getImageProps({
    ...common,
    width: 940,
    height: 460,
    src: "/images/thumbnails/beyond-earth/trending/large.jpg",
  });

  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    width: 480,
    height: 280,
    src: "/images/thumbnails/beyond-earth/trending/small.jpg",
  });
  return (
    <li className="max-w-min">
      <figure className="relative w-[240px] h-[140px] md:w-[470px] md:h-[230px] rounded-lg">
        <picture>
          <source media="(min-width: 768px)" srcSet={tablet} />
          <img {...rest} alt="" className="rounded-lg" />
        </picture>
        <div className="absolute top-2 right-2 md:top-4 md:right-6 w-8 h-8 flex justify-center items-center bg-[#10141E50] rounded-full">
          <Image
            src="/images/icon-bookmark-empty.svg"
            alt=""
            width={12}
            height={14}
          ></Image>
        </div>
        <figcaption className="absolute  bottom-4 left-4 md:bottom-6 md:left-6 flex flex-col gap-[5px] md:gap-[6px]">
          <div className="flex gap-2 ">
            <p className="text-[0.75rem] md:texl-base text-White  opacity-75">
              2019
            </p>
            <p className="text-[0.75rem] md:texl-base text-White  opacity-75">
              .
            </p>
            <p className="flex gap-[6px]">
              <Image
                src="/images/icon-category-movie.svg"
                alt=""
                width={12}
                height={12}
              ></Image>
              <span className="text-[0.75rem] md:texl-base text-White  opacity-75">
                Movie
              </span>
            </p>
            <p className="text-[0.75rem] md:texl-base text-White  opacity-75">
              .
            </p>
            <p className="text-[0.75rem] md:texl-base text-White  opacity-75">
              E
            </p>
          </div>
          <h3 className="text-base md:text-xl text-White">Beyond Earth</h3>
        </figcaption>
      </figure>
    </li>
  );
}

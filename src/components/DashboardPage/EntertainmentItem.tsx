import Image, { getImageProps } from "next/image";

export default function EntertainmentItem() {
  const common = { alt: "" };
  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    width: 560,
    height: 348,
    src: "/images/thumbnails/the-great-lands/regular/large.jpg",
  });

  const {
    props: { srcSet: tablet },
  } = getImageProps({
    ...common,
    width: 440,
    height: 280,
    src: "/images/thumbnails/the-great-lands/regular/medium.jpg",
  });

  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    width: 328,
    height: 220,
    src: "/images/thumbnails/the-great-lands/regular/small.jpg",
  });
  return (
    <li className="max-w-min">
      <figure className="max-w-min flex flex-col gap-2">
        <div className="relative w-[164px] h-[110px] md:w-[220px] md:h-[140px] lg:w-[280px] lg:h-[174px] rounded-lg">
          <picture>
            <source media="(min-width: 1020px)" srcSet={desktop} />
            <source media="(min-width: 768px)" srcSet={tablet} />
            <img {...rest} alt="" className="rounded-lg" />
          </picture>
          <div className="absolute top-2 right-2 md:top-4 md:right-4 w-8 h-8 flex justify-center items-center bg-[#10141E50] rounded-full">
            <Image
              src="/images/icon-bookmark-empty.svg"
              alt=""
              width={12}
              height={14}
            ></Image>
          </div>
        </div>
        <figcaption className="flex flex-col gap-[5px]">
          <div className="flex gap-[6px] md:gap-2">
            <p className="text-[0.6875rem] md:texl-sm text-White  opacity-75">
              2019
            </p>
            <p className="text-[0.6875rem] md:texl-sm text-White  opacity-75">
              .
            </p>
            <p className="flex gap-1">
              <Image
                src="/images/icon-category-movie.svg"
                alt=""
                width={12}
                height={12}
              ></Image>
              <span className="text-[0.6875rem] md:texl-sm text-White  opacity-75">
                Movie
              </span>
            </p>
            <p className="text-[0.6875rem] md:texl-sm text-White  opacity-75">
              .
            </p>
            <p className="text-[0.6875rem] md:texl-sm text-White  opacity-75">
              E
            </p>
          </div>
          <h3 className="text-[0.875rem] md:text-lg text-White">
            The Great Lands
          </h3>
        </figcaption>
      </figure>
    </li>
  );
}

import EntertainmentItem from "@/components/DashboardPage/EntertainmentItem";
import SearchBar from "@/components/DashboardPage/SearchBar";
import TrendingItem from "@/components/DashboardPage/TrendingItem";

export default function DashboardPage() {
  return (
    <main className="pt-6 pl-4 md:pt-8 md:pl-6 lg:pt-16 lg:pl-0 lg:ml-[164px] flex flex-col gap-6 md:gap-8">
      <SearchBar></SearchBar>
      <section className="flex flex-col gap-6 md:gap-10">
        <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
          <h2 className="text-[1.25rem] md:text-xl3 tracking-[-0.0195rem] text-White">
            Trending
          </h2>
          <ul className="flex gap-4 md:gap-[29px] lg:gap-10 overflow-hidden">
            <TrendingItem></TrendingItem>
            <TrendingItem></TrendingItem>
            <TrendingItem></TrendingItem>
            <TrendingItem></TrendingItem>
          </ul>
        </div>
        <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
          <h2 className="text-[1.25rem] md:text-xl3 tracking-[-0.0195rem] text-White">
            Recommended for you
          </h2>
          <ul className="flex flex-wrap gap-4 md:gap-x-[29px] lg:gap-x-10 md:gap-y-6 lg:gap-y-8">
            <EntertainmentItem></EntertainmentItem>
            <EntertainmentItem></EntertainmentItem>
            <EntertainmentItem></EntertainmentItem>
            <EntertainmentItem></EntertainmentItem>
          </ul>
        </div>
      </section>
    </main>
  );
}

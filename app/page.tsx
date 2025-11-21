import CategoriesCard from "@/components/pages/home/categories-card";
import FeaturedBookCard from "@/components/pages/home/featured-book-card";
import MainHeroCard from "@/components/pages/home/main-hero-card";
import SearchExploreCard from "@/components/pages/home/search-explore-card";
import SpecialOfferCard from "@/components/pages/home/special-offer-card";
import TrendingBooksCard from "@/components/pages/home/trending-books-card";

export default function HomePage() {
  return (
    <div className="py-4 px-4 xl:px-0">
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <MainHeroCard />
        <FeaturedBookCard />
        <CategoriesCard />
        <SpecialOfferCard />
        <TrendingBooksCard />
        <SearchExploreCard />
      </div>
    </div>
  );
}

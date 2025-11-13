import FilterByCategory from "@/components/pages/shop/filter-by-category";
import FilterByFormat from "@/components/pages/shop/filter-by-format";
import FilterByLanguage from "@/components/pages/shop/filter-by-language";
import FilterByPrice from "@/components/pages/shop/filter-by-price";
import FilterByRating from "@/components/pages/shop/filter-by-rating";
import FilterSidebarHeader from "@/components/pages/shop/filter-sidebar-header";
import UtilFilter from "@/components/pages/shop/util-filter";

export default function FilterSidebar() {
  return (
    <aside className="basis-1/5 space-y-4">
      <FilterSidebarHeader />
      <UtilFilter />
      <FilterByCategory />
      <FilterByPrice />
      <FilterByLanguage />
      <FilterByFormat />
      <FilterByRating />
    </aside>
  );
}

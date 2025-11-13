import FilterItem from "@/components/pages/shop/filter-item";
import FilterWrapper from "@/components/pages/shop/filter-wrapper";

export default function UtilFilter() {
  return (
    <FilterWrapper value="other" label="Others">
      <FilterItem label="Bestsellers" inStock={20} />
      <FilterItem label="New arrivals" inStock={20} />
      <FilterItem label="Sales" inStock={20} />
      <FilterItem label="Availability" inStock={20} />
    </FilterWrapper>
  );
}

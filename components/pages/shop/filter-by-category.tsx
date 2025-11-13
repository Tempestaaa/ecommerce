import FilterItem from "@/components/pages/shop/filter-item";
import FilterWrapper from "@/components/pages/shop/filter-wrapper";

const categories = [
  { label: "Laptop & PC", inStock: 2 },
  { label: "Mobile & Tablets", inStock: 5 },
  { label: "Televisions", inStock: 9 },
  { label: "Games & Videos", inStock: 10 },
  { label: "Home Appliances", inStock: 3 },
];

export default function FilterByCategory() {
  return (
    <FilterWrapper value="category" label="Category">
      {categories.map((item) => (
        <FilterItem
          key={item.label}
          label={item.label}
          inStock={item.inStock}
        />
      ))}
    </FilterWrapper>
  );
}

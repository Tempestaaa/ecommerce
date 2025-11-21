import FilterItem from "@/components/pages/shop/filter-item";
import FilterWrapper from "@/components/pages/shop/filter-wrapper";

const categories = [
  { label: "Fiction", inStock: 245 },
  { label: "Mystery & Thriller", inStock: 187 },
  { label: "Science Fiction", inStock: 132 },
  { label: "Fantasy", inStock: 164 },
  { label: "Romance", inStock: 208 },
  { label: "Non‑fiction", inStock: 96 },
  { label: "Self‑Help & Personal Growth", inStock: 74 },
  { label: "Biography & Memoir", inStock: 51 },
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

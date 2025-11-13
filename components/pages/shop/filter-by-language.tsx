import FilterItem from "@/components/pages/shop/filter-item";
import FilterWrapper from "@/components/pages/shop/filter-wrapper";
import { Badge } from "@/components/ui/badge";

const languages = [
  { label: "Vietnamese", value: "VN", inStock: 5 },
  { label: "English", value: "EN", inStock: 5 },
  { label: "Japanese", value: "JP", inStock: 5 },
];

export default function FilterByLanguage() {
  return (
    <FilterWrapper value="language" label="Language">
      {languages.map((item) => (
        <FilterItem
          key={item.value}
          label={item.label}
          inStock={item.inStock}
        />
      ))}
    </FilterWrapper>
  );
}

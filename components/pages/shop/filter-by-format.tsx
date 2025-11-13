import FilterItem from "@/components/pages/shop/filter-item";
import FilterWrapper from "@/components/pages/shop/filter-wrapper";

const formats = [
  { label: "Paperback", value: "paperback", inStock: 5 },
  { label: "Hardcover", value: "hardcover", inStock: 5 },
  { label: "Audiobook", value: "audiobook", inStock: 5 },
  { label: "Ebook", value: "ebook", inStock: 5 },
];

export default function FilterByFormat() {
  return (
    <FilterWrapper value="format" label="Format">
      {formats.map((item) => (
        <FilterItem
          key={item.value}
          label={item.label}
          inStock={item.inStock}
        />
      ))}
    </FilterWrapper>
  );
}

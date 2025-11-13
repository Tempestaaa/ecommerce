import FilterWrapper from "@/components/pages/shop/filter-wrapper";
import { Rating, RatingButton } from "@/components/ui/shadcn-io/rating";

const ratings = [5, 4, 3, 2, 1];

export default function FilterByRating() {
  return (
    <FilterWrapper value="rating" label="Rating">
      <Rating defaultValue={0}>
        {Array.from({ length: 5 }).map((_, index) => (
          <RatingButton key={index} />
        ))}
      </Rating>
    </FilterWrapper>
  );
}

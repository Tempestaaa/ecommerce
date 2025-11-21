import FilterWrapper from "@/components/pages/shop/filter-wrapper";
import { Badge } from "@/components/ui/badge";
import { Rating, RatingButton } from "@/components/ui/shadcn-io/rating";

const ratingOptions = [
  { value: 5, count: "210+" },
  { value: 4, count: "480+" },
  { value: 3, count: "950+" },
  { value: 2, count: "1.3k+" },
  { value: 1, count: "2k+" },
];

export default function FilterByRating() {
  return (
    <FilterWrapper value="rating" label="Rating">
      {ratingOptions.map((option) => (
        <div
          key={option.value}
          className="flex items-center justify-between py-1 group"
        >
          <Rating defaultValue={option.value} readOnly>
            {Array.from({ length: 5 }).map((_, index) => (
              <RatingButton
                key={index}
                className="text-muted-foreground group-hover:text-yellow-500"
              />
            ))}
          </Rating>

          <Badge
            variant="secondary"
            className="group-hover:bg-foreground group-hover:text-background"
          >
            {option.count}
          </Badge>
        </div>
      ))}
    </FilterWrapper>
  );
}

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemHeader,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { Star, ShoppingCart } from "lucide-react";
import Image from "next/image";

type BookCardProps = {
  title?: string;
  author?: string;
  price?: string;
  originalPrice?: string;
  badgeText?: string;
  imageSrc?: string;
};

export default function BookCard({
  title = "The Art of Storytelling",
  author = "Jane Doe",
  price = "$15.00",
  originalPrice = "$20.00",
  badgeText = "Bestseller",
  imageSrc = "/image.jpg",
}: BookCardProps) {
  return (
    <Item className="group p-0 gap-3 rounded-xl overflow-hidden border bg-card hover:shadow-md transition-shadow">
      <ItemMedia variant="image" className="relative h-64 w-full rounded-none">
        <Image
          src={imageSrc}
          alt={`${title} cover`}
          fill
          className="object-cover"
        />

        <div className="absolute top-2 left-2 flex flex-col gap-1">
          <Badge className="bg-primary text-primary-foreground shadow-xs shadow-background">
            <span className="text-xs font-medium">{badgeText}</span>
          </Badge>
        </div>

        <div className="pointer-events-none absolute inset-0 flex items-end justify-end p-3">
          <Button
            variant="default"
            size="sm"
            className="pointer-events-auto rounded-full px-4 flex items-center gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-xs shadow-background"
            aria-label="Add to cart"
          >
            <ShoppingCart className="size-4" />
            <span className="text-xs font-medium">Add to cart</span>
          </Button>
        </div>
      </ItemMedia>

      <ItemContent className="flex-row items-center gap-3 px-3 pb-3 pt-2">
        <ItemHeader className="flex-col items-start gap-1 flex-1 min-w-0">
          <ItemTitle className="text-sm font-semibold line-clamp-2">
            {title}
          </ItemTitle>

          <ItemDescription className="text-xs text-muted-foreground">
            {author}
          </ItemDescription>

          <div className="mt-1 flex items-center gap-1 text-xs text-yellow-500">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                className="size-3 fill-yellow-500 text-yellow-500"
              />
            ))}
            <span className="ml-1 text-xs text-muted-foreground">4.8</span>
          </div>

          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-base font-semibold text-foreground">
              {price}
            </span>
            {originalPrice && (
              <span className="text-xs text-muted-foreground line-through">
                {originalPrice}
              </span>
            )}
          </div>
        </ItemHeader>
      </ItemContent>
    </Item>
  );
}

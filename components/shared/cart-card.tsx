import { Button } from "@/components/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemHeader,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { Badge } from "@/components/ui/badge";
import { Minus, Plus, Trash } from "lucide-react";
import Image from "next/image";

type CartCardProps = {
  title?: string;
  author?: string;
  format?: string;
  price?: number;
  quantity?: number;
  imageSrc?: string;
};

export default function CartCard({
  title = "The Book Thief",
  author = "Markus Zusak",
  format = "Hardcover",
  price = 18,
  quantity = 2,
  imageSrc = "/image.jpg",
}: CartCardProps) {
  const subtotal = price * quantity;

  return (
    <Item className="relative flex gap-3 rounded-xl border bg-card/90 p-3 shadow-sm">
      <ItemMedia
        variant="image"
        className="relative h-20 w-16 overflow-hidden rounded-lg border bg-muted"
      >
        <Image
          src={imageSrc}
          alt={`${title} cover`}
          fill
          className="object-cover"
        />
        <Badge className="absolute -right-2 top-2 rounded-full bg-primary text-[10px]">
          {quantity}x
        </Badge>
      </ItemMedia>

      <ItemContent className="flex-1 space-y-2">
        <ItemHeader className="flex-col items-start gap-1">
          <ItemTitle className="text-sm font-semibold leading-tight line-clamp-2">
            {title}
          </ItemTitle>
          <ItemDescription className="text-xs text-muted-foreground">
            {author}
          </ItemDescription>
        </ItemHeader>

        <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
          <Badge variant="secondary" className="text-[10px] px-2 py-0.5">
            {format}
          </Badge>
          <span className="text-foreground font-semibold">
            ${price.toFixed(2)}
          </span>
          <span>per item</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 rounded-full border px-2 py-1 text-muted-foreground">
            <Button
              variant="ghost"
              size="icon-sm"
              className="size-6 rounded-full"
            >
              <Minus className="size-4" />
            </Button>

            <span className="w-5 text-center text-xs font-semibold text-foreground">
              {quantity}
            </span>

            <Button
              variant="ghost"
              size="icon-sm"
              className="size-6 rounded-full"
            >
              <Plus className="size-4" />
            </Button>
          </div>

          <div className="text-right">
            <p className="text-xs text-muted-foreground">Subtotal</p>
            <p className="text-sm font-semibold text-foreground">
              ${subtotal.toFixed(2)}
            </p>
          </div>
        </div>
      </ItemContent>

      <ItemActions className="absolute right-2 top-2">
        <Button variant="ghost" size="icon-sm" aria-label="Remove item">
          <Trash className="size-4 text-muted-foreground hover:text-destructive" />
        </Button>
      </ItemActions>
    </Item>
  );
}

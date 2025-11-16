import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemHeader,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "@/components/ui/item";
import { Flame, ShoppingCart } from "lucide-react";
import Image from "next/image";

export default function BookGrid() {
  return (
    <ul className="grid grid-cols-[repeat(auto-fill,minmax(14rem,1fr))] gap-4">
      {[...Array(12)].map((_, id) => (
        <Item key={id} className="p-0 gap-2">
          <ItemMedia
            variant="image"
            className="relative h-80 w-full rounded-none"
          >
            <Image src="/image.jpg" alt="Book's cover" fill />
            <div className="absolute top-2 left-2 flex flex-col gap-1">
              <Badge className="bg-red-600 text-foreground shadow-xs shadow-foreground">
                <Flame />
                <span>Hot</span>
              </Badge>
              <Badge className="bg-background text-foreground shadow-xs shadow-foreground">
                25% off
              </Badge>
            </div>
          </ItemMedia>

          <ItemContent className="flex-row items-center gap-2">
            <ItemHeader className="flex-col items-start gap-0">
              <ItemTitle className="text-base line-clamp-1">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tenetur nobis voluptas inventore similique beatae quidem
                eligendi sequi reprehenderit eius doloribus ducimus sapiente
                repellendus illum, error minus ut saepe, sit et?
              </ItemTitle>
              <ItemDescription className="flex items-center gap-2">
                <span className="text-foreground font-semibold">$15.00</span>
                <s className="text-xs">$20.00</s>
              </ItemDescription>
            </ItemHeader>

            <ItemSeparator
              orientation="vertical"
              className="h-8! w-px bg-muted"
            />

            <Button variant="ghost">
              <ShoppingCart />
            </Button>
          </ItemContent>
        </Item>
      ))}
    </ul>
  );
}

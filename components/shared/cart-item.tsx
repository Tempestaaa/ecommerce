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
import { Minus, Plus, Trash } from "lucide-react";
import Image from "next/image";

export default function CartItem() {
  return (
    <Item className="rounded-md border-2 border-muted p-2 gap-2 relative group">
      <ItemMedia variant="image" className="relative h-16 w-12">
        <Image src="/image.jpg" alt="Book's cover" fill />
      </ItemMedia>

      <ItemContent>
        <ItemHeader className="flex-col items-start gap-1">
          <ItemTitle className="font-bold line-clamp-1">Book name</ItemTitle>
          <ItemDescription>$10 x2</ItemDescription>

          <div className="flex items-center gap-2 *:size-3.5 *:cursor-pointer *:text-muted-foreground *:hover:text-foreground *:transition-colors *:duration-300">
            <Minus />
            <Plus />
          </div>
        </ItemHeader>
      </ItemContent>

      <ItemActions className="self-start">
        <Button variant="ghost" size="icon-sm">
          <Trash className="group-hover:text-red-600 transition-colors duration-300" />
        </Button>
      </ItemActions>
    </Item>
  );
}

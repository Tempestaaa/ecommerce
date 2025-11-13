import CartItem from "@/components/shared/cart-item";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default function CartItemList() {
  return (
    <section className="flex-1 overflow-y-auto p-4">
      <ScrollArea className="h-full">
        <ul className="h-full flex flex-col gap-2">
          {[...Array(8)].map((_, id) => (
            <CartItem key={id} />
          ))}
        </ul>

        <ScrollBar />
      </ScrollArea>
    </section>
  );
}

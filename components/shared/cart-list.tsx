import CartCard from "@/components/shared/cart-card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default function CartList() {
  return (
    <section className="flex-1 overflow-y-auto p-4">
      <ScrollArea className="h-full">
        <ul className="h-full flex flex-col gap-2">
          {[...Array(3)].map((_, id) => (
            <CartCard key={id} />
          ))}
        </ul>

        <ScrollBar />
      </ScrollArea>
    </section>
  );
}

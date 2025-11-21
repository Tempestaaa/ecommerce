import CartList from "@/components/shared/cart-list";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ArrowRight, ShoppingCart } from "lucide-react";

export default function CartButton() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm">
          <ShoppingCart />
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="gap-0">
        <SheetHeader>
          <SheetTitle className="text-xl font-bold">Shopping Cart</SheetTitle>
        </SheetHeader>

        <Separator />

        <CartList />

        <Separator />

        <SheetFooter className="flex md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col gap-1">
            <span className="text-muted-foreground text-xs">Total</span>
            <span className="font-bold text-base">$50.00</span>
          </div>

          <Button className="group/btn">
            <span className="">Checkout</span>
            <ArrowRight className="size-4 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

import CartItemList from "@/components/shared/cart-item-list";
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
        <CartItemList />
        <Separator />
        <SheetFooter className="flex md:flex-row justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-base font-bold">Subtotal:</span>
            <span>$50.0</span>
          </div>

          <Button>
            <span>Checkout</span>
            <ArrowRight />
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const menu = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "Contact", href: "/contact" },
  { name: "About", href: "/about" },
];

export default function SidebarMobile() {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden" asChild>
        <Button variant="ghost" size="sm">
          <Menu />
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="gap-0">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <Image src="/vercel.svg" alt="Logo" width={20} height={20} />
            <span className="font-bold uppercase text-xl">Lavenga</span>
          </SheetTitle>
        </SheetHeader>

        <Separator />

        <menu className="px-4 flex flex-col">
          {menu.map((item) => (
            <Link key={item.href} href={item.href} className="py-2">
              <SheetClose className="size-full flex items-start">
                {item.name}
              </SheetClose>
            </Link>
          ))}
        </menu>
      </SheetContent>
    </Sheet>
  );
}

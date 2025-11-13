import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import {
  Heart,
  KeyRound,
  LogOut,
  Settings2,
  ShoppingBag,
  User2,
} from "lucide-react";
import Link from "next/link";

const menu = [
  { icon: User2, label: "Profile", href: "/account/profile" },
  {
    icon: KeyRound,
    label: "Change password",
    href: "/account/change-password",
  },
  { icon: Heart, label: "Wishlist", href: "/account/wishlist" },
  { icon: ShoppingBag, label: "Orders", href: "/account/orders" },
  { icon: Settings2, label: "Settings", href: "/settings" },
];

export default function UserButton() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="sm">
          <User2 />
        </Button>
      </PopoverTrigger>

      <PopoverContent
        align="end"
        side="bottom"
        sideOffset={12}
        className="p-0 w-60"
      >
        <header className="flex items-center gap-4 py-2 px-4">
          <Avatar className="size-10">
            <AvatarImage />
            <AvatarFallback>VN</AvatarFallback>
          </Avatar>

          <div className="">
            <p className="font-bold">Username</p>
            <p className="text-muted-foreground text-xs">email@gmail.com</p>
          </div>
        </header>

        <Separator />

        <menu className="flex flex-col p-0.5">
          {menu.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="size-full py-2 px-4 rounded flex items-center gap-4 hover:bg-muted transition-colors duration-300"
              >
                <Icon className="size-4" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </menu>

        <Separator />

        <button className="px-4 py-2 flex items-center gap-4 w-full hover:bg-muted transition-colors duration-300">
          <LogOut className="size-4" />
          <span>Logout</span>
        </button>
      </PopoverContent>
    </Popover>
  );
}

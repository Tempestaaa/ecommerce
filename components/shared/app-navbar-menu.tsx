"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menu = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "Contact", href: "/contact" },
  { name: "About", href: "/about" },
];

export default function AppNavbarMenu() {
  const pathname = usePathname();
  const checkActive = (href: string) => href === pathname;

  return (
    <menu className="hidden md:flex">
      {menu.map((item) => (
        <Button
          key={item.href}
          variant={checkActive(item.href) ? "secondary" : "ghost"}
          size="sm"
          asChild
        >
          <Link href={item.href}>{item.name}</Link>
        </Button>
      ))}
    </menu>
  );
}

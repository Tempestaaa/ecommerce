import CartButton from "@/components/shared/cart-button";
import NotificationButton from "@/components/shared/notification-button";
import UserButton from "@/components/shared/user-button";

export default function AppNavbarButtons() {
  return (
    <ul className="flex items-center gap-2">
      <NotificationButton />
      <CartButton />
      <UserButton />
    </ul>
  );
}

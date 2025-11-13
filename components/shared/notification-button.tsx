import NotificationItem from "@/components/shared/notification-item";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Bell } from "lucide-react";

export default function NotificationButton() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="sm">
          <Bell />
        </Button>
      </PopoverTrigger>

      <PopoverContent
        align="end"
        side="bottom"
        sideOffset={12}
        className="p-0 max-w-xs md:max-w-md w-full"
      >
        <header className="flex items-center justify-between py-2 px-4">
          <h6 className="font-bold text-base">Notifications</h6>
          <Button variant="ghost" size="sm">
            See all
          </Button>
        </header>

        <Separator />

        <ScrollArea className="h-96 p-2">
          <ul className="flex flex-col gap-2">
            {[...Array(6)].map((_, id) => (
              <NotificationItem key={id} />
            ))}
          </ul>

          <ScrollBar />
        </ScrollArea>
      </PopoverContent>
    </Popover>
  );
}

import {
  Item,
  ItemContent,
  ItemDescription,
  ItemHeader,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import dayjs from "dayjs";
import { Dot } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function NotificationItem() {
  return (
    <Item className="p-2 hover:bg-muted transition-colors duration-300 ease-in-out">
      <ItemMedia variant="image">
        <Avatar className="size-10">
          <AvatarImage src="/image.jpg" />
          <AvatarFallback>VN</AvatarFallback>
        </Avatar>
      </ItemMedia>

      <ItemContent>
        <ItemHeader className="flex-col items-start gap-0">
          <ItemTitle>Notification title</ItemTitle>
          <ItemDescription>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
            repudiandae delectus ab laboriosam necessitatibus, consequatur nam?
          </ItemDescription>
          <div className="flex items-center text-xs text-muted-foreground mt-1">
            <span>{dayjs().format("HH:mm ddd, DD MMM YYYY")}</span>
            <Dot className="size-3.5" />
            <span>Unread</span>
          </div>
        </ItemHeader>
      </ItemContent>
    </Item>
  );
}

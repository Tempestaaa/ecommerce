import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Search } from "lucide-react";

export default function AppNavbarSearchbar() {
  return (
    <InputGroup className="h-8 hidden lg:flex">
      <InputGroupInput placeholder="Search..." className="cursor-pointer" />

      <InputGroupAddon>
        <Search />
      </InputGroupAddon>
    </InputGroup>
  );
}

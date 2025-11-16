import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

export default function Pagination() {
  return (
    <div className="flex items-center justify-center gap-2">
      <Button disabled variant="secondary">
        <ChevronsLeft />
      </Button>
      <Button disabled variant="secondary">
        <ChevronLeft />
      </Button>

      <InputGroup className="w-20 rounded">
        <InputGroupInput placeholder="1" className="text-center" />
        <InputGroupAddon align="inline-end" className="space-x-1.5">
          <span>/</span>
          <span>3</span>
        </InputGroupAddon>
      </InputGroup>

      <Button variant="secondary">
        <ChevronRight />
      </Button>
      <Button variant="secondary">
        <ChevronsRight />
      </Button>
    </div>
  );
}

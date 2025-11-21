import { Button } from "@/components/ui/button";
import { Grid, TextAlignJustify } from "lucide-react";

export default function ShopTools() {
  return (
    <div className="h-14 flex items-center justify-between rounded-md px-4 border bg-card">
      <div className="font-semibold text-muted-foreground">
        Showing 12 / 36 results
      </div>

      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon-sm">
          <Grid />
        </Button>
        <Button variant="ghost" size="icon-sm">
          <TextAlignJustify />
        </Button>
      </div>
    </div>
  );
}

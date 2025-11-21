import { Button } from "@/components/ui/button";

export default function FilterSidebarHeader() {
  return (
    <header className="h-14 flex items-center justify-between rounded-md px-4 border bg-card">
      <p className="text-base">Filter:</p>
      <Button variant="ghost" size="sm">
        Clean All
      </Button>
    </header>
  );
}

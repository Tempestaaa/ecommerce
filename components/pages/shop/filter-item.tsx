import { Badge } from "@/components/ui/badge";

type Props = {
  label: string;
  inStock: number;
};

export default function FilterItem({ label, inStock }: Props) {
  return (
    <div className="flex items-center justify-between py-1 text-muted-foreground  hover:text-foreground transition-colors duration-300 cursor-pointer group">
      <span>{label}</span>
      <Badge
        variant="secondary"
        className="group-hover:bg-foreground group-hover:text-background"
      >
        {inStock}
      </Badge>
    </div>
  );
}

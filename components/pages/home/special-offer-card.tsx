import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

type SpecialOfferCardProps = {
  title?: string;
  description?: string;
  discount?: string;
  badgeText?: string;
};

export default function SpecialOfferCard({
  title = "Summer Sale",
  description = "Get up to 40% off on selected books. Don't miss out!",
  discount = "40% OFF",
  badgeText = "Limited Time",
}: SpecialOfferCardProps) {
  return (
    <div className="md:col-span-2 lg:col-span-2 rounded-xl border bg-linear-to-br from-chart-1/20 via-chart-1/10 to-background p-6 relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-32 h-32 bg-chart-1/10 rounded-full blur-3xl" />
      <div className="relative z-10">
        <Badge className="mb-4 bg-chart-1/20 text-chart-1 border-chart-1/30">
          <Sparkles className="size-3" />
          <span>{badgeText}</span>
        </Badge>
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="text-4xl font-bold mb-4 bg-linear-to-r from-chart-1 to-chart-2 bg-clip-text text-transparent">
          {discount}
        </div>
        <Button asChild variant="default" className="w-full">
          <Link href="/shop">
            Shop Now
            <ArrowRight className="size-4 ml-2" />
          </Link>
        </Button>
      </div>
    </div>
  );
}


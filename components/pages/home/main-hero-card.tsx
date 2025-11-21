import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, ArrowRight, Star } from "lucide-react";
import Link from "next/link";

export default function MainHeroCard() {
  return (
    <div className="md:col-span-2 lg:col-span-4 row-span-2 rounded-xl border bg-linear-to-br from-primary/10 via-primary/5 to-background p-8 flex flex-col justify-between relative overflow-hidden group">
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-50 group-hover:opacity-75 transition-opacity" />

      <div className="relative z-10">
        <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
          <Sparkles className="size-3" />
          <span>New Arrivals</span>
        </Badge>

        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
          Discover Your Next Great Read
        </h1>

        <p className="text-muted-foreground text-lg mb-6 max-w-md">
          Explore thousands of books across genres. From bestsellers to hidden
          gems, find your perfect story.
        </p>

        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg" className="group/btn">
            <Link href="/shop">
              Browse Books
              <ArrowRight className="size-4 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </Button>

          <Button asChild variant="outline" size="lg">
            <Link href="/about">Learn More</Link>
          </Button>
        </div>
      </div>

      <div className="relative z-10 mt-8 flex items-center gap-2 text-sm text-muted-foreground">
        <div className="flex items-center gap-1">
          <Star className="size-4 fill-yellow-400 text-yellow-400" />
          <span className="font-semibold">4.8</span>
        </div>

        <span>•</span>

        <span>10,000+ Happy Readers</span>
      </div>
    </div>
  );
}

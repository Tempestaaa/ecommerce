import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, Flame } from "lucide-react";
import Image from "next/image";

type FeaturedBookCardProps = {
  title?: string;
  description?: string;
  price?: string;
  originalPrice?: string;
  rating?: number;
  imageSrc?: string;
  imageAlt?: string;
};

export default function FeaturedBookCard({
  title = "The Art of Storytelling",
  description = "A masterful collection of narratives that will captivate your imagination.",
  price = "$24.99",
  originalPrice = "$29.99",
  rating = 4.9,
  imageSrc = "/image.jpg",
  imageAlt = "Featured Book",
}: FeaturedBookCardProps) {
  return (
    <div className="md:col-span-2 lg:col-span-2 rounded-xl border bg-card p-6 flex flex-col gap-4 hover:shadow-lg transition-shadow group">
      <div className="flex items-start justify-between">
        <Badge className="bg-red-600 text-white">
          <Flame className="size-3" />
          <span>Bestseller</span>
        </Badge>
        <div className="flex items-center gap-1 text-yellow-500">
          <Star className="size-4 fill-yellow-500" />
          <span className="text-sm font-semibold text-foreground">
            {rating}
          </span>
        </div>
      </div>
      <div className="relative h-48 w-full rounded-lg overflow-hidden bg-muted">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="flex-1 flex flex-col">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {description}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold">{price}</span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {originalPrice}
              </span>
            )}
          </div>
          <Button size="icon" variant="ghost">
            <ShoppingCart className="size-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

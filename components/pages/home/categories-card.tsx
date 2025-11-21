import { Button } from "@/components/ui/button";
import { BookOpen, ArrowRight } from "lucide-react";
import Link from "next/link";

type Category = {
  name: string;
  count: string;
};

type CategoriesCardProps = {
  categories?: Category[];
};

const defaultCategories: Category[] = [
  { name: "Fiction", count: "1,234" },
  { name: "Mystery", count: "856" },
  { name: "Sci-Fi", count: "642" },
  { name: "Romance", count: "1,089" },
];

export default function CategoriesCard({
  categories = defaultCategories,
}: CategoriesCardProps) {
  return (
    <div className="md:col-span-2 lg:col-span-2 rounded-xl border bg-card p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-2 mb-4">
        <BookOpen className="size-5 text-primary" />
        <h2 className="font-semibold text-lg">Explore Categories</h2>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {categories.map((category) => (
          <Link
            key={category.name}
            href="/shop"
            className="p-3 rounded-lg border hover:bg-accent transition-colors group"
          >
            <div className="font-medium text-sm mb-1">{category.name}</div>
            <div className="text-xs text-muted-foreground">
              {category.count} books
            </div>
          </Link>
        ))}
      </div>

      <Button variant="ghost" className="w-full mt-4" asChild>
        <Link href="/shop">
          View All Categories
          <ArrowRight className="size-4 ml-2" />
        </Link>
      </Button>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import { TrendingUp, ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Book = {
  title: string;
  author: string;
  rating: number;
};

type TrendingBooksCardProps = {
  books?: Book[];
};

const defaultBooks: Book[] = [
  {
    title: "The Midnight Library",
    author: "Matt Haig",
    rating: 4.8,
  },
  { title: "Project Hail Mary", author: "Andy Weir", rating: 4.9 },
  {
    title: "The Seven Husbands...",
    author: "Taylor Jenkins",
    rating: 4.7,
  },
];

export default function TrendingBooksCard({
  books = defaultBooks,
}: TrendingBooksCardProps) {
  return (
    <div className="md:col-span-2 lg:col-span-2 rounded-xl border bg-card p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="size-5 text-primary" />
        <h2 className="font-semibold text-lg">Trending Now</h2>
      </div>
      <div className="space-y-3">
        {books.map((book, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-accent transition-colors group cursor-pointer"
          >
            <div className="relative h-12 w-8 rounded overflow-hidden bg-muted shrink-0">
              <Image
                src="/image.jpg"
                alt={book.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-medium text-sm line-clamp-1">
                {book.title}
              </div>
              <div className="text-xs text-muted-foreground">{book.author}</div>
            </div>
            <div className="flex items-center gap-1 text-yellow-500 shrink-0">
              <Star className="size-3 fill-yellow-500" />
              <span className="text-xs font-semibold text-foreground">
                {book.rating}
              </span>
            </div>
          </div>
        ))}
      </div>
      <Button variant="ghost" className="w-full mt-4" asChild>
        <Link href="/shop">
          See More
          <ArrowRight className="size-4 ml-2" />
        </Link>
      </Button>
    </div>
  );
}


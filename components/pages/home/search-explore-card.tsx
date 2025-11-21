import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import Link from "next/link";

type SearchExploreCardProps = {
  quickLinks?: string[];
};

const defaultQuickLinks = [
  "New Releases",
  "Audiobooks",
  "E-books",
  "Gift Cards",
];

export default function SearchExploreCard({
  quickLinks = defaultQuickLinks,
}: SearchExploreCardProps) {
  return (
    <div className="md:col-span-2 lg:col-span-2 rounded-xl border bg-card p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-2 mb-4">
        <Search className="size-5 text-primary" />
        <h2 className="font-semibold text-lg">Find Your Book</h2>
      </div>

      <p className="text-sm text-muted-foreground mb-4">
        Search through our extensive collection of books by title, author, or
        genre.
      </p>

      <Button asChild variant="outline" className="w-full" size="lg">
        <Link href="/shop" className="flex items-center justify-center">
          <Search className="size-4 mr-2" />
          Start Searching
        </Link>
      </Button>

      <div className="mt-4 pt-4 border-t">
        <div className="text-xs text-muted-foreground mb-2">Quick Links:</div>
        <div className="flex flex-wrap gap-2">
          {quickLinks.map((link) => (
            <Link
              key={link}
              href="/shop"
              className="text-xs px-2 py-1 rounded-md border hover:bg-accent transition-colors"
            >
              {link}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

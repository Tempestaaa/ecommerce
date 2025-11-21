import BookCard from "@/components/shared/book-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  BookOpen,
  Bookmark,
  Clock3,
  Sparkles,
  Star,
  ShoppingCart,
} from "lucide-react";
import Image from "next/image";

type PageProps = {
  params: {
    id: string;
  };
};

const recommendedBooks = [
  {
    title: "The Midnight Library",
    author: "Matt Haig",
    price: "$19.99",
    originalPrice: "$24.99",
    badgeText: "Trending",
    imageSrc: "/image.jpg",
  },
  {
    title: "Project Hail Mary",
    author: "Andy Weir",
    price: "$21.50",
    originalPrice: "$27.00",
    badgeText: "Sci-Fi",
    imageSrc: "/image.jpg",
  },
  {
    title: "Tomorrow, and Tomorrow, and Tomorrow",
    author: "Gabrielle Zevin",
    price: "$18.75",
    originalPrice: "$23.50",
    badgeText: "New",
    imageSrc: "/image.jpg",
  },
];

export default function BookDetailsPage({ params }: PageProps) {
  const book = {
    title: "Fragments of Light",
    author: "Isabella Reed",
    synopsis:
      "A sweeping literary fantasy that weaves together parallel timelines, found family, and the quiet magic of bookstores. Follow archivist Mira Edden as she unravels a century-old mystery buried beneath the city’s underground library.",
    highlights: [
      "Slow-burn literary fantasy with romantic tension",
      "Dual timeline narrative set across Paris and Prague",
      "Rich bookish lore and annotated letters",
    ],
    meta: {
      pages: 432,
      language: "English",
      format: "Hardcover · First Edition",
      published: "Aug 18, 2025",
      isbn: "978-1-4028-9462-6",
    },
    rating: 4.8,
    reviews: 1290,
    price: "$28.00",
    originalPrice: "$34.00",
    readTime: "9h 15m",
    imageSrc: "/image.jpg",
  };

  return (
    <div className="space-y-12 py-10">
      <section className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        <div className="relative overflow-hidden rounded-2xl border bg-card p-6 shadow-sm">
          <div className="relative mx-auto aspect-3/4 w-full max-w-sm overflow-hidden rounded-xl bg-muted">
            <Image
              src={book.imageSrc}
              alt={`${book.title} cover`}
              fill
              className="object-cover"
            />
          </div>

          <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
            <span>SKU #{params.id}</span>
            <span>ISBN {book.meta.isbn}</span>
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <Badge className="bg-primary/10 text-primary">
              Exclusive Edition
            </Badge>

            <h1 className="text-4xl font-semibold tracking-tight">
              {book.title}
            </h1>

            <p className="text-muted-foreground text-lg">
              by{" "}
              <span className="text-foreground font-medium">{book.author}</span>
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1 text-yellow-500">
                <Star className="size-4 fill-yellow-500 text-yellow-500" />
                <span className="font-semibold text-foreground">
                  {book.rating}
                </span>
                <span>({book.reviews} reviews)</span>
              </div>

              <span>•</span>

              <div className="flex items-center gap-1">
                <Clock3 className="size-4" />
                <span>{book.readTime} · Estimated</span>
              </div>
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            {book.synopsis}
          </p>

          <div className="rounded-xl border bg-card p-4">
            <p className="text-sm font-semibold text-muted-foreground">
              Key Highlights
            </p>

            <ul className="mt-3 flex flex-col gap-2 text-sm text-muted-foreground">
              {book.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-2">
                  <Sparkles className="mt-0.5 size-4 text-primary" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3 text-3xl font-bold">
              <span>{book.price}</span>

              <span className="text-lg text-muted-foreground line-through">
                {book.originalPrice}
              </span>
            </div>

            <p className="text-xs text-muted-foreground">
              Free domestic shipping · 30-day return window
            </p>

            <div className="flex flex-wrap gap-3">
              <Button size="lg" className="flex-1 min-w-[160px]">
                <ShoppingCart className="mr-2 size-4" />
                Add to cart
              </Button>

              <Button variant="outline" size="lg" className="min-w-[160px]">
                Preview chapter
              </Button>
            </div>
          </div>

          <Separator />

          <div className="grid gap-4 sm:grid-cols-2">
            <DetailsCard
              icon={<BookOpen className="size-4" />}
              label="Format"
              value={book.meta.format}
            />
            <DetailsCard
              icon={<Bookmark className="size-4" />}
              label="Publication"
              value={book.meta.published}
            />
            <DetailsCard
              icon={<Star className="size-4" />}
              label="Language"
              value={book.meta.language}
            />
            <DetailsCard
              icon={<Clock3 className="size-4" />}
              label="Length"
              value={`${book.meta.pages} pages`}
            />
          </div>
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        <div className="rounded-2xl border bg-card p-6 shadow-sm">
          <h2 className="text-xl font-semibold">What readers are saying</h2>

          <p className="text-muted-foreground mt-2 text-sm">
            “Fragments of Light is a love letter to bookworms. It’s atmospheric,
            clever, and full of aching tenderness.” — The Verdant Review
          </p>

          <Separator className="my-6" />

          <div className="space-y-4 text-sm text-muted-foreground">
            <ReviewLine label="Writing" score={92} />
            <ReviewLine label="Characters" score={95} />
            <ReviewLine label="Worldbuilding" score={88} />
            <ReviewLine label="Pacing" score={84} />
          </div>
        </div>

        <div className="rounded-2xl border bg-card p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Edition details</h2>

          <div className="mt-4 space-y-4 text-sm text-muted-foreground">
            <EditionRow
              label="Edition"
              value="1st Print · Foiled dust jacket"
            />
            <EditionRow label="Signed" value="Hand-signed tip-in included" />
            <EditionRow label="Extras" value="Annotated map · Sticker sheet" />
            <EditionRow label="Distributor" value="Atlas Lane Books" />
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
              You might also like
            </p>

            <h2 className="text-2xl font-semibold">More bookish obsessions</h2>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {recommendedBooks.map((book) => (
            <BookCard key={book.title} {...book} />
          ))}
        </div>
      </section>
    </div>
  );
}

function DetailsCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border bg-background/50 p-4">
      <div className="flex items-center gap-2 text-xs uppercase tracking-wide text-muted-foreground">
        {icon}
        <span>{label}</span>
      </div>

      <p className="mt-2 text-sm font-semibold text-foreground">{value}</p>
    </div>
  );
}

function ReviewLine({ label, score }: { label: string; score: number }) {
  return (
    <div>
      <div className="mb-1 flex items-center justify-between text-xs font-medium text-foreground">
        <span>{label}</span>
        <span>{score}%</span>
      </div>

      <div className="h-2 rounded-full bg-muted">
        <div
          className="h-full rounded-full bg-primary"
          style={{ width: `${score}%` }}
        />
      </div>
    </div>
  );
}

function EditionRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-medium text-foreground">{value}</span>
    </div>
  );
}

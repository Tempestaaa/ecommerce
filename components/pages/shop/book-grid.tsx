import BookCard from "@/components/shared/book-card";

export default function BookGrid() {
  return (
    <ul className="grid grid-cols-2 md:grid-cols-[repeat(auto-fill,minmax(14rem,1fr))] gap-4">
      {[...Array(16)].map((_, id) => (
        <BookCard key={id} />
      ))}
    </ul>
  );
}

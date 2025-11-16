import BookGrid from "@/components/pages/shop/book-grid";
import Pagination from "@/components/ui/pagination";

export default function ShopPage() {
  return (
    <div className="space-y-8">
      <BookGrid />
      <Pagination />
    </div>
  );
}

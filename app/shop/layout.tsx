import CustomBreadcrumbs from "@/components/pages/shop/custom-breadcrumbs";
import FilterSidebar from "@/components/pages/shop/filter-sidebar";
import ShopTools from "@/components/pages/shop/shop-tools";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <CustomBreadcrumbs />
      <section className="flex gap-4">
        <FilterSidebar />
        <div className="flex-1 space-y-4">
          <ShopTools />
          {children}
        </div>
      </section>
    </>
  );
}

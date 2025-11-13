import AppNavbarButtons from "@/components/shared/app-navbar-buttons";
import AppNavbarMenu from "@/components/shared/app-navbar-menu";
import AppNavbarSearchbar from "@/components/shared/app-navbar-searchbar";
import Logo from "@/components/shared/logo";
import SidebarMobile from "@/components/shared/sidebar-mobile";
import { Separator } from "@/components/ui/separator";

export default function AppNavbar() {
  return (
    <nav className="h-14 fixed bg-background z-50 top-0 left-0 right-0 border-b">
      <article className="container mx-auto px-2 xl:px-0 h-full flex items-center justify-between">
        <section className="flex items-center gap-2">
          <SidebarMobile />
          <Logo />
          <Separator orientation="vertical" className="h-7! hidden md:block" />
          <AppNavbarMenu />
        </section>

        <section className="flex items-center gap-2">
          <AppNavbarSearchbar />
          <Separator orientation="vertical" className="h-7! hidden" />
          <AppNavbarButtons />
        </section>
      </article>
    </nav>
  );
}

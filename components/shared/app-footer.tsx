import Logo from "@/components/shared/logo";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function AppFooter() {
  return (
    <footer className="border-t border-muted mt-8">
      <section className="container mx-auto py-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-2 space-y-2">
            <Logo />
            <p className="text-sm text-muted-foreground max-w-xs mb-4">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium.
            </p>
            <div className="flex gap-4 text-muted-foreground *:size-4 *:cursor-pointer *:hover:text-foreground *:transition-colors *:duration-300">
              <Facebook />
              <Instagram />
              <Twitter />
              <Linkedin />
            </div>
          </div>

          <div>
            <h5 className="font-bold text-base mb-4">Useful Links</h5>
            <ul className="space-y-2 text-muted-foreground *:hover:text-foreground *:cursor-pointer *:transition-colors *:duration-300">
              <p>Privacy Policy</p>
              <p>Return Policy</p>
              <p>Blog</p>
              <p>Contact</p>
              <p>Terms & Conditions</p>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-base mb-4">Account</h5>
            <ul className="space-y-2 text-muted-foreground *:hover:text-foreground *:cursor-pointer *:transition-colors *:duration-300">
              <p>My Account</p>
              <p>Login</p>
              <p>Sign Up</p>
              <p>Purchases</p>
              <p>Shipping Address</p>
            </ul>
          </div>

          <div className="md:col-span-1 space-y-2">
            <h5 className="font-bold text-base">Contact & Address</h5>
            <p className="text-sm">
              123 Street, Gandy Street,
              <br />
              Syracuse New York - 13221.
            </p>
            <p className="text-sm">
              Phone: +1 315-234-3812
              <br />
              Email: info@lavenga.com
            </p>
          </div>
        </div>
      </section>

      <section className="py-4 border-t border-muted">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-xs">
          <div className="flex gap-2 text-muted-foreground">
            <span>Privacy Policy</span>
            <span>|</span>
            <span>Terms of Service</span>
          </div>

          <p className="text-muted-foreground">
            &copy; Copyright 2025 | All Rights Reserved
          </p>
        </div>
      </section>
    </footer>
  );
}

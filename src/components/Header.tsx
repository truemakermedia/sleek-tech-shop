
import { ShoppingCart, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <a href="/" className="text-xl font-bold">
            TechAccessories
          </a>
          <nav className="hidden md:block">
            <ul className="flex gap-6">
              <li>
                <a href="#" className="text-sm hover:text-primary/80">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-primary/80">
                  Best Sellers
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-primary/80">
                  Deals
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Cart</span>
          </Button>
        </div>
      </div>
    </header>
  );
}

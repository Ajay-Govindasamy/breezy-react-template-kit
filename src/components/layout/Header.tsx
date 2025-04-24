
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
          <h1 className="text-xl font-semibold">MyApp</h1>
        </div>
        <nav className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" className="text-sm">
            Home
          </Button>
          <Button variant="ghost" className="text-sm">
            About
          </Button>
          <Button variant="ghost" className="text-sm">
            Contact
          </Button>
        </nav>
      </div>
    </header>
  );
};

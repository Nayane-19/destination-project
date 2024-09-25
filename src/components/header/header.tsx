import { Star } from "lucide-react";
import { Button } from "../ui/button";
import { ModeToggle } from "../mode-toggle/mode-toggle";

export const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4 w-full">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <Star name="code" size={24} />
          <h1 className="text-xl font-bold">Destination App</h1>
        </div>
        <nav className="space-x-4 flex items-center">
          <Button variant="ghost">Home</Button>
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
};

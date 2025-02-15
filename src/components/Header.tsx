
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import BookingForm from "./BookingForm";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <span className="text-2xl font-bold text-blue-900">BeautyPro</span>
        
        {/* Menu Mobile */}
        <button
          className="lg:hidden text-blue-900"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Menu Desktop */}
        <div className="hidden lg:flex space-x-6 items-center">
          <a href="#servicos" className="text-blue-900 hover:text-blue-700">
            Serviços
          </a>
          <a href="#galeria" className="text-blue-900 hover:text-blue-700">
            Galeria
          </a>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="default" className="bg-blue-600 hover:bg-blue-700">
                Agendar
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Agende seu Horário</DialogTitle>
              </DialogHeader>
              <BookingForm />
            </DialogContent>
          </Dialog>
        </div>

        {/* Menu Mobile Expandido */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-16 left-0 right-0 bg-white shadow-lg p-4 space-y-4">
            <a
              href="#servicos"
              className="block text-blue-900 hover:text-blue-700 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Serviços
            </a>
            <a
              href="#galeria"
              className="block text-blue-900 hover:text-blue-700 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Galeria
            </a>
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="default"
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Agendar
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Agende seu Horário</DialogTitle>
                </DialogHeader>
                <BookingForm />
              </DialogContent>
            </Dialog>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;

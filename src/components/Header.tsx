
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import BookingForm from "./BookingForm";

const Header = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <span className="text-2xl font-bold text-blue-900">BeautyPro</span>
        <div className="space-x-6">
          <a href="#servicos" className="text-blue-900 hover:text-blue-700">Serviços</a>
          <a href="#galeria" className="text-blue-900 hover:text-blue-700">Galeria</a>
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
      </div>
    </nav>
  );
};

export default Header;

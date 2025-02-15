
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import BookingForm from "./BookingForm";

const carouselImages = [
  {
    url: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80",
    title: "Transformação Total",
  },
  {
    url: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80",
    title: "Beleza Natural",
  },
  {
    url: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=800&q=80",
    title: "Cuidados Especiais",
  },
];

const HeroCarousel = () => {
  return (
    <section className="relative w-full">
      <div className="h-[60vh] md:h-[70vh]">
        <Carousel className="w-full h-full">
          <CarouselContent>
            {carouselImages.map((image, index) => (
              <CarouselItem key={index}>
                <div className="relative w-full h-full">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                    <div className="absolute bottom-0 left-0 p-8">
                      <h3 className="text-4xl font-bold text-white">{image.title}</h3>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </div>
      <div className="text-center py-12 px-4 bg-blue-50">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
          Transforme seu visual com a gente
        </h2>
        <p className="text-lg text-blue-700 mb-6">
          Agende agora seu horário e conheça nossos serviços exclusivos
        </p>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 text-lg">
              Agendar Horário
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
    </section>
  );
};

export default HeroCarousel;

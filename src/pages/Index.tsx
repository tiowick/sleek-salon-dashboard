import { Button } from "@/components/ui/button";
import { Scissors, Calendar, Star, Users } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    service: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `
Olá! Gostaria de agendar um horário:

📝 Nome: ${formData.name}
📱 Telefone: ${formData.phone}
📅 Data: ${formData.date}
⏰ Horário: ${formData.time}
💇‍♀️ Serviço: ${formData.service}
📌 Observações: ${formData.notes}
    `.trim();

    const whatsappUrl = `https://wa.me/5571981859864?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const services = [
    {
      icon: Scissors,
      title: "Corte & Estilo",
      description: "Cortes modernos e personalizados para realçar sua beleza natural",
    },
    {
      icon: Star,
      title: "Tratamentos",
      description: "Tratamentos especializados para diferentes tipos de cabelo",
    },
    {
      icon: Users,
      title: "Maquiagem",
      description: "Maquiagem profissional para todas as ocasiões",
    },
  ];

  const stats = [
    {
      value: "5k+",
      label: "Clientes Satisfeitos",
    },
    {
      value: "10+",
      label: "Anos de Experiência",
    },
    {
      value: "50+",
      label: "Profissionais",
    },
    {
      value: "100%",
      label: "Satisfação",
    },
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative px-4 py-20 md:py-32 bg-gradient-to-r from-[#FF6B6B] to-[#FFE66D] text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto relative">
          <div className="text-center space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Beleza &<br />
              <span className="text-white">Elegância</span>
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-white/90">
              Transforme sua beleza com profissionais experientes em um ambiente sofisticado e acolhedor.
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" variant="secondary" className="mt-8">
                  Agende Agora
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
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Nossos Serviços
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl card-gradient shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <service.icon className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Nosso Trabalho
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((img, index) => (
              <div key={index} className="relative overflow-hidden rounded-xl group">
                <img
                  src={img}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-accent">
        <div className="container mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Transforme seu Visual
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Agende uma consulta e descubra como podemos realçar sua beleza natural
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="secondary" size="lg">
                Agende sua Visita
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

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <p className="text-gray-300">
                Rua Example, 123<br />
                São Paulo, SP<br />
                (11) 9999-9999
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Horário</h3>
              <p className="text-gray-300">
                Segunda - Sábado<br />
                09:00 - 20:00
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Instagram
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Facebook
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            © 2024 Salão de Beleza. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

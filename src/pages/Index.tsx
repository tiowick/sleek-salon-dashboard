
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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    service: "",
    notes: "",
  });

  const availableTimes = {
    "2024-03-20": ["09:00", "10:00", "14:00", "15:00"],
    "2024-03-21": ["11:00", "13:00", "16:00"],
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, date: e.target.value, time: "" });
  };

  const isTimeAvailable = (time: string) => {
    return formData.date && availableTimes[formData.date]?.includes(time);
  };

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

    window.location.href = `https://wa.me/5571981859864?text=${encodeURIComponent(message)}`;
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

  return (
    <div className="min-h-screen">
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
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="date">Data</Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={handleDateChange}
                        min={new Date().toISOString().split('T')[0]}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="time">Horário</Label>
                      <div className="grid grid-cols-2 gap-2 mt-2">
                        {availableTimes[formData.date]?.map((time) => (
                          <Button
                            key={time}
                            variant={formData.time === time ? "default" : "outline"}
                            onClick={() => setFormData({ ...formData, time })}
                            className="w-full"
                          >
                            {time}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Serviço Desejado</Label>
                    <RadioGroup
                      value={formData.service}
                      onValueChange={(value) => setFormData({ ...formData, service: value })}
                      required
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="corte" id="corte" />
                        <Label htmlFor="corte">Corte & Estilo</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="tratamento" id="tratamento" />
                        <Label htmlFor="tratamento">Tratamento</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="maquiagem" id="maquiagem" />
                        <Label htmlFor="maquiagem">Maquiagem</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="notes">Observações</Label>
                    <Textarea
                      id="notes"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Alguma observação adicional?"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Enviar pelo WhatsApp
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </nav>

      <section className="pt-16 relative bg-gradient-to-r from-blue-600 to-blue-400">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                {carouselImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative aspect-video rounded-lg overflow-hidden">
                      <img
                        src={image.url}
                        alt={image.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                        <div className="absolute bottom-0 left-0 p-8">
                          <h3 className="text-3xl font-bold text-white">{image.title}</h3>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>

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

      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Horários Disponíveis</h2>
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
            <div className="space-y-4">
              <div>
                <Label>Selecione uma data</Label>
                <Input
                  type="date"
                  onChange={handleDateChange}
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
              {formData.date && availableTimes[formData.date] && (
                <div>
                  <Label>Horários disponíveis</Label>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    {availableTimes[formData.date].map((time) => (
                      <Button
                        key={time}
                        variant={formData.time === time ? "default" : "outline"}
                        onClick={() => setFormData({ ...formData, time })}
                        className="w-full"
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

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

      <section className="py-20 px-4 bg-accent">
        <div className="container mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Transforme seu Visual
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Agende uma consulta e descubra como podemos realçar sua beleza natural
          </p>
          <Button variant="secondary" size="lg">
            Agende sua Visita
          </Button>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Política de Privacidade</h2>
          <div className="max-w-3xl mx-auto prose prose-blue">
            <h3>Seus dados estão seguros conosco</h3>
            <p>
              Nosso compromisso é com a proteção e privacidade dos seus dados pessoais.
              Todas as informações coletadas são utilizadas apenas para:
            </p>
            <ul>
              <li>Agendamento de serviços</li>
              <li>Comunicação sobre seu atendimento</li>
              <li>Melhorar nossos serviços</li>
            </ul>
            <p>
              Não compartilhamos suas informações com terceiros e seguimos todas as
              diretrizes da LGPD (Lei Geral de Proteção de Dados).
            </p>
            <h3>Termos de Serviço</h3>
            <p>
              Ao agendar um serviço conosco, você concorda com:
            </p>
            <ul>
              <li>Política de cancelamento com 24h de antecedência</li>
              <li>Chegada com 10 minutos de antecedência</li>
              <li>Confirmação do agendamento via WhatsApp</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-blue-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Entre em Contato</h2>
          <div className="max-w-lg mx-auto">
            <p className="text-lg mb-6">
              Estamos aqui para ajudar a realçar sua beleza natural.
              Entre em contato conosco para mais informações.
            </p>
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700"
              onClick={() => window.location.href = "https://wa.me/5571981859864"}
            >
              Fale Conosco pelo WhatsApp
            </Button>
          </div>
        </div>
      </section>

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

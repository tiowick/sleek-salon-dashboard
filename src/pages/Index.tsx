
import { Button } from "@/components/ui/button";
import { Scissors, Calendar, Star, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="px-4 py-20 md:py-32">
        <div className="container mx-auto">
          <div className="text-center space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Beleza &<br />
              <span className="text-primary">Elegância</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Transforme sua beleza com profissionais experientes em um ambiente sofisticado e acolhedor.
            </p>
            <Button size="lg" className="mt-8">
              Agende Agora
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Nossos Serviços
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <service.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="container mx-auto text-center">
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

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <p className="text-gray-600">
                Rua Example, 123<br />
                São Paulo, SP<br />
                (11) 9999-9999
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Horário</h3>
              <p className="text-gray-600">
                Segunda - Sábado<br />
                09:00 - 20:00
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-primary">
                  Instagram
                </a>
                <a href="#" className="text-gray-600 hover:text-primary">
                  Facebook
                </a>
                <a href="#" className="text-gray-600 hover:text-primary">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-600">
            © 2024 Salão de Beleza. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
};

// Dados estáticos para a página
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

export default Index;

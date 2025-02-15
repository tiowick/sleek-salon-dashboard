
import { Scissors, Star, Users } from "lucide-react";

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

const Services = () => {
  return (
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
  );
};

export default Services;

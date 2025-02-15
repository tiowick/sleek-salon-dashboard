
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
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
  );
};

export default Contact;

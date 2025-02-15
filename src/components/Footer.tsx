
const Footer = () => {
  return (
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
  );
};

export default Footer;

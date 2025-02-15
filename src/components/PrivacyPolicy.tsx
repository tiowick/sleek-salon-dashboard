
const PrivacyPolicy = () => {
  return (
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
  );
};

export default PrivacyPolicy;

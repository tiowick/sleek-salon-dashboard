
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

const Stats = () => {
  return (
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
  );
};

export default Stats;

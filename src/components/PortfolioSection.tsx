const projects = [
    { title: "Crypto Bot", image: "/assets/crypto-bot.png" },
    { title: "Mentor Program", image: "/assets/mentor-program.png" },
    { title: "Investment Dashboard", image: "/assets/investment-dashboard.png" },
  ];
  
  const PortfolioSection = () => {
    return (
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-white rounded shadow hover:shadow-lg overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default PortfolioSection;
  
const services = [
    { title: "Crypto Trading", description: "Professional trading strategies to maximize ROI." },
    { title: "Mentorship", description: "Guidance for beginners and intermediates in crypto." },
    { title: "Investment Services", description: "Portfolio management and investment planning." },
  ];
  
  const ServicesSection = () => {
    return (
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">What I Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded shadow hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default ServicesSection;
  
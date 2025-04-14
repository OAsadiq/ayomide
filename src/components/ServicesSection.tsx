import { FaChartLine, FaChalkboardTeacher, FaWallet } from "react-icons/fa";

const services = [
  {
    title: "Crypto Trading",
    description: "Professional trading strategies to maximize ROI and minimize risk.",
    icon: <FaChartLine className="mb-4 text-4xl text-purple-700" />,
  },
  {
    title: "Mentorship",
    description: "Guidance and coaching for beginners and intermediates in the crypto space.",
    icon: <FaChalkboardTeacher className="mb-4 text-4xl text-purple-700" />,
  },
  {
    title: "Investment Services",
    description: "Smart portfolio management and long-term investment planning.",
    icon: <FaWallet className="mb-4 text-4xl text-purple-700" />,
  },
];

const ServicesSection = () => {
  return (
    <section className="px-6 py-20 text-gray-800 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="mb-12 text-4xl font-extrabold text-purple-700">What I Offer</h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="p-8 transition duration-300 transform bg-white border-t-4 border-purple-600 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex flex-col items-center">
                {service.icon}
                <h3 className="mb-2 text-2xl font-semibold">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

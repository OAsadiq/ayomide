import { FaUser } from "react-icons/fa";

const testimonials = [
  {
    name: "Jane Smith",
    role: "Student",
    feedback: "Excellent mentorship, learned so much about crypto!",
  },
  {
    name: "Mark Johnson",
    role: "Business Owner",
    feedback: "My business grew 3x in 6 months!",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="px-6 py-20 bg-gradient-to-br from-gray-100 to-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="mb-12 text-4xl font-extrabold text-purple-700">What Clients Say</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-[1.02] transition duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center justify-center text-xl text-purple-600 bg-purple-100 rounded-full w-14 h-14">
                  <FaUser />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold text-gray-900">{t.name}</h4>
                  <span className="text-sm text-gray-500">{t.role}</span>
                </div>
              </div>
              <p className="italic text-left text-gray-700">"{t.feedback}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

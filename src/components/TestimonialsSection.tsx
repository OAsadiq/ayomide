const testimonials = [
    { name: "Jane Smith", feedback: "Excellent mentorship, learned so much about crypto!" },
    { name: "Mark Johnson", feedback: "My portfolio grew 3x in 6 months!" },
  ];
  
  const TestimonialsSection = () => {
    return (
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">What Clients Say</h2>
          <div className="space-y-6">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-gray-100 p-6 rounded shadow">
                <p className="text-gray-700 italic mb-2">"{t.feedback}"</p>
                <h4 className="font-semibold text-gray-900">- {t.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default TestimonialsSection;
  
const updates = [
    {
      date: "April 10, 2025",
      title: "Ajayi featured on CryptoTalk Podcast",
      description: "An in-depth conversation about navigating the 2025 bull run.",
      link: "#",
    },
    {
      date: "March 25, 2025",
      title: "Launched 'Master Crypto' Mentorship Program",
      description: "A hands-on, structured mentorship for aspiring crypto traders.",
      link: "#",
    },
    {
      date: "March 1, 2025",
      title: "Spoke at Blockchain Africa Conference",
      description: "Keynote speaker on DeFi and decentralized investing trends.",
      link: "#",
    },
  ];
  

const UpdatesSection = () => {
    return (
        <section className="px-6 py-20 bg-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="mb-12 text-4xl font-bold text-center text-gray-900">
                    Latest News & Updates
                </h2>
                <div className="grid gap-8 md:grid-cols-3">
                    {updates.map((item, idx) => (
                        <div key={idx} className="p-6 transition rounded-lg shadow bg-gray-50 hover:shadow-md">
                            <span className="block mb-2 text-sm font-medium text-purple-600">{item.date}</span>
                            <h3 className="mb-2 text-xl font-semibold text-gray-800">{item.title}</h3>
                            <p className="text-sm text-gray-600">{item.description}</p>
                            <a href={item.link} className="inline-block mt-4 text-sm font-semibold text-purple-600 hover:underline">
                                Read More →
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
};

export default UpdatesSection;
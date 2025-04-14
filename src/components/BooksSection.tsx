const books = [
    {
      title: "6 Secrets In Navigating The Crypto Space",
      description: "An in-depth guide to understanding and succeeding in cryptocurrency trading.",
      image: "/assets/Ay_Book.JPG",
      link: "#",
    },
  ];
  
  const BooksSection = () => {
    return (
      <section className="px-6 py-20 text-gray-800 bg-gradient-to-b from-white to-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="mb-12 text-4xl font-extrabold text-purple-700">Books by Ayomide</h2>
  
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {books.map((book, idx) => (
              <div
                key={idx}
                className="p-6 transition duration-300 transform bg-white rounded-lg shadow hover:shadow-lg hover:-translate-y-1"
              >
                <img
                  src={book.image}
                  alt={book.title}
                  className="object-cover w-full h-56 mb-4 rounded-md"
                />
                <h3 className="mb-2 text-2xl font-semibold">{book.title}</h3>
                <p className="mb-4 text-gray-600">{book.description}</p>
                <a
                  href={book.link}
                  className="inline-block px-4 py-2 text-white transition bg-purple-700 rounded hover:bg-purple-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Book
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default BooksSection;
  
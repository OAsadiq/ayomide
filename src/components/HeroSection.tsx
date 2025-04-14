import { FaBitcoin, FaEthereum, FaEuroSign, FaDollarSign, FaCoins, FaMoneyBill } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section className="relative px-6 py-20 overflow-hidden text-white bg-white lg:h-[90vh]">
      <FaBitcoin className="hidden text-4xl text-yellow-400 lg:absolute top-10 left-10 animate-pulse" />
      <FaEthereum className="hidden absolute bottom-10 left-[15%] text-blue-400 text-3xl animate-pulse" />
      <FaEuroSign className="hidden text-3xl text-gray-300 lg:absolute top-32 right-20 animate-pulse" />
      <FaMoneyBill className="hidden lg:absolute text-3xl text-green-500 top-48 left-[20%] animate-pulse" />
      <FaDollarSign className="hidden text-4xl text-green-300 lg:absolute bottom-20 right-40 animate-pulse" />
      <FaCoins className="hidden lg:absolute top-5 right-[40%] text-orange-300 text-3xl animate-pulse" />

      <div className="flex flex-col items-center justify-center max-w-6xl gap-10 mx-auto md:flex-col">
        <div className="flex-shrink-0">
          <img
            src="/assets/profile.jpg"
            alt="Ajayi Ayomide"
            className="object-cover rounded-full shadow-lg w-72 h-72"
          />
        </div>

        <div className="text-center">
          <h1 className="mb-4 text-4xl font-extrabold text-purple-700 md:text-5xl">Ajayi Ayomide</h1>
          <p className="mb-6 text-lg text-gray-400 md:text-xl">
            Crypto Trader • Mentor • Investor
          </p>
          <button className="px-6 py-2 font-bold text-white bg-yellow-500 rounded-md text-md hover:bg-yellow-400">
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

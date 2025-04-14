import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import BooksSection from './components/BooksSection';
import TestimonialsSection from './components/TestimonialsSection';
import UpdatesSection from './components/UpdatesSection';
import Footer from './components/Footer';

const App = () => {
  console.log("App rendered");

  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <BooksSection />
      <TestimonialsSection />
      <UpdatesSection />
      <Footer />
    </div>
  );
};

export default App;

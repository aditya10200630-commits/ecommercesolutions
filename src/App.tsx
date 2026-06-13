import Header from './components/Header';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Locations from './components/Locations';
import GetStarted from './components/GetStarted';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white antialiased">
      <Header />
      <Hero />
      <WhyChooseUs />
      <Services />
      <Pricing />
      <Locations />
      <GetStarted />
      <Contact />
      <Footer />
    </div>
  );
}

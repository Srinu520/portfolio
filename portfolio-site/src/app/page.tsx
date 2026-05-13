import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import SoloAdvantage from '@/components/SoloAdvantage';
import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Services />
        <Projects />
        <SoloAdvantage />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

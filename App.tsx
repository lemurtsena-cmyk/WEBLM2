import { useState, useEffect } from 'react';
import { ProductsProvider } from './context/ProductsContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Advantages from './components/Advantages';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Admin from './components/Admin';
import FloatingButtons from './components/FloatingButtons';

function App() {
  const [view, setView] = useState<'site' | 'admin'>('site');

  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#admin') setView('admin');
      else setView('site');
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const goToAdmin = () => {
    window.location.hash = '#admin';
    setView('admin');
  };

  const goToSite = () => {
    window.location.hash = '';
    setView('site');
  };

  return (
    <ProductsProvider>
      {view === 'admin' ? (
        <Admin onExit={goToSite} />
      ) : (
        <div className="min-h-screen">
          <Header />
          <Hero />
          <Products />
          <Advantages />
          <About />
          <Testimonials />
          <Contact />
          <Footer />
          <FloatingButtons onAdminClick={goToAdmin} />
        </div>
      )}
    </ProductsProvider>
  );
}

export default App;

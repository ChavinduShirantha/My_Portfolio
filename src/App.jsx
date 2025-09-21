import React, { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Education from './components/Education';
import Experience from './components/Experience';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import { FullscreenLoader, PageTransitionLoader } from './components/Loader';
import { LoadingProvider, useLoading } from './hooks/useLoading.jsx';
import SEOHead from './components/SEO/SEOHead';
import { PersonStructuredData, WebsiteStructuredData, PortfolioStructuredData } from './components/SEO/StructuredData';
import './App.css';

function AppContent() {
  const { isLoading, setGlobalLoading } = useLoading();
  const globalLoading = isLoading('global');

  useEffect(() => {
    // Simulate initial page load
    const timer = setTimeout(() => {
      setGlobalLoading(false);
    }, 2500); // 2.5 seconds initial load

    return () => clearTimeout(timer);
  }, [setGlobalLoading]);

  // Show fullscreen loader during initial load
  if (globalLoading) {
    return <FullscreenLoader message="Loading Portfolio..." />;
  }

  return (
    <div className="App">
      <SEOHead page="home" />
      <PersonStructuredData />
      <WebsiteStructuredData />
      <PortfolioStructuredData />
      <PageTransitionLoader />
      <Header />
      <main>
        <Hero />
        <About />
        <Stats />
        <Education />
        <Experience />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}

function App() {
  return (
    <HelmetProvider>
      <LoadingProvider>
        <AppContent />
      </LoadingProvider>
    </HelmetProvider>
  );
}

export default App;
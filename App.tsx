import React, { useState, useEffect, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedBanner } from './components/FeaturedBanner';
import { ProductGrid } from './components/ProductGrid';
import { TeamSection } from './components/TeamSection';
import { GallerySection } from './components/GallerySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Menu } from './components/Menu';
import { OurSpace } from './components/OurSpace';
import { ContactPage } from './components/ContactPage';

type TabType = 'home' | 'cardápio' | 'nosso-espaço' | 'contato';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [displayTab, setDisplayTab] = useState<TabType>('home');
  const [animationClass, setAnimationClass] = useState('');
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const tabOrder: TabType[] = ['home', 'cardápio', 'nosso-espaço', 'contato'];

  const handleTabChange = (newTab: TabType) => {
    if (newTab === activeTab || isTransitioning) return;

    const oldIndex = tabOrder.indexOf(activeTab);
    const newIndex = tabOrder.indexOf(newTab);
    const direction = newIndex > oldIndex ? 'forward' : 'backward';

    setIsTransitioning(true);
    
    setAnimationClass(direction === 'forward' ? 'animate-fade-out-left' : 'animate-fade-out-right');

    setTimeout(() => {
      setActiveTab(newTab);
      setDisplayTab(newTab);
      setAnimationClass(direction === 'forward' ? 'animate-fade-in-right' : 'animate-fade-in-left');
      
      setTimeout(() => {
        setAnimationClass('');
        setIsTransitioning(false);
      }, 500);
    }, 500);
  };

  const handleNavigateToSpace = () => {
    handleTabChange('nosso-espaço');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-brand-950 font-secondary">
      <Navbar activeTab={activeTab} onTabChange={handleTabChange} />
      
      <main className={`flex-grow ${animationClass}`}>
        {displayTab === 'home' ? (
          <>
            <Hero onExplore={() => handleTabChange('cardápio')} />
            <FeaturedBanner />
            <ProductGrid />
            <TeamSection />
            <GallerySection isTransparent={false} onExplore={handleNavigateToSpace} />
            <ContactSection />
          </>
        ) : displayTab === 'cardápio' ? (
          <Menu onExplore={handleNavigateToSpace} />
        ) : displayTab === 'nosso-espaço' ? (
          <OurSpace />
        ) : (
          <ContactPage />
        )}
      </main>
      
      <Footer />

      <style>{`
        @keyframes fadeOutLeft {
          from { opacity: 1; transform: translateX(0); filter: blur(0); }
          to { opacity: 0; transform: translateX(-100px); filter: blur(10px); }
        }
        @keyframes fadeOutRight {
          from { opacity: 1; transform: translateX(0); filter: blur(0); }
          to { opacity: 0; transform: translateX(100px); filter: blur(10px); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(100px); filter: blur(10px); }
          to { opacity: 1; transform: translateX(0); filter: blur(0); }
        }
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-100px); filter: blur(10px); }
          to { opacity: 1; transform: translateX(0); filter: blur(0); }
        }
        .animate-fade-out-left {
          animation: fadeOutLeft 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        .animate-fade-out-right {
          animation: fadeOutRight 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        .animate-fade-in-right {
          animation: fadeInRight 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        .animate-fade-in-left {
          animation: fadeInLeft 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default App;
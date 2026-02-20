import React, { useState, useEffect, useMemo } from 'react';
import { Search, Menu, X, MapPin, Phone, Coffee, Clock } from 'lucide-react';

interface NavbarProps {
  activeTab: 'home' | 'cardápio' | 'nosso-espaço' | 'contato';
  onTabChange: (tab: 'home' | 'cardápio' | 'nosso-espaço' | 'contato') => void;
}

const searchData = {
  menu: [
    { name: 'Caramelo Dourado', category: 'Café', desc: 'Latte com calda artesanal de caramelo e final macio.' },
    { name: 'Cappuccino Nuvem', category: 'Café', desc: 'Textura leve e espumosa, com toque doce e irresistível.' },
    { name: 'Mocha Harmonia', category: 'Café', desc: 'Café, chocolate e leite vaporizado em uma combination que abraça.' },
    { name: 'Blend Studio Café', category: 'Café', desc: 'Nosso mix exclusivo de grãos, com notas achocolatadas e final suave.' },
    { name: 'Espresso Raiz', category: 'Café', desc: 'Clássico, intenso e aromático. O sabor puro do grão em sua essência.' },
    { name: 'Latte Sereno', category: 'Café', desc: 'Café suave com leite cremoso — perfeito para quem busca equilíbrio.' },
    { name: 'Cold Brew Refrescante', category: 'Café', desc: 'Extraído a frio por horas, trazendo suavidade e notas naturais mais doces.' },
    { name: 'Pão Artesanal da Casa', category: 'Pães', desc: 'Macio, fresco e assado diariamente.' },
    { name: 'Croissant Neblina', category: 'Pães', desc: 'Camadas leves e amanteigadas que derretem na boca.' },
    { name: 'Cookie ChocoChunk', category: 'Cookies', desc: 'Pedaços generosos de chocolate nobre e centro macio.' },
    { name: 'Mini Pão de Queijo', category: 'Porções', desc: 'Receita artesanal, crocante na casca e macio no interior.' },
  ],
  info: [
    { name: 'Endereço', value: 'Rua Agha Rizã São Judas - São Paulo/SP', icon: MapPin, tab: 'contato' },
    { name: 'CEP', value: '04303-150', icon: MapPin, tab: 'contato' },
    { name: 'Telefone', value: '(11) 9 9873-4859', icon: Phone, tab: 'contato' },
    { name: 'WhatsApp', value: '(11) 9 9873-4859', icon: Phone, tab: 'contato' },
    { name: 'Horário', value: 'Segunda a Sexta - 9h às 18h', icon: Clock, tab: 'contato' },
  ]
};

export const Navbar: React.FC<NavbarProps> = ({ activeTab, onTabChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isSearchOpen) {
          setIsSearchVisible(false);
          setTimeout(() => {
            setIsSearchOpen(false);
            setSearchQuery('');
          }, 300);
        } else if (isMobileMenuOpen) {
          setIsMobileMenuOpen(false);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen, isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Cardápio', id: 'cardápio' },
    { name: 'Nosso espaço', id: 'nosso-espaço' },
    { name: 'Contato', id: 'contato' },
  ];

  const handleLinkClick = (tabId: any) => {
    onTabChange(tabId as 'home' | 'cardápio' | 'nosso-espaço' | 'contato');
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
    setIsScrolled(false);
  };

  const filteredResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase();
    
    const menuResults = searchData.menu
      .filter(item => item.name.toLowerCase().includes(q) || item.desc.toLowerCase().includes(q))
      .map(item => ({ ...item, type: 'menu' }));

    const infoResults = searchData.info
      .filter(item => item.name.toLowerCase().includes(q) || item.value.toLowerCase().includes(q))
      .map(item => ({ ...item, type: 'info' }));

    return [...menuResults, ...infoResults];
  }, [searchQuery]);

  const isSolid = isScrolled;

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isSolid ? 'bg-coffee-950/95 py-3 shadow-2xl backdrop-blur-md' : 'bg-transparent py-8'}`}>
        <div className="container mx-auto px-4 md:px-12 flex items-center">

          <div className="flex-1 flex justify-start items-center">
            <div onClick={() => handleLinkClick('home')} className="cursor-pointer group">
              <img
                src="./image/logo.png"
                alt="Logo Studio Cafe"
                className="h-16 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center space-x-10">
            {navLinks.map((link) => (
              <button 
                key={link.name}
                onClick={() => handleLinkClick(link.id)}
                className={`menu-text relative transition-all duration-300 group py-1 ${activeTab === link.id ? 'text-white' : 'text-white/70 hover:text-white'}`}>
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-[2.5px] bg-white transition-all duration-300 ${activeTab === link.id ? 'w-full' : 'w-0 group-hover:w-full opacity-50'}`}/>
              </button>
            ))}
          </div>

          <div className="flex-1 flex justify-end items-center space-x-2 md:space-x-6">
            <button 
              onClick={() => {setIsSearchOpen(true); setIsSearchVisible(true);}}
              className="p-2 text-white/90 hover:text-white transition-all transform hover:scale-110"
              aria-label="Abrir busca">
              <Search className="w-5 h-5" />
            </button>

            <div className="md:hidden flex items-center pl-2">
              <button onClick={() => setIsMobileMenuOpen(true)} className="p-2 text-white" aria-label="Menu mobile">
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div 
        className={`fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm transition-opacity duration-500 md:hidden ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMobileMenuOpen(false)}>
        <div 
          className={`absolute top-0 right-0 h-full w-[85%] max-w-[400px] bg-coffee-950 shadow-2xl transition-transform duration-500 flex flex-col ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          onClick={(e) => e.stopPropagation()}>
          <div className="p-6 flex justify-end items-center gap-4">
            <button 
              onClick={() => {setIsMobileMenuOpen(false); setIsSearchOpen(true); setIsSearchVisible(true);}}
              className="p-2 text-white/70 hover:text-white">
              <Search className="w-6 h-6" />
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(false)} 
              className="p-2 text-white hover:rotate-90 transition-transform">
              <X className="w-8 h-8" />
            </button>
          </div>

          <div className="flex-grow flex flex-col justify-center items-center space-y-8 pb-32">
            {navLinks.map((link) => (
              <button 
                key={link.name} 
                onClick={() => handleLinkClick(link.id)}
                className={`text-3xl font-serif font-bold transition-all ${activeTab === link.id ? 'text-white italic underline underline-offset-8' : 'text-white/60 hover:text-white'}`}>
                {link.name}
              </button>
            ))}
          </div>

          <div className="p-8 text-center">
             <div className="flex flex-col items-center gap-1 opacity-20">
                <span className="text-[10px] font-bold tracking-[0.3em] text-white uppercase">Studio</span>
                <span className="text-xl font-serif font-bold text-white tracking-widest">CAFÉ</span>
             </div>
          </div>
        </div>
      </div>

      {isSearchOpen && (
        <div className={`fixed inset-0 z-[110] bg-coffee-950/95 backdrop-blur-2xl flex flex-col ${isSearchVisible ? 'animate-fade-in-right' : 'animate-fade-out-left'}`}>
          <div className="container mx-auto px-4 md:px-12 pt-16 md:pt-24 pb-12 flex flex-col items-center h-full">
            <button 
              onClick={() => {setIsSearchVisible(false); setTimeout(() => {setIsSearchOpen(false); setSearchQuery('');}, 300);}}
              className="absolute top-8 right-8 p-4 text-white/50 hover:text-white transition-all transform hover:rotate-90"
              aria-label="Fechar busca (Esc)">
              <X className="w-10 h-10" />
            </button>

            <div className="w-full max-w-4xl space-y-6">
              <div className="relative group">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-white/20 group-focus-within:text-white/60 transition-colors" />
                <input 
                  autoFocus
                  type="text" 
                  placeholder="Busque por cafés, pães, endereço..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white/5 border-b border-white/10 focus:border-white/40 px-16 py-5 text-xl md:text-3xl font-serif text-white placeholder:text-white/10 outline-none transition-all rounded-t-2xl"/>
              </div>

              <div className="flex justify-end pr-4">
                <p className="text-white/20 text-[10px] font-bold uppercase tracking-widest">Pressione 'Esc' ou 'X' para sair</p>
              </div>

              <div className="max-h-[60vh] overflow-y-auto custom-scroll space-y-4 pr-4">
                {searchQuery.trim() === '' ? (
                  <div className="text-center py-20">
                    <p className="text-white/20 text-xl italic font-serif">O que você está procurando hoje?</p>
                  </div>
                ) : filteredResults.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {filteredResults.map((result: any, idx) => (
                      <div 
                        key={idx}
                        onClick={() => handleLinkClick(result.type === 'menu' ? 'cardápio' : result.tab || 'contato')}
                        className="p-6 bg-white/5 rounded-3xl border border-white/5 hover:bg-white/10 transition-all cursor-pointer group flex items-start gap-5">
                        <div className="p-3 bg-white/5 rounded-2xl group-hover:bg-white/20 transition-colors">
                          {result.type === 'menu' ? <Coffee className="w-6 h-6 text-white" /> : <result.icon className="w-6 h-6 text-white" />}
                        </div>
                        <div className="flex-grow">
                          <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-1">{result.category || result.name}</p>
                          <h4 className="text-xl font-serif font-bold text-white mb-1">{result.name === 'Endereço' || result.name === 'Horário' || result.name === 'Telefone' ? result.value : result.name}</h4>
                          {result.desc && <p className="text-white/60 text-sm leading-relaxed line-clamp-2">{result.desc}</p>}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-20">
                    <p className="text-white/30 text-xl font-serif">Nenhum resultado encontrado para "{searchQuery}"</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

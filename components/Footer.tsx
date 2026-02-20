import React from 'react';
import { Facebook, Instagram, Linkedin, MapPin, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="footer-root relative pt-32 pb-12 border-t border-white/5 overflow-hidden">
      <div className="watermark-text absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.03] rotate-[-8deg] z-0 whitespace-nowrap">
        <span className="text-[25rem] lg:text-[45rem]">
          Coffee
        </span>
      </div>

      <div className="container mx-auto px-4 md:px-12 relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-24">
        <div className="space-y-10">
          <h4 className="footer-title text-white tracking-tight">Institucional</h4>
          <ul className="space-y-5 text-white/50">
            <li><a href="#" className="footer-text hover:text-white transition-colors duration-300">Home</a></li>
            <li><a href="#" className="footer-text hover:text-white transition-colors duration-300">Cardápio</a></li>
            <li><a href="#" className="footer-text hover:text-white transition-colors duration-300">Espaço</a></li>
            <li><a href="#" className="footer-text hover:text-white transition-colors duration-300">Contato</a></li>
          </ul>
        </div>

        <div className="hidden lg:block"></div>

        <div className="lg:col-span-2 space-y-10 text-right">
          <h4 className="footer-highlight text-white tracking-tight">Resumo sobre nós</h4>
          <p className="footer-text text-white/80 leading-relaxed max-w-2xl whitespace-pre-line">
          {`No Studio Café, acreditamos que cada detalhe transforma a experiência.
          Criamos um espaço acolhedor para quem busca uma pausa gostosa, um bom
          café ou um ambiente inspirador para trabalhar e se conectar. Nossos produtos
          são preparados com ingredientes selecionados e muito carinho, sempre
          pensando em oferecer sabor, conforto e momentos que ficam na memória.`}
          </p>
          
          <div className="space-y-6 pt-4">
            <div className="flex items-start gap-5 justify-end text-white/60">
              <MapPin className="w-6 h-6 text-white shrink-0 -mt-1" />
              <p className="footer-text text-white font-bold">
                04303-150 - Rua Agha Rizã São Judas - São Paulo/SP
              </p>
            </div>
            <div className="flex items-center gap-5 justify-end text-white/60">
              <Phone className="w-6 h-6 text-white shrink-0" />
              <p className="footer-text text-white font-bold">
                (11) 99384-9475
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-12 mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
        <div className="flex gap-10">
          <a href="#" className="text-white/20 hover:text-white transition-all transform hover:scale-110 hover:-translate-y-1 duration-300">
            <Facebook className="w-7 h-7" />
          </a>
          <a href="#" className="text-white/20 hover:text-white transition-all transform hover:scale-110 hover:-translate-y-1 duration-300">
            <Instagram className="w-7 h-7" />
          </a>
          <a href="#" className="text-white/20 hover:text-white transition-all transform hover:scale-110 hover:-translate-y-1 duration-300">
            <Linkedin className="w-7 h-7" />
          </a>
        </div>
        
        <p className="footer-text text-white/80 tracking-wide">
          © 2025 Studio café. Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
};

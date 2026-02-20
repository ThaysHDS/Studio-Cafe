import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const FeaturedBanner: React.FC = () => {
  return (
    <section className="py-16 bg-coffee-950">
      <div className="container mx-auto px-4 md:px-12 max-w-[1300px]">
        <div className="text-center mb-10">
          <h2 className="title text-white/90 tracking-tight">
            Conheça nossos produtos
          </h2>
        </div>

        <div 
          className="featured-banner-wrapper rounded-[50px] overflow-hidden flex flex-col lg:flex-row items-center border border-white/5 shadow-2xl min-h-[420px]"
        >
          <div className="lg:w-[45%] p-5 w-full h-full flex items-center">
            <div className="rounded-[40px] overflow-hidden w-full h-[320px] lg:h-[360px] shadow-lg">
              <img 
                src="./image/home/produtos.png" 
                alt="Café e grãos selecionados" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-[2000ms]"
              />
            </div>
          </div>

          <div className="lg:w-[55%] p-8 md:p-12 lg:pl-4 flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <h3 className="section-subtitle text-black tracking-tight leading-[1.05]">
                Sabores feitos para encantar.
              </h3>
              <p className="body-text text-black max-w-lg opacity-90">
                Do espresso perfeito aos doces artesanais, selecionamos cada ingrediente para transformar sua pausa em um momento especial.
              </p>
            </div>
            
            <div className="w-full max-w-[480px]">
              <button className="w-full group flex items-center justify-between pl-10 pr-2 py-2 bg-black text-white rounded-full transition-all duration-500 hover:bg-zinc-900 shadow-[0_20px_40px_rgba(0,0,0,0.2)] active:scale-95">
                <span className="hero-button tracking-tight">Saiba mais</span>
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center transition-all duration-500 group-hover:rotate-45 shrink-0">
                  <ArrowUpRight className="w-7 h-7 text-black" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

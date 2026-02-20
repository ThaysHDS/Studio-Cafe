import React from 'react';
import { ArrowDown } from 'lucide-react';

export const OurSpace: React.FC = () => {
  return (
    <div className="bg-coffee-950 min-h-screen relative">
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="./image/espaco/espaco-background.png"
            alt="Cafe Interior"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-coffee-950/50 to-coffee-950"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 space-y-6 text-center">
          <h1 className="title text-white">
            <span className="block">Seu novo</span>
            <span className="block">lugar favorito</span>
            <span className="block">na cidade.</span>
          </h1>
          <p className="subtitle text-white/80 mt-6">
            <span className="block">
              Ambientes acolhedores, pensados para café,
            </span>
            <span className="block">conversas, descanso e boas ideias.</span>
          </p>
        </div>
      </section>

      <section className="relative py-24 pb-48">
        <div className="watermark-text z-0 pointer-events-none select-none">
          Espaço
        </div>

        <div className="container mx-auto px-4 md:px-12 relative z-10 pt-40">
          <div className="text-center mb-32">
            <h2 className="title text-white mb-10">Conheça nosso espaço</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="flex flex-col gap-8">
              <div className="rounded-[40px] overflow-hidden shadow-xl border border-white/5 h-[350px] group">
                <img
                  src="./image/espaco/espaco-casal.png"
                  alt="Espaço Studio Café 1"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
              <div className="rounded-[40px] overflow-hidden shadow-xl border border-white/5 h-[315px] group">
                <img
                  src="./image/espaco/espaco-vitrine.png"
                  alt="Espaço Studio Café 2"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
            </div>

            <div className="rounded-[40px] overflow-hidden shadow-2xl border border-white/5 h-[700px] group">
              <img
                src="./image/espaco/espaco-paes.png"
                alt="Espaço Studio Café 3"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 items-start">
            <div className="rounded-[40px] overflow-hidden shadow-2xl border border-white/5 h-[700px] group">
              <img
                src="./image/espaco/espaco-total.png"
                alt="Espaço Studio Café 4"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
            </div>

            <div className="flex flex-col gap-8">
              <div className="rounded-[40px] overflow-hidden shadow-xl border border-white/5 h-[318px] group">
                <img
                  src="./image/espaco/espaco-balcao.png"
                  alt="Espaço Studio Café 5"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
              <div className="rounded-[40px] overflow-hidden shadow-xl border border-white/5 h-[350px] group">
                <img
                  src="./image/espaco/espaco-mesas.png"
                  alt="Espaço Studio Café 6"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative h-screen flex items-center justify-end overflow-hidden pb-20">
        <div className="absolute inset-0 z-0">
          <img
            src="./image/espaco/espaco-background.png"
            alt="Meeting Space Background"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-coffee-950 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-coffee-950 to-transparent" />
        </div>

        <div className="container mx-auto px-4 md:px-12 relative z-10 flex justify-end">
          <div className="max-w-2xl text-right space-y-12 p-10 rounded-3xl border border-white/5 backdrop-blur-xl bg-white/2 shadow-lg">
            <div className="space-y-4">
              <h2 className="title mb-6">
                <span className="block">Faça uma</span>
                <span className="block opacity-90">reserva para</span>
                <span className="block opacity-90">suas reuniões</span>
              </h2>
            </div>

            <div className="flex justify-end">
              <button className="group relative px-10 py-5 bg-black/40 backdrop-blur-md border border-white/20 rounded-full text-white font-bold text-xl flex items-center gap-6 hover:bg-black/60 transition-all duration-300 shadow-2xl">
                <span>Reserve agora</span>
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center transition-colors">
                  <ArrowDown className="w-5 h-5 text-white animate-bounce" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

import React from 'react';
import { ArrowRight } from 'lucide-react';

interface GallerySectionProps {
  isTransparent?: boolean;
  onExplore?: () => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ 
  isTransparent = false, 
  onExplore 
}) => {
  return (
    <section
      id="gallery"
      className={`relative py-24 overflow-hidden transition-colors duration-700 ${
        isTransparent ? 'bg-transparent' : 'bg-coffee-950'
      }`}
    >
      {isTransparent && (
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=2000&auto=format&fit=crop" 
            alt="Cafe Ambient Background" 
            className="w-full h-full object-cover opacity-60"
          />

          <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-coffee-950 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-coffee-950 to-transparent" />
        </div>
      )}

      <div className="mx-auto relative z-10 max-w-[1144px] h-[760px] px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-[40px] overflow-hidden group h-[700px] relative shadow-2xl border border-white/5">
            <img 
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1000&auto=format&fit=crop" 
              alt="Interior do Café 1" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="rounded-[40px] overflow-hidden group h-[334px] relative shadow-xl border border-white/5">
              <img 
                src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=1000&auto=format&fit=crop" 
                alt="Interior do Café 2" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-black/5"></div>
            </div>

            <div className="rounded-[40px] overflow-hidden group h-[334px] relative shadow-xl border border-white/5">
              <img 
                src="https://images.unsplash.com/photo-1525648199074-cee30ba79a4a?q=80&w=1000&auto=format&fit=crop" 
                alt="Interior do Café 3" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>

              <div className="absolute inset-0 flex items-end justify-end p-8">
                <button 
                  onClick={onExplore}
                  className="flex items-center gap-6 bg-black/80 backdrop-blur-xl text-white pl-10 pr-3 py-3 rounded-full border border-white/10 hover:bg-black transition-all group/btn shadow-2xl active:scale-95"
                >
                  <span className="text-base font-bold tracking-tight">
                    Conheça nosso espaço
                  </span>
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center border border-white/20 transition-transform group-hover/btn:rotate-[-45deg]">
                    <ArrowRight className="w-6 h-6 text-white" />
                  </div>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

import React, { useState, useEffect, useRef } from 'react';

interface FloatingElement {
  src: string;
  id: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  width: string;
  rotation: string;
  direction: 'left' | 'right' | 'top' | 'bottom';
}

interface HeroProduct {
  id: string;
  name: string;
  desc: string;
  price: string;
  mainImage: string;
  bgImage: string;
  elements: FloatingElement[];
  mobileElements: string[];
}

const heroProducts: HeroProduct[] = [
  {
    id: 'caramelo',
    name: 'Caramelo Dourado',
    desc: 'Latte com calda artesanal de caramelo e final macio.',
    price: '$ 12,90',
    mainImage: './image/caramelo/product-card.png',
    bgImage: './image/caramelo/banner-background.png',
    elements: [
      {
        id: 'c1',
        src: './image/caramelo/caramelo-pequeno.png',
        top: '5%',
        right: '70%',
        width: '35px',
        rotation: '5deg',
        direction: 'left',
      },
      {
        id: 'c2',
        src: './image/caramelo/caramelo-direito.png',
        bottom: '80%',
        right: '-5%',
        width: '80px',
        rotation: '-5deg',
        direction: 'right',
      },
      {
        id: 'b1',
        src: './image/caramelo/cafe-esquerdo.png',
        bottom: '55%',
        left: '-12%',
        width: '145px',
        rotation: '-5deg',
        direction: 'top',
      },
      {
        id: 'b2',
        src: './image/caramelo/caramelo-esquerdo.png',
        bottom: '-2%',
        left: '-16%',
        width: '100px',
        rotation: '5deg',
        direction: 'bottom',
      },
      {
        id: 'b-extra',
        src: './image/caramelo/cafe-direito.png',
        bottom: '10%',
        left: '100%',
        width: '110px',
        rotation: '5deg',
        direction: 'left',
      },
    ],
    mobileElements: ['c1', 'b2', 'b-extra'],
  },
  {
    id: 'mocha',
    name: 'Mocha Harmonia',
    desc: 'Café, chocolate belga e leite vaporizado em uma combinação perfeita.',
    price: '$ 12,90',
    mainImage: './image/mocha/product-card.png',
    bgImage: './image/mocha/banner-background.png',
    elements: [
      {
        id: 'ch1',
        src: './image/mocha/chocolate-esquerdo.png',
        bottom: '65%',
        left: '-12%',
        width: '160px',
        rotation: '5deg',
        direction: 'left',
      },
      {
        id: 'ch2',
        src: './image/mocha/chocolate-pequeno.png',
        bottom: '80%',
        right: '18%',
        width: '35px',
        rotation: '5deg',
        direction: 'right',
      },
      {
        id: 'b3',
        src: './image/mocha/cafe-esquerdo.png',
        top: '70%',
        right: '85%',
        width: '145px',
        rotation: '5deg',
        direction: 'top',
      },
      {
        id: 'b4',
        src: './image/mocha/chocolate-direito.png',
        bottom: '10%',
        left: '90%',
        width: '80px',
        rotation: '5deg',
        direction: 'bottom',
      },
      {
        id: 'b-extra',
        src: './image/mocha/cafe-direito.png',
        bottom: '40%',
        left: '85%',
        width: '100px',
        rotation: '-10deg',
        direction: 'left',
      },
    ],
    mobileElements: ['b3', 'b4', 'b-extra'],
  },
  {
    id: 'cappuccino',
    name: 'Cappuccino Nuvem',
    desc: 'Textura leve e espumosa, com toque doce de canela irresistível.',
    price: '$ 14,90',
    mainImage: './image/cappuccino/product-card.png',
    bgImage: './image/cappuccino/banner-background.png',
    elements: [
      {
        id: 'nb1',
        src: './image/cappuccino/cafe-esquerdo.png',
        top: '10%',
        right: '85%',
        width: '140px',
        rotation: '5deg',
        direction: 'right',
      },
      {
        id: 'nb2',
        src: './image/cappuccino/cafe-direito.png',
        bottom: '72%',
        left: '92%',
        width: '95px',
        rotation: '5deg',
        direction: 'left',
      },
      {
        id: 'nb3',
        src: './image/cappuccino/leite-centro.png',
        top: '10%',
        left: '12%',
        width: '215px',
        rotation: '5deg',
        direction: 'top',
      },
      {
        id: 'nb4',
        src: './image/cappuccino/leite-direito.png',
        bottom: '25%',
        right: '-25%',
        width: '210px',
        rotation: '5deg',
        direction: 'bottom',
      },
      {
        id: 'b-extra',
        src: './image/cappuccino/leite-esquerdo.png',
        bottom: '-8%',
        left: '-20%',
        width: '160px',
        rotation: '5deg',
        direction: 'left',
      },
    ],
    mobileElements: ['nb1', 'nb2', 'b-extra'],
  },
  {
    id: 'blend',
    name: 'Blend Studio Café',
    desc: 'Grãos selecionados com torra média e sabor intenso e persistente.',
    price: '$ 9,90',
    mainImage: './image/blend/product-card.png',
    bgImage: './image/blend/banner-background.png',
    elements: [
      {
        id: 'eb1',
        src: './image/blend/cafe-esquerdo.png',
        top: '15%',
        left: '-15%',
        width: '120px',
        rotation: '5deg',
        direction: 'left',
      },
      {
        id: 'eb2',
        src: './image/blend/cafe-direito.png',
        bottom: '86%',
        right: '12%',
        width: '90px',
        rotation: '5deg',
        direction: 'right',
      },
      {
        id: 'eb3',
        src: './image/blend/cafe-pequeno.png',
        top: '55%',
        right: '-8%',
        width: '45px',
        rotation: '5deg',
        direction: 'top',
      },
      {
        id: 'eb4',
        src: './image/blend/cafe-esquerdo-inferior.png',
        bottom: '2%',
        left: '-15%',
        width: '110px',
        rotation: '5deg',
        direction: 'bottom',
      },
      {
        id: 'b-extra',
        src: './image/blend/cafe-direito-inferior.png',
        bottom: '-5%',
        left: '92%',
        width: '180px',
        rotation: '5deg',
        direction: 'left',
      },
    ],
    mobileElements: ['eb1', 'eb3', 'eb4'],
  },
];

interface HeroProps {
  onExplore?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplore }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timerRef = useRef<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    timerRef.current = window.setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % heroProducts.length);
        setIsTransitioning(false);
      }, 1600);
    }, 7000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const getElementTransform = (el: FloatingElement, transitioning: boolean) => {
    if (!transitioning) return `rotate(${el.rotation})`;
    const distance = 200;
    switch (el.direction) {
      case 'left':
        return `translateX(${distance}px) rotate(${el.rotation}) scale(0.8)`;
      case 'right':
        return `translateX(-${distance}px) rotate(${el.rotation}) scale(0.8)`;
      case 'top':
        return `translateY(${distance}px) rotate(${el.rotation}) scale(0.8)`;
      case 'bottom':
        return `translateY(-${distance}px) rotate(${el.rotation}) scale(0.8)`;
      default:
        return `rotate(${el.rotation})`;
    }
  };

  return (
    <section className="hero-section relative min-h-screen flex items-center pt-24 pb-14 md:pb-20">
      <div className="absolute inset-0 z-0 pointer-events-none">
        {heroProducts.map((p, idx) => (
          <div
            key={p.id}
            className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${idx === currentIndex ? 'opacity-80' : 'opacity-0'}`}
          >
            <img
              src={p.bgImage}
              alt=""
              className="w-full h-full object-cover transform scale-110"
            />
          </div>
        ))}
        <div className="absolute inset-0 opacity-20 mix-blend-screen pointer-events-none">
          <img
            src="/image/home/produtos.png"
            className="w-full h-full object-cover animate-pulse"
            style={{ animationDuration: '10s' }}
            alt=""
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-coffee-950/95 to-transparent pointer-events-none"></div>
      </div>

      <div className="container mx-auto px-4 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        <div
          className="w-[562px] h-[422px] flex flex-col gap-[20px] justify-center relative left-20
                max-md:w-full max-md:h-auto max-md:left-0 max-md:px-4 max-md:mt-8 max-md:items-center"
        >
          <h1
            className="hero-title text-white tracking-tight leading-tight whitespace-pre-line
                 max-md:text-4xl max-md:leading-tight max-md:text-center"
          >
            <span>O sabor que</span>
            <span>acolhe, o aroma</span>
            <span>que inspira.</span>
          </h1>

          <p
            className="hero-description text-white leading-relaxed max-w-[480px] text-left
                max-md:max-w-full max-md:text-base max-md:text-center"
          >
            Aqui, cada xícara é preparada com calma, carinho e grãos
            selecionados. Sente-se, respire fundo e aproveite o momento.
          </p>

          <div className="pt-2 max-md:flex max-md:justify-center w-full">
            <button
              onClick={onExplore}
              className="hero-button hero-cta-button text-white shadow-xl
                 max-md:py-3 max-md:w-auto"
            >
              Explorar cardápio
            </button>
          </div>
        </div>

        <div
          className="relative flex items-center justify-center lg:justify-end lg:pr-12 -translate-x-6
                max-md:justify-center max-md:pr-0 max-md:translate-x-0"
        >
          <div
            className="relative w-full max-w-[380px] pt-8 pb-4 flex flex-col
                  max-md:max-w-[300px] max-md:pt-6 max-md:pb-2"
          >
            <div
              className="absolute bottom-0 left-0 right-0 top-[130px] rounded-[50px] z-0 overflow-hidden -translate-y-6
                    max-md:top-[110px] max-md:-translate-y-4"
            >
              <div className="absolute inset-0 rounded-[38px] hero-card" />
              <div className="absolute inset-0 rounded-[38px] hero-card-highlight pointer-events-none" />
              <div className="absolute inset-0 rounded-[50px] ring-1 ring-white/10" />
            </div>

            <div className="relative z-10 -translate-y-8 max-md:-translate-y-4">
              {heroProducts.map((p, idx) => (
                <div
                  key={p.id}
                  className={`transition-all duration-[1600ms] cubic-bezier(0.4, 0, 0.2, 1) ${
                    idx === currentIndex
                      ? 'opacity-100 relative'
                      : 'opacity-0 absolute inset-0 pointer-events-none'
                  }`}
                >
                  {p.elements.map((el) => {
                    const shouldRender =
                      !isMobile || p.mobileElements.includes(el.id);

                    return (
                      <img
                        key={el.id}
                        src={el.src}
                        alt=""
                        className="absolute z-20 pointer-events-none transition-all duration-[2000ms] cubic-bezier(0.16, 1, 0.3, 1)"
                        style={{
                          top: el.top,
                          left: el.left,
                          right: el.right,
                          bottom: el.bottom,
                          width: el.width,
                          transform: getElementTransform(
                            el,
                            idx !== currentIndex || isTransitioning,
                          ),
                          opacity:
                            shouldRender &&
                            idx === currentIndex &&
                            !isTransitioning
                              ? 1
                              : 0,
                          willChange: 'transform, opacity',
                        }}
                      />
                    );
                  })}

                  <div className="relative flex justify-center">
                    <div
                      className="relative w-[320px] h-[320px] flex items-center justify-center
                            max-md:w-[260px] max-md:h-[260px]"
                    >
                      <img
                        src={p.mainImage}
                        alt={p.name}
                        className={`w-full h-full object-cover rounded-[40px] transition-transform duration-[1600ms] ${
                          idx === currentIndex
                            ? 'scale-100 -translate-y-8'
                            : 'scale-90 translate-y-10'
                        }`}
                      />
                    </div>
                  </div>

                  <div
                    className={`mx-4 px-4 py-1 rounded-[32px] space-y-1 text-center transition-all duration-[1200ms] ${
                      isTransitioning
                        ? 'opacity-0 translate-y-6'
                        : 'opacity-100 translate-y-0'
                    }`}
                  >
                    <h3
                      className="coffee-name text-white tracking-tight drop-shadow-md
                           max-md:text-base"
                    >
                      {p.name}
                    </h3>
                    <p
                      className="coffee-description text-white/60 leading-snug max-w-[240px] mx-auto
                          max-md:text-sm max-md:max-w-[200px]"
                    >
                      {p.desc}
                    </p>
                  </div>

                  <div className="px-8 mt-4 max-md:px-4">
                    <button
                      className="coffee-price w-full py-5 bg-black text-white rounded-[28px] shadow-2xl transition-all duration-300 hover:bg-zinc-900 active:scale-95
                               max-md:py-4 max-md:text-sm"
                    >
                      {p.price}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 md:bottom-20 left-1/2 -translate-x-1/2 flex gap-3 z-50">
        {heroProducts.map((_, idx) => (
          <div
            key={idx}
            className={`hero-indicator ${
              idx === currentIndex
                ? 'hero-indicator--active'
                : 'hero-indicator--inactive'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

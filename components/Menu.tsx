import React from 'react';
import { GallerySection } from './GallerySection';

interface MenuProps {
  onExplore?: () => void;
}

const menuData = {
  cafe: [
    {
      name: 'Caramelo Dourado',
      price: '$ 9,99',
      desc: 'Latte com calda artesanal de caramelo e final macio.',
      img: './image/cardapio/caramelo-dourado.png',
    },
    {
      name: 'Cappuccino Nuvem',
      price: '$ 9,99',
      desc: 'Textura leve e espumosa, com toque doce e irresistível.',
      img: './image/cardapio/cappuccino-nuvem.png',
    },
    {
      name: 'Mocha Harmonia',
      price: '$ 9,99',
      desc: 'Café, chocolate e leite vaporizado em uma combination que abraça.',
      img: './image/cardapio/mocha-harmonia.png',
    },
    {
      name: 'Blend Studio Café',
      price: '$ 9,99',
      desc: 'Nosso mix exclusivo de grãos, com notas achocolatadas e final suave.',
      img: './image/cardapio/blend-studio.png',
    },
    {
      name: 'Espresso Raiz',
      price: '$ 9,99',
      desc: 'Clássico, intenso e aromático. O sabor puro do grão em sua essência.',
      img: './image/cardapio/espresso-raiz.png',
    },
    {
      name: 'Latte Sereno',
      price: '$ 9,99',
      desc: 'Café suave com leite cremoso — perfeito para quem busca equilíbrio.',
      img: './image/cardapio/latte-sereno.png',
    },
    {
      name: 'Cold Brew Refrescante',
      price: '$ 9,99',
      desc: 'Extraído a frio por horas, trazendo suavidade e notas naturais mais doces.',
      img: './image/cardapio/cold-brew.png',
    },
  ],
  paes: [
    {
      name: 'Pão Artesanal da Casa',
      price: '$ 9,99',
      desc: 'Macio, fresco e assado diariamente. Ideal para acompanhar o seu café.',
      img: './image/cardapio/pao-artesanal.png',
    },
    {
      name: 'Croissant Neblina',
      price: '$ 9,99',
      desc: 'Camadas leves e amanteigadas que derretem na boca.',
      img: './image/cardapio/croissant-neblina.png',
    },
    {
      name: 'Cookie ChocoChunk',
      price: '$ 9,99',
      desc: 'Pedaços generosos de chocolate nobre e centro macio.',
      img: './image/cardapio/cookie-chocochunk.png',
    },
    {
      name: 'Cookie Canela & Açúcar',
      price: '$ 9,99',
      desc: 'Aroma acolhedor, leve crocância e sabor clássico da confeitaria artesanal.',
      img: './image/cardapio/cookie-canela.png',
    },
    {
      name: 'Brioche Doce Amanhecer',
      price: '$ 9,99',
      desc: 'Pão levemente adocicado, perfeito para acompanhar geleias e manteiga.',
      img: './image/cardapio/brioche-doce-amanhecer.png',
    },
    {
      name: 'Toast Crunchy',
      price: '$ 9,99',
      desc: 'Fatias crocantes com manteiga ou geleia — simples e delicioso.',
      img: './image/cardapio/toast-crunchy.png',
    },
  ],
  porcoes: [
    {
      name: 'Mini Pão de Queijo',
      price: '$ 9,99',
      desc: 'Receita artesanal, crocante na casca e macio no interior.',
      img: './image/cardapio/mini-pao-de-queijo.png',
    },
    {
      name: 'Tábua Aconchego',
      price: '$ 9,99',
      desc: 'Seleção de pães, queijos e acompanhamentos para compartilhar.',
      img: './image/cardapio/tabua-aconchego.png',
    },
    {
      name: 'Batatinhas da Casa',
      price: '$ 9,99',
      desc: 'Crocantes por fora, macias por dentro, servidas com molho especial.',
      img: './image/cardapio/batatinhas-da-casa.png',
    },
  ],
  nossosProdutos: [
    {
      name: 'Blend Studio Café',
      price: '$ 9,99',
      desc: 'Nosso mix exclusivo de grãos, com notas achocolatadas e final suave.',
      img: './image/cardapio/blend-studio-cafe.png',
    },
    {
      name: 'Granola Crocante da Casa',
      price: '$ 9,99',
      desc: 'Feita with ingredientes naturais, perfeita para cafés da manhã e lanches.',
      img: './image/cardapio/granola-crocante-da-casa.png',
    },
    {
      name: 'Mel Artesanal da Serra',
      price: '$ 9,99',
      desc: 'Sabor puro e aroma floral, ideal para adoçar cafés e chás.',
      img: './image/cardapio/mel-artesanal-da-serra.png',
    },
    {
      name: 'Calda Gourmet de Caramelo',
      price: '$ 9,99',
      desc: 'Produzida artesanalmente, cremosa e perfeita para sobremesas e bebidas.',
      img: './image/cardapio/calda-gourmet.png',
    },
  ],
};

const SectionHeader: React.FC<{
  src?: string;
  title: string;
  className?: string;
}> = ({ src, title, className = '' }) => (
  <div className={`menu-section-header ${className}`}>
    <div className="menu-section-icon">
      {src && <img src={src} alt={title} />}
    </div>
    <h2 className="product-title text-white">{title}</h2>
  </div>
);

const ProductCard: React.FC<{ product: any }> = ({ product }) => (
  <div className="flex flex-col space-y-4 group">
    <div className="relative aspect-square rounded-[30px] overflow-hidden shadow-xl">
      <img
        src={product.img}
        alt={product.name}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      />
      <div className="product-price-badge">
        <span className="text-white font-bold text-sm tracking-tight">
          {product.price}
        </span>
      </div>
    </div>
    <div className="space-y-1">
      <h3 className="product-name text-white group-hover:text-coffee-300 transition-colors">
        {product.name}
      </h3>
      <p className="product-description text-white/50">{product.desc}</p>
    </div>
  </div>
);

const Divider: React.FC = () => (
  <div className="w-full border-t border-white/5 mt-20"></div>
);

export const Menu: React.FC<MenuProps> = ({ onExplore }) => {
  return (
    <div className="menu-page">
      <section className="relative h-screen overflow-hidden">
        <img
          src="./image/cardapio/background-cafe.png"
          alt="Coffee Theme"
          className="menu-hero-bg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-coffee-950 via-transparent to-transparent opacity-95"></div>

        <div className="menu-hero-text animate-fade-in-up">
          <h1 className="title text-white mb-4 drop-shadow-[0_10px_10px_rgba(0,0,0,0.8)] text-left">
            <span className="block">Nosso cardápio,</span>
            <span className="block">feito para todos</span>
            <span className="block">os momentos.</span>
          </h1>
          <p className="subtitle text-white/90 max-w-xl leading-relaxed tracking-wide text-left">
            Escolha entre cafés, pães, cookies e porções preparadas na hora.
            Tudo fresquinho, do jeito que você gosta.
          </p>
        </div>
      </section>

      <section className="relative">
        <div className="watermark-text z-0 pointer-events-none select-none">
          Menu
        </div>
        <div className="absolute top-[-280px] left-1/2 -translate-x-1/2 pointer-events-none select-none opacity-[0.03] rotate-[-8deg] z-0">
          <span className="coffee-bg opacity-[0.03] rotate-[-8deg]">Menu</span>
        </div>

        <div className="menu-container menu-container-custom pt-48">
          <SectionHeader src="./image/cardapio/xicara-cafe.png" title="Café" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-16">
            {menuData.cafe.map((p, i) => (
              <ProductCard key={i} product={p} />
            ))}
          </div>
          <Divider />

          <SectionHeader
            src="./image/cardapio/pao.png"
            title="Pães & cookies"
            className="pt-20"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-16">
            {menuData.paes.map((p, i) => (
              <ProductCard key={i} product={p} />
            ))}
          </div>
          <Divider />

          <SectionHeader
            src="./image/cardapio/croissant.png"
            title="Porções"
            className="pt-20"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-16">
            {menuData.porcoes.map((p, i) => (
              <ProductCard key={i} product={p} />
            ))}
          </div>
          <Divider />

          <SectionHeader
            src="./image/cardapio/cafe-grao.png"
            title="Nossos Produtos"
            className="pt-20"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-16 pb-20">
            {menuData.nossosProdutos.map((p, i) => (
              <ProductCard key={i} product={p} />
            ))}
          </div>
          <Divider />
        </div>
      </section>

      <div className="mt-20">
        <GallerySection isTransparent={true} onExplore={onExplore} />
      </div>
    </div>
  );
};

import React from 'react';
import { Download } from 'lucide-react';

const products = [
  {
    id: '1',
    name: 'Caramelo Dourado',
    desc: 'Latte com calda artesanal de caramelo e final macio.',
    price: '$ 12,90',
    image: './image/home/caramelo-dourado.png'
  },
  {
    id: '2',
    name: 'Blend Studio Café',
    desc: 'Nosso mix exclusivo de grãos, com notas achocolatadas e final suave.',
    price: '$ 12,90',
    image: './image/home/blend-studio-cafe.png'
  },
  {
    id: '3',
    name: 'Cappuccino Nuvem',
    desc: 'Textura leve e espumosa, com toque doce e irresistível.',
    price: '$ 12,90',
    image: './image/home/cappuccino-nuvem.png'
  },
  {
    id: '4',
    name: 'Mocha Harmonia',
    desc: 'Café, chocolate e leite vaporizado em uma combinação que abraça.',
    price: '$ 12,90',
    image: './image/home/mocha-harmonia.png'
  }
];

export const ProductGrid: React.FC = () => {
  return (
    <section id="products" className="product-section">
      <div className="watermark-text">Coffee</div>

      <div className="container">
        <div className="product-header">
          <h2 className="product-title">Principais produtos</h2>
          <p className="product-subtitle">
            Escolha entre cafés, pães, cookies e porções preparadas na hora. Tudo fresquinho, do jeito que você gosta.
          </p>
          <div className="header-buttons">
            <button className="btn">Veja mais produtos</button>
            <button className="btn btn-icon">
              Baixe nosso cardápio <Download className="icon" />
            </button>
          </div>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image-wrapper">
                <div className="product-image-circle">
                  <img src={product.image} alt={product.name} />
                </div>
              </div>

              <div className="text-content">
                <h3 className="coffee-name">{product.name}</h3>
                <p className="coffee-description">{product.desc}</p>
                <button className="coffee-price">{product.price}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

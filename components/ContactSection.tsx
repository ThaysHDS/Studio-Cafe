import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-section-container">
        <div className="contact-section-map relative w-full h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.32757262483!2d-46.63466442466859!3d-23.592576978782046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a146700c09d%3A0x7d6a5c1a71e7d23d!2sRua%20Agha%20Riz%C3%A3%2C%20S%C3%A3o%20Judas%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004303-150!5e0!3m2!1spt-BR!2sbr!4v1709424831200!5m2!1spt-BR!2sbr"
            title="Localização do Studio Café"
            loading="lazy"
            allowFullScreen
            className="w-full h-full"
          />
        </div>

        <div className="contact-section-content">
          <div className="contact-section-info">
            <div className="space-y-2">
              <span className="zipcode text-black">04303-150</span>
              <h2 className="address text-black">
                Rua Agha Rizã São Judas - São Paulo/SP
              </h2>
            </div>

            <div className="space-y-1">
              <h4 className="info-title text-black">
                Horário de funcionamento
              </h4>
              <p className="info-text text-black">
                Segunda a Sexta - 9h às 18h
              </p>
            </div>
          </div>

          <div className="contact-section-cta-wrapper">
            <button className="contact-section-cta">
              <span className="cta-text">Reserve um horário para você!</span>
              <div className="contact-section-cta-icon">
                <ArrowUpRight className="w-6 h-6 text-black" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

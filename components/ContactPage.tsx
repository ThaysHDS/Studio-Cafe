import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <div className="contact-page">
      <div className="contact-background">
        <img
          src="./image/contato/background-contato.png"
          alt="São Paulo Skyline"
          className="contact-background-image"
        />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-coffee-950 to-transparent" />
      </div>

      <div className="container mx-auto relative z-10 pt-32 pb-20 flex justify-center">
        <div className="max-w-6xl mx-auto">
          <div className="contact-card">

            <div className="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.32757262483!2d-46.63466442466859!3d-23.592576978782046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a146700c09d%3A0x7d6a5c1a71e7d23d!2sRua%20Agha%20Riz%C3%A3%2C%20S%C3%A3o%20Judas%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004303-150!5e0!3m2!1spt-BR!2sbr!4v1709424831200!5m2!1spt-BR!2sbr"
                title="Studio Café Location"
                loading="lazy"
                allowFullScreen
                className="contact-map-iframe"
              />
            </div>

            <div className="flex flex-col justify-between space-y-12">
              <div className="space-y-10">
                <div className="space-y-4">
                  <span className="zipcode text-white/80">04303-150</span>
                  <h2 className="address text-white">
                    Rua Agha Rizã São Judas - São Paulo/SP
                  </h2>
                </div>

                <div className="space-y-8">
                  <div className="space-y-3">
                    <h4 className="info-title text-white/80">
                      Horário de funcionamento
                    </h4>
                    <p className="info-text text-white">
                      Segunda a Sexta - 9h às 18h
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="info-title text-white/80">
                      Telefone
                    </h4>

                    <div className="contact-phone">
                      <img
                        src="./image/contato/whatsapp.png"
                        alt="WhatsApp"
                      />
                      <span className="phone-text cursor-pointer">(11) 99873-4859</span>
                    </div>

                    <div className="contact-phone">
                      <img
                        src="./image/contato/telefone.png"
                        alt="Telefone"
                      />
                      <span className="phone-text">(11) 3873-4859</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button className="contact-cta">
                  <span className="cta-text">Reserve um horário para você!</span>
                  <div className="contact-cta-icon">
                    <ArrowUpRight className="w-6 h-6 text-black" />
                  </div>
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import '../styles/pages/team-section.css';

const members = [
  {
    name: 'Thays Henriques',
    role: 'Construção Digital, Sistemas',
    bio: 'Mestra das interfaces modernas e responsivas, DOMINADORA do Front-End, unindo técnica, criatividade e empatia em cada pixel!',
    image: './image/home/thays.png',
    socials: {
      fb: 'https://facebook.com',
      ig: 'https://www.instagram.com/thayshds/',
      li: 'https://www.linkedin.com/in/thays-hds/',
    },
  },
  {
    name: 'Lucas Rodrigues',
    role: 'Direção de Arte, User Experience',
    bio: 'Conhecedor das mais poderosas forças conhecidas e não conhecidas pela raça humana. O TODO PODEROSO UX/UI designer!',
    image: './image/home/lucas.png',
    socials: {
      fb: 'https://facebook.com',
      ig: 'https://www.instagram.com/kindimstudio/',
      li: 'https://www.linkedin.com/in/lucas-rodrigues-17769912b/',
    },
  },
];

export const TeamSection: React.FC = () => {
  return (
    <section className="team-section relative overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-48 z-20 bg-gradient-to-b from-coffee-950 via-transparent to-transparent
  opacity-100 pointer-events-none"
      ></div>
      <div className="team-bg">
        <img src="./image/home/equipe.png" alt="Coffee Shop" />
        <div className="team-overlay" />
      </div>

      <div className="team-container">
        {members.map((member, idx) => (
          <div key={idx} className="team-card group">
            <div className="team-card-line top" />

            <div className="team-avatar">
              <img src={member.image} alt={member.name} />
            </div>

            <div className="team-content">
              <h3>{member.name}</h3>
              <p className="team-role">{member.role}</p>

              <div className="team-socials">
                {member.socials.fb && (
                  <a
                    href={member.socials.fb}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook />
                  </a>
                )}

                {member.socials.ig && (
                  <a
                    href={member.socials.ig}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram />
                  </a>
                )}

                {member.socials.li && (
                  <a
                    href={member.socials.li}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin />
                  </a>
                )}
              </div>

              <p className="team-bio">{member.bio}</p>
            </div>

            <div className="team-card-line bottom" />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-coffee-950 via-transparent to-transparent opacity-98"></div>
    </section>
  );
};

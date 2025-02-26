import React from 'react';
import Footer from '../components/footer/index.jsx';
import Header from './../components/header/index.jsx';
import styles from './Sobre.module.css'; // Importando o módulo de estilo

export default function Sobre() {
  return (
    <>
      <Header />
      <main className={styles.aboutContainer}>
        <h1 className={styles.aboutHeading}>Sobre Nós</h1>
        <p className={styles.aboutText}>
          Bem-vindo ao <span className={styles.aboutEmphasis}>Byte News</span>, sua fonte confiável de notícias tecnológicas.
        </p>
        <p className={styles.aboutText}>
          Nossa missão é fornecer as <span className={styles.aboutEmphasis}>notícias mais atualizadas</span> sobre inovações tecnológicas, ciência, espaço e muito mais.
        </p>
        <p className={styles.aboutText}>
          Este projeto é orgulhosamente desenvolvido por <span className={styles.aboutEmphasis}>Felipe Rodrigues Pereira</span>, 
          aluno do curso <span className={styles.aboutEmphasis}>DEV Foundations</span>, registro de matrícula  
          <span className={styles.aboutEmphasis}> RM356079</span>.
        </p>
        <p className={styles.aboutText}>
          Este site faz parte do <span className={styles.aboutEmphasis}>Hackathon Challenge</span>, um evento 
          que estimula a inovação e a aplicação prática de habilidades de desenvolvimento. Felipe tem 
          muito orgulho em apresentar esta solução, que demonstra comprometimento e paixão pelo que faz.
        </p>
      </main>
      <Footer />
    </>
  );
}
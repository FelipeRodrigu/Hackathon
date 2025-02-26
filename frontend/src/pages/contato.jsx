import React from 'react';
import Footer from '../components/footer/index.jsx';
import Header from './../components/header/index.jsx';
import styles from './Contato.module.css'; // Importando o módulo de estilo

export default function Contato() {
  return (
    <>
      <Header />
      <main className={styles.contactContainer}>
        <h1 className={styles.contactHeading}>Contato</h1>
        <p className={styles.contactText}>Entre em contato conosco através dos seguintes meios:</p>
        <ul className={styles.contactList}>
          <li className={styles.contactListItem}>
            Email: <a href="mailto:contato@byte-news.com">contato@byte-news.com</a>
          </li>
          <li className={styles.contactListItem}>Telefone: (11) 1234-5678</li>
          <li className={styles.contactListItem}>Endereço: Rua Exemplo, 123 - Cidade, Estado</li>
        </ul>
      </main>
      <Footer />
    </>
  );
}
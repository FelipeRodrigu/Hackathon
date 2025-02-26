import React, { useState } from 'react';
import { Link } from "react-router-dom";
import ModalAdicionarNoticia from "./../modal"; // Ajuste o caminho se necessário
import styles from "./index.module.css";
import logo from "./../../assets/logo.jpg";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <header className={styles.headerSection}>
      <div className={styles.headerLogo}>
        <img src={logo} alt="logo" />
      </div>
      <nav className={styles.headerNav}>
        <ul><li><Link to="/">HOME</Link></li></ul>
        <ul><li><Link to="/contato">CONTATO</Link></li></ul>
        <ul><li><Link to="/sobre">SOBRE</Link></li></ul>
        <ul><li className={styles.addNews}><button onClick={openModal}>ADICIONAR NOTÍCIA</button></li></ul>
      </nav>

      <ModalAdicionarNoticia isOpen={isModalOpen} onRequestClose={closeModal} />
    </header>
  );
}
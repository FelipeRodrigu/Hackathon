import React from 'react';
import { Link } from 'react-router-dom'; // Importe o Link
import styles from "./index.module.css";


const Footer = () => {
    return (
        <footer className={styles.siteFooter}>
            <div className={styles.footerContainer}>
                <p>© 2025 Byte News. Todos os direitos reservados.</p>
                <nav className={styles.footerNav}>
                    <Link to="/sobre">Sobre</Link> | {/* Mudei de href para to */}
                    <Link to="/contato">Contato</Link> | {/* Mudei de href para to */}
                    <a href="#privacy">Privacidade</a>
                </nav>
                <div className={styles.socialMedia}>
                    <a href="https://facebook.com"  rel="noopener noreferrer">Facebook</a>
                    <a href="https://twitter.com"  rel="noopener noreferrer">Twitter</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
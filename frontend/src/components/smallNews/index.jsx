import React, { useState } from 'react';
import styles from './index.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { editarNoticia, deletarNoticia } from "../services/noticiaService";
import ModalEditarNoticia from '../modal/ModalEditarNoticia'; // Import the new modal component

export default function SmallNews({ kEy, src, titulo, conteudo, autor, categoria, dataPublicacao }) {
const navigate = useNavigate();
const [isModalOpen, setIsModalOpen] = useState(false);

const openModal = () => setIsModalOpen(true);
const closeModal = () => setIsModalOpen(false);

const handleDeletar = async () => {
    console.log("ID da notícia a deletar:", kEy);
    if (!kEy) {
        console.error("ID inválido para exclusão");
        return;
    }
    try {
        await deletarNoticia(kEy);
        alert("Notícia deletada com sucesso!");
        navigate("/");
    } catch (error) {
        console.error("Erro ao deletar a notícia:", error);
    }
};

return (
    <section className={styles.smallNewsContainer}>
        <div className={styles.smallNewsImg}>
            <img src={src} alt={titulo} />
        </div>
        <div className={styles.smallNewsWrapper}>
            <h3>{titulo}</h3>
            <p>{conteudo}</p>            
            <p><strong>Data de publicação: </strong>{new Date(dataPublicacao).toLocaleDateString('pt-BR')}</p>
            <p><strong>Autor: </strong>{autor}</p>
            <p><strong>Categoria: </strong>{categoria}</p>
          </div>
        <div className={styles.buttonContainer}>
            <button className={styles.editButton} onClick={openModal}>Editar</button>
            <button className={styles.deleteButton} onClick={handleDeletar}>Deletar</button>
        </div>
        <div className={styles.smallNewsLink}><Link to={`/noticia/${encodeURIComponent(src)}/${encodeURIComponent(titulo)}/${encodeURIComponent(conteudo)}/${encodeURIComponent(autor)}/${encodeURIComponent(categoria)}`}>Veja Mais</Link></div>
        <ModalEditarNoticia isOpen={isModalOpen} onRequestClose={closeModal} noticia={{ kEy, src, titulo, conteudo, autor, categoria }} />
    </section>
)}
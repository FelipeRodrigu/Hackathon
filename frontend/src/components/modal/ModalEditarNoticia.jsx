import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import styles from './index.module.css';

Modal.setAppElement('#root');

const ModalEditarNoticia = ({ isOpen, onRequestClose, noticia }) => {
    const [titulo, setTitulo] = useState(noticia.titulo);
    const [conteudo, setConteudo] = useState(noticia.conteudo);
    const [autor, setAutor] = useState(noticia.autor);
    const [categoria, setCategoria] = useState(noticia.categoria);
    const [urlImagem, setUrlImagem] = useState(noticia.src);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const updatedNoticia = {
            titulo,
            conteudo,
            imagem: urlImagem,
            autor,
            categoria,
        };

        try {
            await axios.patch(`http://localhost:8000/api/noticias/${noticia.kEy}`, updatedNoticia, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            alert('Notícia editada com sucesso! Recarregue a página para ver as alterações.');
            onRequestClose();
        } catch (error) {
            console.error('Erro ao editar notícia:', error.response || error.message || error);
            alert('Houve um erro ao editar a notícia.');
        }
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Editar Notícia"
            className={styles.modal}
            overlayClassName={styles.overlay}
        >
            <h2>Editar Notícia</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} placeholder="Título" required />
                <input type="text" value={urlImagem} onChange={(e) => setUrlImagem(e.target.value)} placeholder="URL da Imagem" required />
                <textarea value={conteudo} onChange={(e) => setConteudo(e.target.value)} placeholder="Conteúdo" required />
                <input type="text" value={autor} onChange={(e) => setAutor(e.target.value)} placeholder="Autor" required />
                <select value={categoria} onChange={(e) => setCategoria(e.target.value)} required>
                    <option value="">Selecionar Categoria</option>
                    <option value="Tecnologia">Tecnologia</option>
                    <option value="Games">Games</option>
                    <option value="Espaço">Espaço</option>
                    <option value="Ciência">Ciência</option>
                    <option value="Inovação">Inovação</option>
                    <option value="Design">Design</option>
                    <option value="IA">IA</option>
                </select>
                <button type="submit">Salvar Alterações</button>
                <button type="button" className="cancel" onClick={onRequestClose}>Cancelar</button>
            </form>
        </Modal>
    );
};

export default ModalEditarNoticia;

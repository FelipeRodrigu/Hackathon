import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import styles from './index.module.css';

// Acessibilidade para React Modal
Modal.setAppElement('#root');

const ModalAdicionarNoticia = ({ isOpen, onRequestClose }) => {
  const [titulo, setTitulo] = useState('');
  const [conteudo, setConteudo] = useState('');
  const [autor, setAutor] = useState('');
  const [categoria, setCategoria] = useState('');
  const [dataPublicacao, setDataPublicacao] = useState('');
  const [urlImagem, setUrlImagem] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const novaNoticia = {
      titulo,
      conteudo,
      imagem: urlImagem, // Use o campo 'imagem' para a URL
      autor,
      categoria,
      dataPublicacao: new Date(dataPublicacao).toISOString(), // Formatar a data corretamente
    };

    console.log('Enviando notícia:', novaNoticia);

    try {
      const response = await axios.post('http://localhost:8000/api/noticias', novaNoticia, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      alert('Notícia adicionada com sucesso!');
      onRequestClose(); // Fechar o modal após enviar a notícia
    } catch (error) {
      console.error('Erro ao adicionar notícia:', error.response || error.message || error);
      alert('Houve um erro ao adicionar a notícia.');
    }

    // Reiniciar formulários
    setTitulo('');
    setConteudo('');
    setAutor('');
    setCategoria('');
    setDataPublicacao('');
    setUrlImagem('');
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Adicionar Notícia"
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <h2>Adicionar Nova Notícia</h2>
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
        <input type="date" value={dataPublicacao} onChange={(e) => setDataPublicacao(e.target.value)} required />
        <button type="submit">Adicionar Notícia</button>
        <button type="button" className="cancel" onClick={onRequestClose}>Cancelar</button>
      </form>
    </Modal>
  );
};

export default ModalAdicionarNoticia;
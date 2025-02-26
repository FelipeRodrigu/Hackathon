// frontend/src/components/TodasNoticias.jsx

import React, { useState, useEffect } from 'react';

const TodasNoticias = () => {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const fetchNoticias = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/noticias');
        const data = await response.json();
        setNoticias(data);
      } catch (error) {
        console.error('Erro ao buscar todas as notícias:', error);
      }
    };

    fetchNoticias();
  }, []);

  return (
    <div>
      <h2>Todas as Notícias</h2>
      <ul>
        {noticias.map((noticia) => (
          <li key={noticia._id}>
            <h3>{noticia.titulo}</h3>
            <img src={noticia.imagem} alt={noticia.titulo} style={{ width: '200px' }} />
            <p>{noticia.conteudo}</p>
            <p><strong>Autor: </strong>{noticia.autor}</p>
            <p><strong>Categoria: </strong>{noticia.categoria}</p>
            <p><strong>ID: </strong>{noticia._id}</p>
            <p><strong>Data: </strong>{new Date(noticia.dataPublicacao).toLocaleDateString('pt-BR')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodasNoticias;
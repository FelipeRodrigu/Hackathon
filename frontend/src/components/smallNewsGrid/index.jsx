import styles from "./index.module.css";
import SmallNews from "./../smallNews/index.jsx";
import React, { useState, useEffect } from 'react';

export default function SmallNewsGrid({ categoria }) {

    const [noticias, setNoticias] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNoticias = async () => {
            setLoading(true);
            try {
                let url;
                if (categoria === "todos") {
                    url = 'http://localhost:8000/api/noticias';
                } else {
                    url = `http://localhost:8000/api/noticias/categoria/${encodeURIComponent(categoria)}`;
                }

                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error(`Erro na requisição: ${response.statusText}`);
                }

                const data = await response.json();

                if (Array.isArray(data)) {
                    // Ordenar notícias por data de publicação, mais recentes primeiro
                    const sortedData = data.sort((a, b) => new Date(b.dataPublicacao) - new Date(a.dataPublicacao));
                    setNoticias(sortedData);
                } else {
                    setError('Formato de dados inesperado.');
                }
            } catch (err) {
                console.error(`Erro ao buscar notícias:`, err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchNoticias();
    }, [categoria]);

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (error) {
        return <div>Erro: {error}</div>;
    }

    return (
        <div className={styles.smallNewsGridContainer}>
            {noticias.map((noticia) => (
                <SmallNews
                    kEy={noticia._id} // Passando o id como prop
                    src={noticia.imagem}
                    titulo={noticia.titulo}
                    conteudo={noticia.conteudo}
                    autor={noticia.autor}
                    categoria={noticia.categoria}
                    dataPublicacao={noticia.dataPublicacao}
                />
            ))}
        </div>
    );
}
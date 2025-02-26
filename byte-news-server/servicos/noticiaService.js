import Noticia from '../models/noticias.js';

// Função genérica para filtrar notícias por categoria (insensível a maiúsculas)
export const filtrarNoticiasPorCategoria = async (categoria) => {
    try {
        return await Noticia.find({ categoria: { $regex: new RegExp(`^${categoria.trim()}$`, 'i') } });
    } catch (error) {
        console.error(`❌ Erro ao buscar notícias de ${categoria}:`, error.message);
        throw new Error(`Erro ao buscar notícias de ${categoria}`);
    }
};
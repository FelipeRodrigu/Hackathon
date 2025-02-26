import Noticia from '../models/noticias.js';    
import { filtrarNoticiasPorCategoria } from '../servicos/noticiaService.js';

// Criar nova notícia
export const criarNoticia = async (req, res) => {
    try {
        const { titulo, conteudo, categoria, autor, imagem, dataPublicacao } = req.body;

        if (!imagem) {
            return res.status(400).json({ error: 'A URL da imagem é obrigatória' });
        }

        const novaNoticia = new Noticia({
            titulo,
            conteudo,
            imagem,
            autor,
            categoria,
            dataPublicacao
        });

        await novaNoticia.save();
        res.status(201).json(novaNoticia);
    } catch (error) {
        console.error('Erro ao criar notícia:', error.message);
        res.status(500).json({ error: 'Erro ao criar notícia' });
    }
};

// Obter todas as notícias
export const obterNoticias = async (req, res) => {
    try {
        const noticias = await Noticia.find();
        res.json(noticias);
    } catch (error) {
        console.error('Erro ao buscar notícias:', error.message);
        res.status(500).json({ error: 'Erro ao buscar notícias' });
    }
};

// Deletar notícia
export const deletarNoticia = async (req, res) => {
    try {
        const noticia = await Noticia.findById(req.params.id);
        if (!noticia) {
            return res.status(404).json({ error: 'Notícia não encontrada' });
        }

        await Noticia.deleteOne({ _id: req.params.id });
        res.json({ message: 'Notícia removida com sucesso' });
    } catch (error) {
        console.error('Erro ao excluir notícia:', error.message);
        res.status(500).json({ error: 'Erro ao excluir notícia' });
    }
};

// Atualizar notícia
export const atualizarNoticia = async (req, res) => {
    try {
        const updates = req.body;
        const noticiaAtualizada = await Noticia.findByIdAndUpdate(req.params.id, updates, {
            new: true,
            runValidators: true
        });

        if (!noticiaAtualizada) {
            return res.status(404).json({ error: 'Notícia não encontrada' });
        }

        res.json(noticiaAtualizada);
    } catch (error) {
        console.error('Erro ao atualizar notícia:', error.message);
        res.status(400).json({ error: 'Erro ao atualizar notícia' });
    }
};

// Obter notícias por categoria

export const obterNoticiasPorCategoria = async (req, res) => {
    try {
        const { categoria } = req.params; // Captura o nome da categoria da URL
        if (!categoria) {
            return res.status(400).json({ error: 'Categoria é necessária' });
        }

        console.log(`🔎 Buscando notícias da categoria: ${categoria}`);
        const noticias = await filtrarNoticiasPorCategoria(categoria);

        if (!noticias || noticias.length === 0) {
            return res.status(404).json({ message: `Nenhuma notícia encontrada para a categoria: ${categoria}` });
        }

        console.log(`📢 Notícias encontradas:`, noticias);
        res.json(noticias);
    } catch (error) {
        console.error('❌ Erro ao buscar notícias por categoria:', error.message);
        res.status(500).json({ error: 'Erro ao buscar notícias por categoria' });
    }
};
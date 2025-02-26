// rotas/noticia.js
import express from 'express';

import {
    criarNoticia,
    obterNoticias,
    deletarNoticia,
    atualizarNoticia,
    obterNoticiasPorCategoria,
} from '../controllers/noticiaController.js';

const router = express.Router();

router.post('/', criarNoticia);
router.get('/', obterNoticias);
router.delete('/:id', deletarNoticia);
router.patch('/:id', atualizarNoticia);

// Criar rotas individuais para cada categoria
router.get('/categoria/:categoria', obterNoticiasPorCategoria);

export default router;

